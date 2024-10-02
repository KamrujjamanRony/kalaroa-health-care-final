import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutService } from '../../../../services/main/about.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environments';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  aboutService = inject(AboutService);
  
  allAbout$?: Observable<any[]>;
  about!: any;

  constructor() { }
  
  ngOnInit(): void {
    this.allAbout$ = this.aboutService.getAllAbout();
      this.allAbout$.subscribe(aboutUs => {
        if (aboutUs) {
          this.about = aboutUs.find(a=>a.companyID=== environment.hospitalCode);
        }
      });
  };

}
