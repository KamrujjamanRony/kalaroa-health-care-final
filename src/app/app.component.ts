import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { VisitorCountService } from './services/main/visitor-count.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet],
})
export class AppComponent {
  visitorCountService = inject(VisitorCountService);
  
  title = 'The kalaroa-health-care';
  visitorCount!: number;

  constructor() {}

  ngOnInit(): void {
    this.visitorCountService.incrementVisitorCount();
    this.visitorCount = this.visitorCountService.getVisitorCount();
    AOS.init({
      once: true,
      duration: 450,
      delay: 250,
      // disable: 'mobile'
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      AOS.refresh()
    }, 500)
  }
}
