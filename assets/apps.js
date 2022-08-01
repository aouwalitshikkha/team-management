let links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
    // Add a click event on each link
    link.addEventListener("click", () => {
        // Get current active link and store in currActive variable
        let currActive = document.querySelector(".nav-link.active");
        // Set next active link to the current active classname
        let nextActive = currActive.className;
        // Set the current active class to none
        currActive.className = nextActive.replace("active", "");
        // Set the clicked link item to active.
        link.className += "active";
    });
});

