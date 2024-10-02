import { Component, inject } from '@angular/core';
import { CoverComponent } from '../../../../components/main/shared/cover/cover.component';
import { FormsModule } from '@angular/forms';
import { ConfirmModalComponent } from '../../../../components/main/shared/all-modals/confirm-modal/confirm-modal.component';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../../../services/main/department.service';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CoverComponent, FormsModule, ConfirmModalComponent],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  DepartmentService = inject(DepartmentService);
  
  model: any;
  private addDepartmentSubscription?: Subscription;
  confirmModal: boolean = false;

  closeModal() {
    this.confirmModal = false;
  }

  constructor() {
    // Initialize model properties
    this.model = {
      companyID: environment.hospitalCode,
      departmentName: "",
      description: "",
      imgUrl: "",
    };
  }

  // Handle form submission
  onFormSubmit(): void {
    const formData = new FormData();

    formData.append('CompanyID', this.model.companyID);
    formData.append('DepartmentName', this.model.departmentName);
    formData.append('Description', this.model.description);
    formData.append('ImgUrl', this.model.imgUrl);

    this.addDepartmentSubscription = this.DepartmentService.addDepartment(formData)
      .subscribe({
        next: (response) => {
          // toast
          this.confirmModal = true;
        },
        error: (error) => {
          console.error('Error adding Department:', error);
        }
      });
  }

  // Unsubscribe from the subscription to avoid memory leaks
  ngOnDestroy(): void {
    this.addDepartmentSubscription?.unsubscribe();
  }

}
