let trainer = {
    name: "Trainer Adrian",
    age: 19,
    pokemon: [],
    friends: {
      close: ["Misty", "Brock"],
      acquaintances: ["Gary", "Serena"]
    },
    talk: function() {
      console.log("Pikachu! I choose you!");
      console.log("Pikachu lvl 8 HP 32");
      console.log();
    }
  };
  
  console.log(trainer.name);
  console.log(trainer["age"]);
  console.log();
  console.log("Cool Trainer Jude challenged you to a battle!")
  console.log("Cool Trainer Jude sent out Squirtle!");
  console.log();
  console.log("Squirtle lvl 7 HP 20");
  console.log();
  console.log("What will Trainer Adrian do?");
  console.log();
  
  trainer.talk();
  
  function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = level * 10;
    this.attack = level * 5;
  
    this.tackle = function(target) {
      target.health -= this.attack;
      console.log(this.name + " used Thunderbolt on " + target.name);
      if (target.health <= 0) {
        target.faint();
      }
    };
  
    this.faint = function() {
      console.log(this.name + " HP has reduced to 0");
      console.log(this.name + " has fainted.");
      console.log();
      console.log("Trainer Adrian has gained $25 for winning!");
    };
  }
  
  let pikachu = new Pokemon("Pikachu", 15);
  let charmander = new Pokemon("Charmander", 10);
  let squirtle = new Pokemon("Squirtle", 6);
  
  pikachu.tackle(squirtle);


  