Hooks.on("init", () => {
  const soundPath = "/modules/combat-tracker-theme-pack/sounds/";
  let newThemes = {
    "8bit": {
      label: "COMBAT.Sounds.8Bit",
      startEncounter: [soundPath + "8bit-start-guitar.ogg"],
      nextUp: [soundPath + "8bit-next-badoop.ogg"],
      yourTurn: [soundPath + "8bit-turn-shing.ogg"]
    },
    "jjba": {
      label: "COMBAT.Sounds.JJBA",
      startEncounter: [soundPath + "jjba-start-zawarudo.ogg"],
      nextUp: [soundPath + "jjba-next-drum.ogg"],
      yourTurn: [soundPath + "jjba-turn-ding.ogg"]
    },
    "tech": {
      label: "COMBAT.Sounds.Tech",
      startEncounter: [soundPath + "tech-start-klaxon.ogg", soundPath + "tech-start-woosh.ogg"],
      nextUp: [soundPath + "tech-next-chime.ogg", soundPath + "tech-next-warning.ogg"],
      yourTurn: [soundPath + "tech-turn-chime.ogg"]
    },
    "techai": {
      label: "COMBAT.Sounds.techai",
      startEncounter: [soundPath + "techai-start-combattempo.ogg", soundPath + "techai-start-mostprobable.ogg", soundPath + "techai-start-reactivetracking.ogg", soundPath + "techai-start-threatvectors.ogg", soundPath + "techai-start-threatwindows.ogg"],
      nextUp: [soundPath + "techai-next-dosomething.ogg", soundPath + "techai-next-prepareaction.ogg", soundPath + "techai-next-prepareturn.ogg", soundPath + "techai-next-timeimpending.ogg", soundPath + "techai-next-timeisnigh.ogg",
              soundPath + "techai-next-vectoropening.ogg", soundPath + "techai-next-windowapproaching.ogg"],
      yourTurn: [soundPath + "techai-turn-takeyourturn.ogg", soundPath + "techai-turn-timehasbegun.ogg", soundPath + "techai-turn-timetoact.ogg", soundPath + "techai-turn-vectoropen.ogg", soundPath + "techai-turn-youmustactnow.ogg", soundPath + "techai-turn-yourturn.ogg"]
    },
    "doom": {
      label: "COMBAT.Sounds.doom",
      startEncounter: [soundPath + "doom-start-beneficial.ogg", soundPath + "doom-start-control.ogg", soundPath + "doom-start-madness.ogg", soundPath + "doom-start-resorttoviolence.ogg", soundPath + "doom-start-violence.ogg"],
      nextUp: [soundPath + "doom-next-comingup.ogg", soundPath + "doom-next-plan.ogg", soundPath + "doom-next-squander.ogg", soundPath + "doom-next-unprepared.ogg", soundPath + "doom-next-youare.ogg", soundPath + "doom-next-yourtime.ogg", soundPath + "doom-next-yourturn.ogg"],
      yourTurn: [soundPath + "doom-turn-doom.ogg", soundPath + "doom-turn-fleeting.ogg", soundPath + "doom-turn-getanother.ogg", soundPath + "doom-turn-haveaplan.ogg", soundPath + "doom-turn-know.ogg", soundPath + "doom-turn-makethebest.ogg", soundPath + "doom-turn-ripandtear.ogg", soundPath + "doom-turn-sound.ogg", soundPath + "doom-turn-bereasonable.ogg"]
    },
  };

  function addTheme(name, startCount, nextCount, turnCount) {
    newThemes[name] = {
      label: `COMBAT.Sounds.${name}`,
      startEncounter: [],
      nextUp: [],
      yourTurn: []
    }

    for (let i = 1; i <= startCount; i++) {
      newThemes[name].startEncounter.push(soundPath + `${name}-start-${i}.ogg`);
    }
    for (let i = 1; i <= nextCount; i++) {
      newThemes[name].nextUp.push(soundPath + `${name}-next-${i}.ogg`);
    }
    for (let i = 1; i <= turnCount; i++) {
      newThemes[name].yourTurn.push(soundPath + `${name}-turn-${i}.ogg`);
    }
  }

  addTheme("ai", 2, 4, 5);
  addTheme("deadgod", 5, 5, 6);

  foundry.utils.mergeObject(CONFIG.Combat.sounds, newThemes);
});
