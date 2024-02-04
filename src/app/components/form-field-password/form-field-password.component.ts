import { Component } from '@angular/core';

@Component({
  selector: 'tp-form-field-password',
  standalone: true,
  imports: [],
  templateUrl: './form-field-password.component.html',
  styleUrl: './form-field-password.component.scss'
})
export class FormFieldPasswordComponent {
  show: boolean = false;
  toggleShowButton(){
    this.show = !this.show;
  }
}
