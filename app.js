// Constants and data
const MONTH_WEIGHTS = {
  "england_primary": {"Sep": 15, "Oct": 12, "Nov": 10, "Dec": 3, "Jan": 7, "Feb": 10, "Mar": 12, "Apr": 5, "May": 8, "Jun": 13, "Jul": 3, "Aug": 2},
  "england_secondary": {"Sep": 18, "Oct": 14, "Nov": 11, "Dec": 2, "Jan": 8, "Feb": 11, "Mar": 13, "Apr": 4, "May": 7, "Jun": 15, "Jul": 1, "Aug": 0},
  "england_higher": {"Sep": 20, "Oct": 15, "Nov": 12, "Dec": 5, "Jan": 10, "Feb": 12, "Mar": 10, "Apr": 6, "May": 5, "Jun": 8, "Jul": 2, "Aug": 1},
  "scotland_all": {"Aug": 8, "Sep": 20, "Oct": 15, "Nov": 12, "Dec": 3, "Jan": 9, "Feb": 11, "Mar": 10, "Apr": 5, "May": 4, "Jun": 12, "Jul": 1},
  "wales_all": {"Sep": 16, "Oct": 13, "Nov": 11, "Dec": 3, "Jan": 8, "Feb": 11, "Mar": 12, "Apr": 5, "May": 7, "Jun": 14, "Jul": 2, "Aug": 1},
  "ni_all": {"Sep": 17, "Oct": 13, "Nov": 10, "Dec": 3, "Jan": 8, "Feb": 10, "Mar": 12, "Apr": 5, "May": 8, "Jun": 13, "Jul": 3, "Aug": 2}
};

const MONTH_ANNOTATIONS = {
  "Sep": "Peak back-to-school engagement. Ideal for product launches, course enrollments, and new partnership announcements. Head teachers most accessible for strategic discussions.",
  "Oct": "Sustained high engagement as term settles. Perfect for ongoing campaigns, thought leadership content, and building relationships with key decision-makers.",
  "Nov": "Strong engagement continues. Excellent for webinars, events, and educational content. Avoid half-term week disruptions.",
  "Dec": "Engagement drops significantly. Focus on relationship maintenance, holiday greetings, and planning for January restart. Avoid major launches.",
  "Jan": "Moderate engagement as term resumes. Good for New Year initiatives, professional development offers, and budget planning discussions. Allow settling-in period.",
  "Feb": "Rising engagement. Ideal for spring term launches, assessment solutions, and preparation for upcoming academic year planning.",
  "Mar": "High engagement period. Perfect for next academic year planning discussions, contract renewals, and major product presentations.",
  "Apr": "Moderate engagement with Easter disruptions. Good for follow-up campaigns and relationship building, but avoid major launches during holidays.",
  "May": "Steady engagement. Excellent for summer term initiatives, exam preparation solutions, and early next-year planning.",
  "Jun": "Peak procurement season with 4-5x higher spending activity. Critical month for major contracts, budget approvals, and strategic partnerships.",
  "Jul": "Low engagement as term ends. Focus on planning activities, report sharing, and preparing for September restart.",
  "Aug": "Minimal engagement during summer break. Use for internal planning, content preparation, and relationship maintenance with key contacts."
};

const ENGAGEMENT_LEVELS = {
  "high": ["Sep", "Oct", "Nov", "Mar", "Jun"],
  "medium": ["Jan", "Feb", "May"],
  "low": ["Dec", "Apr", "Jul", "Aug"]
};

const MONTHS = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const MONTH_NAMES = ["September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July", "August"];

// Global variables
let currentBudget = 10000;
let currentDuration = 6;
let currentSector = 'all';
let currentRegion = 'england';
let budgetChart = null;
let monthlyAllocations = [];
let selectedMonths = [];

// DOM elements
const budgetSlider = document.getElementById('budget-slider');
const budgetBubble = document.getElementById('budget-bubble');
const durationSlider = document.getElementById('duration-slider');
const durationBubble = document.getElementById('duration-bubble');
const budgetPlus = document.getElementById('budget-plus');
const customBudget = document.getElementById('custom-budget');
const sectorSelect = document.getElementById('sector');
const regionSelect = document.getElementById('region');
const calendarGrid = document.getElementById('calendar-grid');
const exportBtn = document.getElementById('export-btn');
const leadModal = document.getElementById('lead-modal');
const modalClose = document.getElementById('modal-close');
const leadForm = document.getElementById('lead-form');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initCalendar();
    initChart();
    setupEventListeners();
    updateCampaign();
});

// Get weight key based on sector and region
function getWeightKey(sector, region) {
    if (region === 'scotland') return 'scotland_all';
    if (region === 'wales') return 'wales_all';
    if (region === 'ni') return 'ni_all';
    
    if (region === 'england') {
        if (sector === 'primary') return 'england_primary';
        if (sector === 'secondary') return 'england_secondary';
        if (sector === 'higher') return 'england_higher';
    }
    
    return 'england_primary'; // default fallback
}

