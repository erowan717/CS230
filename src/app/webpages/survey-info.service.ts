import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SurveyInfo } from "./survey-info.model";

@Injectable({providedIn: 'root'})
export class SurveyInfoService{
    private baseUrl:string = 'https://liquipedia-app-default-rtdb.firebaseio.com/'
    private SurveyInfoEndpoint:string = 'survey-info.json'
    constructor(private http: HttpClient){

    }
    getSurveyInfo() {
        console.log(this.baseUrl + this.SurveyInfoEndpoint)
        return this.http.get<SurveyInfo>(this.baseUrl + this.SurveyInfoEndpoint);
}
    modifySurveyInfo(data:SurveyInfo){
        return this.http.put(this.baseUrl + this.SurveyInfoEndpoint, data);
    }
}