// Moving BackgroundW mouse position

const el = document.querySelector("#module");
el.addEventListener("mousemove", (e) => {
 el.style.setProperty('--x', -e.offsetX + "px");
 el.style.setProperty('--y',-e.offsetY + "px");
});

//Smooth Scrolling function

const scroll = new SmoothScroll('.main-nav a[href*="#"]',{
 speed: 800
});
