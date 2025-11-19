document.getElementById("showCommandBtn").addEventListener("click", function() {
    const commandBox = document.getElementById("gitCommand");

    const commands = [
        "git init — Initialize a repository",
        "git status — Check file status",
        "git add . — Stage all changes",
        "git commit -m 'message' — Commit changes",
        "git push — Upload changes",
        "git pull — Fetch and merge updates"
    ];

    // Random command
    const random = Math.floor(Math.random() * commands.length);
    commandBox.textContent = commands[random];
    commandBox.classList.remove("hidden");
});
