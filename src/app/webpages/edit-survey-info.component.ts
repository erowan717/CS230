import { Component } from "@angular/core";
import { SurveyInfo } from "./survey-info.model";
import { SurveyInfoService } from "./survey-info.service";

@Component({
    selector: 'spotify-edit-survey-info',
    templateUrl: 'edit-survey-info.component.html'
})

export class EditSurveyInfoComponent {

    constructor(private infoService: SurveyInfoService) {

    }

    onUpdateSurveyInfo(data: SurveyInfo){
        console.log("You pressed Submit");
        console.log(data);
        this.infoService.modifySurveyInfo(data).subscribe(data => {
            console.log("Updated Information Sent")
        }
        );
    }
}