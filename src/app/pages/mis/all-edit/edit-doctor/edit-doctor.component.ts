import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoverComponent } from '../../../../components/main/shared/cover/cover.component';
import { ConfirmModalComponent } from '../../../../components/main/shared/all-modals/confirm-modal/confirm-modal.component';
import { DoctorsService } from '../../../../services/main/doctors.service';
import { ImgbbService } from '../../../../services/main/imgbb.service';
import { DepartmentService } from '../../../../services/main/department.service';

@Component({
    selector: 'app-edit-doctor',
    standalone: true,
    templateUrl: './edit-doctor.component.html',
    imports: [CoverComponent, CommonModule, FormsModule, ConfirmModalComponent]
})
export class EditDoctorComponent {
  imgbbService = inject(ImgbbService);
  doctorsService = inject(DoctorsService);
  departmentService = inject(DepartmentService);
  route = inject(ActivatedRoute);
  
  id: any | null = null;
  model?: any;
  departments: any;
  paramsSubscription?: Subscription;
  editDoctorSubscription?: Subscription;
  confirmModal: boolean = false;

  closeModal() {
    this.confirmModal = false;
  }

  constructor() { }
  ngOnInit(): void {
    this.departmentService.getCompanyDepartment().subscribe(data => {
      this.departments = data;
    });
    this.paramsSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
        if (this.id) {
          this.doctorsService.getDoctor(this.id)
            .subscribe({
              next: (response) => {
                this.model = response;
              }
            });
        }
      }
    });
  }

  onFormSubmit(): void {
    const formData = new FormData();

    formData.append('CompanyID', this.model.companyID || "");
    formData.append('DrSerial', this.model.drSerial || "");
    formData.append('DrName', this.model.drName || "");
    formData.append('Degree', this.model.degree || "");
    formData.append('Designation', this.model.designation || "");
    formData.append('Specialty', this.model.specialty || "");
    formData.append('DepartmentId', this.model.departmentId || "");
    formData.append('Phone', this.model.phone || "");
    formData.append('VisitTime', this.model.visitTime || "");
    formData.append('Room', this.model.room || "");
    formData.append('Description', this.model.description || "");
    formData.append('Additional', this.model.additional || "");
    formData.append('Notice', this.model.notice || "");
    formData.append('ImageUrl', this.model.imageUrl || "");
    formData.append('SerialBlock', this.model.serialBlock || "");
    formData.append('NewPatientLimit', this.model.newPatientLimit || "");
    formData.append('OldPatientLimit', this.model.oldPatientLimit || "");
    formData.append('Fee', this.model.fee || "");

    if (this.id) {
      this.editDoctorSubscription = this.doctorsService.updateDoctor(this.id, formData)
        .subscribe({
          next: (response) => {
            // toast
            this.confirmModal = true;
          }
        });
    }
  };

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
    this.editDoctorSubscription?.unsubscribe();
  }

}
