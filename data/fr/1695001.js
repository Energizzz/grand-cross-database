window.fichePreparee={
  "nom": "Roxy, reine des explosions",
  "designation": "[Destructrice folle]",
  "titre": "Roxy, reine des explosions",
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
  "presentation": "[Destructrice folle] Roxy, reine des explosions possède une compétence offensive qui retire les bonus, ce qui peut se prouver utile contre les ennemis qui en utilisent. Sa compétence d'attaque de malus inflige des dégâts d’Explosion, ce qui la rend plus efficace au fil du combat.",
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
      "legendeImage": "Illustration du personnage",
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
          "nom": "« Frappe magmatique »",
          "image": "assets/1695001/images/icon_disaster_roxy_ssr_type01_skill_02__a9ea99ab51ae66e9.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 100.0,
              "description": "Inflige des dégâts égaux à 100 % de l'attaque à @target.allEnemies et [00D5FF]Explose[-] après 2 tour(s).\\n\\n[00D5FF]※Explosion : inflige 100 % de dégâts supplémentaires après un certain nombre de tours.[-]",
              "idJeu": 180011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 150.0,
              "description": "Inflige des dégâts égaux à 150 % de l'attaque à @target.allEnemies et [00D5FF]Explose[-] après 1 tour(s).\\n\\n[00D5FF]※Explosion : inflige 100 % de dégâts supplémentaires après un certain nombre de tours.[-]",
              "idJeu": 180012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts égaux à 200 % de l'attaque à @target.allEnemies et [00D5FF]Explose[-] après 1 tour(s).\\n\\n[00D5FF]※Explosion : inflige 100 % de dégâts supplémentaires après un certain nombre de tours.[-]",
              "idJeu": 180013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Rupture magmatique »",
          "image": "assets/1695001/images/icon_disaster_roxy_ssr_type01_skill_01__2c93aede47013a78.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 220.0,
              "description": "[00D5FF]Retire les bonus[-] de @target.oneEnemy et inflige des dégâts égaux à 220 % de l'attaque.",
              "idJeu": 180001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "[00D5FF]Retire les bonus[-] de @target.oneEnemy et inflige des dégâts égaux à 300 % de l'attaque.",
              "idJeu": 180002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "[00D5FF]Annule les bonus et les postures[-] de @target.oneEnemy et inflige des dégâts égaux à 400 % de l'attaque.",
              "idJeu": 180003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Cendres volcaniques »",
        "image": "assets/commun/icon_disaster_roxy_ssr_type01_special_01__dfe864bbc5644c81.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 700.0,
            "description": "Inflige des dégâts égaux à 700 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 770.0,
            "description": "Inflige des dégâts égaux à 770 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 840.0,
            "description": "Inflige des dégâts égaux à 840 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 910.0,
            "description": "Inflige des dégâts égaux à 910 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 980.0,
            "description": "Inflige des dégâts égaux à 980 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 1050.0,
            "description": "Inflige des dégâts égaux à 1050 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Démence",
        "image": "assets/1695001/images/icon_exclusive_skill_1695001__bf7d784728b71bd9.png",
        "description": "[00D5FF]Infliger des dégâts d’Explosion à un ennemi[-] soigne le héros à hauteur de [FFAE00]30 %[-] de ses PV max. et remplit sa jauge de coup ultime de [FFAE00]1 orbe(s)[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "[00D5FF]Infliger des dégâts d’Explosion à un ennemi[-] soigne le héros à hauteur de [FFAE00]30 %[-] de ses PV max. et remplit sa jauge de coup ultime de [FFAE00]1 orbe(s)[-]."
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
      "legendeImage": "Illustration du personnage",
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
          "nom": "« Frappe magmatique »",
          "image": "assets/1695001/images/icon_disaster_roxy_ssr_type01_skill_02__a9ea99ab51ae66e9.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 100.0,
              "description": "Inflige des dégâts égaux à 100 % de l'attaque à @target.allEnemies et [00D5FF]Explose[-] après 2 tour(s).\\n\\n[00D5FF]※Explosion : inflige 100 % de dégâts supplémentaires après un certain nombre de tours.[-]",
              "idJeu": 180011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 150.0,
              "description": "Inflige des dégâts égaux à 150 % de l'attaque à @target.allEnemies et [00D5FF]Explose[-] après 1 tour(s).\\n\\n[00D5FF]※Explosion : inflige 100 % de dégâts supplémentaires après un certain nombre de tours.[-]",
              "idJeu": 180012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts égaux à 200 % de l'attaque à @target.allEnemies et [00D5FF]Explose[-] après 1 tour(s).\\n\\n[00D5FF]※Explosion : inflige 100 % de dégâts supplémentaires après un certain nombre de tours.[-]",
              "idJeu": 180013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Rupture magmatique »",
          "image": "assets/1695001/images/icon_disaster_roxy_ssr_type01_skill_01__2c93aede47013a78.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 220.0,
              "description": "[00D5FF]Retire les bonus[-] de @target.oneEnemy et inflige des dégâts égaux à 220 % de l'attaque.",
              "idJeu": 180001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "[00D5FF]Retire les bonus[-] de @target.oneEnemy et inflige des dégâts égaux à 300 % de l'attaque.",
              "idJeu": 180002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "[00D5FF]Annule les bonus et les postures[-] de @target.oneEnemy et inflige des dégâts égaux à 400 % de l'attaque.",
              "idJeu": 180003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Cendres volcaniques »",
        "image": "assets/commun/icon_disaster_roxy_ssr_type01_special_01__dfe864bbc5644c81.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 700.0,
            "description": "Inflige des dégâts égaux à 700 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 770.0,
            "description": "Inflige des dégâts égaux à 770 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 840.0,
            "description": "Inflige des dégâts égaux à 840 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 910.0,
            "description": "Inflige des dégâts égaux à 910 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 980.0,
            "description": "Inflige des dégâts égaux à 980 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 1050.0,
            "description": "Inflige des dégâts égaux à 1050 % de l'attaque à @target.oneEnemy et remplit la jauge de coup ultime de 2 [FFAE00]orbe(s)[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Démence",
        "image": "assets/1695001/images/icon_exclusive_skill_1695001__bf7d784728b71bd9.png",
        "description": "[00D5FF]Infliger des dégâts d’Explosion à un ennemi[-] soigne le héros à hauteur de [FFAE00]30 %[-] de ses PV max. et remplit sa jauge de coup ultime de [FFAE00]1 orbe(s)[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "[00D5FF]Infliger des dégâts d’Explosion à un ennemi[-] soigne le héros à hauteur de [FFAE00]30 %[-] de ses PV max. et remplit sa jauge de coup ultime de [FFAE00]1 orbe(s)[-]."
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
      "nom": "Mini-short",
      "image": "assets/commun/icon_skin_disaster_roxy_0001_l__53f8cce38576f548.png",
      "rarete": ""
    },
    {
      "id": "3342003",
      "categorie": "Skin",
      "nom": "Robe surprise d'Halloween",
      "image": "assets/commun/icon_skin_disaster_roxy_0006_l__00a0832699cd1145.png",
      "rarete": ""
    },
    {
      "id": "3342005",
      "categorie": "Skin",
      "nom": "Tenue anti-UV soleil",
      "image": "assets/commun/icon_skin_disaster_roxy_0008_l__4573d5e17a2aec2b.png",
      "rarete": ""
    },
    {
      "id": "3342050",
      "categorie": "Skin",
      "nom": "Justaucorps à plume",
      "image": "assets/commun/icon_skin_disaster_roxy_0003_l__f1fd57b5fc9cdfbf.png",
      "rarete": ""
    },
    {
      "id": "3342051",
      "categorie": "Skin",
      "nom": "Mode sans pantalon",
      "image": "assets/commun/icon_skin_disaster_roxy_0004_l__b464d4e70a8aa8dc.png",
      "rarete": ""
    },
    {
      "id": "3342052",
      "categorie": "Skin",
      "nom": "Fille fantastique",
      "image": "assets/commun/icon_skin_disaster_roxy_0005_l__ee58cc3cd4afd7c7.png",
      "rarete": ""
    },
    {
      "id": "3342002",
      "categorie": "Skin",
      "nom": "Robe moulante",
      "image": "assets/commun/icon_skin_disaster_roxy_0002_l__6fc55e7544a636c7.png",
      "rarete": ""
    },
    {
      "id": "3342004",
      "categorie": "Skin",
      "nom": "Surprise d'Halloween",
      "image": "assets/commun/icon_skin_disaster_roxy_0007_l__56bbf71dc13aca75.png",
      "rarete": ""
    },
    {
      "id": "3342006",
      "categorie": "Skin",
      "nom": "Bikini soleil",
      "image": "assets/commun/icon_skin_disaster_roxy_0009_l__56ba4bcae20e031a.png",
      "rarete": ""
    },
    {
      "id": "856701",
      "categorie": "Weapon",
      "nom": "Fléau simple",
      "image": "assets/commun/icon_weapon_disaster_roxy_0001_l__2177ccfbbefe755a.png",
      "rarete": ""
    },
    {
      "id": "856702",
      "categorie": "Weapon",
      "nom": "Fléau de magical girl",
      "image": "assets/commun/icon_weapon_disaster_roxy_0003_l__36c2e8928ac7af55.png",
      "rarete": ""
    },
    {
      "id": "856706",
      "categorie": "Weapon",
      "nom": "Crâne rouge",
      "image": "assets/commun/icon_weapon_disaster_roxy_0501_l__6d0d3e8d242d113b.png",
      "rarete": ""
    },
    {
      "id": "856707",
      "categorie": "Weapon",
      "nom": "Fléau pastèque",
      "image": "assets/commun/icon_weapon_disaster_roxy_0009_l__ca44d8a844765129.png",
      "rarete": ""
    },
    {
      "id": "856703",
      "categorie": "Weapon",
      "nom": "Fléau en croix",
      "image": "assets/commun/icon_weapon_disaster_roxy_0004_l__6ff2dbda9de5ebc5.png",
      "rarete": ""
    },
    {
      "id": "856704",
      "categorie": "Weapon",
      "nom": "Fléau de pierre magique",
      "image": "assets/commun/icon_weapon_disaster_roxy_0005_l__288d230c254c2bc8.png",
      "rarete": ""
    },
    {
      "id": "856705",
      "categorie": "Weapon",
      "nom": "Farce ou friandise",
      "image": "assets/commun/icon_weapon_disaster_roxy_0007_l__5eb2cbe69ea36c00.png",
      "rarete": ""
    },
    {
      "id": "856708",
      "categorie": "Weapon",
      "nom": "Flamme de Niflheim",
      "image": "assets/commun/icon_weapon_disaster_roxy_0001_l__2177ccfbbefe755a.png",
      "rarete": ""
    },
    {
      "id": "4675001",
      "categorie": "Head",
      "nom": "Couettes",
      "image": "assets/commun/icon_head_disaster_roxy_0001_l__ea3dedc6c0265496.png",
      "rarete": ""
    },
    {
      "id": "4675002",
      "categorie": "Head",
      "nom": "Coupe au carré",
      "image": "assets/commun/icon_head_disaster_roxy_0003_l__8b670c1fe478d3ac.png",
      "rarete": ""
    },
    {
      "id": "4675006",
      "categorie": "Head",
      "nom": "Coiffe d'Halloween",
      "image": "assets/commun/icon_head_disaster_roxy_0007_l__86a8ff84adfddfa6.png",
      "rarete": ""
    },
    {
      "id": "4675007",
      "categorie": "Head",
      "nom": "Queue-de-cheval cool",
      "image": "assets/commun/icon_head_disaster_roxy_0009_l__0da50a762bb70fcc.png",
      "rarete": ""
    },
    {
      "id": "4675003",
      "categorie": "Head",
      "nom": "Queue-de-cheval",
      "image": "assets/commun/icon_head_disaster_roxy_0004_l__9bfe34571de470b3.png",
      "rarete": ""
    },
    {
      "id": "4675004",
      "categorie": "Head",
      "nom": "Chignon ruban",
      "image": "assets/commun/icon_head_disaster_roxy_0005_l__6bfe3be0575abf9a.png",
      "rarete": ""
    },
    {
      "id": "4675005",
      "categorie": "Head",
      "nom": "Oreilles de chat",
      "image": "assets/commun/icon_head_disaster_roxy_0501_l__7bd92755df7ac8e1.png",
      "rarete": ""
    },
    {
      "id": "4675008",
      "categorie": "Head",
      "nom": "Tête de grenouille",
      "image": "assets/commun/icon_head_disaster_roxy_0502_l__681f5f75f6737354.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Flamme de Niflheim",
    "image": "assets/commun/icon_weapon_disaster_roxy_0551_s__6b07bd7de279bef3.png",
    "description": "Relique sacrée (arme) de Roxy, reine des explosions.\\n[DC143C]Un fléau qui brûle avec la flamme bleue de Niflheim. Ceux qui posent les yeux sur ses flammes infernales sont voués à mourir.[-]",
    "passif": {
      "nom": "Flamme de Niflheim",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Sans effet spécial, mais augmente grandement les stats de la relique sacrée."
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
        "nom": "Or",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Source du vent",
        "image": "assets/commun/icon_craft_costume_rare_material_01__391d7091ff4c5016.png",
        "quantite": 15
      },
      {
        "nom": "Splendeur du Valhalla",
        "image": "assets/commun/icon_item_drop_nor_0003__fb5417b6b988fed4.png",
        "quantite": 30
      },
      {
        "nom": "Essence magique bleue",
        "image": "assets/commun/icon_craft_costume_key_material_01__8bc67ed6369368ff.png",
        "quantite": 80
      },
      {
        "nom": "Méticulosité d'Eitri",
        "image": "assets/commun/icon_craft_costume_material_07__ee745c99ba8751db.png",
        "quantite": 80
      }
    ],
    "provenance": "Hraesvelgr"
  }
};