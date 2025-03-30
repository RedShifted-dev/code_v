document.addEventListener("DOMContentLoaded", function () {
    let timeLeft = 15;
    const countdownElement = document.querySelector(".get-link-timer");
    const linkBtn = document.querySelector(".get-link-button");

    function updateCountdown() {
        if (timeLeft > 0) {
            timeLeft--;
            countdownElement.innerHTML = `Get Link In ${timeLeft} sec...`;
            setTimeout(updateCountdown, 1000);
        }
        else{
            countdownElement.style.display = "none";
            linkBtn.style.display = "flex";
        }
    }

    setTimeout(updateCountdown, 1000);

});
