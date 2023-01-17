import { whoami, help } from "./commands.js";

const command = document.getElementById("command");
const commandResults = document.getElementById("command-results");

document.addEventListener("click", () => command.focus());

command.addEventListener("keydown", (e) => {
  const userInput = e.target.value;

  if (e.which == 13) {
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
      case "clear":
        commandResults.innerHTML = "";
        break;
      default:
        commandResults.innerHTML += `<div class="command-result"><span class="command-not-found">${e.target.value}</span>: command not found. Type 'help' to view a list of available commands.</div>`;
    }
    e.target.value = "";
  }
});
