import { CommonModule } from '@angular/common';
import { Component, effect, input } from '@angular/core';
import { CreditCard } from '../../../model/credit-card';

@Component({
  selector: 'tp-credit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent  {

  cardType !:number | null; //1->master, 2->visa, 3->ae, 4->discover
  view = input<number>(); //1 -> front, 2->back
  card = input.required({
    alias: 'details',
    transform: (card: CreditCard) => {
      this.cardType = this.checkCardType(card.number);
      card.number = this.formatCardNumber(card.number);
      return card;
    }
  });
  
  formatCardNumber(cardNumber: string): string{

    while(cardNumber.length < 16){
      cardNumber+= ".";
    }
   
    const strippedNumber = cardNumber.replace(/\s/g, '');
    const formattedNumber = strippedNumber.replace(/(.{4})/g, '<span class="group">$1</span>');
    const withIndividualSpans = formattedNumber.replace(/(\d)/g, '<span>$1</span>');
    return formattedNumber.trim();
  }

  checkCardType(cardNumber: any): number | null{
    if(!cardNumber) return null;
    if(cardNumber.length < 2) return null;
    
    switch(cardNumber[0]){
      case '5':
        return 1;
      case '4':
        return 2;
      case '3':
        return 3
      case '6':
        return 4;
    }

    return null;
  }

  
}
