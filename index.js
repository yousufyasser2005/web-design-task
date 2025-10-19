// index.js

// Set up the page background
document.body.style.backgroundColor = '#FFC0CB'; // Pink background
document.body.style.margin = '0';
document.body.style.padding = '20px';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';

// Create the title
const title = document.createElement('h1');
title.textContent = 'projects';
title.style.color = '#6A1B9A'; // Purple color
title.style.marginBottom = '20px';

// Create the grid container
const gridContainer = document.createElement('div');
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateColumns = 'repeat(6, 1fr)';
gridContainer.style.gap = '20px';
gridContainer.style.maxWidth = '1200px'; // Approximate width to fit 6 cards

// Function to create a single project card (defined once)
function createProjectCard(number) {
    const card = document.createElement('div');
    card.style.backgroundColor = 'white';
    card.style.borderRadius = '10px';
    card.style.padding = '20px';
    card.style.textAlign = 'center';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = `project ${number}`;
    projectTitle.style.color = '#6A1B9A';
    projectTitle.style.margin = '0';

    const name = document.createElement('p');
    name.textContent = 'youssef';
    name.style.color = '#6A1B9A';
    name.style.marginTop = '5px';

    card.appendChild(projectTitle);
    card.appendChild(name);

    return card;
}

// Create the first card manually
const firstCard = createProjectCard(1);
gridContainer.appendChild(firstCard);

// Use a for loop to create the remaining cards (2 to 18)
for (let i = 2; i <= 18; i++) {
    const card = createProjectCard(i);
    gridContainer.appendChild(card);
}

// Create the footer text
const footerText = document.createElement('p');
footerText.textContent = 'task made by: Yousuf Yasser El-Shaer';
footerText.style.color = '#6A1B9A';
footerText.style.marginTop = '20px';
footerText.style.textAlign = 'center';

// Append title, grid, and footer to the body
document.body.appendChild(title);
document.body.appendChild(gridContainer);
document.body.appendChild(footerText);