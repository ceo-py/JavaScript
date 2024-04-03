function followers(params) {
    const followersManager = {};
    const commands = {
        "New follower": (username) => {
            if (!followersManager.hasOwnProperty(username)) {
                followersManager[username] = {
                    likes: 0,
                    comments: 0,
                };
            }
        },
        Like: (username, count) => {
            if (!followersManager.hasOwnProperty(username)) {
                followersManager[username] = {
                    likes: count,
                    comments: 0,
                };
            } else {
                followersManager[username].likes += count;
            }
        },
        Comment: (username) => {
            if (!followersManager.hasOwnProperty(username)) {
                followersManager[username] = {
                    likes: 0,
                    comments: 1,
                };
            } else {
                followersManager[username].comments += 1;
            }
        },
        Blocked: (username) => {
            if (!followersManager.hasOwnProperty(username)) {
                console.log(`${username} doesn't exist.`);
            } else delete followersManager[username];
        },
    };
    let commandsData = params.shift();

    while (commandsData !== "Log out") {
        const [command, ...data] = commandsData
            .split(": ")
            .map((x) => (isNaN(x) ? x : Number(x)));
        commands[command](...data);
        commandsData = params.shift();
    }
    console.log(`${Object.keys(followersManager).length} followers`);
    Object.entries(followersManager).forEach(([username, data]) => {
        console.log(`${username}: ${data.likes + data.comments}`);
    });
}

// followers([
//   "New follower: George",
//   "Like: George: 5",
//   "New follower: George",
//   "Log out",
// ]);

// followers(["Like: Katy: 3",
// "Comment: Katy",
// "New follower: Bob",
// "Blocked: Bob",
// "New follower: Amy",
// "Like: Amy: 4",
// "Log out"])

followers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])
