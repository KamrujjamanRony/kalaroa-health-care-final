import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable, Subscription, map } from 'rxjs';
import { CoverComponent } from '../../../../components/main/shared/cover/cover.component';
import { environment } from '../../../../../environments/environments';
import { HealthNewsService } from '../../../../services/main/healthNews.service';
import { DeleteConfirmationModalComponent } from '../../../../components/main/shared/all-modals/delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-health-news-list',
  standalone: true,
  imports: [CommonModule, CoverComponent, RouterLink, MatDialogModule],
  templateUrl: './health-news-list.component.html',
  styleUrl: './health-news-list.component.css'
})
export class HealthNewsListComponent {
  healthNewsService = inject(HealthNewsService);
  dialog = inject(MatDialog);

  emptyImg: any = environment.emptyImg;
  loading: boolean = true;
  healthNews$?: Observable<any[]>;
  deleteHealthNewsSubscription?: Subscription;
  isModalOpen = false;
  
  constructor() { }

  ngOnInit(): void {
    if (!this.healthNews$) {
      this.loading = false;
      this.healthNews$ = this.healthNewsService.getCompanyHealthNews().pipe(
        map(doctors => doctors.sort((a, b) => a.healthNewsSerial - b.healthNewsSerial))
      );
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
    this.deleteHealthNewsSubscription = this.healthNewsService.deleteHealthNews(id).subscribe({
      next: () => {
        this.healthNews$ = this.healthNewsService.getCompanyHealthNews();
        this.closeModal();
      },
    });
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  ngOnDestroy(): void {
    this.deleteHealthNewsSubscription?.unsubscribe();
  }

}
