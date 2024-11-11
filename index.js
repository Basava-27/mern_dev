document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        var ss = this.innerHTML;
        cc(ss);
    });
});

function cc(ss) {
    switch(ss) {
        case "Education":
            window.scrollTo(0, 530);
            break;
        case "Projects":
            window.scrollTo(0, 940);
            break;
        case "Tech Skills":
            window.scrollTo(0, 1350);
            break;
        case "Hobbies":
            window.scrollTo(0, 1760);
            break;
    }
}