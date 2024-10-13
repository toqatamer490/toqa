import { UserPortfolioComponent } from './../user-portfolio/user-portfolio.component';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})

export class ContactUsComponent {
  contactForm: FormGroup;
  imageUrl: string = '';

  constructor(private router: Router) {
    this.contactForm = new FormGroup({
      email: new FormControl('', [
        // Validators.required,
        Validators.email
      ]),
      username: new FormControl('', [
        // Validators.required,
        Validators.minLength(5)
      ]),
      phone: new FormControl('', [
        // Validators.required,
        Validators.minLength(10)
      ]),
      resume: new FormControl(null),
      img: new FormControl(null, Validators.required),
      linkedin: new FormControl(null),
      github: new FormControl(null),
      notes: new FormControl(null),


         // about user info

      titleServices1:new FormControl(null),

      descriptionServices:new FormControl(null),

            // track skills
      trackServies1:new FormControl(null),

      // for projects
      projectsImg1:new FormControl(null),
      projectsTitle1:new FormControl(null),
      projectsTool1:new FormControl(null),

      projectsImg2:new FormControl(null),
      projectsTitle2:new FormControl(null),
      projectsTool2:new FormControl(null),

      projectsImg3:new FormControl(null),
      projectsTitle3:new FormControl(null),
      projectTool3:new FormControl(null),

      projectsImg4:new FormControl(null),
      projectsTitle4:new FormControl(null),
      projectsTool4:new FormControl(null),

      projectsImg5:new FormControl(null),
      projectsTitle5:new FormControl(null),
      projectsTool5:new FormControl(null),

      projectsImg6:new FormControl(null),
      projectsTitle6:new FormControl(null),
      projectsTool6:new FormControl(null),

    });
  }

  allowedExtensions: string[] = ['pdf', 'jpg', 'jpeg', 'png'];

