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
              imageLink: "https://drive.google.com/file/d/1V2z7AOqrHGFlBdttKoOenJw_aUhp-l0T/view"
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
                },
                    {
                      name: "Zheng Fuze",
                      spiritAnimal: "Black Cat",
                      threeTopic: "The Future, Speculation and Management ✨",
                      excitedThings: "Wood Workshop and Lazer Cutting",
                      needHelp: "Language: it would help if people speak slowly and take time for me to think about what I want to say.",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                    {
                      name: "Lily",
                      spiritAnimal: "Black Cat",
                      threeTopic: "Reality show, strategy game, world",
                      excitedThings: "Being here!!",
                      needHelp: "English language",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                    {
                      name: "Hanming Xu",
                      spiritAnimal: "Cat",
                      threeTopic: "Travelling, technology, consumer gadget",
                      excitedThings: "Joining IDE",
                      needHelp: "Schedule things",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                    {
                      name: "Vamsi Madhav Tata",
                      spiritAnimal: "Ant",
                      threeTopic: "Literature, Yoga/meditation, Gaming",
                      excitedThings: "Starting IDE",
                      needHelp: "Nope",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                    {
                      name: "Yu Gan",
                      spiritAnimal: "Pig",
                      threeTopic: "Birds, dog, cat",
                      excitedThings: "Get my ID card",
                      needHelp: "Tired",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                    {
                      name: "Zhe Zhang",
                      spiritAnimal: "Parrot",
                      threeTopic: "Diving, counter strike (game), robots",
                      excitedThings: "Doing outdoor activities",
                      needHelp: "Knowing more about the culture/history/museums in London",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                    {
                      name: "Michael Jones",
                      spiritAnimal: "Stag deer 🦌",
                      threeTopic: "Adventure, travel, bikes!",
                      excitedThings: "Setting up a club for trail runners in London!",
                      needHelp: "Programming, learning to code.",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                    {
                      name: "Lucinda Tam",
                      spiritAnimal: "King penguin",
                      threeTopic: "Food, agriculture, birds",
                      excitedThings: "Using workshops, start box room project",
                      needHelp: "Experience w user centered design",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                    {
                      name: "Yuki Abe",
                      spiritAnimal: "Scorpio",
                      threeTopic: "Triathlon, surfing, Japan",
                      excitedThings: "IDE, meeting new friends, expanding skill sets",
                      needHelp: "English",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                    {
                      name: "Aleisha Jethwa",
                      spiritAnimal: "Bear",
                      threeTopic: "Music, Consciousness",
                      excitedThings: "Being in IDE! Excited about things to learn",
                      needHelp: "Programming, general engineering skills",
                      portfolioLink: "https://google.com",
                      imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                    },
                        {
                          name: "Nefeli Vitoraki",
                          spiritAnimal: "Otter",
                          threeTopic: "Ceramics, furniture, colour",
                          excitedThings: "Meeting new people",
                          needHelp: "Coding",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Anna Savel",
                          spiritAnimal: "A bird",
                          threeTopic: "History, Design and Sport",
                          excitedThings: "Getting started working on projects",
                          needHelp: "Engineering + Making aspect of things",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Lisa Nana",
                          spiritAnimal: "Lion",
                          threeTopic: "Hair, Fashion, Maths",
                          excitedThings: "Starting to work on projects",
                          needHelp: "How to navigate the innovation process",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Ioannis Papidakis",
                          spiritAnimal: "Wolf",
                          threeTopic: "Inventions, robotics, automation",
                          excitedThings: "Opportunities (personal, professional, academic, entrepreneurial)",
                          needHelp: "Design",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Duy Huynh",
                          spiritAnimal: "Black cat",
                          threeTopic: "Boxing, manufacturing technology, craft beers",
                          excitedThings: "Do induction so I can access the labs",
                          needHelp: "Coding",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Shira Sonigo",
                          spiritAnimal: "Snail",
                          threeTopic: "Health and nutrition, economy, Art",
                          excitedThings: "Curious on how the learning experience",
                          needHelp: "Food recommendations",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Jacob Samuel Krakowian Adams",
                          spiritAnimal: "Fox",
                          threeTopic: "Cooking, flag American football, Travelling",
                          excitedThings: "Trying to make new food",
                          needHelp: "Need some help with dyeing stuff",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Martha Pryke",
                          spiritAnimal: "Beaver",
                          threeTopic: "Politics, Art, the sea",
                          excitedThings: "Change. The unknown. Realising possibilities.",
                          needHelp: "Coding. Robotics.",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Carrie Rong",
                          spiritAnimal: "Dog - Energy!",
                          threeTopic: "Consciousness, Grocery stores",
                          excitedThings: "London Design week!",
                          needHelp: "Finding a flat!",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Greg Hargraves",
                          spiritAnimal: "Owl",
                          threeTopic: "Engineering, music, film",
                          excitedThings: "Learning",
                          needHelp: "Cooking",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                        {
                          name: "Zac Miller-Waugh",
                          spiritAnimal: "Kea",
                          threeTopic: "Photography, Books: Speculative Fiction, Boardgames",
                          excitedThings: "Collaboration in projects!",
                          needHelp: "Recommendations and woodworking",
                          portfolioLink: "https://google.com",
                          imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                        },
                            {
                              name: "Rachel (Xingyue) Lin",
                              spiritAnimal: "Whale",
                              threeTopic: "Whales, travel, outdoors, architecture",
                              excitedThings: "Exploring the local area",
                              needHelp: "Understanding the course and getting to know people",
                              portfolioLink: "https://google.com",
                              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                            },
                            {
                              name: "Mingkun Hong",
                              spiritAnimal: "Dog - ENFP and a ball of sunshine",
                              threeTopic: "Opera, Movies, Food and cooking",
                              excitedThings: "Musicals in London!",
                              needHelp: "Cooking",
                              portfolioLink: "https://google.com",
                              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                            },
                            {
                              name: "Francesca De Coppi",
                              spiritAnimal: "Eagle",
                              threeTopic: "Fashion, interior design, piezoelectric materials",
                              excitedThings: "Making the most of all the opportunities in the course",
                              needHelp: "Time management",
                              portfolioLink: "https://google.com",
                              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                            },
                            {
                              name: "Rikke Geelen",
                              spiritAnimal: "Dolphin",
                              threeTopic: "SDGs, food, the future",
                              excitedThings: "Back in London",
                              needHelp: "Coding",
                              portfolioLink: "https://google.com",
                              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                            },
                            {
                              name: "Juwon Jung",
                              spiritAnimal: "Hybrid turtle | fox",
                              threeTopic: "AI, people’s personal stories, philosophical concerns",
                              excitedThings: "Being an Imperial student!!",
                              needHelp: "Inspiration!!",
                              portfolioLink: "https://google.com",
                              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                            },
                            {
                              name: "Louis Brouwer",
                              spiritAnimal: "Brown Bear",
                              threeTopic: "Med tech, Design Theory, Surfing",
                              excitedThings: "Getting to meet everyone. Making new friends.",
                              needHelp: "Date spots in London.",
                              portfolioLink: "https://google.com",
                              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                            },
                            {
                              name: "Paul Nelson Morat",
                              spiritAnimal: "Dachshund",
                              threeTopic: "Music, Art, food",
                              excitedThings: "Franz Kafka",
                              needHelp: "Recommendations, woodworking",
                              portfolioLink: "https://google.com",
                              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                            },
                            {
                              name: "Ella Morgan",
                              spiritAnimal: "Dolphin",
                              threeTopic: "Cheerleading, travel, my cats",
                              excitedThings: "New opportunities",
                              needHelp: "CAD",
                              portfolioLink: "https://google.com",
                              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                            },
                            {
                              name: "Anoushka Sawardekar",
                              spiritAnimal: "Cat",
                              threeTopic: "Mystery books, Anime, Art",
                              excitedThings: "Living on my own and exploring London",
                              needHelp: "Getting a research assistantship",
                              portfolioLink: "https://google.com",
                              imageLink: "https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg"
                            },
                            {
                              name: "Nick Berry",
                              spiritAnimal: "Soth",
                              threeTopic: "Mythology, films and art",
                              excitedThings: "Many people",
                              needHelp: "Electrical Circuit",
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
