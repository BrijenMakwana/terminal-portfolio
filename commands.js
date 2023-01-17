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
  whoami += `<li class="whoami-li">${who}</li>`;
});

whoami += "</div>";

export { help, whoami };
