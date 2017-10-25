import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onContactSubmit(cform: NgForm) {
    const Value = cform.value;
    const formValues = new Contact(Value.fname, Value.lname, Value.email, Value.message);
    console.log(formValues);
  }

}
