document.addEventListener("DOMContentLoaded", function () {
    const calendarDiv = document.getElementById("calendar");

    // Function to create and display the calendar
    function createCalendar() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // Create the calendar header
        const header = document.createElement("h1");
        header.textContent = monthNames[currentMonth] + " " + currentYear;
        calendarDiv.appendChild(header);

        // Create the table element
        const table = document.createElement("table");
        calendarDiv.appendChild(table);

        // Create the table headers (days of the week)
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const thead = document.createElement("thead");
        table.appendChild(thead);
        const headerRow = document.createElement("tr");
        daysOfWeek.forEach(day => {
            const th = document.createElement("th");
            th.textContent = day;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Create the table body (calendar days)
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        let date = new Date(currentYear, currentMonth, 1);
        let dayCounter = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");

                if (i === 0 && j < date.getDay()) {
                    // Fill empty cells before the first day of the month
                    cell.textContent = "";
                } else if (dayCounter <= daysInMonth) {
                    // Fill in the days of the month
                    cell.textContent = dayCounter;
                    dayCounter++;
                } else {
                    // Fill empty cells after the last day of the month
                    cell.textContent = "";
                }

                row.appendChild(cell);
            }

            tbody.appendChild(row);
        }
    }

    createCalendar();
});