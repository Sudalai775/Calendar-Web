const dayOrders = {
   
    '2026-06-01': 1, '2026-06-02': 2, '2026-06-03': 3, '2026-06-04': 4, '2026-06-05': 5,
    '2026-06-08': 6, '2026-06-09': 1, '2026-06-10': 2, '2026-06-11': 3, '2026-06-12': 4,
    '2026-06-15': 5, '2026-06-16': 6, '2026-06-17': 1, '2026-06-18': 2, '2026-06-19': 3,
    '2026-06-22': 4, '2026-06-23': 5, '2026-06-24': 6, '2026-06-25': 1, '2026-06-26': 2,
    '2026-06-29': 3, '2026-06-30': 4,

    '2026-07-01': 5, '2026-07-02': 6, '2026-07-03': 1,
    '2026-07-06': 2, '2026-07-07': 3, '2026-07-08': 4, '2026-07-09': 5, '2026-07-10': 6,
    '2026-07-13': 1, '2026-07-14': 2, '2026-07-15': 3, '2026-07-16': 4, '2026-07-17': 5,
    '2026-07-20': 6, '2026-07-21': 1, '2026-07-22': 2, '2026-07-23': 3, '2026-07-24': 4,
    '2026-07-27': 5, '2026-07-28': 6, '2026-07-29': 1, '2026-07-30': 2, '2026-07-31': 3,

    '2026-08-03': 4, '2026-08-04': 5, '2026-08-05': 6, '2026-08-06': 1, '2026-08-07': 2,
    '2026-08-10': 3, '2026-08-11': 4, '2026-08-12': 5, '2026-08-13': 6, '2026-08-14': 1,
    '2026-08-17': 2, '2026-08-18': 3, '2026-08-19': 4, '2026-08-20': 5, '2026-08-21': 6,
    '2026-08-24': 1, '2026-08-25': 2, '2026-08-26': 3, '2026-08-27': 4, '2026-08-28': 5,
    '2026-08-31': 6,

    '2026-09-01': 1, '2026-09-02': 2, '2026-09-03': 3, '2026-09-04': 4,
    '2026-09-07': 5, '2026-09-08': 6, '2026-09-09': 1, '2026-09-10': 2, '2026-09-11': 3,
    '2026-09-14': 4, '2026-09-15': 5, '2026-09-16': 6, '2026-09-17': 1, '2026-09-18': 2,
    '2026-09-21': 3, '2026-09-22': 4, '2026-09-23': 5, '2026-09-24': 6, '2026-09-25': 1,
    '2026-09-28': 2, '2026-09-29': 3, '2026-09-30': 4,

    '2026-10-01': 5, '2026-10-02': 6,
    '2026-10-05': 1, '2026-10-06': 2, '2026-10-07': 3, '2026-10-08': 4, '2026-10-09': 5,
    '2026-10-12': 6, '2026-10-13': 1, '2026-10-14': 2, '2026-10-15': 3, '2026-10-16': 4,
    '2026-10-19': 5, '2026-10-20': 6, '2026-10-21': 1, '2026-10-22': 2, '2026-10-23': 3,
    '2026-10-26': 4, '2026-10-27': 5, '2026-10-28': 6, '2026-10-29': 1, '2026-10-30': 2,

    '2026-11-02': 3, '2026-11-03': 4, '2026-11-04': 5, '2026-11-05': 6, '2026-11-06': 1,
    '2026-11-09': 2, '2026-11-10': 3, '2026-11-11': 4, '2026-11-12': 5, '2026-11-13': 6,
    '2026-11-16': 1, '2026-11-17': 2, '2026-11-18': 3, '2026-11-19': 4, '2026-11-20': 5,
    '2026-11-23': 6, '2026-11-24': 1, '2026-11-25': 2, '2026-11-26': 3, '2026-11-27': 4,
    '2026-11-30': 5,

    '2026-12-01': 6, '2026-12-02': 1, '2026-12-03': 2, '2026-12-04': 3,
    '2026-12-07': 4, '2026-12-08': 5, '2026-12-09': 6, '2026-12-10': 1, '2026-12-11': 2,
    '2026-12-14': 3, '2026-12-15': 4, '2026-12-16': 5, '2026-12-17': 6, '2026-12-18': 1,
    '2026-12-21': 2, '2026-12-22': 3, '2026-12-23': 4, '2026-12-24': 5, '2026-12-25': 6,
    '2026-12-28': 1, '2026-12-29': 2, '2026-12-30': 3, '2026-12-31': 4,
};

