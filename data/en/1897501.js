window.fichePreparee={
  "nom": "Covenant of Light Ludociel",
  "designation": "[Advent of [b]Flash[/b]]",
  "titre": "Covenant of Light Ludociel",
  "idJeu": "1897501",
  "attribut": {
    "nom": "@attribute.3",
    "icone": "assets/commun/icon_filter_attribute_03__4980bb489ce93431.png",
    "couleur": "#50b8ea",
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
  "caracteristiques": [
    "@characteristic.5"
  ],
  "portrait": "assets/1897501/images/icon_hero_goddess_margaret_0013_s__7f22706634eac135.png",
  "rareteParDefaut": "LR",
  "presentation": "[Advent of [b]Flash[/b]] Covenant of Light Ludociel uses an Attack Skill which deals damage while ignoring Defense.",
  "commandement": null,
  "talent": null,
  "grace": {
    "nom": "Grace of [b]Flash[/b]",
    "image": "assets/1897501/images/icon_exclusive_skill_1815052__ec7a812a00a4a524.png",
    "simpleImage": "assets/1897501/images/icon_exclusive_skill_1815052_simple__19c0389cece2f14c.png",
    "description": "Increases the hero's attack by [FFAE00]5 %[-] for [FFAE00]each[-] Stance or Buff on the enemy when using a skill.\\n[00D5FF](Applies before skill activation)[-]"
  },
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1897501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1897501/images/hero_illust_goddess_margaret_1897501__2b255f745b6d20d1.png",
      "legendeImage": "goddess_margaret_0002",
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
            "valeur": 4111
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 50.0,
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
            "valeur": 65.0,
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
            "valeur": 10.0,
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
          "nom": "\"Holy Blade\"",
          "image": "assets/1897501/images/icon_goddess_margaret_ssr_type01_skill_01__81bc53000b69b323.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 130 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 197301,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 195.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 195 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 197302,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 325.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 325 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 197303,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Breath of Bless\"",
          "image": "assets/1897501/images/icon_goddess_margaret_ssr_type01_skill_02__91faea221fdc965d.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]damage dealt[-] to enemies by 30 % and decreases [00D5FF]damage taken[-] by 20 % for 2 tour(s).",
              "idJeu": 197311,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]damage dealt[-] to enemies by 45 % and decreases [00D5FF]damage taken[-] by 30 % for 2 tour(s).",
              "idJeu": 197312,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases basic stats by 20 %, increases [00D5FF]damage dealt[-] to enemies by 50 % and decreases [00D5FF]damage taken[-] by 40 % for 3 tour(s).",
              "idJeu": 197313,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Opening Greeting\"",
        "image": "assets/1897501/images/icon_goddess_margaret_ssr_type01_special_01__29e3260911d044c9.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 630.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 630 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 693.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 693 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 756.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 756 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 819.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 819 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 882.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 882 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 945.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 945 % of Attack on @target.oneEnemy. [00D5FF]Blocks all enemies' skill effects including those of Ultimate Moves[-] and decreases damage dealt with Ultimate Moves by [FFAE00]30%[-] for [FFAE00]2 turns[-].\\n[00D5FF](Excludes Stance and Recovery Skills)[-]\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Distorted Holiness",
        "image": "assets/1897501/images/icon_exclusive_skill_1897501__a7cef1893659bcf5.png",
        "description": "Increases [00D5FF]Goddess allies'[-] basic stats by [FFAE00]8 %[-] every time an ally uses a Stance or Buff Skill.\\n[00D5FF](Limit 5 time(s), applies when entering battle)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases [00D5FF]Goddess allies'[-] basic stats by [FFAE00]8 %[-] every time an ally uses a Stance or Buff Skill.\\n[00D5FF](Limit 5 time(s), applies when entering battle)[-]"
          }
        ]
      },
      "idForme": 391001,
      "portrait": "assets/1897501/images/icon_hero_goddess_margaret_0002_s__3fcb0f532df513d0.png",
      "portraitVertical": "assets/1897501/images/icon_skin_goddess_margaret_0002_l__698085661d7ecc32.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1897501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1897501/images/hero_illust_goddess_margaret_1897501__2b255f745b6d20d1.png",
      "legendeImage": "goddess_margaret_0001",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 840.0
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
            "valeur": 4799
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 50.0,
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
            "valeur": 65.0,
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
            "valeur": 10.0,
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
          "nom": "\"Holy Blade\"",
          "image": "assets/1897501/images/icon_goddess_margaret_ssr_type01_skill_01__81bc53000b69b323.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 130 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 197301,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 195.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 195 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 197302,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 325.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 325 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 197303,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Breath of Bless\"",
          "image": "assets/1897501/images/icon_goddess_margaret_ssr_type01_skill_02__91faea221fdc965d.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]damage dealt[-] to enemies by 30 % and decreases [00D5FF]damage taken[-] by 20 % for 2 tour(s).",
              "idJeu": 197311,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]damage dealt[-] to enemies by 45 % and decreases [00D5FF]damage taken[-] by 30 % for 2 tour(s).",
              "idJeu": 197312,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases basic stats by 20 %, increases [00D5FF]damage dealt[-] to enemies by 50 % and decreases [00D5FF]damage taken[-] by 40 % for 3 tour(s).",
              "idJeu": 197313,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Opening Greeting\"",
        "image": "assets/1897501/images/icon_goddess_margaret_ssr_type01_special_01__29e3260911d044c9.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 630.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 630 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 693.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 693 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 756.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 756 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 819.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 819 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 882.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 882 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 945.0,
            "description": "Inflicts [00D5FF]Sever[-] damage equal to 945 % of Attack on @target.oneEnemy. [00D5FF]Blocks all enemies' skill effects including those of Ultimate Moves[-] and decreases damage dealt with Ultimate Moves by [FFAE00]30%[-] for [FFAE00]2 turns[-].\\n[00D5FF](Excludes Stance and Recovery Skills)[-]\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Distorted Holiness",
        "image": "assets/1897501/images/icon_exclusive_skill_1897501__a7cef1893659bcf5.png",
        "description": "Increases [00D5FF]Goddess allies'[-] basic stats by [FFAE00]8 %[-] every time an ally uses a Stance or Buff Skill.\\n[00D5FF](Limit 5 time(s), applies when entering battle)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases [00D5FF]Goddess allies'[-] basic stats by [FFAE00]8 %[-] every time an ally uses a Stance or Buff Skill.\\n[00D5FF](Limit 5 time(s), applies when entering battle)[-]"
          }
        ]
      },
      "idForme": 391002,
      "portrait": "assets/1897501/images/icon_hero_goddess_margaret_0001_s__ebd861d97e6506a1.png",
      "portraitVertical": "assets/1897501/images/icon_skin_goddess_margaret_0001_l__083affcf4caa6cff.png"
    },
    {
      "id": "LR",
      "nom": "LR",
      "icone": "assets/commun/icon_filter_grade_LR__01254701e83a6f69.png",
      "cadre": "assets/commun/common_frame_rank_lr.png",
      "fond": "assets/commun/icon_hero_basic_s_7__1f68b57601e76589.png",
      "coin": "assets/commun/common_level_frame_rank_lr.png",
      "couleur": "#f3ce80",
      "image": "assets/1897501/images/hero_illust_goddess_margaret_1897501__2b255f745b6d20d1.png",
      "legendeImage": "goddess_margaret_0013",
      "niveau": 100,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 930.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 470.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9500.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5826
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 120.0,
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
          "nom": "\"Holy Blade\"",
          "image": "assets/1897501/images/icon_goddess_margaret_ssr_type01_skill_07__331baad940c6e26c.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 143.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 143 % of Attack on @target.allEnemies and decreases their Crit Resistance by 20 % for 1 tour(s).\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 197341,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 215.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 215 % of Attack on @target.allEnemies and decreases their Crit Resistance by 30 % for 1 tour(s).\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 197342,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 358.0,
              "description": "Inflicts [00D5FF]Charge[-] damage equal to 358 % of Attack on @target.allEnemies and decreases their Crit Resistance by 50 % for 2 tour(s).\\n\\n[00D5FF]※Charge: Ignores Defense.[-]",
              "idJeu": 197343,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Breath of Bless\"",
          "image": "assets/1897501/images/icon_goddess_margaret_ssr_type01_skill_02__91faea221fdc965d.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]damage dealt[-] to enemies by 30 % and decreases [00D5FF]damage taken[-] by 20 % for 2 tour(s).",
              "idJeu": 197351,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases [00D5FF]damage dealt[-] to enemies by 50 % and decreases [00D5FF]damage taken[-] by 40 % for 2 tour(s).",
              "idJeu": 197352,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies. Increases basic stats by 20 %, increases [00D5FF]damage dealt[-] to enemies by 60 % and decreases [00D5FF]damage taken[-] by 50 % for 3 tour(s).",
              "idJeu": 197353,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Opening Greeting\"",
        "image": "assets/1897501/images/icon_goddess_margaret_ssr_type01_special_01__29e3260911d044c9.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 630.0,
            "description": "Increases all enemies' damage taken by [FFAE00]10%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Sever[-] damage equal to 630 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 693.0,
            "description": "Increases all enemies' damage taken by [FFAE00]15%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Sever[-] damage equal to 693 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 756.0,
            "description": "Increases all enemies' damage taken by [FFAE00]20%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Sever[-] damage equal to 756 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 819.0,
            "description": "Increases all enemies' damage taken by [FFAE00]30%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Sever[-] damage equal to 819 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 882.0,
            "description": "Increases all enemies' damage taken by [FFAE00]40%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Sever[-] damage equal to 882 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 945.0,
            "description": "Increases all enemies' damage taken by [FFAE00]50%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Sever[-] damage equal to 945 % of Attack on @target.oneEnemy. [00D5FF]Blocks all enemies' skill effects including those of Ultimate Moves[-] and decreases damage dealt with Ultimate Moves by [FFAE00]30%[-] for [FFAE00]2 turns[-].\\n[00D5FF](Excludes Stance and Recovery Skills)[-]\\n\\n[00D5FF]※Sever: 3x Crit Chance Increase[-]",
            "cadre": "assets/skill-frames/ultimate-LR-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Distorted Holiness",
        "image": "assets/1897501/images/icon_exclusive_skill_1897501__a7cef1893659bcf5.png",
        "description": "Increases [00D5FF]Goddess allies'[-] basic stats by [FFAE00]8 %[-] every time an [00D5FF]ally uses a Stance or Buff Skill[-], up to [FFAE00]40%[-]. In addition, increases [00D5FF]Goddess allies'[-] Crit Chance and Crit Damage by [FFAE00]4%[-] for [FFAE00]each[-] Debuff removed from the [00D5FF]hero's skill use[-].\\n[00D5FF](Limit [FFAE00]5[-] time(s))[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases [00D5FF]Goddess allies'[-] basic stats by [FFAE00]8 %[-] every time an [00D5FF]ally uses a Stance or Buff Skill[-], up to [FFAE00]40%[-]. In addition, increases [00D5FF]Goddess allies'[-] Crit Chance and Crit Damage by [FFAE00]4%[-] for [FFAE00]each[-] Debuff removed from the [00D5FF]hero's skill use[-].\\n[00D5FF](Limit [FFAE00]5[-] time(s))[-]"
          }
        ]
      },
      "idForme": 391005,
      "portrait": "assets/1897501/images/icon_hero_goddess_margaret_0013_s__7f22706634eac135.png",
      "portraitVertical": "assets/1897501/images/icon_skin_goddess_margaret_0013_l__1bdaae25e066f2de.png"
    }
  ],
  "costumes": [
    {
      "id": "3391001",
      "categorie": "Skin",
      "nom": "High Angel's Everyday Clothes",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0002_l__698085661d7ecc32.png",
      "rarete": ""
    },
    {
      "id": "3391003",
      "categorie": "Skin",
      "nom": "Fresh Beach Fashion",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0011_l__8b948d9522c89787.png",
      "rarete": ""
    },
    {
      "id": "3391050",
      "categorie": "Skin",
      "nom": "Queen of Billiards",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0003_l__4df41da5f20d8f53.png",
      "rarete": ""
    },
    {
      "id": "3391051",
      "categorie": "Skin",
      "nom": "Cybernetic Mech Suit",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0004_l__b5f4180efbaf215c.png",
      "rarete": ""
    },
    {
      "id": "3391052",
      "categorie": "Skin",
      "nom": "Celestial Armor",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0005_l__9b752c22e49923e1.png",
      "rarete": ""
    },
    {
      "id": "3391054",
      "categorie": "Skin",
      "nom": "Guide of Darkness",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0007_l__db1ade633e134c52.png",
      "rarete": ""
    },
    {
      "id": "3391056",
      "categorie": "Skin",
      "nom": "Cherished Girl",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0010_l__0fb8c3d849a56b98.png",
      "rarete": ""
    },
    {
      "id": "3391053",
      "categorie": "Skin",
      "nom": "Chef of the Month",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0006_l__afd7b37acbc2c4b7.png",
      "rarete": ""
    },
    {
      "id": "3391002",
      "categorie": "Skin",
      "nom": "High Angel's Holy War Armor",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0001_l__083affcf4caa6cff.png",
      "rarete": ""
    },
    {
      "id": "3391004",
      "categorie": "Skin",
      "nom": "Summer Mirage",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0012_l__4e02c46b79afd773.png",
      "rarete": ""
    },
    {
      "id": "3391005",
      "categorie": "Skin",
      "nom": "Brilliant Holy Armor",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0013_l__1bdaae25e066f2de.png",
      "rarete": ""
    },
    {
      "id": "3391055",
      "categorie": "Skin",
      "nom": "Holy Angel of Domination",
      "image": "assets/1897501/images/icon_skin_goddess_margaret_0009_l__61f518f8cca1f930.png",
      "rarete": ""
    },
    {
      "id": "870701",
      "categorie": "Weapon",
      "nom": "High Angel's Rapier",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0001_l__2f426d2fe2578fdf.png",
      "rarete": ""
    },
    {
      "id": "870702",
      "categorie": "Weapon",
      "nom": "Queen's Cue Stick",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0003_l__dc31a035bb94c5cf.png",
      "rarete": ""
    },
    {
      "id": "870703",
      "categorie": "Weapon",
      "nom": "Mech Unit's Neon Sword",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0004_l__d3a222561f22bbaa.png",
      "rarete": ""
    },
    {
      "id": "870704",
      "categorie": "Weapon",
      "nom": "Celestial Guardian Sword",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0005_l__1b7d6ab39f2fd91f.png",
      "rarete": ""
    },
    {
      "id": "870707",
      "categorie": "Weapon",
      "nom": "Sword of the Guide",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0007_l__8c4f6eafd1113cad.png",
      "rarete": ""
    },
    {
      "id": "870710",
      "categorie": "Weapon",
      "nom": "Blooming Cherry Blossom Branch",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0010_l__6117bcb09eed0f6b.png",
      "rarete": ""
    },
    {
      "id": "870706",
      "categorie": "Weapon",
      "nom": "Large Ladle",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0006_l__e557318998287de2.png",
      "rarete": ""
    },
    {
      "id": "870711",
      "categorie": "Weapon",
      "nom": "Conch Rapier",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0012_l__c03c2eeeff040a2c.png",
      "rarete": ""
    },
    {
      "id": "870705",
      "categorie": "Weapon",
      "nom": "Foil of [b]Flash[/b]",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0501_l__dcb07fe9a73a0693.png",
      "rarete": ""
    },
    {
      "id": "870709",
      "categorie": "Weapon",
      "nom": "Light of Domination",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0009_l__1eddaf1cbe07232c.png",
      "rarete": ""
    },
    {
      "id": "870708",
      "categorie": "Weapon",
      "nom": "Angurvadal",
      "image": "assets/1897501/images/icon_weapon_goddess_margaret_0001_l__2f426d2fe2578fdf.png",
      "rarete": ""
    },
    {
      "id": "4000101",
      "categorie": "Head",
      "nom": "Usual Hairstyle",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0001_l__599c6fccbb0b1845.png",
      "rarete": ""
    },
    {
      "id": "4000102",
      "categorie": "Head",
      "nom": "Confidence of a Queen",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0003_l__410a73bebf56cb59.png",
      "rarete": ""
    },
    {
      "id": "4000103",
      "categorie": "Head",
      "nom": "Cybernetic Combat Goggles",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0004_l__fcc7ce3e3a37fa89.png",
      "rarete": ""
    },
    {
      "id": "4000104",
      "categorie": "Head",
      "nom": "Celestial Helmet",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0005_l__ad1fbef9335fe83c.png",
      "rarete": ""
    },
    {
      "id": "4000106",
      "categorie": "Head",
      "nom": "Black Crown of Thorns",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0007_l__9b76a1d37f7b63a8.png",
      "rarete": ""
    },
    {
      "id": "4000108",
      "categorie": "Head",
      "nom": "Spring Season Bob Cut",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0010_l__354e6862d87135cb.png",
      "rarete": ""
    },
    {
      "id": "4000105",
      "categorie": "Head",
      "nom": "Elegant Ponytail",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0006_l__b23bfa5e72a1bce7.png",
      "rarete": ""
    },
    {
      "id": "4000109",
      "categorie": "Head",
      "nom": "Midsummer R&R",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0012_l__50156dfb02f8c708.png",
      "rarete": ""
    },
    {
      "id": "4000111",
      "categorie": "Head",
      "nom": "Brilliant Halo",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0013_l__bf34c2df6023ca22.png",
      "rarete": ""
    },
    {
      "id": "4000107",
      "categorie": "Head",
      "nom": "Brilliance of the Holy Angel",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0009_l__ec11c4823c769f50.png",
      "rarete": ""
    },
    {
      "id": "4000110",
      "categorie": "Head",
      "nom": "Ponytail Scarf",
      "image": "assets/1897501/images/icon_head_goddess_margaret_0501_l__ed9ed837533fe47c.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Angurvadal",
    "image": "assets/1897501/images/icon_weapon_goddess_margaret_0551_s__657275d02ff932fd.png",
    "description": "Covenant of Light Ludociel's Holy Relic (Weapon).\\n[DC143C]A sword infused with the anguish of the legendary hero Frithiof. The light emanating from the sword is unfading, symbolizing indomitable will.[-]",
    "passif": {
      "nom": "Angurvadal",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "For each ally from [00D5FF][The Four Archangels][-] on the battlefield, increases the hero's damage dealt to enemies by [FFAE00]5 %[-] and decreases the hero's damage taken by [FFAE00]5 %[-]."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 240.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 350.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 2400.0
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
        "nom": "Brokkr's Strength",
        "image": "assets/commun/icon_craft_costume_material_10__00badc74edfb288c.png",
        "quantite": 80
      }
    ],
    "provenance": "Eikthyrnir"
  }
};
