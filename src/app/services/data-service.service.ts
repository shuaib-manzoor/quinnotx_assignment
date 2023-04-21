import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment"
interface Engineers {
  designation: string
  email: string
  firstName: string
  id: string
  lastName: string
  project: string
  projectDescription: string
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  engineers:Array<Engineers> = [];
  ID:string = "50f243fb-c691-4d02-b594-5ca9992939aa";
constructor(private http: HttpClient) { }

getEngineers(){
  return new Promise((resolve) => {
    if(this.engineers.length > 0){
      resolve(this.engineers)
    }
    else{
      this.http.get(environment.baseurl + this.ID).subscribe((resp: any) => {
        if (resp.length > 0) {
          this.engineers = resp;
          resolve(this.engineers)
        }
      })
    }
  })
}
  

getEngineerById(id: string){
  return new Promise(async (resolve) => {
    let ID = "50f243fb-c691-4d02-b594-5ca9992939aa"
    
    if(this.engineers.length > 0){
      resolve(this.engineers.filter((x)=>x.id != id)[0])
    }
    else{
      await this.getEngineers();
    }
    try {
      resolve(this.engineers.filter((x)=>x.id != id)[0])
    } catch (error) {
      resolve({})
    }
  })
}
}
