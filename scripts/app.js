"use strict";

// "IIFE," which stands for Immediately Invoked Function Expression. An IIFE is a function that runs as soon as it is defined. Here's how you can create and use an IIFE in JavaScript:
(function () {

    function DisplayHomePage()
    {
        console.log("Calling DisplayHomePage...");

        let aboutUsButton = document.getElementById("AboutUsBtn" );
        aboutUsButton.addEventListener("click", function ()
        {
            location.href = "about.html";
        });
    }
    function DisplayProductPage()
    {
        console.log("Calling DisplayProductPage...");
    }
    function DisplayServicesPage()
    {
        console.log("Calling DisplayServicesPage...");
    }
    function DisplayAboutPage()
    {
        console.log("Calling DisplayAboutPage...");
    }
    function DisplayContactPage()
    {
        console.log("Calling DisplayContactPage...");
    }

    function start()
    {
        console.log("Starting App...");

        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;

            case "Products":
                DisplayProductPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
        }
    }
    // this event listener runs when browser is loading page.
    window.addEventListener("load", start);
}
)()