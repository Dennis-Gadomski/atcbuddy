import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Phase } from "../models/phase";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-phase-navigation",
  templateUrl: "./phase-navigation.component.html",
  styleUrls: ["./phase-navigation.component.css"],
})
export class PhaseNavigationComponent implements OnInit {
  constructor() {}

  @Input() phases: Phase[];
  @Input() phaseFormGroup: FormGroup;
  @Output() phaseSelectedEventEmitter = new EventEmitter();
  phaseNames: string[];

  ngOnInit() {}

  ngOnChanges() {
    if (this.phases) {
      this.phaseNames = [...new Set(this.phases.map((phase) => phase.phase))];
    }
  }

  onClickPhase(phase) {
    this.phaseSelectedEventEmitter.emit(phase);
  }
}
