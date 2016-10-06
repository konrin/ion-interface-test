import { Component, Input } from '@angular/core';
import { IContact } from './../../models/contact';
/*
  Generated class for the ContactItem component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'contact-item',
  templateUrl: 'contact-item.html'
})
export class ContactItemAaa {

  text: string;

  @Input()
  contact: IContact;

  constructor() {

  }
}
