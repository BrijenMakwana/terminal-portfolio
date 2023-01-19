import {
  whoami,
  help,
  about,
  skills,
  projects,
  achievements,
  myWebsite,
  website,
  contact,
} from "./commands.js";

const command = document.getElementById("command");
const commandResults = document.getElementById("command-results");
const commandHistory = [];
let historyIndex = 0;

command.addEventListener("keydown", (e) => {
  if (e.which == 38 && historyIndex > 0) {
    historyIndex--;
    e.target.value = commandHistory[historyIndex];
  } else if (e.which == 40 && historyIndex < commandHistory.length - 1) {
    historyIndex++;
    e.target.value = commandHistory[historyIndex];
  } else if (e.which == 13) {
    const userInput = e.target.value;

    const typedCommand = `<div class="input-container">
        <span class="input-label">></span>
        <span class="input-command">${userInput}</span>
      </div>`;

    commandResults.innerHTML += typedCommand;

    switch (userInput.toLowerCase()) {
      case "help":
        commandResults.innerHTML += help;
        addToCommandHistory(userInput);
        break;
      case "whoami":
        commandResults.innerHTML += whoami;
        addToCommandHistory(userInput);
        break;
      case "about":
        commandResults.innerHTML += about;
        addToCommandHistory(userInput);
        break;
      case "skills":
        commandResults.innerHTML += skills;
        addToCommandHistory(userInput);
        break;
      case "projects":
        commandResults.innerHTML += projects;
        addToCommandHistory(userInput);
        break;
      case "achievements":
        commandResults.innerHTML += achievements;
        addToCommandHistory(userInput);
        break;
      case "website":
        commandResults.innerHTML += website;
        setTimeout(() => {
          const anchor = document.createElement("a");
          anchor.href = myWebsite;
          anchor.target = "_blank";
          anchor.click();
        }, 2000);
        addToCommandHistory(userInput);
        break;
      case "contact":
        commandResults.innerHTML += contact;
        addToCommandHistory(userInput);
        break;
      case "clear":
        commandResults.innerHTML = "";
        addToCommandHistory(userInput);
        break;
      default:
        commandResults.innerHTML += `<div class="command-result"><span class="command-not-found">${e.target.value}</span>: command not found. Type 'help' to view a list of available commands.</div>`;
    }
    historyIndex = commandHistory.length;
    e.target.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});

const addToCommandHistory = (userCommand) => {
  commandHistory.push(userCommand);
};
