import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  private data;
  recommendation=[]
  setRecommendation(recommendations){
    this.recommendation=recommendations
    console.log("set",this.recommendation)
  }
  getRecommendation(){
    console.log("called")
    return this.recommendation  

  }
  setData(data){
    this.data = data;
  }

  getData(){
    return this.data;
  }

  clearData(){
    this.data = undefined;
  }

}
