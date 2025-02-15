// Get subject from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const currentSubject = urlParams.get('subject');

// Update page title and header
document.title = `${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)} Resources - EduHub`;
document.getElementById('subjectTitle').textContent = `${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)} Resources`;

// Filter resources for current subject
function filterSubjectResources() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedType = typeFilter.value;
    const selectedLevel = levelFilter.value;

    const filteredResources = resources.filter(resource => {
        const matchesSubject = resource.subject === currentSubject;
        const matchesSearch = resource.title.toLowerCase().includes(searchTerm) ||
                            resource.description.toLowerCase().includes(searchTerm);
        const matchesType = !selectedType || resource.type === selectedType;
        const matchesLevel = !selectedLevel || resource.level === selectedLevel;

        return matchesSubject && matchesSearch && matchesType && matchesLevel;
    });

    displayResources(filteredResources);
}

// Event listeners for subject page
searchBtn.addEventListener('click', filterSubjectResources);
searchInput.addEventListener('input', filterSubjectResources);
typeFilter.addEventListener('change', filterSubjectResources);
levelFilter.addEventListener('change', filterSubjectResources);

// Initialize subject page
document.addEventListener('DOMContentLoaded', () => {
    if (!currentSubject) {
        window.location.href = 'index.html';
        return;
    }
    filterSubjectResources();
}); 