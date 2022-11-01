import ListItem from "./list_item.js";


export const doApi = async () => {//get data form API

    try {
        document.querySelector("#id_row").innerHTML = `<h2> Loading...</h2>`;
        let url = 'https://randomuser.me/api/?results=10&seed=google';
        let resp = await fetch(url);
        let data = await resp.json();

        console.log(data.results);
        createLise(data.results);
    } catch (err) {
        console.log(err);
        alert("Their Problem Came Back Later");
    }
}
export const doSearchApi = async (Qsearch) => { //get data by query from API

    try {
        document.querySelector("#id_row").innerHTML = `<h2> Loading...</h2>`;
        let url = `https://randomuser.me/api/?results=10&seed=${Qsearch}`;
        let resp = await fetch(url);
        let data = await resp.json();

        console.log(data.results);
        createLise(data.results);
    } catch (err) {
        console.log(err);
        alert("Their Problem Came Back Later");
    }


}



const createLise = (_arr) => { //create lise from API

    document.querySelector("#id_row").innerHTML = " "

    _arr.forEach(item => {
        let list = new ListItem("#id_row", item);
        list.render();

    });

}