// Get engagement level for a month
function getEngagementLevel(month) {
    if (ENGAGEMENT_LEVELS.high.includes(month)) return 'high';
    if (ENGAGEMENT_LEVELS.medium.includes(month)) return 'medium';
    return 'low';
}

// Calculate optimal months for campaign duration
function calculateOptimalMonths(duration, sector, region) {
    const weightKey = getWeightKey(sector, region);
    const weights = MONTH_WEIGHTS[weightKey];
    
    // Create array of months with their weights
    const monthsWithWeights = MONTHS.map(month => ({
        month: month,
        weight: weights[month] || 0
    }));
    
    // Sort by weight (descending)
    monthsWithWeights.sort((a, b) => b.weight - a.weight);
    
    // Select top X months
    const topMonths = monthsWithWeights.slice(0, duration);
    
    return topMonths;
}

// Initialize calendar
function initCalendar() {
    calendarGrid.innerHTML = '';
    
    MONTHS.forEach((month, index) => {
        const monthTile = document.createElement('div');
        const engagementLevel = getEngagementLevel(month);
        monthTile.className = `month-tile ${engagementLevel}`;
        monthTile.setAttribute('tabindex', '0');
        monthTile.setAttribute('role', 'button');
        monthTile.setAttribute('data-month', month);
        
        monthTile.innerHTML = `
            <h3 class="month-name">${MONTH_NAMES[index]}</h3>
            <p class="engagement-level">${engagementLevel.charAt(0).toUpperCase() + engagementLevel.slice(1)} Engagement</p>
            <p class="budget-amount" id="budget-${month}">£0</p>
        `;
        
        // Add accessibility
        monthTile.setAttribute('aria-label', `${MONTH_NAMES[index]} - ${engagementLevel} engagement - £0`);
        
        // Add hover tooltip
        monthTile.addEventListener('mouseenter', (e) => showTooltip(e, month));
        monthTile.addEventListener('mouseleave', hideTooltip);
        
        calendarGrid.appendChild(monthTile);
    });
}

