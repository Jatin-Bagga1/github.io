/**
 * Name - Jatin Bagga(100935344)
 *        Gagan Kaur (100915346)
 *
 * Date of Completion - 25 January, 2025
 **/
// "IIFE," which stands for Immediately Invoked Function Expression. An IIFE is a function that runs as soon as it is defined. Here's how you can create and use an IIFE in JavaScript:

(function () {


        /**
         * Array containing details of all opportunities for volunteering and work.
         * Each opportunity has a title, date, time, description, and category.
         */
        const opportunities = [
            {
                title: "Part-Time Focus Group & Clinical Trial Participants",
                date: "2025-01-25",
                time: "10:00 AM",
                description: "Must register and apply to qualify.",
                category: "Workshops",
            },
            {
                title: "Work From Home - Appointment Setter",
                date: "2025-01-27",
                time: "2:30 PM",
                description: "Customer service calls, client requests, and policy creation.",
                category: "Workshops",
            },
            {
                title: "House Cleaner Needed",
                date: "2025-01-29",
                time: "9:00 AM",
                description: "Seeking a female with home cleaning experience.",
                category: "Cleanups",
            },
            {
                title: "Personal Support Worker",
                date: "2025-01-30",
                time: "1:15 PM",
                description: "Assisting individuals at home with healthcare needs.",
                category: "Workshops",
            },
            {
                title: "Earn Extra Income - Work From Home",
                date: "2025-02-01",
                time: "4:00 PM",
                description: "Get paid for testing apps, games & surveys.",
                category: "Workshops",
            },
            {
                title: "Visiting Nurse - RN",
                date: "2025-02-03",
                time: "8:45 AM",
                description: "Delivering healthcare services in patients' homes.",
                category: "Workshops",
            },
            {
                title: "Tim Hortons Jobs",
                date: "2025-02-05",
                time: "11:20 AM",
                description: "Part-time work in Oshawa, pay range $17–$42/hour.",
                category: "Fundraisers",
            },
            {
                title: "Team Member",
                date: "2025-02-07",
                time: "3:00 PM",
                description: "Customer service and food preparation at Panera Bread.",
                category: "Fundraisers",
            },
            {
                title: "Driver & Load Helpers Needed",
                date: "2025-02-09",
                time: "7:30 AM",
                description: "Hiring drivers and movers for local and long-haul jobs.",
                category: "Fundraisers",
            },
            {
                title: "Cleaner Needed for Home",
                date: "2025-02-10",
                time: "2:45 PM",
                description: "Offering $20/hour for house cleaning.",
                category: "Cleanups",
            },
            {
                title: "Administrative Assistant (Work From Home)",
                date: "2025-02-12",
                time: "12:00 PM",
                description: "Part-time work offering up to $750/week.",
                category: "Workshops",
            },
            {
                title: "Kitchen Help Wanted",
                date: "2025-02-14",
                time: "6:30 PM",
                description: "Requires Food Handling License and Smart Serve certification.",
                category: "Fundraisers",
            },
            {
                title: "Experienced Housekeeper Wanted",
                date: "2025-02-16",
                time: "10:15 AM",
                description: "Housekeeping position in Whitby paying $18/hour.",
                category: "Cleanups",
            },
            {
                title: "Cleaner with Car Needed",
                date: "2025-02-18",
                time: "1:45 PM",
                description: "Offering $19/hour and paid gas for cleaning in Pickering/Oshawa.",
                category: "Cleanups",
            },
            {
                title: "Affordable Cleaning Services",
                date: "2025-02-20",
                time: "9:00 AM",
                description: "Contact Cheryl for cleaning services in Oshawa.",
                category: "Cleanups",
            },
        ];

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
        }


        /**
         * Renders a list of opportunities on the Opportunities Page.
         * Initializes event listeners for volunteer buttons and form submission.
         */
        function DisplayOpportunityPage() {

            let mainContent = document.getElementById("opportunities");

            // Loop through opportunities and create cards for each one
            opportunities.forEach(opportunity => {
                let card = document.createElement("div");
                card.classList.add( "mb-4","d-flex", "justify-content-center"); // Add Bootstrap grid classes
                card.innerHTML = `
               <div class="card h-100 w-75" style="background-color: #FFF8E1; height: 300px;">
                   <div class="card-body">
                       <h5 class="card-title">${opportunity.title}</h5>
                       <p class="card-text">${opportunity.description}</p>
                       <p class="card-text"><small class="text-muted">${opportunity.date} AT ${opportunity.time}</small></p>
                       <button class="btn btn-primary volunteer-btn align-content-center" data-bs-toggle="modal" data-bs-target="#signUpModal" style="background-color: #008080; border-color: #008080;">Volunteer</button>
                   </div>
               </div>`;
                mainContent.appendChild(card);
            });

            // Add event listener for the volunteer form submission
            let submitButton = document.getElementById("submitVolunteerButton");
            submitButton.addEventListener("click", function () {
                try{
                    let name = document.getElementById("volunteerName").value;
                    let email = document.getElementById("volunteerEmail").value;
                    let role = document.getElementById("preferredRole").value;
                    let message = document.getElementById("message");

                    try{
                        validateName(name);
                        validateEmail(email);
                        validateRole(role);


                        message.setAttribute("class", "alert alert-success");
                        console.log(message);
                        message.textContent = "success";

                    }
                    catch(error){
                        message.setAttribute("class", "alert alert-danger");
                        message.textContent = error;
                    }

                }
                catch(error)
                {

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
         * Function to display the event calendar page
         */
        function DisplayEventPage() {
            console.log("Displaying Event Calendar");

            // Initialize FullCalendar
            let calendarEl = document.getElementById('calendar');
            let calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                events: opportunities.map(event => ({
                    title: event.title,
                    start: event.date,  // Use `start` instead of `date`
                    extendedProps: { category: event.category },
                })),
            });
            calendar.render();

            // Add event listener for category filter
            let categoryFilter = document.getElementById("categoryFilter");
            categoryFilter.addEventListener("change", function() {
                let category = categoryFilter.value;

                if (category !== "all") {
                    calendar.removeAllEvents(); // Clear current events

                    let filteredEvents = opportunities.filter((event) => event.category === category);
                    calendar.addEventSource(
                        filteredEvents.map(event => ({
                            title: event.title,
                            start: event.date,
                            extendedProps: { category: event.category },
                        }))
                    );
                }
                else
                {
                    // If "all" category is selected, display all events
                    calendar.removeAllEvents();
                    calendar.addEventSource(
                        opportunities.map(event => ({
                            title: event.title,
                            start: event.date,
                            extendedProps: { category: event.category },
                            }))
                    );
                }
            });
        }

        /**
         * Function to display the contact page
         */
        function DisplayContactPage()
        {
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
                    }, 5000);
                }

            }

            console.log("Displaying Contact Page");

            // Handle contact form submission
            document.getElementById("contactForm").addEventListener("submit", function (event) {
                event.preventDefault();

                try{


                    let name = document.getElementById("name").value;
                    let email = document.getElementById("email").value;
                    let message = document.getElementById("message").value;
                    let subject = document.getElementById("subject").value;

                    // Validate input fields
                    validateName(name);
                    validateEmail(email);
                    validateSubject(subject);
                    validateMessage(message);

                    // Show success response
                    showResponseMessage("success");
                    let errorMessage = document.getElementById("errorMessage");
                    errorMessage.setAttribute("class", "alert alert-success m-2");
                    errorMessage.textContent = "success";



                }
                catch(error){

                    // Show error response
                    let errorMessage = document.getElementById("errorMessage");
                    errorMessage.setAttribute("class", "alert alert-danger m-2");
                    errorMessage.textContent = error;

                }


            })

            /**
             * Close the modal and reset error message styling.
             */
            function closeModal() {
                let modal = document.getElementById("thankYouModal");
                let errorMessage = document.getElementById("errorMessage");
                modal.style.display = "none"; // Hide the modal
                errorMessage.removeAttribute("class");
            }

            // Add event listener for modal close button
            document.getElementById("modalClose").addEventListener("click", closeModal);



        }


        // Function to display the privacy page
        function DisplayPrivacyPage() {
                console.log("Displaying Privacy Page");
        }

        // Function to display the terms page
        function DisplayTermsPage() {
                console.log("Displaying TermsPage");
        }


        // Function to initialize and start the app
        function start() {
            console.log("Starting App...");

            /**
             * Determine the page to display based on the document title.
             */
            switch (document.title) {
                case "HOME":
                    DisplayHomePage();
                    break;
                case "OPPORTUNITIES":
                    DisplayOpportunityPage();
                    break;
                case "EVENT":
                    document.addEventListener("DOMContentLoaded", DisplayEventPage());
                    break;
                case "CONTACT":
                    DisplayContactPage();
                    break;
                case "PRIVACY":
                    DisplayPrivacyPage();
                    break;
                case "TERMS":
                    DisplayTermsPage();
                    break;

            }
        }

    // this event listener runs when browser is loading page.
    window.addEventListener("load", start);

        document.addEventListener("DOMContentLoaded", function () {
            // Add "Donate" link to the navbar
            const navbar = document.querySelector(".navbar-nav");
            const donateLink = document.createElement("li");
            donateLink.className = "nav-item";
            donateLink.innerHTML = `<a class="nav-link" href="donate.html">Donate</a>`;
            navbar.appendChild(donateLink);});

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
        if (link.textContent.trim() === "Opportunities") {
            // Change the text to "Volunteer Now"
            link.textContent = "Volunteer Now";
        }
    });
});

