import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardInfo } from "./card-info.model";

@Injectable({providedIn: 'root'})
export class CardService{
    private baseUrl:string = 'https://liquipedia-app-default-rtdb.firebaseio.com/'
    private myInfoEndpoint:string = 'my-cards.json'
    constructor(private http: HttpClient){

    }
    getCardInfo() {
        return this.http.get<CardInfo>(this.baseUrl + this.myInfoEndpoint);
}
}