// Education Marketing Calendar Application
class EducationCalendar {
    constructor() {
        this.currentMonth = null;
        this.currentIndex = 0;
        this.monthCircles = [];
        this.calendarData = {
            "2025-08": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "1 August: School Capital Funding Window opens",
                    "5 August: Finalise Autumn Term campaigns",
                    "12 August: HE clearing adverts peak ",
                    "Scottish schools return mid-August",
                    "14 August: A-level Results Day",
                    "15 August: International Student Orientation",
                    "19 August: Scottish Highers Results ",
                    "20 August: Academy Trust budget sign-off deadline",
                    "21 August: GCSE Results Day",
                    "26 August: Summer Bank Holiday (England/Wales)",
					"30 August: New teacher induction briefings",
                ],
                "tip": [
    "Run awareness ads while staff plan next year and results create buzz",
    "Launch results day social and email campaigns targeting both A-level and GCSE audiences; highlight quick-turnaround solutions and success stories",
    "Offer time-limited back-to-school bundles to capitalise on last-minute procurement before term starts"
]
            },
            "2025-09": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "1 September: Autumn Term starts (England, Wales, NI, most local authorities)",
					"1 September: Start of new financial year for academy schools",
                    "5 September: SEND Review publication expected",
					"5 September: 2025 International Day of Charity", 
					"8 September: International Literacy Day", 
                    "9 September: MAT Growth Fund applications open",
                    "10 September: UCAS cycle opens for 2026 entry",
					"10 September: World Suicide Prevention Day", 
                    "12 September: Stand Up to Cancer Day",
                    "15 September: Societies Fair",
                    "17 September: Early Careers Framework cohort starts",
                    "18 September: Trustees Annual Report prep begins",
                    "15-22 September: National Coding Week",
					"22-28 September: 2025 Recycle Week",
					"24 September: National Fitness Day", 
                    "27 September: European Day of Languages",
					"29 September: World Heart Day",
					"30 September: School Census Day (England)",
                ],
                "tip": [
    "Time product launches and outreach to the first two weeks of term, when new budgets are live and teachers are actively seeking resources",
    "Use welcome back messaging to re-engage dormant leads and nurture new contacts",
    "Run campaigns focused on new curriculum or policy changes for the new academic year"
]
            },
            "2025-10": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
				    "1-2 October: Yom Kippur", 
                    "1–5 October: Teacher Wellbeing Week",
					"3 October: Deadline for BETT Awards 2026 entries",
					"3 October: The National Education Show Cardiff", 
					"4 October: World Animal Day", 
					"4 October: World Space Week", 
					"5 October: World Teachers Day", 
					"6-12 October: Dyslexia Awareness Week", 
                    "7 October: Black History Month classroom packs",
					"8 October: Pupil premium allocation released for academy trusts and free schools", 
					"10 October: World Mental Health Day", 
					"13-24 October: Half Term (Scotland)", 
                    "14 October: HALO funding round results",
                    "15 October: Oxbridge & Medicine UCAS deadline",
					"16 October: World Food Day", 
                    "18 October: Autumn School Census in Wales",
                    "21 October: LA capital grant submissions close",
                    "25 October: International Artists Day",
                    "27 October: Autumn Half-Term (England & Wales) begins",
                    "31 October: UCAS Equal Consideration open",
                    "31 October: Halloween", 
                ],
                "tip": [
    "Focus on study skills and exam preparation resources",
    "Leverage Black History Month to promote inclusive resources, lesson packs, and DEI initiatives",
    "Launch safeguarding and anti-bullying content ahead of November's awareness weeks"
]
            },
            "2025-11": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "1 November: Budget planning opens for 2025–26",
					"3-7 November: Talk Money Week", 
                    "4–8 November: UK Parliament Week",
                    "5 November: Research Opportunities Fair",
                    "6 November: National School Governors’ Day",
                    "8 November: STEM Day teacher resources launch",
					"9-16 November: Inter Faith Week", 
					 "10-14 November: Anti-Bullying Week",
                    "11 November: Remembrance Day Services",
                    "15 November: International Education Week",
					"17-23 November: Road Safety Week", 
                    "19 November: International Men’s Day wellbeing focus",
					"19 November: Schools & Academies Show (Birmingham)", 
					"20 November: World Children’s Day campaigns",
					"25 November: Early Years Foundation Stage census",
					"27 November: Autumn Statement (DfE funding)",
					"30 November: End of Autumn Term Approaches"
                ],
                "tip": [
    "Use event-themed content to drive qualified leads",
    "Offer downloadable toolkits and compliance guides to support safeguarding and wellbeing initiatives",
    "Promote staff wellbeing resources as workloads peak before the Christmas break"
]
            },
            "2025-12": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
				    "1 December: Cyber Monday", 
                    "2 December: PISA results release",
					"3 December: International Day of Persons with Disabilities", 
                    "5 December: International Volunteer Day student projects",
                    "9 December: EdTech procurement framework update",
                    "10 December: Human Rights Day lesson packs",
					"Mid-December: Christmas holidays begin",
					"11 December: Chrismas Jumper Day", 
                    "18 December: KS2 SATs test timetable published ",
                    "20 December: Autumn Term ends",
                    "Winter graduation ceremonies",
                    "Holiday learning programmes",
                    "Next year budget planning"
                ],
                "tip": [
    "Engage with year-end reviews and New Year planning content",
    "Run gift guide or thank you campaigns for teachers and school leaders",
    "Share year in review insights and content to position your brand as a thought leader"
]
            },
            "2026-01": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "5 January: Spring Term starts",
					"9 January: Secondary GCSE resit results",
					"15 January: UCAS Application Deadline",
					"14 January: Main UCAS deadline",
					"15 January: Primary school admissions deadline",
					"16 January: Pupil premium allocation released for non-maintained special schools", 
					"18 January: World Religion Day", 
					"20 January: School Inspection Data Summary published",
                    "21–23 January: Bett Show London",
					"24 January: International Day of Education", 
					"27 January: Holocaust Memorial Day assemblies",
					"30 January: DfE Winter census (England)",
					"31 January: MAT budget forecast submission"
                ],
                "tip": [
    "High-impact period for EdTech launches around Bett",
    "Target decision-makers with new year, new solutions messaging and bundled offers",
    "Highlight compliance and data-protection solutions as schools update records for the new term"
]
            },
            "2026-02": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "1 February: National Storytelling Week",
                    "3–9 February: Children’s Mental Health Week",
					"4 February: World Cancer Day", 
                    "6 February: Safer Internet Day",
					"9-15 February: Childrens Mental Health Week", 
                    "10 February: Apprenticeship Week",
					"11 February: International Day of Girls & Women in Science", 
                    "12 February: IAAS SEND funding round opens",
					"9-13 February: Valentines Day Themed Resources",
                    "16-20 February: Spring Half-Term (England & Wales)",
                    "17 February: Teacher workload reduction consultations close",
					"17 February: Chinese New Year", 
					"17 February: Ramadan (17 and 18)", 
					"19-23 February: London Fashion Week", 
					"24 February: Procurement Act 2023 in force",
					"26 February: UCAS Extra opens",
					"27 February: International Stand up to Bullying Day", 
					"28 February: Year-end spend cut-off for many local authorities",
                    "University open days",
                    "Apprenticeship awareness",
                    "Teacher wellbeing focus"
                ],
                "tip": [
    "Focus on wellbeing resources and pilot programmes",
    "Align campaigns with Children's Mental Health Week to promote wellbeing, resilience, and safeguarding resources",
    "Promote inclusive and SEND resources for schools reviewing provision mid-year"
]
            },
            "2026-03": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
				    "1 March: St David's Day", 
					"2-7 March: National Careers Week", 
					"3 March: World Wildlife Day", 
					"4 March: Pancake Day", 
					"4 March: World Engineering Day", 
                    "5 March: World Maths Day",
					"6–15 March: British Science Week",
                    "6 March: World Book Day",
                    "11 March: Budget 2026 announced",
					"11 March: Young Carers Action Day", 
					"12 March: International School Meals Day", 
                    "17 March: School Business Professional Week",
                    "18 March: UCAS applicant day campaigns launch",
					"19-20 March: Eid al-Fitr", 
                    "20 March: International Day of Happiness",
					"21 March: World Down Syndrome Day", 
					"31 March: Financial year end (maintained schools)",
                    "Pi Day celebrations",
                    "Environmental awareness month",
                    "Student leadership elections"
                ],
                "tip": [
    "Leverage STEM and literacy themes for content marketing",
    "Capitalise on British Science Week and World Book Day with themed content and classroom resources",
    "Offer free revision guides and exam-prep materials as SATs and GCSEs approach"
]
            },
            "2026-04": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
				    "2 April: World Autism Awareness Day", 
					"2-10 April: Easter Holidays (Northern Ireland)", 
					"3 April: Good Friday", 
					"5 April: Easter Sunday", 
                    "7 April: Easter Monday",
					"7 April: World Health Day", 
                    "9 April: World Art Day",
                    "14 April: Early Years funding rates confirmed",
                    "17 April: Primary English hub funding bids close",
					"21 April: World Creativity and Innovation Day", 
                    "22 April: Summer Term starts",
					"22 April: Earth Day", 
                    "23 April: National Shakespeare Day resources",
					"23 April: International Girls in ICT Day",
					"29 April: End-of-year tax workshops for school business managers",
					"30 April: School Travel Awards entries close",
                    "Spring sports seasons",
                    "Revision timetables",
                    "Summer programme bookings",
                    "School trips planning"
                ],
                "tip": [
    "Run reading-themed competitions for engagement",
    "Launch Easter holiday learning campaigns for parents and students",
    "Use spring clean your tech messaging to encourage upgrades and renewals"
]
            },
            "2026-05": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
                    "2 May: Teacher of the Year nominations close",
                    "4 May: Early May Bank Holiday",
                    "4–10 May: Deaf Awareness Week",
					"8 May: VE Day", 
                    "11–15 May: KS2 SATs week",
                    "16 May: School Diversity Week",
					"18 May: International Museum Day", 
					"18-22 May: Walk to School Week", 
                    "19 May: GCSE exams begin",
                    "20 May: MAT conference season opens",
					"20 May: National Numeracy Day", 
                    "23 May: Summer Half-Term",
                    "25 May: Spring Bank Holiday",
					"29 May: Half Term (England and Wales)", 
					"30 May: National Creativity Day", 
                    "Year 11 study leave",
					"SATs week for Year 6",
					"GCSE and A-level exams begin",
					"University final assessments",
					"Eurovision educational themes"
                ],
                "tip": [
    "Support exam stress management and revision techniques",
    "Run SATs and GCSE support campaigns, focusing on stress-relief and revision resources",
    "Offer CPD and training packages for post-exam staff development"
]
            },
            "2026-06": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
				    "1-7 June: Volunteers Week", 
					"5 June: World Environment Day", 
                    "3–13 June: Phonics screening window",
                    "5 June: World Environment Day",
                    "8 June: World Oceans Day",
                    "13 June: GCSE exams end",
                    "17–21 June: National School Sports Week",
                    "17 June: Thank a Teacher Day",
					"21 June: World Music Day", 
					"24 June: A-level exams end",
					"25 June: Local authority tender deadlines for ICT services",
                    "Summer fete planning",
                    "Refugee Week education",
                    "Wimbledon educational themes",
                    "Transition week planning"
                ],
                "tip": [
    "Leverage appreciation campaigns and CSR angles",
    "Promote teacher appreciation campaigns around Thank a Teacher Day",
    "Target secondary schools with post-GCSE and post-A-level enrichment offers"
]
            },
            "2026-07": {
                "phase": ["All"],
                "region": ["UK-wide"],
                "events": [
				    "1 July: Summer Holidays in Scotland and NI Begins", 
                    "5 July: UCAS Clearing opens",
                    "7 July: NQT year completion certificates",
                    "10 July: KS2 SATs results published",
                    "14 July: Residential trip booking peaks",
					"18 July: World Listening Day", 
                    "18 July: Summer Term ends (most)",
					"22 July: DfE Sustainability awards",
                    "Summer learning programmes",
                    "Graduation celebrations",
                    "Staff recruitment drives",
                    "School maintenance period",
                    "September preparation"
                ],
                "tip": [
    "Ideal time for summer programmes and teacher development",
    "Promote summer CPD, leadership training, and wellbeing programmes for staff",
    "Target procurement managers with beat the rush deals for September delivery"
]
            }
        };
        
        this.monthNames = {
            "2025-08": { name: "August", year: "2025" },
            "2025-09": { name: "September", year: "2025" },
            "2025-10": { name: "October", year: "2025" },
            "2025-11": { name: "November", year: "2025" },
            "2025-12": { name: "December", year: "2025" },
            "2026-01": { name: "January", year: "2026" },
            "2026-02": { name: "February", year: "2026" },
            "2026-03": { name: "March", year: "2026" },
            "2026-04": { name: "April", year: "2026" },
            "2026-05": { name: "May", year: "2026" },
            "2026-06": { name: "June", year: "2026" },
            "2026-07": { name: "July", year: "2026" }
        };
        
        this.init();
    }
    
    init() {
        this.createTimelineCircles();
        this.setupEventListeners();
        this.setupKeyboardNavigation();
        this.setupModal();
        
        // Pre-select December 2025 on load
        setTimeout(() => {
            this.selectMonth("2025-12");
        }, 100);
    }
    
    createTimelineCircles() {
        const track = document.getElementById('track');
        const monthKeys = Object.keys(this.calendarData);
        
        monthKeys.forEach((monthKey, index) => {
            const monthData = this.monthNames[monthKey];
            const circle = document.createElement('div');
            circle.className = 'month-circle';
            circle.setAttribute('data-month', monthKey);
            circle.setAttribute('data-index', index);
            circle.setAttribute('tabindex', '0');
            circle.setAttribute('role', 'button');
            circle.setAttribute('aria-label', `View ${monthData.name} ${monthData.year} events`);
            
            circle.innerHTML = `
                <div class="month-name">${monthData.name}</div>
                <div class="month-year">${monthData.year}</div>
            `;
            
            circle.addEventListener('click', () => {
                this.selectMonth(monthKey);
            });
            
            // Add individual keydown listeners for each circle
            circle.addEventListener('keydown', (e) => {
                this.handleCircleKeyboard(e, index);
            });
            
            track.appendChild(circle);
            this.monthCircles.push(circle);
        });
    }
    
    selectMonth(monthKey) {
        // Remove active class from all circles
        this.monthCircles.forEach(circle => {
            circle.classList.remove('active');
        });
        
        // Add active class to selected circle
        const selectedCircle = document.querySelector(`[data-month="${monthKey}"]`);
        if (selectedCircle) {
            selectedCircle.classList.add('active');
            this.currentMonth = monthKey;
            this.currentIndex = parseInt(selectedCircle.getAttribute('data-index'));
            
            // Smooth scroll to selected circle
            selectedCircle.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }
        
        // Update info panel
        this.updateInfoPanel(monthKey);
    }
    
    updateInfoPanel(monthKey) {
        const monthData = this.calendarData[monthKey];
        const monthInfo = this.monthNames[monthKey];
        
        if (!monthData || !monthInfo) return;
        
        // Update month title
        const monthTitle = document.getElementById('month-title');
        monthTitle.textContent = `${monthInfo.name} ${monthInfo.year}`;
        
        // Update events list
const eventsList = document.getElementById('events-list');
eventsList.innerHTML = '';

monthData.events.forEach(event => {
    const li = document.createElement('li');
    li.textContent = event;
    li.classList.add('event-item');
    li.setAttribute('tabindex', '0'); // Accessibility: makes the item focusable
    eventsList.appendChild(li);
});
        
        // Update key tip
        const keyTipText = document.getElementById('key-tip-text');
        if (Array.isArray(monthData.tip)) {
    keyTipText.innerHTML = monthData.tip.map(tip => `<p>${tip}</p>`).join('');
} else {
    keyTipText.textContent = monthData.tip;
}
    }
    
    setupEventListeners() {
        // Main download button
        const downloadBtn = document.getElementById('download-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                this.showModal();
            });
        }
        
        // Header download button
        const headerDownloadBtn = document.getElementById('header-download-btn');
        if (headerDownloadBtn) {
            headerDownloadBtn.addEventListener('click', () => {
                this.showModal();
            });
        }
    }
    
    setupKeyboardNavigation() {
        // Global keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Only handle if no modal is open and not in an input field
            if (!document.getElementById('modal-overlay').classList.contains('show') && 
                !['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) {
                
                switch(e.key) {
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.navigateMonth(-1);
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.navigateMonth(1);
                        break;
                    case 'Home':
                        e.preventDefault();
                        this.navigateToMonth(0);
                        break;
                    case 'End':
                        e.preventDefault();
                        this.navigateToMonth(this.monthCircles.length - 1);
                        break;
                }
            }
        });
    }
    
    navigateMonth(direction) {
        const newIndex = this.currentIndex + direction;
        if (newIndex >= 0 && newIndex < this.monthCircles.length) {
            this.navigateToMonth(newIndex);
        } else if (direction > 0) {
            this.navigateToMonth(0); // Wrap to beginning
        } else {
            this.navigateToMonth(this.monthCircles.length - 1); // Wrap to end
        }
    }
    
    navigateToMonth(index) {
        if (index >= 0 && index < this.monthCircles.length) {
            const circle = this.monthCircles[index];
            const monthKey = circle.getAttribute('data-month');
            this.selectMonth(monthKey);
            circle.focus();
        }
    }
    
    handleCircleKeyboard(e, index) {
        switch(e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                const prevIndex = index > 0 ? index - 1 : this.monthCircles.length - 1;
                this.navigateToMonth(prevIndex);
                break;
                
            case 'ArrowRight':
                e.preventDefault();
                const nextIndex = index < this.monthCircles.length - 1 ? index + 1 : 0;
                this.navigateToMonth(nextIndex);
                break;
                
            case 'Enter':
            case ' ':
                e.preventDefault();
                const monthKey = e.target.getAttribute('data-month');
                this.selectMonth(monthKey);
                break;
                
            case 'Home':
                e.preventDefault();
                this.navigateToMonth(0);
                break;
                
            case 'End':
                e.preventDefault();
                this.navigateToMonth(this.monthCircles.length - 1);
                break;
        }
    }
    
    setupModal() {
        const modal = document.getElementById('modal-overlay');
        const modalClose = document.getElementById('modal-close');
        const leadForm = document.getElementById('lead-form');
        
        if (!modal || !modalClose || !leadForm) return;
        
        // Close modal handlers
        modalClose.addEventListener('click', () => {
            this.hideModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideModal();
            }
        });
        
        // Escape key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                this.hideModal();
            }
        });
        
        // Form submission
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
    }
    
    showModal() {
        const modal = document.getElementById('modal-overlay');
        if (modal) {
            modal.classList.add('show');
            
            // Focus on first input
            const firstInput = modal.querySelector('input');
            if (firstInput) {
                setTimeout(() => firstInput.focus(), 100);
            }
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    }
    
    hideModal() {
        const modal = document.getElementById('modal-overlay');
        if (modal) {
            modal.classList.remove('show');
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            // Return focus to download button
            const downloadBtn = document.getElementById('download-btn');
            if (downloadBtn) {
                downloadBtn.focus();
            }
        }
    }
    
    handleFormSubmission() {
        const form = document.getElementById('lead-form');
        if (!form) return;
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        // Basic validation
        if (!name || !email) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        this.hideModal();
        this.showSuccessMessage();
        this.triggerDownload();
        
        // Clear form
        form.reset();
    }
    
    showSuccessMessage() {
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
            successMessage.classList.add('show');
            
            // Hide after 4 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 4000);
        }
    }
    
    triggerDownload() {
        // Create a simple PDF-like content for download
        const pdfContent = `Education Marketing Calendar 2025-2026
        
Strategic planning for UK education marketing

This calendar includes all key events and marketing insights for the education sector.

Visit our website for more resources and updates.`;
        
        // Create and trigger download
        const blob = new Blob([pdfContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Education-Marketing-Calendar-2025-2026.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
    
    // Utility methods
    getCurrentMonth() {
        return this.currentMonth;
    }
    
    getCurrentIndex() {
        return this.currentIndex;
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.educationCalendar = new EducationCalendar();
});

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EducationCalendar;
}

