import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from './contact.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  onContactSubmit(cform: NgForm) {
    const Value = cform.value;
    const formValues = new Contact(Value.fname, Value.lname, Value.email, Value.message);
    this.dataStorageService.saveDataFom(formValues);
      // .subscribe((response) => {
      //   console.log(response);
      // });
  }

}
