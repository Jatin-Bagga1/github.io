
// "IIFE," which stands for Immediately Invoked Function Expression. An IIFE is a function that runs as soon as it is defined. Here's how you can create and use an IIFE in JavaScript:

(function () {

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

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                console.error(Error("Invalid email address: must be a valid email address"));
                throw new Error("Invalid email address: must be a valid email address");

            }
            return email;
        }

        function validateName(name){
            if (typeof name !== "string" || name.trim() === "") {
                console.error("Invalid full name: must be a non-empty string");
                throw new Error("Invalid full name: must be a non-empty string");
            }
            return name;
        }

        function validateRole(role){
            if (typeof role !== "string" || role.trim() === "") {
                console.error("Invalid role: must be a non-empty string");
                throw new Error("Invalid role: must be a non-empty string");
            }
            return role;
        }

        function validateSubject(subject){
            if (typeof subject !== "string" || subject.trim() === "") {
                console.error("Invalid subject: must be a non-empty string");
                throw new Error("Invalid subject: must be a non-empty string");
            }
            return subject;
        }

        function validateMessage(message){
            if (typeof message !== "string" || message.trim() === "") {
                console.error("Invalid messsage: must be a non-empty string");
                throw new Error("Invalid message: must be a non-empty string");
            }
            return message;
        }

    function DisplayHomePage() {

        console.log("Displaying Home Page");

        let getInvolvedButton = document.getElementById("GetInvolvedButton");
        getInvolvedButton.addEventListener("click", function () {
            location.href = "../src/opportunites.html";
        });
    }

    function DisplayOpportunityPage() {

        let mainContent = document.getElementById("opportunities");
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

        let closeButton = document.getElementById("closeButton");
        closeButton.addEventListener("click", function () {
            document.getElementById("signUpForm").reset();
            document.getElementById("message").textContent = "";
            document.getElementById("message").textContent = "";
            document.getElementById("message").removeAttribute("class");
        });


    }

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
                        start: event.date,  //
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

    function DisplayContactPage()
    {

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

        document.getElementById("contactForm").addEventListener("submit", function (event) {
            event.preventDefault();

            try{

                let name = document.getElementById("name").value;
                let email = document.getElementById("email").value;
                let message = document.getElementById("message").value;
                let subject = document.getElementById("subject").value;

                validateName(name);
                validateEmail(email);
                validateSubject(subject);
                validateMessage(message);

                showResponseMessage("success");
                let errorMessage = document.getElementById("errorMessage");
                errorMessage.setAttribute("class", "alert alert-success m-2");
                errorMessage.textContent = "success";



            }
            catch(error){

                let errorMessage = document.getElementById("errorMessage");
                errorMessage.setAttribute("class", "alert alert-danger m-2");
                errorMessage.textContent = error;

            }


        })

        function closeModal() {
            let modal = document.getElementById("thankYouModal");
            let errorMessage = document.getElementById("errorMessage");
            modal.style.display = "none"; // Hide the modal
            errorMessage.removeAttribute("class");
        }

        document.getElementById("modalClose").addEventListener("click", closeModal);



    }



    function DisplayPrivacyPage() {
            console.log("Displaying Privacy Page");
    }

    function DisplayTermsPage() {
            console.log("Displaying TermsPage");
    }

    function start() {
        console.log("Starting App...");
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
}
)()