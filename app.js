document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-container');

    const people = [
        {
            name: "John Doe",
            spiritAnimal: "Dragon",
            threeTopic: "Football, Technology, and Startups",
            excitedThings: "I'm excited to learn more in this course and meet new people.",
            needHelp: "London accommodation, I'm moving to London next month and I'm looking for a place to stay. I'm also looking for a mentor who can guide me in my career.",
            portfolioLink: "https://bit.ly/saffanportfolio",
            imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg",
        },
    ];

    people.forEach(person => {
        const card = document.createElement('div');
        card.className = 'card';
    
        card.innerHTML = `
            <div class="person-image">
                <img src="${person.imageLink}" alt="${person.name}" class="profile-image">
            </div>
    
            <div class="name">${person.name}</div>

            <div class="characteristic">My Spirit Animal</div>
            <div class="placeholder">${person.spiritAnimal}</div>
            
            <div class="characteristic">3 Topics I Love Chatting About</div>
            <div class="placeholder">${person.threeTopic}</div>
            
            <div class="characteristic">Something I’m Excited About Right Now</div>
            <div class="placeholder">${person.excitedThings}</div>
            
            <div class="characteristic">Something I Need Help With Right Now</div>
            <div class="placeholder">${person.needHelp}</div>
    
            <div class="portfolio-button">
                <div class="button" id="portfolio-link-${person.name.replace(/\s+/g, '-')}" onclick="window.open('${person.portfolioLink}', '_blank')">
                    <div class="label">Portfolio</div>
                    <img class="icon-left" alt="" src="./image/chevron.png">
                </div>
            </div>
        `;
    
        container.appendChild(card);
    });
    
    
});
