window.fichePreparee={
  "nom": "Estarossa déchaîné",
  "designation": "[Corruption des ténèbres]",
  "titre": "Estarossa déchaîné",
  "idJeu": "1585501",
  "attribut": {
    "nom": "@attribute.3",
    "icone": "assets/commun/icon_filter_attribute_03__4980bb489ce93431.png",
    "couleur": "#50b8ea",
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
  "caracteristiques": [
    "@characteristic.2"
  ],
  "portrait": "assets/1585501/images/icon_hero_estarossa_assault_0001_s__a2d6c75f0901b76b.png",
  "rareteParDefaut": "UR",
  "presentation": "[Corruption des ténèbres] Estarossa déchaîné possède une compétence qui applique l'effet cumulable Ténèbres, ce qui augmente les dégâts subis par la cible.",
  "commandement": {
    "nom": "Commandements de la [b]Charité[/b], de la [b]Vérité[/b] et de la [b]Réticence[/b]",
    "image": "assets/1585501/images/icon_exclusive_skill_1585551__551d34ae25919ca3.png",
    "simpleImage": null,
    "description": "Retire [FFAE00]1[-] bonus octroyé au héros lorsque le héros utilise une compétence en [00D5FF]JCJ[-].\\n[00D5FF](S'applique aux alliés et aux ennemis, s'applique à l'entrée au combat)[-]"
  },
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1585501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1585501/images/hero_illust_estarossa_assault_1585501__09e72f28c693fa07.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 580.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 350.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6700.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4190
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
            "valeur": 190.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 75.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 55.0,
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
            "valeur": 15.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Tentacule tranchant »",
          "image": "assets/1585501/images/icon_estarossa_assault_ssr_type01_skill_03__9b8524cb3c09b079.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts d'[00D5FF]Opération noire[-] égaux à 200 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Opération noire : dégâts infligés [FFAE00]+[-]50 % pour chaque effet Ténèbres sur @target.oneEnemy.[-]",
              "idJeu": 1000001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts d'[00D5FF]Opération noire[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Opération noire : dégâts infligés [FFAE00]+[-]50 % pour chaque effet Ténèbres sur @target.oneEnemy.[-]",
              "idJeu": 1000002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts d'[00D5FF]Opération noire[-] égaux à 500 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Opération noire : dégâts infligés [FFAE00]+[-]50 % pour chaque effet Ténèbres sur @target.oneEnemy.[-]",
              "idJeu": 1000003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Rage »",
          "image": "assets/1585501/images/icon_estarossa_assault_ssr_type01_skill_04__9619c2f5092dc3b3.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts de [00D5FF]Déluge[-] égaux à 200 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant sur soi.[-]",
              "idJeu": 1000011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts de [00D5FF]Déluge[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant sur soi.[-]",
              "idJeu": 1000012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts de [00D5FF]Déluge[-] égaux à 500 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant sur soi.[-]",
              "idJeu": 1000013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Molosse maléfique »",
        "image": "assets/1585501/images/icon_estarossa_assault_ssr_type01_special_01__32ec9dc986bb9873.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 380.0,
            "description": "[00D5FF]Réduit[-] l'attaque de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]380 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +5 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 418.0,
            "description": "[00D5FF]Réduit[-] l'attaque de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]418 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +10 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 456.0,
            "description": "[00D5FF]Réduit[-] l'attaque et la défense de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]456 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +15 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 494.0,
            "description": "[00D5FF]Réduit[-] l'attaque et la défense de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]494 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +20 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 532.0,
            "description": "[00D5FF]Réduit[-] les stats de base de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]532 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +30 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 570.0,
            "description": "[00D5FF]Réduit[-] les stats de base de tous les ennemis de [FFAE00]30 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]570 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +40 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Fureur des ténèbres",
        "image": "assets/1585501/images/icon_exclusive_skill_1585501__c7c4bbf523f9a360.png",
        "description": "[00D5FF]Lorsqu'un allié qui appartient au clan des démons ou qui possède un Commandement[-] inflige des dégâts à l'ennemi, applique [00D5FF]Ténèbres[-] sur la cible. Applique l'effet [00D5FF]Emprise[-] à la cible pendant [FFAE00]1 tour[-] lorsqu'elle souffre déjà d'au moins [FFAE00]4[-] effets [00D5FF]Ténèbres[-]. Augmente les stats de base des alliés de [FFAE00]5 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Ténèbres ou Emprise[-] présent sur l'ennemi ([FFAE00]10 fois max.[-]).\\n\\n[00D5FF]※Ténèbres : augmente les dégâts subis de [FFAE00]+10 %[-] (5 fois max.)[-]\\n[00D5FF].※Emprise : réduit toutes les stats de [FFAE00]40 %[-] (les effets Ténèbres disparaissent en même temps que l'effet Emprise, ne se cumule pas).[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "[00D5FF]Lorsqu'un allié qui appartient au clan des démons ou qui possède un Commandement[-] inflige des dégâts à l'ennemi, applique [00D5FF]Ténèbres[-] sur la cible. Applique l'effet [00D5FF]Emprise[-] à la cible pendant [FFAE00]1 tour[-] lorsqu'elle souffre déjà d'au moins [FFAE00]4[-] effets [00D5FF]Ténèbres[-]. Augmente les stats de base des alliés de [FFAE00]5 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Ténèbres ou Emprise[-] présent sur l'ennemi ([FFAE00]10 fois max.[-]).\\n\\n[00D5FF]※Ténèbres : augmente les dégâts subis de [FFAE00]+10 %[-] (5 fois max.)[-]\\n[00D5FF].※Emprise : réduit toutes les stats de [FFAE00]40 %[-] (les effets Ténèbres disparaissent en même temps que l'effet Emprise, ne se cumule pas).[-]"
          }
        ]
      },
      "idForme": 313401,
      "portrait": "assets/1585501/images/icon_hero_estarossa_assault_0003_s__ab9000b229fd5564.png",
      "portraitVertical": "assets/1585501/images/icon_skin_estarossa_assault_0003_l__b94bbf5c54cccf9e.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1585501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1585501/images/hero_illust_estarossa_assault_1585501__09e72f28c693fa07.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 800.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 420.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4726
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
            "valeur": 190.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 75.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 55.0,
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
            "valeur": 15.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Tentacule tranchant »",
          "image": "assets/1585501/images/icon_estarossa_assault_ssr_type01_skill_03__9b8524cb3c09b079.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts d'[00D5FF]Opération noire[-] égaux à 200 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Opération noire : dégâts infligés [FFAE00]+[-]50 % pour chaque effet Ténèbres sur @target.oneEnemy.[-]",
              "idJeu": 1000001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts d'[00D5FF]Opération noire[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Opération noire : dégâts infligés [FFAE00]+[-]50 % pour chaque effet Ténèbres sur @target.oneEnemy.[-]",
              "idJeu": 1000002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts d'[00D5FF]Opération noire[-] égaux à 500 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Opération noire : dégâts infligés [FFAE00]+[-]50 % pour chaque effet Ténèbres sur @target.oneEnemy.[-]",
              "idJeu": 1000003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Rage »",
          "image": "assets/1585501/images/icon_estarossa_assault_ssr_type01_skill_04__9619c2f5092dc3b3.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts de [00D5FF]Déluge[-] égaux à 200 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant sur soi.[-]",
              "idJeu": 1000011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts de [00D5FF]Déluge[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant sur soi.[-]",
              "idJeu": 1000012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts de [00D5FF]Déluge[-] égaux à 500 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Déluge : 0.8 % de dégâts supplémentaires pour [FFAE00]chaque pourcentage[-] de PV restant sur soi.[-]",
              "idJeu": 1000013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Molosse maléfique »",
        "image": "assets/1585501/images/icon_estarossa_assault_ssr_type01_special_01__32ec9dc986bb9873.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 380.0,
            "description": "[00D5FF]Réduit[-] l'attaque de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]380 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +5 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 418.0,
            "description": "[00D5FF]Réduit[-] l'attaque de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]418 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +10 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 456.0,
            "description": "[00D5FF]Réduit[-] l'attaque et la défense de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]456 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +15 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 494.0,
            "description": "[00D5FF]Réduit[-] l'attaque et la défense de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]494 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +20 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 532.0,
            "description": "[00D5FF]Réduit[-] les stats de base de tous les ennemis de [FFAE00]20 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]532 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +30 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 570.0,
            "description": "[00D5FF]Réduit[-] les stats de base de tous les ennemis de [FFAE00]30 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Résonance[-] égaux à [FFAE00]570 %[-] de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Résonance : +40 % de dégâts infligés pour [FFAE00]chaque[-] bonus, malus et posture sur @target.allEnemies.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Fureur des ténèbres",
        "image": "assets/1585501/images/icon_exclusive_skill_1585501__c7c4bbf523f9a360.png",
        "description": "[00D5FF]Lorsqu'un allié qui appartient au clan des démons ou qui possède un Commandement[-] inflige des dégâts à l'ennemi, applique [00D5FF]Ténèbres[-] sur la cible. Applique l'effet [00D5FF]Emprise[-] à la cible pendant [FFAE00]1 tour[-] lorsqu'elle souffre déjà d'au moins [FFAE00]4[-] effets [00D5FF]Ténèbres[-]. Augmente les stats de base des alliés de [FFAE00]5 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Ténèbres ou Emprise[-] présent sur l'ennemi ([FFAE00]10 fois max.[-]).\\n\\n[00D5FF]※Ténèbres : augmente les dégâts subis de [FFAE00]+10 %[-] (5 fois max.)[-]\\n[00D5FF].※Emprise : réduit toutes les stats de [FFAE00]40 %[-] (les effets Ténèbres disparaissent en même temps que l'effet Emprise, ne se cumule pas).[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "[00D5FF]Lorsqu'un allié qui appartient au clan des démons ou qui possède un Commandement[-] inflige des dégâts à l'ennemi, applique [00D5FF]Ténèbres[-] sur la cible. Applique l'effet [00D5FF]Emprise[-] à la cible pendant [FFAE00]1 tour[-] lorsqu'elle souffre déjà d'au moins [FFAE00]4[-] effets [00D5FF]Ténèbres[-]. Augmente les stats de base des alliés de [FFAE00]5 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Ténèbres ou Emprise[-] présent sur l'ennemi ([FFAE00]10 fois max.[-]).\\n\\n[00D5FF]※Ténèbres : augmente les dégâts subis de [FFAE00]+10 %[-] (5 fois max.)[-]\\n[00D5FF].※Emprise : réduit toutes les stats de [FFAE00]40 %[-] (les effets Ténèbres disparaissent en même temps que l'effet Emprise, ne se cumule pas).[-]"
          }
        ]
      },
      "idForme": 313402,
      "portrait": "assets/1585501/images/icon_hero_estarossa_assault_0001_s__a2d6c75f0901b76b.png",
      "portraitVertical": "assets/1585501/images/icon_skin_estarossa_assault_0001_l__ad5f8f3b09d78ccf.png"
    }
  ],
  "costumes": [
    {
      "id": "3313401",
      "categorie": "Skin",
      "nom": "Ténèbres envahissantes",
      "image": "assets/1585501/images/icon_skin_estarossa_assault_0003_l__b94bbf5c54cccf9e.png",
      "rarete": ""
    },
    {
      "id": "3313403",
      "categorie": "Skin",
      "nom": "Brise-tabou",
      "image": "assets/1585501/images/icon_skin_estarossa_assault_0009_l__9db2b73bc9717510.png",
      "rarete": ""
    },
    {
      "id": "3313450",
      "categorie": "Skin",
      "nom": "Seigneur des flammes",
      "image": "assets/1585501/images/icon_skin_estarossa_assault_0004_l__35beda551090ce4c.png",
      "rarete": ""
    },
    {
      "id": "3313451",
      "categorie": "Skin",
      "nom": "Guerrier loup sauvage",
      "image": "assets/1585501/images/icon_skin_estarossa_assault_0005_l__42be1dd73355f88b.png",
      "rarete": ""
    },
    {
      "id": "3313452",
      "categorie": "Skin",
      "nom": "Motard costaud",
      "image": "assets/1585501/images/icon_skin_estarossa_assault_0006_l__6ea81274254fdc7c.png",
      "rarete": ""
    },
    {
      "id": "3313453",
      "categorie": "Skin",
      "nom": "Gardien de la vie",
      "image": "assets/1585501/images/icon_skin_estarossa_assault_0008_l__20e338c1a634b34e.png",
      "rarete": ""
    },
    {
      "id": "3313454",
      "categorie": "Skin",
      "nom": "Tenue de loup",
      "image": "assets/1585501/images/icon_skin_estarossa_assault_0007_l__d2f4bae8478f2f42.png",
      "rarete": ""
    },
    {
      "id": "3313402",
      "categorie": "Skin",
      "nom": "Corruption des ténèbres",
      "image": "assets/1585501/images/hero_estarossa_assault_body_0001_ingame_M__470ca89d9277aecd.png",
      "rarete": ""
    },
    {
      "id": "3313404",
      "categorie": "Skin",
      "nom": "Chasseur démoniaque",
      "image": "assets/1585501/images/icon_skin_estarossa_assault_0010_l__f3bae5da6e19dd05.png",
      "rarete": ""
    },
    {
      "id": "872901",
      "categorie": "Weapon",
      "nom": "Mains nues",
      "image": "assets/1585501/images/icon_weapon_estarossa_assault_0001_l__05c6ced39bbebb07.png",
      "rarete": ""
    },
    {
      "id": "872902",
      "categorie": "Weapon",
      "nom": "Gantelets de feu",
      "image": "assets/1585501/images/icon_weapon_estarossa_assault_0004_l__15999ccbb3f352cf.png",
      "rarete": ""
    },
    {
      "id": "872903",
      "categorie": "Weapon",
      "nom": "Gantelets du loup",
      "image": "assets/1585501/images/icon_weapon_estarossa_assault_0005_l__d6d3f9156d003dbc.png",
      "rarete": ""
    },
    {
      "id": "872904",
      "categorie": "Weapon",
      "nom": "Protège-bras enchaînés",
      "image": "assets/1585501/images/icon_weapon_estarossa_assault_0006_l__d79013b82b9d95b3.png",
      "rarete": ""
    },
    {
      "id": "872905",
      "categorie": "Weapon",
      "nom": "Bénédiction d'Eikthyrnir",
      "image": "assets/1585501/images/icon_weapon_estarossa_assault_0008_l__a6d0cda83d9dbc2c.png",
      "rarete": ""
    },
    {
      "id": "872906",
      "categorie": "Weapon",
      "nom": "Gants de loup",
      "image": "assets/1585501/images/icon_weapon_estarossa_assault_0007_l__a3c036f760dcce44.png",
      "rarete": ""
    },
    {
      "id": "872908",
      "categorie": "Weapon",
      "nom": "Gants infernaux",
      "image": "assets/1585501/images/icon_weapon_estarossa_assault_0010_l__385fcb13b02ae871.png",
      "rarete": ""
    },
    {
      "id": "872907",
      "categorie": "Weapon",
      "nom": "Griffe de Garm",
      "image": "assets/1585501/images/icon_weapon_estarossa_assault_0001_l__05c6ced39bbebb07.png",
      "rarete": ""
    },
    {
      "id": "4001801",
      "categorie": "Head",
      "nom": "Coiffure simple",
      "image": "assets/1585501/images/hero_estarossa_assault_head_0001_ingame_D__b4691309f93ca8fb.png",
      "rarete": ""
    },
    {
      "id": "4001802",
      "categorie": "Head",
      "nom": "Cheveux bien coiffés",
      "image": "assets/1585501/images/icon_head_estarossa_assault_0004_l__34797152744560fb.png",
      "rarete": ""
    },
    {
      "id": "4001803",
      "categorie": "Head",
      "nom": "Apparence sauvage",
      "image": "assets/1585501/images/icon_head_estarossa_assault_0005_l__0761d7c32ee1d83e.png",
      "rarete": ""
    },
    {
      "id": "4001804",
      "categorie": "Head",
      "nom": "Cheveux au vent de motard",
      "image": "assets/1585501/images/icon_head_estarossa_assault_0006_l__5a41155a7cedc393.png",
      "rarete": ""
    },
    {
      "id": "4001806",
      "categorie": "Head",
      "nom": "Cornes du gardien",
      "image": "assets/1585501/images/icon_head_estarossa_assault_0008_l__75eec9c456b1416d.png",
      "rarete": ""
    },
    {
      "id": "4001807",
      "categorie": "Head",
      "nom": "Chapeau de loup",
      "image": "assets/1585501/images/icon_head_estarossa_assault_0007_l__61a7ea2493cd179a.png",
      "rarete": ""
    },
    {
      "id": "4001808",
      "categorie": "Head",
      "nom": "Cheveux gominés de chasseur",
      "image": "assets/1585501/images/icon_head_estarossa_assault_0010_l__2286a135a0711f13.png",
      "rarete": ""
    },
    {
      "id": "4001805",
      "categorie": "Head",
      "nom": "Cornes démoniaques",
      "image": "assets/1585501/images/icon_head_estarossa_assault_0501_l__860276d514810041.png",
      "rarete": ""
    },
    {
      "id": "4001809",
      "categorie": "Head",
      "nom": "Fédora de corruption",
      "image": "assets/1585501/images/icon_head_estarossa_assault_0502_l__cb8f28781bafad8b.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Griffe de Garm",
    "image": "assets/1585501/images/icon_weapon_estarossa_assault_0551_s__77367548d7fdf9b0.png",
    "description": "Relique sacrée d'Estarossa déchaîné (arme).\\n[DC143C]Gantelets fabriqués à partir des griffes de Garm, le chien de chasse d'Helheim. Les gantelets sont imprégnés des miasmes d'Helheim, ce qui leur permet de brûler les chairs qu'ils touchent.[-]",
    "passif": {
      "nom": "Griffe de Garm",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Réduit la jauge de coup ultime de tous les ennemis de [FFAE00]1 orbe[-] à la fin du tour lorsque le héros met un ennemi K.O. [00D5FF]avec une compétence[-]."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 540.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 300.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 3600.0
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
    "provenance": "Nídhögg"
  }
};