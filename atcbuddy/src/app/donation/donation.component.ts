import { Component, OnInit } from "@angular/core";
import { IPayPalConfig, ICreateOrderRequest } from "ngx-paypal";
@Component({
  selector: "app-donation",
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.css"],
})
export class DonationComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;

  constructor() {}

  ngOnInit() {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: "EUR",
      clientId: "dennis.gadomski@gmail.com",
      advanced: {
        commit: "true",
      },
      style: {
        label: "paypal",
        layout: "vertical",
      },
      onApprove: () => {
        console.log("onApprove - transaction was approved, but not authorized");
      },
      onClientAuthorization: () => {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point"
        );
      },
      onCancel: () => {
        console.log("Cancelled");
      },
      onError: (err) => {
        console.log("OnError", err);
      },
      onClick: (data, actions) => {
        console.log("onClick", data, actions);
      },
    };
  }
}
