/* var commonQuestions = document.querySelectorAll(".title");
commonQuestions.forEach(function(title) {
    title.addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});
*/

// typing animation
function typeText(element, text) {
    let charIndex = 0;
    element.innerHTML = "";
    const typingInterval = setInterval(() => {
        if (charIndex === text.length) {
            clearInterval(typingInterval);
        } else {
            element.innerHTML += text.charAt(charIndex);
            charIndex++;
        }
    }, 10);
}

// Call the typing animation 
const commonQuestions = document.querySelectorAll(".item");
commonQuestions.forEach((item) => {
    const title = item.querySelector(".title");
    const content = item.querySelector(".content");
    const contentText = content.querySelector("p");

    title.addEventListener("click", () => {
        content.classList.toggle("active");
        if (content.classList.contains("active")) {
            typeText(contentText, contentText.innerText);
        }
    });
});





