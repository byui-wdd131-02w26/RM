
  const character = {
    name: "Aquaman",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "images/aquaman7.jpg",

    attacked: function() {
      this.health -= 20;

      if (this.health <= 0) {
        this.health = 0;
        alert(this.name + " has died!");
      }

      updateUI();
    },

    levelUp: function() {
      this.level += 1;
      updateUI();
    }
  };

  function updateUI() {
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterClass").textContent = character.class;
    document.getElementById("characterLevel").textContent = character.level;
    document.getElementById("characterHealth").textContent = character.health;
    document.getElementById("characterImage").src = character.image;
  }

  document.addEventListener("DOMContentLoaded", function() {
  updateUI();
});
    document.getElementById("attackButton").addEventListener("click", function() {
      character.attacked();
    });
