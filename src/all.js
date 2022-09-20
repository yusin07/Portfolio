// swiper
const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: "true",
    },
    spaceBetween: 24,
    autoplay: {
        delay: 5000,
    },
});

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 1;
        sectionId = current.getAttribute("id");

        /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector("#tab a[href*=" + sectionId + "]")
                .classList.add("bg-primary", "text-white");
            document
                .querySelector("#tab a[href*=" + sectionId + "]")
                .classList.remove("hover:bg-zinc-200");
        } else {
            document
                .querySelector("#tab a[href*=" + sectionId + "]")
                .classList.remove("bg-primary", "text-white");
            document
                .querySelector("#tab a[href*=" + sectionId + "]")
                .classList.add("hover:bg-zinc-200");
        }
    });
}

// Get the modal
const zkGuideModal = document.getElementById("zkGuideModal");

// Get the button that opens the modal
const zkGuideBtn = document.getElementById("zkGuideBtn");

// Get the <span> element that closes the modal
const zkGuideX = document.getElementById("zkGuideX");

// When the user clicks on the button, open the modal
zkGuideBtn.onclick = function () {
    zkGuideModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
zkGuideX.onclick = function () {
    zkGuideModal.style.display = "none";
};

// Get the modal
const zkWebModal = document.getElementById("zkWebModal");

// Get the button that opens the modal
const zkWebBtn = document.getElementById("zkWebBtn");

// Get the <span> element that closes the modal
const zkWebX = document.getElementById("zkWebX");

// When the user clicks on the button, open the modal
zkWebBtn.onclick = function () {
    zkWebModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
zkWebX.onclick = function () {
    zkWebModal.style.display = "none";
};

// Get the modal
const quireModal = document.getElementById("quireModal");

// Get the button that opens the modal
const quireBtn = document.getElementById("quireBtn");

// Get the <span> element that closes the modal
const quireX = document.getElementById("quireX");

// When the user clicks on the button, open the modal
quireBtn.onclick = function () {
    quireModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
quireX.onclick = function () {
    quireModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == zkWebModal) {
        zkWebModal.style.display = "none";
    } else if (event.target == zkGuideModal) {
        zkGuideModal.style.display = "none";
    } else if (event.target == quireModal) {
        quireModal.style.display = "none";
    }
};

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 750, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
