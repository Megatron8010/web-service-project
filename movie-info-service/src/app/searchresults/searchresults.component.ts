import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchdataComponent } from '../searchdata/searchdata.component';
import { TransferService } from '../transfer.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css']
})
export class SearchresultsComponent implements OnInit {

  constructor(private transferService: TransferService, private userService:UserService,private router: Router) { }
  private my_filtered_data:any
  filteredData
  likes_array: string[] = []
  dislikes_array: string[] = []
  toggle = true;
  clicked = [];
  clicked2=[];
  recommendations
  google_url = "https://www.google.com/search?q="

  
  ngOnInit(): void {
    this.filteredData = this.transferService.getData()
  }

  recommendation_array = {}
 recommend(){
  this.recommendation_array["likes_array"] = this.likes_array
  this.recommendation_array["dislikes_array"] = this.dislikes_array
  console.log(JSON.stringify(this.recommendation_array))
  this.userService.addPost(JSON.stringify(this.recommendation_array)).subscribe(
    response =>{

    //console.log(response),
    this.recommendations=response
    this.transferService.setRecommendation(this.recommendations)
    this.router.navigate(['recommend-component']);
    
    }
  )
  ,err =>
  console.log(err)
   //this.userService.addPost(this.)
   
 }

  onLike(received_datum){
    this.likes_array.push(received_datum.paper_id)
    console.log(this.likes_array)
   }
   onDisLike(received_datum){
    this.dislikes_array.push(received_datum.paper_id)
    console.log(this.dislikes_array)
   }

   onToggle(i) {
    this.clicked[i] = true;
  }
  onToggle2(i) {
    this.clicked2[i] = true;
  }
  openSearchResults(searchterm){

    window.open(this.google_url+searchterm, "_blank");
  }

}
