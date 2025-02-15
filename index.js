// Subject categories with their icons and descriptions
const subjects = [
    {
        id: 'mathematics',
        title: 'Mathematics',
        icon: 'fas fa-square-root-alt',
        description: 'Explore mathematical concepts from basic arithmetic to advanced calculus',
        color: '#4338ca'
    },
    {
        id: 'science',
        title: 'Science',
        icon: 'fas fa-atom',
        description: 'Discover the wonders of physics, chemistry, and biology',
        color: '#059669'
    },
    {
        id: 'history',
        title: 'History',
        icon: 'fas fa-landmark',
        description: 'Journey through time and learn about past civilizations',
        color: '#b45309'
    },
    {
        id: 'literature',
        title: 'Literature',
        icon: 'fas fa-book-open',
        description: 'Explore classic and contemporary literary works',
        color: '#7c3aed'
    },
    {
        id: 'art',
        title: 'Art',
        icon: 'fas fa-palette',
        description: 'Learn about visual arts, design, and creativity',
        color: '#db2777'
    },
    {
        id: 'music',
        title: 'Music',
        icon: 'fas fa-music',
        description: 'Study music theory, composition, and performance',
        color: '#9333ea'
    },
    {
        id: 'technology',
        title: 'Technology',
        icon: 'fas fa-laptop-code',
        description: 'Master programming, web development, and digital skills',
        color: '#2563eb'
    },
    {
        id: 'engineering',
        title: 'Engineering',
        icon: 'fas fa-cogs',
        description: 'Learn about mechanical, electrical, and software engineering',
        color: '#475569'
    },
    {
        id: 'medicine',
        title: 'Medicine',
        icon: 'fas fa-heartbeat',
        description: 'Study human anatomy, clinical practice, and healthcare',
        color: '#dc2626'
    },
    {
        id: 'business',
        title: 'Business',
        icon: 'fas fa-chart-line',
        description: 'Explore business management, marketing, and finance',
        color: '#0891b2'
    },
    {
        id: 'law',
        title: 'Law',
        icon: 'fas fa-balance-scale',
        description: 'Study legal systems, regulations, and justice',
        color: '#4f46e5'
    }
];

// Create subject card HTML
function createSubjectCard(subject, index) {
    return `
        <a href="subject.html?subject=${subject.id}" class="subject-card" style="--subject-color: ${subject.color}; --i: ${index}">
            <div class="subject-icon">
                <i class="${subject.icon}"></i>
            </div>
            <h2 class="subject-title">${subject.title}</h2>
            <p class="subject-description">${subject.description}</p>
            <div class="resource-count">
                ${getResourceCount(subject.id)} Resources
            </div>
            <div class="subject-card-arrow">
                <i class="fas fa-arrow-right"></i>
            </div>
        </a>
    `;
}

// Get resource count for a subject
function getResourceCount(subjectId) {
    return resources.filter(resource => resource.subject === subjectId).length;
}

// Filter subjects based on search
function filterSubjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSubjects = subjects.filter(subject => 
        subject.title.toLowerCase().includes(searchTerm) ||
        subject.description.toLowerCase().includes(searchTerm)
    );
    displaySubjects(filteredSubjects);
}

// Display subjects in grid
function displaySubjects(subjectsToShow) {
    const container = document.getElementById('subjectsContainer');
    container.innerHTML = subjectsToShow.map((subject, index) => 
        createSubjectCard(subject, index)
    ).join('');

    // Add scroll buttons if content overflows
    const scrollWidth = container.scrollWidth;
    const viewportWidth = container.offsetWidth;
    
    if (scrollWidth > viewportWidth) {
        // Add scroll buttons if not already present
        if (!document.querySelector('.scroll-btn-container')) {
            const scrollBtnContainer = document.createElement('div');
            scrollBtnContainer.className = 'scroll-btn-container';
            container.parentElement.appendChild(scrollBtnContainer);
        }

        // Initialize auto-scroll
        let scrollSpeed = 1; // Pixels per frame
        let isScrolling = true;
        let scrollDirection = 1; // 1 for right, -1 for left

        function autoScroll() {
            if (!isScrolling) return;

            container.scrollLeft += scrollSpeed * scrollDirection;

            // Check if we've reached the end or beginning
            if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
                // Reset to start for infinite loop
                container.scrollLeft = 0;
            }

            requestAnimationFrame(autoScroll);
        }

        // Start auto-scroll
        autoScroll();

        // Pause scrolling when hovering over container
        container.addEventListener('mouseenter', () => {
            isScrolling = false;
        });

        // Resume scrolling when mouse leaves container
        container.addEventListener('mouseleave', () => {
            isScrolling = true;
            autoScroll();
        });

        // Handle touch events for mobile
        container.addEventListener('touchstart', () => {
            isScrolling = false;
        });

        container.addEventListener('touchend', () => {
            isScrolling = true;
            autoScroll();
        });
    }
}

// Event listeners
searchBtn.addEventListener('click', filterSubjects);
searchInput.addEventListener('input', filterSubjects);

// Initialize home page
document.addEventListener('DOMContentLoaded', () => {
    displaySubjects(subjects);
}); 