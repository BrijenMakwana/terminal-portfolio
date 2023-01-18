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

command.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    const userInput = e.target.value;

    const typedCommand = `<div class="input-container">
        <span class="input-label">></span>
        <span class="input-command">${userInput}</span>
      </div>`;

    commandResults.innerHTML += typedCommand;

    switch (userInput.toLowerCase()) {
      case "help":
        commandResults.innerHTML += help;
        break;
      case "whoami":
        commandResults.innerHTML += whoami;
        break;
      case "about":
        commandResults.innerHTML += about;
        break;
      case "skills":
        commandResults.innerHTML += skills;
        break;
      case "projects":
        commandResults.innerHTML += projects;
        break;
      case "achievements":
        commandResults.innerHTML += achievements;
        break;
      case "website":
        commandResults.innerHTML += website;
        setTimeout(() => {
          const anchor = document.createElement("a");
          anchor.href = myWebsite;
          anchor.target = "_blank";
          anchor.click();
        }, 2000);
        break;
      case "contact":
        commandResults.innerHTML += contact;
        break;
      case "clear":
        commandResults.innerHTML = "";
        break;
      default:
        commandResults.innerHTML += `<div class="command-result"><span class="command-not-found">${e.target.value}</span>: command not found. Type 'help' to view a list of available commands.</div>`;
    }
    e.target.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
});
