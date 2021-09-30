export class Game {
    title: string;
    list: string;
    background: string;

    constructor({title, list, background} :
        {title:string, list:string, background:string}) {
            this.title=title;
            this.list=list;
            this.background=background;
    }
}