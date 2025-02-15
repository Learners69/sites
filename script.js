// Theme switching functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Theme toggle handler
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Sample resources data
const resources = [
    // Mathematics Resources
    {
        id: 1,
        title: "Basic Mathematics Fundamentals",
        description: "Introduction to basic mathematical concepts including arithmetic, algebra, and geometry basics.",
        subject: "mathematics",
        type: "books",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 2,
        title: "Intermediate Mathematics",
        description: "Advanced algebra, trigonometry, and pre-calculus concepts for intermediate learners.",
        subject: "mathematics",
        type: "pdf",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 3,
        title: "Advanced Mathematical Analysis",
        description: "Complex calculus, differential equations, and mathematical proofs.",
        subject: "mathematics",
        type: "notes",
        level: "advanced",
        downloadLink: "#"
    },

    // Science Resources
    {
        id: 4,
        title: "Introduction to Scientific Method",
        description: "Basic principles of scientific inquiry and experimental design.",
        subject: "science",
        type: "presentations",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 5,
        title: "Physics and Chemistry Foundations",
        description: "Comprehensive study of fundamental physics and chemistry concepts.",
        subject: "science",
        type: "videos",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 6,
        title: "Advanced Quantum Mechanics",
        description: "In-depth study of quantum mechanics and its applications.",
        subject: "science",
        type: "pdf",
        level: "advanced",
        downloadLink: "#"
    },

    // History Resources
    {
        id: 7,
        title: "World History Basics",
        description: "Introduction to major historical events and civilizations.",
        subject: "history",
        type: "books",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 8,
        title: "Medieval European History",
        description: "Detailed study of European history during the Middle Ages.",
        subject: "history",
        type: "notes",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 9,
        title: "Advanced Historical Analysis",
        description: "Critical analysis of historical events and their impact on modern society.",
        subject: "history",
        type: "presentations",
        level: "advanced",
        downloadLink: "#"
    },

    // Literature Resources
    {
        id: 10,
        title: "Basic Literary Concepts",
        description: "Introduction to literary devices, genres, and writing styles.",
        subject: "literature",
        type: "pdf",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 11,
        title: "World Literature Classics",
        description: "Study of classic literature from various cultures and time periods.",
        subject: "literature",
        type: "books",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 12,
        title: "Literary Theory and Criticism",
        description: "Advanced analysis of literary works and critical theory.",
        subject: "literature",
        type: "notes",
        level: "advanced",
        downloadLink: "#"
    },

    // Art Resources
    {
        id: 13,
        title: "Art Fundamentals",
        description: "Basic principles of drawing, color theory, and composition.",
        subject: "art",
        type: "videos",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 14,
        title: "Digital Art Techniques",
        description: "Intermediate digital art creation and design principles.",
        subject: "art",
        type: "exercises",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 15,
        title: "Advanced Art History",
        description: "Comprehensive study of art movements and their cultural impact.",
        subject: "art",
        type: "presentations",
        level: "advanced",
        downloadLink: "#"
    },

    // Music Resources
    {
        id: 16,
        title: "Music Theory Basics",
        description: "Introduction to musical notation, rhythm, and harmony.",
        subject: "music",
        type: "audio",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 17,
        title: "Intermediate Music Composition",
        description: "Study of musical composition techniques and arrangement.",
        subject: "music",
        type: "exercises",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 18,
        title: "Advanced Music Production",
        description: "Professional music production and sound engineering techniques.",
        subject: "music",
        type: "videos",
        level: "advanced",
        downloadLink: "#"
    },

    // Technology Resources
    {
        id: 19,
        title: "Computer Basics",
        description: "Introduction to computer systems and basic programming concepts.",
        subject: "technology",
        type: "pdf",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 20,
        title: "Web Development",
        description: "Intermediate web development with HTML, CSS, and JavaScript.",
        subject: "technology",
        type: "exercises",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 21,
        title: "Advanced AI and Machine Learning",
        description: "Advanced concepts in artificial intelligence and machine learning.",
        subject: "technology",
        type: "videos",
        level: "advanced",
        downloadLink: "#"
    },

    // Engineering Resources
    {
        id: 22,
        title: "Engineering Fundamentals",
        description: "Basic principles of engineering and design.",
        subject: "engineering",
        type: "books",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 23,
        title: "Mechanical Engineering Design",
        description: "Intermediate mechanical engineering principles and applications.",
        subject: "engineering",
        type: "presentations",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 24,
        title: "Advanced Robotics",
        description: "Advanced robotics engineering and automation systems.",
        subject: "engineering",
        type: "pdf",
        level: "advanced",
        downloadLink: "#"
    },

    // Medicine Resources
    {
        id: 25,
        title: "Human Anatomy Basics",
        description: "Introduction to human anatomy and physiology.",
        subject: "medicine",
        type: "videos",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 26,
        title: "Clinical Medicine",
        description: "Study of clinical procedures and patient care.",
        subject: "medicine",
        type: "pdf",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 27,
        title: "Advanced Surgery Techniques",
        description: "Advanced surgical procedures and medical interventions.",
        subject: "medicine",
        type: "videos",
        level: "advanced",
        downloadLink: "#"
    },

    // Business Resources
    {
        id: 28,
        title: "Business Fundamentals",
        description: "Introduction to business concepts and management.",
        subject: "business",
        type: "presentations",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 29,
        title: "Marketing Strategies",
        description: "Intermediate marketing concepts and business development.",
        subject: "business",
        type: "pdf",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 30,
        title: "Advanced Business Analytics",
        description: "Advanced business analysis and strategic management.",
        subject: "business",
        type: "exercises",
        level: "advanced",
        downloadLink: "#"
    },

    // Law Resources
    {
        id: 31,
        title: "Legal Studies Basics",
        description: "Introduction to legal concepts and systems.",
        subject: "law",
        type: "books",
        level: "beginner",
        downloadLink: "#"
    },
    {
        id: 32,
        title: "Constitutional Law",
        description: "Study of constitutional principles and case law.",
        subject: "law",
        type: "notes",
        level: "intermediate",
        downloadLink: "#"
    },
    {
        id: 33,
        title: "International Law",
        description: "Advanced study of international legal systems and regulations.",
        subject: "law",
        type: "pdf",
        level: "advanced",
        downloadLink: "#"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const subjectFilter = document.getElementById('subjectFilter');
const typeFilter = document.getElementById('typeFilter');
const levelFilter = document.getElementById('levelFilter');
const resourcesContainer = document.getElementById('resourcesContainer');

// Function to create resource card HTML
function createResourceCard(resource) {
    return `
        <div class="resource-card">
            <h3 class="resource-title">${resource.title}</h3>
            <p class="resource-description">${resource.description}</p>
            <div class="resource-meta">
                <span>${resource.subject}</span>
                <span>${resource.type}</span>
                <span>${resource.level}</span>
            </div>
            <div class="resource-actions">
                <button onclick="saveResource(${resource.id})" class="save-btn">
                    <i class="fas fa-bookmark"></i>
                </button>
                <button onclick="downloadResource(${resource.id})" class="download-btn">
                    <i class="fas fa-download"></i>
                </button>
            </div>
        </div>
    `;
}

// Function to filter resources
function filterResources() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedSubject = subjectFilter.value;
    const selectedType = typeFilter.value;
    const selectedLevel = levelFilter.value;

    const filteredResources = resources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm) ||
                            resource.description.toLowerCase().includes(searchTerm);
        const matchesSubject = !selectedSubject || resource.subject === selectedSubject;
        const matchesType = !selectedType || resource.type === selectedType;
        const matchesLevel = !selectedLevel || resource.level === selectedLevel;

        return matchesSearch && matchesSubject && matchesType && matchesLevel;
    });

    displayResources(filteredResources);
}

