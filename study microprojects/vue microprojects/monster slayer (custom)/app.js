const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      playerSurrendered: false,
      battleLog: [],
    };
  },
  computed: {
    gameStatus() {
      if (this.playerSurrendered === true) {
        return "You lost!";
      } else if (this.monsterHealth > 0 && this.playerHealth > 0) {
        return "inProgress";
      } else if (this.monsterHealth <= 0 && this.playerHealth > 0) {
        return "You won!";
      } else if (this.monsterHealth > 0 && this.playerHealth <= 0) {
        return "You lost!";
      } else if (this.monsterHealth <= 0 && this.playerHealth <= 0) {
        return "You and monster killed each other!";
      }
    },
    monsterHealthBar() {
      return `${this.monsterHealth}%`;
    },
    playerHealthBar() {
      return `${this.playerHealth}%`;
    },
    specialReady() {
      if ((this.battleLog.length + 6) % 6 === 0) {
        return true;
      } else return false;
    },
  },
  methods: {
    hit() {
      const playerHit = Math.floor(Math.random() * 10);
      const monsterHit = Math.floor(Math.random() * 15);
      this.monsterHealth = this.monsterHealth - playerHit;
      this.playerHealth = this.playerHealth - monsterHit;
      this.battleLog.push(["Player", ` attacks and deals ${playerHit}`]);
      this.battleLog.push(["Monster", ` attacks and deals ${monsterHit}`]);
      console.log(this.battleLog);
    },

    heal() {
      const playerHeal = Math.floor(Math.random() * 15);
      const monsterHit = Math.floor(Math.random() * 15);
      this.playerHealth = this.playerHealth + playerHeal;
      this.playerHealth = this.playerHealth - monsterHit;
      this.battleLog.push(["Player", ` heals himself for ${playerHeal}`]);
      this.battleLog.push(["Monster", ` attacks and deals ${monsterHit}`]);
    },
    special() {
      const playerHit = Math.floor(Math.random() * 20);
      const monsterHit = Math.floor(Math.random() * 15);
      this.monsterHealth = this.monsterHealth - playerHit;
      this.playerHealth = this.playerHealth - monsterHit;
      this.battleLog.push(["Player", ` attacks and deals ${playerHit}`]);
      this.battleLog.push(["Monster", ` attacks and deals ${monsterHit}`]);
    },
    surrender() {
      this.playerSurrendered = true;
      this.battleLog.push(["Player", " surrenders"]);
    },
    playAgain() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.battleLog = [];
      this.playerSurrendered = false;
    },
  },
  watch: {
    playerHealth(value) {
      if (value > 100) {
        this.playerHealth = 100;
      }
      if (value < 0) {
        this.playerHealth = 0;
      }
      if (value === 0) {
        this.battleLog.push(["Player", " dies"]);
      }
    },
    monsterHealth(value) {
      if (value < 0) {
        this.monsterHealth = 0;
      }
      if (value === 0) {
        this.battleLog.push(["Monster", " dies"]);
      }
    },
  },
});

app.mount("#application");
