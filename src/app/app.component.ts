import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormFieldPasswordComponent } from './components/form-field-password/form-field-password.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormFieldPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-tricks';
}
