
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import{FooterComponent} from "./footer/footer.component";
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ReactiveFormsModule} from '@angular/forms';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,FooterComponent,HomeComponent,ServicesComponent, ReactiveFormsModule,UserPortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}

