const portfolioAPI = `https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*[_type == "personal"] {
  "roles": roles,
  "about": about,
  "email": email,
  "skills": *[ _type == "skills"] {
    "id": _id,
    "title": title,
    "image": image.asset->url
  },
  "projects": *[ _type == "projects"] {
    "id": _id,
    "title": title,
    "image": image.asset->url,
    "description": description,
    "url": url
  },
  "achievements": *[ _type == "achievements"] {
    "id": _id,
    "title": title,
    "image": image.asset->url,
    "description": description,
    "url": url
  },
}`;

let about, roles, skills, projects, achievements, email;

let aboutSectionHTML,
  whoAmISectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  achievementsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
  websiteSectionHTML;

const getAbout = () => {
  const renderData = `<div class="command-result"><p class="about-text">${about}</p><div>`;

  return renderData;
};

const getRoles = () => {
  let renderData = `<div class="command-result">`;

  roles.forEach((role) => {
    renderData += `<li class="data-li">${role}</li>`;
  });
  renderData += "</div>";

  return renderData;
};

const getSkills = () => {
  let renderData = `<div class="command-result">`;

  skills.forEach((skill) => {
    renderData += `<li class="data-li">${skill.title}</li>`;
  });
  renderData += "</div>";

  return renderData;
};

const getProjects = () => {
  let renderData = `<div class="command-result"><table class="data-table">`;

  projects.forEach((project) => {
    renderData += `<tr>
    <th class="data-name-th"><a href="${project.url}" target="_blank" class="data-link">${project.title}</a></th>
    <td class="data-description-td">${project.description}</td>
  </tr>`;
  });
  renderData += "</table></div>";

  return renderData;
};

const getAchievements = () => {
  let renderData = `<div class="command-result"><table class="data-table">`;

  achievements.forEach((achievement) => {
    renderData += `<tr>
      <th class="data-name-th"><a href="${achievement.url}" target="_blank" class="data-link">${achievement.title}</a></th>
      <td class="data-description-td">${achievement.description}</td>
    </tr>`;
  });
  renderData += "</table></div>";

  return renderData;
};

const getContect = () => {
  let renderData = `<div class="command-result"><dl>`;

  const contacts = [
    {
      contactTitle: "email",
      contactPlace: email,
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

  contacts.forEach((item) => {
    renderData += `<dt class="data-dt">${item.contactTitle}<dt><dd class="data-dd"> - ${item.contactPlace}</dd>`;
  });
  renderData += "</dl></div>";

  return renderData;
};

const getHelp = () => {
  let renderData = `<div class="command-result"><dl>`;

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

  availableCommands.forEach((cmd) => {
    renderData += `<dt class="data-dt">${cmd.command}<dt><dd class="data-dd"> - ${cmd.description}</dd>`;
  });
  renderData += "</dl></div>";

  return renderData;
};

const website = "https://brijenmakwana.vercel.app";

const getWebsite = () => {
  const renderData = `<div class="command-result">Redirecting you to my portfolio website <a href="${website}" target="_blank" class="data-link">${website}</a> ...</div>`;

  return renderData;
};

const getPortfolio = () => {
  fetch(portfolioAPI)
    .then((data) => data.json())
    .then((portfolio) => {
      about = portfolio.result[0].about;
      roles = portfolio.result[0].roles.split(",");
      skills = portfolio.result[0].skills;
      projects = portfolio.result[0].projects;
      achievements = portfolio.result[0].achievements;
      email = portfolio.result[0].email;
    })
    .then(() => {
      aboutSectionHTML = getAbout();
      whoAmISectionHTML = getRoles();
      skillsSectionHTML = getSkills();
      projectsSectionHTML = getProjects();
      achievementsSectionHTML = getAchievements();
      contactSectionHTML = getContect();
      helpSectionHTML = getHelp();
      websiteSectionHTML = getWebsite();
    })
    .catch(() => alert("Something went wrong!!"));
};

getPortfolio();

export {
  aboutSectionHTML,
  whoAmISectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  achievementsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
  website,
  websiteSectionHTML,
};
