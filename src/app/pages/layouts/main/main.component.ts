import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../../components/main/shared/navbar/navbar.component";
import { FooterComponent } from "../../../components/main/shared/footer/footer.component";
import { BannerComponent } from "../../../components/main/home/banner/banner.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CommonModule, RouterOutlet, FormsModule, NavbarComponent, FooterComponent, BannerComponent]
})
export class MainComponent {
}
