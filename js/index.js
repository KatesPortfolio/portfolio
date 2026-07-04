const designButton = document.getElementById("design-button");

const portfolioContainer = document.getElementById("portfolio-container");
const filterButton = document.getElementById("filter-button");
const workTitle = document.getElementById("title-work");

function renderPortfolio() {
    portfolioContainer.innerHTML = ""; 

    const designProjects = projects.filter(p => p.category === "design");

    const grid = document.createElement("div");
    grid.className = "project-grid";

for (const project of designProjects) {
    
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <div class="project-image-placeholder"></div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-tools">${project.tools.join(", ")}</p>
        </div>
        <button id="filter-button">FILTER</button>
    `;

    grid.appendChild(card);
}

    portfolioContainer.appendChild(grid); 
}

filterButton.addEventListener("click", renderPortfolio)