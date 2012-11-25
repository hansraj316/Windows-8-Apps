(function () {
    "use strict";
    var day, month, year;
    var date;
    function getInfo(e) {
        var currDate = new Date();

        date.current.getDay();
        
        document.getElementById("day").innerText = days_between(currDate, date.current);
        document.getElementById("month").innerText = Math.floor(days_between(currDate, date.current) / 30);
        document.getElementById("year").innerText = Math.abs(getAge(date.current));
    }


    Date.prototype.getDoY = function () {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.floor(((this - onejan) / 86400000) + 1);
    };

    function getAge(birthDate) {
        function isLeap(year) {
            return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
        }

        var now = new Date(),
            age = now.getFullYear() - birthDate.getFullYear(),
            doyNow = now.getDoY(),
            doyBirth = birthDate.getDoY();

        // normalize day-of-year in leap years
        if (isLeap(now.getFullYear()) && doyNow > 58 && doyBirth > 59)
            doyNow--;

        if (isLeap(birthDate.getFullYear()) && doyNow > 58 && doyBirth > 59)
            doyBirth--;

        if (doyNow <= doyBirth)
            age--;  // birthday not yet passed this year, so -1

        return age;
    };



    function days_between(date1, date2) {

        // The number of milliseconds in one day
        var ONE_DAY = 1000 * 60 * 60 * 24

        // Convert both dates to milliseconds
        var date1_ms = date1.getTime()
        var date2_ms = date2.getTime()

        // Calculate the difference in milliseconds
        var difference_ms = Math.abs(date1_ms - date2_ms)

        // Convert back to days and return
        return Math.round(difference_ms/ONE_DAY)

    }

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.

            var datePicker = document.getElementById("datePicker");
             date = new WinJS.UI.DatePicker(datePicker);
            day = document.getElementById("day");
            month = document.getElementById("month");
            year = document.getElementById("year");
            date.addEventListener("change", getInfo);

        }
    });
})();
