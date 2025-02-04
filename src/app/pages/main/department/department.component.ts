import { Component, inject } from '@angular/core';
import { TbDental } from "react-icons/tb";
import { MdMonitorHeart } from "react-icons/md";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { injectQuery } from '@tanstack/angular-query-experimental';
import { PageHeaderComponent } from '../../../components/serial/shared/page-header/page-header.component';
import { CategoryComponent } from '../../../components/main/shared/all-cards/category/category.component';
import { DepartmentService } from '../../../services/serial/department.service';
import { CoverComponent } from "../../../components/main/shared/cover/cover.component";

@Component({
    selector: 'app-department',
    standalone: true,
    templateUrl: './department.component.html',
    styleUrl: './department.component.css',
    imports: [PageHeaderComponent, CategoryComponent, CoverComponent]
})
export class DepartmentComponent {
  departmentService = inject(DepartmentService)
  icons = { TbDental, MdMonitorHeart, FaHouseChimneyMedical, FaBriefcaseMedical, FaHandHoldingMedical, FaMicroscope };

  constructor() { }

  ngOnInit(): void {}

  query = injectQuery(() => ({
    queryKey: ['departments'],
    queryFn: () => this.departmentService.getDepartments(),
  }))
}
