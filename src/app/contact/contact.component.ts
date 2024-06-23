import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  checkbox: boolean = false;
  checkboxDisplay: boolean = false;
  checkboxSrc = './assets/img/checkbox1.svg';
  formSend: boolean = false;
  http = inject(HttpClient)
  contactData = {
    name: '',
    email: '',
    message: ''
  }
  mailTest = false;

  post = {
    endPoint: 'https://portfolio.grischataenzer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (this.checkbox && ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.formSend = true;
            setTimeout(() => {
              this.formSend = false; 
            }, 3000);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    } else {
      this.checkboxDisplay = true;
      console.log('Checkbox False');
    }
  }

  checkboxConfirm() {
    this.checkboxDisplay = false;
    this.checkbox = !this.checkbox;
    this.checkboxSrc = this.checkbox ? './assets/img/checkbox2.svg' : './assets/img/checkbox1.svg';
    console.log('Checkbox true');
  }
}
