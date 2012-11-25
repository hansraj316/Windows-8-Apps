(function () {
    "use strict";
    var datePicker;
    var DatePicker;
    //var sample; unecessary code
    var DaysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    function GetTheDay(e) {
        var setDate = document.getElementById("SetDate");
        setDate.innerText = DaysOfWeek[DatePicker.current.getDay()];
    }


    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            datePicker = document.getElementById("DatePicker");
            DatePicker = new WinJS.UI.DatePicker(datePicker);
            DatePicker.addEventListener("change", GetTheDay);
            

        }
    });
})();
