import { Routes } from '@angular/router';
import { MainComponent } from './pages/layouts/main/main.component';
import { HomeComponent } from './pages/main/home/home.component';
import { AllDoctorsComponent } from './pages/main/all-doctors/all-doctors.component';
import { DoctorComponent } from './pages/main/doctor/doctor.component';
import { AdminComponent } from './pages/layouts/admin/admin.component';
import { AboutComponent } from './pages/main/about/about.component';
import { ContactComponent } from './pages/main/contact/contact.component';
import { InstrumentGalleryComponent } from './pages/main/gallery/instrument-gallery/instrument-gallery.component';
import { HospitalGalleryComponent } from './pages/main/gallery/hospital-gallery/hospital-gallery.component';
import { DoctorsListComponent } from './pages/mis/all-list/doctors-list/doctors-list.component';
import { AddDoctorComponent } from './pages/mis/all-add/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './pages/mis/all-edit/edit-doctor/edit-doctor.component';
import { AboutUsComponent } from './pages/mis/about-us/about-us.component';
import { ContactUsComponent } from './pages/mis/contact-us/contact-us.component';
import { CarouselListComponent } from './pages/mis/all-list/carousel-list/carousel-list.component';
import { AddCarouselComponent } from './pages/mis/all-add/add-carousel/add-carousel.component';
import { EditCarouselComponent } from './pages/mis/all-edit/edit-carousel/edit-carousel.component';
import { InstrumentListComponent } from './pages/mis/all-list/instrument-list/instrument-list.component';
import { AddInstrumentComponent } from './pages/mis/all-add/add-instrument/add-instrument.component';
import { EditInstrumentComponent } from './pages/mis/all-edit/edit-instrument/edit-instrument.component';
import { GalleryListComponent } from './pages/mis/all-list/gallery-list/gallery-list.component';
import { AddGalleryComponent } from './pages/mis/all-add/add-gallery/add-gallery.component';
import { EditGalleryComponent } from './pages/mis/all-edit/edit-gallery/edit-gallery.component';
import { HealthNewsListComponent } from './pages/mis/all-list/health-news-list/health-news-list.component';
import { AddHealthNewsComponent } from './pages/mis/all-add/add-health-news/add-health-news.component';
import { EditHealthNewsComponent } from './pages/mis/all-edit/edit-health-news/edit-health-news.component';
import { HospitalNewsListComponent } from './pages/mis/all-list/hospital-news-list/hospital-news-list.component';
import { AddHospitalNewsComponent } from './pages/mis/all-add/add-hospital-news/add-hospital-news.component';
import { EditHospitalNewsComponent } from './pages/mis/all-edit/edit-hospital-news/edit-hospital-news.component';
import { HospitalNewsComponent } from './pages/main/news/hospital-news/hospital-news.component';
import { HealthNewsComponent } from './pages/main/news/health-news/health-news.component';
import { DepartmentComponent } from './pages/main/department/department.component';
import { MainDoctorListComponent } from './pages/main/doctors-list/doctors-list.component';
import { ServicesListComponent } from './pages/mis/all-list/services-list/services-list.component';
import { AddServicesComponent } from './pages/mis/all-add/add-services/add-services.component';
import { EditServicesComponent } from './pages/mis/all-edit/edit-services/edit-services.component';
import { OurServicesComponent } from './pages/main/our-services/our-services.component';
import { CareerComponent } from './pages/main/career/career.component';
import { CareerListComponent } from './pages/mis/all-list/career-list/career-list.component';
import { AddCareerComponent } from './pages/mis/all-add/add-career/add-career.component';
import { EditCareerComponent } from './pages/mis/all-edit/edit-career/edit-career.component';
import { DepartmentListComponent } from './pages/mis/all-list/department-list/department-list.component';
import { AddDepartmentComponent } from './pages/mis/all-add/add-department/add-department.component';
import { EditDepartmentComponent } from './pages/mis/all-edit/edit-department/edit-department.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'doctors',
        component: AllDoctorsComponent
      },
      {
        path: 'doctor/:id',
        component: DoctorComponent
      },
      {
        path: 'gallery/instrument',
        component: InstrumentGalleryComponent
      },
      {
        path: 'gallery/hospital',
        component: HospitalGalleryComponent
      },
      {
        path: 'career',
        component: CareerComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'hospital-news',
        component: HospitalNewsComponent
      },
      {
        path: 'health-news',
        component: HealthNewsComponent
      },
      { path: 'departments', component: DepartmentComponent },
      {
        path: 'department/:department',
        component: MainDoctorListComponent
      },
    ],
  },
  {
    path: 'mis',
    component: AdminComponent,
    children: [
      { path: '', component: CarouselListComponent },
      { path: 'add', component: AddCarouselComponent },
      { path: 'edit/:id', component: EditCarouselComponent },
      { path: 'doctors', component: DoctorsListComponent },
      { path: 'doctors/add', component: AddDoctorComponent },
      { path: 'doctors/edit/:id', component: EditDoctorComponent },
      { path: 'about-us/:id', component: AboutUsComponent },
      { path: 'contact-us/:id', component: ContactUsComponent },
      { path: 'carousel', component: CarouselListComponent },
      { path: 'carousel/add', component: AddCarouselComponent },
      { path: 'carousel/edit/:id', component: EditCarouselComponent },
      { path: 'instrument-list', component: InstrumentListComponent },
      { path: 'instrument-list/add', component: AddInstrumentComponent },
      { path: 'instrument-list/edit/:id', component: EditInstrumentComponent },
      { path: 'service-list', component: ServicesListComponent },
      { path: 'service-list/add', component: AddServicesComponent },
      { path: 'service-list/edit/:id', component: EditServicesComponent },
      { path: 'gallery-list', component: GalleryListComponent },
      { path: 'gallery-list/add', component: AddGalleryComponent },
      { path: 'gallery-list/edit/:id', component: EditGalleryComponent },
      { path: 'healthNews-list', component: HealthNewsListComponent },
      { path: 'healthNews-list/add', component: AddHealthNewsComponent },
      { path: 'healthNews-list/edit/:id', component: EditHealthNewsComponent },
      { path: 'hospitalNews-list', component: HospitalNewsListComponent },
      { path: 'hospitalNews-list/add', component: AddHospitalNewsComponent },
      { path: 'hospitalNews-list/edit/:id', component: EditHospitalNewsComponent },
      { path: 'career-list', component: CareerListComponent },
      { path: 'career-list/add', component: AddCareerComponent },
      { path: 'career-list/edit/:id', component: EditCareerComponent },
      { path: 'department-list', component: DepartmentListComponent },
      { path: 'department-list/add', component: AddDepartmentComponent },
      { path: 'department-list/edit/:id', component: EditDepartmentComponent },
    ],
  },
];
