import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-progress-wizard',
  templateUrl: './progress-wizard.component.html',
  styleUrls: ['./progress-wizard.component.css']
})
export class ProgressWizardComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
