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

// Sample resources data - you can modify this according to your needs
const resources = [
    {
        id: 1,
        title: "Calculus Fundamentals",
        description: "A comprehensive guide to basic calculus concepts including limits, derivatives, and integrals.",
        subject: "mathematics",
        type: "books",
        level: "intermediate",
        downloadLink: "https://example.com/download/calculus-book"
    },
    {
        id: 2,
        title: "Physics Notes - Mechanics",
        description: "Detailed notes covering Newton's laws, motion, and energy conservation.",
        subject: "science",
        type: "notes",
        level: "beginner",
        downloadLink: "https://example.com/download/physics-notes"
    },
    // Add more resources as needed
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
            <a href="${resource.downloadLink}" class="download-btn" target="_blank">Download</a>
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

// Initial display
displayResources(resources); 