import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formEl') signupForm: NgForm;
  defaultQuestion = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(formEl: NgForm) {
    console.log(this.signupForm)
  }
}
