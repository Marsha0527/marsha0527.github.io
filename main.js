// Moving BackgroundW mouse position

const el = document.querySelector("#module");
el.addEventListener("mousemove", (e) => {
 el.style.backgroundPositionX = -e.offsetX + "px";
 el.style.backgroundPositionY = -e.offserY + "px";
});

//Smooth Scrolling function

const scroll = new SmoothScroll('.main-nav a[href*="#"]',{
 speed: 800
});
