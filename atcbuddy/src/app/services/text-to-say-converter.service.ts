import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TextToSayConverterService {
  getTextWithoutParameters(text: string[], inputs: string[]): string[] {
    const replacedInputsText = [];

    text.forEach((text, index) => {
      replacedInputsText[index] = text.replace(inputs[index], "");
    });
    return replacedInputsText;
  }

  updateTextToSay(
    text: string,
    textToUpdate: string,
    textValue: string
  ): string {
    return text.replace(textToUpdate, textValue);
  }
}
