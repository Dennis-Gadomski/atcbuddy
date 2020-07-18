import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Phase } from "../models/phase";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-phase-detail",
  templateUrl: "./phase-detail.component.html",
  styleUrls: ["./phase-detail.component.css"],
})
export class PhaseDetailComponent implements OnInit {
  constructor() {}
  @Input() phases: Phase[];
  @Input() phaseDetailFormGroup: FormGroup;

  filteredPhase: Phase[];
  @Input() selectedPhase: string;
  phaseDetails: string[];
  selectedPhaseDetail: string;

  @Output() phaseDetailSelectedEventEmitter = new EventEmitter();

  ngOnInit() {}

  ngOnChanges() {
    this.filteredPhase = this.phases;
    if (this.selectedPhase) {
      this.filteredPhase = this.phases.filter(
        (phase) => phase.phase == this.selectedPhase
      );
      this.phaseDetails = [
        ...new Set(this.filteredPhase.map((phase) => phase.phasedetail)),
      ];
    }
  }

  onValueChange(phaseDatail) {
    this.phaseDetailSelectedEventEmitter.emit(phaseDatail);
  }
}
