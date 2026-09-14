window.fichePreparee={
  "nom": "Perceval, enfant de l'espoir",
  "designation": "[Une nouvelle aventure]",
  "titre": "Perceval, enfant de l'espoir",
  "idJeu": "1955501",
  "attribut": {
    "nom": "@attribute.2",
    "icone": "assets/commun/icon_filter_attribute_02__ea1406c9830f7566.png",
    "couleur": "#67c778",
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
    "@characteristic.8"
  ],
  "portrait": "assets/1955501/images/icon_hero_4koa_percival_0010_s__aac514f5d81ec345.png",
  "rareteParDefaut": "LR",
  "presentation": "[Une nouvelle aventure] Perceval, enfant de l'espoir possède une compétence qui peut réduire la jauge de coup ultime de l'ennemi.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1955501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1955501/images/hero_illust_4koa_percival_1955501__ac736b467d52d3fd.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 500.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 380.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6700.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4334
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
            "valeur": 180.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Combo dynamique »",
          "image": "assets/1955501/images/icon_4koa_percival_ssr_type01_skill_01__04d68fc58c6ed76a.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "Inflige des dégâts de [00D5FF]Ruée[-] égaux à 150 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Ruée : chances crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis avec l'effet Attaque ciblée.[-] ",
              "idJeu": 1003901,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 250.0,
              "description": "Inflige des dégâts de [00D5FF]Ruée[-] égaux à 250 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Ruée : chances crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis avec l'effet Attaque ciblée.[-] ",
              "idJeu": 1003902,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts de [00D5FF]Ruée[-] égaux à 450 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Ruée : chances crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis avec l'effet Attaque ciblée.[-] ",
              "idJeu": 1003903,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Taillade immature »",
          "image": "assets/1955501/images/icon_4koa_percival_ssr_type01_skill_02__c3dc951e91bdbb22.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 120.0,
              "description": "Inflige des dégâts égaux à 120 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 1 [FFAE00] orbe(s)[-].",
              "idJeu": 1003911,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 250.0,
              "description": "Inflige des dégâts égaux à 250 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 2 [FFAE00] orbe(s)[-].",
              "idJeu": 1003912,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts égaux à 450 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 3 [FFAE00] orbe(s)[-].",
              "idJeu": 1003913,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Gifle de colère »",
        "image": "assets/1955501/images/icon_4koa_percival_ssr_type01_special_01__933cf858073886b8.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 500.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 500 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 550.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 550 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 600.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 600 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 650.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 650 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 700.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 700 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 750.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 750 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Un nouveau départ",
        "image": "assets/1955501/images/icon_exclusive_skill_1955501__8ce97ddf4e6c39a3.png",
        "description": "Au début du combat, applique [00D5FF]Persévérance[-] sur le héros pendant [FFAE00]2 tours[-]. Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats défensives de [FFAE00]10 %[-].\\nDe plus, lorsque le [00D5FF]héros utilise une attaque à cible unique[-], applique l'effet [00D5FF]Attaque ciblée[-] sur la cible pendant [FFAE00]2 tours[-]. Augmente les stats de PV du héros de [FFAE00]10 %[-] pour [FFAE00]chaque[-] allié en vie, et augmente les dégâts crit. du héros de [FFAE00]100 %[-] pour [FFAE00]chaque[-] allié mort.\\n\\n[00D5FF]※Persévérance : le héros encaisse [FFAE00]30 %[-] des dégâts subis par les alliés à leur place, puis restaure les PV du héros à hauteur de [FFAE00]50 %[-] des dégâts subis.\\n※Alliés concernés : humains, Les [Seven Deadly Sins]\\n※Attaque ciblée : résistance crit. [FFAE00]-30 %[-]. Si [FFAE00]2[-] attaques à cible unique sont subies pendant le tour ennemi, dégâts subis [FFAE00]+50 %[-].\\n(Augmentation des dégâts subis [FFAE00]une fois[-] par tour max.)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Au début du combat, applique [00D5FF]Persévérance[-] sur le héros pendant [FFAE00]2 tours[-]. Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats défensives de [FFAE00]10 %[-].\\nDe plus, lorsque le [00D5FF]héros utilise une attaque à cible unique[-], applique l'effet [00D5FF]Attaque ciblée[-] sur la cible pendant [FFAE00]2 tours[-]. Augmente les stats de PV du héros de [FFAE00]10 %[-] pour [FFAE00]chaque[-] allié en vie, et augmente les dégâts crit. du héros de [FFAE00]100 %[-] pour [FFAE00]chaque[-] allié mort.\\n\\n[00D5FF]※Persévérance : le héros encaisse [FFAE00]30 %[-] des dégâts subis par les alliés à leur place, puis restaure les PV du héros à hauteur de [FFAE00]50 %[-] des dégâts subis.\\n※Alliés concernés : humains, Les [Seven Deadly Sins]\\n※Attaque ciblée : résistance crit. [FFAE00]-30 %[-]. Si [FFAE00]2[-] attaques à cible unique sont subies pendant le tour ennemi, dégâts subis [FFAE00]+50 %[-].\\n(Augmentation des dégâts subis [FFAE00]une fois[-] par tour max.)[-]"
          }
        ]
      },
      "idForme": 324901,
      "portrait": "assets/1955501/images/icon_hero_4koa_percival_0001_s__1236efce4630330a.png",
      "portraitVertical": "assets/1955501/images/icon_skin_4koa_percival_0001_l__89d5750ee0831ecb.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1955501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1955501/images/hero_illust_4koa_percival_1955501__ac736b467d52d3fd.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 750.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 450.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8100.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4920
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
            "valeur": 180.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Combo dynamique »",
          "image": "assets/1955501/images/icon_4koa_percival_ssr_type01_skill_01__04d68fc58c6ed76a.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "Inflige des dégâts de [00D5FF]Ruée[-] égaux à 150 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Ruée : chances crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis avec l'effet Attaque ciblée.[-] ",
              "idJeu": 1003901,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 250.0,
              "description": "Inflige des dégâts de [00D5FF]Ruée[-] égaux à 250 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Ruée : chances crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis avec l'effet Attaque ciblée.[-] ",
              "idJeu": 1003902,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts de [00D5FF]Ruée[-] égaux à 450 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Ruée : chances crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis avec l'effet Attaque ciblée.[-] ",
              "idJeu": 1003903,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Taillade immature »",
          "image": "assets/1955501/images/icon_4koa_percival_ssr_type01_skill_02__c3dc951e91bdbb22.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 120.0,
              "description": "Inflige des dégâts égaux à 120 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 1 [FFAE00] orbe(s)[-].",
              "idJeu": 1003911,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 250.0,
              "description": "Inflige des dégâts égaux à 250 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 2 [FFAE00] orbe(s)[-].",
              "idJeu": 1003912,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts égaux à 450 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 3 [FFAE00] orbe(s)[-].",
              "idJeu": 1003913,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Gifle de colère »",
        "image": "assets/1955501/images/icon_4koa_percival_ssr_type01_special_01__933cf858073886b8.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 500.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 500 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 550.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 550 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 600.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 600 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 650.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 650 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 700.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 700 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 750.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 750 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Un nouveau départ",
        "image": "assets/1955501/images/icon_exclusive_skill_1955501__8ce97ddf4e6c39a3.png",
        "description": "Au début du combat, applique [00D5FF]Persévérance[-] sur le héros pendant [FFAE00]2 tours[-]. Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats défensives de [FFAE00]10 %[-].\\nDe plus, lorsque le [00D5FF]héros utilise une attaque à cible unique[-], applique l'effet [00D5FF]Attaque ciblée[-] sur la cible pendant [FFAE00]2 tours[-]. Augmente les stats de PV du héros de [FFAE00]10 %[-] pour [FFAE00]chaque[-] allié en vie, et augmente les dégâts crit. du héros de [FFAE00]100 %[-] pour [FFAE00]chaque[-] allié mort.\\n\\n[00D5FF]※Persévérance : le héros encaisse [FFAE00]30 %[-] des dégâts subis par les alliés à leur place, puis restaure les PV du héros à hauteur de [FFAE00]50 %[-] des dégâts subis.\\n※Alliés concernés : humains, Les [Seven Deadly Sins]\\n※Attaque ciblée : résistance crit. [FFAE00]-30 %[-]. Si [FFAE00]2[-] attaques à cible unique sont subies pendant le tour ennemi, dégâts subis [FFAE00]+50 %[-].\\n(Augmentation des dégâts subis [FFAE00]une fois[-] par tour max.)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Au début du combat, applique [00D5FF]Persévérance[-] sur le héros pendant [FFAE00]2 tours[-]. Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente leurs stats défensives de [FFAE00]10 %[-].\\nDe plus, lorsque le [00D5FF]héros utilise une attaque à cible unique[-], applique l'effet [00D5FF]Attaque ciblée[-] sur la cible pendant [FFAE00]2 tours[-]. Augmente les stats de PV du héros de [FFAE00]10 %[-] pour [FFAE00]chaque[-] allié en vie, et augmente les dégâts crit. du héros de [FFAE00]100 %[-] pour [FFAE00]chaque[-] allié mort.\\n\\n[00D5FF]※Persévérance : le héros encaisse [FFAE00]30 %[-] des dégâts subis par les alliés à leur place, puis restaure les PV du héros à hauteur de [FFAE00]50 %[-] des dégâts subis.\\n※Alliés concernés : humains, Les [Seven Deadly Sins]\\n※Attaque ciblée : résistance crit. [FFAE00]-30 %[-]. Si [FFAE00]2[-] attaques à cible unique sont subies pendant le tour ennemi, dégâts subis [FFAE00]+50 %[-].\\n(Augmentation des dégâts subis [FFAE00]une fois[-] par tour max.)[-]"
          }
        ]
      },
      "idForme": 324902,
      "portrait": "assets/1955501/images/icon_hero_4koa_percival_0002_s__c5e484d04ff168fc.png",
      "portraitVertical": "assets/1955501/images/icon_skin_4koa_percival_0002_l__c691f2c641446b55.png"
    },
    {
      "id": "LR",
      "nom": "LR",
      "icone": "assets/commun/icon_filter_grade_LR__01254701e83a6f69.png",
      "cadre": "assets/commun/common_frame_rank_lr.png",
      "fond": "assets/commun/icon_hero_basic_s_7__1f68b57601e76589.png",
      "coin": "assets/commun/common_level_frame_rank_lr.png",
      "couleur": "#f3ce80",
      "image": "assets/1955501/images/hero_illust_4koa_percival_1955501__ac736b467d52d3fd.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 100,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 750.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 450.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8100.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4920
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
            "valeur": 180.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Combo dynamique »",
          "image": "assets/1955501/images/icon_4koa_percival_ssr_type01_skill_01__04d68fc58c6ed76a.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 165.0,
              "description": "Inflige des dégâts de [00D5FF]Ruée[-] égaux à 165 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Ruée : chances crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis avec l'effet Attaque ciblée.[-] ",
              "idJeu": 1003921,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 275.0,
              "description": "Inflige des dégâts de [00D5FF]Ruée[-] égaux à 275 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Ruée : chances crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis avec l'effet Attaque ciblée.[-] ",
              "idJeu": 1003922,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 495.0,
              "description": "Inflige des dégâts de [00D5FF]Ruée[-] égaux à 495 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Ruée : chances crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis avec l'effet Attaque ciblée.[-] ",
              "idJeu": 1003923,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Taillade immature »",
          "image": "assets/1955501/images/icon_4koa_percival_ssr_type01_skill_02__c3dc951e91bdbb22.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 132.0,
              "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 132 % de l'attaque sur @target.oneEnemy et [00D5FF]retire[-] 1 [FFAE00]orbe(s)[-] de la jauge de coup ultime.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
              "idJeu": 1003931,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 275.0,
              "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 275 % de l'attaque sur @target.oneEnemy et [00D5FF]retire[-] 2 [FFAE00]orbe(s)[-] de la jauge de coup ultime.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
              "idJeu": 1003932,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 495.0,
              "description": "Inflige des dégâts de [00D5FF]Perforation[-] égaux à 495 % de l'attaque sur @target.oneEnemy et [00D5FF]retire[-] 3 [FFAE00]orbe(s)[-] de la jauge de coup ultime.\\n\\n[00D5FF]※Perforation : taux de perforation x3.[-]",
              "idJeu": 1003933,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Gifle de colère »",
        "image": "assets/1955501/images/icon_4koa_percival_ssr_type01_special_01__933cf858073886b8.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 500.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 500 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 550.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 550 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 600.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 600 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 650.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 650 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 700.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 700 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 750.0,
            "description": "Augmente les stats offensives du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], augmente les [00D5FF]dégâts subis[-] par l'ennemi de [FFAE00]50 %[-], puis inflige des dégâts de [00D5FF]Lésion[-] égaux à 750 % de l'attaque.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Un nouveau départ",
        "image": "assets/1955501/images/icon_exclusive_skill_1955501__8ce97ddf4e6c39a3.png",
        "description": "Au début du combat, octroie [00D5FF]Persévérance[-] au héros pendant [FFAE00]2 tour(s)[-]. Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente les stats défensives des alliés concernés de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : humains, Les [Seven Deadly Sins], [Four Knights of the Apocalypse]\\n※Persévérance : le héros encaisse [FFAE00]30 %[-] des dégâts subis par les alliés à leur place, puis restaure les PV à hauteur de [FFAE00]50 %[-] des dégâts subis.[-][/i]\\n\\nLorsqu'un allié concerné utilise une compétence d'attaque, applique [00D5FF]Attaque ciblée[-] sur la cible pendant [FFAE00]2 tour(s)[-]. Lorsqu'un [00D5FF]allié concerné[-] utilise une compétence sur un ennemi affecté par [00D5FF]Attaque ciblée[-], augmente le coefficient de compétence de [FFAE00]30 %[-].\\n[i][C0C0C0]※Attaque ciblée : stats défensives [FFAE00]-10 %[-], dégâts subis [FFAE00]+30 %[-].[-][/i]\\n\\nAugmente les stats de PV du héros de [FFAE00]10 %[-] pour [FFAE00]chaque[-] allié en vie, et augmente les dégâts crit. du héros de [FFAE00]100 %[-] pour [FFAE00]chaque[-] allié mort.\\n\\nLorsqu'un [00D5FF]allié [Four Knights of the Apocalypse][-] subit des dégâts mortels, restaure [FFAE00]100 %[-] de ses PV max. ([FFAE00]1 fois[-] max.)",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Au début du combat, octroie [00D5FF]Persévérance[-] au héros pendant [FFAE00]2 tour(s)[-]. Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente les stats défensives des alliés concernés de [FFAE00]10 %[-].\\n[i][C0C0C0]※ Alliés concernés : humains, Les [Seven Deadly Sins], [Four Knights of the Apocalypse]\\n※Persévérance : le héros encaisse [FFAE00]30 %[-] des dégâts subis par les alliés à leur place, puis restaure les PV à hauteur de [FFAE00]50 %[-] des dégâts subis.[-][/i]\\n\\nLorsqu'un allié concerné utilise une compétence d'attaque, applique [00D5FF]Attaque ciblée[-] sur la cible pendant [FFAE00]2 tour(s)[-]. Lorsqu'un [00D5FF]allié concerné[-] utilise une compétence sur un ennemi affecté par [00D5FF]Attaque ciblée[-], augmente le coefficient de compétence de [FFAE00]30 %[-].\\n[i][C0C0C0]※Attaque ciblée : stats défensives [FFAE00]-10 %[-], dégâts subis [FFAE00]+30 %[-].[-][/i]\\n\\nAugmente les stats de PV du héros de [FFAE00]10 %[-] pour [FFAE00]chaque[-] allié en vie, et augmente les dégâts crit. du héros de [FFAE00]100 %[-] pour [FFAE00]chaque[-] allié mort.\\n\\nLorsqu'un [00D5FF]allié [Four Knights of the Apocalypse][-] subit des dégâts mortels, restaure [FFAE00]100 %[-] de ses PV max. ([FFAE00]1 fois[-] max.)"
          }
        ]
      },
      "idForme": 324903,
      "portrait": "assets/1955501/images/icon_hero_4koa_percival_0010_s__aac514f5d81ec345.png",
      "portraitVertical": "assets/1955501/images/icon_skin_4koa_percival_0010_l__26cebfed38eff693.png"
    }
  ],
  "costumes": [
    {
      "id": "3324901",
      "categorie": "Skin",
      "nom": "Tenue ordinaire de jeune garçon",
      "image": "assets/1955501/images/icon_skin_4koa_percival_0001_l__89d5750ee0831ecb.png",
      "rarete": ""
    },
    {
      "id": "3324950",
      "categorie": "Skin",
      "nom": "Trublion",
      "image": "assets/1955501/images/icon_skin_4koa_percival_0003_l__990ac11c91f48198.png",
      "rarete": ""
    },
    {
      "id": "3324951",
      "categorie": "Skin",
      "nom": "Tenue de jeu vidéo néon",
      "image": "assets/1955501/images/icon_skin_4koa_percival_0004_l__c581493e7fcd4b9b.png",
      "rarete": ""
    },
    {
      "id": "3324952",
      "categorie": "Skin",
      "nom": "Héros légendaire",
      "image": "assets/1955501/images/icon_skin_4koa_percival_0005_l__884f71479f73afc7.png",
      "rarete": ""
    },
    {
      "id": "3324953",
      "categorie": "Skin",
      "nom": "Ambassadeur de la forêt",
      "image": "assets/1955501/images/icon_skin_4koa_percival_0008_l__2dab73cf75961ea7.png",
      "rarete": ""
    },
    {
      "id": "3324902",
      "categorie": "Skin",
      "nom": "Précieuse cape",
      "image": "assets/1955501/images/icon_skin_4koa_percival_0002_l__c691f2c641446b55.png",
      "rarete": ""
    },
    {
      "id": "3324903",
      "categorie": "Skin",
      "nom": "Tenue de cérémonie brillante",
      "image": "assets/1955501/images/icon_skin_4koa_percival_0010_l__26cebfed38eff693.png",
      "rarete": ""
    },
    {
      "id": "9017062",
      "categorie": "Skin",
      "nom": "Sweat à capuche de la [b]Trombe[/b]",
      "image": null,
      "rarete": ""
    },
    {
      "id": "9017063",
      "categorie": "Skin",
      "nom": "Sweat à capuche de la [b]Trombe[/b]",
      "image": "assets/1955501/images/hero_4koa_percival_body_0001_scene03_D__ffb62b382e298b63.png",
      "rarete": ""
    },
    {
      "id": "877101",
      "categorie": "Weapon",
      "nom": "Ouroboros",
      "image": "assets/1955501/images/icon_weapon_4koa_percival_0001_l__c7f5c4ac61bb27e2.png",
      "rarete": ""
    },
    {
      "id": "877102",
      "categorie": "Weapon",
      "nom": "Crayon robuste",
      "image": "assets/1955501/images/icon_weapon_4koa_percival_0003_l__3af1b870ec814086.png",
      "rarete": ""
    },
    {
      "id": "877103",
      "categorie": "Weapon",
      "nom": "Épée pixellisée",
      "image": "assets/1955501/images/icon_weapon_4koa_percival_0004_l__d73a1b334c3e31e5.png",
      "rarete": ""
    },
    {
      "id": "877104",
      "categorie": "Weapon",
      "nom": "Épée de l'espoir",
      "image": "assets/1955501/images/icon_weapon_4koa_percival_0005_l__add78f6653273d2e.png",
      "rarete": ""
    },
    {
      "id": "877105",
      "categorie": "Weapon",
      "nom": "Croc de la forêt",
      "image": "assets/1955501/images/icon_weapon_4koa_percival_0008_l__28ce3e96a70f89f6.png",
      "rarete": ""
    },
    {
      "id": "877106",
      "categorie": "Weapon",
      "nom": "Épée végétale d'Yggdrasil",
      "image": "assets/1955501/images/icon_weapon_4koa_percival_0001_l__c7f5c4ac61bb27e2.png",
      "rarete": ""
    },
    {
      "id": "4006001",
      "categorie": "Head",
      "nom": "Ailes d'oiseau vert",
      "image": "assets/1955501/images/icon_head_4koa_percival_0001_l__f9a65d2366d74cfe.png",
      "rarete": ""
    },
    {
      "id": "4006002",
      "categorie": "Head",
      "nom": "Garçon innocent",
      "image": "assets/1955501/images/icon_head_4koa_percival_0003_l__9b649b6b02524770.png",
      "rarete": ""
    },
    {
      "id": "4006003",
      "categorie": "Head",
      "nom": "Lunettes porte-bonheur",
      "image": "assets/1955501/images/icon_head_4koa_percival_0004_l__0bfd44cd674e20ad.png",
      "rarete": ""
    },
    {
      "id": "4006004",
      "categorie": "Head",
      "nom": "Tiare du courage",
      "image": "assets/1955501/images/icon_head_4koa_percival_0005_l__7ef248c6a8a3327b.png",
      "rarete": ""
    },
    {
      "id": "4006006",
      "categorie": "Head",
      "nom": "Nid d'oiseau douillet",
      "image": "assets/1955501/images/icon_head_4koa_percival_0008_l__42b41ed84932137c.png",
      "rarete": ""
    },
    {
      "id": "4006007",
      "categorie": "Head",
      "nom": "Chapeau de cérémonie brillant",
      "image": "assets/1955501/images/icon_head_4koa_percival_0010_l__f17f57575ef933d2.png",
      "rarete": ""
    },
    {
      "id": "4006005",
      "categorie": "Head",
      "nom": "Casque du grand-père",
      "image": "assets/1955501/images/icon_head_4koa_percival_0002_l__23c47ebd501190cc.png",
      "rarete": ""
    },
    {
      "id": "4900030",
      "categorie": "Head",
      "nom": "4900030",
      "image": "assets/1955501/images/hero_4koa_percival_head_0001_scene03_D__a9e64306512508d1.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Épée végétale d'Yggdrasil",
    "image": "assets/1955501/images/icon_weapon_4koa_percival_0551_s__acf6b0ad0e27525c.png",
    "description": "Relique sacrée de Perceval, enfant de l'espoir (arme).\\n[DC143C]Une épée créée en tressant les lianes d'Yggdrasil. Il paraît que la force vitale encore présente dans ces lianes octroie une vitalité inépuisable au détenteur de cette épée.[-]",
    "passif": {
      "nom": "Épée végétale d'Yggdrasil",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente les stats de base des alliés concernés de [FFAE00]4 %[-].\\n[i][C0C0C0]※ Alliés concernés : humains, Les [Seven Deadly Sins], [Four Knights of the Apocalypse]"
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 400.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 325.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 4200.0
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
        "nom": "Essence magique bleue",
        "image": "assets/commun/icon_craft_costume_key_material_01__8bc67ed6369368ff.png",
        "quantite": 80
      },
      {
        "nom": "Force de Brokk",
        "image": "assets/commun/icon_craft_costume_material_10__00badc74edfb288c.png",
        "quantite": 80
      }
    ],
    "provenance": "Ratatoskr"
  }
};