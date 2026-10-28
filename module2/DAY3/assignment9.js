document.addEventListener("DOMContentLoaded", function () {

    let menuLinks = document.querySelectorAll(".sidebar a");
    let pages = document.querySelectorAll(".page");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            let pageId = link.getAttribute("data-page");
            let selectedPage = document.getElementById(pageId);

            if (!selectedPage) {
                return;
            }

            // Hide all pages
            pages.forEach(function (page) {
                page.hidden = true;
            });

            // Show the selected page
            selectedPage.hidden = false;

            // Remove active class from all links
            menuLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            // Highlight the selected link
            link.classList.add("active");

        });

    });

});
