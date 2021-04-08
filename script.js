const panel = Array.from(document.querySelectorAll(" .panel"));

for (let i = 0; i < panel.length; i++) {
    // panel.forEach((x) => x.classList.remove("enlarge"));
    // panel.forEach((x) => console.log(x));
    panel[i].addEventListener("click", () => {
        panel[i].classList.toggle("enlarge");
        let parr = Array.from(panel[i].querySelectorAll("p"));
        parr[0].classList.toggle("text");
        parr[2].classList.toggle("text");
    });
}
