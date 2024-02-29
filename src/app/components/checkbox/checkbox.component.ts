import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tp-checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input('isChecked') isChecked !: boolean;
  @Output() onStatusChange = new EventEmitter<boolean>();

  onCheck(){
    this.onStatusChange.emit(this.isChecked);
  }
}
