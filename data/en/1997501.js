window.fichePreparee={
  "nom": "Subaru & Beatrice",
  "designation": "[Re:ZERO]",
  "titre": "Subaru & Beatrice",
  "idJeu": "1997501",
  "attribut": {
    "nom": "@attribute.5",
    "icone": "assets/commun/icon_filter_attribute_05__8b5613471712850c.png",
    "couleur": "#bf7ee9",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.3",
      "@race.4"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_03__22a79e39766d0c88.png",
      "assets/commun/icon_filter_kind_04__48547a3ab95fac10.png"
    ]
  },
  "caracteristiques": [
    "@characteristic.3"
  ],
  "portrait": "assets/1997501/images/icon_hero_nes_mmc_0003_s__bf9e5110d68c4c00.png",
  "rareteParDefaut": "LR",
  "presentation": "[Re:ZERO] Subaru & Beatrice have a skill which can deal greater damage the higher their HP.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1997501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1997501/images/hero_illust_nes_mmc_1997501__e472b164c3200cde.png",
      "legendeImage": "nes_mmc_0001",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 550.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 500.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6400.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4940
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 90.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 190.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 105.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 120.0,
            "unite": "%"
          },
          {
            "nom": "@stat.pierceRate",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.regenerationRate",
            "valeur": 5.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 110.0,
            "unite": "%"
          },
          {
            "nom": "@stat.lifesteal",
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Partners' Attack\"",
          "image": "assets/1997501/images/icon_nes_mmc_ssr_type01_skill_01__a57e4f24c1dbd2e8.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 25.0,
              "description": "Inflicts [00D5FF]Spirit Strike[-] damage equal to 25 % of Max HP on @target.oneEnemy.\\n\\n[00D5FF]※Spirit Strike: [FFAE00]3x[-] Crit Chance and [FFAE00]3x[-] Crit Damage Increase.[-]",
              "idJeu": 1008201,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 32.0,
              "description": "Inflicts [00D5FF]Spirit Strike[-] damage equal to 32 % of Max HP on @target.oneEnemy.\\n\\n[00D5FF]※Spirit Strike: [FFAE00]3x[-] Crit Chance and [FFAE00]3x[-] Crit Damage Increase.[-]",
              "idJeu": 1008202,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 46.0,
              "description": "Inflicts [00D5FF]Spirit Strike[-] damage equal to 46 % of Max HP on @target.oneEnemy.\\n\\n[00D5FF]※Spirit Strike: [FFAE00]3x[-] Crit Chance and [FFAE00]3x[-] Crit Damage Increase.[-]",
              "idJeu": 1008203,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Absolute Expel\"",
          "image": "assets/1997501/images/icon_nes_mmc_ssr_type01_skill_02__be90fa1cdd641cfb.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 9.0,
              "description": "Applies [00D5FF]Infect[-] on @target.allEnemies for [FFAE00]1 turn[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 9 % of the hero duo's Max HP.\\n\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
              "idJeu": 1008211,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 14.0,
              "description": "Applies [00D5FF]Infect[-] on @target.allEnemies for [FFAE00]1 turn[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 14 % of the hero duo's Max HP.\\n\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
              "idJeu": 1008212,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 21.0,
              "description": "Applies [00D5FF]Infect[-] on @target.allEnemies for [FFAE00]2 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 21 % of the hero duo's Max HP.\\n\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
              "idJeu": 1008213,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Unbeatable Together\"",
        "image": "assets/1997501/images/icon_nes_mmc_ssr_type01_special_01__872590b06dd67886.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]2 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 350 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 385.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 385 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 420.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 420 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 455.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 455 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 490.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 490 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 525.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 525 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Witch's Lingering Scent",
        "image": "assets/1997501/images/icon_exclusive_skill_1997501__b7345e502d3b05c0.png",
        "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]1000%[-] of the initial Attack.[-][/i]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]40%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]2 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]700%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 2,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]40%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]700%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 3,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]800%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 5,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]900%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 6,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]1000%[-] of the initial Attack.[-][/i]"
          }
        ]
      },
      "idForme": 329101,
      "portrait": "assets/1997501/images/icon_hero_nes_mmc_0001_s__1778989ffa8ddeff.png",
      "portraitVertical": "assets/1997501/images/icon_skin_nes_mmc_0001_l__a029ad14cc5bd22f.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1997501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1997501/images/hero_illust_nes_mmc_1997501__e472b164c3200cde.png",
      "legendeImage": "nes_mmc_0002",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 660.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 590.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7600.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5362
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 90.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 190.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 105.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 120.0,
            "unite": "%"
          },
          {
            "nom": "@stat.pierceRate",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.regenerationRate",
            "valeur": 5.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 110.0,
            "unite": "%"
          },
          {
            "nom": "@stat.lifesteal",
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Partners' Attack\"",
          "image": "assets/1997501/images/icon_nes_mmc_ssr_type01_skill_01__a57e4f24c1dbd2e8.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 25.0,
              "description": "Inflicts [00D5FF]Spirit Strike[-] damage equal to 25 % of Max HP on @target.oneEnemy.\\n\\n[00D5FF]※Spirit Strike: [FFAE00]3x[-] Crit Chance and [FFAE00]3x[-] Crit Damage Increase.[-]",
              "idJeu": 1008201,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 32.0,
              "description": "Inflicts [00D5FF]Spirit Strike[-] damage equal to 32 % of Max HP on @target.oneEnemy.\\n\\n[00D5FF]※Spirit Strike: [FFAE00]3x[-] Crit Chance and [FFAE00]3x[-] Crit Damage Increase.[-]",
              "idJeu": 1008202,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 46.0,
              "description": "Inflicts [00D5FF]Spirit Strike[-] damage equal to 46 % of Max HP on @target.oneEnemy.\\n\\n[00D5FF]※Spirit Strike: [FFAE00]3x[-] Crit Chance and [FFAE00]3x[-] Crit Damage Increase.[-]",
              "idJeu": 1008203,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Absolute Expel\"",
          "image": "assets/1997501/images/icon_nes_mmc_ssr_type01_skill_02__be90fa1cdd641cfb.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 9.0,
              "description": "Applies [00D5FF]Infect[-] on @target.allEnemies for [FFAE00]1 turn[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 9 % of the hero duo's Max HP.\\n\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
              "idJeu": 1008211,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 14.0,
              "description": "Applies [00D5FF]Infect[-] on @target.allEnemies for [FFAE00]1 turn[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 14 % of the hero duo's Max HP.\\n\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
              "idJeu": 1008212,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 21.0,
              "description": "Applies [00D5FF]Infect[-] on @target.allEnemies for [FFAE00]2 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 21 % of the hero duo's Max HP.\\n\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
              "idJeu": 1008213,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Unbeatable Together\"",
        "image": "assets/1997501/images/icon_nes_mmc_ssr_type01_special_01__872590b06dd67886.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]2 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 350 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 385.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 385 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 420.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 420 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 455.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 455 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 490.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 490 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 525.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 525 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Witch's Lingering Scent",
        "image": "assets/1997501/images/icon_exclusive_skill_1997501__b7345e502d3b05c0.png",
        "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]1000%[-] of the initial Attack.[-][/i]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]40%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]2 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]700%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 2,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]40%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]700%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 3,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]800%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 5,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]900%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 6,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]1000%[-] of the initial Attack.[-][/i]"
          }
        ]
      },
      "idForme": 329102,
      "portrait": "assets/1997501/images/icon_hero_nes_mmc_0002_s__dbcf6a6ae1ac22f9.png",
      "portraitVertical": "assets/1997501/images/icon_skin_nes_mmc_0002_l__e8c0e703512e31b3.png"
    },
    {
      "id": "LR",
      "nom": "LR",
      "icone": "assets/commun/icon_filter_grade_LR__01254701e83a6f69.png",
      "cadre": "assets/commun/common_frame_rank_lr.png",
      "fond": "assets/commun/icon_hero_basic_s_7__1f68b57601e76589.png",
      "coin": "assets/commun/common_level_frame_rank_lr.png",
      "couleur": "#f3ce80",
      "image": "assets/1997501/images/hero_illust_nes_mmc_1997501__e472b164c3200cde.png",
      "legendeImage": "nes_mmc_0003",
      "niveau": 100,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 700.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 620.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8200.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5546
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 90.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 190.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 105.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 120.0,
            "unite": "%"
          },
          {
            "nom": "@stat.pierceRate",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.regenerationRate",
            "valeur": 5.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 110.0,
            "unite": "%"
          },
          {
            "nom": "@stat.lifesteal",
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Partners' Attack\"",
          "image": "assets/1997501/images/icon_nes_mmc_ssr_type01_skill_01__a57e4f24c1dbd2e8.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 25.0,
              "description": "Inflicts [00D5FF]Spirit Strike[-] damage equal to 25 % of Max HP on @target.oneEnemy.\\n\\n[00D5FF]※Spirit Strike: [FFAE00]3x[-] Crit Chance and [FFAE00]3x[-] Crit Damage Increase.[-]",
              "idJeu": 1008221,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 32.0,
              "description": "Inflicts [00D5FF]Spirit Strike[-] damage equal to 32 % of Max HP on @target.oneEnemy.\\n\\n[00D5FF]※Spirit Strike: [FFAE00]3x[-] Crit Chance and [FFAE00]3x[-] Crit Damage Increase.[-]",
              "idJeu": 1008222,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 46.0,
              "description": "Inflicts [00D5FF]Spirit Strike[-] damage equal to 46 % of Max HP on @target.oneEnemy.\\n\\n[00D5FF]※Spirit Strike: [FFAE00]3x[-] Crit Chance and [FFAE00]3x[-] Crit Damage Increase.[-]",
              "idJeu": 1008223,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Absolute Expel\"",
          "image": "assets/1997501/images/icon_nes_mmc_ssr_type01_skill_02__be90fa1cdd641cfb.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 9.0,
              "description": "Applies [00D5FF]Infect[-] on @target.allEnemies for [FFAE00]1 turn[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 9 % of the hero duo's Max HP.\\n\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
              "idJeu": 1008231,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 14.0,
              "description": "Applies [00D5FF]Infect[-] on @target.allEnemies for [FFAE00]1 turn[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 14 % of the hero duo's Max HP.\\n\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
              "idJeu": 1008232,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 21.0,
              "description": "Applies [00D5FF]Infect[-] on @target.allEnemies for [FFAE00]2 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 21 % of the hero duo's Max HP.\\n\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
              "idJeu": 1008233,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Unbeatable Together\"",
        "image": "assets/1997501/images/icon_nes_mmc_ssr_type01_special_01__872590b06dd67886.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]2 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 350 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 385.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 385 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 420.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 420 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 455.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 455 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 490.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 490 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 525.0,
            "description": "Gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-], then inflicts [00D5FF]Revenant Strike[-] damage equal to 525 % of the hero duo's Attack on @target.allEnemies.\\n\\n[00D5FF]※Revenant Strike: [FFAE00]3x[-] Pierce Rate Increase.\\nSkill damage dealt [FFAE00]+50%[-] while Spirit's Contract is active.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Witch's Lingering Scent",
        "image": "assets/1997501/images/icon_exclusive_skill_1997501__b7345e502d3b05c0.png",
        "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]1000%[-] of the initial Attack.[-][/i]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]40%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]2 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]700%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 2,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]40%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]700%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 3,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]800%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 5,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]900%[-] of the initial Attack.[-][/i]"
          },
          {
            "niveau": 6,
            "description": "Increases allies' basic stats by [FFAE00]7%[-] and the hero duo's Max HP by [FFAE00]7%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle.\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\n[00D5FF]Taunts[-] enemies and gains [00D5FF]Spirit's Pride[-] for [FFAE00]1 turn[-] at the start of the battle.\\n[i][C0C0C0]※Spirit's Pride: HP-related stats [FFAE00]+15%[-].\\nApplicable Allies' damage taken [FFAE00]-50%[-].\\nDoes not activate when an ally of another race other than those categorized as Applicable Allies is participating in battle.[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] dies, they are [00D5FF]revived[-] with the same amount of HP they had before dying, then all Debuffs are removed from all [00D5FF]Applicable Allies'[-], their HP is fully restored, and the hero duo gains [00D5FF]Beacon of Life[-] for [FFAE00]2 turns[-]. [FFAE00](Once)[-]\\n[i][C0C0C0]※Beacon of Life: HP does not fall below [FFAE00]1[-].\\nThe Ultimate Move Gauge does not fill, and [FFAE00]1 orb[-] is removed when taking damage from an enemy skill or counter, removing the effect when fully depleted.[-][/i]\\n\\nIf the hero duo has [00D5FF]Spirit's Pride[-] or [00D5FF]Beacon of Life[-], [00D5FF]Applicable Allies'[-] final damage taken from enemy skills or counters decreases by [FF8000]50%[-].\\nWhen the effect is removed, the hero gains [00D5FF]Spirit's Contract[-] for [FF8000]3 turns[-]\\n[i][C0C0C0]※Spirit's Contract: HP-related stats [FFAE00]+20%[-], damage dealt [FFAE00]+100%[-].\\nAdditional damage equal to [FF8000]1000%[-] of the initial Attack.[-][/i]"
          }
        ]
      },
      "idForme": 329103,
      "portrait": "assets/1997501/images/icon_hero_nes_mmc_0003_s__bf9e5110d68c4c00.png",
      "portraitVertical": "assets/1997501/images/icon_skin_nes_mmc_0003_l__8e899a28e9bfe862.png"
    }
  ],
  "costumes": [
    {
      "id": "3329101",
      "categorie": "Skin",
      "nom": "Ordinary Days",
      "image": "assets/1997501/images/icon_skin_nes_mmc_0001_l__a029ad14cc5bd22f.png",
      "rarete": ""
    },
    {
      "id": "3329150",
      "categorie": "Skin",
      "nom": "Treasure Hunter",
      "image": "assets/1997501/images/icon_skin_nes_mmc_0004_l__d4420cfb73099024.png",
      "rarete": ""
    },
    {
      "id": "3329151",
      "categorie": "Skin",
      "nom": "Knight and Bishop",
      "image": "assets/1997501/images/icon_skin_nes_mmc_0005_l__ba38b468300f46a3.png",
      "rarete": ""
    },
    {
      "id": "3329152",
      "categorie": "Skin",
      "nom": "Wonderland Dream",
      "image": "assets/1997501/images/icon_skin_nes_mmc_0006_l__181290534591c388.png",
      "rarete": ""
    },
    {
      "id": "3329102",
      "categorie": "Skin",
      "nom": "Best Partners",
      "image": "assets/1997501/images/icon_skin_nes_mmc_0002_l__e8c0e703512e31b3.png",
      "rarete": ""
    },
    {
      "id": "3329103",
      "categorie": "Skin",
      "nom": "Hearts Beating as One",
      "image": "assets/1997501/images/icon_skin_nes_mmc_0003_l__8e899a28e9bfe862.png",
      "rarete": ""
    },
    {
      "id": "881301",
      "categorie": "Weapon",
      "nom": "Thick Book",
      "image": "assets/1997501/images/icon_weapon_nes_mmc_0001_l__c6391fcd7467b536.png",
      "rarete": ""
    },
    {
      "id": "881302",
      "categorie": "Weapon",
      "nom": "Key to the Adventure",
      "image": "assets/1997501/images/icon_weapon_nes_mmc_0004_l__6e42a20bb922a049.png",
      "rarete": ""
    },
    {
      "id": "881303",
      "categorie": "Weapon",
      "nom": "Holy Tome",
      "image": "assets/1997501/images/icon_weapon_nes_mmc_0005_l__d8f4d3ca05ef4e3a.png",
      "rarete": ""
    },
    {
      "id": "881304",
      "categorie": "Weapon",
      "nom": "Old Tales",
      "image": "assets/1997501/images/icon_weapon_nes_mmc_0006_l__9b1ce3d7435877d5.png",
      "rarete": ""
    },
    {
      "id": "881305",
      "categorie": "Weapon",
      "nom": "Grimoire of Sin",
      "image": "assets/1997501/images/icon_weapon_nes_mmc_0001_l__c6391fcd7467b536.png",
      "rarete": ""
    },
    {
      "id": "4010201",
      "categorie": "Head",
      "nom": "Usual Hairstyle",
      "image": "assets/1997501/images/icon_head_nes_mmc_0001_l__15fb62ea79967a9f.png",
      "rarete": ""
    },
    {
      "id": "4010202",
      "categorie": "Head",
      "nom": "Boundless Spirit of Adventure",
      "image": "assets/1997501/images/icon_head_nes_mmc_0004_l__b786a2c529211ca3.png",
      "rarete": ""
    },
    {
      "id": "4010203",
      "categorie": "Head",
      "nom": "Monochrome Duo",
      "image": "assets/1997501/images/icon_head_nes_mmc_0005_l__39776ae2304e4dec.png",
      "rarete": ""
    },
    {
      "id": "4010204",
      "categorie": "Head",
      "nom": "Once Upon a Time",
      "image": "assets/1997501/images/icon_head_nes_mmc_0006_l__a7efd94abdeb8ca5.png",
      "rarete": ""
    },
    {
      "id": "4010205",
      "categorie": "Head",
      "nom": "Connection to the Future",
      "image": "assets/1997501/images/icon_head_nes_mmc_0003_l__cf65145511063862.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Grimoire of Sin",
    "image": "assets/1997501/images/icon_weapon_nes_mmc_0551_s__724e174d181a2c4a.png",
    "description": "Subaru & Beatrice's Holy Relic (Weapon).\\n[DC143C]A grimoire said to be connected to the Gate of Sin in Muspelheim. Its wielder is said to have the power to freely control the souls bound within the Gate of Sin.[-]",
    "passif": {
      "nom": "Grimoire of Sin",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "When an [00D5FF]Applicable Ally[-] is [00D5FF]revived[-] by the hero duo's Unique ability, the hero duo's Ultimate Move Gauge is filled by [FFAE00]2 orbs[-].\\n[i][C0C0C0]※Applicable Allies: Humans and Fairies[-][/i]\\n\\nWhen the hero duo's Ultimate Move Gauge is reduced while [00D5FF]Beacon of Life[-] is active, it restores [00D5FF]Applicable Allies'[-] HP by [FFAE00]30%[-] of their Max HP."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 300.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 625.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 3500.0
      }
    ],
    "materiaux": [
      {
        "nom": "Gold",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Dimensional Source",
        "image": "assets/commun/icon_item_special_craft_material_101__b4ac18f4f09baed3.png",
        "quantite": 15
      },
      {
        "nom": "Omen of the Rift",
        "image": "assets/commun/icon_item_special_craft_material_102__70074ac688bf8add.png",
        "quantite": 30
      },
      {
        "nom": "Unstable Magic Essence",
        "image": "assets/commun/icon_item_special_craft_material_103__cd504915f5791f03.png",
        "quantite": 80
      }
    ],
    "provenance": "Antre des créatures"
  }
};
