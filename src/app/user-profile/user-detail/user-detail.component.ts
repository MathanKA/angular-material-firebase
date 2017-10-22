import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../shared/user.model';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userInfo: UserInfo[] = [
    new UserInfo('Mathan', 'KA', 'abc@go.com')
  ];
  constructor() { }

  ngOnInit() {
  }

}
