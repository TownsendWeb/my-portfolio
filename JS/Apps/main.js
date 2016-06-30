var Character = function (name, damage, attack) {
    this.name = name;
    this.damage = damage;
    this.attack = attack;
};

var John = new Character("John", 100, 54);
var Sophie = new Character("Sophie", 100, 44);
var Robber = new Character("Robber", 100, 40);

//Starting game
var gameStatus = confirm("Press 'OK' to start the game! Otherwise, hit cancel.");

while (gameStatus === true) {
    //Creating main character
    var userName = prompt("What will your name be?");
    var user = new Character(userName, 200, 50);
    var room = prompt("You wake up to a large 'pop' sound that came from outside your room! What do you do? ('Go' check it out or 'Stay' in your room?)").toLowerCase();
    if (room === "go") {
        var hall = prompt("You walk out the door and see a dark silhouette in the hallway. What do you do? ('Ask' who it is, 'Tackle' them, or do 'Nothing'?)").toLowerCase();
        
        //In the hall
        switch (hall) {
                
        case "ask":
            var hall2 = prompt("You yell down the hall who it is. You hear your sister calls back. She asks if you also heard the loud pop. After confirming what you've heard you both begin to get scared. (Do you 'get' your gun or 'wake' your brother up?)");
            break;
                
        case "tackle":
            var hall3 = prompt("You run down the hallway, at full sprint. You dropkick the shit out of your sister, Sophie. As she tumbles down the stairs she screams. Once you realize it was your little sister you run downstairs and notice she is bleeding. She turns around and hits you in the face \n *Sophie is bleeding and you think she broke your nose*\n What do you do? 'Hit' her back or 'apologize'?").toLowerCase();
            break;
        }
                
    } else {
        var room2 = prompt("You decide to forget about it and fall back asleep. 5 minutes later you hear your door snap open. It's your brother, John! John whispers, '" + userName + ", get your gun... There's someone in our house.' (Do you 'get' your gun or 'give' it to John?)").toLowerCase();
    }
    
    
    //Ending game
    gameStatus = false;
}