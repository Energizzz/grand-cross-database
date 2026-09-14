window.fichePreparee={
  "nom": "Diane mercenaire",
  "designation": "[Cœur de la Terre]",
  "titre": "Diane mercenaire",
  "idJeu": "1044001",
  "attribut": {
    "nom": "@attribute.1",
    "icone": "assets/commun/icon_filter_attribute_01__bfa1da106b20bf3e.png",
    "couleur": "#ef6369",
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
  "portrait": "assets/1044001/images/icon_hero_diane_0009_s__6dd657a16d3db8d5.png",
  "rareteParDefaut": "UR",
  "presentation": "[Cœur de la Terre] Diane mercenaire possède une compétence qui affecte les bonus défensifs de tous les ennemis.\\nElle est très efficace quand elle est utilisée sur plusieurs ennemis avec une défense élevée.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SR",
      "nom": "SR",
      "icone": "assets/commun/icon_filter_grade_SR__cc09bcf3e7213a06.png",
      "cadre": "assets/1044001/images/icon_frame_small_sr__c14285dca5b2bf1b.png",
      "fond": "assets/commun/icon_hero_basic_s_4__d8de890911c49b3d.png",
      "coin": "assets/commun/common_level_frame_rank_sr.png",
      "couleur": "#f3ce80",
      "image": "assets/1044001/images/hero_illust_diane_1044001__4d0cd2ca934dacb7.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 40,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 320.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 180.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 5000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 2239
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
            "valeur": 150.0,
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
            "valeur": 20.0,
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
            "valeur": 120.0,
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
          "nom": "« Poing de métal »",
          "image": "assets/1044001/images/icon_diane_glove_skill_01__6d26bf7d8d141485.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 220.0,
              "description": "Inflige des dégâts égaux à 220 % de l'attaque à @target.oneEnemy.",
              "idJeu": 112071,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 220.0,
              "description": "[00D5FF]Retire les postures[-] de @target.oneEnemy. Inflige des dégâts égaux à 220 % de l'attaque, puis [00D5FF]neutralise les compétences de posture[-] pendant 1 tour(s).",
              "idJeu": 112072,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 360.0,
              "description": "[00D5FF]Retire les postures[-] de @target.oneEnemy. Inflige des dégâts égaux à 360 % de l'attaque, puis [00D5FF]neutralise les compétences de posture[-] pendant 2 tour(s).",
              "idJeu": 112073,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Vortex de sable »",
          "image": "assets/1044001/images/icon_diane_glove_skill_02__e85be37a204d6218.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "Réduit les [00D5FF]stats défensives[-] de @target.allEnemies\\nde 20 % pendant 2 tour(s).",
              "idJeu": 112081,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "Réduit les [00D5FF]stats défensives[-] de @target.allEnemies\\nde 30 % pendant 2 tour(s).",
              "idJeu": 112082,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "Réduit les [00D5FF]stats défensives[-] de @target.allEnemies\\nde 40 % pendant 3 tour(s).",
              "idJeu": 112083,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Onde terrestre »",
        "image": "assets/1044001/images/icon_diane_glove_special_01__a5fded6080b5c5c9.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 350 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 385.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 385 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 420.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 420 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 455.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 455 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 490.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 490 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 525.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 525 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Énergie terrestre",
        "image": "assets/1044001/images/icon_exclusive_skill_1044001__68adb75254dc3920.png",
        "description": "Augmente le taux de perforation d'un allié de [FFAE00]8 %[-] au début du tour allié s'il subit des dégâts.\\n[00D5FF](5 fois max.)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente le taux de perforation d'un allié de [FFAE00]8 %[-] au début du tour allié s'il subit des dégâts.\\n[00D5FF](5 fois max.)[-]"
          }
        ]
      },
      "idForme": 300310,
      "portrait": "assets/1044001/images/icon_hero_diane_0001_s__e11be7e098f85e87.png",
      "portraitVertical": "assets/1044001/images/icon_skin_diane_0001_l__34b488643ad4a6e1.png"
    },
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1044001/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1044001/images/hero_illust_diane_1044001__4d0cd2ca934dacb7.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 440.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 240.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6500.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 2707
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
            "valeur": 150.0,
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
            "valeur": 20.0,
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
            "valeur": 120.0,
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
          "nom": "« Poing de métal »",
          "image": "assets/1044001/images/icon_diane_glove_skill_01__6d26bf7d8d141485.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 220.0,
              "description": "Inflige des dégâts égaux à 220 % de l'attaque à @target.oneEnemy.",
              "idJeu": 112071,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 220.0,
              "description": "[00D5FF]Retire les postures[-] de @target.oneEnemy. Inflige des dégâts égaux à 220 % de l'attaque, puis [00D5FF]neutralise les compétences de posture[-] pendant 1 tour(s).",
              "idJeu": 112072,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 360.0,
              "description": "[00D5FF]Retire les postures[-] de @target.oneEnemy. Inflige des dégâts égaux à 360 % de l'attaque, puis [00D5FF]neutralise les compétences de posture[-] pendant 2 tour(s).",
              "idJeu": 112073,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Vortex de sable »",
          "image": "assets/1044001/images/icon_diane_glove_skill_02__e85be37a204d6218.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "Réduit les [00D5FF]stats défensives[-] de @target.allEnemies\\nde 20 % pendant 2 tour(s).",
              "idJeu": 112081,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "Réduit les [00D5FF]stats défensives[-] de @target.allEnemies\\nde 30 % pendant 2 tour(s).",
              "idJeu": 112082,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "Réduit les [00D5FF]stats défensives[-] de @target.allEnemies\\nde 40 % pendant 3 tour(s).",
              "idJeu": 112083,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Onde terrestre »",
        "image": "assets/1044001/images/icon_diane_glove_special_01__a5fded6080b5c5c9.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 350 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 385.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 385 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 420.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 420 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 455.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 455 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 490.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 490 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 525.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 525 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Énergie terrestre",
        "image": "assets/1044001/images/icon_exclusive_skill_1044001__68adb75254dc3920.png",
        "description": "Augmente le taux de perforation d'un allié de [FFAE00]8 %[-] au début du tour allié s'il subit des dégâts.\\n[00D5FF](5 fois max.)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente le taux de perforation d'un allié de [FFAE00]8 %[-] au début du tour allié s'il subit des dégâts.\\n[00D5FF](5 fois max.)[-]"
          }
        ]
      },
      "idForme": 300301,
      "portrait": "assets/1044001/images/icon_hero_diane_0006_s__ce71249e758d1b28.png",
      "portraitVertical": "assets/1044001/images/icon_skin_diane_0006_l__69d5cd3ee9400af7.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1044001/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1044001/images/hero_illust_diane_1044001__4d0cd2ca934dacb7.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 560.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 300.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3175
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
            "valeur": 150.0,
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
            "valeur": 20.0,
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
            "valeur": 120.0,
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
          "nom": "« Poing de métal »",
          "image": "assets/1044001/images/icon_diane_glove_skill_01__6d26bf7d8d141485.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 220.0,
              "description": "Inflige des dégâts égaux à 220 % de l'attaque à @target.oneEnemy.",
              "idJeu": 112071,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 220.0,
              "description": "[00D5FF]Retire les postures[-] de @target.oneEnemy. Inflige des dégâts égaux à 220 % de l'attaque, puis [00D5FF]neutralise les compétences de posture[-] pendant 1 tour(s).",
              "idJeu": 112072,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 360.0,
              "description": "[00D5FF]Retire les postures[-] de @target.oneEnemy. Inflige des dégâts égaux à 360 % de l'attaque, puis [00D5FF]neutralise les compétences de posture[-] pendant 2 tour(s).",
              "idJeu": 112073,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Vortex de sable »",
          "image": "assets/1044001/images/icon_diane_glove_skill_02__e85be37a204d6218.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "Réduit les [00D5FF]stats défensives[-] de @target.allEnemies\\nde 20 % pendant 2 tour(s).",
              "idJeu": 112081,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "Réduit les [00D5FF]stats défensives[-] de @target.allEnemies\\nde 30 % pendant 2 tour(s).",
              "idJeu": 112082,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "Réduit les [00D5FF]stats défensives[-] de @target.allEnemies\\nde 40 % pendant 3 tour(s).",
              "idJeu": 112083,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Onde terrestre »",
        "image": "assets/1044001/images/icon_diane_glove_special_01__a5fded6080b5c5c9.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 350 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 385.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 385 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 420.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 420 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 455.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 455 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 490.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 490 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 525.0,
            "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 525 % de l'attaque sur @target.allEnemies.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Énergie terrestre",
        "image": "assets/1044001/images/icon_exclusive_skill_1044001__68adb75254dc3920.png",
        "description": "Augmente le taux de perforation d'un allié de [FFAE00]8 %[-] au début du tour allié s'il subit des dégâts.\\n[00D5FF](5 fois max.)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente le taux de perforation d'un allié de [FFAE00]8 %[-] au début du tour allié s'il subit des dégâts.\\n[00D5FF](5 fois max.)[-]"
          }
        ]
      },
      "idForme": 300306,
      "portrait": "assets/1044001/images/icon_hero_diane_0009_s__6dd657a16d3db8d5.png",
      "portraitVertical": "assets/1044001/images/icon_skin_diane_0009_l__b6c9d6f9e870ba43.png"
    }
  ],
  "costumes": [
    {
      "id": "3300310",
      "categorie": "Skin",
      "nom": "Vêtements créés par une fée",
      "image": null,
      "rarete": ""
    },
    {
      "id": "3300363",
      "categorie": "Skin",
      "nom": "Tenue de héros (orange)",
      "image": "assets/1044001/images/icon_skin_diane_0038_l__ded3c7f6f4294b73.png",
      "rarete": ""
    },
    {
      "id": "3300352",
      "categorie": "Skin",
      "nom": "Tenue du festival de la vague blanche",
      "image": "assets/1044001/images/icon_skin_diane_0018_l__c699a754ff36b008.png",
      "rarete": ""
    },
    {
      "id": "3300357",
      "categorie": "Skin",
      "nom": "Armure de chevalier très malveillant",
      "image": "assets/1044001/images/icon_skin_diane_0017_l__802eceda8a3abfe8.png",
      "rarete": ""
    },
    {
      "id": "3300353",
      "categorie": "Skin",
      "nom": "Héroïne de Liones",
      "image": "assets/1044001/images/icon_skin_diane_0005_l__64623f80e9c62493.png",
      "rarete": ""
    },
    {
      "id": "3300350",
      "categorie": "Skin",
      "nom": "Serveuse royale",
      "image": "assets/1044001/images/icon_skin_diane_0013_l__e308eae727e8e3da.png",
      "rarete": ""
    },
    {
      "id": "3300302",
      "categorie": "Skin",
      "nom": "Vêtements créés par un géant",
      "image": "assets/1044001/images/icon_skin_diane_0015_l__fc54c9d328a60cba.png",
      "rarete": ""
    },
    {
      "id": "3300355",
      "categorie": "Skin",
      "nom": "Maillot de bain à volant (pêche)",
      "image": "assets/1044001/images/icon_skin_diane_0014_l__a9c5672d9a2fd373.png",
      "rarete": ""
    },
    {
      "id": "3300301",
      "categorie": "Skin",
      "nom": "T-shirt à carreaux",
      "image": "assets/1044001/images/icon_skin_diane_0006_l__69d5cd3ee9400af7.png",
      "rarete": ""
    },
    {
      "id": "3300306",
      "categorie": "Skin",
      "nom": "Danseuse terrestre",
      "image": "assets/1044001/images/icon_skin_diane_0009_l__b6c9d6f9e870ba43.png",
      "rarete": ""
    },
    {
      "id": "3300311",
      "categorie": "Skin",
      "nom": "Armure de Chevalier Sacré",
      "image": "assets/1044001/images/icon_skin_diane_0008_l__ca44b70c0033e342.png",
      "rarete": ""
    },
    {
      "id": "3300312",
      "categorie": "Skin",
      "nom": "Armure ([b]Le Serpent de l'Envie[/b])",
      "image": "assets/1044001/images/icon_skin_diane_0011_l__84b838a7a4553073.png",
      "rarete": ""
    },
    {
      "id": "3300318",
      "categorie": "Skin",
      "nom": "Robe de promesse sincère",
      "image": "assets/1044001/images/icon_skin_diane_0029_l__67f6eab378f524a5.png",
      "rarete": ""
    },
    {
      "id": "3300361",
      "categorie": "Skin",
      "nom": "Tenue de combat hivernale",
      "image": "assets/1044001/images/icon_skin_diane_0022_l__1f2143e111430622.png",
      "rarete": ""
    },
    {
      "id": "3300319",
      "categorie": "Skin",
      "nom": "Uniforme vert d'acclamation",
      "image": "assets/1044001/images/icon_skin_diane_0030_l__b13fbd6c25460fb6.png",
      "rarete": ""
    },
    {
      "id": "3300359",
      "categorie": "Skin",
      "nom": "Érosion de l'ombre corrompue",
      "image": "assets/1044001/images/icon_skin_diane_0027_l__04e626dafc22705a.png",
      "rarete": ""
    },
    {
      "id": "9017037",
      "categorie": "Skin",
      "nom": "Héroïne de Liones",
      "image": "assets/1044001/images/icon_skin_diane_0005_l__64623f80e9c62493.png",
      "rarete": ""
    },
    {
      "id": "4044001",
      "categorie": "Head",
      "nom": "Mercenaire",
      "image": "assets/1044001/images/icon_head_diane_0001_l__d61d53de2c31377e.png",
      "rarete": ""
    },
    {
      "id": "4044008",
      "categorie": "Head",
      "nom": "Chapeau du festival de la vague blanche",
      "image": "assets/1044001/images/icon_head_diane_0505_l__6260dc8d675e9959.png",
      "rarete": ""
    },
    {
      "id": "4044010",
      "categorie": "Head",
      "nom": "Confrérie très malveillante",
      "image": "assets/1044001/images/icon_head_diane_0506_l__a735b6e4d09cee42.png",
      "rarete": ""
    },
    {
      "id": "4044009",
      "categorie": "Head",
      "nom": "Couettes (fleur)",
      "image": "assets/1044001/images/icon_head_diane_0014_l__5b671b6f63fbb7c7.png",
      "rarete": ""
    },
    {
      "id": "4044002",
      "categorie": "Head",
      "nom": "Lunettes rouges d'artisan",
      "image": "assets/1044001/images/icon_head_diane_0503_l__b1a005b6a8890a1f.png",
      "rarete": ""
    },
    {
      "id": "4044004",
      "categorie": "Head",
      "nom": "Queue-de-cheval de côté (lapin blanc)",
      "image": "assets/1044001/images/icon_head_diane_0502_l__ce4922e238d78ebc.png",
      "rarete": ""
    },
    {
      "id": "4044007",
      "categorie": "Head",
      "nom": "Serveuse à couettes",
      "image": "assets/1044001/images/icon_head_diane_0013_l__092c021421174118.png",
      "rarete": ""
    },
    {
      "id": "4044006",
      "categorie": "Head",
      "nom": "Artisanat",
      "image": "assets/1044001/images/icon_head_diane_0504_l__4736762a23c55819.png",
      "rarete": ""
    },
    {
      "id": "4044005",
      "categorie": "Head",
      "nom": "Danseuse terrestre",
      "image": "assets/1044001/images/icon_head_diane_0009_l__0178837f4d8416a8.png",
      "rarete": ""
    },
    {
      "id": "4044013",
      "categorie": "Head",
      "nom": "Tiare de promesse",
      "image": "assets/1044001/images/icon_head_diane_0029_l__487e6b34f1800cab.png",
      "rarete": ""
    },
    {
      "id": "4044015",
      "categorie": "Head",
      "nom": "Coiffe chaude",
      "image": "assets/1044001/images/hero_diane_head_0022_D__5b5987371258d968.png",
      "rarete": ""
    },
    {
      "id": "4044016",
      "categorie": "Head",
      "nom": "Chapeau vert d'acclamation",
      "image": "assets/1044001/images/icon_head_diane_0030_l__ede1ba437989975a.png",
      "rarete": ""
    },
    {
      "id": "4044003",
      "categorie": "Head",
      "nom": "Queue-de-cheval de côté (ruban jaune)",
      "image": "assets/1044001/images/icon_head_diane_0501_l__ca9551c94200a70d.png",
      "rarete": ""
    },
    {
      "id": "4044014",
      "categorie": "Head",
      "nom": "Carré de déesse",
      "image": "assets/1044001/images/icon_head_diane_0507_l__cd8ec2d0b4c345ac.png",
      "rarete": ""
    },
    {
      "id": "4044012",
      "categorie": "Head",
      "nom": "Malédiction de l'ombre corrompue",
      "image": "assets/1044001/images/icon_head_diane_0027_l__cad7e351dd9af80a.png",
      "rarete": ""
    },
    {
      "id": "4044017",
      "categorie": "Head",
      "nom": "Marque de la Terre",
      "image": "assets/1044001/images/icon_head_diane_0508_l__daa2c879785878c6.png",
      "rarete": ""
    }
  ],
  "relique": null
};