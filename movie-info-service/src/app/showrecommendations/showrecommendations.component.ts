import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-showrecommendations',
  templateUrl: './showrecommendations.component.html',
  styleUrls: ['./showrecommendations.component.css']
})
export class ShowrecommendationsComponent implements OnInit {

  recommendations_received ={}
  arrpapers:  any[];
  google_url = "https://www.google.com/search?q="
  
  constructor(private httpService: HttpClient,private transferService: TransferService){}
  ngOnInit(): void {
    this.httpService.get('./assets/dataset.json').subscribe(
      data => {
        this.arrpapers = data as any;	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrpapers);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
    this.recommendations_received = this.transferService.recommendation
    console.log("here",this.recommendations_received)
    console.log("ngonit ran")
  }
   
  openSearchResults(searchterm){

    window.open(this.google_url+searchterm, "_blank");
  }
}
