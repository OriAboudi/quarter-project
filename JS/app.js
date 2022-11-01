import { amburger } from "./amburger.js";
import { lightboxInit } from "./light_box.js";
import { doApi, doSearchApi } from "./manager.js";
import { declaereViewEvents } from "./viewEvent.js";


const init = () => {

    doApi();  //get data form API
    doSearchApi();  //get data by query from API
    declaereViewEvents(); // get input form user
    lightboxInit();  // show lightbox
    amburger();  // show amburger
}

init();