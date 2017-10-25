import { Contact } from '../contact/contact.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import 'rxjs/Rx';

@Injectable()


export class DataStorageService {

  constructor(private http: Http){}


   saveDataFom(formData: Contact) {
     const body =  formData;
     return this.http.post('https://angular-material-plus.firebaseio.com/contactForm.json', body)
      .map((response: Response) => {
        console.log(response.json());
      }
    );
   }
}
