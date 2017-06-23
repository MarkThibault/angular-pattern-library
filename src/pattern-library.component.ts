const template = require("./pattern-library.component.html");

export default class AppComponent implements angular.IComponentOptions {
    bindings: any;
    controller: any;
    controllerAs: string;
    templateUrl: string;
    transclude: boolean;

    constructor() {
        this.bindings = {};
        this.transclude = true;
        this.controller = AppController;
        this.controllerAs = "app";
        this.templateUrl = template;
    }
}

export class AppController {
    
    static $inject = [];
    constructor(
    ) {}
}