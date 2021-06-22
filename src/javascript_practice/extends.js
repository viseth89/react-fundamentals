class User {
    constructor(name) {
        this.name = name;
        this.type = "Trial User"
    };

    // Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`)
    };

    // Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}.  Would you like to join our program?`)
    };
};

class BannedUser extends User {
    bannedMessage() {
        console.log(`This account belonging to ${this.name} has been banned due to being a meanie`)
    }
}

// Instance of User class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// Instance of TrialUser class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

let banned = new BannedUser('meanie')
banned.greet();
banned.bannedMessage();
banned.status();