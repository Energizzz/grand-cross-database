window.fichePreparee={
  "nom": "Goddess Elizabeth",
  "designation": "[Holy Warrior]",
  "titre": "Goddess Elizabeth",
  "idJeu": "1805001",
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
  "caracteristiques": [],
  "portrait": "assets/1805001/images/icon_hero_elizabeth_goddess_0002_s__e02ab332465c57a4.png",
  "rareteParDefaut": "UR",
  "presentation": "[Holy Warrior] Goddess Elizabeth's Buff skill can greatly decrease allies' damage taken, dramatically improving the team's survivability.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1805001/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1805001/images/hero_illust_elizabeth_goddess_1805001__3aca2a93b4e6e81a.png",
      "legendeImage": "elizabeth_goddess_0001",
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
            "valeur": 3478
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 20.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 135.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 30.0,
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
            "valeur": 0.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Let There Be Light\"",
          "image": "assets/1805001/images/icon_elizabeth_goddess_glove_skill_01__302a63b58cc8cade.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts damage equal to 200 % of Attack on @target.oneEnemy.",
              "idJeu": 187001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "Cancels Stances on @target.oneEnemy and inflicts damage equal to 200 % of Attack, then [00D5FF]Stuns[-] for 1 tour(s).\\n\\n[00D5FF]※Stun: Prohibits all actions.[-]",
              "idJeu": 187002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 250.0,
              "description": "Cancels Stances on @target.oneEnemy and inflicts damage equal to 250 % of Attack, then [00D5FF]Stuns[-] for 2 tour(s).\\n\\n[00D5FF]※Stun: Prohibits all actions.[-]",
              "idJeu": 187003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Goddess Bless\"",
          "image": "assets/1805001/images/icon_elizabeth_goddess_glove_skill_02__2e18de7238d0d6c9.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "Creates a barrier around @target.allAllies equal to 150 % of Attack for 1 tour(s). Takes damage only from basic stats when attacked.\\n[00D5FF](Excludes Rupture)[-]",
              "idJeu": 187011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "Creates a barrier around @target.allAllies equal to 200 % of Attack for 1 tour(s). Takes damage only from basic stats when attacked.\\n[00D5FF](Excludes Rupture)[-]",
              "idJeu": 187012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "Creates a barrier around @target.allAllies equal to 300 % of Attack for 2 tour(s). Takes damage only from basic stats when attacked.\\n[00D5FF](Excludes Rupture)[-]",
              "idJeu": 187013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Goddess Pattern\"",
        "image": "assets/1805001/images/icon_elizabeth_goddess_glove_special_01__29481e04637f6e6a.png",
        "cible": "@target.allAllies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 30.0,
            "description": "Recovers HP of @target.allAllies equal to 30 % of Max HP. [00D5FF]Reflects[-] 40 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 35.0,
            "description": "Recovers HP of @target.allAllies equal to 35 % of Max HP. [00D5FF]Reflects[-] 50 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 40.0,
            "description": "Recovers HP of @target.allAllies equal to 40 % of Max HP. [00D5FF]Reflects[-] 60 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 50.0,
            "description": "Recovers HP of @target.allAllies equal to 50 % of Max HP. [00D5FF]Reflects[-] 80 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 60.0,
            "description": "Recovers HP of @target.allAllies equal to 60 % of Max HP. [00D5FF]Reflects[-] 100 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 70.0,
            "description": "Recovers HP of @target.allAllies equal to 70 % of Max HP. [00D5FF]Reflects[-] 120 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Embrace of the Goddess",
        "image": "assets/1805001/images/icon_exclusive_skill_1805001__aafcade658f6ec07.png",
        "description": "When an ally dies, they are [00D5FF]revived with the same amount of HP they had before dying[-].\\n[00D5FF](Limit once, applies when entering battle. Dying by Reflect effect nullifies revive and uses it up)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "When an ally dies, they are [00D5FF]revived with the same amount of HP they had before dying[-].\\n[00D5FF](Limit once, applies when entering battle. Dying by Reflect effect nullifies revive and uses it up)[-]"
          }
        ]
      },
      "idForme": 355001,
      "portrait": "assets/1805001/images/icon_hero_elizabeth_goddess_0001_s__279130b37aef5d5c.png",
      "portraitVertical": "assets/1805001/images/icon_skin_elizabeth_goddess_0001_l__61fc30d6e56dd17d.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1805001/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1805001/images/hero_illust_elizabeth_goddess_1805001__3aca2a93b4e6e81a.png",
      "legendeImage": "elizabeth_goddess_0002",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 680.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 470.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7400.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3774
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 20.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 135.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 30.0,
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
            "valeur": 0.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Let There Be Light\"",
          "image": "assets/1805001/images/icon_elizabeth_goddess_glove_skill_01__302a63b58cc8cade.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts damage equal to 200 % of Attack on @target.oneEnemy.",
              "idJeu": 187001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "Cancels Stances on @target.oneEnemy and inflicts damage equal to 200 % of Attack, then [00D5FF]Stuns[-] for 1 tour(s).\\n\\n[00D5FF]※Stun: Prohibits all actions.[-]",
              "idJeu": 187002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 250.0,
              "description": "Cancels Stances on @target.oneEnemy and inflicts damage equal to 250 % of Attack, then [00D5FF]Stuns[-] for 2 tour(s).\\n\\n[00D5FF]※Stun: Prohibits all actions.[-]",
              "idJeu": 187003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Goddess Bless\"",
          "image": "assets/1805001/images/icon_elizabeth_goddess_glove_skill_02__2e18de7238d0d6c9.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "Creates a barrier around @target.allAllies equal to 150 % of Attack for 1 tour(s). Takes damage only from basic stats when attacked.\\n[00D5FF](Excludes Rupture)[-]",
              "idJeu": 187011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "Creates a barrier around @target.allAllies equal to 200 % of Attack for 1 tour(s). Takes damage only from basic stats when attacked.\\n[00D5FF](Excludes Rupture)[-]",
              "idJeu": 187012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "Creates a barrier around @target.allAllies equal to 300 % of Attack for 2 tour(s). Takes damage only from basic stats when attacked.\\n[00D5FF](Excludes Rupture)[-]",
              "idJeu": 187013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/buff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Goddess Pattern\"",
        "image": "assets/1805001/images/icon_elizabeth_goddess_glove_special_01__29481e04637f6e6a.png",
        "cible": "@target.allAllies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 30.0,
            "description": "Recovers HP of @target.allAllies equal to 30 % of Max HP. [00D5FF]Reflects[-] 40 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 35.0,
            "description": "Recovers HP of @target.allAllies equal to 35 % of Max HP. [00D5FF]Reflects[-] 50 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 40.0,
            "description": "Recovers HP of @target.allAllies equal to 40 % of Max HP. [00D5FF]Reflects[-] 60 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 50.0,
            "description": "Recovers HP of @target.allAllies equal to 50 % of Max HP. [00D5FF]Reflects[-] 80 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 60.0,
            "description": "Recovers HP of @target.allAllies equal to 60 % of Max HP. [00D5FF]Reflects[-] 100 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 70.0,
            "description": "Recovers HP of @target.allAllies equal to 70 % of Max HP. [00D5FF]Reflects[-] 120 % of damage taken over 2 tour(s), then heals for half of the damage reflected.\\n\\n[00D5FF]※Reflect: Returns a portion of damage taken back to the attacker.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Embrace of the Goddess",
        "image": "assets/1805001/images/icon_exclusive_skill_1805001__aafcade658f6ec07.png",
        "description": "When an ally dies, they are [00D5FF]revived with the same amount of HP they had before dying[-].\\n[00D5FF](Limit once, applies when entering battle. Dying by Reflect effect nullifies revive and uses it up)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "When an ally dies, they are [00D5FF]revived with the same amount of HP they had before dying[-].\\n[00D5FF](Limit once, applies when entering battle. Dying by Reflect effect nullifies revive and uses it up)[-]"
          }
        ]
      },
      "idForme": 355002,
      "portrait": "assets/1805001/images/icon_hero_elizabeth_goddess_0002_s__e02ab332465c57a4.png",
      "portraitVertical": "assets/1805001/images/icon_skin_elizabeth_goddess_0002_l__4015432496b7de13.png"
    }
  ],
  "costumes": [
    {
      "id": "3355001",
      "categorie": "Skin",
      "nom": "Goddess Wings",
      "image": null,
      "rarete": ""
    },
    {
      "id": "3355003",
      "categorie": "Skin",
      "nom": "Cherry Blossom Dress",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0010_l__5b2107fd6d89f10b.png",
      "rarete": ""
    },
    {
      "id": "3355053",
      "categorie": "Skin",
      "nom": "Saint's Garment",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0006_l__2d241b4bb2ddf9ca.png",
      "rarete": ""
    },
    {
      "id": "3355050",
      "categorie": "Skin",
      "nom": "Freshman Fashion",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0003_l__46f444ef56deee2c.png",
      "rarete": ""
    },
    {
      "id": "3355051",
      "categorie": "Skin",
      "nom": "Warrior of Light",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0004_l__978292b92d4a18ec.png",
      "rarete": ""
    },
    {
      "id": "3355052",
      "categorie": "Skin",
      "nom": "Shepherd of Light",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0005_l__fa061f16190ed1ac.png",
      "rarete": ""
    },
    {
      "id": "3355054",
      "categorie": "Skin",
      "nom": "Popular Kid With Wings",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0007_l__8d3b2f63e0e5072b.png",
      "rarete": ""
    },
    {
      "id": "3355055",
      "categorie": "Skin",
      "nom": "Grand Cross 2.5th Anniversary Celebration Dress",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0008_l__8bff615b3dac7634.png",
      "rarete": ""
    },
    {
      "id": "3355056",
      "categorie": "Skin",
      "nom": "Glorious Knighthood Armor",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0009_l__b661128f34bb979d.png",
      "rarete": ""
    },
    {
      "id": "3355002",
      "categorie": "Skin",
      "nom": "Purple Butterfly",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0002_l__4015432496b7de13.png",
      "rarete": ""
    },
    {
      "id": "3355004",
      "categorie": "Skin",
      "nom": "Blooming Flower Dress",
      "image": "assets/1805001/images/icon_skin_elizabeth_goddess_0011_l__c51a130c7c702183.png",
      "rarete": ""
    },
    {
      "id": "3355091",
      "categorie": "Skin",
      "nom": "Goddess Wings",
      "image": null,
      "rarete": ""
    },
    {
      "id": "858001",
      "categorie": "Weapon",
      "nom": "Invisible Gauntlet",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0001_l__d17dd7d65b9277ed.png",
      "rarete": ""
    },
    {
      "id": "858006",
      "categorie": "Weapon",
      "nom": "Holy Bracelet",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0006_l__c6c0885cfc6da737.png",
      "rarete": ""
    },
    {
      "id": "858002",
      "categorie": "Weapon",
      "nom": "Gauntlet of Blue Life",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0003_l__7ea9dd1b79f25037.png",
      "rarete": ""
    },
    {
      "id": "858003",
      "categorie": "Weapon",
      "nom": "Warrior's Gauntlet",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0004_l__510ed815272e2819.png",
      "rarete": ""
    },
    {
      "id": "858004",
      "categorie": "Weapon",
      "nom": "Shepherd's Gauntlet",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0005_l__cba0be1326ab5361.png",
      "rarete": ""
    },
    {
      "id": "858007",
      "categorie": "Weapon",
      "nom": "Cute Bunny Bracelet",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0007_l__aa0450aee411f6bc.png",
      "rarete": ""
    },
    {
      "id": "858009",
      "categorie": "Weapon",
      "nom": "Blooming Flower Bracelets",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0011_l__6633192dae295d1b.png",
      "rarete": ""
    },
    {
      "id": "858005",
      "categorie": "Weapon",
      "nom": "Elegant Gauntlet",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0002_l__78837b6cc33685a1.png",
      "rarete": ""
    },
    {
      "id": "858091",
      "categorie": "Weapon",
      "nom": "Invisible Gauntlet",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0001_l__d17dd7d65b9277ed.png",
      "rarete": ""
    },
    {
      "id": "858008",
      "categorie": "Weapon",
      "nom": "Svalinn",
      "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0001_l__d17dd7d65b9277ed.png",
      "rarete": ""
    },
    {
      "id": "4785001",
      "categorie": "Head",
      "nom": "Neat Straight Hair",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0001_l__cd7984deb497b939.png",
      "rarete": ""
    },
    {
      "id": "4785005",
      "categorie": "Head",
      "nom": "Saint's Hat",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0006_l__eee2512f7d538f58.png",
      "rarete": ""
    },
    {
      "id": "4785002",
      "categorie": "Head",
      "nom": "Freshman Waves",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0003_l__b42f7f126f4145ea.png",
      "rarete": ""
    },
    {
      "id": "4785003",
      "categorie": "Head",
      "nom": "Warrior's Winged Crown",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0004_l__199fd8469965a3e7.png",
      "rarete": ""
    },
    {
      "id": "4785004",
      "categorie": "Head",
      "nom": "Aura of the Shepherd",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0005_l__727c99f7b8eeed29.png",
      "rarete": ""
    },
    {
      "id": "4785006",
      "categorie": "Head",
      "nom": "Lovely Bob Cut",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0007_l__8a91e46cc2337b93.png",
      "rarete": ""
    },
    {
      "id": "4785007",
      "categorie": "Head",
      "nom": "2nd Anniversary Celebration Headband",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0501_l__c5c165593885c0c5.png",
      "rarete": ""
    },
    {
      "id": "4785010",
      "categorie": "Head",
      "nom": "Elegant Crown",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0503_l__0f951bb51d998657.png",
      "rarete": ""
    },
    {
      "id": "4785008",
      "categorie": "Head",
      "nom": "Shy Flowers",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0011_l__9d185f7cccaf90d7.png",
      "rarete": ""
    },
    {
      "id": "4785009",
      "categorie": "Head",
      "nom": "Blooming Flowers",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0502_l__6b0f0ea0631cc289.png",
      "rarete": ""
    },
    {
      "id": "4785091",
      "categorie": "Head",
      "nom": "Neat Straight Hair",
      "image": "assets/1805001/images/icon_head_elizabeth_goddess_0001_l__cd7984deb497b939.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Svalinn",
    "image": "assets/1805001/images/icon_weapon_elizabeth_goddess_0551_s__fb2739ade900907e.png",
    "description": "Goddess Elizabeth's Holy Relic (Weapon).\\n[DC143C]A god's shield containing cold energy. Svalinn's coldness can chill the warmth of the sun.[-]",
    "passif": {
      "nom": "Svalinn",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Increases [00D5FF]\"Goddess Bless\"[-] barrier value by [FFAE00]15 %[-]."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 100.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 450.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 2700.0
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