// Function to display resources
function displayResources(resourcesToShow) {
    resourcesContainer.innerHTML = resourcesToShow.map(resource => 
        createResourceCard(resource)
    ).join('');
}

// Event listeners
searchBtn.addEventListener('click', filterResources);
searchInput.addEventListener('input', filterResources);
subjectFilter.addEventListener('change', filterResources);
typeFilter.addEventListener('change', filterResources);
levelFilter.addEventListener('change', filterResources);

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
    initializeQuickFilters();
    initializeSavedResources();
    displayResources(resources);
});

// Quick Filters
function initializeQuickFilters() {
    const quickFilters = document.querySelectorAll('.quick-filter-btn');
    quickFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Remove active class from all filters
            quickFilters.forEach(f => f.classList.remove('active'));
            // Add active class to clicked filter
            filter.classList.add('active');
            // Apply the filter
            applyQuickFilter(filter.dataset.filter);
        });
    });
}

function applyQuickFilter(filterType) {
    // Add your filtering logic here based on the filterType
    console.log(`Filtering by: ${filterType}`);
}

// Saved Resources
const savedResources = JSON.parse(localStorage.getItem('savedResources') || '[]');

function initializeSavedResources() {
    const savedBtn = document.getElementById('savedResourcesBtn');
    const modal = document.getElementById('savedResourcesModal');
    const closeBtn = document.querySelector('.close-modal');

    savedBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        updateSavedResourcesList();
    });

    closeBtn.addEventListener('click', () => {
        closeModal(modal);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });

    // Add escape key listener to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal(modal);
        }
    });
}

