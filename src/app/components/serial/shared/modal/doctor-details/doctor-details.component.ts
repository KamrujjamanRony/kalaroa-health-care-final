import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
import { DepartmentService } from '../../../../../services/serial/department.service';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [],
  templateUrl: './doctor-details.component.html'
})
export class DoctorDetailsComponent {
  @Input() doctor: any;
  @Output() closeDoctorDetails = new EventEmitter<void>();
  @Output() handleClick = new EventEmitter<void>();
  departmentService = inject(DepartmentService);
  department: any;

  constructor(){}

  closeDoctorModal(): void {
    this.closeDoctorDetails.emit();
  }
  showAppointmentModal(): void {
    this.handleClick.emit();
  }

}
