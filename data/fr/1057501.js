window.fichePreparee={
  "nom": "Reine Diane",
  "designation": "[Vagues terrestres]",
  "titre": "Reine Diane",
  "idJeu": "1057501",
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
  "portrait": "assets/1057501/images/icon_hero_diane_queen_0013_s__d36c4f1672ac9c69.png",
  "rareteParDefaut": "LR",
  "presentation": "[Vagues terrestres] Reine Diane possède une compétence qui lui permet d'infliger des dégâts proportionnels au nombre d'orbes dans sa propre jauge de coup ultime. À 4 orbes ou plus, elle peut retirer un orbe dans la jauge de coup ultime de l'ennemi.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1057501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1057501/images/hero_illust_diane_queen_1057501__497a16cc0205a466.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 560.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 420.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6700.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4196
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
            "valeur": 160.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 85.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 70.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Ruade folle »",
          "image": "assets/1057501/images/icon_diane_queen_ssr_type01_skill_01__4b875a5f1f732565.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Pulvérisation[-] égaux à 180 % de l'attaque à @target.oneEnemy. Lorsque le héros possède au moins 4 [FFAE00]orbe(s)[-] dans sa jauge de coup ultime, retire [FFAE00]1 orbe[-] de la jauge de coup ultime de l'ennemi.\\n\\n[00D5FF]※Pulvérisation : 20 % de dégâts supplémentaires pour [FFAE00]chaque orbe[-] de la jauge de coup ultime du héros.[-]",
              "idJeu": 198901,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflige des dégâts de [00D5FF]Pulvérisation[-] égaux à 270 % de l'attaque à @target.oneEnemy. Lorsque le héros possède au moins 4 [FFAE00]orbe(s)[-] dans sa jauge de coup ultime, retire [FFAE00]1 orbe[-] de la jauge de coup ultime de l'ennemi.\\n\\n[00D5FF]※Pulvérisation : 20 % de dégâts supplémentaires pour [FFAE00]chaque orbe[-] de la jauge de coup ultime du héros.[-]",
              "idJeu": 198902,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts de [00D5FF]Pulvérisation[-] égaux à 450 % de l'attaque à @target.oneEnemy. Lorsque le héros possède au moins 4 [FFAE00]orbe(s)[-] dans sa jauge de coup ultime, retire [FFAE00]1 orbe[-] de la jauge de coup ultime de l'ennemi.\\n\\n[00D5FF]※Pulvérisation : 20 % de dégâts supplémentaires pour [FFAE00]chaque orbe[-] de la jauge de coup ultime du héros.[-]",
              "idJeu": 198903,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Marteau tournoyant »",
          "image": "assets/1057501/images/icon_diane_queen_ssr_type01_skill_02__7cf6db9bec4f50f4.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 2 tour(s) qui augmente les stats de PV de 12 % et [00D5FF]provoque[-] les ennemis.\\n[00D5FF]※Provocation : attire toutes les attaques sur soi.[-]",
              "idJeu": 198911,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 3 tour(s) qui augmente les stats de PV de 18 % et [00D5FF]provoque[-] les ennemis.\\n[00D5FF]※Provocation : attire toutes les attaques sur soi.[-]",
              "idJeu": 198912,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 3 tour(s) qui augmente les stats de PV de 30 % et [00D5FF]provoque[-] les ennemis.\\n[00D5FF]※Provocation : attire toutes les attaques sur soi.[-]",
              "idJeu": 198913,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Étreinte royale »",
        "image": "assets/1057501/images/icon_diane_queen_ssr_type01_special_01__59ffcfb6ed1819b8.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 380.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 380 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 3 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +5 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 418.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 418 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 5 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +10 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 456.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 456 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 8 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +15 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 494.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 494 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 12 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +20 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 532.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 532 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 20 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +35 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 570.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 570 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 30 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +50 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Reine de la terre",
        "image": "assets/1057501/images/icon_exclusive_skill_1057501__ef874b68ff2fabad.png",
        "description": "À chaque attaque subie, augmente les dégâts infligés par le héros de [FFAE00]10 %[-] (jusqu'à [FFAE00]50 %[-]). Accumule les dégâts subis avec les compétences et les effets de compétence [00D5FF]jusqu'à[-] [FFAE00]500 000[-], puis augmente les dégâts infligés par le héros à hauteur de [FFAE00]20 %[-] des dégâts cumulés. Réduit les dégâts subis par les alliés de [FFAE00]40 %[-] tant qu'une posture est active.",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "À chaque attaque subie, augmente les dégâts infligés par le héros de [FFAE00]10 %[-] (jusqu'à [FFAE00]50 %[-]). Accumule les dégâts subis avec les compétences et les effets de compétence [00D5FF]jusqu'à[-] [FFAE00]500 000[-], puis augmente les dégâts infligés par le héros à hauteur de [FFAE00]20 %[-] des dégâts cumulés. Réduit les dégâts subis par les alliés de [FFAE00]40 %[-] tant qu'une posture est active."
          }
        ]
      },
      "idForme": 312501,
      "portrait": "assets/1057501/images/icon_hero_diane_queen_0002_s__21146ce5ed717a5b.png",
      "portraitVertical": "assets/1057501/images/icon_skin_diane_queen_0002_l__6517cf15845cf6cb.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1057501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1057501/images/hero_illust_diane_queen_1057501__497a16cc0205a466.png",
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
            "valeur": 490.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8100.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4722
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
            "valeur": 160.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 85.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 70.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Ruade folle »",
          "image": "assets/1057501/images/icon_diane_queen_ssr_type01_skill_01__4b875a5f1f732565.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Pulvérisation[-] égaux à 180 % de l'attaque à @target.oneEnemy. Lorsque le héros possède au moins 4 [FFAE00]orbe(s)[-] dans sa jauge de coup ultime, retire [FFAE00]1 orbe[-] de la jauge de coup ultime de l'ennemi.\\n\\n[00D5FF]※Pulvérisation : 20 % de dégâts supplémentaires pour [FFAE00]chaque orbe[-] de la jauge de coup ultime du héros.[-]",
              "idJeu": 198901,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflige des dégâts de [00D5FF]Pulvérisation[-] égaux à 270 % de l'attaque à @target.oneEnemy. Lorsque le héros possède au moins 4 [FFAE00]orbe(s)[-] dans sa jauge de coup ultime, retire [FFAE00]1 orbe[-] de la jauge de coup ultime de l'ennemi.\\n\\n[00D5FF]※Pulvérisation : 20 % de dégâts supplémentaires pour [FFAE00]chaque orbe[-] de la jauge de coup ultime du héros.[-]",
              "idJeu": 198902,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts de [00D5FF]Pulvérisation[-] égaux à 450 % de l'attaque à @target.oneEnemy. Lorsque le héros possède au moins 4 [FFAE00]orbe(s)[-] dans sa jauge de coup ultime, retire [FFAE00]1 orbe[-] de la jauge de coup ultime de l'ennemi.\\n\\n[00D5FF]※Pulvérisation : 20 % de dégâts supplémentaires pour [FFAE00]chaque orbe[-] de la jauge de coup ultime du héros.[-]",
              "idJeu": 198903,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Marteau tournoyant »",
          "image": "assets/1057501/images/icon_diane_queen_ssr_type01_skill_02__7cf6db9bec4f50f4.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 2 tour(s) qui augmente les stats de PV de 12 % et [00D5FF]provoque[-] les ennemis.\\n[00D5FF]※Provocation : attire toutes les attaques sur soi.[-]",
              "idJeu": 198911,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 3 tour(s) qui augmente les stats de PV de 18 % et [00D5FF]provoque[-] les ennemis.\\n[00D5FF]※Provocation : attire toutes les attaques sur soi.[-]",
              "idJeu": 198912,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 3 tour(s) qui augmente les stats de PV de 30 % et [00D5FF]provoque[-] les ennemis.\\n[00D5FF]※Provocation : attire toutes les attaques sur soi.[-]",
              "idJeu": 198913,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Étreinte royale »",
        "image": "assets/1057501/images/icon_diane_queen_ssr_type01_special_01__59ffcfb6ed1819b8.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 380.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 380 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 3 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +5 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 418.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 418 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 5 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +10 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 456.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 456 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 8 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +15 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 494.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 494 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 12 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +20 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 532.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 532 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 20 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +35 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 570.0,
            "description": "Inflige des dégâts de [00D5FF]Répression[-] égaux à 570 % de l'attaque à @target.allEnemies, puis soigne les PV de tous les alliés à hauteur de 30 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +50 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Reine de la terre",
        "image": "assets/1057501/images/icon_exclusive_skill_1057501__ef874b68ff2fabad.png",
        "description": "À chaque attaque subie, augmente les dégâts infligés par le héros de [FFAE00]10 %[-] (jusqu'à [FFAE00]50 %[-]). Accumule les dégâts subis avec les compétences et les effets de compétence [00D5FF]jusqu'à[-] [FFAE00]500 000[-], puis augmente les dégâts infligés par le héros à hauteur de [FFAE00]20 %[-] des dégâts cumulés. Réduit les dégâts subis par les alliés de [FFAE00]40 %[-] tant qu'une posture est active.",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "À chaque attaque subie, augmente les dégâts infligés par le héros de [FFAE00]10 %[-] (jusqu'à [FFAE00]50 %[-]). Accumule les dégâts subis avec les compétences et les effets de compétence [00D5FF]jusqu'à[-] [FFAE00]500 000[-], puis augmente les dégâts infligés par le héros à hauteur de [FFAE00]20 %[-] des dégâts cumulés. Réduit les dégâts subis par les alliés de [FFAE00]40 %[-] tant qu'une posture est active."
          }
        ]
      },
      "idForme": 312502,
      "portrait": "assets/1057501/images/icon_hero_diane_queen_0001_s__2235157b207a96c8.png",
      "portraitVertical": "assets/1057501/images/icon_skin_diane_queen_0001_l__c4e96c21037bd095.png"
    },
    {
      "id": "LR",
      "nom": "LR",
      "icone": "assets/commun/icon_filter_grade_LR__01254701e83a6f69.png",
      "cadre": "assets/commun/common_frame_rank_lr.png",
      "fond": "assets/commun/icon_hero_basic_s_7__1f68b57601e76589.png",
      "coin": "assets/commun/common_level_frame_rank_lr.png",
      "couleur": "#f3ce80",
      "image": "assets/1057501/images/hero_illust_diane_queen_1057501__497a16cc0205a466.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 100,
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
            "valeur": 8700.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5356
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 70.0,
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
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 100.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Ruade folle »",
          "image": "assets/1057501/images/icon_diane_queen_ssr_type01_skill_01_01__72018396acd814b6.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 198.0,
              "description": "Réduit les [00D5FF]stats de PV[-] de @target.oneEnemy de [FFAE00]20 %[-] pendant [FFAE00]1 tour[-], puis inflige des dégâts d'[00D5FF]Pulvérisation[-] égaux à 198 % de l'attaque. Lorsque le héros possède au moins 4 [FFAE00]orbe(s)[-] dans sa jauge de coup ultime, retire [FFAE00]1 orbe[-] de la jauge de coup ultime de l'ennemi.\\n\\n[00D5FF]※Pulvérisation : 20 % de dégâts supplémentaires pour [FFAE00]chaque orbe[-] dans la jauge de coup ultime du héros.[-]",
              "idJeu": 198941,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 297.0,
              "description": "Réduit les [00D5FF]stats de PV[-] de @target.oneEnemy de [FFAE00]25 %[-] pendant [FFAE00]1 tour[-], puis inflige des dégâts d'[00D5FF]Pulvérisation[-] égaux à 297 % de l'attaque. Lorsque le héros possède au moins 4 [FFAE00]orbe(s)[-] dans sa jauge de coup ultime, retire [FFAE00]1 orbe[-] de la jauge de coup ultime de l'ennemi.\\n\\n[00D5FF]※Pulvérisation : 20 % de dégâts supplémentaires pour [FFAE00]chaque orbe[-] dans la jauge de coup ultime du héros.[-]",
              "idJeu": 198942,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 495.0,
              "description": "Réduit les [00D5FF]stats de PV[-] de @target.oneEnemy de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts d'[00D5FF]Pulvérisation[-] égaux à 495 % de l'attaque. Lorsque le héros possède au moins 4 [FFAE00]orbe(s)[-] dans sa jauge de coup ultime, retire [FFAE00]1 orbe[-] de la jauge de coup ultime de l'ennemi.\\n\\n[00D5FF]※Pulvérisation : 20 % de dégâts supplémentaires pour [FFAE00]chaque orbe[-] dans la jauge de coup ultime du héros.[-]",
              "idJeu": 198943,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Marteau tournoyant »",
          "image": "assets/1057501/images/icon_diane_queen_ssr_type01_skill_02__7cf6db9bec4f50f4.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 2 tour(s) qui augmente les stats de PV de 20 % et [00D5FF]provoque[-] les ennemis.\\n[00D5FF]※Provocation : attire toutes les attaques sur soi.[-]",
              "idJeu": 198951,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 3 tour(s) qui augmente les stats de PV de 25 % et [00D5FF]provoque[-] les ennemis.\\n[00D5FF]※Provocation : attire toutes les attaques sur soi.[-]",
              "idJeu": 198952,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 3 tour(s) qui augmente les stats de PV de 35 % et [00D5FF]provoque[-] les ennemis.\\n[00D5FF]※Provocation : attire toutes les attaques sur soi.[-]",
              "idJeu": 198953,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Étreinte royale »",
        "image": "assets/1057501/images/icon_diane_queen_ssr_type01_special_01__59ffcfb6ed1819b8.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 380.0,
            "description": "Réduit les [00D5FF]stats de PV[-] de @target.allEnemies de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts de [00D5FF]Répression[-] égaux à 380 % de l'attaque, puis restaure les PV de tous les alliés à hauteur de 3 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +5 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 418.0,
            "description": "Réduit les [00D5FF]stats de PV[-] de @target.allEnemies de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts de [00D5FF]Répression[-] égaux à 418 % de l'attaque, puis restaure les PV de tous les alliés à hauteur de 5 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +10 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 456.0,
            "description": "Réduit les [00D5FF]stats de PV[-] de @target.allEnemies de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts de [00D5FF]Répression[-] égaux à 456 % de l'attaque, puis restaure les PV de tous les alliés à hauteur de 8 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +15 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 494.0,
            "description": "Réduit les [00D5FF]stats de PV[-] de @target.allEnemies de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts de [00D5FF]Répression[-] égaux à 494 % de l'attaque, puis restaure les PV de tous les alliés à hauteur de 12 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +20 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 532.0,
            "description": "Réduit les [00D5FF]stats de PV[-] de @target.allEnemies de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts de [00D5FF]Répression[-] égaux à 532 % de l'attaque, puis restaure les PV de tous les alliés à hauteur de 20 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +35 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 570.0,
            "description": "Réduit les [00D5FF]stats de PV[-] de @target.allEnemies de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-], inflige des dégâts de [00D5FF]Répression[-] égaux à 570 % de l'attaque, puis restaure les PV de tous les alliés à hauteur de 30 % des dégâts infligés.\\n\\n[00D5FF]※Répression : dégâts infligés +50 % par posture active sur soi.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Reine de la terre",
        "image": "assets/1057501/images/icon_exclusive_skill_1057501__ef874b68ff2fabad.png",
        "description": "Lorsque l'ennemi inflige des dégâts au héros avec une attaque, augmente les [00D5FF]dégâts infligés[-] par le héros de [FFAE00]15 %[-] ([FFAE00]60 %[-] max.) et ses stats offensives de [FFAE00]7 %[-] ([FFAE00]28 %[-] max.).\\n\\nLa quantité de PV perdus à cause de compétences ou d'effets de compétence s'accumule sous forme de points ([FFAE00]500 000 pts max.[-]). Lorsque le héros utilise une compétence, augmente ses [00D5FF]dégâts infligés[-] à hauteur de [FFAE00]30 %[-] des points accumulés.\\n\\nChaque fois que le héros adopte une posture, augmente les stats offensives des alliés de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Tant que la posture du héros est active, réduit les [00D5FF]dégâts subis[-] par les alliés de [FFAE00]40 %[-].\\n\\nLorsque le héros a adopté une posture, les dégâts infligés aux [00D5FF]alliés concernés[-] avec des compétences pendant le tour ennemi ne peuvent pas excéder [FFAE00]50 %[-] de leurs PV max. Lorsque la posture du héros est retirée, restaure [FFAE00]20 %[-] des PV max. des [00D5FF]alliés concernés[-].\\n[i][C0C0C0]※Alliés concernés : géants et Les [Seven Deadly Sins][-][/i]\\n\\nRéduit les [00D5FF]dégâts subis[-] par le héros de [FFAE00]1 %[-] pour chaque [FFAE00]1 %[-] de PV restants.",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Lorsque l'ennemi inflige des dégâts au héros avec une attaque, augmente les [00D5FF]dégâts infligés[-] par le héros de [FFAE00]15 %[-] ([FFAE00]60 %[-] max.) et ses stats offensives de [FFAE00]7 %[-] ([FFAE00]28 %[-] max.).\\n\\nLa quantité de PV perdus à cause de compétences ou d'effets de compétence s'accumule sous forme de points ([FFAE00]500 000 pts max.[-]). Lorsque le héros utilise une compétence, augmente ses [00D5FF]dégâts infligés[-] à hauteur de [FFAE00]30 %[-] des points accumulés.\\n\\nChaque fois que le héros adopte une posture, augmente les stats offensives des alliés de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Tant que la posture du héros est active, réduit les [00D5FF]dégâts subis[-] par les alliés de [FFAE00]40 %[-].\\n\\nLorsque le héros a adopté une posture, les dégâts infligés aux [00D5FF]alliés concernés[-] avec des compétences pendant le tour ennemi ne peuvent pas excéder [FFAE00]50 %[-] de leurs PV max. Lorsque la posture du héros est retirée, restaure [FFAE00]20 %[-] des PV max. des [00D5FF]alliés concernés[-].\\n[i][C0C0C0]※Alliés concernés : géants et Les [Seven Deadly Sins][-][/i]\\n\\nRéduit les [00D5FF]dégâts subis[-] par le héros de [FFAE00]1 %[-] pour chaque [FFAE00]1 %[-] de PV restants."
          }
        ]
      },
      "idForme": 312505,
      "portrait": "assets/1057501/images/icon_hero_diane_queen_0013_s__d36c4f1672ac9c69.png",
      "portraitVertical": "assets/1057501/images/icon_skin_diane_queen_0013_l__84424b452f910dae.png"
    }
  ],
  "costumes": [
    {
      "id": "3312501",
      "categorie": "Skin",
      "nom": "Tenue d'entraînement confortable",
      "image": "assets/1057501/images/icon_skin_diane_queen_0002_l__6517cf15845cf6cb.png",
      "rarete": ""
    },
    {
      "id": "3312503",
      "categorie": "Skin",
      "nom": "Robe chocolat noir",
      "image": "assets/1057501/images/icon_skin_diane_queen_0011_l__f826e26b13a82735.png",
      "rarete": ""
    },
    {
      "id": "3312550",
      "categorie": "Skin",
      "nom": "Tenue de héros (orange)",
      "image": "assets/1057501/images/icon_skin_diane_queen_0006_l__ded3c7f6f4294b73.png",
      "rarete": ""
    },
    {
      "id": "3312551",
      "categorie": "Skin",
      "nom": "Reine mythique",
      "image": "assets/1057501/images/icon_skin_diane_queen_0003_l__2de854e6f36a64ef.png",
      "rarete": ""
    },
    {
      "id": "3312552",
      "categorie": "Skin",
      "nom": "Joueuse pro",
      "image": "assets/1057501/images/icon_skin_diane_queen_0004_l__17193b38905ecccd.png",
      "rarete": ""
    },
    {
      "id": "3312553",
      "categorie": "Skin",
      "nom": "Reine barbare",
      "image": "assets/1057501/images/icon_skin_diane_queen_0005_l__2fc02efa7cd95024.png",
      "rarete": ""
    },
    {
      "id": "3312555",
      "categorie": "Skin",
      "nom": "Uniforme de professionnelle",
      "image": "assets/1057501/images/icon_skin_diane_queen_0009_l__38218288f006b984.png",
      "rarete": ""
    },
    {
      "id": "3312557",
      "categorie": "Skin",
      "nom": "Reine de Cœur bienveillante",
      "image": "assets/1057501/images/icon_skin_diane_queen_0010_l__d74e6a142e80defb.png",
      "rarete": ""
    },
    {
      "id": "3312556",
      "categorie": "Skin",
      "nom": "Artiste du mois",
      "image": "assets/1057501/images/icon_skin_diane_queen_0008_l__fcc1e09a299f7557.png",
      "rarete": ""
    },
    {
      "id": "3312502",
      "categorie": "Skin",
      "nom": "Tenue de combat de la Guerre sainte",
      "image": "assets/1057501/images/icon_skin_diane_queen_0001_l__c4e96c21037bd095.png",
      "rarete": ""
    },
    {
      "id": "3312504",
      "categorie": "Skin",
      "nom": "Robe chocolat délicieux",
      "image": "assets/1057501/images/icon_skin_diane_queen_0012_l__1505f5115b53025c.png",
      "rarete": ""
    },
    {
      "id": "3312505",
      "categorie": "Skin",
      "nom": "Armure verdoyante brillante",
      "image": "assets/1057501/images/icon_skin_diane_queen_0013_l__84424b452f910dae.png",
      "rarete": ""
    },
    {
      "id": "3312554",
      "categorie": "Skin",
      "nom": "Armure glorieuse de confrérie",
      "image": "assets/1057501/images/icon_skin_diane_queen_0007_l__33a032cba653cc67.png",
      "rarete": ""
    },
    {
      "id": "873001",
      "categorie": "Weapon",
      "nom": "Gideon",
      "image": "assets/1057501/images/icon_weapon_diane_queen_0001_l__5acb6cfc50266720.png",
      "rarete": ""
    },
    {
      "id": "873002",
      "categorie": "Weapon",
      "nom": "Marteau de guerre de reine",
      "image": "assets/1057501/images/icon_weapon_diane_queen_0003_l__248b8ba65249be2b.png",
      "rarete": ""
    },
    {
      "id": "873003",
      "categorie": "Weapon",
      "nom": "Marteau d'arcade",
      "image": "assets/1057501/images/icon_weapon_diane_queen_0004_l__e8486a4521f61f6d.png",
      "rarete": ""
    },
    {
      "id": "873004",
      "categorie": "Weapon",
      "nom": "Relique des géants",
      "image": "assets/1057501/images/icon_weapon_diane_queen_0005_l__bef6b554c5ffdf42.png",
      "rarete": ""
    },
    {
      "id": "873005",
      "categorie": "Weapon",
      "nom": "Bâton de professionnelle",
      "image": "assets/1057501/images/icon_weapon_diane_queen_0009_l__e41339605ffc3238.png",
      "rarete": ""
    },
    {
      "id": "873007",
      "categorie": "Weapon",
      "nom": "Sceptre de la Reine de Cœur",
      "image": "assets/1057501/images/icon_weapon_diane_queen_0010_l__db5bbff2a09d22e6.png",
      "rarete": ""
    },
    {
      "id": "873006",
      "categorie": "Weapon",
      "nom": "Rouleau à peinture",
      "image": "assets/1057501/images/icon_weapon_diane_queen_0008_l__b49d9b1d07d20056.png",
      "rarete": ""
    },
    {
      "id": "873009",
      "categorie": "Weapon",
      "nom": "Marteau macaron délicieux",
      "image": "assets/1057501/images/icon_weapon_diane_queen_0012_l__dbe85aa245e80a00.png",
      "rarete": ""
    },
    {
      "id": "873008",
      "categorie": "Weapon",
      "nom": "Marteau de gel de Náströnd",
      "image": "assets/1057501/images/icon_weapon_diane_queen_0001_l__5acb6cfc50266720.png",
      "rarete": ""
    },
    {
      "id": "4047001",
      "categorie": "Head",
      "nom": "Couettes habituelles",
      "image": "assets/1057501/images/icon_head_diane_queen_0001_l__d61d53de2c31377e.png",
      "rarete": ""
    },
    {
      "id": "4047002",
      "categorie": "Head",
      "nom": "Couronne dorée de reine",
      "image": "assets/1057501/images/icon_head_diane_queen_0003_l__aadc777221951795.png",
      "rarete": ""
    },
    {
      "id": "4047003",
      "categorie": "Head",
      "nom": "Casque de jeu",
      "image": "assets/1057501/images/icon_head_diane_queen_0004_l__a921c2a29a1d5869.png",
      "rarete": ""
    },
    {
      "id": "4047004",
      "categorie": "Head",
      "nom": "Couronne de reine",
      "image": "assets/1057501/images/icon_head_diane_queen_0005_l__2230dba1669ba41b.png",
      "rarete": ""
    },
    {
      "id": "4047006",
      "categorie": "Head",
      "nom": "Bandeau bicolore",
      "image": "assets/1057501/images/icon_head_diane_queen_0009_l__c82a726ecbf4fcab.png",
      "rarete": ""
    },
    {
      "id": "4047008",
      "categorie": "Head",
      "nom": "Couronne chic",
      "image": "assets/1057501/images/icon_head_diane_queen_0010_l__277e54fa681ef953.png",
      "rarete": ""
    },
    {
      "id": "4047007",
      "categorie": "Head",
      "nom": "Bandana d'artiste",
      "image": "assets/1057501/images/icon_head_diane_queen_0008_l__5a76ba44a458455b.png",
      "rarete": ""
    },
    {
      "id": "4047009",
      "categorie": "Head",
      "nom": "Petit chapeau velours rouge",
      "image": "assets/1057501/images/icon_head_diane_queen_0012_l__f5afc5e636612e30.png",
      "rarete": ""
    },
    {
      "id": "4047011",
      "categorie": "Head",
      "nom": "Couronne verdoyante brillante",
      "image": "assets/1057501/images/icon_head_diane_queen_0013_l__4085bac959b297f1.png",
      "rarete": ""
    },
    {
      "id": "4047005",
      "categorie": "Head",
      "nom": "Barrette de gardienne",
      "image": "assets/1057501/images/icon_head_diane_queen_0501_l__8d637a9658b52ed8.png",
      "rarete": ""
    },
    {
      "id": "4047010",
      "categorie": "Head",
      "nom": "Cœurs en chocolat",
      "image": "assets/1057501/images/icon_head_diane_queen_0503_l__be6e61bbd03fedcb.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Marteau de gel de Náströnd",
    "image": "assets/1057501/images/icon_weapon_diane_queen_0551_s__92c9f9b09b75b704.png",
    "description": "Relique sacrée de Reine Diane (arme).\\n[DC143C]Marteau issu de Náströnd, une région du royaume de Niflheim. Même les âmes de criminels infâmes qui arrivent à Náströnd tremblent de peur face à ce marteau.[-]",
    "passif": {
      "nom": "Marteau de gel de Náströnd",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Augmente les dégâts infligés par les alliés de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-] lorsque le héros adopte une posture."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 200.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 500.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 2000.0
      }
    ],
    "materiaux": [
      {
        "nom": "Or",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Origine de la corruption des racines",
        "image": "assets/commun/icon_craft_costume_rare_material_04__4083e9decd2eb5e0.png",
        "quantite": 15
      },
      {
        "nom": "Cristal rouge obscur",
        "image": "assets/commun/icon_craft_costume_material_08__53b70f5c9ddcb41a.png",
        "quantite": 30
      },
      {
        "nom": "Essence magique inconnue",
        "image": "assets/commun/icon_craft_costume_key_material_16__f15a600e7e4fe219.png",
        "quantite": 80
      },
      {
        "nom": "Méticulosité d'Eitri",
        "image": "assets/commun/icon_craft_costume_material_07__ee745c99ba8751db.png",
        "quantite": 80
      }
    ],
    "provenance": "Nídhögg"
  }
};