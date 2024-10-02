import { Component, Input, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { DoctorsService } from '../../../services/main/doctors.service';
import { ActivatedRoute } from '@angular/router';
import { CoverComponent } from "../../../components/main/shared/cover/cover.component";
import { AppointmentModalComponent } from "../../../components/main/shared/all-modals/appointment-modal/appointment-modal.component";
import { DepartmentService } from '../../../services/serial/department.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css',
  imports: [CoverComponent, AppointmentModalComponent]
})
export class DoctorComponent {
  doctorsService = inject(DoctorsService);
  departmentService = inject(DepartmentService);
  route = inject(ActivatedRoute);

  @Input()
  doctor: any;
  
  emptyImg: any = '../../../../assets/images/doctor.png';
  id: any | null = null;
  paramsSubscription?: Subscription;
  doctorDetails?: any;
  department: any;
  showAppointment: boolean = false;

  handleClick() {
    this.showAppointment = true;
  }

  openAppointment() {
    this.showAppointment = true;
  }

  closeAppointment() {
    this.showAppointment = false;
  }

  constructor() { };

  ngOnInit(): void {
    this.paramsSubscription = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id) {
        this.doctorsService.getDoctor(this.id).subscribe({
          next: (data: any | undefined) => {
            this.doctorDetails = data;
            this.department = this.departmentService.getDepartmentById(this.doctorDetails?.departmentId);
          }
        });
      }
    })
  };

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

}
