import { Component, inject } from '@angular/core';
import { CoverComponent } from '../../../../components/main/shared/cover/cover.component';
import { FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from '../../../../components/main/shared/all-modals/confirm-modal/confirm-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../../../services/main/department.service';

@Component({
  selector: 'app-edit-department',
  standalone: true,
  imports: [CoverComponent, FormsModule, ConfirmModalComponent],
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})
export class EditDepartmentComponent {
  DepartmentService = inject(DepartmentService);
  route = inject(ActivatedRoute);
  
  id: any = null;
  DepartmentInfo?: any;
  paramsSubscription?: Subscription;
  editDepartmentSubscription?: Subscription;
  confirmModal: boolean = false;

  closeModal() {
    this.confirmModal = false;
  }

  constructor() { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.DepartmentService.getDepartment(this.id)
            .subscribe({
              next: (response) => {
                this.DepartmentInfo = response;
              }
            });
        }
      }
    });
  }

  onFormSubmit(): void {

    const formData = new FormData();

    formData.append('CompanyID', this.DepartmentInfo?.companyID || "");
    formData.append('DepartmentName', this.DepartmentInfo?.departmentName || "");
    formData.append('Description', this.DepartmentInfo?.description || "");
    formData.append('ImgUrl', this.DepartmentInfo?.imgUrl || "");

    if (this.id) {
      this.editDepartmentSubscription = this.DepartmentService.updateDepartment(this.id, formData)
        .subscribe({
          next: () => {
            // toast
            this.confirmModal = true;
          }
        });
    }
  };

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editDepartmentSubscription?.unsubscribe();
  }

}
