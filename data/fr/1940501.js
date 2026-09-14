window.fichePreparee={
  "nom": "Albedo",
  "designation": "[Diable blanc pur]",
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
  "presentation": "[Diable blanc pur] Albedo possède une compétence de posture dont les dégâts augmentent proportionnellement au nombre de bonus présents sur elle.",
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
      "legendeImage": "Illustration du personnage",
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
          "nom": "« Pilier de Muspellheim »",
          "image": "assets/1940501/images/icon_mit_white_ssr_type01_skill_01__cbc5ed121785f0bf.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts égaux à 200 % de l'attaque à @target.oneEnemy, puis réduit les dégâts infligés de 30 % pendant 1 tour(s).",
              "idJeu": 1002501,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts égaux à 300 % de l'attaque à @target.oneEnemy, puis réduit les dégâts infligés de 50 % pendant 1 tour(s).",
              "idJeu": 1002502,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts égaux à 500 % de l'attaque à @target.oneEnemy, puis réduit les dégâts infligés de 80 % pendant 2 tour(s).",
              "idJeu": 1002503,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Intouchable »",
          "image": "assets/1940501/images/icon_mit_white_ssr_type01_skill_02__b6a772c596221aec.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "Adopte une posture pour [00D5FF]provoquer[-] les ennemis pendant 1 tour(s), et inflige des dégâts d'[00D5FF]Amplification[-] égaux à 150 % de l'attaque en contre-attaque.\\n\\n[00D5FF]※Amplification : [FFAE00]+30 %[-] de dégâts supplémentaires par bonus sur soi.[-]",
              "idJeu": 1002511,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 250.0,
              "description": "Adopte une posture pour [00D5FF]provoquer[-] les ennemis pendant 2 tour(s), et inflige des dégâts d'[00D5FF]Amplification[-] égaux à 250 % de l'attaque en contre-attaque.\\n\\n[00D5FF]※Amplification : [FFAE00]+30 %[-] de dégâts supplémentaires par bonus sur soi.[-]",
              "idJeu": 1002512,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Adopte une posture pour [00D5FF]provoquer[-] les ennemis pendant 2 tour(s), et inflige des dégâts d'[00D5FF]Amplification[-] égaux à 450 % de l'attaque en contre-attaque.\\n\\n[00D5FF]※Amplification : [FFAE00]+30 %[-] de dégâts supplémentaires par bonus sur soi.[-]",
              "idJeu": 1002513,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Haine féroce »",
        "image": "assets/1940501/images/icon_mit_white_ssr_type01_special_01__cecca110281b614f.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]60 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 350 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+5 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 380.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]70 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 380 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+10 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 410.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]80 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 410 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+15 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 440.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]95 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 440 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+20 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 470.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]110 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 470 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+35 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 500.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]130 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 500 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+50 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Défense absolue",
        "image": "assets/1940501/images/icon_exclusive_skill_1940501__17dec7207e081451.png",
        "description": "Applique [00D5FF]Défense absolue[-] sur le héros au début du combat pendant [FFAE00]1 tour[-]. Augmente les stats de base du héros de [FFAE00]20 %[-] [00D5FF]lorsqu'il adopte une posture[-]. [00D5FF]Lorsque le héros est touché par une capacité pendant le tour de l'ennemi[-], augmente ses stats offensives de [FFAE00]10 %[-], [FFAE00]5 fois[-] max., pendant [FFAE00]3 tours[-]. [00D5FF]Lorsque le héros ne subit aucun dégât[-], augmente les dégâts subis par les ennemis de [FFAE00]40 %[-] pendant [FFAE00]1 tour[-] au début du tour allié.\\nDe plus, lorsque la [00D5FF]posture du héros est retirée[-], augmente les stats offensives de [00D5FF]tous les alliés de race inconnue[-] de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Augmente les stats de base du héros de [FFAE00]7 %[-] pour [FFAE00]chaque[-] [00D5FF]allié de race inconnue[-] en combat.\\n\\n[00D5FF]※Défense absolue : provoque les ennemis et réduit les dégâts subis de [FFAE00]50 %[-].[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Applique [00D5FF]Défense absolue[-] sur le héros au début du combat pendant [FFAE00]1 tour[-]. Augmente les stats de base du héros de [FFAE00]20 %[-] [00D5FF]lorsqu'il adopte une posture[-]. [00D5FF]Lorsque le héros est touché par une capacité pendant le tour de l'ennemi[-], augmente ses stats offensives de [FFAE00]10 %[-], [FFAE00]5 fois[-] max., pendant [FFAE00]3 tours[-]. [00D5FF]Lorsque le héros ne subit aucun dégât[-], augmente les dégâts subis par les ennemis de [FFAE00]40 %[-] pendant [FFAE00]1 tour[-] au début du tour allié.\\nDe plus, lorsque la [00D5FF]posture du héros est retirée[-], augmente les stats offensives de [00D5FF]tous les alliés de race inconnue[-] de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Augmente les stats de base du héros de [FFAE00]7 %[-] pour [FFAE00]chaque[-] [00D5FF]allié de race inconnue[-] en combat.\\n\\n[00D5FF]※Défense absolue : provoque les ennemis et réduit les dégâts subis de [FFAE00]50 %[-].[-]"
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
      "legendeImage": "Illustration du personnage",
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
          "nom": "« Pilier de Muspellheim »",
          "image": "assets/1940501/images/icon_mit_white_ssr_type01_skill_01__cbc5ed121785f0bf.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts égaux à 200 % de l'attaque à @target.oneEnemy, puis réduit les dégâts infligés de 30 % pendant 1 tour(s).",
              "idJeu": 1002501,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts égaux à 300 % de l'attaque à @target.oneEnemy, puis réduit les dégâts infligés de 50 % pendant 1 tour(s).",
              "idJeu": 1002502,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts égaux à 500 % de l'attaque à @target.oneEnemy, puis réduit les dégâts infligés de 80 % pendant 2 tour(s).",
              "idJeu": 1002503,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Intouchable »",
          "image": "assets/1940501/images/icon_mit_white_ssr_type01_skill_02__b6a772c596221aec.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "Adopte une posture pour [00D5FF]provoquer[-] les ennemis pendant 1 tour(s), et inflige des dégâts d'[00D5FF]Amplification[-] égaux à 150 % de l'attaque en contre-attaque.\\n\\n[00D5FF]※Amplification : [FFAE00]+30 %[-] de dégâts supplémentaires par bonus sur soi.[-]",
              "idJeu": 1002511,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 250.0,
              "description": "Adopte une posture pour [00D5FF]provoquer[-] les ennemis pendant 2 tour(s), et inflige des dégâts d'[00D5FF]Amplification[-] égaux à 250 % de l'attaque en contre-attaque.\\n\\n[00D5FF]※Amplification : [FFAE00]+30 %[-] de dégâts supplémentaires par bonus sur soi.[-]",
              "idJeu": 1002512,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Adopte une posture pour [00D5FF]provoquer[-] les ennemis pendant 2 tour(s), et inflige des dégâts d'[00D5FF]Amplification[-] égaux à 450 % de l'attaque en contre-attaque.\\n\\n[00D5FF]※Amplification : [FFAE00]+30 %[-] de dégâts supplémentaires par bonus sur soi.[-]",
              "idJeu": 1002513,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Haine féroce »",
        "image": "assets/1940501/images/icon_mit_white_ssr_type01_special_01__cecca110281b614f.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]60 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 350 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+5 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 380.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]70 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 380 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+10 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 410.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]80 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 410 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+15 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 440.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]95 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 440 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+20 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 470.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]110 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 470 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+35 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 500.0,
            "description": "Augmente les chances crit. du héros de [FFAE00]50 %[-] et ses dégâts crit. de [FFAE00]130 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Répression[-] égaux à 500 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Répression : [FFAE00]+50 %[-] de dégâts supplémentaires par effet de posture sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Défense absolue",
        "image": "assets/1940501/images/icon_exclusive_skill_1940501__17dec7207e081451.png",
        "description": "Applique [00D5FF]Défense absolue[-] sur le héros au début du combat pendant [FFAE00]1 tour[-]. Augmente les stats de base du héros de [FFAE00]20 %[-] [00D5FF]lorsqu'il adopte une posture[-]. [00D5FF]Lorsque le héros est touché par une capacité pendant le tour de l'ennemi[-], augmente ses stats offensives de [FFAE00]10 %[-], [FFAE00]5 fois[-] max., pendant [FFAE00]3 tours[-]. [00D5FF]Lorsque le héros ne subit aucun dégât[-], augmente les dégâts subis par les ennemis de [FFAE00]40 %[-] pendant [FFAE00]1 tour[-] au début du tour allié.\\nDe plus, lorsque la [00D5FF]posture du héros est retirée[-], augmente les stats offensives de [00D5FF]tous les alliés de race inconnue[-] de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Augmente les stats de base du héros de [FFAE00]7 %[-] pour [FFAE00]chaque[-] [00D5FF]allié de race inconnue[-] en combat.\\n\\n[00D5FF]※Défense absolue : provoque les ennemis et réduit les dégâts subis de [FFAE00]50 %[-].[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Applique [00D5FF]Défense absolue[-] sur le héros au début du combat pendant [FFAE00]1 tour[-]. Augmente les stats de base du héros de [FFAE00]20 %[-] [00D5FF]lorsqu'il adopte une posture[-]. [00D5FF]Lorsque le héros est touché par une capacité pendant le tour de l'ennemi[-], augmente ses stats offensives de [FFAE00]10 %[-], [FFAE00]5 fois[-] max., pendant [FFAE00]3 tours[-]. [00D5FF]Lorsque le héros ne subit aucun dégât[-], augmente les dégâts subis par les ennemis de [FFAE00]40 %[-] pendant [FFAE00]1 tour[-] au début du tour allié.\\nDe plus, lorsque la [00D5FF]posture du héros est retirée[-], augmente les stats offensives de [00D5FF]tous les alliés de race inconnue[-] de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Augmente les stats de base du héros de [FFAE00]7 %[-] pour [FFAE00]chaque[-] [00D5FF]allié de race inconnue[-] en combat.\\n\\n[00D5FF]※Défense absolue : provoque les ennemis et réduit les dégâts subis de [FFAE00]50 %[-].[-]"
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
      "nom": "Émissaire du Royaume Sorcier",
      "image": "assets/1940501/images/icon_skin_mit_white_0001_l__986b89c94b3cdf0b.png",
      "rarete": ""
    },
    {
      "id": "3323150",
      "categorie": "Skin",
      "nom": "Dignité de chancelière",
      "image": "assets/1940501/images/icon_skin_mit_white_0003_l__f62b46c8129e796f.png",
      "rarete": ""
    },
    {
      "id": "3323151",
      "categorie": "Skin",
      "nom": "Démon de la tentation",
      "image": "assets/1940501/images/icon_skin_mit_white_0004_l__0f74e3e606b28272.png",
      "rarete": ""
    },
    {
      "id": "3323152",
      "categorie": "Skin",
      "nom": "Demoiselle steampunk",
      "image": "assets/1940501/images/icon_skin_mit_white_0005_l__bce9c18c7cae354e.png",
      "rarete": ""
    },
    {
      "id": "3323153",
      "categorie": "Skin",
      "nom": "Reine de l'aube sans lune",
      "image": "assets/1940501/images/icon_skin_mit_white_0006_l__e3a323010518e997.png",
      "rarete": ""
    },
    {
      "id": "3323102",
      "categorie": "Skin",
      "nom": "Diable blanc pur",
      "image": "assets/1940501/images/icon_skin_mit_white_0002_l__c0c7d4a34fb0ebba.png",
      "rarete": ""
    },
    {
      "id": "875701",
      "categorie": "Weapon",
      "nom": "Bâton d'émissaire",
      "image": "assets/1940501/images/icon_weapon_mit_white_0001_l__454a49f54c2ba97d.png",
      "rarete": ""
    },
    {
      "id": "875702",
      "categorie": "Weapon",
      "nom": "Bâton-lanterne bleu",
      "image": "assets/1940501/images/icon_weapon_mit_white_0003_l__c719f20c182890a2.png",
      "rarete": ""
    },
    {
      "id": "875703",
      "categorie": "Weapon",
      "nom": "Bâton de la tentation",
      "image": "assets/1940501/images/icon_weapon_mit_white_0004_l__1537e4d63df08bea.png",
      "rarete": ""
    },
    {
      "id": "875704",
      "categorie": "Weapon",
      "nom": "Bâton steampunk",
      "image": "assets/1940501/images/icon_weapon_mit_white_0005_l__4a5b050bd524030e.png",
      "rarete": ""
    },
    {
      "id": "875706",
      "categorie": "Weapon",
      "nom": "Sceptre de l'aube sans lune",
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
      "nom": "Cornes de succube",
      "image": "assets/1940501/images/icon_head_mit_white_0001_l__069f16189aa5f06c.png",
      "rarete": ""
    },
    {
      "id": "4004502",
      "categorie": "Head",
      "nom": "Queue-de-cheval naturelle",
      "image": "assets/1940501/images/icon_head_mit_white_0003_l__b2210c9d7dc3809d.png",
      "rarete": ""
    },
    {
      "id": "4004503",
      "categorie": "Head",
      "nom": "Charme mortel",
      "image": "assets/1940501/images/icon_head_mit_white_0004_l__714e6279389cb1f6.png",
      "rarete": ""
    },
    {
      "id": "4004504",
      "categorie": "Head",
      "nom": "Chapeau steampunk",
      "image": "assets/1940501/images/icon_head_mit_white_0005_l__a41d057b3ebcab7d.png",
      "rarete": ""
    },
    {
      "id": "4004505",
      "categorie": "Head",
      "nom": "Ailes de l'aube sans lune",
      "image": "assets/1940501/images/icon_head_mit_white_0006_l__2ee64104b9d42b09.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Ginnungagap",
    "image": "assets/1940501/images/icon_weapon_mit_white_0551_s__e76541ab7b070c1a.png",
    "description": "Relique sacrée d'Albedo (arme).\\n[DC143C]Ginnungagap est un objet universel auquel Albedo tient beaucoup. Elle le garde toujours auprès d'elle pour éviter d'être contrôlée, comme c'est arrivé à Shalltear.[-]",
    "passif": {
      "nom": "Ginnungagap",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Réduit les dégâts subis par le héros de [FFAE00]8 %[-] pour [FFAE00]chaque[-] bonus sur le héros.\\n[00D5FF]([FFAE00]5 fois[-] max.)[-]"
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
        "nom": "Or",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Source dimensionnelle",
        "image": "assets/commun/icon_item_special_craft_material_101__b4ac18f4f09baed3.png",
        "quantite": 15
      },
      {
        "nom": "Présage de la faille",
        "image": "assets/commun/icon_item_special_craft_material_102__70074ac688bf8add.png",
        "quantite": 30
      },
      {
        "nom": "Essence magique instable",
        "image": "assets/commun/icon_item_special_craft_material_103__cd504915f5791f03.png",
        "quantite": 80
      }
    ],
    "provenance": "Antre des créatures"
  }
};