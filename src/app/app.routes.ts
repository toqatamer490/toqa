
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';

export const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Services',component:ServicesComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'Contact_us',component:ContactUsComponent},
  {path:'user-portfolio',component:UserPortfolioComponent},

];