function closeModal(modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

function saveResource(resourceId) {
    const resource = resources.find(r => r.id === resourceId);
    if (!resource) {
        showNotification('Resource not found!', 'error');
        return;
    }

    const index = savedResources.findIndex(item => item.id === resourceId);
    if (index === -1) {
        savedResources.push(resource);
        localStorage.setItem('savedResources', JSON.stringify(savedResources));
        showNotification('Resource saved successfully!', 'success');
    } else {
        showNotification('Resource already saved!', 'info');
    }
    updateSavedResourcesList();
}

function updateSavedResourcesList() {
    const container = document.getElementById('savedResourcesList');
    container.innerHTML = '';
    
    if (savedResources.length === 0) {
        container.innerHTML = '<p>No saved resources yet.</p>';
        return;
    }

    savedResources.forEach(resource => {
        container.innerHTML += createResourceCard(resource);
    });
}

function downloadResource(resourceId) {
    const resource = resources.find(r => r.id === resourceId);
    if (!resource) {
        showNotification('Resource not found!', 'error');
        return;
    }
    
    // Implement your download logic here
    showNotification(`Starting download: ${resource.title}`, 'info');
    console.log(`Downloading resource: ${resource.title}`);
}

// Notification System
class NotificationSystem {
    constructor() {
        this.container = document.getElementById('notificationsContainer');
        this.notifications = new Set();
    }

    show({ 
        type = 'info', 
        title = '', 
        message = '', 
        duration = 5000,
        icon = this.getIconForType(type)
    }) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="${icon}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-title">${title}</div>
                <div class="notification-message">${message}</div>
            </div>
            <button class="notification-close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
            <div class="notification-progress"></div>
        `;

        // Add to container
        this.container.appendChild(notification);
        this.notifications.add(notification);

        // Show animation
        requestAnimationFrame(() => {
            notification.classList.add('show');
        });

        // Setup progress bar
        const progress = notification.querySelector('.notification-progress');
        let width = 100;
        const interval = 10;
        const step = (interval * 100) / duration;

        const progressTimer = setInterval(() => {
            width -= step;
            progress.style.width = width + '%';
            
            if (width <= 0) {
                clearInterval(progressTimer);
                this.close(notification);
            }
        }, interval);

        // Setup close button only
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            clearInterval(progressTimer);
            this.close(notification);
        });

        // Auto remove after duration
        setTimeout(() => {
            if (this.notifications.has(notification)) {
                clearInterval(progressTimer);
                this.close(notification);
            }
        }, duration);
    }

    close(notification) {
        if (!this.notifications.has(notification)) return;
        
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
            this.notifications.delete(notification);
        }, 300);
    }

    getIconForType(type) {
        switch (type) {
            case 'success':
                return 'fas fa-check-circle';
            case 'error':
                return 'fas fa-exclamation-circle';
            case 'info':
            default:
                return 'fas fa-info-circle';
        }
    }
}

// Initialize notification system
const notificationSystem = new NotificationSystem();

// Notification helper function
function showNotification(message, type = 'info') {
    const config = {
        message,
        type,
        duration: 5000
    };

    switch (type) {
        case 'success':
            config.title = 'Success';
            break;
        case 'error':
            config.title = 'Error';
            break;
        case 'info':
        default:
            config.title = 'Information';
            break;
    }

    notificationSystem.show(config);
} 