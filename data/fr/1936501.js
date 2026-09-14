window.fichePreparee={
  "nom": "Roi des démons tyrannique",
  "designation": "« Le Souverain »",
  "titre": "Roi des démons tyrannique",
  "idJeu": "1936501",
  "attribut": {
    "nom": "@attribute.5",
    "icone": "assets/commun/icon_filter_attribute_05__8b5613471712850c.png",
    "couleur": "#bf7ee9",
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
  "caracteristiques": [],
  "portrait": "assets/1936501/images/icon_hero_demon_king_human_0002_s__cf96ed239c22f52c.png",
  "rareteParDefaut": "UR",
  "presentation": "Roi des démons tyrannique « Le Souverain » possède une compétence qui peut infliger de gros dégâts lorsque son attaque est élevée.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1936501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1936501/images/hero_illust_demon_king_human_1936501__b6573cde034f2bba.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 550.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 380.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7200.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4654
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 100.0,
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
            "valeur": 80.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 75.0,
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
          "nom": "« Silence »",
          "image": "assets/1936501/images/icon_demon_king_human_ssr_type01_skill_01__80c2a61c71c34e40.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts d'[00D5FF]Éradication[-] égaux à 200 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Éradication : [FFAE00]+[-]60 % d'attaque lorsque le héros utilise une compétence.\\nChances crit. [FFAE00]x2[-].[-]",
              "idJeu": 1002001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts d'[00D5FF]Éradication[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Éradication : [FFAE00]+[-]60 % d'attaque lorsque le héros utilise une compétence.\\nChances crit. [FFAE00]x2[-].[-]",
              "idJeu": 1002002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts d'[00D5FF]Éradication[-] égaux à 500 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Éradication : [FFAE00]+[-]60 % d'attaque lorsque le héros utilise une compétence.\\nChances crit. [FFAE00]x2[-].[-]",
              "idJeu": 1002003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Épée de réclusion »",
          "image": "assets/1936501/images/icon_demon_king_human_ssr_type01_skill_02__cada595c98c97e34.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 140.0,
              "description": "Inflige des dégâts égaux à 140 % de l'attaque à @target.allEnemies. Applique [00D5FF]Marque de la mort[-] pendant 1 tour(s).\\n\\n[00D5FF]※Marque de la mort : inhibe les stats liées aux soins.\\n[FFAE00]-[-]40 % de résistance crit. et de défense crit.[-]",
              "idJeu": 1002011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 210.0,
              "description": "Inflige des dégâts égaux à 210 % de l'attaque à @target.allEnemies. Applique [00D5FF]Marque de la mort[-] pendant 1 tour(s).\\n\\n[00D5FF]※Marque de la mort : inhibe les stats liées aux soins.\\n[FFAE00]-[-]40 % de résistance crit. et de défense crit.[-]",
              "idJeu": 1002012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 350.0,
              "description": "Inflige des dégâts égaux à 350 % de l'attaque à @target.allEnemies. Applique [00D5FF]Marque de la mort[-] pendant 2 tour(s).\\n\\n[00D5FF]※Marque de la mort : inhibe les stats liées aux soins.\\n[FFAE00]-[-]40 % de résistance crit. et de défense crit.[-]",
              "idJeu": 1002013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Incursion »",
        "image": "assets/1936501/images/icon_demon_king_human_ssr_type01_special_01__7b8ba6b09e95fbf9.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 500.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]10 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 500 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 1[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 1[-] : neutralise les compétences de bonus et de malus.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 550.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]15 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 550 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 1[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 1[-] : neutralise les compétences de bonus et de malus.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 600.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 600 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 2[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 2[-] : neutralise les compétences de bonus, de malus et d'attaque.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 650.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 650 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 2[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 2[-] : neutralise les compétences de bonus, de malus et d'attaque.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 700.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]40 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 700 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 3[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 3[-] : neutralise toutes les compétences, sauf les coups ultimes.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 750.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 750 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 4[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 4[-] : neutralise toutes les compétences, y compris les coups ultimes.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Souveraineté",
        "image": "assets/1936501/images/icon_exclusive_skill_1936501__90b9edc31732db52.png",
        "description": "Au début du combat, applique [00D5FF]Souveraineté[-] sur soi pendant [FFAE00]2 tours[-] et octroie [00D5FF]Rétrocession[-] aux [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-]. Augmente les stats offensives du héros de [FFAE00]18 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Rétrocession[-] retiré au début du tour allié. De plus, lorsque le héros est [00D5FF]présent en combat[-], tous les [00D5FF]effets de Commandements sont scellés[-], et pour [FFAE00]chaque[-] [00D5FF]allié avec un Commandement[-] mort, augmente l'attaque du héros de [FFAE00]30 %[-].\\n\\n[00D5FF]※Souveraineté : chaque compétence ne peut pas faire perdre plus de [FFAE00]50 %[-] des PV max. du héros pendant le tour ennemi.\\nLorsque l'effet est retiré, retire également les malus du héros, puis augmente toutes ses stats de [FFAE00]20 %[-] et augmente le rang de ses compétences.\\n[00D5FF]※Rétrocession : [FFAE00]-20 %[-] de dégâts subis.[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Au début du combat, applique [00D5FF]Souveraineté[-] sur soi pendant [FFAE00]2 tours[-] et octroie [00D5FF]Rétrocession[-] aux [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-]. Augmente les stats offensives du héros de [FFAE00]18 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Rétrocession[-] retiré au début du tour allié. De plus, lorsque le héros est [00D5FF]présent en combat[-], tous les [00D5FF]effets de Commandements sont scellés[-], et pour [FFAE00]chaque[-] [00D5FF]allié avec un Commandement[-] mort, augmente l'attaque du héros de [FFAE00]30 %[-].\\n\\n[00D5FF]※Souveraineté : chaque compétence ne peut pas faire perdre plus de [FFAE00]50 %[-] des PV max. du héros pendant le tour ennemi.\\nLorsque l'effet est retiré, retire également les malus du héros, puis augmente toutes ses stats de [FFAE00]20 %[-] et augmente le rang de ses compétences.\\n[00D5FF]※Rétrocession : [FFAE00]-20 %[-] de dégâts subis.[-]"
          }
        ]
      },
      "idForme": 315501,
      "portrait": "assets/1936501/images/icon_hero_demon_king_human_0001_s__90b917eb09b4786e.png",
      "portraitVertical": "assets/1936501/images/icon_skin_demon_king_human_0001_l__78cbc2b42d0799ab.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1936501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1936501/images/hero_illust_demon_king_human_1936501__b6573cde034f2bba.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 870.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 450.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8800.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5350
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 100.0,
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
            "valeur": 80.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 75.0,
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
          "nom": "« Silence »",
          "image": "assets/1936501/images/icon_demon_king_human_ssr_type01_skill_01__80c2a61c71c34e40.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts d'[00D5FF]Éradication[-] égaux à 200 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Éradication : [FFAE00]+[-]60 % d'attaque lorsque le héros utilise une compétence.\\nChances crit. [FFAE00]x2[-].[-]",
              "idJeu": 1002001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts d'[00D5FF]Éradication[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Éradication : [FFAE00]+[-]60 % d'attaque lorsque le héros utilise une compétence.\\nChances crit. [FFAE00]x2[-].[-]",
              "idJeu": 1002002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts d'[00D5FF]Éradication[-] égaux à 500 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Éradication : [FFAE00]+[-]60 % d'attaque lorsque le héros utilise une compétence.\\nChances crit. [FFAE00]x2[-].[-]",
              "idJeu": 1002003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Épée de réclusion »",
          "image": "assets/1936501/images/icon_demon_king_human_ssr_type01_skill_02__cada595c98c97e34.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 140.0,
              "description": "Inflige des dégâts égaux à 140 % de l'attaque à @target.allEnemies. Applique [00D5FF]Marque de la mort[-] pendant 1 tour(s).\\n\\n[00D5FF]※Marque de la mort : inhibe les stats liées aux soins.\\n[FFAE00]-[-]40 % de résistance crit. et de défense crit.[-]",
              "idJeu": 1002011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 210.0,
              "description": "Inflige des dégâts égaux à 210 % de l'attaque à @target.allEnemies. Applique [00D5FF]Marque de la mort[-] pendant 1 tour(s).\\n\\n[00D5FF]※Marque de la mort : inhibe les stats liées aux soins.\\n[FFAE00]-[-]40 % de résistance crit. et de défense crit.[-]",
              "idJeu": 1002012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 350.0,
              "description": "Inflige des dégâts égaux à 350 % de l'attaque à @target.allEnemies. Applique [00D5FF]Marque de la mort[-] pendant 2 tour(s).\\n\\n[00D5FF]※Marque de la mort : inhibe les stats liées aux soins.\\n[FFAE00]-[-]40 % de résistance crit. et de défense crit.[-]",
              "idJeu": 1002013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Incursion »",
        "image": "assets/1936501/images/icon_demon_king_human_ssr_type01_special_01__7b8ba6b09e95fbf9.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 500.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]10 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 500 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 1[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 1[-] : neutralise les compétences de bonus et de malus.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 550.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]15 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 550 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 1[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 1[-] : neutralise les compétences de bonus et de malus.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 600.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 600 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 2[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 2[-] : neutralise les compétences de bonus, de malus et d'attaque.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 650.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 650 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 2[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 2[-] : neutralise les compétences de bonus, de malus et d'attaque.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 700.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]40 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 700 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 3[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 3[-] : neutralise toutes les compétences, sauf les coups ultimes.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 750.0,
            "description": "Réduit les stats défensives de tous les ennemis de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts égaux à 750 % de l'attaque et applique [00D5FF]Trou noir[-] [FFAE00]niv. 4[-] à @target.allEnemies pendant [FFAE00]2 tours[-].\\n\\n[00D5FF]※Trou noir [FFAE00]niv. 4[-] : neutralise toutes les compétences, y compris les coups ultimes.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Souveraineté",
        "image": "assets/1936501/images/icon_exclusive_skill_1936501__90b9edc31732db52.png",
        "description": "Au début du combat, applique [00D5FF]Souveraineté[-] sur soi pendant [FFAE00]2 tours[-] et octroie [00D5FF]Rétrocession[-] aux [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-]. Augmente les stats offensives du héros de [FFAE00]18 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Rétrocession[-] retiré au début du tour allié. De plus, lorsque le héros est [00D5FF]présent en combat[-], tous les [00D5FF]effets de Commandements sont scellés[-], et pour [FFAE00]chaque[-] [00D5FF]allié avec un Commandement[-] mort, augmente l'attaque du héros de [FFAE00]30 %[-].\\n\\n[00D5FF]※Souveraineté : chaque compétence ne peut pas faire perdre plus de [FFAE00]50 %[-] des PV max. du héros pendant le tour ennemi.\\nLorsque l'effet est retiré, retire également les malus du héros, puis augmente toutes ses stats de [FFAE00]20 %[-] et augmente le rang de ses compétences.\\n[00D5FF]※Rétrocession : [FFAE00]-20 %[-] de dégâts subis.[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Au début du combat, applique [00D5FF]Souveraineté[-] sur soi pendant [FFAE00]2 tours[-] et octroie [00D5FF]Rétrocession[-] aux [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-]. Augmente les stats offensives du héros de [FFAE00]18 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Rétrocession[-] retiré au début du tour allié. De plus, lorsque le héros est [00D5FF]présent en combat[-], tous les [00D5FF]effets de Commandements sont scellés[-], et pour [FFAE00]chaque[-] [00D5FF]allié avec un Commandement[-] mort, augmente l'attaque du héros de [FFAE00]30 %[-].\\n\\n[00D5FF]※Souveraineté : chaque compétence ne peut pas faire perdre plus de [FFAE00]50 %[-] des PV max. du héros pendant le tour ennemi.\\nLorsque l'effet est retiré, retire également les malus du héros, puis augmente toutes ses stats de [FFAE00]20 %[-] et augmente le rang de ses compétences.\\n[00D5FF]※Rétrocession : [FFAE00]-20 %[-] de dégâts subis.[-]"
          }
        ]
      },
      "idForme": 315502,
      "portrait": "assets/1936501/images/icon_hero_demon_king_human_0002_s__cf96ed239c22f52c.png",
      "portraitVertical": "assets/1936501/images/icon_skin_demon_king_human_0002_l__020554852457910a.png"
    }
  ],
  "costumes": [
    {
      "id": "3315501",
      "categorie": "Skin",
      "nom": "Père au cœur froid",
      "image": null,
      "rarete": ""
    },
    {
      "id": "3315550",
      "categorie": "Skin",
      "nom": "Bête noire",
      "image": "assets/1936501/images/icon_skin_demon_king_human_0003_l__e36c2076062c316f.png",
      "rarete": ""
    },
    {
      "id": "3315551",
      "categorie": "Skin",
      "nom": "Conquérant impitoyable",
      "image": "assets/1936501/images/icon_skin_demon_king_human_0004_l__81a73909bb440de3.png",
      "rarete": ""
    },
    {
      "id": "3315552",
      "categorie": "Skin",
      "nom": "Empereur",
      "image": "assets/1936501/images/icon_skin_demon_king_human_0005_l__5692dd299d0851cb.png",
      "rarete": ""
    },
    {
      "id": "3315554",
      "categorie": "Skin",
      "nom": "Dévoreur abyssal",
      "image": "assets/1936501/images/icon_skin_demon_king_human_0007_l__48fc9fc55b369b19.png",
      "rarete": ""
    },
    {
      "id": "3315553",
      "categorie": "Skin",
      "nom": "Maître d'escrime",
      "image": "assets/1936501/images/icon_skin_demon_king_human_0006_l__85535d9ea6684b51.png",
      "rarete": ""
    },
    {
      "id": "3315502",
      "categorie": "Skin",
      "nom": "Mal absolu",
      "image": "assets/1936501/images/icon_skin_demon_king_human_0002_l__020554852457910a.png",
      "rarete": ""
    },
    {
      "id": "875201",
      "categorie": "Weapon",
      "nom": "Épée du roi des démons",
      "image": "assets/1936501/images/icon_weapon_demon_king_human_0001_l__61980110edd6b27d.png",
      "rarete": ""
    },
    {
      "id": "875202",
      "categorie": "Weapon",
      "nom": "Croc de bête",
      "image": "assets/1936501/images/icon_weapon_demon_king_human_0003_l__2a7084762be2aa84.png",
      "rarete": ""
    },
    {
      "id": "875203",
      "categorie": "Weapon",
      "nom": "Lame de conquérant",
      "image": "assets/1936501/images/icon_weapon_demon_king_human_0004_l__b5045b8c6b4e709b.png",
      "rarete": ""
    },
    {
      "id": "875204",
      "categorie": "Weapon",
      "nom": "Épée précieuse",
      "image": "assets/1936501/images/icon_weapon_demon_king_human_0005_l__2235b478e2551551.png",
      "rarete": ""
    },
    {
      "id": "875206",
      "categorie": "Weapon",
      "nom": "Croc venimeux de Nídhögg",
      "image": "assets/1936501/images/icon_weapon_demon_king_human_0007_l__96b20f7813c6776b.png",
      "rarete": ""
    },
    {
      "id": "875205",
      "categorie": "Weapon",
      "nom": "Épée d'escrime",
      "image": "assets/1936501/images/icon_weapon_demon_king_human_0006_l__502a11bd0f8ef421.png",
      "rarete": ""
    },
    {
      "id": "875207",
      "categorie": "Weapon",
      "nom": "Épée maudite de Fáfnir",
      "image": "assets/1936501/images/icon_weapon_demon_king_human_0001_l__61980110edd6b27d.png",
      "rarete": ""
    },
    {
      "id": "4003901",
      "categorie": "Head",
      "nom": "Coiffure simple",
      "image": "assets/1936501/images/icon_head_demon_king_human_0001_l__058339727bec3721.png",
      "rarete": ""
    },
    {
      "id": "4003902",
      "categorie": "Head",
      "nom": "Coiffure sauvage",
      "image": "assets/1936501/images/icon_head_demon_king_human_0003_l__62733e2973e76fb2.png",
      "rarete": ""
    },
    {
      "id": "4003903",
      "categorie": "Head",
      "nom": "Laurier de conquérant",
      "image": "assets/1936501/images/icon_head_demon_king_human_0004_l__1c8ebdc78cb03151.png",
      "rarete": ""
    },
    {
      "id": "4003904",
      "categorie": "Head",
      "nom": "Couronne impériale",
      "image": "assets/1936501/images/icon_head_demon_king_human_0005_l__04cbb0f25d06668e.png",
      "rarete": ""
    },
    {
      "id": "4003907",
      "categorie": "Head",
      "nom": "Corne abyssale",
      "image": "assets/1936501/images/icon_head_demon_king_human_0007_l__a7c2957a410d764f.png",
      "rarete": ""
    },
    {
      "id": "4003906",
      "categorie": "Head",
      "nom": "Masque d'escrime",
      "image": "assets/1936501/images/icon_head_demon_king_human_0006_l__dd9b7e3289748afc.png",
      "rarete": ""
    },
    {
      "id": "4003905",
      "categorie": "Head",
      "nom": "Coiffure de Zeldris",
      "image": "assets/1936501/images/icon_head_demon_king_human_0501_l__15a48c4483020728.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Épée maudite de Fáfnir",
    "image": "assets/1936501/images/icon_weapon_demon_king_human_0551_s__5daaf0bb5b1d8c5f.png",
    "description": "Relique sacrée de Roi des démons tyrannique (arme).\\n[DC143C]Cette épée a été maudite par Fáfnir. Elle est cachée parmi les trésors de Fáfnir, entourée d'une malédiction empêchant quiconque de la toucher.[-]",
    "passif": {
      "nom": "Épée maudite de Fáfnir",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Augmente les stats offensives du héros de [FFAE00]10 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Rétrocession[-] présent sur les alliés.\\n\\nPour [FFAE00]chaque[-] effet [00D5FF]Rétrocession[-] retiré, restaure [FFAE00]10 %[-] des PV max. du héros.\\n\\nLorsqu'un effet [00D5FF]Rétrocession[-] est retiré du héros, réduit les dégâts subis par le héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-]."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 460.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 350.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 3800.0
      }
    ],
    "materiaux": [
      {
        "nom": "Or",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Source du cycle",
        "image": "assets/commun/icon_craft_costume_rare_material_05__19b8fbecda8796b5.png",
        "quantite": 15
      },
      {
        "nom": "Fruit d'Yggdrasil",
        "image": "assets/commun/icon_craft_costume_material_09__a8fd9d110158c0cc.png",
        "quantite": 30
      },
      {
        "nom": "Essence magique noire",
        "image": "assets/commun/icon_craft_costume_key_material_02__c45289b47672f7a7.png",
        "quantite": 80
      },
      {
        "nom": "Ténacité de Völund",
        "image": "assets/commun/icon_craft_costume_material_12__931f89e710e00615.png",
        "quantite": 80
      }
    ],
    "provenance": "Ratatoskr"
  }
};