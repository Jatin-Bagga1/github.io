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

        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = document.createElement("p");

        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class","mt-3");
        MainParagraph.textContent = "This is my first main paragraph";

        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        // Back tick is used to create string literal.
        // Concatinating two string values
        let SecondString = `${FirstString} my second string`;

        MainParagraph.textContent = SecondString;
        MainContent.appendChild(MainParagraph);

        // Accessing whole DOM of index.html
        let DocumentBody = document.body;
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my first article paragraph</p>`;
        Article.setAttribute("class" , "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);

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