const classSchedule = {
    1: ["Language Lab", "Java/JS Programming", "Value Education", "English Communication", "Software Modeling Lab"],
    2: ["EVS", "Language Lab", "English Communication", "Web Tech Lab", "Java/JS Programming"],
    3: ["English Communication", "Java/JS Programming", "Language Lab", "Business Java Lab", "Accounting"],
    4: ["Networks/Theory Lab", "English Communication", "Web Dev Lab", "Language Lab", "Accounting"],
    5: ["Accounting", "English Communication", "Java/JS Programming", "Business Java Lab", "Language Lab"],
    6: ["Java/JS Programming", "Language Lab", "Research Methods Lab", "Value Education", "English Communication"]
};

const holidays = {
    '2026-08-15': 'Independence Day 🇮🇳',
    '2026-10-02': 'Gandhi Jayanti',
    '2026-12-25': 'Christmas Day 🎄'
};

const periodTimings = [
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:40 PM - 03:35 PM',
    '03:35 PM - 04:30 PM'
];

const ACADEMIC_START = '2026-06-01';
const ACADEMIC_END = '2026-12-31';


let currentYear = 2026;
let currentMonth = 5; // June


const elements = {
    daysGrid: document.getElementById('daysGrid'),
    currentDateLabel: document.getElementById('currentDateLabel'),
    prevBtn: document.getElementById('prevMonth'),
    nextBtn: document.getElementById('nextMonth'),
    todayBtn: document.getElementById('todayBtn'),
    modal: document.getElementById('modal'),
    modalTitle: document.getElementById('modalTitle'),
    modalBody: document.getElementById('modalBody'),
    closeModal: document.getElementById('closeModal')
};


function formatDate(year, month, day) {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function isDateInAcademicRange(dateStr) {
    return dateStr >= ACADEMIC_START && dateStr <= ACADEMIC_END;
}

function getWeekdayName(year, month, day) {
    const date = new Date(year, month, day);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}


function renderCalendar() {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    elements.currentDateLabel.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    elements.prevBtn.disabled = false;
    elements.nextBtn.disabled = false;

    elements.daysGrid.innerHTML = '';

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'day-cell empty';
        elements.daysGrid.appendChild(empty);
    }

    const today = new Date();
    const isCurrentMonthToday = (today.getFullYear() === currentYear && today.getMonth() === currentMonth);

    for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = formatDate(currentYear, currentMonth, d);
        const dayOrder = dayOrders[dateStr];
        const dayOfWeek = new Date(currentYear, currentMonth, d).getDay();
        const isSunday = dayOfWeek === 0;
        const isHoliday = holidays[dateStr];
        const isToday = isCurrentMonthToday && today.getDate() === d;
        const isInAcademicRange = isDateInAcademicRange(dateStr);
        
        const hasSchedule = isInAcademicRange && dayOrder && !isHoliday && !isSunday;

        const dayDiv = document.createElement('div');
        dayDiv.className = 'day-cell';
        
        if (isToday) dayDiv.classList.add('today');
        if (isSunday) dayDiv.classList.add('sunday');
        if (isHoliday) dayDiv.classList.add('holiday');
        if (hasSchedule) dayDiv.classList.add('has-schedule');

        const dayNum = document.createElement('span');
        dayNum.className = 'day-number';
        dayNum.textContent = d;
        dayDiv.appendChild(dayNum);

        
        if (hasSchedule && dayOrder) {
            const orderSpan = document.createElement('span');
            orderSpan.className = 'day-order-badge';
            orderSpan.textContent = `Day ${dayOrder}`;
            dayDiv.appendChild(orderSpan);
        } 
       
        else if (isHoliday && !isSunday) {
            const holidaySpan = document.createElement('span');
            holidaySpan.className = 'day-order-badge';
            holidaySpan.textContent = '🎉 Holiday';
            dayDiv.appendChild(holidaySpan);
        }

        dayDiv.addEventListener('click', () => showSchedule(dateStr));
        elements.daysGrid.appendChild(dayDiv);
    }

   
    const totalCells = firstDay + daysInMonth;
    const remainingCells = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 0; i < remainingCells; i++) {
        const empty = document.createElement('div');
        empty.className = 'day-cell empty';
        elements.daysGrid.appendChild(empty);
    }
}


