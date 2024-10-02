import { Component, Input } from '@angular/core';
import { DoctorDetailsComponent } from '../shared/modal/doctor-details/doctor-details.component';
import { AppointmentModalComponent } from '../../main/shared/all-modals/appointment-modal/appointment-modal.component';

@Component({
    selector: 'app-doctor-card',
    standalone: true,
    templateUrl: './doctor-card.component.html',
    imports: [DoctorDetailsComponent, AppointmentModalComponent, AppointmentModalComponent]
})
export class DoctorCardComponent {
  @Input() 
  doctor: any;
  @Input()
  department!: string;
  showModal: boolean = false;
  showAppointment: boolean = false;
  doctorMale = '../../../assets/images/doctor.png';

  constructor() { }

  handleClick() {
    this.showAppointment = true;
    this.showModal = false;
  }

  openDoctorDetails() {
    this.showModal = true;
  }

  openAppointment() {
    this.showAppointment = true;
  }

  closeDoctorDetails() {
    this.showModal = false;
  }

  closeAppointment() {
    this.showAppointment = false;
  }

}
