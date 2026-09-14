window.fichePreparee={
  "nom": "Princess Elizabeth",
  "designation": "[New Legend]",
  "titre": "Princess Elizabeth",
  "idJeu": "1035003",
  "attribut": {
    "nom": "@attribute.1",
    "icone": "assets/commun/icon_filter_attribute_01__bfa1da106b20bf3e.png",
    "couleur": "#ef6369",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.5"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_05__153a123cca908e2c.png"
    ]
  },
  "caracteristiques": [],
  "portrait": "assets/1035003/images/icon_hero_elizabeth_0064_s__7dec4bc195d6ff92.png",
  "rareteParDefaut": "LR",
  "presentation": "[New Legend] Princess Elizabeth has a skill which attacks enemies and heals allies, and another skill which removes Debuffs and increases Defense-related stats, making her an effective supporter of the team.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1035003/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1035003/images/hero_illust_elizabeth_1035003__0444a80ed474af97.png",
      "legendeImage": "elizabeth_0039",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 520.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 280.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3189
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
            "valeur": 40.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 50.0,
            "unite": "%"
          },
          {
            "nom": "@stat.pierceRate",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.regenerationRate",
            "valeur": 20.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 150.0,
            "unite": "%"
          },
          {
            "nom": "@stat.lifesteal",
            "valeur": 0.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Royal Dignity\"",
          "image": "assets/1035003/images/icon_elizabeth_support_skill_08__94a3d8e92b59bfa7.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflicts damage equal to 130 % of Attack on @target.allEnemies and restores the HP of the ally with the lowest HP ratio by 80 % of damage dealt.",
              "idJeu": 137071,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "Inflicts damage equal to 200 % of Attack on @target.allEnemies and restores the HP of all allies by 30 % of damage dealt.",
              "idJeu": 137072,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "Inflicts damage equal to 300 % of Attack on @target.allEnemies and restores the HP of all allies by 40 % of damage dealt.",
              "idJeu": 137073,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Blessing Light\"",
          "image": "assets/1035003/images/icon_elizabeth_support_skill_09__bc0389890a3992ee.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies.",
              "idJeu": 137081,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]Defense-related stats[-] by 50 % for 3 tour(s).",
              "idJeu": 137082,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Grants [00D5FF]Debuff Immunity[-] and increases [00D5FF]Defense-related stats[-] by [FFAE00]80 %[-] for [FFAE00]3 tour(s)[-].",
              "idJeu": 137083,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Life Authority\"",
        "image": "assets/commun/icon_elizabeth_support_special_01__ea40c0fcad45c5ae.png",
        "cible": "@target.allAllies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 420.0,
            "description": "Heals HP of @target.allAllies equal to 420 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 462.0,
            "description": "Heals HP of @target.allAllies equal to 462 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 504.0,
            "description": "Heals HP of @target.allAllies equal to 504 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 546.0,
            "description": "Heals HP of @target.allAllies equal to 546 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 588.0,
            "description": "Heals HP of @target.allAllies equal to 588 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 630.0,
            "description": "Heals HP of @target.allAllies equal to 630 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Shared Warmth",
        "image": "assets/1035003/images/icon_exclusive_skill_1035003__864c8c64b67f2d60.png",
        "description": "Increases allies' Recovery Rate by [FFAE00]10 %[-] every time the hero heals an ally's HP. \\n[00D5FF](Limit 10 time(s))[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases allies' Recovery Rate by [FFAE00]10 %[-] every time the hero heals an ally's HP. \\n[00D5FF](Limit 10 time(s))[-]"
          }
        ]
      },
      "idForme": 300217,
      "portrait": "assets/1035003/images/icon_hero_elizabeth_0039_s__2e422e2eeb5f03f0.png",
      "portraitVertical": "assets/commun/icon_skin_elizabeth_0039_l__265bd697ebe09ed4.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1035003/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1035003/images/hero_illust_elizabeth_1035003__0444a80ed474af97.png",
      "legendeImage": "elizabeth_0047",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 660.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 440.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7700.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3797
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
            "valeur": 40.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 50.0,
            "unite": "%"
          },
          {
            "nom": "@stat.pierceRate",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.regenerationRate",
            "valeur": 20.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 150.0,
            "unite": "%"
          },
          {
            "nom": "@stat.lifesteal",
            "valeur": 0.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Royal Dignity\"",
          "image": "assets/1035003/images/icon_elizabeth_support_skill_08__94a3d8e92b59bfa7.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflicts damage equal to 130 % of Attack on @target.allEnemies and restores the HP of the ally with the lowest HP ratio by 80 % of damage dealt.",
              "idJeu": 137071,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "Inflicts damage equal to 200 % of Attack on @target.allEnemies and restores the HP of all allies by 30 % of damage dealt.",
              "idJeu": 137072,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "Inflicts damage equal to 300 % of Attack on @target.allEnemies and restores the HP of all allies by 40 % of damage dealt.",
              "idJeu": 137073,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Blessing Light\"",
          "image": "assets/1035003/images/icon_elizabeth_support_skill_09__bc0389890a3992ee.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies.",
              "idJeu": 137081,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]Defense-related stats[-] by 50 % for 3 tour(s).",
              "idJeu": 137082,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Grants [00D5FF]Debuff Immunity[-] and increases [00D5FF]Defense-related stats[-] by [FFAE00]80 %[-] for [FFAE00]3 tour(s)[-].",
              "idJeu": 137083,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Life Authority\"",
        "image": "assets/commun/icon_elizabeth_support_special_01__ea40c0fcad45c5ae.png",
        "cible": "@target.allAllies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 420.0,
            "description": "Heals HP of @target.allAllies equal to 420 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 462.0,
            "description": "Heals HP of @target.allAllies equal to 462 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 504.0,
            "description": "Heals HP of @target.allAllies equal to 504 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 546.0,
            "description": "Heals HP of @target.allAllies equal to 546 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 588.0,
            "description": "Heals HP of @target.allAllies equal to 588 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 630.0,
            "description": "Heals HP of @target.allAllies equal to 630 % of Attack and [00D5FF]fills[-] the Ultimate Move Gauge by 2 %[FFAE00] orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Shared Warmth",
        "image": "assets/1035003/images/icon_exclusive_skill_1035003__864c8c64b67f2d60.png",
        "description": "Increases allies' Recovery Rate by [FFAE00]10 %[-] every time the hero heals an ally's HP. \\n[00D5FF](Limit 10 time(s))[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases allies' Recovery Rate by [FFAE00]10 %[-] every time the hero heals an ally's HP. \\n[00D5FF](Limit 10 time(s))[-]"
          }
        ]
      },
      "idForme": 300218,
      "portrait": "assets/1035003/images/icon_hero_elizabeth_0047_s__13dd1ada8e728c99.png",
      "portraitVertical": "assets/commun/icon_skin_elizabeth_0047_l__6545e5e5e2a27d77.png"
    },
    {
      "id": "LR",
      "nom": "LR",
      "icone": "assets/commun/icon_filter_grade_LR__01254701e83a6f69.png",
      "cadre": "assets/commun/common_frame_rank_lr.png",
      "fond": "assets/commun/icon_hero_basic_s_7__1f68b57601e76589.png",
      "coin": "assets/commun/common_level_frame_rank_lr.png",
      "couleur": "#f3ce80",
      "image": "assets/1035003/images/hero_illust_elizabeth_1035003__0444a80ed474af97.png",
      "legendeImage": "elizabeth_0064",
      "niveau": 100,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 780.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 500.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9500.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5655
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
            "valeur": 200.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 90.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 80.0,
            "unite": "%"
          },
          {
            "nom": "@stat.pierceRate",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.regenerationRate",
            "valeur": 20.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 150.0,
            "unite": "%"
          },
          {
            "nom": "@stat.lifesteal",
            "valeur": 0.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Royal Dignity\"",
          "image": "assets/1035003/images/icon_elizabeth_support_skill_08__94a3d8e92b59bfa7.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 143.0,
              "description": "Inflicts [00D5FF]Flood[-] damage equal to 143 % of Attack on @target.allEnemies and restores the HP of all allies by 30 % of damage dealt.\\n\\n[00D5FF]※Flood: [FFAE00]0.8%[-] additional damage for [FFAE00]every percent[-] of remaining HP on self.[-]",
              "idJeu": 137091,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 220.0,
              "description": "Inflicts [00D5FF]Flood[-] damage equal to 220 % of Attack on @target.allEnemies and restores the HP of all allies by 40 % of damage dealt.\\n\\n[00D5FF]※Flood: [FFAE00]0.8%[-] additional damage for [FFAE00]every percent[-] of remaining HP on self.[-]",
              "idJeu": 137092,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 330.0,
              "description": "Inflicts [00D5FF]Flood[-] damage equal to 330 % of Attack on @target.allEnemies and restores the HP of all allies by 50 % of damage dealt.\\n\\n[00D5FF]※Flood: [FFAE00]0.8%[-] additional damage for [FFAE00]every percent[-] of remaining HP on self.[-]",
              "idJeu": 137093,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Blessing Light\"",
          "image": "assets/1035003/images/icon_elizabeth_support_skill_09__bc0389890a3992ee.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]Defense-related stats[-] by 30 % for 2 tour(s).",
              "idJeu": 137101,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]Defense-related stats[-] by 60 % for 3 tour(s).",
              "idJeu": 137102,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Grants [00D5FF]Debuff Immunity[-] and increases [00D5FF]Defense-related stats[-] by [FFAE00]100 %[-] for [FFAE00]3 tour(s)[-].",
              "idJeu": 137103,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Life Authority\"",
        "image": "assets/commun/icon_elizabeth_support_special_01__ea40c0fcad45c5ae.png",
        "cible": "@target.allAllies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 420.0,
            "description": "Heals HP of @target.allAllies equal to 420 % of Attack, [00D5FF]fills[-] the Ultimate Move Gauge by [FFAE00]2 % orb(s)[-], and increases Attack-related stats by 5 % for [FFAE00]2 turns[-].",
            "cadre": "assets/skill-frames/ultimate-LR-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 462.0,
            "description": "Heals HP of @target.allAllies equal to 462 % of Attack, [00D5FF]fills[-] the Ultimate Move Gauge by [FFAE00]2 % orb(s)[-], and increases Attack-related stats by 10 % for [FFAE00]2 turns[-].",
            "cadre": "assets/skill-frames/ultimate-LR-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 504.0,
            "description": "Heals HP of @target.allAllies equal to 504 % of Attack, [00D5FF]fills[-] the Ultimate Move Gauge by [FFAE00]2 % orb(s)[-], and increases Attack-related stats by 15 % for [FFAE00]2 turns[-].",
            "cadre": "assets/skill-frames/ultimate-LR-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 546.0,
            "description": "Heals HP of @target.allAllies equal to 546 % of Attack, [00D5FF]fills[-] the Ultimate Move Gauge by [FFAE00]2 % orb(s)[-], and increases Attack-related stats by 20 % for [FFAE00]2 turns[-].",
            "cadre": "assets/skill-frames/ultimate-LR-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 588.0,
            "description": "Heals HP of @target.allAllies equal to 588 % of Attack, [00D5FF]fills[-] the Ultimate Move Gauge by [FFAE00]2 % orb(s)[-], and increases Attack-related stats by 25 % for [FFAE00]2 turns[-].",
            "cadre": "assets/skill-frames/ultimate-LR-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 630.0,
            "description": "Heals HP of @target.allAllies equal to 630 % of Attack, [00D5FF]fills[-] the Ultimate Move Gauge by [FFAE00]2 % orb(s)[-], and increases Attack-related stats by 30 % for [FFAE00]2 turns[-].",
            "cadre": "assets/skill-frames/ultimate-LR-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Shared Warmth",
        "image": "assets/1035003/images/icon_exclusive_skill_1035003__864c8c64b67f2d60.png",
        "description": "In [00D5FF]PVE[-] battles, allies' basic stats increase by [FFAE00]6%[-], up to \\n[FFAE00]30%[-] whenever the hero [00D5FF]heals an ally[-]. The hero's Ultimate Move Gauge fills up by [FFAE00]1 orb[-] whenever the hero uses a skill. If the hero uses an [00D5FF]Attack Skill[-], Buffs are removed from the enemy [00D5FF]before the skill activates[-].\\n\\nIn [00D5FF]all game modes[-], allies' Recovery Rate increases by [FFAE00]20%[-] whenever the hero [00D5FF]heals an ally[-].\\n[00D5FF](Limit [FFAE00]5 times[-])[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "In [00D5FF]PVE[-] battles, allies' basic stats increase by [FFAE00]6%[-], up to \\n[FFAE00]30%[-] whenever the hero [00D5FF]heals an ally[-]. The hero's Ultimate Move Gauge fills up by [FFAE00]1 orb[-] whenever the hero uses a skill. If the hero uses an [00D5FF]Attack Skill[-], Buffs are removed from the enemy [00D5FF]before the skill activates[-].\\n\\nIn [00D5FF]all game modes[-], allies' Recovery Rate increases by [FFAE00]20%[-] whenever the hero [00D5FF]heals an ally[-].\\n[00D5FF](Limit [FFAE00]5 times[-])[-]"
          }
        ]
      },
      "idForme": 300219,
      "portrait": "assets/1035003/images/icon_hero_elizabeth_0064_s__7dec4bc195d6ff92.png",
      "portraitVertical": "assets/commun/icon_skin_elizabeth_0064_l__e6715e051fa89049.png"
    }
  ],
  "costumes": [
    {
      "id": "3300212",
      "categorie": "Skin",
      "nom": "Light-blue Dress",
      "image": "assets/commun/icon_skin_elizabeth_0026_l__a1002eea5cd1dce4.png",
      "rarete": ""
    },
    {
      "id": "3300211",
      "categorie": "Skin",
      "nom": "Pink Ribbon Halterneck",
      "image": "assets/commun/icon_skin_elizabeth_0025_l__938d9bfde2e2cb03.png",
      "rarete": ""
    },
    {
      "id": "3300217",
      "categorie": "Skin",
      "nom": "Cozy Winter Clothes",
      "image": "assets/commun/icon_skin_elizabeth_0039_l__265bd697ebe09ed4.png",
      "rarete": ""
    },
    {
      "id": "3300264",
      "categorie": "Skin",
      "nom": "Black Flame Battle Uniform",
      "image": "assets/commun/icon_skin_elizabeth_0028_l__2002eb38f32cab3b.png",
      "rarete": ""
    },
    {
      "id": "3300270",
      "categorie": "Skin",
      "nom": "Sacred Outfit",
      "image": "assets/commun/icon_skin_elizabeth_0044_l__450647720142e46d.png",
      "rarete": ""
    },
    {
      "id": "3300251",
      "categorie": "Skin",
      "nom": "Blue Sky",
      "image": "assets/commun/icon_skin_elizabeth_0027_l__5b1ba4175507b859.png",
      "rarete": ""
    },
    {
      "id": "3300263",
      "categorie": "Skin",
      "nom": "Server Mascot",
      "image": "assets/commun/icon_skin_elizabeth_0024_l__40481ce6f183a25a.png",
      "rarete": ""
    },
    {
      "id": "3300258",
      "categorie": "Skin",
      "nom": "Antique Dress",
      "image": "assets/commun/icon_skin_elizabeth_0005_l__1dc1d88d747f0b17.png",
      "rarete": ""
    },
    {
      "id": "3300202",
      "categorie": "Skin",
      "nom": "Liones's Hero",
      "image": "assets/commun/icon_skin_elizabeth_0008_l__7314d2aedaba9e4f.png",
      "rarete": ""
    },
    {
      "id": "3300262",
      "categorie": "Skin",
      "nom": "Exciting Adventure",
      "image": "assets/commun/icon_skin_elizabeth_0035_l__2bcb7b267548a807.png",
      "rarete": ""
    },
    {
      "id": "3300277",
      "categorie": "Skin",
      "nom": "Elegant Rider",
      "image": "assets/commun/icon_skin_elizabeth_0068_l__fdda61d552c46be8.png",
      "rarete": ""
    },
    {
      "id": "3300215",
      "categorie": "Skin",
      "nom": "Everyday Clothes",
      "image": "assets/commun/icon_skin_elizabeth_0007_l__1a82609758cdec10.png",
      "rarete": ""
    },
    {
      "id": "3300213",
      "categorie": "Skin",
      "nom": "Disciple of the Goddess",
      "image": "assets/commun/icon_skin_elizabeth_0001_l__3e973558156f2842.png",
      "rarete": ""
    },
    {
      "id": "3300204",
      "categorie": "Skin",
      "nom": "Princess Dress",
      "image": "assets/commun/icon_skin_elizabeth_0002_l__34a4392c90aef727.png",
      "rarete": ""
    },
    {
      "id": "3300205",
      "categorie": "Skin",
      "nom": "Druid Priestess",
      "image": "assets/commun/icon_skin_elizabeth_0006_l__b1f6fa07fb05d2e1.png",
      "rarete": ""
    },
    {
      "id": "3300218",
      "categorie": "Skin",
      "nom": "Blessing of the Blue Snowflake",
      "image": "assets/commun/icon_skin_elizabeth_0047_l__6545e5e5e2a27d77.png",
      "rarete": ""
    },
    {
      "id": "3300219",
      "categorie": "Skin",
      "nom": "Shining Snowflake Dress",
      "image": "assets/commun/icon_skin_elizabeth_0064_l__e6715e051fa89049.png",
      "rarete": ""
    },
    {
      "id": "3300216",
      "categorie": "Skin",
      "nom": "Royal Maid",
      "image": "assets/commun/icon_skin_elizabeth_0013_l__83d218b23dff23db.png",
      "rarete": ""
    },
    {
      "id": "3300257",
      "categorie": "Skin",
      "nom": "Dreamy Pajamas",
      "image": "assets/commun/icon_skin_elizabeth_0036_l__2eae55eb2fbfc5b5.png",
      "rarete": ""
    },
    {
      "id": "3300267",
      "categorie": "Skin",
      "nom": "Starry Dress of 100 Nights",
      "image": "assets/commun/icon_skin_elizabeth_0046_l__8810f40dbbacf4f3.png",
      "rarete": ""
    },
    {
      "id": "3300268",
      "categorie": "Skin",
      "nom": "Welcome to the Boar Hat",
      "image": "assets/commun/icon_skin_elizabeth_0033_l__26d0b6763df0f694.png",
      "rarete": ""
    },
    {
      "id": "3300274",
      "categorie": "Skin",
      "nom": "Mint Green Cheering Uniform",
      "image": "assets/commun/icon_skin_elizabeth_0053_l__721236931e2aa949.png",
      "rarete": ""
    },
    {
      "id": "3300276",
      "categorie": "Skin",
      "nom": "A Valentine's Memory",
      "image": "assets/commun/icon_skin_elizabeth_0054_l__f33ad7eb388ed062.png",
      "rarete": ""
    },
    {
      "id": "3300272",
      "categorie": "Skin",
      "nom": "Erosion of the Corrupted Shadow",
      "image": "assets/commun/icon_skin_elizabeth_0048_l__074d463c9ed88c75.png",
      "rarete": ""
    },
    {
      "id": "9017064",
      "categorie": "Skin",
      "nom": "Tornado Hoodie",
      "image": "assets/commun/hero_elizabeth_body_0049_D__833c59c2f2239916.png",
      "rarete": ""
    },
    {
      "id": "952101",
      "categorie": "Weapon",
      "nom": "Ring of the Princess",
      "image": "assets/commun/icon_weapon_elizabeth_0026_l__1a0dc5cb46107f13.png",
      "rarete": ""
    },
    {
      "id": "952102",
      "categorie": "Weapon",
      "nom": "Blue Sapphire Ring",
      "image": "assets/commun/icon_weapon_elizabeth_0027_l__c23ddc7944cdded9.png",
      "rarete": ""
    },
    {
      "id": "952103",
      "categorie": "Weapon",
      "nom": "Spring Flower Layered Ring",
      "image": "assets/commun/icon_weapon_elizabeth_0005_l__316318c4b2f87d47.png",
      "rarete": ""
    },
    {
      "id": "952104",
      "categorie": "Weapon",
      "nom": "Starlight Ring",
      "image": "assets/commun/icon_weapon_elizabeth_0046_l__9668fb3ca47362b2.png",
      "rarete": ""
    },
    {
      "id": "952108",
      "categorie": "Weapon",
      "nom": "Victory Ring",
      "image": "assets/commun/icon_weapon_elizabeth_0068_l__eb453e236eee965f.png",
      "rarete": ""
    },
    {
      "id": "952105",
      "categorie": "Weapon",
      "nom": "Ring of Darkness",
      "image": "assets/commun/icon_weapon_elizabeth_0048_l__74c805ae30f61c93.png",
      "rarete": ""
    },
    {
      "id": "952106",
      "categorie": "Weapon",
      "nom": "Ring of Vows",
      "image": "assets/commun/icon_weapon_elizabeth_0054_l__695013cc5fc80173.png",
      "rarete": ""
    },
    {
      "id": "952107",
      "categorie": "Weapon",
      "nom": "Essence of Yggdrasil",
      "image": "assets/commun/icon_weapon_elizabeth_0005_l__316318c4b2f87d47.png",
      "rarete": ""
    },
    {
      "id": "952109",
      "categorie": "Weapon",
      "nom": "Starlit Snow Ring",
      "image": "assets/commun/icon_weapon_elizabeth_0064_l__8991c08427b3fa73.png",
      "rarete": ""
    },
    {
      "id": "4035001",
      "categorie": "Head",
      "nom": "Princess",
      "image": "assets/commun/icon_head_elizabeth_0004_l__87d47162e626b6b2.png",
      "rarete": ""
    },
    {
      "id": "4035013",
      "categorie": "Head",
      "nom": "Black Flame Battle Cap",
      "image": "assets/commun/icon_head_elizabeth_0028_l__3d45e843372e7cc0.png",
      "rarete": ""
    },
    {
      "id": "4035018",
      "categorie": "Head",
      "nom": "Saint's Hat",
      "image": "assets/commun/icon_head_elizabeth_0044_l__d2f2bcc035232f1e.png",
      "rarete": ""
    },
    {
      "id": "4035003",
      "categorie": "Head",
      "nom": "Hopping Bunny",
      "image": "assets/commun/icon_head_elizabeth_0504_l__61da2536a0d3b528.png",
      "rarete": ""
    },
    {
      "id": "4035009",
      "categorie": "Head",
      "nom": "Cute Bunny",
      "image": "assets/commun/icon_head_elizabeth_0505_l__6e5bbdef6fb2ae99.png",
      "rarete": ""
    },
    {
      "id": "4035005",
      "categorie": "Head",
      "nom": "Pink Ribbon",
      "image": "assets/commun/icon_head_elizabeth_0507_l__01e5b98ebfaaaa3d.png",
      "rarete": ""
    },
    {
      "id": "4035007",
      "categorie": "Head",
      "nom": "Stellar Princess",
      "image": "assets/commun/icon_head_elizabeth_0508_l__ab2d534050f348fb.png",
      "rarete": ""
    },
    {
      "id": "4035008",
      "categorie": "Head",
      "nom": "Coroneted Goddess",
      "image": "assets/commun/icon_head_elizabeth_0503_l__0a36567fd40035a4.png",
      "rarete": ""
    },
    {
      "id": "4035012",
      "categorie": "Head",
      "nom": "Flower Headband",
      "image": "assets/commun/icon_head_elizabeth_0506_l__2b60e0422b94cfa9.png",
      "rarete": ""
    },
    {
      "id": "4035024",
      "categorie": "Head",
      "nom": "Equestrian Cap",
      "image": "assets/commun/icon_head_elizabeth_0068_l__5847b90e7d50a1d2.png",
      "rarete": ""
    },
    {
      "id": "4035023",
      "categorie": "Head",
      "nom": "Shining Snowflake Crown",
      "image": "assets/commun/icon_head_elizabeth_0064_l__0ea947235ed7e054.png",
      "rarete": ""
    },
    {
      "id": "4035006",
      "categorie": "Head",
      "nom": "Like Veronica!",
      "image": "assets/commun/icon_head_elizabeth_0502_l__d6e3a37c310e6b8e.png",
      "rarete": ""
    },
    {
      "id": "4035010",
      "categorie": "Head",
      "nom": "Lightly-Tied Hair",
      "image": "assets/commun/icon_head_elizabeth_0039_l__82c22c479b98cfc7.png",
      "rarete": ""
    },
    {
      "id": "4035014",
      "categorie": "Head",
      "nom": "Starry Tiara of 100 Nights",
      "image": "assets/commun/icon_head_elizabeth_0046_l__e2a143e7a9bc7f43.png",
      "rarete": ""
    },
    {
      "id": "4035015",
      "categorie": "Head",
      "nom": "100-Day Celebration Party Hat",
      "image": "assets/commun/icon_head_elizabeth_0509_l__7dde6d83ddf53908.png",
      "rarete": ""
    },
    {
      "id": "4035016",
      "categorie": "Head",
      "nom": "100-Day Celebration Party Headband",
      "image": "assets/commun/icon_head_elizabeth_0510_l__97e569454585037a.png",
      "rarete": ""
    },
    {
      "id": "4035017",
      "categorie": "Head",
      "nom": "Ready for Business",
      "image": "assets/commun/icon_head_elizabeth_0033_l__52b09536d3fa8215.png",
      "rarete": ""
    },
    {
      "id": "4035021",
      "categorie": "Head",
      "nom": "Mint Green Cheering Hat",
      "image": "assets/commun/icon_head_elizabeth_0053_l__f675f33f908d1f91.png",
      "rarete": ""
    },
    {
      "id": "4035022",
      "categorie": "Head",
      "nom": "White Ribbon",
      "image": "assets/commun/icon_head_elizabeth_0054_l__301c82cc4d9de10e.png",
      "rarete": ""
    },
    {
      "id": "4035019",
      "categorie": "Head",
      "nom": "Blessing Hat",
      "image": "assets/commun/icon_head_elizabeth_0047_l__83055089a665b453.png",
      "rarete": ""
    },
    {
      "id": "4035020",
      "categorie": "Head",
      "nom": "Curse of the Corrupted Shadow",
      "image": "assets/commun/icon_head_elizabeth_0048_l__32f5471dcb5ae4b3.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Essence of Yggdrasil",
    "image": "assets/commun/icon_weapon_elizabeth_0551_s__32ed97daa51e0438.png",
    "description": "Hostess Elizabeth and Princess Elizabeth's Holy Relic (Weapon).\\n[DC143C]The essence of Yggdrasil which contains infinite life force. Its ever-flowing energy provides endless vitality.[-]",
    "passif": {
      "nom": "Essence of Yggdrasil",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Increases allies' HP-related stats by [FFAE00]15 %[-]."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 140.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 500.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 4800.0
      }
    ],
    "materiaux": [
      {
        "nom": "Gold",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "River Source",
        "image": "assets/commun/icon_craft_costume_rare_material_02__e36c06d52934a316.png",
        "quantite": 15
      },
      {
        "nom": "Sublimity of Valkyries",
        "image": "assets/commun/icon_craft_costume_material_06__40106a5d96ba9275.png",
        "quantite": 30
      },
      {
        "nom": "Golden Magic Essence",
        "image": "assets/commun/icon_craft_costume_key_material_03__b17c117dc6b293be.png",
        "quantite": 80
      },
      {
        "nom": "Eitri's Meticulousness",
        "image": "assets/commun/icon_craft_costume_material_07__ee745c99ba8751db.png",
        "quantite": 80
      }
    ],
    "provenance": "Eikthyrnir"
  }
};
