var buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "#C4F92B";
        button.style.color = "#000"
    });
    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#323233";
        button.style.color = "#fff"
    });
});