// Initialize Chart.js
function initChart() {
    const ctx = document.getElementById('budget-chart').getContext('2d');
    
    budgetChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: MONTH_NAMES,
            datasets: [{
                label: 'Budget Allocation (£)',
                data: new Array(12).fill(0),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B', '#1FB8CD', '#FFC185'],
                borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B', '#1FB8CD', '#FFC185'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `£${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '£' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// Setup event listeners
function setupEventListeners() {
    // Budget slider
    budgetSlider.addEventListener('input', function() {
        if (!budgetPlus.checked) {
            currentBudget = parseInt(this.value);
            updateBudgetDisplay();
            updateCampaign();
        }
    });
    
    // Duration slider
    durationSlider.addEventListener('input', function() {
        currentDuration = parseInt(this.value);
        updateDurationDisplay();
        updateCampaign();
    });
    
    // Budget plus checkbox
    budgetPlus.addEventListener('change', function() {
        if (this.checked) {
            budgetSlider.disabled = true;
            customBudget.disabled = false;
            customBudget.focus();
            if (customBudget.value) {
                currentBudget = parseInt(customBudget.value);
                updateBudgetDisplay();
                updateCampaign();
            }
        } else {
            budgetSlider.disabled = false;
            customBudget.disabled = true;
            customBudget.value = '';
            currentBudget = parseInt(budgetSlider.value);
            updateBudgetDisplay();
            updateCampaign();
        }
    });
    
    // Custom budget input
    customBudget.addEventListener('input', function() {
        if (budgetPlus.checked && this.value) {
            currentBudget = parseInt(this.value);
            updateBudgetDisplay();
            updateCampaign();
        }
    });
    
    // Sector and region selects
    sectorSelect.addEventListener('change', function() {
        currentSector = this.value;
        updateCampaign();
    });
    
    regionSelect.addEventListener('change', function() {
        currentRegion = this.value;
        updateCampaign();
    });
    
    // Export button
    exportBtn.addEventListener('click', function() {
        showLeadModal();
    });
    
    // Modal close
    modalClose.addEventListener('click', function() {
        hideLeadModal();
    });
    
    // Modal backdrop click
    leadModal.addEventListener('click', function(e) {
        if (e.target === leadModal) {
            hideLeadModal();
        }
    });
    
    // Lead form submission
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitLead();
    });
}

// Update budget display
function updateBudgetDisplay() {
    const formattedBudget = '£' + currentBudget.toLocaleString();
    budgetBubble.textContent = formattedBudget;
    
    // Update bubble position
    const sliderValue = budgetPlus.checked ? 50000 : currentBudget;
    const sliderMin = parseInt(budgetSlider.min);
    const sliderMax = parseInt(budgetSlider.max);
    const percentage = ((sliderValue - sliderMin) / (sliderMax - sliderMin)) * 100;
    budgetBubble.style.left = `calc(${percentage}% - 10px)`;
}

// Update duration display
function updateDurationDisplay() {
    const monthText = currentDuration === 1 ? 'month' : 'months';
    durationBubble.textContent = `${currentDuration} ${monthText}`;
    
    // Update bubble position
    const percentage = ((currentDuration - 1) / 11) * 100;
    durationBubble.style.left = `calc(${percentage}% - 10px)`;
}

// Update campaign allocation
function updateCampaign() {
    // Calculate optimal months for the duration
    const optimalMonths = calculateOptimalMonths(currentDuration, currentSector, currentRegion);
    selectedMonths = optimalMonths.map(m => m.month);
    
    // Calculate total weight for selected months
    const totalWeight = optimalMonths.reduce((sum, m) => sum + m.weight, 0);
    
    // Initialize allocations array
    monthlyAllocations = new Array(12).fill(0);
    
    // Allocate budget proportionally to selected months
    optimalMonths.forEach(monthData => {
        const monthIndex = MONTHS.indexOf(monthData.month);
        const allocation = Math.round((currentBudget * monthData.weight) / totalWeight);
        monthlyAllocations[monthIndex] = allocation;
    });
    
    // Adjust for rounding errors
    const totalAllocated = monthlyAllocations.reduce((sum, amount) => sum + amount, 0);
    const difference = currentBudget - totalAllocated;
    if (difference !== 0 && optimalMonths.length > 0) {
        const firstSelectedIndex = MONTHS.indexOf(optimalMonths[0].month);
        monthlyAllocations[firstSelectedIndex] += difference;
    }
    
    // Update display
    updateCalendarDisplay();
    updateChart();
    updateBudgetDisplay();
    updateDurationDisplay();
}

// Update calendar display
function updateCalendarDisplay() {
    MONTHS.forEach((month, index) => {
        const budgetElement = document.getElementById(`budget-${month}`);
        const monthTile = budgetElement.closest('.month-tile');
        const amount = monthlyAllocations[index];
        const formattedAmount = '£' + amount.toLocaleString();
        
        budgetElement.textContent = formattedAmount;
        
        // Update tile appearance based on selection
        const engagementLevel = getEngagementLevel(month);
        if (selectedMonths.includes(month)) {
            monthTile.className = `month-tile ${engagementLevel}`;
        } else {
            monthTile.className = `month-tile ${engagementLevel} inactive`;
        }
        
        // Update aria-label
        const monthName = MONTH_NAMES[index];
        monthTile.setAttribute('aria-label', 
            `${monthName} - ${engagementLevel} engagement - ${formattedAmount}${selectedMonths.includes(month) ? ' (selected)' : ''}`);
    });
}

// Update chart
function updateChart() {
    if (budgetChart) {
        budgetChart.data.datasets[0].data = monthlyAllocations;
        budgetChart.update();
    }
}

// Enhanced tooltip functions with rich annotation content and improved positioning
function showTooltip(event, month) {
    // Remove any existing tooltips first
    hideAllTooltips();
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip show';
    tooltip.setAttribute('data-tooltip', 'true');
    
    const monthIndex = MONTHS.indexOf(month);
    const monthName = MONTH_NAMES[monthIndex];
    const engagementLevel = getEngagementLevel(month);
    const allocation = monthlyAllocations[monthIndex] || 0;
    const annotation = MONTH_ANNOTATIONS[month];
    
    tooltip.innerHTML = `
        <div class="tooltip-header">
            <strong>${monthName}</strong>
        </div>
        <div class="tooltip-content">
            <div class="tooltip-meta">
                ${engagementLevel.charAt(0).toUpperCase() + engagementLevel.slice(1)} Engagement<br>
                Budget: £${allocation.toLocaleString()}
            </div>
            <div class="tooltip-annotation">
                ${annotation}
            </div>
        </div>
    `;
    
    document.body.appendChild(tooltip);
    
    // Calculate optimal position with viewport boundary detection
    const rect = event.target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    
    let left = rect.left + scrollX + rect.width / 2 - tooltipRect.width / 2;
    let top = rect.top + scrollY - tooltipRect.height - 12;
    
    // Ensure tooltip stays within viewport horizontally
    const margin = 16;
    if (left < margin) {
        left = margin;
    } else if (left + tooltipRect.width > window.innerWidth - margin) {
        left = window.innerWidth - tooltipRect.width - margin;
    }
    
    // Ensure tooltip stays within viewport vertically
    if (top < scrollY + margin) {
        // Position below the element if not enough space above
        top = rect.bottom + scrollY + 12;
    }
    
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
    
    // Add arrow pointing to the element
    const arrow = document.createElement('div');
    arrow.className = 'tooltip-arrow';
    
    // Calculate arrow position
    const arrowLeft = rect.left + scrollX + rect.width / 2 - left - 6;
    arrow.style.left = Math.max(12, Math.min(arrowLeft, tooltipRect.width - 18)) + 'px';
    
    // Position arrow based on tooltip position
    if (top > rect.bottom + scrollY) {
        // Tooltip is below, arrow points up
        arrow.classList.add('tooltip-arrow-up');
        arrow.style.top = '-6px';
    } else {
        // Tooltip is above, arrow points down
        arrow.classList.add('tooltip-arrow-down');
        arrow.style.bottom = '-6px';
    }
    
    tooltip.appendChild(arrow);
    
    // Store reference for cleanup
    event.target._tooltip = tooltip;
    
    // Force layout and show with transition
    requestAnimationFrame(() => {
        tooltip.classList.add('tooltip-visible');
    });
}

function hideTooltip(event) {
    if (event.target._tooltip) {
        const tooltip = event.target._tooltip;
        tooltip.classList.remove('tooltip-visible');
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.remove();
            }
        }, 150);
        delete event.target._tooltip;
    }
}

