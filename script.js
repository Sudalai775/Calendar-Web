// Define the dayOrders object
const dayOrders = {
    // June 2026
    '2026-06-01': 1, '2026-06-02': 2, '2026-06-03': 3, '2026-06-04': 4, '2026-06-05': 5,
    '2026-06-08': 6, '2026-06-09': 1, '2026-06-10': 2, '2026-06-11': 3, '2026-06-12': 4,
    '2026-06-15': 5, '2026-06-16': 6, '2026-06-17': 1, '2026-06-18': 2, '2026-06-19': 3,
    '2026-06-22': 4, '2026-06-23': 5, '2026-06-24': 6, '2026-06-25': 1, '2026-06-26': 2,
    '2026-06-29': 3, '2026-06-30': 4,

    // July 2026
    '2026-07-01': 5, '2026-07-02': 6, '2026-07-03': 1,
    '2026-07-06': 2, '2026-07-07': 3, '2026-07-08': 4, '2026-07-09': 5, '2026-07-10': 6,
    '2026-07-13': 1, '2026-07-14': 2, '2026-07-15': 3, '2026-07-16': 4, '2026-07-17': 5,
    '2026-07-20': 6, '2026-07-21': 1, '2026-07-22': 2, '2026-07-23': 3, '2026-07-24': 4,
    '2026-07-27': 5, '2026-07-28': 6, '2026-07-29': 1, '2026-07-30': 2, '2026-07-31': 3,

    // August 2026
    '2026-08-03': 4, '2026-08-04': 5, '2026-08-05': 6, '2026-08-06': 1, '2026-08-07': 2,
    '2026-08-10': 3, '2026-08-11': 4, '2026-08-12': 5, '2026-08-13': 6, '2026-08-14': 1,
    '2026-08-17': 2, '2026-08-18': 3, '2026-08-19': 4, '2026-08-20': 5, '2026-08-21': 6,
    '2026-08-24': 1, '2026-08-25': 2, '2026-08-26': 3, '2026-08-27': 4, '2026-08-28': 5,
    '2026-08-31': 6,

    // September 2026
    '2026-09-01': 1, '2026-09-02': 2, '2026-09-03': 3, '2026-09-04': 4,
    '2026-09-07': 5, '2026-09-08': 6, '2026-09-09': 1, '2026-09-10': 2, '2026-09-11': 3,
    '2026-09-14': 4, '2026-09-15': 5, '2026-09-16': 6, '2026-09-17': 1, '2026-09-18': 2,
    '2026-09-21': 3, '2026-09-22': 4, '2026-09-23': 5, '2026-09-24': 6, '2026-09-25': 1,
    '2026-09-28': 2, '2026-09-29': 3, '2026-09-30': 4,

    // October 2026
    '2026-10-01': 5, '2026-10-02': 6,
    '2026-10-05': 1, '2026-10-06': 2, '2026-10-07': 3, '2026-10-08': 4, '2026-10-09': 5,
    '2026-10-12': 6, '2026-10-13': 1, '2026-10-14': 2, '2026-10-15': 3, '2026-10-16': 4,
    '2026-10-19': 5, '2026-10-20': 6, '2026-10-21': 1, '2026-10-22': 2, '2026-10-23': 3,
    '2026-10-26': 4, '2026-10-27': 5, '2026-10-28': 6, '2026-10-29': 1, '2026-10-30': 2,

    // November 2026
    '2026-11-02': 3, '2026-11-03': 4, '2026-11-04': 5, '2026-11-05': 6, '2026-11-06': 1,
    '2026-11-09': 2, '2026-11-10': 3, '2026-11-11': 4, '2026-11-12': 5, '2026-11-13': 6,
    '2026-11-16': 1, '2026-11-17': 2, '2026-11-18': 3, '2026-11-19': 4, '2026-11-20': 5,
    '2026-11-23': 6, '2026-11-24': 1, '2026-11-25': 2, '2026-11-26': 3, '2026-11-27': 4,
    '2026-11-30': 5,

    // December 2026
    '2026-12-01': 6, '2026-12-02': 1, '2026-12-03': 2, '2026-12-04': 3,
    '2026-12-07': 4, '2026-12-08': 5, '2026-12-09': 6, '2026-12-10': 1, '2026-12-11': 2,
    '2026-12-14': 3, '2026-12-15': 4, '2026-12-16': 5, '2026-12-17': 6, '2026-12-18': 1,
    '2026-12-21': 2, '2026-12-22': 3, '2026-12-23': 4, '2026-12-24': 5, '2026-12-25': 6,
    '2026-12-28': 1, '2026-12-29': 2, '2026-12-30': 3, '2026-12-31': 4,
};

// Define class schedules
const classSchedule = {
    1: ["LANG", "JAVA/JS", "VAL_ED/RS", "ENG", "JAVA/JS/SM DLAB"],
    2: ["EVS", "LANG", "ENG", "JAVA/JS/RJ DLAB", "JAVA/JS"],
    3: ["ENG", "JAVA/JS", "LANG", "JAVA/JS/BJ DLAB", "ACC"],
    4: ["NM/JAVA_THEORY/JS/GD DLAB", "ENG", "NM/JAVA/JS DLAB", "LANG", "ACC"],
    5: ["ACC", "ENG", "JAVA/JS", "JAVA/JS/BJ DLAB", "LANG"],
    6: ["JAVA/JS", "LANG", "JAVA/JS/RS/ DLAB", "VAL_ED/NV", "ENG"]
};

