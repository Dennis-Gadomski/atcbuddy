import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TextToSayConverterService {
  returnString: string[];
  constructor() {}

  getCleanText(texttosay: string[]): string {
    let returnCleanString: string;
    texttosay.forEach((element) => {
      returnCleanString.concat(element);
    });

    return returnCleanString;
  }

  getTextWithoutParameters(
    texttosay: string[],
    textInputs: string[]
  ): string[] {
    this.returnString = [];

    texttosay.forEach((textToConvert, index) => {
      this.returnString[index] = textToConvert.replace(textInputs[index], "");
    });
    return this.returnString;
  }

  updateTextToSay(
    cleanTextToSay: string,
    textToUpdate: string,
    textValue: string
  ): string {
    return cleanTextToSay.replace(textToUpdate, textValue);
  }
}
