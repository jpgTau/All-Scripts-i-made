let clicking = false;
let interval = null;

function godModeInit() {
  try { Game.cookies             = 1e300; } catch(e) {}
  try { Game.cookiesEarned       = 1e300; } catch(e) {}
  try { Game.cookiesReset        = 1e300; } catch(e) {}
  try { Game.cookiesPsRawHighest = 1e300; } catch(e) {}
  try { Game.lumps               = 1e9;   } catch(e) {}
  try { Game.lumpsTotal          = 1e9;   } catch(e) {}
  try { Game.prestige            = 1e300; } catch(e) {}
  try { Game.heavenlyChips       = 1e300; } catch(e) {}
  try { Game.heavenlyChipsEarned = 1e300; } catch(e) {}
  try { Game.heavenlyChipsSpent  = 1e300; } catch(e) {}
  try { Game.cookiesReset        = 1e300; } catch(e) {}
  try { Game.resets              = 99999; } catch(e) {}
  try { Game.milkProgress        = 99999; } catch(e) {}
  try { Game.milk                = 99999; } catch(e) {}
  try { Game.milkType            = Game.milkTypes.length - 1; } catch(e) {}
  try { Game.santaLevel          = 14;    } catch(e) {}
  try { Game.elderWrath          = 0;     } catch(e) {}
  try { Game.pledgeT             = 0;     } catch(e) {}


  try {
    if (Game.dragonAuras && Game.dragon) {
      Game.dragon.level = 20;
      Game.dragon.aura  = Game.dragonAuras.length - 1;
      Game.dragon.aura2 = Game.dragonAuras.length - 2;
    }
  } catch(e) {}


  try {
    for (let i = 0; i < Game.ObjectsById.length; i++) {
      try {
        let b = Game.ObjectsById[i];
        b.amount       = 99999;
        b.bought       = 99999;
        b.totalCookies = 1e300;
        b.level        = 20;
        b.refresh();
      } catch(e) {}
    }
  } catch(e) {}


  try {
    for (let name in Game.Upgrades) {
      try {
        Game.Upgrades[name].unlocked = 1;
        Game.Upgrades[name].bought   = 1;
      } catch(e) {}
    }
  } catch(e) {}


  try {
    for (let id in Game.AchievementsById) {
      try {
        let a = Game.AchievementsById[id];
        a.won = 1;
        if (Game.Achievements[a.name]) Game.Achievements[a.name].won = 1;
      } catch(e) {}
    }
  } catch(e) {}


  try {
    for (let name in Game.Objects) {
      try {
        let obj = Game.Objects[name];
        if (obj.minigame) {
          try { obj.minigame.prestige = 99999; } catch(e) {}
          try { obj.minigame.level    = 99999; } catch(e) {}
          try { obj.minigame.magic    = 99999; } catch(e) {}
          try { obj.minigame.soil     = 5;     } catch(e) {}
          try {
            for (let s in obj.minigame.plants) {
              obj.minigame.plants[s].unlocked = 1;
            }
          } catch(e) {}
        }
      } catch(e) {}
    }
  } catch(e) {}

  
  try {
    for (let name in Game.buffs) {
      try { Game.buffs[name].time = 999999999; } catch(e) {}
    }
  } catch(e) {}

  try { Game.recalculateGains  = 1;   } catch(e) {}
  try { Game.upgradesToRebuild = 1;   } catch(e) {}
  try { Game.storeToRebuild    = 1;   } catch(e) {}
  try { Game.buildStore();            } catch(e) {}
  try { Game.UpdateMenu();            } catch(e) {}
  try { Game.BuildAchievementList();  } catch(e) {}

  console.log('Done');
}

document.addEventListener('keydown', e => {
  if (e.key === 'F4') {
    clicking = !clicking;
    if (clicking) {
      godModeInit();

      interval = setInterval(() => {
        try { Game.cookies             += 1e300; } catch(e) {}
        try { Game.cookiesEarned       += 1e300; } catch(e) {}
        try { Game.cookiesReset        += 1e300; } catch(e) {}
        try { Game.cookiesPsRawHighest  = 1e300; } catch(e) {}
        try { Game.lumps               += 999999; } catch(e) {}
        try { Game.prestige             = 1e300; } catch(e) {}
        try { Game.heavenlyChips        = 1e300; } catch(e) {}
        try { Game.heavenlyChipsEarned  = 1e300; } catch(e) {}
        try { Game.milkProgress         = 99999; } catch(e) {}
        try { Game.milk                 = 99999; } catch(e) {}
        try { Game.milkType = Game.milkTypes.length - 1; } catch(e) {}
        try { Game.santaLevel           = 14;    } catch(e) {}

        try { for (let i = 0; i < 50000; i++) Game.ClickCookie(); } catch(e) {}

        try {
          for (let name in Game.Upgrades) {
            try { let u = Game.Upgrades[name]; u.bought = 1; u.unlocked = 1; } catch(e) {}
          }
        } catch(e) {}

        try {
          for (let i = Game.UpgradesInStore.length - 1; i >= 0; i--) {
            try { Game.UpgradesInStore[i].buy(); } catch(e) {}
          }
        } catch(e) {}

        try {
          for (let i = Game.ObjectsById.length - 1; i >= 0; i--) {
            try {
              let b = Game.ObjectsById[i];
              b.amount = 99999;
              b.bought = 99999;
              if (b.level < 20) b.levelUp();
              b.refresh();
            } catch(e) {}
          }
        } catch(e) {}

        try { Game.shimmers.forEach(s => { try { s.pop(); } catch(e) {} }); } catch(e) {}
        try { Game.wrinklers.forEach(w => { try { if (w.phase > 0) w.hp = 0; } catch(e) {} }); } catch(e) {}

        try {
          for (let id in Game.AchievementsById) {
            try {
              let a = Game.AchievementsById[id];
              if (!a.won) {
                a.won = 1;
                if (Game.Achievements[a.name]) Game.Achievements[a.name].won = 1;
              }
            } catch(e) {}
          }
        } catch(e) {}

        try {
          if (Game.dragonAuras && Game.dragon) {
            Game.dragon.level = 20;
            Game.dragon.aura  = Game.dragonAuras.length - 1;
            Game.dragon.aura2 = Game.dragonAuras.length - 2;
          }
        } catch(e) {}

        try {
          for (let name in Game.buffs) {
            try { Game.buffs[name].time = 999999999; } catch(e) {}
          }
        } catch(e) {}

        try {
          for (let name in Game.Objects) {
            try {
              if (Game.Objects[name].minigame) {
                try { Game.Objects[name].minigame.magic = 99999; } catch(e) {}
              }
            } catch(e) {}
          }
        } catch(e) {}

        try { Game.recalculateGains  = 1; } catch(e) {}
        try { Game.upgradesToRebuild = 1; } catch(e) {}
        try { Game.buildStore();          } catch(e) {}

      }, 1);

      console.log('CClicker Hack:GodMode Fixed V2(Infinity Cookies + Everything) - By WaterNiko');
    } else {
      clearInterval(interval);
      console.log('Yeah sure!');
    }
  }
});

// use this to toggle the godmode