function hideAllTooltips() {
    const tooltips = document.querySelectorAll('[data-tooltip="true"]');
    tooltips.forEach(tooltip => {
        tooltip.classList.remove('tooltip-visible');
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.remove();
            }
        }, 150);
    });
}

// Modal functions
function showLeadModal() {
    leadModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Focus first input
    setTimeout(() => {
        document.getElementById('lead-name').focus();
    }, 100);
}

function hideLeadModal() {
    leadModal.classList.remove('show');
    document.body.style.overflow = '';
    
    // Reset form
    leadForm.reset();
}

// Submit lead and export
async function submitLead() {
    const formData = new FormData(leadForm);
    const leadData = {
        name: formData.get('lead-name'),
        email: formData.get('lead-email'),
        company: formData.get('lead-company'),
        phone: formData.get('lead-phone'),
        challenges: formData.get('lead-challenges')
    };
    
    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.company) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadData.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    try {
        // Hide modal and export
        hideLeadModal();
        await exportToPDF();
        
    } catch (error) {
        console.log('Lead submission completed (demo mode)');
        hideLeadModal();
        await exportToPDF();
    }
}

// Export to PDF
async function exportToPDF() {
    try {
        // Show loading state
        exportBtn.textContent = 'Generating PDF...';
        exportBtn.disabled = true;
        
        // Create a container for export
        const exportContainer = document.createElement('div');
        exportContainer.style.cssText = `
            position: absolute;
            top: -10000px;
            left: -10000px;
            width: 1200px;
            background: white;
            padding: 40px;
            font-family: var(--font-family-base);
        `;
        
        // Clone and prepare content
        const calendarClone = document.querySelector('.calendar-section').cloneNode(true);
        const chartClone = document.querySelector('.chart-section').cloneNode(true);
        
        // Add header
        const header = document.createElement('div');
        header.innerHTML = `
            <h1 style="color: #00358e; text-align: center; margin-bottom: 20px;">
                Academic Calendar Marketing Planner
            </h1>
            <p style="text-align: center; color: #626c71; margin-bottom: 40px;">
                Budget: £${currentBudget.toLocaleString()} | 
                Duration: ${currentDuration} month${currentDuration === 1 ? '' : 's'} | 
                Sector: ${sectorSelect.options[sectorSelect.selectedIndex].text} | 
                Region: ${regionSelect.options[regionSelect.selectedIndex].text}
            </p>
        `;
        
        exportContainer.appendChild(header);
        exportContainer.appendChild(calendarClone);
        exportContainer.appendChild(chartClone);
        
        document.body.appendChild(exportContainer);
        
        // Generate canvas from HTML
        const canvas = await html2canvas(exportContainer, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: 1200,
            height: Math.max(1600, exportContainer.scrollHeight)
        });
        
        // Create PDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
        
        // Download PDF
        const timestamp = new Date().toISOString().slice(0, 10);
        pdf.save(`academic-marketing-planner-${timestamp}.pdf`);
        
        // Cleanup
        document.body.removeChild(exportContainer);
        
    } catch (error) {
        console.error('Export failed:', error);
        alert('Export failed. Please try again.');
    } finally {
        // Reset button
        exportBtn.textContent = 'Download Your Marketing Planner';
        exportBtn.disabled = false;
    }
}

// Keyboard navigation and cleanup
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (leadModal.classList.contains('show')) {
            hideLeadModal();
        } else {
            hideAllTooltips();
        }
    }
});

// Hide tooltips when scrolling
document.addEventListener('scroll', hideAllTooltips);
document.addEventListener('resize', hideAllTooltips);