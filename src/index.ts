require("./assets/mark-thibault-logo.jpg");
require("./assets/mark-thibault-logo.png");
require("./assets/mark-thibault.ico");
require("./assets/apple-touch-icon.png");
require("./pattern-library.component.scss");

import * as angular from "angular";
import patternLibraryComponent from "./pattern-library.component";

angular
    .module("angularPatternLibrary", [
        "ngAnimate",
        "angularCheckboxModule",
        "angularDropdownModule",
        "angularFilterModule",
        "angularHeaderModule",
        "angularInputGroupModule",
        "angularModalModule",
        "angularSessionTimeoutModule",
        "angularToastMessagingModule"
    ])
    .component("angularPatternLibrary", new patternLibraryComponent());