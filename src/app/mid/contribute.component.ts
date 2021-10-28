import { Component} from "@angular/core";
import { OnInit } from "@angular/core";
import { CardInfo } from "./card-info.model";
import { CardService } from "./card.service";

@Component({
    selector: 'app-contribute',
    templateUrl: 'contribute.component.html',
    styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit{
    col_1_par_1: string = "Contributing to the wiki is actually pretty easy and keep in mind that every more-correct-than-wrong contribution is valuable no matter how small."
    col_1_par_2: string = "When you visit Liquipedia, consider adding to it or correcting something, it doesn't have to take up much of your time and effort and it will help other visitors like yourself and Liquipedia as a whole. "
    col_1_par_3: string = "Many people start by fixing typos, which is actually the easiest way to contribute. You just have to create an account—if you don't have one already—log in, click edit, find and fix the typo, click save, and you are done. "
    col_1_par_4: string = "Another thing that many contributors start with is keeping tournament results up to date while the tournament is ongoing. Most of the times the pages are already set up by one of the more experienced contributors, and you just have to fill in the results as they happen. Filling a bracket is pretty straightforward. You log in, click on edit, find the bracket, update scores and fill in names. If you are unsure, just look at how it was done on other pages, either by just looking at the page itself, or by clicking edit to examine how the page was created. In general, looking at how things are done on other pages gives you a good idea of how you can do it yourself. "
    col_1_par_5_1: string = "If you feel comfortable with wiki editing or if you want to learn things that are more advanced, feel free to browse our How to contribute sections you can find in the menus on the left of the wiki pages. You can "
    col_1_par_5_2: string = "where other contributors can help you."
    col_2_par_1_1: string = "To log in and edit Liquipedia you need a TeamLiquid account. To register an account, click on the"
    col_2_par_1_2: string = "link on any wiki page, just remember to follow the instructions and complete the registration. Once you have an account go click on the log in box in the top right and enter your details or if logged in on any of the three sites mentioned just click on the TL quick log in link."
    col_2_par_2: string = "There are two types of edit links. One is a tab at the top of the page which lets you edit all sections of the page at once. The second is on the far right side of all sub-headers, this allows you to edit the specific section you are on. When editing a page you will have some tools in a toolbar above the editing box to help you with the markup language that the wiki uses for things like bold text, italics, headers, and links. To know more about the wiki markup language visit "
    col_2_par_3: string = "There are multiple things one can do to help out with on the wikis. Besides fixing typos or entering results you can:"
    cardsInfo: CardInfo[] | undefined;

    constructor (private cardService: CardService) {
        }
        ngOnInit(): void{
            console.log("Registering");
            this.showCardInfo();
        }
        showCardInfo(){
            this.cardService.getCardInfo().subscribe((data: CardInfo[])=> {
                console.log(data);
                this.cardsInfo = data;
            })
        }
    }