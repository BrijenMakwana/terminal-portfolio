const portfolioAPI =
  "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22personal%22%5D%20%7B%0A%22name%22%3A%20name%2C%20%20%0A%22roles%22%3A%20roles%2C%0A%22introduction%22%3A%20introduction%2C%0A%22about%22%3A%20about%2C%0A%22skillsHeading%22%3AskillsHeading%2C%0A%22projectsHeading%22%3A%20projectsHeading%2C%0A%22projectsDescription%22%3A%20projectsDescription%2C%0A%22achievementsHeading%22%3AachievementsHeading%2C%0A%22achievementsDescription%22%3AachievementsDescription%2C%0A%22articlesHeading%22%3AarticlesHeading%2C%0A%22articlesDescription%22%3AarticlesDescription%2C%0A%22appsHeading%22%3AappsHeading%2C%0A%22appsDescription%22%3AappsDescription%2C%0A%22otherProjectsHeading%22%3AotherProjectsHeading%2C%0A%22otherProjectsDescription%22%3AotherProjectsDescription%2C%0A%22email%22%3Aemail%2C%0A%22phone%22%3Aphone%2C%0A%22skills%22%3A%20*%5B_type%20%3D%3D%20%22skills%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20%20image.asset-%3Eurl%0A%7D%2C%0A%22projects%22%3A%20*%5B_type%20%3D%3D%20%22projects%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%22description%22%3A%20description%2C%0A%20%20%22url%22%3A%20url%0A%7D%2C%0A%22achievements%22%3A%20*%5B_type%20%3D%3D%20%22achievements%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%22description%22%3A%20description%2C%0A%20%20%22url%22%3A%20url%0A%7D%2C%0A%22apps%22%3A%20*%5B_type%20%3D%3D%20%22apps%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%22url%22%3A%20url%0A%7D%2C%0A%22otherProjects%22%3A%20*%5B_type%20%3D%3D%20%22otherProjects%22%5D%7B%0A%20%20%22id%22%3A%20_id%2C%0A%20%20%22title%22%3A%20title%2C%0A%20%20%22image%22%3A%20image.asset-%3Eurl%2C%0A%20%20%22url%22%3A%20url%2C%0A%20%20%22description%22%3A%20description%2C%0A%20%20%22type%22%3A%20type%0A%7D%0A%7D";

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
    const roles = outcome.result[0].roles.split(",");
    roles.forEach((role) => {
      whoami += `<li class="data-li">${role}</li>`;
    });
    whoami += "</div>";

    // about command
    about = `<div class="command-result"><p class="about-text">${outcome.result[0].about}</p><div>`;

    // skills command
    const unformattedSkills = outcome.result[0].skills;
    unformattedSkills.forEach((skill) => {
      skills += `<li class="data-li">${skill.title}</li>`;
    });

    skills += "</div>";

    // projects command
    const unformattedProjects = outcome.result[0].projects;
    unformattedProjects.forEach((project) => {
      projects += `<tr>
    <th class="data-name-th"><a href="${project.url}" target="_blank" class="data-link">${project.title}</a></th>
    <td class="data-description-td">${project.description}</td>
  </tr>`;
    });
    projects += "</table></div>";

    // achievements command
    const unformattedAchievements = outcome.result[0].achievements;
    unformattedAchievements.forEach((achievement) => {
      achievements += `<tr>
    <th class="data-name-th"><a href="${achievement.url}" target="_blank" class="data-link">${achievement.title}</a></th>
    <td class="data-description-td">${achievement.description}</td>
  </tr>`;
    });
    achievements += "</table></div>";

    // contact command
    const unformattedContacts = [
      {
        contactTitle: "email",
        contactPlace: outcome.result[0].email,
      },
      {
        contactTitle: "github",
        contactPlace: "@BrijenMakwana",
      },
      {
        contactTitle: "hashnode",
        contactPlace: "brijen.hashnode.dev",
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

    unformattedContacts.forEach((item) => {
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
  {
    command: "cmd/ctrl + k",
    description: "Keyboard shortcut to clear the terminal",
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
