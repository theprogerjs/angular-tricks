import { Component, OnInit } from '@angular/core';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tp-credit-card-form',
  standalone: true,
  imports: [CreditCardComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './credit-card-form.component.html',
  styleUrl: './credit-card-form.component.scss'
})
export class CreditCardFormComponent implements OnInit{
  view: number = 1;
  card !: FormGroup;

  months: number[] = Array.from({length: 12}, (_, i) => i + 1);

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.card = this.fb.group({
        number: this.fb.control('', [Validators.required, Validators.pattern('[0-9]{16}')]),
        month: this.fb.control('', [Validators.required, Validators.min(1), Validators.max(12)]),
        year: this.fb.control('', [Validators.required, Validators.min(new Date().getFullYear())]),
        exp: this.fb.control('', [Validators.required]),
        holder: this.fb.control('', [Validators.required]),
        cvv: this.fb.control('', [Validators.required, Validators.pattern('[0-9]{3}')]),
      });
  }

  validateInputLimit(event: any, limit: number){
    
  }
 
  validateNumberInput(event: any, limit: boolean | number = false){
    const keyCode = event.keyCode;
    

    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
      event.preventDefault();
    }

    if(limit && event.target.value.length + 1 > limit){
      event.preventDefault();
    }
    
  }

  validateExpirationField(event: any){

    const input = event.target.value;
    let [month, year] = input.split('/');

    let formattedValue = '';

    if (month) {

      if(month.length > 2){
        year = month.substring(2);
        month = month.substring(0,2);
      }

      if(month >= 2){
        formattedValue = month.padStart(2, '0');
      }else {
        formattedValue = month;
      }

      
    }

    if(year){
      formattedValue += '/';
      formattedValue += year.substring(0,2);
      
    }

    this.card.patchValue({ month }, { emitEvent: false });
    this.card.patchValue({ year }, { emitEvent: false });
    this.card.patchValue({ exp: formattedValue }, { emitEvent: false });
  }
}
