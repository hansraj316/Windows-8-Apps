(function () {
    "use strict";
    var colors = ["black", "white", "red", "blue", "green"];
    var i = -1;
    var home;
    function changeBackground(e) {
        
        document.getElementById("home").style.backgroundColor = colors[++i];
        document.getElementById("home").style.color = colors[i];
       
        if (i > 4) {
            i = -1;
            document.getElementById("home").style.backgroundColor = "rgb(29,29,29)";
            document.getElementById("home").style.color = "white";
        }
    }

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            home = document.getElementById("home");
            home.addEventListener("click", changeBackground);
        }
    });
})();
