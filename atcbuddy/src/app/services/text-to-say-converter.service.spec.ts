import { TestBed } from "@angular/core/testing";

import { TextToSayConverterService } from "./text-to-say-converter.service";

describe("TextToSayConverterService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: TextToSayConverterService = TestBed.get(
      TextToSayConverterService
    );
    expect(service).toBeTruthy();
  });
});
