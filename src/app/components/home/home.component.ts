import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public slides=  ["https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Nokia/5.3/FB-BOB/Nov-17th/V240911677_IN_WLME_Nokia_5.3_LP_Tall_hero_1500x600._CB415339100_.jpg",'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Black_friday/GW/Updated/talhero_1500x600._CB414379446_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/November/Heroes/WithoutBunting/realmebudsclassic/pc-1x._CB415354809_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Banners/GW_1500x600-min._CB406905169_.jpg','https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg'
  ,'https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg',
 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/17thNov/RV1/Tallhero_1500x600._CB415341732_.jpg',
 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Luggage/nov/ATF/Unrec/GW_PC_BUNK_luggage1500x600._CB415364628_.jpg']
  ;

  ngOnInit(): void {
  }

}
