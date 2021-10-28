import { Component, Injectable, OnInit } from "@angular/core";
import { SurveyInfo } from "./survey-info.model";
import { SurveyInfoService } from "./survey-info.service";

@Component({
    selector:"spotify-survey-info",
    templateUrl:"survey-info.component.html",
})
export class SurveyInfoComponent implements OnInit{
    surveyInfo: SurveyInfo | undefined;
    constructor(private surveyInfoService:SurveyInfoService) {

    }
    ngOnInit(): void {
        console.log("Registering showSurveyInfo as a subscriber");
        this.showSurveyInfo();
    }

    
    showSurveyInfo() {
        this.surveyInfoService.getSurveyInfo().subscribe((data: SurveyInfo) => {
            console.log(data);
            this.surveyInfo = data;
        })
    }
}