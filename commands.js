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

// about command
const about = `<div class="command-result"><p class="about-text">
I'm a Software Developer always looking to build useful project that can help people and solve meaningful problems.<br>
I Love building mobile and web applications. React Native and React are my first choice to create applications. I have multiple web apps live on the internet and many apps published on Play Store. I have been creating YouTube videos on ProgrammingKnowledge channel since 2018. I also like writing and have contributed multiple articles on GeeksForGeeks. As a content mentor at GeekForGeeks, I create video tutorials on the platform as well.</p></div>`;

export { help, whoami, about };
