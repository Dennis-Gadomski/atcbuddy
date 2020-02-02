import { Component } from '@angular/core';
import { Phase } from './models/phase';
import { PhaseService } from './services/PhaseService';
import { Observable } from 'rxjs';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PhaseService]
})
export class AppComponent {
  
  phases$:Observable<Phase[]> ;
  phases: Phase[];
  callsign: string;
  selectedPhase:string;
  selectedPhaseDetail: string;

  constructor(private phaseService: PhaseService){
    this.phases$ =  this.phaseService.getPhases();
  }

  async ngOnInit() {
    this.phases$.subscribe(phases => {
      this.phases = phases as Phase[]
    });
  }

  eventClickedPhase(event){
      this.selectedPhase = event;
  }

  eventClickedPhaseDetail(event){
  

    this.selectedPhaseDetail = event;
  }

}
