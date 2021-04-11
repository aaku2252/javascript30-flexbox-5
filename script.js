const panel = Array.from(document.querySelectorAll(" .panel"));

for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener("click", () => {
        panel.forEach((x) => {
            x.classList.remove("enlarge");
            let arr = Array.from(x.querySelectorAll("p"));
            arr[0].classList.remove("text");
            arr[2].classList.remove("text");
        });
        panel[i].classList.toggle("enlarge");
        let parr = Array.from(panel[i].querySelectorAll("p"));
        parr[0].classList.toggle("text");
        parr[2].classList.toggle("text");
    });
}
