import {
  aboutSectionHTML,
  whoAmISectionHTML,
  skillsSectionHTML,
  projectsSectionHTML,
  achievementsSectionHTML,
  contactSectionHTML,
  helpSectionHTML,
  website,
  websiteSectionHTML,
} from "./commands.js";

const command = document.getElementById("command");
const commandResults = document.getElementById("command-results");
const commandHistory = [];
let historyIndex = 0;

document.addEventListener("keydown", () => command.focus());

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

    switch (userInput.trim().toLowerCase()) {
      case "help":
        commandResults.innerHTML += helpSectionHTML;
        addToCommandHistory(userInput);
        break;
      case "whoami":
        commandResults.innerHTML += whoAmISectionHTML;
        addToCommandHistory(userInput);
        break;
      case "about":
        commandResults.innerHTML += aboutSectionHTML;
        addToCommandHistory(userInput);
        break;
      case "skills":
        commandResults.innerHTML += skillsSectionHTML;
        addToCommandHistory(userInput);
        break;
      case "projects":
        commandResults.innerHTML += projectsSectionHTML;
        addToCommandHistory(userInput);
        break;
      case "achievements":
        commandResults.innerHTML += achievementsSectionHTML;
        addToCommandHistory(userInput);
        break;
      case "website":
        commandResults.innerHTML += websiteSectionHTML;
        setTimeout(() => {
          const anchor = document.createElement("a");
          anchor.href = website;
          anchor.target = "_blank";
          anchor.click();
        }, 2000);
        addToCommandHistory(userInput);
        break;
      case "contact":
        commandResults.innerHTML += contactSectionHTML;
        addToCommandHistory(userInput);
        break;
      case "clear":
        emptyTerminal();
        addToCommandHistory(userInput);
        break;
      default:
        commandResults.innerHTML += `<div class="command-result"><span class="command-not-found">${e.target.value}</span>: command not found. Type 'help' to view a list of available commands.</div>`;
    }
    resetHistoryIndex();
    e.target.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  } else if ((e.metaKey || e.ctrlKey) && e.which == 75) {
    resetHistoryIndex();
    emptyTerminal();
  }
});

const addToCommandHistory = (userCommand) => {
  commandHistory.push(userCommand);
};

const resetHistoryIndex = () => {
  historyIndex = commandHistory.length;
};

const emptyTerminal = () => {
  commandResults.innerHTML = "";
};
