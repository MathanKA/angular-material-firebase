import { Contact } from '../contact/contact.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { AlertService } from './alert.service';

@Injectable()


export class DataStorageService {

  constructor(private http: Http, private alertService: AlertService) { }


  saveDataFom(formData: Contact) {
    const body =  formData;
    return this.http.post('https://angular-material-plus.firebaseio.com/contactForm.json', body)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.errorHandler);
  }
  private errorHandler(error: Response) {
    const errorText = error.json();
    return Observable.throw(error || 'Something went wrong');
  }
}


