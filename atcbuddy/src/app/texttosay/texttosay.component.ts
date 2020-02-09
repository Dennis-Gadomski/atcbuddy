import { Component, OnInit, Input } from '@angular/core';
import { Phase } from '../models/phase';
import { TextToSayConverterService } from '../services/text-to-say-converter.service';

@Component({
  selector: 'app-texttosay',
  templateUrl: './texttosay.component.html',
  styleUrls: ['./texttosay.component.css']
})
export class TexttosayComponent implements OnInit {

  constructor(private textTosayConverter: TextToSayConverterService) { }

  @Input() texttosay: string[];

  ngOnInit(){}

 

}
