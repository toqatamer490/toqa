
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-portfolio',
  standalone: true,
  imports: [RouterModule,ContactUsComponent],
  templateUrl: './user-portfolio.component.html',
  styleUrl: './user-portfolio.component.css'
})
export class UserPortfolioComponent {

  logoName: string = '';
  username: string = '';
  email: string = '';
  phone: string = '';
  img: string = '';
  linkedin: string = '';
  github:string='';
  notes: string = '';

  // Work skills
  titleServices1: string = '';
  descriptionServices :string ='';
  // Projects
  projectsImg1: string = '';
  projectsTitle1: string = '';
  projectsTool1: string = '';
  projectsImg2: string = '';
  projectsTitle2: string = '';
  projectsTool2: string = '';
  projectsImg3: string = '';
  projectsTitle3: string = '';
  projectsTool3: string = '';
  projectsImg4: string = '';
  projectsTitle4: string = '';
  projectsTool4: string = '';
  projectsImg5: string = '';
  projectsTitle5: string = '';
  projectsTool5: string = '';
  projectsImg6: string = '';
  projectsTitle6: string = '';
  projectsTool6: string = '';
  constructor(private route: ActivatedRoute) {
    console.log(this.img);
    this.route.queryParams.subscribe(params => {
      this.logoName = params['logoName'] || 'Default logoName';
      this.username = params['username'] || 'Default Username';
      this.email = params['email'] || 'Default Email';
      this.phone = params['phone'] || 'Default Phone';
      this.img = params['img'] || '';
      this.linkedin = params['linkedin'] || '';
      this.github = params['github'] || '';
      this.notes = params['notes'] || '';


      // Projects
      this.projectsImg1 = params['projectsImg1'] || '';
      this.projectsTitle1 = params['projectsTitle1'] || '';
      this.projectsImg2 = params['projectsImg2'] || '';
      this.projectsTitle2 = params['projectsTitle2'] || '';
      this.projectsImg3 = params['projectsImg3'] || '';
      this.projectsTitle3 = params['projectsTitle3'] || '';
      this.projectsImg4 = params['projectsImg4'] || '';
      this.projectsTitle4 = params['projectsTitle4'] || '';
      this.projectsImg5 = params['projectsImg5'] || '';
      this.projectsTitle5 = params['projectsTitle5'] || '';
      this.projectsImg6 = params['projectsImg6'] || '';
      this.projectsTitle6 = params['projectsTitle6'] || '';
      this.titleServices1 = params['titleServices1'] || '';
      this.descriptionServices = params['descriptionServices'] || '';
      console.log(this.descriptionServices);
    });
  }

  }
