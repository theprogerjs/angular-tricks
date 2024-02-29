import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormFieldPasswordComponent } from './components/form-field-password/form-field-password.component';
import { CreditCardFormComponent } from './components/credit-card-form/credit-card-form.component';
import { TodoComponent } from './components/todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormFieldPasswordComponent, CreditCardFormComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tricks';
}
