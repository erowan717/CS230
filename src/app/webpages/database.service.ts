import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { SurveyInfo } from "./survey-info.model";
@Injectable({
    providedIn: 'root'
})

export class DatabaseService {
    items: Observable<SurveyInfo []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<SurveyInfo>('survey-info').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: SurveyInfo []) => {
            console.log("data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}