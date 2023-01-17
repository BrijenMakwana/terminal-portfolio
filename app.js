import { whoami, help } from "./commands.js";

const command = document.getElementById("command");
const commandResult = document.getElementById("command-result");
const inputContainer = document.getElementById("input-container");

command.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    switch (e.target.value) {
      case "help":
        commandResult.innerHTML += help;
        break;
      case "whoami":
        commandResult.innerHTML += whoami;
        break;
      case "clear":
        commandResult.innerHTML = "";
        break;
      default:
        commandResult.innerHTML += `<div class="command-result"><span class="command-not-found">${e.target.value}</span>: command not found. Type 'help' to view a list of available commands.</div>`;
    }
  }
});
