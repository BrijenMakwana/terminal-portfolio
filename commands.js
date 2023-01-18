const portfolioAPI =
  "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22personal%22%5D%7B%0A%20%20AboutMeText%2C%0A%20%20position%2C%0A%20%20email%2C%0A%20%20%22projects%22%3A%20*%5B_type%3D%3D%22projects%22%5D%7B%0A%20%20title%2C%0A%20%20description%2C%0A%20%20url%0A%7D%2C%0A%22skills%22%3A*%5B_type%3D%3D%22skills%22%5D%7B%0A%20%20title%0A%7D%2C%20%0A%22achievements%22%3A%20*%5B_type%3D%3D%22achievements%22%5D%7B%0A%20%20title%2C%0A%20%20description%2C%0A%20%20url%0A%7D%2C%0A%7D";

let about;
let whoami = `<div class="command-result">`;
let skills = `<div class="command-result">`;
let projects = `<div class="command-result"><table class="data-table">`;
let achievements = `<div class="command-result"><table class="data-table">`;
let contact = `<div class="command-result"><dl>`;

fetch(portfolioAPI)
  .then((data) => data.json())
  .then((outcome) => {
    // whoami command
    const positions = outcome.result[0].position.split(",");
    positions.forEach((who) => {
      whoami += `<li class="data-li">${who}</li>`;
    });
    whoami += "</div>";

    // about command
    about = `<div class="command-result"><p class="about-text">${outcome.result[0].AboutMeText}</p><div>`;

    // skills command
    const mySkills = outcome.result[0].skills;
    mySkills.forEach((skill) => {
      skills += `<li class="data-li">${skill.title}</li>`;
    });

    skills += "</div>";

    // projects command
    const myProjects = outcome.result[0].projects;
    myProjects.forEach((project) => {
      projects += `<tr>
    <th class="data-name-th"><a href="${project.url}" target="_blank" class="data-link">${project.title}</a></th>
    <td class="data-description-td">${project.description}</td>
  </tr>`;
    });
    projects += "</table></div>";

    // achievements command
    const myAchievements = outcome.result[0].achievements;
    myAchievements.forEach((achievement) => {
      achievements += `<tr>
    <th class="data-name-th"><a href="${achievement.url}" target="_blank" class="data-link">${achievement.title}</a></th>
    <td class="data-description-td">${achievement.description}</td>
  </tr>`;
    });
    achievements += "</table></div>";

    // contact command
    const myContacts = [
      {
        contactTitle: "email",
        contactPlace: outcome.result[0].email,
      },
      {
        contactTitle: "instagram",
        contactPlace: "I am not dependent on the approval of others.",
      },
      {
        contactTitle: "twitter",
        contactPlace: "No time to meddle in other people's lives",
      },
    ];

    myContacts.forEach((item) => {
      contact += `<dt class="data-dt">${item.contactTitle}<dt><dd class="data-dd"> - ${item.contactPlace}</dd>`;
    });
    contact += "</dl></div>";
  })
  .catch(() => alert("Please try again....."));

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
  help += `<dt class="data-dt">${cmd.command}<dt><dd class="data-dd"> - ${cmd.description}</dd>`;
});
help += "</dl></div>";

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
  contact,
};