function showSchedule(dateStr) {
    const day = parseInt(dateStr.split('-')[2]);
    const weekdayName = getWeekdayName(currentYear, currentMonth, day);
    elements.modalTitle.textContent = `${weekdayName}, ${dateStr}`;

    let content = '';

    
    const isInRange = isDateInAcademicRange(dateStr);

    if (!isInRange) {
        content = `
            <div class="empty-state">
                <div>📅</div>
                <h3>Outside Academic Period</h3>
                <p>Class schedules are only available from <strong>June 2026 to December 2026</strong>.</p>
                <p style="margin-top: 12px; color: #64748b;">You can still browse the calendar, but no schedule data exists for this date.</p>
            </div>
        `;
    }
    
    else if (holidays[dateStr]) {
        content = `
            <div class="empty-state">
                <div>🎉</div>
                <h3>Official Holiday</h3>
                <p><strong>${escapeHtml(holidays[dateStr])}</strong></p>
                <p>All academic activities are suspended for the day.</p>
            </div>
        `;
    }
    
    else if (dayOrders[dateStr]) {
        const order = dayOrders[dateStr];
        const schedule = classSchedule[order];
        
        if (schedule && schedule.length) {
            content = `
                <div>
                    <span class="status-badge">📖 Day Order ${order}</span>
                </div>
                <table class="info-table">
                    <thead>
                        <tr>
                            <th>Time Slot</th>
                            <th>Subject / Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${schedule.map((subject, index) => `
                            <tr>
                                <td>${escapeHtml(periodTimings[index] || 'TBA')}</td>
                                <td><strong>${escapeHtml(subject)}</strong></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        } else {
            content = `
                <div class="empty-state">
                    <div>⚠️</div>
                    <h3>Schedule Unavailable</h3>
                    <p>Schedule information for Day ${order} is currently unavailable.</p>
                </div>
            `;
        }
    }
    
    else {
        const date = new Date(dateStr);
        const isSunday = date.getDay() === 0;
        
        if (isSunday) {
            content = `
                <div class="empty-state">
                    <div>☀️</div>
                    <h3>Sunday</h3>
                    <p>No classes scheduled. Enjoy your weekend!</p>
                </div>
            `;
        } else {
            content = `
                <div class="empty-state">
                    <div>📚</div>
                    <h3>No Classes Scheduled</h3>
                    <p>This date falls on a non-working day or academic break.</p>
                </div>
            `;
        }
    }

    elements.modalBody.innerHTML = content;
    elements.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    elements.modal.classList.remove('active');
    document.body.style.overflow = '';
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}


function goToPrevMonth() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar();
}

function goToNextMonth() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar();
}

function goToToday() {
    const today = new Date();
    currentYear = today.getFullYear();
    currentMonth = today.getMonth();
    renderCalendar();
}


elements.prevBtn.addEventListener('click', goToPrevMonth);
elements.nextBtn.addEventListener('click', goToNextMonth);
elements.todayBtn.addEventListener('click', goToToday);
elements.closeModal.addEventListener('click', closeModal);

elements.modal.addEventListener('click', (e) => {
    if (e.target === elements.modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modal.classList.contains('active')) {
        closeModal();
    }
});


renderCalendar();