// Define the holiday object
const holidays = {
   '2025-01-01': 'NEW YEAR',
    '2025-01-13': 'BHOGI',
    '2025-01-14': 'PONGAL',
    '2025-01-15': 'THIRUVALLUR DAY/INDIAN ARMY DAY',
    '2025-01-16': 'UZHAVAR THIRUNAL NATIONAL STARTUP DAY',
    '2025-01-17': 'CIVIL RIGHTS DAY',
    '2025-01-18': 'NATIONAL FOREST DAY',
    '2025-02-11': 'THAIPUSAM',
    '2025-03-31': 'RAMZAN',
};

// Define the timings for each period
const periodTimings = [
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:40 PM - 03:35 PM',
    '03:35 PM - 04:30 PM'
];

// Define global variables for elements and date
const daysContainer = document.getElementById('days');
const monthElement = document.getElementById('month');
const prevButton = document.getElementById('prevMonth');
const nextButton = document.getElementById('nextMonth');
const timetable = document.getElementById('timetable');
const selectedDateElement = document.getElementById('selectedDate');
const backButton = document.getElementById('back');
const timetableBody = document.getElementById('timetableBody');
const todayButton = document.getElementById('todayButton');
let date = new Date();

// Function to render the calendar
// Function to render the calendar
const renderCalendar = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const prevLastDate = new Date(year, month, 0).getDate();

    // Debugging output
    console.log(`Current Date: ${date}`);
    console.log(`Month: ${month}`);
    console.log(`Year: ${year}`);
    console.log(`First Day of Month: ${firstDay}`);
    console.log(`Last Date of Month: ${lastDate}`);

    monthElement.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;
    daysContainer.innerHTML = '';

    // Previous month's dates
    for (let i = firstDay; i > 0; i--) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('padding-day');
        dayElement.textContent = prevLastDate - i + 1;
        daysContainer.appendChild(dayElement);
    }

    // Current month's dates
    for (let i = 1; i <= lastDate; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('month-day');
        dayElement.textContent = i;

        const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;

        // Log the formatted date for debugging
        console.log(`Formatted Date: ${formattedDate}`);

        // Highlight today's date
        const todayDate = new Date().toISOString().split('T')[0];
        if (formattedDate === todayDate) {
            dayElement.classList.add('current-day');
        }

        // Highlight Sundays and holidays
        const dayOfWeek = new Date(year, month, i).getDay();
        if (dayOfWeek === 0) {
            // Sunday highlight
            dayElement.style.backgroundColor = '#ffcccc'; // Red for Sundays
        } else if (holidays[formattedDate]) {
            // Holiday highlight
            dayElement.style.backgroundColor = '#ccffcc'; // Green for holidays
            dayElement.title = holidays[formattedDate]; // Tooltip with holiday name
        }

        // Attach the click event to show the timetable
        dayElement.addEventListener('click', () => showTimetable(formattedDate));
        daysContainer.appendChild(dayElement);
    }

    // Next month's padding days
    const totalDays = firstDay + lastDate;
    const nextDays = 7 - (totalDays % 7);
    if (nextDays < 7) {
        for (let i = 1; i <= nextDays; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('padding-day');
            dayElement.textContent = i;
            daysContainer.appendChild(dayElement);
        }
    }
};

// Function to show the timetable for a given date
const showTimetable = (dateString) => {
    selectedDateElement.textContent = `Timetable for ${dateString}`;
    timetableBody.innerHTML = '';

    const dayOrder = dayOrders[dateString];
    const holidayName = holidays[dateString];

    // Create timetable content
    let timetableContent = `
        <h2>Selected Date: ${dateString}</h2>
        <h3>Day Order: ${dayOrder || 'N/A'}</h3>
        <h4>Timetable</h4>
        <table>
            <thead>
                <tr>
                    <th>Period</th>
                    <th>Subject</th>
                </tr>
            </thead>
            <tbody>
    `;

    if (dayOrder && classSchedule[dayOrder]) {
        const schedule = classSchedule[dayOrder];
        schedule.forEach((subject, index) => {
            timetableContent += `
                <tr>
                    <td>${periodTimings[index]}</td>
                    <td>${subject}</td>
                </tr>
            `;
        });
    } else {
        timetableContent += `
            <tr>
                <td colspan="2">No classes scheduled.</td>
            </tr>
        `;
    }

    // Close the table
    timetableContent += `
            </tbody>
        </table>
    `;

    // Add holiday details if applicable
    if (holidayName) {
        timetableContent += `
            <div class="holiday-info">
                <h4>Holiday</h4>
                <p>${holidayName}</p>
            </div>
        `;
    }

    // Update timetable body
    timetableBody.innerHTML = timetableContent;

    // Show the timetable and hide the calendar
    timetable.style.display = 'block';
    document.querySelector('.card').style.display = 'none';
};

// Function to go to the previous month
const goToPreviousMonth = () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
};

// Function to go to the next month
const goToNextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
};

// Function to go to the current month
const goToCurrentMonth = () => {
    date = new Date();
    renderCalendar();
};

// Event listeners for buttons
prevButton.addEventListener('click', goToPreviousMonth);
nextButton.addEventListener('click', goToNextMonth);
todayButton.addEventListener('click', goToCurrentMonth);
backButton.addEventListener('click', () => {
    timetable.style.display = 'none';
    document.querySelector('.card').style.display = 'block';
});

// Initial render of the calendar
renderCalendar();
