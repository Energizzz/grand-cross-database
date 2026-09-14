window.fichePreparee={
  "nom": "Queen of Explosions Roxy",
  "designation": "[Mad Destroyer]",
  "titre": "Queen of Explosions Roxy",
  "idJeu": "1695001",
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
  "caracteristiques": [
    "@characteristic.1"
  ],
  "portrait": "assets/1695001/images/icon_hero_disaster_roxy_0002_s__b602dfb36cbf9403.png",
  "rareteParDefaut": "UR",
  "presentation": "[Mad Destroyer] Queen of Explosions Roxy has an Attack skill which removes Buffs, making her effective against Buffed enemies. Her Debuff Atk skill applies the Explosion effect, allowing her to become more effective in combat every turn.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1695001/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1695001/images/hero_illust_disaster_roxy_1695001__10c1e6fc65326cb2.png",
      "legendeImage": "disaster_roxy_0001",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 520.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 390.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3482
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
            "valeur": 120.0,
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
            "valeur": 10.0,
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
            "valeur": 120.0,
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
          "nom": "\"Magma Swing\"",
          "image": "assets/1695001/images/icon_disaster_roxy_ssr_type01_skill_02__a9ea99ab51ae66e9.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 100.0,
              "description": "Inflicts damage equal to 100 % of Attack on @target.allEnemies and [00D5FF]Explodes[-] after 2 tour(s).\\n\\n[00D5FF]※Explosion: Additional damage equal to 100 % of damage dealt after a certain number of turns.[-]",
              "idJeu": 180011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 150.0,
              "description": "Inflicts damage equal to 150 % of Attack on @target.allEnemies and [00D5FF]Explodes[-] after 1 tour(s).\\n\\n[00D5FF]※Explosion: Additional damage equal to 100 % of damage dealt after a certain number of turns.[-]",
              "idJeu": 180012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 200.0,
              "description": "Inflicts damage equal to 200 % of Attack on @target.allEnemies and [00D5FF]Explodes[-] after 1 tour(s).\\n\\n[00D5FF]※Explosion: Additional damage equal to 100 % of damage dealt after a certain number of turns.[-]",
              "idJeu": 180013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Magma Break\"",
          "image": "assets/1695001/images/icon_disaster_roxy_ssr_type01_skill_01__2c93aede47013a78.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 220.0,
              "description": "[00D5FF]Removes Buffs[-] from @target.oneEnemy and inflicts damage equal to 220 % of Attack.",
              "idJeu": 180001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "[00D5FF]Removes Buffs[-] from @target.oneEnemy and inflicts damage equal to 300 % of Attack.",
              "idJeu": 180002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "[00D5FF]Cancels Buffs and Stances[-] on @target.oneEnemy and inflicts damage equal to 400 % of Attack.",
              "idJeu": 180003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Volcanic Ash\"",
        "image": "assets/commun/icon_disaster_roxy_ssr_type01_special_01__dfe864bbc5644c81.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 700.0,
            "description": "Inflicts damage equal to 700 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 770.0,
            "description": "Inflicts damage equal to 770 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 840.0,
            "description": "Inflicts damage equal to 840 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 910.0,
            "description": "Inflicts damage equal to 910 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 980.0,
            "description": "Inflicts damage equal to 980 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 1050.0,
            "description": "Inflicts damage equal to 1050 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Lunacy",
        "image": "assets/1695001/images/icon_exclusive_skill_1695001__bf7d784728b71bd9.png",
        "description": "[00D5FF]Inflicting Explosion damage on an enemy[-] heals the hero's HP by [FFAE00]30 %[-] of Max HP and fills the Ultimate Move Gauge by [FFAE00]1 % orb(s)[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "[00D5FF]Inflicting Explosion damage on an enemy[-] heals the hero's HP by [FFAE00]30 %[-] of Max HP and fills the Ultimate Move Gauge by [FFAE00]1 % orb(s)[-]."
          }
        ]
      },
      "idForme": 342001,
      "portrait": "assets/1695001/images/icon_hero_disaster_roxy_0001_s__2a8cb1ec7781d0c0.png",
      "portraitVertical": "assets/commun/icon_skin_disaster_roxy_0001_l__53f8cce38576f548.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1695001/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1695001/images/hero_illust_disaster_roxy_1695001__10c1e6fc65326cb2.png",
      "legendeImage": "disaster_roxy_0002",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 740.0
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
            "valeur": 4174
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
            "valeur": 120.0,
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
            "valeur": 10.0,
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
            "valeur": 120.0,
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
          "nom": "\"Magma Swing\"",
          "image": "assets/1695001/images/icon_disaster_roxy_ssr_type01_skill_02__a9ea99ab51ae66e9.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 100.0,
              "description": "Inflicts damage equal to 100 % of Attack on @target.allEnemies and [00D5FF]Explodes[-] after 2 tour(s).\\n\\n[00D5FF]※Explosion: Additional damage equal to 100 % of damage dealt after a certain number of turns.[-]",
              "idJeu": 180011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 150.0,
              "description": "Inflicts damage equal to 150 % of Attack on @target.allEnemies and [00D5FF]Explodes[-] after 1 tour(s).\\n\\n[00D5FF]※Explosion: Additional damage equal to 100 % of damage dealt after a certain number of turns.[-]",
              "idJeu": 180012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 200.0,
              "description": "Inflicts damage equal to 200 % of Attack on @target.allEnemies and [00D5FF]Explodes[-] after 1 tour(s).\\n\\n[00D5FF]※Explosion: Additional damage equal to 100 % of damage dealt after a certain number of turns.[-]",
              "idJeu": 180013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Magma Break\"",
          "image": "assets/1695001/images/icon_disaster_roxy_ssr_type01_skill_01__2c93aede47013a78.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 220.0,
              "description": "[00D5FF]Removes Buffs[-] from @target.oneEnemy and inflicts damage equal to 220 % of Attack.",
              "idJeu": 180001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "[00D5FF]Removes Buffs[-] from @target.oneEnemy and inflicts damage equal to 300 % of Attack.",
              "idJeu": 180002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "[00D5FF]Cancels Buffs and Stances[-] on @target.oneEnemy and inflicts damage equal to 400 % of Attack.",
              "idJeu": 180003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Volcanic Ash\"",
        "image": "assets/commun/icon_disaster_roxy_ssr_type01_special_01__dfe864bbc5644c81.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 700.0,
            "description": "Inflicts damage equal to 700 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 770.0,
            "description": "Inflicts damage equal to 770 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 840.0,
            "description": "Inflicts damage equal to 840 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 910.0,
            "description": "Inflicts damage equal to 910 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 980.0,
            "description": "Inflicts damage equal to 980 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 1050.0,
            "description": "Inflicts damage equal to 1050 % of Attack on @target.oneEnemy and fills 2 % Ultimate Move Gauge [FFAE00]orb(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Lunacy",
        "image": "assets/1695001/images/icon_exclusive_skill_1695001__bf7d784728b71bd9.png",
        "description": "[00D5FF]Inflicting Explosion damage on an enemy[-] heals the hero's HP by [FFAE00]30 %[-] of Max HP and fills the Ultimate Move Gauge by [FFAE00]1 % orb(s)[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "[00D5FF]Inflicting Explosion damage on an enemy[-] heals the hero's HP by [FFAE00]30 %[-] of Max HP and fills the Ultimate Move Gauge by [FFAE00]1 % orb(s)[-]."
          }
        ]
      },
      "idForme": 342002,
      "portrait": "assets/1695001/images/icon_hero_disaster_roxy_0002_s__b602dfb36cbf9403.png",
      "portraitVertical": "assets/commun/icon_skin_disaster_roxy_0002_l__6fc55e7544a636c7.png"
    }
  ],
  "costumes": [
    {
      "id": "3342001",
      "categorie": "Skin",
      "nom": "Hot Pants",
      "image": "assets/commun/icon_skin_disaster_roxy_0001_l__53f8cce38576f548.png",
      "rarete": ""
    },
    {
      "id": "3342003",
      "categorie": "Skin",
      "nom": "Surprise Halloween Dress",
      "image": "assets/commun/icon_skin_disaster_roxy_0006_l__00a0832699cd1145.png",
      "rarete": ""
    },
    {
      "id": "3342005",
      "categorie": "Skin",
      "nom": "Sunny Rash Guard",
      "image": "assets/commun/icon_skin_disaster_roxy_0008_l__4573d5e17a2aec2b.png",
      "rarete": ""
    },
    {
      "id": "3342050",
      "categorie": "Skin",
      "nom": "Feather Body Suit",
      "image": "assets/commun/icon_skin_disaster_roxy_0003_l__f1fd57b5fc9cdfbf.png",
      "rarete": ""
    },
    {
      "id": "3342051",
      "categorie": "Skin",
      "nom": "Pantless Fashion",
      "image": "assets/commun/icon_skin_disaster_roxy_0004_l__b464d4e70a8aa8dc.png",
      "rarete": ""
    },
    {
      "id": "3342052",
      "categorie": "Skin",
      "nom": "Fantasy Girl",
      "image": "assets/commun/icon_skin_disaster_roxy_0005_l__ee58cc3cd4afd7c7.png",
      "rarete": ""
    },
    {
      "id": "3342002",
      "categorie": "Skin",
      "nom": "Tight Dress",
      "image": "assets/commun/icon_skin_disaster_roxy_0002_l__6fc55e7544a636c7.png",
      "rarete": ""
    },
    {
      "id": "3342004",
      "categorie": "Skin",
      "nom": "Surprise Halloween",
      "image": "assets/commun/icon_skin_disaster_roxy_0007_l__56bbf71dc13aca75.png",
      "rarete": ""
    },
    {
      "id": "3342006",
      "categorie": "Skin",
      "nom": "Sunny Bikini",
      "image": "assets/commun/icon_skin_disaster_roxy_0009_l__56ba4bcae20e031a.png",
      "rarete": ""
    },
    {
      "id": "856701",
      "categorie": "Weapon",
      "nom": "Plain Flail",
      "image": "assets/commun/icon_weapon_disaster_roxy_0001_l__2177ccfbbefe755a.png",
      "rarete": ""
    },
    {
      "id": "856702",
      "categorie": "Weapon",
      "nom": "Magical Girl's Flail",
      "image": "assets/commun/icon_weapon_disaster_roxy_0003_l__36c2e8928ac7af55.png",
      "rarete": ""
    },
    {
      "id": "856706",
      "categorie": "Weapon",
      "nom": "Red Skull",
      "image": "assets/commun/icon_weapon_disaster_roxy_0501_l__6d0d3e8d242d113b.png",
      "rarete": ""
    },
    {
      "id": "856707",
      "categorie": "Weapon",
      "nom": "Watermelon Flail",
      "image": "assets/commun/icon_weapon_disaster_roxy_0009_l__ca44d8a844765129.png",
      "rarete": ""
    },
    {
      "id": "856703",
      "categorie": "Weapon",
      "nom": "Cross Flail",
      "image": "assets/commun/icon_weapon_disaster_roxy_0004_l__6ff2dbda9de5ebc5.png",
      "rarete": ""
    },
    {
      "id": "856704",
      "categorie": "Weapon",
      "nom": "Magic Stone Flail",
      "image": "assets/commun/icon_weapon_disaster_roxy_0005_l__288d230c254c2bc8.png",
      "rarete": ""
    },
    {
      "id": "856705",
      "categorie": "Weapon",
      "nom": "Trick or Treat",
      "image": "assets/commun/icon_weapon_disaster_roxy_0007_l__5eb2cbe69ea36c00.png",
      "rarete": ""
    },
    {
      "id": "856708",
      "categorie": "Weapon",
      "nom": "Flame of Niflheim",
      "image": "assets/commun/icon_weapon_disaster_roxy_0001_l__2177ccfbbefe755a.png",
      "rarete": ""
    },
    {
      "id": "4675001",
      "categorie": "Head",
      "nom": "Pigtails",
      "image": "assets/commun/icon_head_disaster_roxy_0001_l__ea3dedc6c0265496.png",
      "rarete": ""
    },
    {
      "id": "4675002",
      "categorie": "Head",
      "nom": "Bob Cut",
      "image": "assets/commun/icon_head_disaster_roxy_0003_l__8b670c1fe478d3ac.png",
      "rarete": ""
    },
    {
      "id": "4675006",
      "categorie": "Head",
      "nom": "Halloween Headdress",
      "image": "assets/commun/icon_head_disaster_roxy_0007_l__86a8ff84adfddfa6.png",
      "rarete": ""
    },
    {
      "id": "4675007",
      "categorie": "Head",
      "nom": "Cool Ponytail",
      "image": "assets/commun/icon_head_disaster_roxy_0009_l__0da50a762bb70fcc.png",
      "rarete": ""
    },
    {
      "id": "4675003",
      "categorie": "Head",
      "nom": "Ponytail",
      "image": "assets/commun/icon_head_disaster_roxy_0004_l__9bfe34571de470b3.png",
      "rarete": ""
    },
    {
      "id": "4675004",
      "categorie": "Head",
      "nom": "Ribbon Bun",
      "image": "assets/commun/icon_head_disaster_roxy_0005_l__6bfe3be0575abf9a.png",
      "rarete": ""
    },
    {
      "id": "4675005",
      "categorie": "Head",
      "nom": "Cat Ears",
      "image": "assets/commun/icon_head_disaster_roxy_0501_l__7bd92755df7ac8e1.png",
      "rarete": ""
    },
    {
      "id": "4675008",
      "categorie": "Head",
      "nom": "Frogsy",
      "image": "assets/commun/icon_head_disaster_roxy_0502_l__681f5f75f6737354.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Flame of Niflheim",
    "image": "assets/commun/icon_weapon_disaster_roxy_0551_s__6b07bd7de279bef3.png",
    "description": "Queen of Explosions Roxy's Holy Relic (Weapon).\\n[DC143C]A flail which burns with the blue fire of Niflheim. Those who lay eyes on its hellish flames are destined to die.[-]",
    "passif": {
      "nom": "Flame of Niflheim",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Does not have a special effect, but greatly increases the basic stats of the Holy Relic."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 850.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 500.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 6250.0
      }
    ],
    "materiaux": [
      {
        "nom": "Gold",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Wind Source",
        "image": "assets/commun/icon_craft_costume_rare_material_01__391d7091ff4c5016.png",
        "quantite": 15
      },
      {
        "nom": "Magnificence of Valhalla",
        "image": "assets/commun/icon_item_drop_nor_0003__fb5417b6b988fed4.png",
        "quantite": 30
      },
      {
        "nom": "Blue Magic Essence",
        "image": "assets/commun/icon_craft_costume_key_material_01__8bc67ed6369368ff.png",
        "quantite": 80
      },
      {
        "nom": "Eitri's Meticulousness",
        "image": "assets/commun/icon_craft_costume_material_07__ee745c99ba8751db.png",
        "quantite": 80
      }
    ],
    "provenance": "Hraesvelgr"
  }
};
