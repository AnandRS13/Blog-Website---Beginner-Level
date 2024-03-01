document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("homeLink");
    const aboutLink = document.getElementById("aboutLink");
    const contactLink = document.getElementById("contactLink");
    const postLink = document.getElementById("postLink"); // New Post Link
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

    postLink.addEventListener("click", function(event) {
        event.preventDefault();
        loadPostForm(); // Load post form when New Post link is clicked
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

    function loadPostForm() {
        mainContent.innerHTML = `
            <article>
                <h2>New Post</h2>
                <form id="postForm">
                    <label for="title">Title:</label><br>
                    <input type="text" id="title" name="title" required><br>
                    <label for="content">Content:</label><br>
                    <textarea id="content" name="content" rows="4" required></textarea><br>
                    <button type="submit">Submit</button>
                </form>
            </article>
        `;
        
        // Handle form submission
        const postForm = document.getElementById("postForm");
        postForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const content = document.getElementById("content").value;
            // Send post data to server or handle locally
            console.log("New Post Submitted:", title, content);
            // You can add further functionality like sending the post data to a server using fetch or XMLHttpRequest
        });
    }

    // Function to load the GitHub guide blog post
    function loadGitHubGuide() {
        mainContent.innerHTML = `
            <article>
                <h2>Getting Started with GitHub</h2>
                <p>If you're new to GitHub and want to learn how to use it effectively, you've come to the right place! GitHub is a platform that allows developers to collaborate on projects, share code, and contribute to open-source projects.</p>
                <p>Here are some steps to get started with GitHub:</p>
                <ol>
                    <li><strong>Create a GitHub account:</strong> Visit the GitHub website and sign up for an account. It's free and easy to do.</li>
                    <li><strong>Set up Git:</strong> Install Git on your computer if you haven't already. Git is a version control system that GitHub is built on.</li>
                    <li><strong>Create a new repository:</strong> Once you have an account, you can create a new repository to store your projects. Click on the "New" button in the upper right corner of the GitHub dashboard and follow the prompts.</li>
                    <li><strong>Clone a repository:</strong> To work on an existing project, you'll need to clone the repository to your local machine. Use the "git clone" command followed by the repository URL.</li>
                    <li><strong>Make changes:</strong> Once you have a local copy of the repository, you can make changes to the files using your preferred code editor.</li>
                    <li><strong>Commit your changes:</strong> After making changes, you'll need to commit them to your local repository using the "git commit" command.</li>
                    <li><strong>Push changes to GitHub:</strong> Finally, push your changes to GitHub using the "git push" command. This will update the remote repository with your changes.</li>
                </ol>
                <p>These are just the basics of using GitHub, but there's a lot more to explore! Check out GitHub's documentation and tutorials for more in-depth information.</p>
            </article>
        `;
    }
});
