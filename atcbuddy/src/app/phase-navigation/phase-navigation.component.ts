import { Component, OnInit, Input } from '@angular/core';
import { Phase } from '../models/phase';

@Component({
  selector: 'app-phase-navigation',
  templateUrl: './phase-navigation.component.html',
  styleUrls: ['./phase-navigation.component.css'],

})
export class PhaseNavigationComponent implements OnInit {

  constructor() { }
  
  @Input() phases: Phase[];

  ngOnInit() {
    console.log(this.phases)
  }
 onClick(phase){
  //send phase to app to update Phasedetaillist
 }
}
