import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoverComponent } from '../../../../components/main/shared/cover/cover.component';
import { environment } from '../../../../../environments/environments';
import { CarouselService } from '../../../../services/main/carousel.service';
import { DeleteConfirmationModalComponent } from '../../../../components/main/shared/all-modals/delete-confirmation-modal/delete-confirmation-modal.component';
import { AuthService } from '../../../../services/serial/auth.service';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  standalone: true,
  imports: [CommonModule, CoverComponent, RouterLink, MatDialogModule]
})
export class CarouselListComponent implements OnInit, OnDestroy {
  authService = inject(AuthService);
  carouselService = inject(CarouselService);
  dialog = inject(MatDialog);
  router = inject(Router);
  
  user: any;
  emptyImg: any = environment.emptyImg;
  loading: boolean = true;
  carousels$?: Observable<any[]>;
  deleteCarouselSubscription?: Subscription;
  companyID: any = environment.hospitalCode;
  isModalOpen = false;

  constructor() { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    if (!this.carousels$) {
      this.loading = false;
      this.carousels$ = this.carouselService.getCompanyCarousel();
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
    this.deleteCarouselSubscription = this.carouselService.deleteCarousel(id).subscribe({
      next: () => {
        this.carousels$ = this.carouselService.getCompanyCarousel();
        this.closeModal();
      },
    });
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  ngOnDestroy(): void {
    this.deleteCarouselSubscription?.unsubscribe();
  }
}
