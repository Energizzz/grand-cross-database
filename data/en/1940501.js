window.fichePreparee={
  "nom": "Albedo",
  "designation": "[Pure-White Devil]",
  "titre": "Albedo",
  "idJeu": "1940501",
  "attribut": {
    "nom": "@attribute.3",
    "icone": "assets/commun/icon_filter_attribute_03__4980bb489ce93431.png",
    "couleur": "#50b8ea",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.6"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_06__96c3bf184ce60ee4.png"
    ]
  },
  "caracteristiques": [
    "@characteristic.3"
  ],
  "portrait": "assets/1940501/images/icon_hero_mit_white_0002_s__6f1011ef28defeac.png",
  "rareteParDefaut": "UR",
  "presentation": "[Pure-White Devil] Albedo has a Stance Skill that can deal greater damage the more Buffs she has.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1940501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1940501/images/hero_illust_mit_white_1940501__6a526ed7d8cbdda9.png",
      "legendeImage": "mit_white_0001",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 620.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 360.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6200.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4383
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
            "valeur": 70.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Pillar of Muspelheim\"",
          "image": "assets/1940501/images/icon_mit_white_ssr_type01_skill_01__cbc5ed121785f0bf.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts damage equal to 200 % of Attack on @target.oneEnemy, then decreases their damage dealt by 30 % for 1 tour(s).",
              "idJeu": 1002501,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts damage equal to 300 % of Attack on @target.oneEnemy, then decreases their damage dealt by 50 % for 1 tour(s).",
              "idJeu": 1002502,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts damage equal to 500 % of Attack on @target.oneEnemy, then decreases their damage dealt by 80 % for 2 tour(s).",
              "idJeu": 1002503,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Untouchable\"",
          "image": "assets/1940501/images/icon_mit_white_ssr_type01_skill_02__b6a772c596221aec.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "Assumes a Stance to [00D5FF]Taunt[-] enemies for 1 tour(s), inflicting [00D5FF]Amplify[-] damage equal to 150 % of Attack via counter when attacked.\\n\\n[00D5FF]※Amplify: Damage dealt [FFAE00]+30%[-] per active Buff on self.[-]",
              "idJeu": 1002511,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 250.0,
              "description": "Assumes a Stance to [00D5FF]Taunt[-] enemies for 2 tour(s), inflicting [00D5FF]Amplify[-] damage equal to 250 % of Attack via counter when attacked.\\n\\n[00D5FF]※Amplify: Damage dealt [FFAE00]+30%[-] per active Buff on self.[-]",
              "idJeu": 1002512,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Assumes a Stance to [00D5FF]Taunt[-] enemies for 2 tour(s), inflicting [00D5FF]Amplify[-] damage equal to 450 % of Attack via counter when attacked.\\n\\n[00D5FF]※Amplify: Damage dealt [FFAE00]+30%[-] per active Buff on self.[-]",
              "idJeu": 1002513,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"True Hatred\"",
        "image": "assets/1940501/images/icon_mit_white_ssr_type01_special_01__cecca110281b614f.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]60%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 350 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+5%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 380.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]70%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 380 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+10%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 410.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]80%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 410 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+15%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 440.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]95%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 440 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+20%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 470.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]110%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 470 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+35%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 500.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]130%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 500 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+50%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Absolute Defense",
        "image": "assets/1940501/images/icon_exclusive_skill_1940501__17dec7207e081451.png",
        "description": "Applies [00D5FF]Absolute Defense[-] on the hero at the start of the battle for [FFAE00]1 turn[-]. [00D5FF]When assuming a Stance[-], the hero's basic stats increase by [FFAE00]20%[-]. [00D5FF]When hit with a skill during the enemy's turn[-], the hero's Attack-related stats increase by [FFAE00]10%[-], up to [FFAE00]5 times[-], for [FFAE00]3 turns[-]. [00D5FF]If the hero does not take damage[-], all enemies' damage taken increases by [FFAE00]40%[-] for [FFAE00]1 turn[-] at the start of the allies' turn.\\n\\nIn addition, when the hero's [00D5FF]Stance effect is removed[-], the Attack-related stats of [00D5FF]all Unknown race allies[-] increase by [FFAE00]20%[-] for [FFAE00]2 turns[-]. The hero's basic stats increase by [FFAE00]7 %[-] for [FFAE00]every[-] [00D5FF]Unknown race ally[-] participating in battle.\\n\\n[00D5FF]※Absolute Defense: Taunts enemies and decreases damage taken by [FFAE00]50%[-].[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Applies [00D5FF]Absolute Defense[-] on the hero at the start of the battle for [FFAE00]1 turn[-]. [00D5FF]When assuming a Stance[-], the hero's basic stats increase by [FFAE00]20%[-]. [00D5FF]When hit with a skill during the enemy's turn[-], the hero's Attack-related stats increase by [FFAE00]10%[-], up to [FFAE00]5 times[-], for [FFAE00]3 turns[-]. [00D5FF]If the hero does not take damage[-], all enemies' damage taken increases by [FFAE00]40%[-] for [FFAE00]1 turn[-] at the start of the allies' turn.\\n\\nIn addition, when the hero's [00D5FF]Stance effect is removed[-], the Attack-related stats of [00D5FF]all Unknown race allies[-] increase by [FFAE00]20%[-] for [FFAE00]2 turns[-]. The hero's basic stats increase by [FFAE00]7 %[-] for [FFAE00]every[-] [00D5FF]Unknown race ally[-] participating in battle.\\n\\n[00D5FF]※Absolute Defense: Taunts enemies and decreases damage taken by [FFAE00]50%[-].[-]"
          }
        ]
      },
      "idForme": 323101,
      "portrait": "assets/1940501/images/icon_hero_mit_white_0001_s__659e466cb84009cc.png",
      "portraitVertical": "assets/1940501/images/icon_skin_mit_white_0001_l__986b89c94b3cdf0b.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1940501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1940501/images/hero_illust_mit_white_1940501__6a526ed7d8cbdda9.png",
      "legendeImage": "mit_white_0002",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 780.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 520.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8800.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5191
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
            "valeur": 70.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Pillar of Muspelheim\"",
          "image": "assets/1940501/images/icon_mit_white_ssr_type01_skill_01__cbc5ed121785f0bf.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts damage equal to 200 % of Attack on @target.oneEnemy, then decreases their damage dealt by 30 % for 1 tour(s).",
              "idJeu": 1002501,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts damage equal to 300 % of Attack on @target.oneEnemy, then decreases their damage dealt by 50 % for 1 tour(s).",
              "idJeu": 1002502,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts damage equal to 500 % of Attack on @target.oneEnemy, then decreases their damage dealt by 80 % for 2 tour(s).",
              "idJeu": 1002503,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Untouchable\"",
          "image": "assets/1940501/images/icon_mit_white_ssr_type01_skill_02__b6a772c596221aec.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "Assumes a Stance to [00D5FF]Taunt[-] enemies for 1 tour(s), inflicting [00D5FF]Amplify[-] damage equal to 150 % of Attack via counter when attacked.\\n\\n[00D5FF]※Amplify: Damage dealt [FFAE00]+30%[-] per active Buff on self.[-]",
              "idJeu": 1002511,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 250.0,
              "description": "Assumes a Stance to [00D5FF]Taunt[-] enemies for 2 tour(s), inflicting [00D5FF]Amplify[-] damage equal to 250 % of Attack via counter when attacked.\\n\\n[00D5FF]※Amplify: Damage dealt [FFAE00]+30%[-] per active Buff on self.[-]",
              "idJeu": 1002512,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Assumes a Stance to [00D5FF]Taunt[-] enemies for 2 tour(s), inflicting [00D5FF]Amplify[-] damage equal to 450 % of Attack via counter when attacked.\\n\\n[00D5FF]※Amplify: Damage dealt [FFAE00]+30%[-] per active Buff on self.[-]",
              "idJeu": 1002513,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"True Hatred\"",
        "image": "assets/1940501/images/icon_mit_white_ssr_type01_special_01__cecca110281b614f.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]60%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 350 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+5%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 380.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]70%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 380 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+10%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 410.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]80%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 410 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+15%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 440.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]95%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 440 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+20%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 470.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]110%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 470 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+35%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 500.0,
            "description": "Increases the hero's Crit Chance by [FFAE00]50%[-] and Crit Damage by [FFAE00]130%[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Quell[-] damage equal to 500 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Quell: Damage dealt [FFAE00]+50%[-] per active Stance on self.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Absolute Defense",
        "image": "assets/1940501/images/icon_exclusive_skill_1940501__17dec7207e081451.png",
        "description": "Applies [00D5FF]Absolute Defense[-] on the hero at the start of the battle for [FFAE00]1 turn[-]. [00D5FF]When assuming a Stance[-], the hero's basic stats increase by [FFAE00]20%[-]. [00D5FF]When hit with a skill during the enemy's turn[-], the hero's Attack-related stats increase by [FFAE00]10%[-], up to [FFAE00]5 times[-], for [FFAE00]3 turns[-]. [00D5FF]If the hero does not take damage[-], all enemies' damage taken increases by [FFAE00]40%[-] for [FFAE00]1 turn[-] at the start of the allies' turn.\\n\\nIn addition, when the hero's [00D5FF]Stance effect is removed[-], the Attack-related stats of [00D5FF]all Unknown race allies[-] increase by [FFAE00]20%[-] for [FFAE00]2 turns[-]. The hero's basic stats increase by [FFAE00]7 %[-] for [FFAE00]every[-] [00D5FF]Unknown race ally[-] participating in battle.\\n\\n[00D5FF]※Absolute Defense: Taunts enemies and decreases damage taken by [FFAE00]50%[-].[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Applies [00D5FF]Absolute Defense[-] on the hero at the start of the battle for [FFAE00]1 turn[-]. [00D5FF]When assuming a Stance[-], the hero's basic stats increase by [FFAE00]20%[-]. [00D5FF]When hit with a skill during the enemy's turn[-], the hero's Attack-related stats increase by [FFAE00]10%[-], up to [FFAE00]5 times[-], for [FFAE00]3 turns[-]. [00D5FF]If the hero does not take damage[-], all enemies' damage taken increases by [FFAE00]40%[-] for [FFAE00]1 turn[-] at the start of the allies' turn.\\n\\nIn addition, when the hero's [00D5FF]Stance effect is removed[-], the Attack-related stats of [00D5FF]all Unknown race allies[-] increase by [FFAE00]20%[-] for [FFAE00]2 turns[-]. The hero's basic stats increase by [FFAE00]7 %[-] for [FFAE00]every[-] [00D5FF]Unknown race ally[-] participating in battle.\\n\\n[00D5FF]※Absolute Defense: Taunts enemies and decreases damage taken by [FFAE00]50%[-].[-]"
          }
        ]
      },
      "idForme": 323102,
      "portrait": "assets/1940501/images/icon_hero_mit_white_0002_s__6f1011ef28defeac.png",
      "portraitVertical": "assets/1940501/images/icon_skin_mit_white_0002_l__c0c7d4a34fb0ebba.png"
    }
  ],
  "costumes": [
    {
      "id": "3323101",
      "categorie": "Skin",
      "nom": "Sorcerer Kingdom Emissary",
      "image": "assets/1940501/images/icon_skin_mit_white_0001_l__986b89c94b3cdf0b.png",
      "rarete": ""
    },
    {
      "id": "3323150",
      "categorie": "Skin",
      "nom": "Chancellor's Dignity",
      "image": "assets/1940501/images/icon_skin_mit_white_0003_l__f62b46c8129e796f.png",
      "rarete": ""
    },
    {
      "id": "3323151",
      "categorie": "Skin",
      "nom": "Demon of Temptation",
      "image": "assets/1940501/images/icon_skin_mit_white_0004_l__0f74e3e606b28272.png",
      "rarete": ""
    },
    {
      "id": "3323152",
      "categorie": "Skin",
      "nom": "Steampunk Lady",
      "image": "assets/1940501/images/icon_skin_mit_white_0005_l__bce9c18c7cae354e.png",
      "rarete": ""
    },
    {
      "id": "3323153",
      "categorie": "Skin",
      "nom": "Queen of the Moonless Dawn",
      "image": "assets/1940501/images/icon_skin_mit_white_0006_l__e3a323010518e997.png",
      "rarete": ""
    },
    {
      "id": "3323102",
      "categorie": "Skin",
      "nom": "Pure-White Devil",
      "image": "assets/1940501/images/icon_skin_mit_white_0002_l__c0c7d4a34fb0ebba.png",
      "rarete": ""
    },
    {
      "id": "875701",
      "categorie": "Weapon",
      "nom": "Emissary's Staff",
      "image": "assets/1940501/images/icon_weapon_mit_white_0001_l__454a49f54c2ba97d.png",
      "rarete": ""
    },
    {
      "id": "875702",
      "categorie": "Weapon",
      "nom": "Blue Fire Staff",
      "image": "assets/1940501/images/icon_weapon_mit_white_0003_l__c719f20c182890a2.png",
      "rarete": ""
    },
    {
      "id": "875703",
      "categorie": "Weapon",
      "nom": "Heart Staff of Temptation",
      "image": "assets/1940501/images/icon_weapon_mit_white_0004_l__1537e4d63df08bea.png",
      "rarete": ""
    },
    {
      "id": "875704",
      "categorie": "Weapon",
      "nom": "Steam Controller",
      "image": "assets/1940501/images/icon_weapon_mit_white_0005_l__4a5b050bd524030e.png",
      "rarete": ""
    },
    {
      "id": "875706",
      "categorie": "Weapon",
      "nom": "Staff of the Moonless Dawn",
      "image": "assets/1940501/images/icon_weapon_mit_white_0006_l__1e42beda0d224406.png",
      "rarete": ""
    },
    {
      "id": "875705",
      "categorie": "Weapon",
      "nom": "Ginnungagap",
      "image": "assets/1940501/images/icon_weapon_mit_white_0001_l__454a49f54c2ba97d.png",
      "rarete": ""
    },
    {
      "id": "4004501",
      "categorie": "Head",
      "nom": "Succubus Horns",
      "image": "assets/1940501/images/icon_head_mit_white_0001_l__069f16189aa5f06c.png",
      "rarete": ""
    },
    {
      "id": "4004502",
      "categorie": "Head",
      "nom": "Natural Ponytail",
      "image": "assets/1940501/images/icon_head_mit_white_0003_l__b2210c9d7dc3809d.png",
      "rarete": ""
    },
    {
      "id": "4004503",
      "categorie": "Head",
      "nom": "Deadly Charming",
      "image": "assets/1940501/images/icon_head_mit_white_0004_l__714e6279389cb1f6.png",
      "rarete": ""
    },
    {
      "id": "4004504",
      "categorie": "Head",
      "nom": "Steampunk Goggle Cap",
      "image": "assets/1940501/images/icon_head_mit_white_0005_l__a41d057b3ebcab7d.png",
      "rarete": ""
    },
    {
      "id": "4004505",
      "categorie": "Head",
      "nom": "Wings of the Moonless Dawn",
      "image": "assets/1940501/images/icon_head_mit_white_0006_l__2ee64104b9d42b09.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Ginnungagap",
    "image": "assets/1940501/images/icon_weapon_mit_white_0551_s__e76541ab7b070c1a.png",
    "description": "Albedo's Holy Relic (Weapon).\\n[DC143C]Ginnungagap is a world-class item, treasured by Albedo. She always carries it to prevent a mind-control incident similar to Shalltear's from ever occurring again.[-]",
    "passif": {
      "nom": "Ginnungagap",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Decreases the hero's damage taken by [FFAE00]8 %[-] for [FFAE00]every[-] Buff on the hero.\\n[00D5FF](Limit [FFAE00]5 time(s)[-])[-]"
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 400.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 350.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 4100.0
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
