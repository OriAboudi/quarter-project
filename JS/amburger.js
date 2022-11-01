
export const amburger = () => {
    let burger = document.querySelector(".amburger");
    burger.addEventListener('click', () => {
        let x = document.querySelector("#myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    })

}