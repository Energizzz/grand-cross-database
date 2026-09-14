window.fichePreparee={
  "nom": "Holy Knight Jericho",
  "designation": "[Adventurer]",
  "titre": "Holy Knight Jericho",
  "idJeu": "1184002",
  "attribut": {
    "nom": "@attribute.1",
    "icone": "assets/commun/icon_filter_attribute_01__bfa1da106b20bf3e.png",
    "couleur": "#ef6369",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.3"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_03__22a79e39766d0c88.png"
    ]
  },
  "caracteristiques": [],
  "portrait": "assets/1184002/images/icon_hero_jericho_0002_s__b9b67abe7c7be67f.png",
  "rareteParDefaut": "UR",
  "presentation": "[Adventurer] Holy Knight Jericho's skill has a Rupture effect which inflicts great damage on buffed enemies.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SR",
      "nom": "SR",
      "icone": "assets/commun/icon_filter_grade_SR__cc09bcf3e7213a06.png",
      "cadre": "assets/1184002/images/icon_frame_small_sr__c14285dca5b2bf1b.png",
      "fond": "assets/commun/icon_hero_basic_s_4__d8de890911c49b3d.png",
      "coin": "assets/commun/common_level_frame_rank_sr.png",
      "couleur": "#f3ce80",
      "image": "assets/1184002/images/hero_illust_jericho_1184002__c7794a3996d8b9d5.png",
      "legendeImage": "jericho_0018",
      "niveau": 40,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 360.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 150.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 3400.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 2045
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 30.0,
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
            "valeur": 10.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 30.0,
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
            "valeur": 100.0,
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
          "nom": "\"Count Smash\"",
          "image": "assets/1184002/images/icon_jericho_sword_skill_01__242079d587015f0a.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 140.0,
              "description": "Inflicts damage equal to 140 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
              "idJeu": 117001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 210.0,
              "description": "Inflicts damage equal to 210 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
              "idJeu": 117002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 350.0,
              "description": "Inflicts damage equal to 350 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
              "idJeu": 117003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Pain Blade\"",
          "image": "assets/1184002/images/icon_jericho_sword_skill_03__397856d1778bf491.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflicts [00D5FF]Rupture[-] damage equal to 180 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Rupture: 2x damage against Buffed enemies.[-]",
              "idJeu": 117021,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflicts [00D5FF]Rupture[-] damage equal to 270 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Rupture: 2x damage against Buffed enemies.[-]",
              "idJeu": 117022,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflicts [00D5FF]Rupture[-] damage equal to 450 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Rupture: 2x damage against Buffed enemies.[-]",
              "idJeu": 117023,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Godspeed Ten Flashes\"",
        "image": "assets/commun/icon_jericho_sword_special_01__703be5d4bbe6ef69.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 455.0,
            "description": "Inflicts damage equal to 455 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 501.0,
            "description": "Inflicts damage equal to 501 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 546.0,
            "description": "Inflicts damage equal to 546 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 592.0,
            "description": "Inflicts damage equal to 592 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 637.0,
            "description": "Inflicts damage equal to 637 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 683.0,
            "description": "Inflicts damage equal to 683 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Finding an Opening",
        "image": "assets/1184002/images/icon_exclusive_skill_1184002__1bbc4055a6ca99b0.png",
        "description": "Increases Strength attribute allies' Attack-related stats by [FFAE00]10 %[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases Strength attribute allies' Attack-related stats by [FFAE00]10 %[-]."
          }
        ]
      },
      "idForme": 301110,
      "portrait": "assets/1184002/images/icon_hero_jericho_0018_s__d4e06f8274a0956a.png",
      "portraitVertical": "assets/commun/icon_skin_jericho_0018_l__61108f86938b3ab2.png"
    },
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1184002/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1184002/images/hero_illust_jericho_1184002__c7794a3996d8b9d5.png",
      "legendeImage": "jericho_0005",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 520.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 210.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 5000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 2573
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 30.0,
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
            "valeur": 10.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 30.0,
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
            "valeur": 100.0,
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
          "nom": "\"Count Smash\"",
          "image": "assets/1184002/images/icon_jericho_sword_skill_01__242079d587015f0a.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 140.0,
              "description": "Inflicts damage equal to 140 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
              "idJeu": 117001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 210.0,
              "description": "Inflicts damage equal to 210 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
              "idJeu": 117002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 350.0,
              "description": "Inflicts damage equal to 350 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
              "idJeu": 117003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Pain Blade\"",
          "image": "assets/1184002/images/icon_jericho_sword_skill_03__397856d1778bf491.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflicts [00D5FF]Rupture[-] damage equal to 180 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Rupture: 2x damage against Buffed enemies.[-]",
              "idJeu": 117021,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflicts [00D5FF]Rupture[-] damage equal to 270 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Rupture: 2x damage against Buffed enemies.[-]",
              "idJeu": 117022,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflicts [00D5FF]Rupture[-] damage equal to 450 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Rupture: 2x damage against Buffed enemies.[-]",
              "idJeu": 117023,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Godspeed Ten Flashes\"",
        "image": "assets/commun/icon_jericho_sword_special_01__703be5d4bbe6ef69.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 455.0,
            "description": "Inflicts damage equal to 455 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 501.0,
            "description": "Inflicts damage equal to 501 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 546.0,
            "description": "Inflicts damage equal to 546 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 592.0,
            "description": "Inflicts damage equal to 592 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 637.0,
            "description": "Inflicts damage equal to 637 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 683.0,
            "description": "Inflicts damage equal to 683 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Finding an Opening",
        "image": "assets/1184002/images/icon_exclusive_skill_1184002__1bbc4055a6ca99b0.png",
        "description": "Increases Strength attribute allies' Attack-related stats by [FFAE00]10 %[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases Strength attribute allies' Attack-related stats by [FFAE00]10 %[-]."
          }
        ]
      },
      "idForme": 301104,
      "portrait": "assets/1184002/images/icon_hero_jericho_0005_s__64c261bad39638dd.png",
      "portraitVertical": "assets/commun/icon_skin_jericho_0005_l__1c80096fe8058f86.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1184002/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1184002/images/hero_illust_jericho_1184002__c7794a3996d8b9d5.png",
      "legendeImage": "jericho_0002",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 680.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 270.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6600.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3101
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 30.0,
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
            "valeur": 10.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 30.0,
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
            "valeur": 100.0,
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
          "nom": "\"Count Smash\"",
          "image": "assets/1184002/images/icon_jericho_sword_skill_01__242079d587015f0a.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 140.0,
              "description": "Inflicts damage equal to 140 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
              "idJeu": 117001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 210.0,
              "description": "Inflicts damage equal to 210 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
              "idJeu": 117002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 350.0,
              "description": "Inflicts damage equal to 350 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
              "idJeu": 117003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Pain Blade\"",
          "image": "assets/1184002/images/icon_jericho_sword_skill_03__397856d1778bf491.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflicts [00D5FF]Rupture[-] damage equal to 180 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Rupture: 2x damage against Buffed enemies.[-]",
              "idJeu": 117021,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflicts [00D5FF]Rupture[-] damage equal to 270 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Rupture: 2x damage against Buffed enemies.[-]",
              "idJeu": 117022,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflicts [00D5FF]Rupture[-] damage equal to 450 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Rupture: 2x damage against Buffed enemies.[-]",
              "idJeu": 117023,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Godspeed Ten Flashes\"",
        "image": "assets/commun/icon_jericho_sword_special_01__703be5d4bbe6ef69.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 455.0,
            "description": "Inflicts damage equal to 455 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 501.0,
            "description": "Inflicts damage equal to 501 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 546.0,
            "description": "Inflicts damage equal to 546 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 592.0,
            "description": "Inflicts damage equal to 592 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 637.0,
            "description": "Inflicts damage equal to 637 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 683.0,
            "description": "Inflicts damage equal to 683 % of Attack on @target.oneEnemy. Makes target(s) [00D5FF]Bleed[-] for 2 tour(s).\\n\\n[00D5FF]※Bleed: Additional damage equal to 90 % of damage dealt at the end of every turn.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Finding an Opening",
        "image": "assets/1184002/images/icon_exclusive_skill_1184002__1bbc4055a6ca99b0.png",
        "description": "Increases Strength attribute allies' Attack-related stats by [FFAE00]10 %[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases Strength attribute allies' Attack-related stats by [FFAE00]10 %[-]."
          }
        ]
      },
      "idForme": 301106,
      "portrait": "assets/1184002/images/icon_hero_jericho_0002_s__b9b67abe7c7be67f.png",
      "portraitVertical": "assets/commun/icon_skin_jericho_0002_l__30389ea147a81b96.png"
    }
  ],
  "costumes": [
    {
      "id": "3301103",
      "categorie": "Skin",
      "nom": "Apprentice Holy Knight Armor",
      "image": "assets/commun/icon_skin_jericho_0004_l__ff4ece1e16b3b2ed.png",
      "rarete": ""
    },
    {
      "id": "3301110",
      "categorie": "Skin",
      "nom": "Heart Sabre",
      "image": "assets/commun/icon_skin_jericho_0018_l__61108f86938b3ab2.png",
      "rarete": ""
    },
    {
      "id": "3301102",
      "categorie": "Skin",
      "nom": "Lucky Sleeveless Shirt",
      "image": "assets/commun/icon_skin_jericho_0006_l__72a7967946a5d6f6.png",
      "rarete": ""
    },
    {
      "id": "3301150",
      "categorie": "Skin",
      "nom": "Royal Maid",
      "image": "assets/commun/icon_skin_jericho_0015_l__62cc95688d8d62bc.png",
      "rarete": ""
    },
    {
      "id": "3301114",
      "categorie": "Skin",
      "nom": "Falling in Love",
      "image": "assets/commun/icon_skin_jericho_0001_l__49f5bcb0195cfe54.png",
      "rarete": ""
    },
    {
      "id": "3301152",
      "categorie": "Skin",
      "nom": "Blue Lagoon Swimsuit",
      "image": "assets/commun/icon_skin_jericho_0016_l__6640d8e247bae4d2.png",
      "rarete": ""
    },
    {
      "id": "3301154",
      "categorie": "Skin",
      "nom": "Growing Feelings",
      "image": "assets/commun/icon_skin_jericho_0007_l__8d5a8c3b8a1ab068.png",
      "rarete": ""
    },
    {
      "id": "3301156",
      "categorie": "Skin",
      "nom": "Operating Nurse Outfit",
      "image": "assets/commun/icon_skin_jericho_0021_l__9ce1ff2f06d09077.png",
      "rarete": ""
    },
    {
      "id": "3301101",
      "categorie": "Skin",
      "nom": "Baste Prison Guard Outfit",
      "image": "assets/commun/icon_skin_jericho_0012_l__bd1b3a5367a5daf6.png",
      "rarete": ""
    },
    {
      "id": "3301104",
      "categorie": "Skin",
      "nom": "Traveler",
      "image": "assets/commun/icon_skin_jericho_0005_l__1c80096fe8058f86.png",
      "rarete": ""
    },
    {
      "id": "3301105",
      "categorie": "Skin",
      "nom": "New Generation Holy Knight",
      "image": "assets/commun/icon_skin_jericho_0013_l__113643c677f09f12.png",
      "rarete": ""
    },
    {
      "id": "3301106",
      "categorie": "Skin",
      "nom": "Winter Adventure",
      "image": "assets/commun/icon_skin_jericho_0002_l__30389ea147a81b96.png",
      "rarete": ""
    },
    {
      "id": "3301115",
      "categorie": "Skin",
      "nom": "Godspeed Knight",
      "image": "assets/commun/icon_skin_jericho_0008_l__babde5611bfb328d.png",
      "rarete": ""
    },
    {
      "id": "3301121",
      "categorie": "Skin",
      "nom": "Grace of the Blue Snowflake",
      "image": "assets/commun/icon_skin_jericho_0025_l__0d9be8b1cef4eb88.png",
      "rarete": ""
    },
    {
      "id": "3301124",
      "categorie": "Skin",
      "nom": "Armor of Azure Ice",
      "image": "assets/commun/icon_skin_jericho_0027_l__132d1f9e95493b4d.png",
      "rarete": ""
    },
    {
      "id": "9017027",
      "categorie": "Skin",
      "nom": "New Generation Holy Knight",
      "image": "assets/commun/icon_skin_jericho_0006_l__72a7967946a5d6f6.png",
      "rarete": ""
    },
    {
      "id": "9017038",
      "categorie": "Skin",
      "nom": "Lucky Sleeveless Shirt",
      "image": "assets/commun/icon_skin_jericho_0006_l__72a7967946a5d6f6.png",
      "rarete": ""
    },
    {
      "id": "851101",
      "categorie": "Weapon",
      "nom": "Baste Prison Guard's Sword",
      "image": "assets/commun/icon_weapon_jericho_101_l__0157011c2116560d.png",
      "rarete": ""
    },
    {
      "id": "851103",
      "categorie": "Weapon",
      "nom": "Swift Sword",
      "image": "assets/commun/icon_weapon_jericho_103_l__322406b7bb05df38.png",
      "rarete": ""
    },
    {
      "id": "851109",
      "categorie": "Weapon",
      "nom": "Rose Sword",
      "image": "assets/commun/icon_weapon_jericho_109_l__5611bc2f20f68627.png",
      "rarete": ""
    },
    {
      "id": "851153",
      "categorie": "Weapon",
      "nom": "Sword of Darkness",
      "image": "assets/commun/icon_weapon_jericho_503_l__3e2bc72074e836ca.png",
      "rarete": ""
    },
    {
      "id": "851106",
      "categorie": "Weapon",
      "nom": "Sword of Wings",
      "image": "assets/commun/icon_weapon_jericho_106_l__47460c3433332c33.png",
      "rarete": ""
    },
    {
      "id": "851155",
      "categorie": "Weapon",
      "nom": "Farm-fresh Striped Marlin",
      "image": "assets/commun/icon_weapon_jericho_0016_l__b5760249f927b8b3.png",
      "rarete": ""
    },
    {
      "id": "851156",
      "categorie": "Weapon",
      "nom": "Violet Blade",
      "image": "assets/commun/icon_weapon_jericho_0007_l__171f64c6c3a305ec.png",
      "rarete": ""
    },
    {
      "id": "851111",
      "categorie": "Weapon",
      "nom": "Surgical Knife",
      "image": "assets/commun/icon_weapon_jericho_0021_l__89944b5f4a32e009.png",
      "rarete": ""
    },
    {
      "id": "851102",
      "categorie": "Weapon",
      "nom": "Sword of Conviction",
      "image": "assets/commun/icon_weapon_jericho_102_l__83b81457f214c7cf.png",
      "rarete": ""
    },
    {
      "id": "851105",
      "categorie": "Weapon",
      "nom": "Ruby Sword",
      "image": "assets/commun/icon_weapon_jericho_105_l__1c9b7cf614a01308.png",
      "rarete": ""
    },
    {
      "id": "851151",
      "categorie": "Weapon",
      "nom": "Sword of Rapidity",
      "image": "assets/commun/icon_weapon_jericho_501_l__3c9db83db90fdd72.png",
      "rarete": ""
    },
    {
      "id": "851154",
      "categorie": "Weapon",
      "nom": "Midnight Illusion",
      "image": "assets/commun/icon_weapon_jericho_111_l__4eaeec41bc538073.png",
      "rarete": ""
    },
    {
      "id": "851108",
      "categorie": "Weapon",
      "nom": "Shadow Sword",
      "image": "assets/commun/icon_weapon_jericho_108_l__815b49145c0ed0df.png",
      "rarete": ""
    },
    {
      "id": "851107",
      "categorie": "Weapon",
      "nom": "Jade God Sword",
      "image": "assets/commun/icon_weapon_jericho_107_l__0a6aa291e231cdb4.png",
      "rarete": ""
    },
    {
      "id": "851152",
      "categorie": "Weapon",
      "nom": "Severing Sword",
      "image": "assets/commun/icon_weapon_jericho_502_l__ca262875ab95da4e.png",
      "rarete": ""
    },
    {
      "id": "851110",
      "categorie": "Weapon",
      "nom": "Speedy Bat",
      "image": "assets/commun/icon_weapon_jericho_110_l__5e7720dfa8f9a105.png",
      "rarete": ""
    },
    {
      "id": "851112",
      "categorie": "Weapon",
      "nom": "Frozen Energy",
      "image": "assets/commun/icon_weapon_jericho_0024_l__506c0b141bd46e93.png",
      "rarete": ""
    },
    {
      "id": "851157",
      "categorie": "Weapon",
      "nom": "Ice Flower",
      "image": "assets/commun/icon_weapon_jericho_0025_l__8635704e4e7853dc.png",
      "rarete": ""
    },
    {
      "id": "851158",
      "categorie": "Weapon",
      "nom": "Thiazi's Frozen Sword",
      "image": "assets/commun/icon_weapon_jericho_0007_l__171f64c6c3a305ec.png",
      "rarete": ""
    },
    {
      "id": "4184001",
      "categorie": "Head",
      "nom": "Holy Knight",
      "image": "assets/commun/icon_head_jericho_0012_l__e15b69da389c1b09.png",
      "rarete": ""
    },
    {
      "id": "4184003",
      "categorie": "Head",
      "nom": "Maid Trainee",
      "image": "assets/commun/icon_head_jericho_0015_l__4ac7a6dbc0a0b336.png",
      "rarete": ""
    },
    {
      "id": "4184007",
      "categorie": "Head",
      "nom": "City Girl",
      "image": "assets/commun/icon_head_jericho_0504_l__6365b549bb7b2e1d.png",
      "rarete": ""
    },
    {
      "id": "4184004",
      "categorie": "Head",
      "nom": "Fox Mask",
      "image": "assets/commun/icon_head_jericho_0501_l__acfdc7ff258b5411.png",
      "rarete": ""
    },
    {
      "id": "4184005",
      "categorie": "Head",
      "nom": "Kunoichi",
      "image": "assets/commun/icon_head_jericho_0502_l__0fdf904da0d2246b.png",
      "rarete": ""
    },
    {
      "id": "4184008",
      "categorie": "Head",
      "nom": "Flower-adorned Bandana",
      "image": "assets/commun/icon_head_jericho_0016_l__d617c3d93446bf0a.png",
      "rarete": ""
    },
    {
      "id": "4184009",
      "categorie": "Head",
      "nom": "Perturbed Feelings",
      "image": "assets/commun/icon_head_jericho_0007_l__2eeb4852e233b1a8.png",
      "rarete": ""
    },
    {
      "id": "4184010",
      "categorie": "Head",
      "nom": "Operating Nurse Cap",
      "image": "assets/commun/icon_head_jericho_0021_l__eb18e81485b6de74.png",
      "rarete": ""
    },
    {
      "id": "4184002",
      "categorie": "Head",
      "nom": "Feeling Sophisticated",
      "image": "assets/commun/icon_head_jericho_0013_l__f9c99e74bd94c766.png",
      "rarete": ""
    },
    {
      "id": "4184006",
      "categorie": "Head",
      "nom": "Queen",
      "image": "assets/commun/icon_head_jericho_0503_l__b639f86817ddd97f.png",
      "rarete": ""
    },
    {
      "id": "4184012",
      "categorie": "Head",
      "nom": "Waves",
      "image": "assets/commun/icon_head_jericho_0027_l__8210f2a0da510140.png",
      "rarete": ""
    },
    {
      "id": "4184011",
      "categorie": "Head",
      "nom": "Snowy Branch Hair",
      "image": "assets/commun/icon_head_jericho_0025_l__5fc17fc7cd143909.png",
      "rarete": ""
    },
    {
      "id": "4900005",
      "categorie": "Head",
      "nom": "Feeling Sophisticated",
      "image": "assets/1184002/images/hero_jericho_head_0006_season2_D__cc39648b10af8987.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Thiazi's Frozen Sword",
    "image": "assets/commun/icon_weapon_jericho_0551_s__bcc99b75c58b59b9.png",
    "description": "Holy Knight Jericho and Guardian Jericho's Holy Relic (Weapon).\\n[DC143C]This sword was once wielded by the Frost Giant, Thiazi. Forged in Jotunnheim, a land filled with nothing but ice and snow, the blade is surrounded by a cold so fierce it can even freeze fire.[-]",
    "passif": {
      "nom": "Thiazi's Frozen Sword",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Increases the hero's [00D5FF]Crit Chance[-] by [FFAE00]50%[-] for [FFAE00]2 turns[-] at the start of the battle.\\n\\nIncreases allies' Attack by [FFAE00]30%[-] for [FFAE00]2 turns[-] when the hero [00D5FF]attacks an enemy and a critical strike occurs[-]."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 265.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 330.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 2355.0
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
        "nom": "Blue Magic Essence",
        "image": "assets/commun/icon_craft_costume_key_material_01__8bc67ed6369368ff.png",
        "quantite": 80
      },
      {
        "nom": "Brokkr's Strength",
        "image": "assets/commun/icon_craft_costume_material_10__00badc74edfb288c.png",
        "quantite": 70
      }
    ],
    "provenance": "Skoll and Hati"
  }
};
