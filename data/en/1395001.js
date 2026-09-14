window.fichePreparee={
  "nom": "Lostvayne Meliodas",
  "designation": "\"Virtual Body Doubles\"",
  "titre": "Lostvayne Meliodas",
  "idJeu": "1395001",
  "attribut": {
    "nom": "@attribute.1",
    "icone": "assets/commun/icon_filter_attribute_01__bfa1da106b20bf3e.png",
    "couleur": "#ef6369",
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
    "@characteristic.6"
  ],
  "portrait": "assets/1395001/images/icon_hero_meliodas_0065_s__9159df16c403c04d.png",
  "rareteParDefaut": "LR",
  "presentation": "\"Virtual Body Doubles\" Lostvayne Meliodas has a skill which fills up his own Ultimate Move Gauge, allowing him to unleash his Ultimate Move quickly, and another skill which ignores enemy Defense.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1395001/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1395001/images/hero_illust_meliodas_1395001__24deb7e8e8c7408a.png",
      "legendeImage": "meliodas_0005",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 560.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 350.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3810
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 70.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 170.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 0.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 60.0,
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
          "nom": "\"Division Impact\"",
          "image": "assets/1395001/images/icon_meliodas_lostvayne_ssr_type01_skill_01__26343b71988026aa.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 240.0,
              "description": "Inflicts damage equal to 240 % of Attack on @target.oneEnemy.",
              "idJeu": 148001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts damage equal to 300 % of Attack on @target.oneEnemy and fills 1 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
              "idJeu": 148002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts damage equal to 500 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
              "idJeu": 148003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Triple Avatar\"",
          "image": "assets/1395001/images/icon_meliodas_lostvayne_ssr_type01_skill_02__7efea04b5c15895a.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 130 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 148011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 195.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 195 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 148012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 325.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 325 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 148013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Virtual Body Doubles\"",
        "image": "assets/1395001/images/icon_meliodas_lostvayne_ssr_type01_special_01__39832156830e4b36.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 300.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 300 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]20 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 330.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 330 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]28 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 360.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 360 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]36 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 390.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 390 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]44 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 420.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 420 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]52 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 450.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 450 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]60 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Rebate",
        "image": "assets/1395001/images/icon_exclusive_skill_1395001__b061e5ded951ee7a.png",
        "description": "[00D5FF]Increases the ranks[-] of all of the hero's skills when the hero takes Crit Damage during the enemy turn.",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "[00D5FF]Increases the ranks[-] of all of the hero's skills when the hero takes Crit Damage during the enemy turn."
          }
        ]
      },
      "idForme": 304901,
      "portrait": "assets/1395001/images/icon_hero_meliodas_0005_s__0818997ac305c4ea.png",
      "portraitVertical": "assets/1395001/images/icon_skin_meliodas_0005_l__8bfd5140b70b999f.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1395001/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1395001/images/hero_illust_meliodas_1395001__24deb7e8e8c7408a.png",
      "legendeImage": "meliodas_0013",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 700.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 430.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7400.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4094
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 70.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 170.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 0.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 60.0,
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
          "nom": "\"Division Impact\"",
          "image": "assets/1395001/images/icon_meliodas_lostvayne_ssr_type01_skill_01__26343b71988026aa.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 240.0,
              "description": "Inflicts damage equal to 240 % of Attack on @target.oneEnemy.",
              "idJeu": 148001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts damage equal to 300 % of Attack on @target.oneEnemy and fills 1 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
              "idJeu": 148002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts damage equal to 500 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
              "idJeu": 148003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Triple Avatar\"",
          "image": "assets/1395001/images/icon_meliodas_lostvayne_ssr_type01_skill_02__7efea04b5c15895a.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 130 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 148011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 195.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 195 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 148012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 325.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 325 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 148013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Virtual Body Doubles\"",
        "image": "assets/1395001/images/icon_meliodas_lostvayne_ssr_type01_special_01__39832156830e4b36.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 300.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 300 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]20 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 330.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 330 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]28 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 360.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 360 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]36 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 390.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 390 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]44 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 420.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 420 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]52 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 450.0,
            "description": "Inflicts [00D5FF]Secret Technique[-] damage equal to 450 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]60 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Rebate",
        "image": "assets/1395001/images/icon_exclusive_skill_1395001__b061e5ded951ee7a.png",
        "description": "[00D5FF]Increases the ranks[-] of all of the hero's skills when the hero takes Crit Damage during the enemy turn.",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "[00D5FF]Increases the ranks[-] of all of the hero's skills when the hero takes Crit Damage during the enemy turn."
          }
        ]
      },
      "idForme": 304902,
      "portrait": "assets/1395001/images/icon_hero_meliodas_0013_s__4fddcb33f7a1bac0.png",
      "portraitVertical": "assets/1395001/images/icon_skin_meliodas_0013_l__4ff2539d4b454ef9.png"
    },
    {
      "id": "LR",
      "nom": "LR",
      "icone": "assets/commun/icon_filter_grade_LR__01254701e83a6f69.png",
      "cadre": "assets/commun/common_frame_rank_lr.png",
      "fond": "assets/commun/icon_hero_basic_s_7__1f68b57601e76589.png",
      "coin": "assets/commun/common_level_frame_rank_lr.png",
      "couleur": "#f3ce80",
      "image": "assets/1395001/images/hero_illust_meliodas_1395001__24deb7e8e8c7408a.png",
      "legendeImage": "meliodas_0065",
      "niveau": 100,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 950.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 480.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9400.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5614
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 130.0,
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
            "valeur": 0.0,
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
          "nom": "\"Division Impact\"",
          "image": "assets/1395001/images/icon_meliodas_lostvayne_ssr_type01_skill_01__26343b71988026aa.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 264.0,
              "description": "Inflicts [00D5FF]Sever[-] damage equal to 264 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
              "idJeu": 148041,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 330.0,
              "description": "Inflicts [00D5FF]Sever[-] damage equal to 330 % of Attack on @target.oneEnemy and fills the Ultimate Move Gauge by 1 % [FFAE00]orb(s)[-].\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
              "idJeu": 148042,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 550.0,
              "description": "Inflicts [00D5FF]Sever[-] damage equal to 550 % of Attack on @target.oneEnemy and fills the Ultimate Move Gauge by 2 % [FFAE00]orb(s)[-].\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
              "idJeu": 148043,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Triple Avatar\"",
          "image": "assets/1395001/images/icon_meliodas_lostvayne_ssr_type01_skill_05__59aa0adf08c4fc33.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 130 % of Attack on @target.allEnemies. [00D5FF]Infects[-] for 1 tour(s).\\n\\n[00D5FF]※Charge: Ignores Defense.[-]\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]",
              "idJeu": 148051,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 195.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 195 % of Attack on @target.allEnemies. [00D5FF]Infects[-] for 1 tour(s).\\n\\n[00D5FF]※Charge: Ignores Defense.[-]\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]",
              "idJeu": 148052,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 325.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 325 % of Attack on @target.allEnemies. [00D5FF]Infects[-] for 2 tour(s).\\n\\n[00D5FF]※Charge: Ignores Defense.[-]\\n[00D5FF]※Infect: Restricts Recovery-related stats.[-]",
              "idJeu": 148053,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Virtual Body Doubles\"",
        "image": "assets/1395001/images/icon_meliodas_lostvayne_ssr_type01_special_01__39832156830e4b36.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 300.0,
            "description": "Increases all of the hero's stats by [FFAE00]3%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Secret Technique[-] damage equal to 300 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]20 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 330.0,
            "description": "Increases all of the hero's stats by [FFAE00]5%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Secret Technique[-] damage equal to 330 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]30 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 360.0,
            "description": "Increases all of the hero's stats by [FFAE00]7%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Secret Technique[-] damage equal to 360 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]40 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 390.0,
            "description": "Increases all of the hero's stats by [FFAE00]10%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Secret Technique[-] damage equal to 390 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]50 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 420.0,
            "description": "Increases all of the hero's stats by [FFAE00]15%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Secret Technique[-] damage equal to 420 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]65 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 450.0,
            "description": "Increases all of the hero's stats by [FFAE00]20%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Secret Technique[-] damage equal to 450 % of Attack on @target.allEnemies and deals damage with attribute advantage regardless of attribute.\\n\\n[00D5FF]※Secret Technique: [FFAE00]+[-]80 % additional damage per hero skill.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Rebate",
        "image": "assets/1395001/images/icon_exclusive_skill_1395001__b061e5ded951ee7a.png",
        "description": "[00D5FF]Increases the ranks[-] of all of the hero's skills and increases Crit Defense by [FFAE00]30%[-], up to [FFAE00]90%[-], whenever the hero takes Crit Damage during the enemy's turn. In addition, the hero's Attack-related stats increase by [FFAE00]10%[-] for [FFAE00]3 turns[-] whenever the hero's [00D5FF]Unique increases Skill Ranks[-].\\n[00D5FF](Can be stacked up to [FFAE00]5 times[-])[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "[00D5FF]Increases the ranks[-] of all of the hero's skills and increases Crit Defense by [FFAE00]30%[-], up to [FFAE00]90%[-], whenever the hero takes Crit Damage during the enemy's turn. In addition, the hero's Attack-related stats increase by [FFAE00]10%[-] for [FFAE00]3 turns[-] whenever the hero's [00D5FF]Unique increases Skill Ranks[-].\\n[00D5FF](Can be stacked up to [FFAE00]5 times[-])[-]"
          }
        ]
      },
      "idForme": 304905,
      "portrait": "assets/1395001/images/icon_hero_meliodas_0065_s__9159df16c403c04d.png",
      "portraitVertical": "assets/1395001/images/icon_skin_meliodas_0065_l__8d1a89d451b6f5d9.png"
    }
  ],
  "costumes": [
    {
      "id": "3304901",
      "categorie": "Skin",
      "nom": "Neat Loungewear",
      "image": "assets/1395001/images/icon_skin_meliodas_0005_l__8bfd5140b70b999f.png",
      "rarete": ""
    },
    {
      "id": "3304903",
      "categorie": "Skin",
      "nom": "Captain's Exploration Outfit",
      "image": "assets/1395001/images/icon_skin_meliodas_0052_l__adc146e1f4556b06.png",
      "rarete": ""
    },
    {
      "id": "3304957",
      "categorie": "Skin",
      "nom": "Warrior's Combat Outfit",
      "image": "assets/1395001/images/icon_skin_meliodas_0048_l__08e7619b8da22199.png",
      "rarete": ""
    },
    {
      "id": "3304951",
      "categorie": "Skin",
      "nom": "Culinary Guru",
      "image": "assets/1395001/images/icon_skin_meliodas_0043_l__7dc35d243082e732.png",
      "rarete": ""
    },
    {
      "id": "3304952",
      "categorie": "Skin",
      "nom": "Red Flame Uniform",
      "image": "assets/1395001/images/icon_skin_meliodas_0031_l__f0c808f7c02336cd.png",
      "rarete": ""
    },
    {
      "id": "3304954",
      "categorie": "Skin",
      "nom": "Light Green Hoodie",
      "image": "assets/1395001/images/icon_skin_meliodas_0045_l__5cbf663fe1c1aad1.png",
      "rarete": ""
    },
    {
      "id": "3304958",
      "categorie": "Skin",
      "nom": "Captain on the Cool Beach",
      "image": "assets/1395001/images/icon_skin_meliodas_0053_l__99759d943d07077d.png",
      "rarete": ""
    },
    {
      "id": "3304962",
      "categorie": "Skin",
      "nom": "Pro Skater",
      "image": "assets/1395001/images/icon_skin_meliodas_0066_l__9df115424d81e375.png",
      "rarete": ""
    },
    {
      "id": "3304956",
      "categorie": "Skin",
      "nom": "Hero Suit",
      "image": "assets/commun/icon_skin_meliodas_0047_l__2cebe948e443808b.png",
      "rarete": ""
    },
    {
      "id": "3304961",
      "categorie": "Skin",
      "nom": "Cozy Celebratory Coat",
      "image": "assets/1395001/images/icon_skin_meliodas_0061_l__5c6f1f094e2b16d9.png",
      "rarete": ""
    },
    {
      "id": "3304959",
      "categorie": "Skin",
      "nom": "Grand Cross 2.5th Anniversary Celebration Tuxedo",
      "image": "assets/1395001/images/icon_skin_meliodas_0056_l__1aeea4e76a3ee368.png",
      "rarete": ""
    },
    {
      "id": "3304902",
      "categorie": "Skin",
      "nom": "Crimson Carapace",
      "image": "assets/1395001/images/icon_skin_meliodas_0013_l__4ff2539d4b454ef9.png",
      "rarete": ""
    },
    {
      "id": "3304904",
      "categorie": "Skin",
      "nom": "Thick Winter Clothes",
      "image": "assets/1395001/images/icon_skin_meliodas_0046_l__a9d9a3e895808aed.png",
      "rarete": ""
    },
    {
      "id": "3304905",
      "categorie": "Skin",
      "nom": "Brilliant Red Dragon Armor",
      "image": "assets/1395001/images/icon_skin_meliodas_0065_l__8d1a89d451b6f5d9.png",
      "rarete": ""
    },
    {
      "id": "3304955",
      "categorie": "Skin",
      "nom": "Simple Loungewear",
      "image": "assets/1395001/images/icon_skin_meliodas_0028_l__c036cf705d9e684f.png",
      "rarete": ""
    },
    {
      "id": "3304960",
      "categorie": "Skin",
      "nom": "Glorious Knighthood Armor",
      "image": "assets/1395001/images/icon_skin_meliodas_0057_l__d47907860857418f.png",
      "rarete": ""
    },
    {
      "id": "857601",
      "categorie": "Weapon",
      "nom": "Demon Sword Lostvayne's Scabbard",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857611",
      "categorie": "Weapon",
      "nom": "Winged Scabbard",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857603",
      "categorie": "Weapon",
      "nom": "Guru's Scabbard",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857604",
      "categorie": "Weapon",
      "nom": "Red Flame Scabbard",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857606",
      "categorie": "Weapon",
      "nom": "Sling Bag",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857607",
      "categorie": "Weapon",
      "nom": "Lifejacket Sheath",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857613",
      "categorie": "Weapon",
      "nom": "Skater Backpack",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857612",
      "categorie": "Weapon",
      "nom": "Grand Cross 3.5th Anniversary Souvenir",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857605",
      "categorie": "Weapon",
      "nom": "Scabbard of Old Memories",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857608",
      "categorie": "Weapon",
      "nom": "Fafnir's Magic Scabbard",
      "image": null,
      "rarete": ""
    },
    {
      "id": "857614",
      "categorie": "Weapon",
      "nom": "Starlit Crimson Dragon Scabbard",
      "image": null,
      "rarete": ""
    },
    {
      "id": "4395001",
      "categorie": "Head",
      "nom": "Everyday Bed Head",
      "image": "assets/commun/icon_head_meliodas_0001_l__1530c469aecb6756.png",
      "rarete": ""
    },
    {
      "id": "4395007",
      "categorie": "Head",
      "nom": "Warrior's Helmet",
      "image": "assets/1395001/images/icon_head_meliodas_0048_l__6d67ae7eb6712785.png",
      "rarete": ""
    },
    {
      "id": "4395003",
      "categorie": "Head",
      "nom": "Guru's Hat",
      "image": "assets/1395001/images/icon_head_meliodas_0043_l__8695b49dde67f1bf.png",
      "rarete": ""
    },
    {
      "id": "4395004",
      "categorie": "Head",
      "nom": "Neat Comb Over",
      "image": "assets/1395001/images/icon_head_meliodas_0031_l__f4faabbd5cc8ae71.png",
      "rarete": ""
    },
    {
      "id": "4395006",
      "categorie": "Head",
      "nom": "Protective Eyewear",
      "image": "assets/1395001/images/icon_head_meliodas_0045_l__404ca0460796f7d6.png",
      "rarete": ""
    },
    {
      "id": "4395010",
      "categorie": "Head",
      "nom": "Cool Straw Hat",
      "image": "assets/1395001/images/icon_head_meliodas_0053_l__658e604e662f037e.png",
      "rarete": ""
    },
    {
      "id": "4395013",
      "categorie": "Head",
      "nom": "Professional Safety Helmet",
      "image": "assets/1395001/images/icon_head_meliodas_0066_l__f695d917104dbad1.png",
      "rarete": ""
    },
    {
      "id": "4395008",
      "categorie": "Head",
      "nom": "2nd Anniversary Celebration Headband",
      "image": "assets/1395001/images/icon_head_meliodas_0508_l__18ebfb8d9d0eb321.png",
      "rarete": ""
    },
    {
      "id": "4395011",
      "categorie": "Head",
      "nom": "Fancy Celebratory Crown",
      "image": "assets/1395001/images/icon_head_meliodas_0061_l__0cb7e165ce333248.png",
      "rarete": ""
    },
    {
      "id": "4395012",
      "categorie": "Head",
      "nom": "Brilliant Red Dragon Circlet",
      "image": "assets/1395001/images/icon_head_meliodas_0065_l__5089f209d0822ab4.png",
      "rarete": ""
    },
    {
      "id": "4395009",
      "categorie": "Head",
      "nom": "Warm Earmuffs",
      "image": "assets/1395001/images/icon_head_meliodas_0046_l__b58f5af0f9bb3849.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Fafnir's Magic Scabbard",
    "image": "assets/1395001/images/icon_weapon_meliodas_lostvayne_0551_s__2a2389ca1dfe119d.png",
    "description": "Lostvayne Meliodas's Holy Relic (Weapon).\\n[DC143C]A scabbard made from the carcass of Fafnir. The entire sheath and its ornaments are cursed by the grudge Fafnir harbored when he was defeated.[-]",
    "passif": {
      "nom": "Fafnir's Magic Scabbard",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Increases the hero's damage dealt by [FFAE00]10 %[-] for [FFAE00]every orb[-] in the hero's Ultimate Move Gauge."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 500.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 350.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 3600.0
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
        "nom": "Eitri's Meticulousness",
        "image": "assets/commun/icon_craft_costume_material_07__ee745c99ba8751db.png",
        "quantite": 80
      }
    ],
    "provenance": "Nidhoggr"
  }
};
