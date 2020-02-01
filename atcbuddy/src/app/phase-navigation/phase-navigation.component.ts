import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phase-navigation',
  templateUrl: './phase-navigation.component.html',
  styleUrls: ['./phase-navigation.component.css']
})
export class PhaseNavigationComponent implements OnInit {

  constructor() { }

  phases: string[];

  ngOnInit() {
    //fetch all phases
    this.phases = ["taxi", "take-off"]
  }

}
