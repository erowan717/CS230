import { Component, Input } from "@angular/core";

@Component({
    selector: "spotify-game-card",
    templateUrl: "game-card.component.html",
    styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {
    @Input()
     title!:string;
    @Input()
    list!:string;
    @Input()
    background!:string;
}