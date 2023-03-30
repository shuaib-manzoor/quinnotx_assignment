import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "./../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  getEngineers(){
    let id = "50f243fb-c691-4d02-b594-5ca9992939aa"
    return this.http.get(environment.baseurl+id);
  }

  getEngineerById(id:string){
    return new Promise((resolve)=>{
      let ID = "50f243fb-c691-4d02-b594-5ca9992939aa"
      this.http.get(environment.baseurl+ID).subscribe((resp:any)=>{
        if(resp.length > 0){
          resolve(resp.filter((x:any)=>x.id == id )[0])
        }
        else{
          resolve({})
        }
      })
    })
  }
}
