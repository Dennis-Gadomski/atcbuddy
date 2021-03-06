import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PhaseNavigationComponent } from "./phase-navigation/phase-navigation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PhaseService } from "./services/PhaseService";
import { TextToSayConverterService } from "./services/text-to-say-converter.service";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { PhaseDetailComponent } from "./phase-detail/phase-detail.component";
import { PhaseFormComponent } from "./phase-form/phase-form.component";
import { TexttosayComponent } from "./texttosay/texttosay.component";

@NgModule({
  declarations: [
    AppComponent,
    PhaseNavigationComponent,
    PhaseDetailComponent,
    PhaseFormComponent,
    TexttosayComponent,
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatMenuModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    MatStepperModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  providers: [PhaseService, AngularFirestore, TextToSayConverterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
