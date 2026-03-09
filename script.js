const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        image.classList.add("active");

        userResult.src = image.querySelector("img").src;

        let randomNumber = Math.floor(Math.random() * 3);

        let cpuImages = [
            "bilder/rock.jpeg",
            "bilder/scissors.jpeg",
            "bilder/paper.jpeg"
        ];

        cpuResult.src = cpuImages[randomNumber];

        let cpuValue = ["R","S","P"][randomNumber];
        let userValue = ["R","S","P"][index];

        let outcomes = {
            RR: "Likt",
            RS: "Du vant!",
            RP: "Du tapte..",
            SS: "Likt",
            SR: "Du tapte..",
            SP: "Du vant!",
            PP: "Likt",
            PR: "Du vant!",
            PS: "Du tapte.."
        };

        let outComeValue = userValue + cpuValue;

        result.textContent = outcomes[outComeValue];

    });

});