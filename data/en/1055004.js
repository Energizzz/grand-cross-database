window.fichePreparee={
  "nom": "Fighter Diane",
  "designation": "[Bubbly Classmate]",
  "titre": "Fighter Diane",
  "idJeu": "1055004",
  "attribut": {
    "nom": "@attribute.4",
    "icone": "assets/commun/icon_filter_attribute_04__41a0e2f0c35046b0.png",
    "couleur": "#f1c54f",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.2"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_02__4320d5376444ecd0.png"
    ]
  },
  "caracteristiques": [
    "@characteristic.6"
  ],
  "portrait": "assets/1055004/images/icon_hero_dianesmall_0020_s__6bef951b259b6fa6.png",
  "rareteParDefaut": "UR",
  "presentation": "[Bubbly Classmate] Fighter Diane has a skill which can deal greater damage the higher the enemy's Resistance.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1055004/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1055004/images/hero_illust_diane_small_1055004__5fbc0f5030d2738c.png",
      "legendeImage": "dianesmall_0021",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 520.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 350.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6200.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4120
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
            "valeur": 180.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 75.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 70.0,
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
            "valeur": 10.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Toast Crash\"",
          "image": "assets/1055004/images/icon_dianesmall_glove_skill_07__7bb8a8b71d7c0411.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 160.0,
              "description": "Inflicts [00D5FF]Sever[-] damage equal to 160 % of Attack on @target.oneEnemy and [00D5FF]blocks all skill effects including those of Ultimate Moves[-] for 1 tour(s).\\n[00D5FF](Excludes Stance and Recovery Skills)[-]\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
              "idJeu": 128061,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 240.0,
              "description": "Inflicts [00D5FF]Sever[-] damage equal to 240 % of Attack on @target.oneEnemy and [00D5FF]blocks all skill effects including those of Ultimate Moves[-] for 1 tour(s).\\n[00D5FF](Excludes Stance and Recovery Skills)[-]\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
              "idJeu": 128062,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "Inflicts [00D5FF]Sever[-] damage equal to 400 % of Attack on @target.oneEnemy and [00D5FF]blocks all skill effects including those of Ultimate Moves[-] for 2 tour(s).\\n[00D5FF](Excludes Stance and Recovery Skills)[-]\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
              "idJeu": 128063,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"What's in My Bag?\"",
          "image": "assets/1055004/images/icon_dianesmall_glove_skill_08__7d3e6970a5f0d937.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 110.0,
              "description": "Inflicts [00D5FF]Power Strike[-] damage equal to 110 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Power Strike: Additional damage equal to enemy Resistance.[-]",
              "idJeu": 128071,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 165.0,
              "description": "Inflicts [00D5FF]Power Strike[-] damage equal to 165 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Power Strike: Additional damage equal to enemy Resistance.[-]",
              "idJeu": 128072,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 275.0,
              "description": "Inflicts [00D5FF]Power Strike[-] damage equal to 275 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Power Strike: Additional damage equal to enemy Resistance.[-]",
              "idJeu": 128073,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Dragon Kick\"",
        "image": "assets/commun/icon_dianesmall_glove_special_01__bfb7dfb11b9bf1ba.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 560 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 616 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 672 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 728 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 784 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 840 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Realized Feelings",
        "image": "assets/1055004/images/icon_exclusive_skill_1055004__300dfdd05e043f0e.png",
        "description": "For [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and [00D5FF]damage dealt[-] increases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Giants and Fairies[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] uses a Stance Skill, [00D5FF]Applicable Allies[-] are granted [00D5FF]Earth's Whisper[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Earth's Whisper: HP-related stats [FFAE00]+10%[-].[-][/i]\\n\\nWhen an ally with [00D5FF]Earth's Whisper[-] uses a skill on an enemy during the allies' turn, or for each ally with [00D5FF]Earth's Whisper[-] who takes damage from a skill during the enemy's turn, that enemy's Defense-related stats are decreased by [FFAE00]5%[-] for [FFAE00]2 turns[-].\\n[00D5FF](Stacks [FFAE00]6 times[-])[-][-]\\n\\nWhen an [00D5FF]Applicable Ally[-] uses a skill on an enemy during the allies' turn, it inflicts additional damage equal to [FFAE00]20%[-] of remaining HP.\\n\\nWhen the hero [00D5FF]enters the battle from the Secondary Slot[-], [00D5FF]Applicable Allies[-] gain [00D5FF]Earth's Protection[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Earth's Protection: All stats [FFAE00]+10%[-].\\nRevives with [FFAE00]20%[-] of Max HP when dying. (Limit [FFAE00]once[-])[-][/i]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "For [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and [00D5FF]damage dealt[-] increases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Giants and Fairies[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] uses a Stance Skill, [00D5FF]Applicable Allies[-] are granted [00D5FF]Earth's Whisper[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Earth's Whisper: HP-related stats [FFAE00]+10%[-].[-][/i]\\n\\nWhen an ally with [00D5FF]Earth's Whisper[-] uses a skill on an enemy during the allies' turn, or for each ally with [00D5FF]Earth's Whisper[-] who takes damage from a skill during the enemy's turn, that enemy's Defense-related stats are decreased by [FFAE00]5%[-] for [FFAE00]2 turns[-].\\n[00D5FF](Stacks [FFAE00]6 times[-])[-][-]\\n\\nWhen an [00D5FF]Applicable Ally[-] uses a skill on an enemy during the allies' turn, it inflicts additional damage equal to [FFAE00]20%[-] of remaining HP.\\n\\nWhen the hero [00D5FF]enters the battle from the Secondary Slot[-], [00D5FF]Applicable Allies[-] gain [00D5FF]Earth's Protection[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Earth's Protection: All stats [FFAE00]+10%[-].\\nRevives with [FFAE00]20%[-] of Max HP when dying. (Limit [FFAE00]once[-])[-][/i]"
          }
        ]
      },
      "idForme": 310310,
      "portrait": "assets/1055004/images/icon_hero_dianesmall_0021_s__4e56110a2ffafab3.png",
      "portraitVertical": "assets/commun/icon_skin_dianesmall_0021_l__c3f3a09058f03437.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1055004/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1055004/images/hero_illust_diane_small_1055004__5fbc0f5030d2738c.png",
      "legendeImage": "dianesmall_0020",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 820.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 420.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7800.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4796
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
            "valeur": 180.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 75.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 70.0,
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
            "valeur": 10.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Toast Crash\"",
          "image": "assets/1055004/images/icon_dianesmall_glove_skill_07__7bb8a8b71d7c0411.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 160.0,
              "description": "Inflicts [00D5FF]Sever[-] damage equal to 160 % of Attack on @target.oneEnemy and [00D5FF]blocks all skill effects including those of Ultimate Moves[-] for 1 tour(s).\\n[00D5FF](Excludes Stance and Recovery Skills)[-]\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
              "idJeu": 128061,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 240.0,
              "description": "Inflicts [00D5FF]Sever[-] damage equal to 240 % of Attack on @target.oneEnemy and [00D5FF]blocks all skill effects including those of Ultimate Moves[-] for 1 tour(s).\\n[00D5FF](Excludes Stance and Recovery Skills)[-]\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
              "idJeu": 128062,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "Inflicts [00D5FF]Sever[-] damage equal to 400 % of Attack on @target.oneEnemy and [00D5FF]blocks all skill effects including those of Ultimate Moves[-] for 2 tour(s).\\n[00D5FF](Excludes Stance and Recovery Skills)[-]\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
              "idJeu": 128063,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"What's in My Bag?\"",
          "image": "assets/1055004/images/icon_dianesmall_glove_skill_08__7d3e6970a5f0d937.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 110.0,
              "description": "Inflicts [00D5FF]Power Strike[-] damage equal to 110 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Power Strike: Additional damage equal to enemy Resistance.[-]",
              "idJeu": 128071,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 165.0,
              "description": "Inflicts [00D5FF]Power Strike[-] damage equal to 165 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Power Strike: Additional damage equal to enemy Resistance.[-]",
              "idJeu": 128072,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 275.0,
              "description": "Inflicts [00D5FF]Power Strike[-] damage equal to 275 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Power Strike: Additional damage equal to enemy Resistance.[-]",
              "idJeu": 128073,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Dragon Kick\"",
        "image": "assets/commun/icon_dianesmall_glove_special_01__bfb7dfb11b9bf1ba.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 560 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 616 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 672 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 728 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 784 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Inflicts [00D5FF]Pierce[-] damage equal to 840 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Pierce: 3x Pierce Rate Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Realized Feelings",
        "image": "assets/1055004/images/icon_exclusive_skill_1055004__300dfdd05e043f0e.png",
        "description": "For [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and [00D5FF]damage dealt[-] increases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Giants and Fairies[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] uses a Stance Skill, [00D5FF]Applicable Allies[-] are granted [00D5FF]Earth's Whisper[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Earth's Whisper: HP-related stats [FFAE00]+10%[-].[-][/i]\\n\\nWhen an ally with [00D5FF]Earth's Whisper[-] uses a skill on an enemy during the allies' turn, or for each ally with [00D5FF]Earth's Whisper[-] who takes damage from a skill during the enemy's turn, that enemy's Defense-related stats are decreased by [FFAE00]5%[-] for [FFAE00]2 turns[-].\\n[00D5FF](Stacks [FFAE00]6 times[-])[-][-]\\n\\nWhen an [00D5FF]Applicable Ally[-] uses a skill on an enemy during the allies' turn, it inflicts additional damage equal to [FFAE00]20%[-] of remaining HP.\\n\\nWhen the hero [00D5FF]enters the battle from the Secondary Slot[-], [00D5FF]Applicable Allies[-] gain [00D5FF]Earth's Protection[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Earth's Protection: All stats [FFAE00]+10%[-].\\nRevives with [FFAE00]20%[-] of Max HP when dying. (Limit [FFAE00]once[-])[-][/i]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "For [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and [00D5FF]damage dealt[-] increases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Giants and Fairies[-][/i]\\n\\nWhen an [00D5FF]Applicable Ally[-] uses a Stance Skill, [00D5FF]Applicable Allies[-] are granted [00D5FF]Earth's Whisper[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Earth's Whisper: HP-related stats [FFAE00]+10%[-].[-][/i]\\n\\nWhen an ally with [00D5FF]Earth's Whisper[-] uses a skill on an enemy during the allies' turn, or for each ally with [00D5FF]Earth's Whisper[-] who takes damage from a skill during the enemy's turn, that enemy's Defense-related stats are decreased by [FFAE00]5%[-] for [FFAE00]2 turns[-].\\n[00D5FF](Stacks [FFAE00]6 times[-])[-][-]\\n\\nWhen an [00D5FF]Applicable Ally[-] uses a skill on an enemy during the allies' turn, it inflicts additional damage equal to [FFAE00]20%[-] of remaining HP.\\n\\nWhen the hero [00D5FF]enters the battle from the Secondary Slot[-], [00D5FF]Applicable Allies[-] gain [00D5FF]Earth's Protection[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Earth's Protection: All stats [FFAE00]+10%[-].\\nRevives with [FFAE00]20%[-] of Max HP when dying. (Limit [FFAE00]once[-])[-][/i]"
          }
        ]
      },
      "idForme": 310311,
      "portrait": "assets/1055004/images/icon_hero_dianesmall_0020_s__6bef951b259b6fa6.png",
      "portraitVertical": "assets/commun/icon_skin_dianesmall_0020_l__f25d7547875955a0.png"
    }
  ],
  "costumes": [
    {
      "id": "3310301",
      "categorie": "Skin",
      "nom": "Fight Festival",
      "image": null,
      "rarete": ""
    },
    {
      "id": "3310302",
      "categorie": "Skin",
      "nom": "Training Outfit",
      "image": "assets/commun/icon_skin_dianesmall_0005_l__a13c3891e26e9f46.png",
      "rarete": ""
    },
    {
      "id": "3310304",
      "categorie": "Skin",
      "nom": "Kungfu Girl",
      "image": "assets/commun/icon_skin_dianesmall_0006_l__59ae913a8d8d57e7.png",
      "rarete": ""
    },
    {
      "id": "3310310",
      "categorie": "Skin",
      "nom": "Sporty Schoolgirl",
      "image": "assets/commun/icon_skin_dianesmall_0021_l__c3f3a09058f03437.png",
      "rarete": ""
    },
    {
      "id": "3310356",
      "categorie": "Skin",
      "nom": "Hero Suit - Orange",
      "image": "assets/commun/icon_skin_dianesmall_0035_l__e847c425a83a8b83.png",
      "rarete": ""
    },
    {
      "id": "3310357",
      "categorie": "Skin",
      "nom": "Blue Wind Cheering Uniform",
      "image": "assets/commun/icon_skin_dianesmall_0036_l__e8896a884296f86c.png",
      "rarete": ""
    },
    {
      "id": "3310351",
      "categorie": "Skin",
      "nom": "Black Flame Battle Uniform",
      "image": "assets/commun/icon_skin_dianesmall_0011_l__b23816b485a3a2e2.png",
      "rarete": ""
    },
    {
      "id": "3310354",
      "categorie": "Skin",
      "nom": "Wolf Girl",
      "image": "assets/commun/icon_skin_dianesmall_0025_l__0e7d785e4e19dead.png",
      "rarete": ""
    },
    {
      "id": "3310355",
      "categorie": "Skin",
      "nom": "Sneaky Bandit",
      "image": "assets/commun/icon_skin_dianesmall_0028_l__8d073bdfd6a461b0.png",
      "rarete": ""
    },
    {
      "id": "3310352",
      "categorie": "Skin",
      "nom": "Well-behaved Cat",
      "image": "assets/commun/icon_skin_dianesmall_0004_l__a5106b4a3bbd4c5b.png",
      "rarete": ""
    },
    {
      "id": "3310350",
      "categorie": "Skin",
      "nom": "Petite Royal Maid",
      "image": "assets/commun/icon_skin_dianesmall_0010_l__af53f9acc67c27de.png",
      "rarete": ""
    },
    {
      "id": "3310353",
      "categorie": "Skin",
      "nom": "Brawl Champion",
      "image": "assets/commun/icon_skin_dianesmall_0019_l__f90da9c5d519d379.png",
      "rarete": ""
    },
    {
      "id": "3310305",
      "categorie": "Skin",
      "nom": "Date on a Day Off",
      "image": null,
      "rarete": ""
    },
    {
      "id": "3310306",
      "categorie": "Skin",
      "nom": "Dragon Claw Kungfu Outfit",
      "image": "assets/commun/icon_skin_dianesmall_0007_l__d9a3160378b3ff51.png",
      "rarete": ""
    },
    {
      "id": "3310309",
      "categorie": "Skin",
      "nom": "Dragon Claw Armor",
      "image": "assets/commun/icon_skin_dianesmall_0009_l__4398eb494f9e9810.png",
      "rarete": ""
    },
    {
      "id": "3310311",
      "categorie": "Skin",
      "nom": "Kickboxing Club President",
      "image": "assets/commun/icon_skin_dianesmall_0020_l__f25d7547875955a0.png",
      "rarete": ""
    },
    {
      "id": "3310303",
      "categorie": "Skin",
      "nom": "Boar Hat Tavern Uniform",
      "image": null,
      "rarete": ""
    },
    {
      "id": "3310308",
      "categorie": "Skin",
      "nom": "Kungfu Ranger",
      "image": "assets/commun/icon_skin_dianesmall_0008_l__fd9be8bdac883b3a.png",
      "rarete": ""
    },
    {
      "id": "851301",
      "categorie": "Weapon",
      "nom": "Bare Fists",
      "image": "assets/commun/icon_weapon_dianesmall_0001_l__80a68c157b3fe055.png",
      "rarete": ""
    },
    {
      "id": "851317",
      "categorie": "Weapon",
      "nom": "Blue Wind Cheering Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0036_l__3f9e196e1ac3cb66.png",
      "rarete": ""
    },
    {
      "id": "851319",
      "categorie": "Weapon",
      "nom": "Fire Dragon Knuckles",
      "image": "assets/commun/icon_weapon_dianesmall_0502_l__1c8bb6fefcf73908.png",
      "rarete": ""
    },
    {
      "id": "851302",
      "categorie": "Weapon",
      "nom": "Black Flame Battle Weapon",
      "image": "assets/commun/icon_weapon_dianesmall_0011_l__dc721d3ffacd748e.png",
      "rarete": ""
    },
    {
      "id": "851314",
      "categorie": "Weapon",
      "nom": "Soft Punch",
      "image": "assets/commun/icon_weapon_dianesmall_0025_l__b4e8a670d83ea099.png",
      "rarete": ""
    },
    {
      "id": "851315",
      "categorie": "Weapon",
      "nom": "Studded Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0028_l__cd26a2d0cbc77f1d.png",
      "rarete": ""
    },
    {
      "id": "851303",
      "categorie": "Weapon",
      "nom": "Respectable White Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0004_l__503f44a8ed7d75a8.png",
      "rarete": ""
    },
    {
      "id": "851304",
      "categorie": "Weapon",
      "nom": "Leather Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0005_l__faf5240625ee044b.png",
      "rarete": ""
    },
    {
      "id": "851305",
      "categorie": "Weapon",
      "nom": "Fundamental Qualities of a Maid",
      "image": "assets/commun/icon_weapon_dianesmall_0010_l__68691fe052840a29.png",
      "rarete": ""
    },
    {
      "id": "851306",
      "categorie": "Weapon",
      "nom": "Crimson Magic Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0503_l__cc6dc8de2114831e.png",
      "rarete": ""
    },
    {
      "id": "851307",
      "categorie": "Weapon",
      "nom": "Glorious Light",
      "image": "assets/commun/icon_weapon_dianesmall_0505_l__24c4696311cad61e.png",
      "rarete": ""
    },
    {
      "id": "851308",
      "categorie": "Weapon",
      "nom": "Demon Howl",
      "image": "assets/commun/icon_weapon_dianesmall_0504_l__bbdd232f9f0438fc.png",
      "rarete": ""
    },
    {
      "id": "851313",
      "categorie": "Weapon",
      "nom": "Goddess's Blue Heart",
      "image": "assets/commun/icon_weapon_dianesmall_0506_l__3d6cfc21b7e7652b.png",
      "rarete": ""
    },
    {
      "id": "851316",
      "categorie": "Weapon",
      "nom": "Guardian Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0501_l__c8d2f11daae73002.png",
      "rarete": ""
    },
    {
      "id": "851309",
      "categorie": "Weapon",
      "nom": "Champion Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0019_l__d3ec4e54078f987d.png",
      "rarete": ""
    },
    {
      "id": "851310",
      "categorie": "Weapon",
      "nom": "Rippling Lands",
      "image": "assets/commun/icon_weapon_dianesmall_0007_l__bd2df65ab6055757.png",
      "rarete": ""
    },
    {
      "id": "851311",
      "categorie": "Weapon",
      "nom": "Kungfu Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0006_l__94341eb57fa29c47.png",
      "rarete": ""
    },
    {
      "id": "851312",
      "categorie": "Weapon",
      "nom": "Dragon Claw Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0009_l__27557cee3e966faa.png",
      "rarete": ""
    },
    {
      "id": "851320",
      "categorie": "Weapon",
      "nom": "Kickboxing Club Essentials",
      "image": "assets/commun/icon_weapon_dianesmall_0020_l__eca9acad2daf8484.png",
      "rarete": ""
    },
    {
      "id": "851318",
      "categorie": "Weapon",
      "nom": "Ginnungagap's Galaxy Gloves",
      "image": "assets/commun/icon_weapon_dianesmall_0001_l__80a68c157b3fe055.png",
      "rarete": ""
    },
    {
      "id": "4055001",
      "categorie": "Head",
      "nom": "Fighter",
      "image": "assets/commun/icon_head_dianesmall_0003_l__bb884af9cf47392a.png",
      "rarete": ""
    },
    {
      "id": "4055012",
      "categorie": "Head",
      "nom": "Blue Wind Headpiece",
      "image": "assets/commun/icon_head_dianesmall_0036_l__cdf1aa62e9e48562.png",
      "rarete": ""
    },
    {
      "id": "4055009",
      "categorie": "Head",
      "nom": "Black Flame Battle Cap",
      "image": "assets/commun/icon_head_dianesmall_0011_l__8f6e35209aa1c963.png",
      "rarete": ""
    },
    {
      "id": "4055010",
      "categorie": "Head",
      "nom": "Furry Wolf Ears",
      "image": "assets/commun/icon_head_dianesmall_0025_l__ad3828807580eaa7.png",
      "rarete": ""
    },
    {
      "id": "4055011",
      "categorie": "Head",
      "nom": "Short Cut",
      "image": "assets/commun/icon_head_dianesmall_0028_l__c9c2245ac3265aa3.png",
      "rarete": ""
    },
    {
      "id": "4055003",
      "categorie": "Head",
      "nom": "Dumpling Head",
      "image": "assets/commun/icon_head_dianesmall_0007_l__9bac37938ff1c317.png",
      "rarete": ""
    },
    {
      "id": "4055008",
      "categorie": "Head",
      "nom": "Golden Hairpin",
      "image": "assets/commun/icon_head_dianesmall_0502_l__aa5c8b070813250d.png",
      "rarete": ""
    },
    {
      "id": "4055006",
      "categorie": "Head",
      "nom": "Veteran Maid",
      "image": "assets/commun/icon_head_dianesmall_0010_l__f5d3434b5ab82a1b.png",
      "rarete": ""
    },
    {
      "id": "4055002",
      "categorie": "Head",
      "nom": "Twist Twin-tail",
      "image": "assets/commun/icon_head_dianesmall_0006_l__76472b764660c222.png",
      "rarete": ""
    },
    {
      "id": "4055005",
      "categorie": "Head",
      "nom": "Holy Knight's Ponytail",
      "image": "assets/commun/icon_head_dianesmall_0009_l__030bbc2810cb4a3e.png",
      "rarete": ""
    },
    {
      "id": "4055007",
      "categorie": "Head",
      "nom": "Springtime Date",
      "image": "assets/commun/icon_head_dianesmall_0501_l__3b6b005752d07b1c.png",
      "rarete": ""
    },
    {
      "id": "4055013",
      "categorie": "Head",
      "nom": "Side Ponytail",
      "image": "assets/commun/icon_head_dianesmall_0020_l__947e3f65ea63515b.png",
      "rarete": ""
    },
    {
      "id": "4055004",
      "categorie": "Head",
      "nom": "Twin-tail",
      "image": "assets/commun/icon_head_dianesmall_0001_l__6192c9bb8f4f8549.png",
      "rarete": ""
    },
    {
      "id": "4055014",
      "categorie": "Head",
      "nom": "Bubbly High School Girl",
      "image": "assets/commun/icon_head_dianesmall_0506_l__d25e549c9b3fe57c.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Ginnungagap's Galaxy Gloves",
    "image": "assets/commun/icon_weapon_dianesmall_0551_s__c16dd7f6683365bf.png",
    "description": "Fighter Diane's Holy Relic (Weapon).\\n[DC143C]Dimensional gloves connected to Ginnungagap, the primordial void. The shining galaxy in the abyss of Ginnungagap can draw upon the power of golden stars.[-]",
    "passif": {
      "nom": "Ginnungagap's Galaxy Gloves",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Heals HP by [FFAE00]30 %[-] of Max HP if a Critical Strike occurs when the hero attacks an enemy."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 400.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 400.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 3900.0
      }
    ],
    "materiaux": [
      {
        "nom": "Gold",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Twilight Source",
        "image": "assets/commun/icon_craft_costume_rare_material_03__633922237ffc6bf3.png",
        "quantite": 15
      },
      {
        "nom": "Honor of the Einherjar",
        "image": "assets/commun/icon_craft_costume_material_01__49ff86632bcd1bc8.png",
        "quantite": 30
      },
      {
        "nom": "Unknown Magic Essence",
        "image": "assets/commun/icon_craft_costume_key_material_16__f15a600e7e4fe219.png",
        "quantite": 80
      },
      {
        "nom": "Eitri's Meticulousness",
        "image": "assets/commun/icon_craft_costume_material_07__ee745c99ba8751db.png",
        "quantite": 80
      }
    ],
    "provenance": "Skoll and Hati"
  }
};
