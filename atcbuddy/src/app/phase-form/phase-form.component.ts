import { Component, OnInit, Input } from '@angular/core';
import { Phase } from '../models/phase';

@Component({
  selector: 'app-phase-form',
  templateUrl: './phase-form.component.html',
  styleUrls: ['./phase-form.component.css']
})
export class PhaseFormComponent implements OnInit {

  @Input() phases: Phase[];
  @Input() selectedPhaseDetail: string;
  filteredPhaseDetails: Phase[];
  filteredPhase:Phase;
  phaseInputs: string[];

  constructor() { }

  ngOnInit(){
    

    }

    ngOnChanges(){
      this.filteredPhaseDetails = this.phases;
      this.phaseInputs = [];
      
      if(this.selectedPhaseDetail) {
        this.filteredPhase = this.phases.find(phase =>  {
          if(phase.phasedetail == this.selectedPhaseDetail)
            return phase; 
        });
        
        if(this.filteredPhase.phaseinput.length != 0){
          this.phaseInputs = this.filteredPhase.phaseinput;
        }
    }

  }





}
