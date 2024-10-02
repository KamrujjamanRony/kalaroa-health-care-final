import { Component, inject } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoverComponent } from '../../../../components/main/shared/cover/cover.component';
import { DoctorsService } from '../../../../services/main/doctors.service';
import { AuthService } from '../../../../services/serial/auth.service';
import { DepartmentService } from '../../../../services/main/department.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-doctors-list',
    standalone: true,
    templateUrl: './doctors-list.component.html',
    imports: [CoverComponent, CommonModule, RouterLink, FormsModule]
})
export class DoctorsListComponent {
  authService = inject(AuthService);
  doctorsService = inject(DoctorsService);
  departmentService = inject(DepartmentService);
  router = inject(Router);
  user: any;

  doctorMale: any = '../../../../../assets/images/doctor.png';

  doctors$?: Observable<any[]>;
  deleteDoctorSubscription?: Subscription;
  selectedDepartment: string = '';
  departmentWithDoctor: any = [];

  constructor() { }

  filterDoctorsByDepartment(doctors: any): any {
    if (this.selectedDepartment == "") {
      return doctors; // If search query is empty, return all doctors
    }

    const selected = doctors.filter((data: any) => data && data.departmentId == this.selectedDepartment);
    this.selectedDepartment = selected[0]?.departmentId;
    return selected;
  }

  onDelete(id: any): void {
    console.log(id);
    this.deleteDoctorSubscription = this.doctorsService.deleteDoctor(id).subscribe({
      next: () => {
        this.doctors$ = this.doctorsService.getCompanyDoctor();
      }
    })
  }


  ngOnInit(): void {
    this.doctorsService.getCompanyDoctor().subscribe(doctorsData => {
      const departmentIds = doctorsData.map(data => data.departmentId);
      this.departmentService.getCompanyDepartment().subscribe(data => this.departmentWithDoctor = data.filter(data => departmentIds.includes(data.id)));
    });

    this.user = this.authService.getUser();
    this.doctors$ = this.doctorsService.getCompanyDoctor().pipe(
      map(doctors => doctors.sort((a, b) => a.drSerial - b.drSerial))
    );
  }

  ngOnDestroy(): void {
    this.deleteDoctorSubscription?.unsubscribe();
  }

}
