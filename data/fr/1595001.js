window.fichePreparee={
  "nom": "Zeldris de la [b]Piété[/b]",
  "designation": "[Les Dix Commandements]",
  "titre": "Zeldris de la [b]Piété[/b]",
  "idJeu": "1595001",
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
  "portrait": "assets/1595001/images/icon_hero_zeldris_0018_s__e881df8c3a838745.png",
  "rareteParDefaut": "LR",
  "presentation": "[Les Dix Commandements] Zeldris de la [b]Piété[/b] possède une compétence qui inflige de gros dégâts de Pointe à un ennemi. Il peut aussi récupérer des PV quand il inflige un coup critique grâce à l'effet Désespoir de son autre compétence, ce qui augmente sa capacité de survie.",
  "commandement": {
    "nom": "Commandement de la [b]Piété[/b]",
    "image": "assets/1595001/images/icon_exclusive_skill_1595051__43d564578549964c.png",
    "simpleImage": "assets/1595001/images/icon_exclusive_skill_1595051_simple__e5246a259a4a3bc7.png",
    "description": "Retire [FFAE00]1  orbe(s)[-] de la jauge de coup ultime et retire les malus quand les compétences sont déplacées.\\n[00D5FF](S'applique aux alliés et aux ennemis à l'entrée au combat, mais pas en affrontement.)[-]"
  },
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1595001/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1595001/images/hero_illust_zeldris_1595001__185c0caa6f788594.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 600.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 420.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3911
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 60.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 140.0,
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
            "valeur": 40.0,
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
            "valeur": 140.0,
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
          "nom": "« Taillade expéditive »",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_01__dcb5d0771fa3f9a7.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 160.0,
              "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 160 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
              "idJeu": 172001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 240.0,
              "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 240 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
              "idJeu": 172002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 400 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
              "idJeu": 172003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Lame invisible »",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_02__c14b143adc5df07b.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflige des dégâts de [00D5FF]Désespoir[-] égaux à 130 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Désespoir : restaure 15 % des PV perdus lors d'un coup critique réussi.[-]",
              "idJeu": 172011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 195.0,
              "description": "Inflige des dégâts de [00D5FF]Désespoir[-] égaux à 195 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Désespoir : restaure 20 % des PV perdus lors d'un coup critique réussi.[-]",
              "idJeu": 172012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 325.0,
              "description": "Inflige des dégâts de [00D5FF]Désespoir[-] égaux à 325 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Désespoir : restaure 30 % des PV perdus lors d'un coup critique réussi.[-]",
              "idJeu": 172013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Imprudence »",
        "image": "assets/1595001/images/icon_zeldris_ssr_type01_special_01__f8ad253ebfe00487.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 560 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 616 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 672 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 728 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 784 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 840 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Adjoint du roi des démons",
        "image": "assets/1595001/images/icon_exclusive_skill_1595001__cf24b6a2fef731c3.png",
        "description": "Augmente les dégâts crit. du héros de [FFAE00]30 %[-] [FFAE00]pour chaque orbe[-] de la jauge de coup ultime du héros en moins.\\n[00D5FF](3 fois seulement, hors jauge vidée après utilisation d'un coup ultime)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les dégâts crit. du héros de [FFAE00]30 %[-] [FFAE00]pour chaque orbe[-] de la jauge de coup ultime du héros en moins.\\n[00D5FF](3 fois seulement, hors jauge vidée après utilisation d'un coup ultime)[-]"
          }
        ]
      },
      "idForme": 322001,
      "portrait": "assets/1595001/images/icon_hero_zeldris_0001_s__2bda8dc254034c51.png",
      "portraitVertical": "assets/1595001/images/icon_skin_zeldris_0001_l__5dfafb1b0f1d37c1.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1595001/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1595001/images/hero_illust_zeldris_1595001__185c0caa6f788594.png",
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
            "valeur": 480.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4539
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 60.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 140.0,
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
            "valeur": 40.0,
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
            "valeur": 140.0,
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
          "nom": "« Taillade expéditive »",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_01__dcb5d0771fa3f9a7.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 160.0,
              "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 160 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
              "idJeu": 172001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 240.0,
              "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 240 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
              "idJeu": 172002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 400 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
              "idJeu": 172003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Lame invisible »",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_02__c14b143adc5df07b.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 130.0,
              "description": "Inflige des dégâts de [00D5FF]Désespoir[-] égaux à 130 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Désespoir : restaure 15 % des PV perdus lors d'un coup critique réussi.[-]",
              "idJeu": 172011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 195.0,
              "description": "Inflige des dégâts de [00D5FF]Désespoir[-] égaux à 195 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Désespoir : restaure 20 % des PV perdus lors d'un coup critique réussi.[-]",
              "idJeu": 172012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 325.0,
              "description": "Inflige des dégâts de [00D5FF]Désespoir[-] égaux à 325 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Désespoir : restaure 30 % des PV perdus lors d'un coup critique réussi.[-]",
              "idJeu": 172013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Imprudence »",
        "image": "assets/1595001/images/icon_zeldris_ssr_type01_special_01__f8ad253ebfe00487.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 560 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 616 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 672 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 728 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 784 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 840 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Adjoint du roi des démons",
        "image": "assets/1595001/images/icon_exclusive_skill_1595001__cf24b6a2fef731c3.png",
        "description": "Augmente les dégâts crit. du héros de [FFAE00]30 %[-] [FFAE00]pour chaque orbe[-] de la jauge de coup ultime du héros en moins.\\n[00D5FF](3 fois seulement, hors jauge vidée après utilisation d'un coup ultime)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les dégâts crit. du héros de [FFAE00]30 %[-] [FFAE00]pour chaque orbe[-] de la jauge de coup ultime du héros en moins.\\n[00D5FF](3 fois seulement, hors jauge vidée après utilisation d'un coup ultime)[-]"
          }
        ]
      },
      "idForme": 322002,
      "portrait": "assets/1595001/images/icon_hero_zeldris_0002_s__42d4db50d1c0c6d9.png",
      "portraitVertical": "assets/1595001/images/icon_skin_zeldris_0002_l__4b340a24614e9d4a.png"
    },
    {
      "id": "LR",
      "nom": "LR",
      "icone": "assets/commun/icon_filter_grade_LR__01254701e83a6f69.png",
      "cadre": "assets/commun/common_frame_rank_lr.png",
      "fond": "assets/commun/icon_hero_basic_s_7__1f68b57601e76589.png",
      "coin": "assets/commun/common_level_frame_rank_lr.png",
      "couleur": "#f3ce80",
      "image": "assets/1595001/images/hero_illust_zeldris_1595001__185c0caa6f788594.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 100,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 800.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 470.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9100.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5656
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 110.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 220.0,
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
            "valeur": 85.0,
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
            "valeur": 140.0,
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
          "nom": "« Taillade expéditive »",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_01__dcb5d0771fa3f9a7.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 176.0,
              "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 176 % de l'attaque à @target.oneEnemy et [00D5FF]retire[-] 1 [FFAE00]orbe(s)[-] de leur jauge de coup ultime.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
              "idJeu": 172041,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 264.0,
              "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 264 % de l'attaque à @target.oneEnemy et [00D5FF]retire[-] 1 [FFAE00]orbe(s)[-] de leur jauge de coup ultime.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
              "idJeu": 172042,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 440.0,
              "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 440 % de l'attaque à @target.oneEnemy et [00D5FF]retire[-] 3 [FFAE00]orbe(s)[-] de leur jauge de coup ultime.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
              "idJeu": 172043,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Lame invisible »",
          "image": "assets/1595001/images/icon_zeldris_ssr_type01_skill_06__1e4f68481feeab5a.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 143.0,
              "description": "Réduit la résistance crit. de @target.allEnemies de [FFAE00]20 %[-] pendant [FFAE00]1 tour[-], puis inflige des dégâts de [00D5FF]Désespoir[-] égaux à 143 % de l'attaque.\\n\\n[00D5FF]※Désespoir : restaure 15 % des PV perdus lors d'un coup critique réussi.[-]",
              "idJeu": 172051,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 215.0,
              "description": "Réduit la résistance crit. de @target.allEnemies de [FFAE00]30 %[-] pendant [FFAE00]1 tour[-], puis inflige des dégâts de [00D5FF]Désespoir[-] égaux à 215 % de l'attaque.\\n\\n[00D5FF]※Désespoir : restaure 20 % des PV perdus lors d'un coup critique réussi.[-]",
              "idJeu": 172052,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 358.0,
              "description": "Réduit la résistance crit. de @target.allEnemies de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Désespoir[-] égaux à 358 % de l'attaque.\\n\\n[00D5FF]※Désespoir : restaure 30 % des PV perdus lors d'un coup critique réussi.[-]",
              "idJeu": 172053,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Imprudence »",
        "image": "assets/1595001/images/icon_zeldris_ssr_type01_special_01__f8ad253ebfe00487.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Réduit les stats de PV de tous les ennemis de [FFAE00]5 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Pointe[-] égaux à 560 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Réduit les stats de PV de tous les ennemis de [FFAE00]9 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Pointe[-] égaux à 616 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Réduit les stats de PV de tous les ennemis de [FFAE00]13 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Pointe[-] égaux à 672 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Réduit les stats de PV de tous les ennemis de [FFAE00]17 %[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Pointe[-] égaux à 728 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Réduit les stats de PV de tous les ennemis de [FFAE00]21 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Pointe[-] égaux à 784 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Réduit les stats de PV de tous les ennemis de [FFAE00]25 %[-] pendant [FFAE00]3 tours[-], puis inflige des dégâts de [00D5FF]Pointe[-] égaux à 840 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-LR-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Adjoint du roi des démons",
        "image": "assets/1595001/images/icon_exclusive_skill_1595001__cf24b6a2fef731c3.png",
        "description": "Augmente les chances crit. du héros de [FFAE00]100 %[-] pendant [FFAE00]2 tours[-] au début du combat. Augmente les chances crit. du héros de [FFAE00]30 %[-] pour [FFAE00]chaque orbe[-] retiré dans la jauge de coup ultime des ennemis [00D5FF]en utilisant une compétence[-] ([FFAE00]90 %[-] max.). Augmente les dégâts infligés par le héros de [FFAE00]80 %[-] lorsqu'il attaque un ennemi [00D5FF]qui souffre de malus[-].\\n\\nDe plus, augmente les dégâts crit. du héros de [FFAE00]120 %[-] pendant [FFAE00]1 tour[-] [00D5FF]lorsqu'une compétence du héros est déplacée[-]. Augmente les dégâts crit. de [FFAE00]30 %[-] pour [FFAE00]chaque orbe[-] retiré dans la jauge de coup ultime du héros ([FFAE00]90 %[-] max.).\\n[00D5FF](Hors jauge vidée après utilisation d'un coup ultime)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les chances crit. du héros de [FFAE00]100 %[-] pendant [FFAE00]2 tours[-] au début du combat. Augmente les chances crit. du héros de [FFAE00]30 %[-] pour [FFAE00]chaque orbe[-] retiré dans la jauge de coup ultime des ennemis [00D5FF]en utilisant une compétence[-] ([FFAE00]90 %[-] max.). Augmente les dégâts infligés par le héros de [FFAE00]80 %[-] lorsqu'il attaque un ennemi [00D5FF]qui souffre de malus[-].\\n\\nDe plus, augmente les dégâts crit. du héros de [FFAE00]120 %[-] pendant [FFAE00]1 tour[-] [00D5FF]lorsqu'une compétence du héros est déplacée[-]. Augmente les dégâts crit. de [FFAE00]30 %[-] pour [FFAE00]chaque orbe[-] retiré dans la jauge de coup ultime du héros ([FFAE00]90 %[-] max.).\\n[00D5FF](Hors jauge vidée après utilisation d'un coup ultime)[-]"
          }
        ]
      },
      "idForme": 322005,
      "portrait": "assets/1595001/images/icon_hero_zeldris_0018_s__e881df8c3a838745.png",
      "portraitVertical": "assets/1595001/images/icon_skin_zeldris_0018_l__dd95bb0743b51e00.png"
    }
  ],
  "costumes": [
    {
      "id": "3322001",
      "categorie": "Skin",
      "nom": "Tenue de combat des [Dix Commandements]",
      "image": "assets/1595001/images/icon_skin_zeldris_0001_l__5dfafb1b0f1d37c1.png",
      "rarete": ""
    },
    {
      "id": "3322003",
      "categorie": "Skin",
      "nom": "Uniforme de la flamme rouge",
      "image": "assets/1595001/images/icon_skin_zeldris_0007_l__9d867679c687d795.png",
      "rarete": ""
    },
    {
      "id": "3322056",
      "categorie": "Skin",
      "nom": "Trouble-fête de l'équipe de baseball",
      "image": "assets/1595001/images/icon_skin_zeldris_0017_l__e33447b8df4fc308.png",
      "rarete": ""
    },
    {
      "id": "3322050",
      "categorie": "Skin",
      "nom": "Guerrier insolite",
      "image": "assets/1595001/images/icon_skin_zeldris_0003_l__4e6be4ab4d9fd598.png",
      "rarete": ""
    },
    {
      "id": "3322051",
      "categorie": "Skin",
      "nom": "Tenue de vol",
      "image": "assets/1595001/images/icon_skin_zeldris_0004_l__4d86b53e5e0dc1df.png",
      "rarete": ""
    },
    {
      "id": "3322052",
      "categorie": "Skin",
      "nom": "Uniforme soigné",
      "image": "assets/1595001/images/icon_skin_zeldris_0005_l__779652fddac2d494.png",
      "rarete": ""
    },
    {
      "id": "3322053",
      "categorie": "Skin",
      "nom": "Rebelle",
      "image": "assets/1595001/images/icon_skin_zeldris_0006_l__903da557ebf49838.png",
      "rarete": ""
    },
    {
      "id": "3322054",
      "categorie": "Skin",
      "nom": "Tenue de combat enflammée",
      "image": "assets/1595001/images/icon_skin_zeldris_0009_l__da569ccdab729b0d.png",
      "rarete": ""
    },
    {
      "id": "3322002",
      "categorie": "Skin",
      "nom": "Armure cramoisie des ténèbres",
      "image": "assets/1595001/images/icon_skin_zeldris_0002_l__4b340a24614e9d4a.png",
      "rarete": ""
    },
    {
      "id": "3322004",
      "categorie": "Skin",
      "nom": "Uniforme de la flamme rouge chic",
      "image": "assets/1595001/images/icon_skin_zeldris_0008_l__493e1a18461d662f.png",
      "rarete": ""
    },
    {
      "id": "3322005",
      "categorie": "Skin",
      "nom": "Armure éclatante de dragon noir",
      "image": "assets/1595001/images/icon_skin_zeldris_0018_l__dd95bb0743b51e00.png",
      "rarete": ""
    },
    {
      "id": "3322055",
      "categorie": "Skin",
      "nom": "Érosion du cauchemar corrompu",
      "image": "assets/1595001/images/icon_skin_zeldris_0015_l__0a99203e4960cbe6.png",
      "rarete": ""
    },
    {
      "id": "858101",
      "categorie": "Weapon",
      "nom": "Épée de Zeldris",
      "image": "assets/1595001/images/icon_weapon_zeldris_0001_l__1c7b241931f5bfe6.png",
      "rarete": ""
    },
    {
      "id": "858102",
      "categorie": "Weapon",
      "nom": "Épée de l'œil rouge",
      "image": "assets/1595001/images/icon_weapon_zeldris_0003_l__7a60769923b52d25.png",
      "rarete": ""
    },
    {
      "id": "858103",
      "categorie": "Weapon",
      "nom": "Épée tranchante de mutilation",
      "image": "assets/1595001/images/icon_weapon_zeldris_0004_l__bca5be99e18684ca.png",
      "rarete": ""
    },
    {
      "id": "858104",
      "categorie": "Weapon",
      "nom": "Rapière unique",
      "image": "assets/1595001/images/icon_weapon_zeldris_0005_l__af43281f2b481a3a.png",
      "rarete": ""
    },
    {
      "id": "858109",
      "categorie": "Weapon",
      "nom": "Fougue du rebelle",
      "image": "assets/1595001/images/icon_weapon_zeldris_0006_l__b20a6f431c26fea2.png",
      "rarete": ""
    },
    {
      "id": "858110",
      "categorie": "Weapon",
      "nom": "Épée vermillon",
      "image": "assets/1595001/images/icon_weapon_zeldris_0009_l__f454efba37570a34.png",
      "rarete": ""
    },
    {
      "id": "858112",
      "categorie": "Weapon",
      "nom": "Batte de trouble-fête",
      "image": "assets/1595001/images/icon_weapon_zeldris_0017_l__4acb59bddd664d97.png",
      "rarete": ""
    },
    {
      "id": "858107",
      "categorie": "Weapon",
      "nom": "858107",
      "image": "assets/1595001/images/icon_weapon_zeldris_0501_l__1f0e7f26eca4ccfe.png",
      "rarete": ""
    },
    {
      "id": "858108",
      "categorie": "Weapon",
      "nom": "858108",
      "image": "assets/1595001/images/icon_weapon_zeldris_0501_l__1f0e7f26eca4ccfe.png",
      "rarete": ""
    },
    {
      "id": "858105",
      "categorie": "Weapon",
      "nom": "Lame cramoisie antique",
      "image": "assets/1595001/images/icon_weapon_zeldris_0501_l__1f0e7f26eca4ccfe.png",
      "rarete": ""
    },
    {
      "id": "858106",
      "categorie": "Weapon",
      "nom": "Épée de la flamme rouge",
      "image": "assets/1595001/images/icon_weapon_zeldris_0502_l__6d27546778228353.png",
      "rarete": ""
    },
    {
      "id": "858111",
      "categorie": "Weapon",
      "nom": "Magie du cauchemar corrompu",
      "image": "assets/1595001/images/icon_weapon_zeldris_0015_l__c9d6e9cda217432a.png",
      "rarete": ""
    },
    {
      "id": "858113",
      "categorie": "Weapon",
      "nom": "Épée lancinante de Gunnthrá",
      "image": "assets/1595001/images/icon_weapon_zeldris_0001_l__1c7b241931f5bfe6.png",
      "rarete": ""
    },
    {
      "id": "4655001",
      "categorie": "Head",
      "nom": "Coupe moyenne ébouriffée",
      "image": "assets/1595001/images/icon_head_zeldris_0001_l__bb4c7d73699f520a.png",
      "rarete": ""
    },
    {
      "id": "4655002",
      "categorie": "Head",
      "nom": "Style naturel",
      "image": "assets/1595001/images/icon_head_zeldris_0003_l__049710960b8b38b7.png",
      "rarete": ""
    },
    {
      "id": "4655003",
      "categorie": "Head",
      "nom": "Casque d'hipster",
      "image": "assets/1595001/images/icon_head_zeldris_0004_l__882a6ab843e18d75.png",
      "rarete": ""
    },
    {
      "id": "4655004",
      "categorie": "Head",
      "nom": "Cheveux coiffés",
      "image": "assets/1595001/images/icon_head_zeldris_0005_l__a5b9fc45f69c1f3a.png",
      "rarete": ""
    },
    {
      "id": "4655007",
      "categorie": "Head",
      "nom": "Rebelle",
      "image": "assets/1595001/images/icon_head_zeldris_0006_l__7e72d42b5e998515.png",
      "rarete": ""
    },
    {
      "id": "4655008",
      "categorie": "Head",
      "nom": "Cheveux ardents",
      "image": "assets/1595001/images/icon_head_zeldris_0009_l__ae11cc0149ae6d45.png",
      "rarete": ""
    },
    {
      "id": "4655010",
      "categorie": "Head",
      "nom": "Couronne éclatante de dragon noir",
      "image": "assets/1595001/images/icon_head_zeldris_0018_l__a3056277bd72daed.png",
      "rarete": ""
    },
    {
      "id": "4655005",
      "categorie": "Head",
      "nom": "4655005",
      "image": "assets/1595001/images/icon_head_zeldris_0001_l__bb4c7d73699f520a.png",
      "rarete": ""
    },
    {
      "id": "4655006",
      "categorie": "Head",
      "nom": "4655006",
      "image": "assets/1595001/images/icon_head_zeldris_0003_l__049710960b8b38b7.png",
      "rarete": ""
    },
    {
      "id": "4655009",
      "categorie": "Head",
      "nom": "Malédiction du cauchemar corrompu",
      "image": "assets/1595001/images/icon_head_zeldris_0015_l__403aecf4ae8fd7d3.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Épée lancinante de Gunnthrá",
    "image": "assets/1595001/images/icon_weapon_zeldris_0552_s__0e100158485716fd.png",
    "description": "Relique sacrée de Zeldris de la [b]Piété[/b] (arme).\\n[DC143C]Épée créée depuis le fleuve Gunnthrá de Niflheim. La haute concentration de haine, de regret et d'affliction de ce fleuve corrompt quiconque est blessé par cette lame.[-]",
    "passif": {
      "nom": "Épée lancinante de Gunnthrá",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Lorsque la jauge de coup ultime du héros est diminuée, ou qu'une compétence du héros diminue la jauge de coup ultime d'un ennemi, augmente les stats de base des alliés de [FFAE00]6 %[-] pour [FFAE00]chaque[-] orbe de jauge de coup ultime retiré.\\n([FFAE00]5 fois max.[-], [00D5FF]hors jauge vidée après utilisation d'un coup ultime[-])"
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 200.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 250.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 3000.0
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