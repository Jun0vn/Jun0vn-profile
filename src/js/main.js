const COMMANDS = {
  help: 'Supported commands: ["<span class="code">about</span>", "<span class="code">education</span>", "<span class="code">skills</span>", "<span class="code">store</span>"]',
  about:
    "Hello 👋<br>I'm Khanh Hung, also known as Juno, Jun0vn, KhanhHung or khanhhung08. I study for my future, working for money and play for passion.'I will drown you with my own strength'.",
  skills: '<span class="code">Programming Languages:</span> HTML, CSS, Java, JavaScript.<br><span class="code">Program:</span> Visual Studio Code, IntelliJ IDEA, Adobe Premiere Pro, Adobe After Effect Pro, Adobe Photoshop.',
  education: "A1K49-Mai Dinh Secondary School.",
  store: '<span style="color: white">Netflix Premium:</span> 2$/month.<br><span style="color: white">Youtube Premium: </span><span>8$/6month</span>'
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();

  if (input.length === 0) {
    return;
  }

  // "Secret" party command
  if (input === "party") {
    startTheParty();
  }

  // "Secret" party command
  if (input === "sudo rm -rf") {
    whooops();
  }

  output = `<div class="terminal-line"><span class="success">zsh:~$</span> <span class="directory"></span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">command not found: <span class="output">"${input}"</span></div>`;
    console.log("Oops! command not found");
  } else {
    output += `<div class="output"> ${COMMANDS[input]} </div>`;
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

// TOP SECRET, DON'T READ
const startTheParty = () => {
  var confettiSettings = {
    target: "canvas",
    max: "1000",
    size: "1",
    animate: true,
    props: ["square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126]
    ],
    clock: "25",
    rotate: true,
    width: "1680",
    height: "971",
    start_from_edge: true,
    respawn: false
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
};

const whooops = () => {
  document.body.querySelector(".hero").remove();
  document.body.style.background = "#000";
  document.body.style.width = "100vw";
  document.body.style.height = "100vh";
};

document.onkeydown = function(e) {
  if (e.ctrlKey && 
      (e.keyCode === 67 || 
       e.keyCode === 86 || 
       e.keyCode === 85 || 
       e.keyCode === 117)) {
        window.location.replace("https://github.com/Jun0vn");
      return false;
  } else {
      return true;
  }
};
