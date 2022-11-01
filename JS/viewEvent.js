import { doSearchApi } from "./manager.js";


export const declaereViewEvents = () => {// declaereViewEvents for btn and input

    let input = document.querySelector("#id_input");
    let btn = document.querySelector("#id_btn");
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
           
            let input_val = document.querySelector("#id_input").value;
            doSearchApi(input_val)// geve the value of input to initialize doSearchApi
        }
    })
    btn.addEventListener('click', () => {
        let input_val = document.querySelector("#id_input").value;
        doSearchApi(input_val);// geve the value of input to initialize doSearchApi
    })

}