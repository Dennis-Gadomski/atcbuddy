import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Phase } from '../models/phase';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PhaseService{
    
    phaseCollectionRef: AngularFirestoreCollection<Phase>;

    constructor(private firestore: AngularFirestore){
        this.phaseCollectionRef = this.firestore.collection<Phase>('phases');

    }

    getPhases() :Observable<Phase[]>{

        return this.phaseCollectionRef.valueChanges();
    }
}