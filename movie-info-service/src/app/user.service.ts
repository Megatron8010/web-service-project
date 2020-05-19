import { Injectable } from '@angular/core';
import { HttpClient,HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  postUrl: string = "http://127.0.0.1:8000/api/v1/recommend_sci/predict"
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  registerNewUser(userData): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/users/',userData)
  }
  loginNewUser(userData): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/',userData)
  }

  addPost(data_array){
    return this.http.post(this.postUrl,data_array,this.httpOptions)
  }
  
  
  data
  showUsers():Observable<any>{
    this.http.get('http://127.0.0.1:8000/api/users/').subscribe(data => {
      return data;
    },
    err => {
      console.log("unable to get data");
    }
    );
    return this.data
  }
}
