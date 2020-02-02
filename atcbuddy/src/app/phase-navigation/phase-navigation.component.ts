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
  phaseNames: string[];
  
  ngOnInit() {
  }

  ngOnChanges() {
    if(this.phases) {
      this.phaseNames = [...new Set(this.phases.map(phase => phase.phase))];
    }
  }

  onClickPhase(phase){
    console.log(phase);
  }
}
