import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../user.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-searchdata',
  templateUrl: './searchdata.component.html',
  styleUrls: ['./searchdata.component.css']
})
export class SearchdataComponent implements OnInit {
  arrpapers:  any[];
  filteredData=[]
  filterText
  
  constructor(private httpService: HttpClient,private userService: UserService, private transferService: TransferService) { }
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
  }
  

  
  onChange() {
    this.filteredData = this.arrpapers.filter(
      datum => (datum.paper_title.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1)
      
    );
    this.transferService.setData(this.filteredData)
  }
 
 
 
}
