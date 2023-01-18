// help command
const availableCommands = [
  {
    command: "whoami",
    description: "What I do",
  },
  {
    command: "about",
    description: "Know about me",
  },
  {
    command: "skills",
    description: "What tech stacks I use",
  },
  {
    command: "projects",
    description: "Yeah, I've made some really cool stuff, Wanna see!!",
  },
  {
    command: "Achievements",
    description: "A little bragging",
  },
  {
    command: "website",
    description: "My portfolio site but with GUI",
  },
  {
    command: "contact",
    description: "Want to say something?",
  },
  {
    command: "clear",
    description: "Clears the terminal of all output",
  },
];

let help = `<div class="command-result"><dl>`;
availableCommands.forEach((cmd) => {
  help += `<dt class="command-dt">${cmd.command}<dt><dd class="command-dd"> - ${cmd.description}</dd>`;
});
help += "</dl></div>";

// whoami command
const profession = [
  "developer",
  "youtube content creator",
  "content mentor at GeeksforGeeks",
  "author",
  "reader",
];

let whoami = `<div class="command-result">`;
profession.forEach((who) => {
  whoami += `<li class="data-li">${who}</li>`;
});

whoami += "</div>";

// about command
const about = `<div class="command-result"><p class="about-text">
I'm a Software Developer always looking to build useful project that can help people and solve meaningful problems.<br>
I Love building mobile and web applications. React Native and React are my first choice to create applications. I have multiple web apps live on the internet and many apps published on Play Store. I have been creating YouTube videos on ProgrammingKnowledge channel since 2018. I also like writing and have contributed multiple articles on GeeksForGeeks. As a content mentor at GeekForGeeks, I create video tutorials on the platform as well.</p></div>`;

// skills command
const mySkills = [
  "React Native",
  "React JS",
  "Javascript",
  "Typescript",
  "Redux",
  "HTML5",
  "CSS3",
  "Node.js",
  "GraphQL",
  "mongoDB",
  "Sanity",
  "Figma",
  "git",
  "Firebase",
];

let skills = `<div class="command-result">`;
mySkills.forEach((skill) => {
  skills += `<li class="data-li">${skill}</li>`;
});

skills += "</div>";

// projects command
const myProjects = [
  {
    id: 1,
    projectName: "Movie Mania",
    projectDescription:
      "Movie Mania is a one stop search site for all movies and tv series. You can stay updated with all latest releases, upcoming releases and much more. It shows a well organised collection of movies and series. It's created with React.",
  },
  {
    id: 2,
    projectName: "Devlink",
    projectDescription:
      "Each developer has a variety of links they would like to share with potential employers, colleagues, friends, and other people. You can share all of your links at once in one location using Devlink.",
  },
  {
    id: 3,
    projectName: "Foodora",
    projectDescription:
      "A digital food menu that vendors can create and get a QR code that can be scanned by foodies to get the menu on their smartphone.",
  },
  {
    id: 4,
    projectName: "Zomato Clone",
    projectDescription:
      "Zomato is an Indian multinational restaurant aggregator and food delivery company. I have made an effort to mirror the design of the original app exactly.",
  },
  {
    id: 5,
    projectName: "Crypto Tracker",
    projectDescription:
      "Crypto Tracker is an cryptocurrency tracking website created with React. You can find current values of all cryptocurrency out there. You can use this website to track all cryptocurrency. It also allows you to search for a specific cryptocurrency.",
  },
  {
    id: 6,
    projectName: "Rock, Paper, Scissors, Lizard, Spock",
    projectDescription:
      "Rock, Paper, Scissors, Lizard, Spock game created with HTML, CSS and Javascript. It's an extension of the classic game of chance, Rock Paper Scissors, created by Sam Kass and Karen Bryla. Because it seemed like most games of Rock Paper Scissors with people you know would end in a tie.",
  },
];

let projects = `<div class="command-result"><table class="data-table">`;
myProjects.forEach((project) => {
  projects += `<tr>
    <th class="data-name-th"><a href="https://github.com/BrijenMakwana/terminal-portfolio" target="_blank" class="data-link">${project.projectName}</a></th>
    <td class="data-description-td">${project.projectDescription}</td>
  </tr>`;
});
projects += "</table></div>";

// achievements command
const myAchievements = [
  {
    id: 1,
    achievementName: "YouTube Content Creator",
    achievementDescription:
      "I have been teaching programming on YouTube channel ProgrammingKnowledge. The channel has more than 1.5M subscribers and I have contributed 100+ learning videos till now. With all that combined, this playlists have lakhs of views.",
  },
  {
    id: 2,
    achievementName: "Technical Content Writer at GeeksforGeeks",
    achievementDescription:
      "I have multiple articles published on GeeksforGeeks. This articles have been proven very useful for many software developers.",
  },
  {
    id: 3,
    achievementName: "Author of the Book React Hooks 101",
    achievementDescription:
      "Read my book React Hooks 101, available on Amazon 📕. It's available as a paperback and as a ebook also on Kindle.",
  },
];

let achievements = `<div class="command-result"><table class="data-table">`;
myAchievements.forEach((achievement) => {
  achievements += `<tr>
    <th class="data-name-th"><a href="https://github.com/BrijenMakwana/terminal-portfolio" target="_blank" class="data-link">${achievement.achievementName}</a></th>
    <td class="data-description-td">${achievement.achievementDescription}</td>
  </tr>`;
});
achievements += "</table></div>";

// website command
const myWebsite = "https://brijenmakwana.vercel.app";
const website = `<div class="command-result">Redirecting you to my portfolio website <a href="${myWebsite}" target="_blank" class="data-link">${myWebsite}</a> ...</div>`;

export {
  help,
  whoami,
  about,
  skills,
  projects,
  achievements,
  myWebsite,
  website,
};
