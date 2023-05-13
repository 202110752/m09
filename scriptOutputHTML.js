let trainer = {
    name: "Trainer Adrian",
    age: 19,
    pokemon: [],
    friends: {
      close: ["Misty", "Brock"],
      acquaintances: ["Gary", "Serena"]
    },
    talk: function() {
      addToOutput("Pikachu! I choose you!");
      addToOutput("Pikachu lvl 8 HP 32");
      addToOutput("<br>");
    }
  };
  
  function addToOutput(message) {
    document.write(message + "<br>");
  }
  
  addToOutput(trainer.name);
  addToOutput(trainer["age"]);
  addToOutput("<br>");
  addToOutput("Cool Trainer Jude challenged you to a battle!");
  addToOutput("Cool Trainer Jude sent out Squirtle!");
  addToOutput("<br>");
  addToOutput("Squirtle lvl 7 HP 20");
  addToOutput("<br>");
  addToOutput("What will Trainer Adrian do?");
  addToOutput("<br>");
  
  trainer.talk();
  
  function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = level * 10;
    this.attack = level * 5;
  
    this.tackle = function(target) {
      target.health -= this.attack;
      addToOutput(this.name + " used Thunderbolt on " + target.name);
      if (target.health <= 0) {
        target.faint();
      }
    };
  
    this.faint = function() {
      addToOutput(this.name + " HP has reduced to 0");
      addToOutput(this.name + " has fainted.");
      addToOutput("<br>");
      addToOutput("Trainer Adrian has gained $25 for winning!");
    };
  }
  
  let pikachu = new Pokemon("Pikachu", 15);
  let charmander = new Pokemon("Charmander", 10);
  let squirtle = new Pokemon("Squirtle", 6);
  
  pikachu.tackle(squirtle);
  