document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-container');

    const people = [
            {
              name: "Muchen ZHANG",
              spiritAnimal: "Wolf",
              threeTopic: "Electronics, Adventure Sports, Drones",
              excitedThings: "Social and networking",
              needHelp: "Programme structure and content",
              portfolioLink: "https://google.com",
              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Yuyi Yang",
              "spiritAnimal": "Dog",
              "threeTopic": "Fashion, Fitness, and Food",
              "excitedThings": "Moving to apartment",
              "needHelp": "Coding",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Guannan Liu",
              "spiritAnimal": "Bunny 🐰",
              "threeTopic": "Sports, Music, AI",
              "excitedThings": "Imagine Dragons coming next year",
              "needHelp": "Machine Learning",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Yuyi Wang",
              "spiritAnimal": "Cat",
              "threeTopic": "Environment, Design, Textiles",
              "excitedThings": "Being one of IDE",
              "needHelp": "Coding",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Benjamin Cooper",
              "spiritAnimal": "Fox",
              "threeTopic": "Emerging Tech, Sustainability, Fun Philosophy",
              "excitedThings": "Laundry (and Tennis)",
              "needHelp": "Navigating living on your own (lived with roommates now completely on my own)",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Nitin Premkumar",
              "spiritAnimal": "Elephant",
              "threeTopic": "Power Lifting, Cars, Music",
              "excitedThings": "Sleeping",
              "needHelp": "Finding a pillow",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Curro Guillen",
              "spiritAnimal": "Eagle",
              "threeTopic": "(1) Music, (2) Books, and (3) Movies",
              "excitedThings": "My bike! Cycling in general",
              "needHelp": "Everything! I come from a different background. Interested in technical and design processes",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Sri Archana Rani Merla",
              "spiritAnimal": "Rabbit",
              "threeTopic": "Japan, Biology, Materials",
              "excitedThings": "Going home and eating some Indian food",
              "needHelp": "Map of things to do at Imperial and RCA",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Luke Hale",
              "spiritAnimal": "Turtle",
              "threeTopic": "Music, Science, Art",
              "excitedThings": "IDE",
              "needHelp": "Mechanical engineering",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Bana Quronfuleh",
              "spiritAnimal": "Turtle",
              "threeTopic": "Physics, Books, Sustainability",
              "excitedThings": "Starting this course",
              "needHelp": "Metrology",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Siana Bezuhanova",
              "spiritAnimal": "Sea Turtle",
              "threeTopic": "AI, Design, Cooking",
              "excitedThings": "IDE",
              "needHelp": "Learn anything technical",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Christian Abbott",
              "spiritAnimal": "Fox",
              "threeTopic": "Food and Cooking, DIY Projects, Coffee",
              "excitedThings": "Excited to finish the induction process",
              "needHelp": "Time management",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
            {
              "name": "Scott Lee",
              "spiritAnimal": "Dolphin",
              "threeTopic": "History (World), Mental Health, Design",
              "excitedThings": "Socialise and make new friends",
              "needHelp": "Work/life balance",
              "portfolioLink": "https://google.com",
              "imageLink": "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
            },
                {
                  name: "Isaac Igbokwe",
                  spiritAnimal: "Elephant",
                  threeTopic: "Psychology, Business, Fashion",
                  excitedThings: "Simple yet impressive Impact Innovations with tangible benefits for people & planet",
                  needHelp: "Organisation routine / template",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Tian Mai",
                  spiritAnimal: "Cat",
                  threeTopic: "Technology, video games, photography",
                  excitedThings: "The London challenge tomorrow!",
                  needHelp: "Hand sketching",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Yuzhen Fu",
                  spiritAnimal: "Tiger",
                  threeTopic: "Sports, film, music",
                  excitedThings: "Pushing boundaries as an introvert",
                  needHelp: "English speaking and hearing",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Will Harris",
                  spiritAnimal: "Lemur",
                  threeTopic: "Biology, photography, architecture",
                  excitedThings: "Grand challenge",
                  needHelp: "Mechanics/Robotics",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Yukta Pathak",
                  spiritAnimal: "Owl",
                  threeTopic: "Netflix, sustainability, religious philosophy",
                  excitedThings: "Exploring London and living on my own",
                  needHelp: "Events happening in and around the area (London)",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Moin Mohammed Mulla",
                  spiritAnimal: "Lion",
                  threeTopic: "Gym, apple, mental health",
                  excitedThings: "Being here",
                  needHelp: "Improving coding skills",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Zayna Ahmed",
                  spiritAnimal: "Raccoon",
                  threeTopic: "Music, fun fact, languages",
                  excitedThings: "New people",
                  needHelp: "Time management",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Antoine Mehdi Eladib",
                  spiritAnimal: "Martin bird",
                  threeTopic: "Photography, music events, ceramics",
                  excitedThings: "Movie nights and IDE projects",
                  needHelp: "Coding, finding a job and physical prototyping",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Yacob Wilfred Sitorus",
                  spiritAnimal: "Wolf",
                  threeTopic: "Film, fashion, people's personal history",
                  excitedThings: "Moving here and starting IDE / Moby's concert",
                  needHelp: "Brushing up technical skills for IDE",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Gruffydd Gozali",
                  spiritAnimal: "Mountain goat",
                  threeTopic: "Books (fiction and non fiction), Startups, Film and art",
                  excitedThings: "Geoengineering",
                  needHelp: "Hmm… programming",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Jubilee Tai",
                  spiritAnimal: "Salmon",
                  threeTopic: "Muaythai, people’s personal history, fashion",
                  excitedThings: "Personal maturity and growth",
                  needHelp: "Getting around campus / feeling confident enough about the technical skills",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Edward White",
                  spiritAnimal: "Stoat",
                  threeTopic: "Music, Films, Anime & Manga",
                  excitedThings: "Tomorrow, for the project group allocation",
                  needHelp: "Getting on with learning new software and going through with it (e.g. Unreal).",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Calvin Calica",
                  spiritAnimal: "Turtle",
                  threeTopic: "Music (ambient music), Movies (lost in translation), Design material research",
                  excitedThings: "Cyber physical systems",
                  needHelp: "Guidance and advice on how to navigate IDE",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Tong Zhang",
                  spiritAnimal: "Dog",
                  threeTopic: "Consuming Electronics, rocket, 3D printing",
                  excitedThings: "IDE",
                  needHelp: "Socializing",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                },
                {
                  name: "Cheng Xin Zhao",
                  spiritAnimal: "Hamster",
                  threeTopic: "Academic background, music, movies, the future",
                  excitedThings: "New environment and making friends",
                  needHelp: "3D modelling",
                  portfolioLink: "https://google.com",
                  imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                }
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
