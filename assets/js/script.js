const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll(".movie-list");
const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(".container,.nav,.aside,.aside i,.toogle,.toogle-ball,.movie-list-filter select,.movie-list-title");

console.log(movieLists);
arrows.forEach((arrow, i) => {

    let clickCounter = 0;
    const imageItemLength = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", () => {
        const widthRatio = Math.floor(window.innerWidth / 300);
        clickCounter++;
        if (imageItemLength - (4 + clickCounter) + (4 - widthRatio) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        } else {
            clickCounter = 0;
            movieLists[i].style.transform = "translateX(0)";
        }
    })
})

ball.addEventListener('click', () => {
    items.forEach((item) => item.classList.toggle("active"));
});