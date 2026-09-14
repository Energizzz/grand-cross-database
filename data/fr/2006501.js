window.fichePreparee={
  "nom": "Tioré, princesse cadette",
  "designation": "[Fille du roi des fées]",
  "titre": "Tioré, princesse cadette",
  "idJeu": "2006501",
  "attribut": {
    "nom": "@attribute.3",
    "icone": "assets/commun/icon_filter_attribute_03__4980bb489ce93431.png",
    "couleur": "#50b8ea",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.4",
      "@race.2"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_04__48547a3ab95fac10.png",
      "assets/commun/icon_filter_kind_02__4320d5376444ecd0.png"
    ]
  },
  "caracteristiques": [],
  "portrait": "assets/2006501/images/icon_hero_4koa_tiara_0002_s__175dd4e1c68d0fda.png",
  "rareteParDefaut": "UR",
  "presentation": "[Fille du roi des fées] Tioré, princesse cadette possède une compétence qui peut infliger de gros dégâts aux ennemis qui souffrent de malus.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/2006501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/2006501/images/hero_illust_4koa_tiara_2006501__6360c95d6cf666a8.png",
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
            "valeur": 400.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7200.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4895
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 95.0,
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
            "valeur": 95.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 90.0,
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
          "nom": "« Projection de feu »",
          "image": "assets/2006501/images/icon_4koa_tiara_ssr_type01_skill_01_02__13c5bd8ffc0dc773.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 140.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 140 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 1008501,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 170.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 170 % de l'attaque à @target.allEnemies, puis applique [00D5FF]Neutralisation des attaques de groupe[-] pendant 1 tour(s).\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 1008502,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 230.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 230 % de l'attaque à @target.allEnemies, puis applique [00D5FF]Neutralisation de l'attaque[-] pendant 1 tour(s).\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 1008503,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Soin de renard »",
          "image": "assets/2006501/images/icon_4koa_tiara_ssr_type01_skill_02__25cd65310a0b55ba.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "[00D5FF]Retire les malus[-] de @target.allAllies, soigne à hauteur de 150 % de l'attaque, puis octroie [00D5FF]Restauration[-] pendant 2 tour(s).\\n\\n[00D5FF]※Restauration : récupération supplémentaire égale à 60 % des PV récupérés au début du tour.[-]",
              "idJeu": 1008511,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "[00D5FF]Retire les malus[-] de @target.allAllies, soigne à hauteur de 200 % de l'attaque, puis octroie [00D5FF]Restauration[-] pendant 2 tour(s).\\n\\n[00D5FF]※Restauration : récupération supplémentaire égale à 60 % des PV récupérés au début du tour.[-]",
              "idJeu": 1008512,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "[00D5FF]Retire les malus[-] de @target.allAllies, soigne à hauteur de 300 % de l'attaque, puis octroie [00D5FF]Restauration[-] pendant 2 tour(s).\\n\\n[00D5FF]※Restauration : récupération supplémentaire égale à 60 % des PV récupérés au début du tour.[-]",
              "idJeu": 1008513,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Flammes du Lion »",
        "image": "assets/2006501/images/icon_4koa_tiara_ssr_type01_special_01__a0ffcd3378903ef5.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 420.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 420 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 462.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 462 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 504.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 504 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 546.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 546 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 588.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 588 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 630.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 630 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Princesse cadette",
        "image": "assets/2006501/images/icon_exclusive_skill_2006501__275d31a7f84cd980.png",
        "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats de base de [FFAE00]5 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : fées, [Four Knights of the Apocalypse][-][/i]\\n\\n[00D5FF]Augmente le rang des compétences[-] des [00D5FF]alliés concernés[-] au début du combat. ([FFAE00]Une fois[-] max.)\\n[i][C0C0C0](Hors compétences d'attaque de malus)[-][/i]\\n\\nLorsqu'un [00D5FF]ennemi entre en combat depuis l'emplacement secondaire[-], réduit ses stats offensives de [FFAE00]50 %[-] pendant [FF8000]2 tours[-]. Lorsqu'un ennemi dont les stats offensives sont réduites par la compétence unique du héros utilise une attaque pendant son tour, réduit le coefficient de la compétence de [FF8000]80 %[-].\\n\\nLorsque la posture d'un [00D5FF]allié concerné[-] est retirée ou que le héros [00D5FF]utilise une compétence de récupération[-] pour retirer des malus, octroie [00D5FF][FFAE00]40 %[-] de suppression des dégâts subis[-] aux [00D5FF]alliés concernés[-] pendant [FFAE00]1 tour[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats de base de [FFAE00]5 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : fées, [Four Knights of the Apocalypse][-][/i]\\n\\n[00D5FF]Augmente le rang des compétences[-] des [00D5FF]alliés concernés[-] au début du combat. ([FFAE00]Une fois[-] max.)\\n[i][C0C0C0](Hors compétences d'attaque de malus)[-][/i]\\n\\nLorsqu'un [00D5FF]ennemi entre en combat depuis l'emplacement secondaire[-], réduit ses stats offensives de [FFAE00]50 %[-] pendant [FF8000]1 tour[-]. Lorsqu'un ennemi dont les stats offensives sont réduites par la compétence unique du héros utilise une attaque pendant son tour, réduit le coefficient de la compétence de [FF8000]50 %[-].\\n\\nLorsque la posture d'un [00D5FF]allié concerné[-] est retirée ou que le héros [00D5FF]utilise une compétence de récupération[-] pour retirer des malus, octroie [00D5FF][FFAE00]40 %[-] de suppression des dégâts subis[-] aux [00D5FF]alliés concernés[-] pendant [FFAE00]1 tour[-]."
          },
          {
            "niveau": 2,
            "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats de base de [FFAE00]5 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : fées, [Four Knights of the Apocalypse][-][/i]\\n\\n[00D5FF]Augmente le rang des compétences[-] des [00D5FF]alliés concernés[-] au début du combat. ([FFAE00]Une fois[-] max.)\\n[i][C0C0C0](Hors compétences d'attaque de malus)[-][/i]\\n\\nLorsqu'un [00D5FF]ennemi entre en combat depuis l'emplacement secondaire[-], réduit ses stats offensives de [FFAE00]50 %[-] pendant [FF8000]1 tour[-]. Lorsqu'un ennemi dont les stats offensives sont réduites par la compétence unique du héros utilise une attaque pendant son tour, réduit le coefficient de la compétence de [FF8000]80 %[-].\\n\\nLorsque la posture d'un [00D5FF]allié concerné[-] est retirée ou que le héros [00D5FF]utilise une compétence de récupération[-] pour retirer des malus, octroie [00D5FF][FFAE00]40 %[-] de suppression des dégâts subis[-] aux [00D5FF]alliés concernés[-] pendant [FFAE00]1 tour[-]."
          },
          {
            "niveau": 6,
            "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats de base de [FFAE00]5 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : fées, [Four Knights of the Apocalypse][-][/i]\\n\\n[00D5FF]Augmente le rang des compétences[-] des [00D5FF]alliés concernés[-] au début du combat. ([FFAE00]Une fois[-] max.)\\n[i][C0C0C0](Hors compétences d'attaque de malus)[-][/i]\\n\\nLorsqu'un [00D5FF]ennemi entre en combat depuis l'emplacement secondaire[-], réduit ses stats offensives de [FFAE00]50 %[-] pendant [FF8000]2 tours[-]. Lorsqu'un ennemi dont les stats offensives sont réduites par la compétence unique du héros utilise une attaque pendant son tour, réduit le coefficient de la compétence de [FF8000]80 %[-].\\n\\nLorsque la posture d'un [00D5FF]allié concerné[-] est retirée ou que le héros [00D5FF]utilise une compétence de récupération[-] pour retirer des malus, octroie [00D5FF][FFAE00]40 %[-] de suppression des dégâts subis[-] aux [00D5FF]alliés concernés[-] pendant [FFAE00]1 tour[-]."
          }
        ]
      },
      "idForme": 329401,
      "portrait": "assets/2006501/images/icon_hero_4koa_tiara_0001_s__01d7779d054bb40d.png",
      "portraitVertical": "assets/2006501/images/icon_skin_4koa_tiara_0001_l__e0095b66999d9abe.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/2006501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/2006501/images/hero_illust_4koa_tiara_2006501__6360c95d6cf666a8.png",
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
            "valeur": 9000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5615
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 95.0,
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
            "valeur": 95.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 90.0,
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
          "nom": "« Projection de feu »",
          "image": "assets/2006501/images/icon_4koa_tiara_ssr_type01_skill_01_02__13c5bd8ffc0dc773.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 140.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 140 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 1008501,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 170.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 170 % de l'attaque à @target.allEnemies, puis applique [00D5FF]Neutralisation des attaques de groupe[-] pendant 1 tour(s).\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 1008502,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 230.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 230 % de l'attaque à @target.allEnemies, puis applique [00D5FF]Neutralisation de l'attaque[-] pendant 1 tour(s).\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 1008503,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Soin de renard »",
          "image": "assets/2006501/images/icon_4koa_tiara_ssr_type01_skill_02__25cd65310a0b55ba.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "[00D5FF]Retire les malus[-] de @target.allAllies, soigne à hauteur de 150 % de l'attaque, puis octroie [00D5FF]Restauration[-] pendant 2 tour(s).\\n\\n[00D5FF]※Restauration : récupération supplémentaire égale à 60 % des PV récupérés au début du tour.[-]",
              "idJeu": 1008511,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "[00D5FF]Retire les malus[-] de @target.allAllies, soigne à hauteur de 200 % de l'attaque, puis octroie [00D5FF]Restauration[-] pendant 2 tour(s).\\n\\n[00D5FF]※Restauration : récupération supplémentaire égale à 60 % des PV récupérés au début du tour.[-]",
              "idJeu": 1008512,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "[00D5FF]Retire les malus[-] de @target.allAllies, soigne à hauteur de 300 % de l'attaque, puis octroie [00D5FF]Restauration[-] pendant 2 tour(s).\\n\\n[00D5FF]※Restauration : récupération supplémentaire égale à 60 % des PV récupérés au début du tour.[-]",
              "idJeu": 1008513,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Flammes du Lion »",
        "image": "assets/2006501/images/icon_4koa_tiara_ssr_type01_special_01__a0ffcd3378903ef5.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 420.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 420 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 462.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 462 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 504.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 504 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 546.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 546 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 588.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 588 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 630.0,
            "description": "[00D5FF]Retire les bonus et les postures[-] de @target.allEnemies et inflige des dégâts de [00D5FF]Déluge[-] égaux à 630 % de l'attaque.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Princesse cadette",
        "image": "assets/2006501/images/icon_exclusive_skill_2006501__275d31a7f84cd980.png",
        "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats de base de [FFAE00]5 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : fées, [Four Knights of the Apocalypse][-][/i]\\n\\n[00D5FF]Augmente le rang des compétences[-] des [00D5FF]alliés concernés[-] au début du combat. ([FFAE00]Une fois[-] max.)\\n[i][C0C0C0](Hors compétences d'attaque de malus)[-][/i]\\n\\nLorsqu'un [00D5FF]ennemi entre en combat depuis l'emplacement secondaire[-], réduit ses stats offensives de [FFAE00]50 %[-] pendant [FF8000]2 tours[-]. Lorsqu'un ennemi dont les stats offensives sont réduites par la compétence unique du héros utilise une attaque pendant son tour, réduit le coefficient de la compétence de [FF8000]80 %[-].\\n\\nLorsque la posture d'un [00D5FF]allié concerné[-] est retirée ou que le héros [00D5FF]utilise une compétence de récupération[-] pour retirer des malus, octroie [00D5FF][FFAE00]40 %[-] de suppression des dégâts subis[-] aux [00D5FF]alliés concernés[-] pendant [FFAE00]1 tour[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats de base de [FFAE00]5 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : fées, [Four Knights of the Apocalypse][-][/i]\\n\\n[00D5FF]Augmente le rang des compétences[-] des [00D5FF]alliés concernés[-] au début du combat. ([FFAE00]Une fois[-] max.)\\n[i][C0C0C0](Hors compétences d'attaque de malus)[-][/i]\\n\\nLorsqu'un [00D5FF]ennemi entre en combat depuis l'emplacement secondaire[-], réduit ses stats offensives de [FFAE00]50 %[-] pendant [FF8000]1 tour[-]. Lorsqu'un ennemi dont les stats offensives sont réduites par la compétence unique du héros utilise une attaque pendant son tour, réduit le coefficient de la compétence de [FF8000]50 %[-].\\n\\nLorsque la posture d'un [00D5FF]allié concerné[-] est retirée ou que le héros [00D5FF]utilise une compétence de récupération[-] pour retirer des malus, octroie [00D5FF][FFAE00]40 %[-] de suppression des dégâts subis[-] aux [00D5FF]alliés concernés[-] pendant [FFAE00]1 tour[-]."
          },
          {
            "niveau": 2,
            "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats de base de [FFAE00]5 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : fées, [Four Knights of the Apocalypse][-][/i]\\n\\n[00D5FF]Augmente le rang des compétences[-] des [00D5FF]alliés concernés[-] au début du combat. ([FFAE00]Une fois[-] max.)\\n[i][C0C0C0](Hors compétences d'attaque de malus)[-][/i]\\n\\nLorsqu'un [00D5FF]ennemi entre en combat depuis l'emplacement secondaire[-], réduit ses stats offensives de [FFAE00]50 %[-] pendant [FF8000]1 tour[-]. Lorsqu'un ennemi dont les stats offensives sont réduites par la compétence unique du héros utilise une attaque pendant son tour, réduit le coefficient de la compétence de [FF8000]80 %[-].\\n\\nLorsque la posture d'un [00D5FF]allié concerné[-] est retirée ou que le héros [00D5FF]utilise une compétence de récupération[-] pour retirer des malus, octroie [00D5FF][FFAE00]40 %[-] de suppression des dégâts subis[-] aux [00D5FF]alliés concernés[-] pendant [FFAE00]1 tour[-]."
          },
          {
            "niveau": 6,
            "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats de base de [FFAE00]5 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : fées, [Four Knights of the Apocalypse][-][/i]\\n\\n[00D5FF]Augmente le rang des compétences[-] des [00D5FF]alliés concernés[-] au début du combat. ([FFAE00]Une fois[-] max.)\\n[i][C0C0C0](Hors compétences d'attaque de malus)[-][/i]\\n\\nLorsqu'un [00D5FF]ennemi entre en combat depuis l'emplacement secondaire[-], réduit ses stats offensives de [FFAE00]50 %[-] pendant [FF8000]2 tours[-]. Lorsqu'un ennemi dont les stats offensives sont réduites par la compétence unique du héros utilise une attaque pendant son tour, réduit le coefficient de la compétence de [FF8000]80 %[-].\\n\\nLorsque la posture d'un [00D5FF]allié concerné[-] est retirée ou que le héros [00D5FF]utilise une compétence de récupération[-] pour retirer des malus, octroie [00D5FF][FFAE00]40 %[-] de suppression des dégâts subis[-] aux [00D5FF]alliés concernés[-] pendant [FFAE00]1 tour[-]."
          }
        ]
      },
      "idForme": 329402,
      "portrait": "assets/2006501/images/icon_hero_4koa_tiara_0002_s__175dd4e1c68d0fda.png",
      "portraitVertical": "assets/2006501/images/icon_skin_4koa_tiara_0002_l__7c254de9e54e5844.png"
    }
  ],
  "costumes": [
    {
      "id": "3329401",
      "categorie": "Skin",
      "nom": "Fée mignonne",
      "image": "assets/2006501/images/icon_skin_4koa_tiara_0001_l__e0095b66999d9abe.png",
      "rarete": ""
    },
    {
      "id": "3329450",
      "categorie": "Skin",
      "nom": "Fille de la forêt et de la terre",
      "image": "assets/2006501/images/icon_skin_4koa_tiara_0003_l__8d3425ea872a8d5e.png",
      "rarete": ""
    },
    {
      "id": "3329451",
      "categorie": "Skin",
      "nom": "Une nouvelle aventure",
      "image": "assets/2006501/images/icon_skin_4koa_tiara_0004_l__1be32f15ec5a9073.png",
      "rarete": ""
    },
    {
      "id": "3329452",
      "categorie": "Skin",
      "nom": "Protection féérique",
      "image": "assets/2006501/images/icon_skin_4koa_tiara_0005_l__0a4097e5c7acbaed.png",
      "rarete": ""
    },
    {
      "id": "3329453",
      "categorie": "Skin",
      "nom": "Princesse de la mer estivale",
      "image": "assets/2006501/images/icon_skin_4koa_tiara_0006_l__ce6dcbb91ae532bf.png",
      "rarete": ""
    },
    {
      "id": "3329402",
      "categorie": "Skin",
      "nom": "Promenade tranquille",
      "image": "assets/2006501/images/icon_skin_4koa_tiara_0002_l__7c254de9e54e5844.png",
      "rarete": ""
    },
    {
      "id": "881601",
      "categorie": "Weapon",
      "nom": "Mains nues",
      "image": "assets/2006501/images/icon_weapon_4koa_tiara_0001_l__9990d5e77cd6924f.png",
      "rarete": ""
    },
    {
      "id": "881602",
      "categorie": "Weapon",
      "nom": "Gants élégants",
      "image": "assets/2006501/images/icon_weapon_4koa_tiara_0003_l__57d39ac8ac6ff7d0.png",
      "rarete": ""
    },
    {
      "id": "881603",
      "categorie": "Weapon",
      "nom": "Gants d'aventurière",
      "image": "assets/2006501/images/icon_weapon_4koa_tiara_0004_l__1501cdf25e096101.png",
      "rarete": ""
    },
    {
      "id": "881604",
      "categorie": "Weapon",
      "nom": "Mains de protection",
      "image": "assets/2006501/images/icon_weapon_4koa_tiara_0005_l__e995bb4a51fbb275.png",
      "rarete": ""
    },
    {
      "id": "881605",
      "categorie": "Weapon",
      "nom": "Parfum estival",
      "image": "assets/2006501/images/icon_weapon_4koa_tiara_0006_l__a3a9f6a8949d61ab.png",
      "rarete": ""
    },
    {
      "id": "4010501",
      "categorie": "Head",
      "nom": "Queue-de-cheval mignonne",
      "image": "assets/2006501/images/icon_head_4koa_tiara_0001_l__2260da0fc89ee88b.png",
      "rarete": ""
    },
    {
      "id": "4010502",
      "categorie": "Head",
      "nom": "Coupe au carré élégante",
      "image": "assets/2006501/images/icon_head_4koa_tiara_0003_l__621897d17e06b85a.png",
      "rarete": ""
    },
    {
      "id": "4010503",
      "categorie": "Head",
      "nom": "Lunettes d'aventurière",
      "image": "assets/2006501/images/icon_head_4koa_tiara_0004_l__df82921acb38acac.png",
      "rarete": ""
    },
    {
      "id": "4010504",
      "categorie": "Head",
      "nom": "Détermination de fée",
      "image": "assets/2006501/images/icon_head_4koa_tiara_0005_l__2c09eed81f98270e.png",
      "rarete": ""
    },
    {
      "id": "4010506",
      "categorie": "Head",
      "nom": "Ambiance estivale",
      "image": "assets/2006501/images/icon_head_4koa_tiara_0006_l__167ef526e4960b81.png",
      "rarete": ""
    },
    {
      "id": "4010505",
      "categorie": "Head",
      "nom": "Couettes familières",
      "image": "assets/2006501/images/icon_head_4koa_tiara_0501_l__dcb2a35d652e57d0.png",
      "rarete": ""
    }
  ],
  "relique": null
};