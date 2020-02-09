import { Component, OnInit, Input, Output } from '@angular/core';
import { Phase } from '../models/phase';
import { TextToSayConverterService } from '../services/text-to-say-converter.service';

@Component({
  selector: 'app-phase-form',
  templateUrl: './phase-form.component.html',
  styleUrls: ['./phase-form.component.css']
})
export class PhaseFormComponent implements OnInit {

  @Input() phases: Phase[];
  @Input() selectedPhaseDetail: string;
  @Input() callsign:string;
  filteredPhaseDetails: Phase[];
  filteredPhase:Phase;
  phaseInputs: string[];

  //handle texttosay
  cleanTextToSay:string[];
  textToSay:string[] = [];
  textToSayString:string;

  onKey(event){
    this.cleanTextToSay.forEach((element,index) => {
      
       if(this.cleanTextToSay[index].includes(event.target.name)){
          console.log("hit")
          console.log(this.cleanTextToSay[index]);
          console.log(event.target.name);

          this.textToSay[index] = this.cleanTextToSay[index].replace(event.target.name, event.target.value);
          console.log(this.cleanTextToSay[index].replace(event.target.name, event.target.value))
        }
    });
    this.textToSayString = this.textToSay.join();
    console.log(this.textToSayString );
    
  }


  constructor(private textToSayConverterService: TextToSayConverterService) { }

  ngOnInit(){
    
    this.textToSay = this.textToSayConverterService.getTextWithoutParameters(this.filteredPhase.texttosay, this.phaseInputs);
    this.textToSayString = this.textToSay.join();


    }

 

    ngOnChanges(){
      this.filteredPhaseDetails = this.phases;
      this.phaseInputs = [];
      
      //Define phase inputs
      if(this.selectedPhaseDetail) {
        this.filteredPhase = this.phases.find(phase =>  {
          if(phase.phasedetail == this.selectedPhaseDetail)
            return phase; 
        });
        
        if(this.filteredPhase.phaseinput.length != 0){
          this.phaseInputs = this.filteredPhase.phaseinput;
        }
        
        
        this.cleanTextToSay = this.filteredPhase.texttosay;
        this.textToSay = this.textToSayConverterService.getTextWithoutParameters(this.filteredPhase.texttosay, this.phaseInputs);

    

     
    }

    //this.textToSay = this.textToSayConverterService.getTextWithoutParameters(this.cleanTextToSay, this.phaseInputs);
    

  }





}
