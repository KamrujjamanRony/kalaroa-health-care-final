import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CoverComponent } from '../../../../components/main/shared/cover/cover.component';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DepartmentService } from '../../../../services/main/department.service';
import { environment } from '../../../../../environments/environments';
import { Observable, Subscription } from 'rxjs';
import { DeleteConfirmationModalComponent } from '../../../../components/main/shared/all-modals/delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, CoverComponent, RouterLink, MatDialogModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent {
  departmentService = inject(DepartmentService);
  dialog = inject(MatDialog);

  emptyImg: any = environment.emptyImg;
  departments$?: Observable<any[]>;
  deleteDepartmentSubscription?: Subscription;
  isModalOpen = false;
  
  constructor() { }

  ngOnInit(): void {
    if (!this.departments$) {
      this.departments$ = this.departmentService.getCompanyDepartment();
    }

  }
  
  onDelete(id: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModalComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.confirmDelete(id)
      }
    });
  }

  confirmDelete(id: any): void {
    this.deleteDepartmentSubscription = this.departmentService.deleteDepartment(id).subscribe({
      next: () => {
        this.departments$ = this.departmentService.getCompanyDepartment();
        this.closeModal();
      },
    });
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  ngOnDestroy(): void {
    this.deleteDepartmentSubscription?.unsubscribe();
  }

}
