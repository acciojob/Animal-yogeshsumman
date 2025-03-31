document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.getElementById("photo-container");

    const animals = [
        { name: "Camel", url: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/camel.jpg" },
        { name: "Cheetah", url: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/cheetah.jpg" },
        { name: "Elephant", url: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/elephant.jpg" },
        { name: "Gorilla", url: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/gorilla.jpg" },
        { name: "Koala", url: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/koala.jpg" },
        { name: "Lion", url: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/lion.jpg" },
        { name: "Polar Bear", url: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/polar_bear.jpg" },
        { name: "Tiger", url: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/tiger.jpg" },
        { name: "Wolf", url: "https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/wolf.jpg" }
    ];

    animals.forEach(animal => {
        const imgElement = document.createElement("img");
        imgElement.src = animal.url;
        imgElement.alt = animal.name;
        imageContainer.appendChild(imgElement);
    });
});