  onImageUpload(event: any) {
    const file = event.target.files[0];

    if (file) {

      const fileExtension = file.name.split('.').pop().toLowerCase();


      if (this.allowedExtensions.includes(fileExtension)) {

        const fileURL = URL.createObjectURL(file);
        console.log('Uploaded image URL:', fileURL);

        const reader = new FileReader();

        reader.onload = (e: any) => {
          const base64Image = e.target.result;
          this.contactForm.patchValue({
            img: base64Image
          });
        };

        reader.readAsDataURL(file);
      } else {
        console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
      }
    }
  }

// New method for blog1 image upload
onBlog1Upload(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          blog1img: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}


// New method for blog2 image upload
onBlog2Upload(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          blog2img: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

// New method for blog3 image upload
onBlog3Upload(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          blog3img: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onBlog4Upload(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          blog4img: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

// New method for blog4 image upload
onImageUploadProjects1(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectsImg1: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProjects2(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectsImg2: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProjects3(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectsImg3: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProjects4(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectsImg4: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProjects5(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectsImg5: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

onImageUploadProjects6(event: any) {
  const file = event.target.files[0];

  if (file) {
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (this.allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const base64Image = e.target.result;
        this.contactForm.patchValue({
          projectsImg6: base64Image // Update the form control for blog1
        });
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
    }
  }
}

// onImageUploadProjects7(event: any) {
//   const file = event.target.files[0];

//   if (file) {
//     const fileExtension = file.name.split('.').pop().toLowerCase();

//     if (this.allowedExtensions.includes(fileExtension)) {
//       const reader = new FileReader();

//       reader.onload = (e: any) => {
//         const base64Image = e.target.result;
//         this.contactForm.patchValue({
//           projectImg7: base64Image // Update the form control for blog1
//         });
//       };

//       reader.readAsDataURL(file);
//     } else {
//       console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
//     }
//   }
// }



// onImageUploadProject8(event: any) {
//   const file = event.target.files[0];

//   if (file) {
//     const fileExtension = file.name.split('.').pop().toLowerCase();

//     if (this.allowedExtensions.includes(fileExtension)) {
//       const reader = new FileReader();

//       reader.onload = (e: any) => {
//         const base64Image = e.target.result;
//         this.contactForm.patchValue({
//           projectImg8: base64Image // Update the form control for blog1
//         });

//       };

//       reader.readAsDataURL(file);
//     } else {
//       console.error('Invalid file type. Allowed file types are: ' + this.allowedExtensions.join(', '));
//     }
//   }
// }


  handleSubmitForm() {
    if (1) {
      this.router.navigate(['/user-portfolio'], {
        queryParams: {
          username: this.contactForm.value.username,
          // email: this.contactForm.value.email,
          // phone: this.contactForm.value.phone,
          // education: this.contactForm.value.education,
          // resume: this.contactForm.value.resume,
          img: this.contactForm.value.img, // Pass the image data as base64 string
          linkedin: this.contactForm.value.linkedin,
          github: this.contactForm.value.github,
          // facebook: this.contactForm.value.facebook,
          // instagram: this.contactForm.value.instagram,
          notes: this.contactForm.value.notes,


                // for about
          titleServices1:this.contactForm.value.titleServices1,
          // titleWorkSkill2:this.contactForm.value.titleWorkSkill2,
          // titleWorkSkill3:this.contactForm.value.titleWorkSkill3,
          // titleWorkSkill4:this.contactForm.value.titleWorkSkill4,

          descriptionServices:this.contactForm.value.descriptionServices,
          // descriptionWorkSkill2:this.contactForm.value.descriptionWorkSkill2,
          // descriptionWorkSkill3:this.contactForm.value.descriptionWorkSkill3,
          // descriptionWorkSkill4:this.contactForm.value.descriptionWorkSkill4,


          // trackSkill1:this.contactForm.value.trackSkill1,
          // trackSkill2:this.contactForm.value.trackSkill2,
          // trackSkill3:this.contactForm.value.trackSkill3,
          // trackSkill4:this.contactForm.value.trackSkill4,

          // for projects
          projectsImg1: this.contactForm.value.projectsImg1,
          projectsTitle1: this.contactForm.value.projectsTitle1,
          projectsTool1: this.contactForm.value.projectsTool1,

          projectsImg2: this.contactForm.value.projectsImg2,
          projectsTitle2: this.contactForm.value.projectsTitle2,
          projectsTool2: this.contactForm.value.projectsTool2,


          projectsImg3: this.contactForm.value.projectsImg3,
          projectsTitle3: this.contactForm.value.projectsTitle3,
          projectsTool3: this.contactForm.value.projectsTool3,

          projectsImg4: this.contactForm.value.projectsImg4,
          projectsTitle4: this.contactForm.value.projectsTitle4,
          projectsTool4: this.contactForm.value.projectsTool4,


          projectsImg5: this.contactForm.value.projectsImg5,
          projectsTitle5: this.contactForm.value.projectsTitle5,
          projectsTool5: this.contactForm.value.projectsTool5,

          projectsImg6: this.contactForm.value.projectsImg6,
          projectsTitle6: this.contactForm.value.projectsTitle6,
          projectsTool6: this.contactForm.value.projectsTool6,

          // projectImg7: this.contactForm.value.projectImg7,
          // projectTitle7: this.contactForm.value.projectTitle7,
          // projectTool7: this.contactForm.value.projectTool7,

          // projectImg8: this.contactForm.value.projectImg8,
          // projectTitle8: this.contactForm.value.projectTitle8,
          // projectTool8: this.contactForm.value.projectTool8,
          // for blogs
          // blog1: this.contactForm.value.blog1,
          // blog1img: this.contactForm.value.blog1img,
          // blog1title: this.contactForm.value.blog1title,
          // blog1description: this.contactForm.value.blog1description,
          // blog1date:this.contactForm.value.blog1date,
          // blog2: this.contactForm.value.blog2,
          // blog2img: this.contactForm.value.blog2img,
          // blog2title: this.contactForm.value.blog2title,
          // blog2description: this.contactForm.value.blog2description,
          // blog2date:this.contactForm.value.blog2date,
          // blog3: this.contactForm.value.blog3,
          // blog3img: this.contactForm.value.blog3img,
          // blog3title: this.contactForm.value.blog3title,
          // blog3description: this.contactForm.value.blog3description,
          // blog3date:this.contactForm.value.blog3date,
          // blog4: this.contactForm.value.blog4,
          // blog4img: this.contactForm.value.blog4img,
          // blog4title: this.contactForm.value.blog4title,
          // blog4description: this.contactForm.value.blog4description,
          // blog4date:this.contactForm.value.blog4date,



        }
      });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}

