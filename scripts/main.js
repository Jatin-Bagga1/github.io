/**
 * Name - Jatin Bagga(100935344)
 *        Gagan Kaur (100915346)
 *
 * Date of Completion - 25 January, 2025
 **/
// "IIFE," which stands for Immediately Invoked Function Expression. An IIFE is a function that runs as soon as it is defined. Here's how you can create and use an IIFE in JavaScript:

(function () {

    let opportunitiesData = [];




// Function to fetch community-related news
        async function fetchNews() {
            const apiKey = '6624b4eeb92848688dd0e7c5abc24246';
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=community&apiKey=${apiKey}`);
                const data = await response.json();

                // Log the response data to check its structure
                console.log("Fetched news data:", data);

                // Check if we have articles and display the first one
                if (data.status === "ok" && data.articles && data.articles.length > 0) {
                    displayNews(data.articles[0]); // Display the first article
                } else {
                    console.error("No articles found or error fetching the news");
                }
            } catch (error) {
                console.error("Error fetching the news:", error);
            }
        }

// Function to display a single article
        function displayNews(article) {
            const newsContainer = document.getElementById('newsContainer');

            // Ensure the container exists
            if (!newsContainer) {
                console.error("News container element not found.");
                return;
            }

            // Clear any existing content before appending the new article
            newsContainer.innerHTML = '';

            // Create the article element
            const articleElement = document.createElement('div');
            articleElement.classList.add('news-item');

            // Title
            const title = document.createElement('h3');
            title.textContent = article.title || 'No title available';  // Handle missing title
            articleElement.appendChild(title);

            // Description
            const description = document.createElement('p');
            description.textContent = article.description || 'No description available';  // Handle missing description
            articleElement.appendChild(description);

            // Published Date
            const publishedAt = document.createElement('p');
            const formattedDate = article.publishedAt ? new Date(article.publishedAt).toLocaleString() : 'Date not available';  // Format date or show fallback
            publishedAt.textContent = `Published at: ${formattedDate}`;
            articleElement.appendChild(publishedAt);

            // Append the article to the container
            newsContainer.appendChild(articleElement);
        }



        // app.js
        const apiKey = 'hOhoAD9oxK_AUwbmcQIquSLXSUPM-Ot6lzpLrdfK-AI';
        const galleryContainer = document.getElementById('imageGallery');
        const lightboxModal = document.getElementById('lightboxModal');
        const lightboxImage = document.getElementById('lightboxImage');
        const closeModal = document.getElementById('closeModal');

// Function to fetch images from Unsplash API
        async function fetchImages() {
            try {
                const response = await fetch(`https://api.unsplash.com/photos?client_id=${apiKey}&per_page=9`); // Fetch 9 images
                const data = await response.json();
                displayImages(data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        }

// Function to display images in the gallery
        function displayImages(images) {
            galleryContainer.innerHTML = ''; // Clear any existing images

            images.forEach(image => {
                const imageElement = document.createElement('div');
                imageElement.classList.add('gallery-item');

                const img = document.createElement('img');
                img.src = image.urls.thumb; // Use the smaller thumbnail size
                img.alt = image.description || 'Gallery Image';

                // Add click event to open lightbox
                img.addEventListener('click', () => openLightbox(image.urls.regular));

                imageElement.appendChild(img);
                galleryContainer.appendChild(imageElement);
            });
        }

// Function to open lightbox modal
        function openLightbox(imageUrl) {
            lightboxModal.style.display = 'flex';
            lightboxImage.src = imageUrl;
        }


        // This code is referred from this website - https://nordicapis.com/getting-started-with-google-maps-javascript-api/

        function CheckLogin(){
            console.log("[INFO] Checking User login status");

            const loginNav = document.getElementById("login");

            if(!loginNav){
                console.warn("[WARNING] loginNav not found. skipping CheckLogin().");
                return;
            }

            const userSession = sessionStorage.getItem("user");
            if(userSession){
                loginNav.innerHTML = `<i class="fas fa-sign-out-alt"></i>LOGOUT`;
                loginNav.href = "#";
                loginNav.addEventListener("click", (event) =>{
                    event.preventDefault();
                    sessionStorage.removeItem("user");
                    location.href = "../src/login.html";
                })
            }

        }
        /**
         * This function is used to add donate link dynamically to nav bar.
         */
        function addDonateLink()
        {
            // Getting nav bar using id navbar-nav
            const navbar = document.querySelector(".navbar-nav");
            // Creating donate link element.
            const donateLink = document.createElement("li");
            donateLink.className = "nav-item";
            donateLink.innerHTML = `<a class="nav-link" href="donate.html">DONATE</a>`;
            // Adding donate link to nav bar.
            navbar.appendChild(donateLink);
        }

        function updateActiveNavLink() {
            console.log("[INFO] updateActiveNavLink called...");
            // Get current page title in lowercase for comparison
            const currentPage = document.title.trim();
            const navLinks = document.querySelectorAll("nav a");

            navLinks.forEach(link => {

                if (link.textContent.trim() === "Opportunities") {
                    // Change the text to "Volunteer Now"
                    link.textContent = "VOLUNTEER NOW";
                }

                // If they match, add the active class, else remove it.
                if (link.textContent.trim() === currentPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }

                // If link text is opportunities,

            });

            addDonateLink();
        }

        /**
         * Load the navbar into the current page
         * @returns {Promise<void>}
         */
        async function LoadHeader() {
            console.log("[INFO] LoadHeader Called ...");

            return fetch("header.html")
                .then(response => {
                    console.log("[INFO] Fetch response status:", response.status);
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.text();
                })
                .then(data => {
                    console.log("[INFO] Header data received:", data.substring(0, 100)); // Log first 100 characters
                    const headerElement = document.querySelector("header");
                    if (!headerElement) {
                        console.error("[ERROR] No <header> element found in the document.");
                        return;
                    }
                    headerElement.innerHTML = data;
                    console.log("[INFO] Header loaded successfully.");
                    updateActiveNavLink();
                })
                .catch(error => console.error("[ERROR] Unable to load header:", error));
        }
        /**
         * This function is used to fetch events from JSON file using API request.
         * @returns {Promise<void>}
         */
    async function loadEvents()
        {
            try{
                // Trying to fetch events from events.json file.
                const response = await fetch("../data/events.json");
                // If response is not ok, that means event is not loaded or fetched properly,
                // an error is thrown.
                if (!response.ok)
                {
                    throw new error("Failed to fetch and load events.");
                }
                console.log("Events loaded");
                // else, data is successfully fetched from .json file.
                // trying to get data in json format.
                const data = await response.json();
                const opportunities = data.opportunities;
                opportunitiesData = data.opportunities;// Access the opportunities array

                displayEvents(opportunities);

            }
            catch(errorMessage){
                const mainElement = document.getElementsByTagName('main')[0];
                let alert = document.createElement("div");
                alert.setAttribute("class", "alert alert-danger");
                alert.textContent = errorMessage;
                mainElement.appendChild(alert);
            }

        }

    // Reference for filter function - https://stackoverflow.com/questions/63197326/javascript-filtering-between-dates-to-get-records-in-specific-date-range
    // Also used Generative AI to create this function and make it better and easy to read.
        /**
         * This function is used to filter events in opportunities page.
          */
    function filterEvents()
    {
        console.log(opportunitiesData);
        const filterType = document.getElementById("filterType").value.toLowerCase();
        const filterLocation = document.getElementById("filterLocation").value.toLowerCase();
        const filterDate = document.getElementById("filterDate").value;

        const filteredEvents = opportunitiesData.filter(event => {
            // Use the event object for each iteration
            const eventType = event.category.toLowerCase();
            const eventLocation = event.location.toLowerCase();

            const typeMatches = filterType ? eventType === filterType : true;
            const locationMatches = filterLocation ? eventLocation.includes(filterLocation) : true;
            const dateMatches = filterDate ? event.date === filterDate : true;

            return typeMatches && locationMatches && dateMatches;
        });


        displayEvents(filteredEvents);
    }

        /**
         * This function is used to display events on opportunities page.
         * @param events
         */
        function displayEvents(events) {
            let mainContent = document.getElementById("opportunities");
            mainContent.innerHTML = "";

            // Loop through opportunities and create cards for each one
            events.forEach(event => {
                let card = document.createElement("div");
                card.classList.add("mb-4", "d-flex", "justify-content-center"); // Add Bootstrap grid classes
                card.innerHTML = `
               <div class="card h-100 w-75" style="background-color: #FFF8E1; height: 300px;">
                   <div class="card-body">
                       <h5 class="card-title">${event.title}</h5>
                       <p class="card-text">${event.description}</p>
                       <p class="card-text">Location: ${event.location}</p>
                       <p class="card-text"><small class="text-muted">${event.date} AT ${event.time}</small></p>
                       <button class="btn btn-primary volunteer-btn align-content-center" data-bs-toggle="modal" data-bs-target="#signUpModal" style="background-color: #008080; border-color: #008080;">Volunteer</button>
                   </div>
               </div>`;
                mainContent.appendChild(card);
            });

            // Add event listener for the volunteer form submission
            let submitButton = document.getElementById("submitVolunteerButton");
            submitButton.addEventListener("click", function () {
                try {
                    let name = document.getElementById("volunteerName").value;
                    let email = document.getElementById("volunteerEmail").value;
                    let role = document.getElementById("preferredRole").value;
                    let message = document.getElementById("message");

                    try {
                        validateName(name);
                        validateEmail(email);
                        validateRole(role);


                        message.setAttribute("class", "alert alert-success");
                        console.log(message);
                        message.textContent = "success";

                    } catch (error) {
                        message.setAttribute("class", "alert alert-danger");
                        message.textContent = error;
                    }

                } catch (error) {

                }
            });

            // Reset form and clear messages on modal close
            let closeButton = document.getElementById("closeButton");
            closeButton.addEventListener("click", function () {
                document.getElementById("signUpForm").reset();
                document.getElementById("message").textContent = "";
                document.getElementById("message").textContent = "";
                document.getElementById("message").removeAttribute("class");
            });

        }


        /**
         * Validates the provided email address.
         * @param {string} email - The email address to validate.
         * @returns {string} - The validated email address.
         * @throws Will throw an error if the email is invalid.
         */

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                console.error(Error("Invalid email address: must be a valid email address"));
                throw new Error("Invalid email address: must be a valid email address");

            }
            return email;
        }

        /**
         * Validates the provided name.
         * @param {string} name - The name to validate.
         * @returns {string} - The validated name.
         * @throws Will throw an error if the name is empty or not a string.
         */
        function validateName(name){
            if (typeof name !== "string" || name.trim() === "") {
                console.error("Invalid full name: must be a non-empty string");
                throw new Error("Invalid full name: must be a non-empty string");
            }
            return name;
        }

        /**
         * Validates the provided role.
         * @param {string} role - The role to validate.
         * @returns {string} - The validated role.
         * @throws Will throw an error if the role is empty or not a string.
         */
        function validateRole(role){
            if (typeof role !== "string" || role.trim() === "") {
                console.error("Invalid role: must be a non-empty string");
                throw new Error("Invalid role: must be a non-empty string");
            }
            return role;
        }

        /**
         * Validates the provided subject.
         * @param {string} subject - The subject to validate.
         * @returns {string} - The validated subject.
         * @throws Will throw an error if the subject is empty or not a string.
         */
        function validateSubject(subject){
            if (typeof subject !== "string" || subject.trim() === "") {
                console.error("Invalid subject: must be a non-empty string");
                throw new Error("Invalid subject: must be a non-empty string");
            }
            return subject;
        }

        /**
         * Validates the provided message.
         * @param {string} message - The message to validate.
         * @returns {string} - The validated message.
         * @throws Will throw an error if the message is empty or not a string.
         */
        function validateMessage(message){
            if (typeof message !== "string" || message.trim() === "") {
                console.error("Invalid messsage: must be a non-empty string");
                throw new Error("Invalid message: must be a non-empty string");
            }
            return message;
        }
        /**
         * Handles the display logic for the Home Page.
         * Sets up event listeners and navigation for the "Get Involved" button.
         */
        function DisplayHomePage() {

            console.log("Displaying Home Page");

            let getInvolvedButton = document.getElementById("GetInvolvedButton");
            getInvolvedButton.addEventListener("click", function () {
                location.href = "../src/opportunites.html";
            });

            console.log("[INFO] DisplayUserWelcome called...");

            const messageArea = document.getElementById("messageArea");

            // Check if user data exists in sessionStorage
            const user = JSON.parse(sessionStorage.getItem("user"));

            if (user) {

                messageArea.innerHTML = `Welcome to Volunteer Connect ${user.DisplayName}!`;



            }
        }


        /**
         * Renders a list of opportunities on the Opportunities Page.
         * Initializes event listeners for volunteer buttons and form submission.
         */
        function DisplayOpportunityPage() {
            console.log("Displaying Opportunity Page...");
            loadEvents();

            // Attaching event listeners to filters
            document.getElementById("filterType").addEventListener("change", filterEvents);
            document.getElementById("filterLocation").addEventListener("input", filterEvents);
            document.getElementById("filterDate").addEventListener("change", filterEvents);

        }


        /**
         * Function to display the event calendar page
         */
        /**
         * Function to display the event calendar page.
         * This version waits for events to load before initializing the calendar.
         */
        async function DisplayEventPage() {
            // Wait for loadEvents() to finish fetching and updating opportunitiesData
            await loadEvents();

            console.log("Displaying Event Calendar");
            console.log(opportunitiesData);

            // Ensure opportunitiesData is defined and is an array
            if (!Array.isArray(opportunitiesData)) {
                console.error("opportunitiesData is not available or is not an array");
                return;
            }

            // Get the calendar container element
            let calendarEl = document.getElementById('calendar');
            if (!calendarEl) {
                console.error("Calendar element not found. Ensure an element with id 'calendar' exists in your HTML.");
                return;
            }

            // Initialize FullCalendar
            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                events: opportunitiesData.map(event => ({
                    title: event.title,
                    start: event.date,
                    extendedProps: {
                        category: event.category,  // Ensure category exists
                        location: event.location,
                        type: event.type
                    }
                }))
            });
            calendar.render();

            // Get filter elements
            let categoryFilter = document.getElementById("filterType"); // Assuming "filterType" is for category
            let locationFilter = document.getElementById("filterLocation");
            let dateFilter = document.getElementById("filterDate");

            function applyFilters() {
                let selectedCategory = categoryFilter ? categoryFilter.value : "";
                let enteredLocation = locationFilter ? locationFilter.value.trim().toLowerCase() : "";
                let selectedDate = dateFilter ? dateFilter.value : ""; // Expected format: YYYY-MM-DD

                console.log(`[DEBUG] Filters - Category: ${selectedCategory}, Location: ${enteredLocation}, Date: ${selectedDate}`);

                calendar.removeAllEvents(); // Clear current events

                let filteredEvents = opportunitiesData.filter(event => {
                    let categoryMatch = !selectedCategory || event.category === selectedCategory;
                    let locationMatch = !enteredLocation || (event.location && event.location.toLowerCase().includes(enteredLocation));
                    let dateMatch = !selectedDate || event.date === selectedDate;

                    return categoryMatch && locationMatch && dateMatch;
                });

                console.log(`[DEBUG] Filtered Events:`, filteredEvents);

                // Add filtered events to the calendar
                calendar.addEventSource(filteredEvents.map(event => ({
                    title: event.title,
                    start: event.date,
                    extendedProps: {
                        category: event.category,
                        location: event.location,
                        type: event.type
                    }
                })));
            }

            // Attach event listeners for filters
            if (categoryFilter) categoryFilter.addEventListener("change", applyFilters);
            if (locationFilter) locationFilter.addEventListener("input", applyFilters);
            if (dateFilter) dateFilter.addEventListener("change", applyFilters);
        }

        function initContactPage() {
            const contactForm = document.getElementById('contactForm');
            const modalClose = document.getElementById('modalClose');
            const errorMessage = document.getElementById('errorMessage');

            // Event listener to handle form submission
            contactForm.addEventListener('submit', handleFormSubmit);

            // Event listener to close modal
            modalClose.addEventListener('click', closeModal);

            // Handle form submission using AJAX (simulated with setTimeout)
            function handleFormSubmit(event) {
                event.preventDefault(); // Prevent form from submitting the traditional way

                // Clear any previous error message
                errorMessage.textContent = '';

                // Get form data
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };

                // Simple client-side validation
                if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                    errorMessage.textContent = 'Please fill in all fields before submitting.';
                    return;
                }

                // Simulate an AJAX call with setTimeout (replicating backend response delay)
                setTimeout(function() {
                    // Simulate successful response (you can also handle failure here)
                    showConfirmationModal(formData);
                }, 2000); // Simulated delay of 2 seconds (2000 ms)
            }

            // Show modal with confirmation details
            function showConfirmationModal(formData) {
                const modalBody = document.querySelector(".modal-body"); // Use querySelector to get the modal body

                // Clear previous content
                modalBody.innerHTML = `
            <p>Your message has been successfully sent. Thank you for reaching out!</p>
            <p><strong>Details Submitted:</strong></p>
            <ul>
                <li><strong>Name:</strong> ${formData.name}</li>
                <li><strong>Email:</strong> ${formData.email}</li>
                <li><strong>Subject:</strong> ${formData.subject}</li>
                <li><strong>Message:</strong> ${formData.message}</li>
            </ul>
        `;

                // Show the modal by setting its display style to block
                const modal = document.getElementById('thankYouModal');
                modal.style.display = 'block';  // Modal is shown
            }

            // Close the modal when the close button is clicked
            function closeModal() {
                const modal = document.getElementById('thankYouModal');
                modal.style.display = 'none'; // Hide the modal
            }
        }

        /**
         * Function to display the contact page
         */
        function DisplayContactPage() {
            /**
             * Helper function to show response message.
             * @param {string} type - The type of response message (success or error).
             */
            function showResponseMessage(type) {
                if (type === "success") {
                    let modal = document.getElementById("thankYouModal");
                    modal.style.display = "flex";

                    setTimeout(function() {
                        window.location.href = "../index.html"; // Redirect to the Home page
                    }, 5000); // Redirect after 5 seconds
                }
            }

            console.log("Displaying Contact Page");
            initContactPage(); // Initialize the contact form and modal functionality
        }




        // Function to display the privacy page
        function DisplayPrivacyPage() {
                console.log("Displaying Privacy Page");
        }

        // Function to display the terms page
        function DisplayTermsPage() {
                console.log("Displaying TermsPage");
        }

        function DisplayGalleryPage() {
            console.log("Displaying GalleryPage");
            fetchImages().then();
        }

        function DisplayLoginPage() {
            console.log("[INFO] DisplayLoginPage called...");
            const messageArea = document.getElementById("messageArea");
            const loginButton = document.getElementById("loginButton");
            const cancelButton = document.getElementById("cancelButton");

            cancelButton.addEventListener("click",  (event) =>{
                document.getElementById("loginForm").reset();
                location.href = "../index.html";
            });

            //Hide message Area initially
            messageArea.style.display = "none";

            if(!loginButton){
                console.error("[ERROR] loginButton not found in the DOM");
                return;
            }

            loginButton.addEventListener("click", async (event) =>{

                event.preventDefault();

                const username = document.getElementById("userName").value.trim();
                const password = document.getElementById("password").value.trim();

                try{
                    const response = await fetch("../data/users.json");
                    if(!response.ok){
                        throw new Error(`"[ERROR]HTTP error! ${response.status}`);
                    }

                    const jsonData = await response.json();
                    console.log("[DEBUG] fetched JSON data", jsonData);

                    const users = jsonData.users;
                    if(!Array.isArray(users)){
                        throw new Error("[ERROR] Json data does not contain a valid Array");
                    }
                    let success = false;
                    let authenticatedUser = null;

                    for(const user of users){
                        if(user.UserName === username && user.Password === password){
                            success = true;
                            authenticatedUser = user;
                            break;
                        }
                    }

                    if(success){
                        sessionStorage.setItem("user", JSON.stringify({
                            DisplayName : authenticatedUser.DisplayName,
                            EmailAddress : authenticatedUser.EmailAddress,
                            UserName : authenticatedUser.UserName,

                        }));

                        messageArea.style.display = "none";
                        messageArea.classList.remove("alert", "alert-danger");
                        location.href = "../src/opportunites.html";
                    }else{
                        messageArea.style.display = "block";
                        messageArea.classList.add("alert", "alert-danger");
                        messageArea.textContent = "Invalid username or password. Please try again";

                        document.getElementById("username").focus();
                        document.getElementById("username").select();


                    }

                }catch(error){
                    console.error("[ERROR] Login failed...");

                }


            });


        }

        // Function to initialize and start the app
        async function start() {
            console.log("Starting App...");

            /**
             * Determine the page to display based on the document title.
             */
            switch (document.title) {
                case "HOME":
                    await fetchNews();
                    addDonateLink();
                    DisplayHomePage();
                    break;
                case "VOLUNTEER NOW":

                    await LoadHeader();
                    DisplayOpportunityPage();
                    break;
                case "EVENT":
                    await LoadHeader();
                    await DisplayEventPage();

                    break;
                case "CONTACT":
                    await LoadHeader();
                    DisplayContactPage();
                    break;
                case "PRIVACY POLICY":
                    await LoadHeader();
                    DisplayPrivacyPage();
                    break;
                case "TERMS OF SERVICE":
                    await LoadHeader();
                    DisplayTermsPage();
                    break;
                case "GALLERY":
                    await LoadHeader();
                    DisplayGalleryPage();
                    closeModal.addEventListener('click', () => {
                        lightboxModal.style.display = 'none';
                    });
                    break;
                case "LOGIN":
                    await LoadHeader();
                    DisplayLoginPage();
                    break;
                case "REGISTER":
                    await LoadHeader();

            }

            CheckLogin();
        }

    // this event listener runs when browser is loading page.
    window.addEventListener("load", start);



}
)()

// Show the button when scrolling down
window.addEventListener("scroll", function () {
    const backToTop = document.getElementById("backToTop");
    if (window.scrollY > 150) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

// Smooth scroll to top when clicked
document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dynamically change opportunities link to Volunteer Now
document.addEventListener("DOMContentLoaded", function () {
    // Find the "Opportunities" link in the navbar
    const navbarLinks = document.querySelectorAll(".navbar a"); // Adjust the selector to match your navbar

    navbarLinks.forEach((link) => {
        console.log(link.textContent.trim());
        if (link.textContent.trim() === "Opportunities") {
            // Change the text to "Volunteer Now"
            link.textContent = "VOLUNTEER NOW";
        }
    });
});


