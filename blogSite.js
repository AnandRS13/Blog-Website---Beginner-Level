document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("homeLink");
    const aboutLink = document.getElementById("aboutLink");
    const contactLink = document.getElementById("contactLink");
    const mainContent = document.getElementById("mainContent");

    // Initial content
    loadHomeContent();

    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        loadHomeContent();
    });

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        loadAboutContent();
    });

    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        loadContactContent();
    });

    function loadHomeContent() {
        mainContent.innerHTML = `
            <article>
                <h2>Welcome to My Blog</h2>
                <p>This is the home page content of the blog.</p>
            </article>
        `;
    }

    function loadAboutContent() {
        mainContent.innerHTML = `
            <article>
                <h2>About Us</h2>
                <p>This is the about page content of the blog.</p>
            </article>
        `;
    }

    function loadContactContent() {
        mainContent.innerHTML = `
            <article>
                <h2>Contact Us</h2>
                <p>This is the contact page content of the blog.</p>
            </article>
        `;
    }
});
