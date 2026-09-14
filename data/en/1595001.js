window.fichePreparee={
  "nom": "Zeldris of [b]Piety[/b]",
  "designation": "[The Ten Commandments]",
  "titre": "Zeldris of [b]Piety[/b]",
  "idJeu": "1595001",
  "attribut": {
    "nom": "@attribute.3",
    "icone": "assets/commun/icon_filter_attribute_03__4980bb489ce93431.png",
    "couleur": "#50b8ea",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.1"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_01__b2dfe4e53bdd1bf4.png"
    ]
  },
  "caracteristiques": [
    "@characteristic.2"
  ],
  "portrait": "assets/1595001/images/icon_hero_zeldris_0018_s__e881df8c3a838745.png",
  "rareteParDefaut": "LR",
  "presentation": "[The Ten Commandments] Zeldris of [b]Piety[/b] has a powerful attack skill with the Spike effect which deals great damage against an enemy. He also recovers his HP when a Critical Hit occurs with his skill, which inflicts Despair damage, and greatly increases his survivability.",
  "commandement": {
    "nom": "Commandment of [b]Piety[/b]",
    "image": "assets/1595001/images/icon_exclusive_skill_1595051__43d564578549964c.png",
    "simpleImage": "assets/1595001/images/icon_exclusive_skill_1595051_simple__e5246a259a4a3bc7.png",
    "description": "Depletes [FFAE00]1 % orb(s)[-] from the Ultimate Move Gauge and removes Debuffs when moving skills.\\n[00D5FF](Applies to both allies and enemies when entering battle, excludes Death Match)[-]"
  },
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1595001/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1595001/images/hero_illust_zeldris_1595001__185c0caa6f788594.png",
      "legendeImage": "zeldris_0001",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 600.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 420.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3911
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 60.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 140.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 60.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 40.0,
            "unite": "%"
          },
          {
            "nom": "@stat.pierceRate",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.regenerationRate",
            "valeur": 0.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 140.0,
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
          "nom": "\"Slash Hack\"",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_01__dcb5d0771fa3f9a7.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 160.0,
              "description": "Inflicts [00D5FF]Spike[-] damage equal to 160 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
              "idJeu": 172001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 240.0,
              "description": "Inflicts [00D5FF]Spike[-] damage equal to 240 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
              "idJeu": 172002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "Inflicts [00D5FF]Spike[-] damage equal to 400 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
              "idJeu": 172003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Invisible Blade\"",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_02__c14b143adc5df07b.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflicts [00D5FF]Despair[-] damage equal to 130 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Despair: Recovers 15 % of diminished HP upon successful critical strike.[-]",
              "idJeu": 172011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 195.0,
              "description": "Inflicts [00D5FF]Despair[-] damage equal to 195 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Despair: Recovers 20 % of diminished HP upon successful critical strike.[-]",
              "idJeu": 172012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 325.0,
              "description": "Inflicts [00D5FF]Despair[-] damage equal to 325 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Despair: Recovers 30 % of diminished HP upon successful critical strike.[-]",
              "idJeu": 172013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Reckless Line\"",
        "image": "assets/1595001/images/icon_zeldris_ssr_type01_special_01__f8ad253ebfe00487.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 560 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 616 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 672 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 728 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 784 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 840 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Demon King's Deputy",
        "image": "assets/1595001/images/icon_exclusive_skill_1595001__cf24b6a2fef731c3.png",
        "description": "Increases the hero's Crit Damage by [FFAE00]30 %[-] [FFAE00]for each orb[-] removed from the hero's Ultimate Move Gauge.\\n[00D5FF](Limit 3 times, excludes depletion from Ultimate Move use.)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases the hero's Crit Damage by [FFAE00]30 %[-] [FFAE00]for each orb[-] removed from the hero's Ultimate Move Gauge.\\n[00D5FF](Limit 3 times, excludes depletion from Ultimate Move use.)[-]"
          }
        ]
      },
      "idForme": 322001,
      "portrait": "assets/1595001/images/icon_hero_zeldris_0001_s__2bda8dc254034c51.png",
      "portraitVertical": "assets/1595001/images/icon_skin_zeldris_0001_l__5dfafb1b0f1d37c1.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1595001/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1595001/images/hero_illust_zeldris_1595001__185c0caa6f788594.png",
      "legendeImage": "zeldris_0002",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 780.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 480.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4539
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 60.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 140.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 60.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 40.0,
            "unite": "%"
          },
          {
            "nom": "@stat.pierceRate",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.regenerationRate",
            "valeur": 0.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 140.0,
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
          "nom": "\"Slash Hack\"",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_01__dcb5d0771fa3f9a7.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 160.0,
              "description": "Inflicts [00D5FF]Spike[-] damage equal to 160 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
              "idJeu": 172001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 240.0,
              "description": "Inflicts [00D5FF]Spike[-] damage equal to 240 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
              "idJeu": 172002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "Inflicts [00D5FF]Spike[-] damage equal to 400 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
              "idJeu": 172003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Invisible Blade\"",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_02__c14b143adc5df07b.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflicts [00D5FF]Despair[-] damage equal to 130 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Despair: Recovers 15 % of diminished HP upon successful critical strike.[-]",
              "idJeu": 172011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 195.0,
              "description": "Inflicts [00D5FF]Despair[-] damage equal to 195 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Despair: Recovers 20 % of diminished HP upon successful critical strike.[-]",
              "idJeu": 172012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 325.0,
              "description": "Inflicts [00D5FF]Despair[-] damage equal to 325 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Despair: Recovers 30 % of diminished HP upon successful critical strike.[-]",
              "idJeu": 172013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Reckless Line\"",
        "image": "assets/1595001/images/icon_zeldris_ssr_type01_special_01__f8ad253ebfe00487.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 560 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 616 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 672 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 728 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 784 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Inflicts [00D5FF]Spike[-] damage equal to 840 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Demon King's Deputy",
        "image": "assets/1595001/images/icon_exclusive_skill_1595001__cf24b6a2fef731c3.png",
        "description": "Increases the hero's Crit Damage by [FFAE00]30 %[-] [FFAE00]for each orb[-] removed from the hero's Ultimate Move Gauge.\\n[00D5FF](Limit 3 times, excludes depletion from Ultimate Move use.)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases the hero's Crit Damage by [FFAE00]30 %[-] [FFAE00]for each orb[-] removed from the hero's Ultimate Move Gauge.\\n[00D5FF](Limit 3 times, excludes depletion from Ultimate Move use.)[-]"
          }
        ]
      },
      "idForme": 322002,
      "portrait": "assets/1595001/images/icon_hero_zeldris_0002_s__42d4db50d1c0c6d9.png",
      "portraitVertical": "assets/1595001/images/icon_skin_zeldris_0002_l__4b340a24614e9d4a.png"
    },
    {
      "id": "LR",
      "nom": "LR",
      "icone": "assets/commun/icon_filter_grade_LR__01254701e83a6f69.png",
      "cadre": "assets/commun/common_frame_rank_lr.png",
      "fond": "assets/commun/icon_hero_basic_s_7__1f68b57601e76589.png",
      "coin": "assets/commun/common_level_frame_rank_lr.png",
      "couleur": "#f3ce80",
      "image": "assets/1595001/images/hero_illust_zeldris_1595001__185c0caa6f788594.png",
      "legendeImage": "zeldris_0018",
      "niveau": 100,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 800.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 470.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9100.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5656
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 110.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 220.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 80.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 85.0,
            "unite": "%"
          },
          {
            "nom": "@stat.pierceRate",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.regenerationRate",
            "valeur": 10.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 140.0,
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
          "nom": "\"Slash Hack\"",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_01__dcb5d0771fa3f9a7.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 176.0,
              "description": "Inflicts [00D5FF]Spike[-] damage equal to 176 % of Attack on @target.oneEnemy and [00D5FF]removes[-] 1 % [FFAE00]orb(s)[-] from their Ultimate Move Gauge.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
              "idJeu": 172041,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 264.0,
              "description": "Inflicts [00D5FF]Spike[-] damage equal to 264 % of Attack on @target.oneEnemy and [00D5FF]removes[-] 1 % [FFAE00]orb(s)[-] from their Ultimate Move Gauge.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
              "idJeu": 172042,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 440.0,
              "description": "Inflicts [00D5FF]Spike[-] damage equal to 440 % of Attack on @target.oneEnemy and [00D5FF]removes[-] 3 % [FFAE00]orb(s)[-] from their Ultimate Move Gauge.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
              "idJeu": 172043,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Invisible Blade\"",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_06__1e4f68481feeab5a.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 143.0,
              "description": "Decreases Crit Resistance of @target.allEnemies by [FFAE00]20%[-] for [FFAE00]1 turn[-], then inflicts [00D5FF]Despair[-] damage equal to 143 % of Attack.\\n\\n[00D5FF]※Despair: Recovers 15 % of diminished HP upon successful critical strike.[-]",
              "idJeu": 172051,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 215.0,
              "description": "Decreases Crit Resistance of @target.allEnemies by [FFAE00]30%[-] for [FFAE00]1 turn[-], then inflicts [00D5FF]Despair[-] damage equal to 215 % of Attack.\\n\\n[00D5FF]※Despair: Recovers 20 % of diminished HP upon successful critical strike.[-]",
              "idJeu": 172052,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 358.0,
              "description": "Decreases Crit Resistance of @target.allEnemies by [FFAE00]50%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Despair[-] damage equal to 358 % of Attack.\\n\\n[00D5FF]※Despair: Recovers 30 % of diminished HP upon successful critical strike.[-]",
              "idJeu": 172053,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Reckless Line\"",
        "image": "assets/1595001/images/icon_zeldris_ssr_type01_special_01__f8ad253ebfe00487.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Decreases HP-related stats of all enemies by [FFAE00]5%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Spike[-] damage equal to 560 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Decreases HP-related stats of all enemies by [FFAE00]9%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Spike[-] damage equal to 616 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Decreases HP-related stats of all enemies by [FFAE00]13%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Spike[-] damage equal to 672 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Decreases HP-related stats of all enemies by [FFAE00]17%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Spike[-] damage equal to 728 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Decreases HP-related stats of all enemies by [FFAE00]21%[-] for [FFAE00]3 turns[-], then inflicts [00D5FF]Spike[-] damage equal to 784 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Decreases HP-related stats of all enemies by [FFAE00]25%[-] for [FFAE00]3 turns[-], then inflicts [00D5FF]Spike[-] damage equal to 840 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Spike: 2x Crit Damage Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Demon King's Deputy",
        "image": "assets/1595001/images/icon_exclusive_skill_1595001__cf24b6a2fef731c3.png",
        "description": "Increases the hero's Crit Chance by [FFAE00]100%[-] for [FFAE00]2 turns[-] at the start of the battle. Increases the hero's Crit Chance by [FFAE00]30%[-] for [FFAE00]each orb[-] removed from the enemy's Ultimate Move Gauge [00D5FF]with the hero's skill use[-], up to [FFAE00]90%[-]. The hero's damage dealt increases by [FFAE00]80%[-] when attacking a [00D5FF]Debuffed[-] enemy.\\n\\nIn addition, the hero's Crit Damage increases by [FFAE00]120%[-] for [FFAE00]1 turn[-] [00D5FF]when the hero moves a skill[-]. Crit Damage increases by [FFAE00]30%[-] for [FFAE00]each orb[-] removed from the hero's Ultimate Move Gauge, up to [FFAE00]90%[-].\\n[00D5FF](Excludes depletion from Ultimate Move use)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases the hero's Crit Chance by [FFAE00]100%[-] for [FFAE00]2 turns[-] at the start of the battle. Increases the hero's Crit Chance by [FFAE00]30%[-] for [FFAE00]each orb[-] removed from the enemy's Ultimate Move Gauge [00D5FF]with the hero's skill use[-], up to [FFAE00]90%[-]. The hero's damage dealt increases by [FFAE00]80%[-] when attacking a [00D5FF]Debuffed[-] enemy.\\n\\nIn addition, the hero's Crit Damage increases by [FFAE00]120%[-] for [FFAE00]1 turn[-] [00D5FF]when the hero moves a skill[-]. Crit Damage increases by [FFAE00]30%[-] for [FFAE00]each orb[-] removed from the hero's Ultimate Move Gauge, up to [FFAE00]90%[-].\\n[00D5FF](Excludes depletion from Ultimate Move use)[-]"
          }
        ]
      },
      "idForme": 322005,
      "portrait": "assets/1595001/images/icon_hero_zeldris_0018_s__e881df8c3a838745.png",
      "portraitVertical": "assets/1595001/images/icon_skin_zeldris_0018_l__dd95bb0743b51e00.png"
    }
  ],
  "costumes": [
    {
      "id": "3322001",
      "categorie": "Skin",
      "nom": "[The Ten Commandments] Combat Outfit",
      "image": "assets/1595001/images/icon_skin_zeldris_0001_l__5dfafb1b0f1d37c1.png",
      "rarete": ""
    },
    {
      "id": "3322003",
      "categorie": "Skin",
      "nom": "Red Flame Uniform",
      "image": "assets/1595001/images/icon_skin_zeldris_0007_l__9d867679c687d795.png",
      "rarete": ""
    },
    {
      "id": "3322056",
      "categorie": "Skin",
      "nom": "Baseball Team Troublemaker",
      "image": "assets/1595001/images/icon_skin_zeldris_0017_l__e33447b8df4fc308.png",
      "rarete": ""
    },
    {
      "id": "3322050",
      "categorie": "Skin",
      "nom": "Guerilla Warrior",
      "image": "assets/1595001/images/icon_skin_zeldris_0003_l__4e6be4ab4d9fd598.png",
      "rarete": ""
    },
    {
      "id": "3322051",
      "categorie": "Skin",
      "nom": "Flight Suit",
      "image": "assets/1595001/images/icon_skin_zeldris_0004_l__4d86b53e5e0dc1df.png",
      "rarete": ""
    },
    {
      "id": "3322052",
      "categorie": "Skin",
      "nom": "Neat Uniform",
      "image": "assets/1595001/images/icon_skin_zeldris_0005_l__779652fddac2d494.png",
      "rarete": ""
    },
    {
      "id": "3322053",
      "categorie": "Skin",
      "nom": "Rebel",
      "image": "assets/1595001/images/icon_skin_zeldris_0006_l__903da557ebf49838.png",
      "rarete": ""
    },
    {
      "id": "3322054",
      "categorie": "Skin",
      "nom": "Flaming Wheel Combat Suit",
      "image": "assets/1595001/images/icon_skin_zeldris_0009_l__da569ccdab729b0d.png",
      "rarete": ""
    },
    {
      "id": "3322002",
      "categorie": "Skin",
      "nom": "Crimson Armor of Darkness",
      "image": "assets/1595001/images/icon_skin_zeldris_0002_l__4b340a24614e9d4a.png",
      "rarete": ""
    },
    {
      "id": "3322004",
      "categorie": "Skin",
      "nom": "Fancy Red Flame Uniform",
      "image": "assets/1595001/images/icon_skin_zeldris_0008_l__493e1a18461d662f.png",
      "rarete": ""
    },
    {
      "id": "3322005",
      "categorie": "Skin",
      "nom": "Brilliant Black Dragon Armor",
      "image": "assets/1595001/images/icon_skin_zeldris_0018_l__dd95bb0743b51e00.png",
      "rarete": ""
    },
    {
      "id": "3322055",
      "categorie": "Skin",
      "nom": "Erosion of the Corrupted Nightmare",
      "image": "assets/1595001/images/icon_skin_zeldris_0015_l__0a99203e4960cbe6.png",
      "rarete": ""
    },
    {
      "id": "858101",
      "categorie": "Weapon",
      "nom": "Zeldris's Sword",
      "image": "assets/1595001/images/icon_weapon_zeldris_0001_l__1c7b241931f5bfe6.png",
      "rarete": ""
    },
    {
      "id": "858102",
      "categorie": "Weapon",
      "nom": "Sword of the Red Eye",
      "image": "assets/1595001/images/icon_weapon_zeldris_0003_l__7a60769923b52d25.png",
      "rarete": ""
    },
    {
      "id": "858103",
      "categorie": "Weapon",
      "nom": "Sharp Sword of Scars",
      "image": "assets/1595001/images/icon_weapon_zeldris_0004_l__bca5be99e18684ca.png",
      "rarete": ""
    },
    {
      "id": "858104",
      "categorie": "Weapon",
      "nom": "Unique Rapier",
      "image": "assets/1595001/images/icon_weapon_zeldris_0005_l__af43281f2b481a3a.png",
      "rarete": ""
    },
    {
      "id": "858109",
      "categorie": "Weapon",
      "nom": "Rebel's Fervor",
      "image": "assets/1595001/images/icon_weapon_zeldris_0006_l__b20a6f431c26fea2.png",
      "rarete": ""
    },
    {
      "id": "858110",
      "categorie": "Weapon",
      "nom": "Red Blade Sword",
      "image": "assets/1595001/images/icon_weapon_zeldris_0009_l__f454efba37570a34.png",
      "rarete": ""
    },
    {
      "id": "858112",
      "categorie": "Weapon",
      "nom": "Troublemaker's Bat",
      "image": "assets/1595001/images/icon_weapon_zeldris_0017_l__4acb59bddd664d97.png",
      "rarete": ""
    },
    {
      "id": "858107",
      "categorie": "Weapon",
      "nom": "858107",
      "image": "assets/1595001/images/icon_weapon_zeldris_0501_l__1f0e7f26eca4ccfe.png",
      "rarete": ""
    },
    {
      "id": "858108",
      "categorie": "Weapon",
      "nom": "858108",
      "image": "assets/1595001/images/icon_weapon_zeldris_0501_l__1f0e7f26eca4ccfe.png",
      "rarete": ""
    },
    {
      "id": "858105",
      "categorie": "Weapon",
      "nom": "Ancient Crimson Blade",
      "image": "assets/1595001/images/icon_weapon_zeldris_0501_l__1f0e7f26eca4ccfe.png",
      "rarete": ""
    },
    {
      "id": "858106",
      "categorie": "Weapon",
      "nom": "Red Flame Sword",
      "image": "assets/1595001/images/icon_weapon_zeldris_0502_l__6d27546778228353.png",
      "rarete": ""
    },
    {
      "id": "858111",
      "categorie": "Weapon",
      "nom": "Magic of the Corrupted Nightmare",
      "image": "assets/1595001/images/icon_weapon_zeldris_0015_l__c9d6e9cda217432a.png",
      "rarete": ""
    },
    {
      "id": "858113",
      "categorie": "Weapon",
      "nom": "Tearing Sword of Gunnthra",
      "image": "assets/1595001/images/icon_weapon_zeldris_0001_l__1c7b241931f5bfe6.png",
      "rarete": ""
    },
    {
      "id": "4655001",
      "categorie": "Head",
      "nom": "Windy Medium Cut",
      "image": "assets/1595001/images/icon_head_zeldris_0001_l__bb4c7d73699f520a.png",
      "rarete": ""
    },
    {
      "id": "4655002",
      "categorie": "Head",
      "nom": "Naturally Styled",
      "image": "assets/1595001/images/icon_head_zeldris_0003_l__049710960b8b38b7.png",
      "rarete": ""
    },
    {
      "id": "4655003",
      "categorie": "Head",
      "nom": "Hipster Headphones",
      "image": "assets/1595001/images/icon_head_zeldris_0004_l__882a6ab843e18d75.png",
      "rarete": ""
    },
    {
      "id": "4655004",
      "categorie": "Head",
      "nom": "Set Hair",
      "image": "assets/1595001/images/icon_head_zeldris_0005_l__a5b9fc45f69c1f3a.png",
      "rarete": ""
    },
    {
      "id": "4655007",
      "categorie": "Head",
      "nom": "Rebellious",
      "image": "assets/1595001/images/icon_head_zeldris_0006_l__7e72d42b5e998515.png",
      "rarete": ""
    },
    {
      "id": "4655008",
      "categorie": "Head",
      "nom": "Burning Hair",
      "image": "assets/1595001/images/icon_head_zeldris_0009_l__ae11cc0149ae6d45.png",
      "rarete": ""
    },
    {
      "id": "4655010",
      "categorie": "Head",
      "nom": "Brilliant Black Dragon Circlet",
      "image": "assets/1595001/images/icon_head_zeldris_0018_l__a3056277bd72daed.png",
      "rarete": ""
    },
    {
      "id": "4655005",
      "categorie": "Head",
      "nom": "4655005",
      "image": "assets/1595001/images/icon_head_zeldris_0001_l__bb4c7d73699f520a.png",
      "rarete": ""
    },
    {
      "id": "4655006",
      "categorie": "Head",
      "nom": "4655006",
      "image": "assets/1595001/images/icon_head_zeldris_0003_l__049710960b8b38b7.png",
      "rarete": ""
    },
    {
      "id": "4655009",
      "categorie": "Head",
      "nom": "Curse of the Corrupted Nightmare",
      "image": "assets/1595001/images/icon_head_zeldris_0015_l__403aecf4ae8fd7d3.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Tearing Sword of Gunnthra",
    "image": "assets/1595001/images/icon_weapon_zeldris_0552_s__0e100158485716fd.png",
    "description": "Zeldris of [b]Piety[/b]'s Holy Relic (Weapon).\\n[DC143C]A sword created by the Gunnthra River in Niflheim. Due to the concentration of hate, regret, and sin that make up the river, those who are wounded by this blade become possessed by vile spirits.[-]",
    "passif": {
      "nom": "Tearing Sword of Gunnthra",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "If the hero's Ultimate Move Gauge is decreased, or if the hero's skill use decreases an enemy's Ultimate Move Gauge, increases allies' basic stats by [FFAE00]6%[-] for [FFAE00]each[-] Ultimate Move Gauge orb removed, up to [FFAE00]5 times[-]\\n[00D5FF](Excludes depletion from Ultimate Move use)[-]"
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 200.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 250.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 3000.0
      }
    ],
    "materiaux": [
      {
        "nom": "Gold",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Source of the Roots' Corruption",
        "image": "assets/commun/icon_craft_costume_rare_material_04__4083e9decd2eb5e0.png",
        "quantite": 15
      },
      {
        "nom": "Dark Red Crystal",
        "image": "assets/commun/icon_craft_costume_material_08__53b70f5c9ddcb41a.png",
        "quantite": 30
      },
      {
        "nom": "Black Magic Essence",
        "image": "assets/commun/icon_craft_costume_key_material_02__c45289b47672f7a7.png",
        "quantite": 80
      },
      {
        "nom": "Volundr's Tenacity",
        "image": "assets/commun/icon_craft_costume_material_12__931f89e710e00615.png",
        "quantite": 80
      }
    ],
    "provenance": "Nidhoggr"
  }
};
