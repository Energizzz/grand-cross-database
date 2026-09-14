window.fichePreparee={
  "nom": "Maître Meliodas",
  "designation": "[Chapeau du cochon] Taverne",
  "titre": "Maître Meliodas",
  "idJeu": "1004001",
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
    "@characteristic.6"
  ],
  "portrait": "assets/1004001/images/icon_hero_meliodas_0014_s__bd845ce39ef6def9.png",
  "rareteParDefaut": "UR",
  "presentation": "La compétence de posture de [Chapeau du cochon] Meliodas, maître de la taverne, est efficace contre tout type d'ennemi, puisqu'elle contre même les attaques de zone. Un bonus d'esquive est ajouté au rang 3.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SR",
      "nom": "SR",
      "icone": "assets/commun/icon_filter_grade_SR__cc09bcf3e7213a06.png",
      "cadre": "assets/1004001/images/icon_frame_small_sr__c14285dca5b2bf1b.png",
      "fond": "assets/commun/icon_hero_basic_s_4__d8de890911c49b3d.png",
      "coin": "assets/commun/common_level_frame_rank_sr.png",
      "couleur": "#f3ce80",
      "image": "assets/1004001/images/hero_illust_meliodas_1004001__f5148b09e59346a2.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 40,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 340.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 200.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 3800.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 2030
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
            "valeur": 5.0,
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
            "valeur": 5.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 130.0,
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
          "nom": "« Triple coup »",
          "image": "assets/1004001/images/icon_meliodas_sr_type01_skill_01__ec45382d908b0d3b.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 120.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 120 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 110001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 180 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 110002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 110003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Contre total »",
          "image": "assets/1004001/images/icon_meliodas_sr_type01_skill_05__2ffa0c1051ae30be.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 1 tour(s) et prépare une contre-attaque avec des dégâts égaux à 200 %\\nde l'attaque.",
              "idJeu": 110041,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 1 tour(s) qui réduit\\nles dégâts subis de 50 % et prépare\\nune contre-attaque avec des dégâts égaux\\nà 300 % de l'attaque.",
              "idJeu": 110042,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 1 tour(s). Octroie [00D5FF]Évitement[-] à chaque attaque subie et contre-attaque, infligeant des dégâts égaux à 400 % de l'attaque.\\n\\n[00D5FF]※Évitement : immunise contre les compétences d'attaque et les compétences d'attaque de malus.[-]",
              "idJeu": 110043,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Esprit maléfique »",
        "image": "assets/1004001/images/icon_meliodas_sr_type01_special_01__13b1340202c81431.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 630.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 630 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 693.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 693 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 756.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 756 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 819.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 819 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 882.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 882 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 945.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 945 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Maître de la rapidité",
        "image": "assets/1004001/images/icon_exclusive_skill_1004001__facdc04651bdd642.png",
        "description": "Augmente les chances crit. du héros de [FFAE00]30 %[-] au début du tour allié si le héros ne subit aucun dégât.\\n[00D5FF](Se réinitialise quand une attaque est subie)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les chances crit. du héros de [FFAE00]30 %[-] au début du tour allié si le héros ne subit aucun dégât.\\n[00D5FF](Se réinitialise quand une attaque est subie)[-]"
          }
        ]
      },
      "idForme": 300104,
      "portrait": "assets/1004001/images/icon_hero_meliodas_0016_s__9868b260b48e8908.png",
      "portraitVertical": "assets/1004001/images/icon_skin_meliodas_0016_l__88deaa1b478ff88c.png"
    },
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1004001/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1004001/images/hero_illust_meliodas_1004001__f5148b09e59346a2.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 480.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 280.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 5500.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 2574
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
            "valeur": 5.0,
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
            "valeur": 5.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 130.0,
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
          "nom": "« Triple coup »",
          "image": "assets/1004001/images/icon_meliodas_sr_type01_skill_01__ec45382d908b0d3b.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 120.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 120 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 110001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 180 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 110002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 110003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Contre total »",
          "image": "assets/1004001/images/icon_meliodas_sr_type01_skill_05__2ffa0c1051ae30be.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 1 tour(s) et prépare une contre-attaque avec des dégâts égaux à 200 %\\nde l'attaque.",
              "idJeu": 110041,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 1 tour(s) qui réduit\\nles dégâts subis de 50 % et prépare\\nune contre-attaque avec des dégâts égaux\\nà 300 % de l'attaque.",
              "idJeu": 110042,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 1 tour(s). Octroie [00D5FF]Évitement[-] à chaque attaque subie et contre-attaque, infligeant des dégâts égaux à 400 % de l'attaque.\\n\\n[00D5FF]※Évitement : immunise contre les compétences d'attaque et les compétences d'attaque de malus.[-]",
              "idJeu": 110043,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Esprit maléfique »",
        "image": "assets/1004001/images/icon_meliodas_sr_type01_special_01__13b1340202c81431.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 630.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 630 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 693.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 693 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 756.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 756 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 819.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 819 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 882.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 882 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 945.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 945 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Maître de la rapidité",
        "image": "assets/1004001/images/icon_exclusive_skill_1004001__facdc04651bdd642.png",
        "description": "Augmente les chances crit. du héros de [FFAE00]30 %[-] au début du tour allié si le héros ne subit aucun dégât.\\n[00D5FF](Se réinitialise quand une attaque est subie)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les chances crit. du héros de [FFAE00]30 %[-] au début du tour allié si le héros ne subit aucun dégât.\\n[00D5FF](Se réinitialise quand une attaque est subie)[-]"
          }
        ]
      },
      "idForme": 300102,
      "portrait": "assets/1004001/images/icon_hero_meliodas_0002_s__c21ebe60aa3a9b8d.png",
      "portraitVertical": "assets/1004001/images/icon_skin_meliodas_0002_l__1052d4b65c427d9c.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1004001/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1004001/images/hero_illust_meliodas_1004001__f5148b09e59346a2.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 60,
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
            "valeur": 7200.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3118
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
            "valeur": 5.0,
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
            "valeur": 5.0,
            "unite": "%"
          },
          {
            "nom": "@stat.recoveryRate",
            "valeur": 130.0,
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
          "nom": "« Triple coup »",
          "image": "assets/1004001/images/icon_meliodas_sr_type01_skill_01__ec45382d908b0d3b.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 120.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 120 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 110001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 180 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 110002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts de [00D5FF]Faiblesse[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Faiblesse : dégâts x3 aux ennemis qui souffrent de malus.[-]",
              "idJeu": 110003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Contre total »",
          "image": "assets/1004001/images/icon_meliodas_sr_type01_skill_05__2ffa0c1051ae30be.png",
          "type": "@skill.attack",
          "cible": "@target.self",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 1 tour(s) et prépare une contre-attaque avec des dégâts égaux à 200 %\\nde l'attaque.",
              "idJeu": 110041,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 2,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 1 tour(s) qui réduit\\nles dégâts subis de 50 % et prépare\\nune contre-attaque avec des dégâts égaux\\nà 300 % de l'attaque.",
              "idJeu": 110042,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/pose.png"
            },
            {
              "rang": 3,
              "multiplicateur": 0.0,
              "description": "Adopte une posture pendant 1 tour(s). Octroie [00D5FF]Évitement[-] à chaque attaque subie et contre-attaque, infligeant des dégâts égaux à 400 % de l'attaque.\\n\\n[00D5FF]※Évitement : immunise contre les compétences d'attaque et les compétences d'attaque de malus.[-]",
              "idJeu": 110043,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/pose.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Esprit maléfique »",
        "image": "assets/1004001/images/icon_meliodas_sr_type01_special_01__13b1340202c81431.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 630.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 630 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 693.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 693 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 756.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 756 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 819.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 819 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 882.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 882 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 945.0,
            "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 945 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Maître de la rapidité",
        "image": "assets/1004001/images/icon_exclusive_skill_1004001__facdc04651bdd642.png",
        "description": "Augmente les chances crit. du héros de [FFAE00]30 %[-] au début du tour allié si le héros ne subit aucun dégât.\\n[00D5FF](Se réinitialise quand une attaque est subie)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les chances crit. du héros de [FFAE00]30 %[-] au début du tour allié si le héros ne subit aucun dégât.\\n[00D5FF](Se réinitialise quand une attaque est subie)[-]"
          }
        ]
      },
      "idForme": 300103,
      "portrait": "assets/1004001/images/icon_hero_meliodas_0014_s__bd845ce39ef6def9.png",
      "portraitVertical": "assets/1004001/images/icon_skin_meliodas_0014_l__5920d5b7a9337582.png"
    }
  ],
  "costumes": [
    {
      "id": "3300104",
      "categorie": "Skin",
      "nom": "Tenue basique",
      "image": "assets/1004001/images/hero_meliodas_3000year_body_0009_D__d461675bf93b00c3.png",
      "rarete": ""
    },
    {
      "id": "3300154",
      "categorie": "Skin",
      "nom": "Tenue du festival de la vague blanche",
      "image": "assets/1004001/images/icon_skin_meliodas_0025_l__8b5b7dc04628bc82.png",
      "rarete": ""
    },
    {
      "id": "3300153",
      "categorie": "Skin",
      "nom": "Symbole de dragon",
      "image": "assets/1004001/images/hero_meliodas_god_body_0010_D__9b1744915dd25d5c.png",
      "rarete": ""
    },
    {
      "id": "3300156",
      "categorie": "Skin",
      "nom": "Serveur pro",
      "image": "assets/1004001/images/icon_skin_meliodas_0019_l__b89b5833cb42e8e9.png",
      "rarete": ""
    },
    {
      "id": "3300155",
      "categorie": "Skin",
      "nom": "Pouvoir des abysses",
      "image": "assets/1004001/images/icon_skin_meliodas_0033_l__7484a03801ce773c.png",
      "rarete": ""
    },
    {
      "id": "3300158",
      "categorie": "Skin",
      "nom": "Prêt pour l'été !",
      "image": "assets/1004001/images/icon_skin_meliodas_0018_l__7853d76f46e32d27.png",
      "rarete": ""
    },
    {
      "id": "3300151",
      "categorie": "Skin",
      "nom": "Armure de Chevalier Sacré",
      "image": "assets/1004001/images/icon_skin_meliodas_0012_l__5543268406c9cf98.png",
      "rarete": ""
    },
    {
      "id": "3300160",
      "categorie": "Skin",
      "nom": "Guerrier victorieux",
      "image": "assets/1004001/images/icon_skin_meliodas_0032_l__7c956a85255968c9.png",
      "rarete": ""
    },
    {
      "id": "3300162",
      "categorie": "Skin",
      "nom": "Tenue de héros",
      "image": "assets/commun/icon_skin_meliodas_0047_l__2cebe948e443808b.png",
      "rarete": ""
    },
    {
      "id": "3300164",
      "categorie": "Skin",
      "nom": "Uniforme vert d'acclamation",
      "image": "assets/1004001/images/icon_skin_meliodas_0050_l__69dacffbda0c4c7d.png",
      "rarete": ""
    },
    {
      "id": "3300166",
      "categorie": "Skin",
      "nom": "Maître de la taverne d'hiver",
      "image": "assets/1004001/images/icon_skin_meliodas_0036_l__ec284e337b591000.png",
      "rarete": ""
    },
    {
      "id": "3300168",
      "categorie": "Skin",
      "nom": "Souvenir de Saint-Valentin",
      "image": "assets/1004001/images/icon_skin_meliodas_0051_l__09d03b732aba65bb.png",
      "rarete": ""
    },
    {
      "id": "3300102",
      "categorie": "Skin",
      "nom": "T-shirt rouge",
      "image": "assets/1004001/images/icon_skin_meliodas_0002_l__1052d4b65c427d9c.png",
      "rarete": ""
    },
    {
      "id": "3300103",
      "categorie": "Skin",
      "nom": "Long manteau",
      "image": "assets/1004001/images/icon_skin_meliodas_0014_l__5920d5b7a9337582.png",
      "rarete": ""
    },
    {
      "id": "3300108",
      "categorie": "Skin",
      "nom": "Les [Seven Deadly Sins] Capitaine",
      "image": "assets/1004001/images/icon_skin_meliodas_0007_l__8859082af8797b5d.png",
      "rarete": ""
    },
    {
      "id": "3300112",
      "categorie": "Skin",
      "nom": "Noble de la Nuit écarlate",
      "image": "assets/1004001/images/icon_skin_meliodas_0038_l__e1ff0dd18d272ee2.png",
      "rarete": ""
    },
    {
      "id": "3300115",
      "categorie": "Skin",
      "nom": "Manteau d'honneur",
      "image": "assets/1004001/images/icon_skin_meliodas_0055_l__5ba53d0ca55e8305.png",
      "rarete": ""
    },
    {
      "id": "9017033",
      "categorie": "Skin",
      "nom": "Héroïne de Liones",
      "image": "assets/1004001/images/hero_meliodas_body_0006_scene_D__b418707374f880a0.png",
      "rarete": ""
    },
    {
      "id": "850101",
      "categorie": "Weapon",
      "nom": "Fragment du Cercueil de la pénombre éternelle",
      "image": "assets/1004001/images/icon_weapon_meliodas_101_l__419876314fb06f58.png",
      "rarete": ""
    },
    {
      "id": "850102",
      "categorie": "Weapon",
      "nom": "Dague d'absorption démoniaque",
      "image": "assets/1004001/images/icon_weapon_meliodas_102_l__e9eaaa71c259d77f.png",
      "rarete": ""
    },
    {
      "id": "850106",
      "categorie": "Weapon",
      "nom": "Épée célèbre de Danafor",
      "image": "assets/1004001/images/icon_weapon_meliodas_106_l__1ea1cdaae0d22fbc.png",
      "rarete": ""
    },
    {
      "id": "850103",
      "categorie": "Weapon",
      "nom": "Dague fantomatique",
      "image": "assets/1004001/images/icon_weapon_meliodas_114_l__1b991b47716a8fbd.png",
      "rarete": ""
    },
    {
      "id": "850107",
      "categorie": "Weapon",
      "nom": "Aile dorée",
      "image": "assets/1004001/images/icon_weapon_meliodas_107_l__8c2f02c97915362c.png",
      "rarete": ""
    },
    {
      "id": "850108",
      "categorie": "Weapon",
      "nom": "Rune démoniaque",
      "image": "assets/1004001/images/icon_weapon_meliodas_108_l__da7797ea4a14028a.png",
      "rarete": ""
    },
    {
      "id": "850199",
      "categorie": "Weapon",
      "nom": "Dague de la promesse",
      "image": "assets/1004001/images/icon_weapon_meliodas_901_l__0882d2fd7afb536d.png",
      "rarete": ""
    },
    {
      "id": "850122",
      "categorie": "Weapon",
      "nom": "Dague de bonhomme de neige",
      "image": "assets/1004001/images/icon_weapon_meliodas_0036_l__00273481440b8f27.png",
      "rarete": ""
    },
    {
      "id": "850123",
      "categorie": "Weapon",
      "nom": "Cadeau de Saint-Valentin",
      "image": "assets/1004001/images/icon_weapon_meliodas_0051_l__2dfb12370c80b616.png",
      "rarete": ""
    },
    {
      "id": "850156",
      "categorie": "Weapon",
      "nom": "Épée légère",
      "image": "assets/1004001/images/icon_weapon_meliodas_0018_l__67097902d945c04d.png",
      "rarete": ""
    },
    {
      "id": "850151",
      "categorie": "Weapon",
      "nom": "Bijou de l'Est",
      "image": "assets/1004001/images/icon_weapon_meliodas_115_l__83e0a76edb8c98e4.png",
      "rarete": ""
    },
    {
      "id": "850152",
      "categorie": "Weapon",
      "nom": "Épée sanguine",
      "image": "assets/1004001/images/icon_weapon_meliodas_502_l__e24019d26b39ed24.png",
      "rarete": ""
    },
    {
      "id": "850109",
      "categorie": "Weapon",
      "nom": "Tueur de chevaliers",
      "image": "assets/1004001/images/icon_weapon_meliodas_112_l__d43f9dae67254618.png",
      "rarete": ""
    },
    {
      "id": "850104",
      "categorie": "Weapon",
      "nom": "Clé écarlate",
      "image": "assets/1004001/images/icon_weapon_meliodas_104_l__91ebd77c80eb2779.png",
      "rarete": ""
    },
    {
      "id": "850110",
      "categorie": "Weapon",
      "nom": "Régicide",
      "image": "assets/1004001/images/icon_weapon_meliodas_110_l__d86cd2a57efb67ba.png",
      "rarete": ""
    },
    {
      "id": "850111",
      "categorie": "Weapon",
      "nom": "Déicide",
      "image": "assets/1004001/images/icon_weapon_meliodas_111_l__8ea613f1fcf01bf1.png",
      "rarete": ""
    },
    {
      "id": "850112",
      "categorie": "Weapon",
      "nom": "Dague de Liz (alt.)",
      "image": "assets/1004001/images/icon_weapon_meliodas_113_l__12131c378b4da950.png",
      "rarete": ""
    },
    {
      "id": "850119",
      "categorie": "Weapon",
      "nom": "Épée vampirique",
      "image": "assets/1004001/images/icon_weapon_meliodas_0035_l__d717d4389ec197d7.png",
      "rarete": ""
    },
    {
      "id": "850001",
      "categorie": "Weapon",
      "nom": "NONE DB",
      "image": "assets/1004001/images/icon_weapon_meliodas_109_l__43d89f454ff7582c.png",
      "rarete": ""
    },
    {
      "id": "4004001",
      "categorie": "Head",
      "nom": "Maître",
      "image": "assets/commun/icon_head_meliodas_0001_l__1530c469aecb6756.png",
      "rarete": ""
    },
    {
      "id": "4004009",
      "categorie": "Head",
      "nom": "Chapeau du festival de la vague blanche",
      "image": "assets/1004001/images/icon_head_meliodas_0507_l__5795c3266890de52.png",
      "rarete": ""
    },
    {
      "id": "4004010",
      "categorie": "Head",
      "nom": "Masque de plongée",
      "image": "assets/1004001/images/icon_head_meliodas_0018_l__32c2b9a353782e67.png",
      "rarete": ""
    },
    {
      "id": "4004002",
      "categorie": "Head",
      "nom": "Pouvoir réprimé",
      "image": "assets/1004001/images/icon_head_meliodas_1003_l__7bffe2224ba210cb.png",
      "rarete": ""
    },
    {
      "id": "4004007",
      "categorie": "Head",
      "nom": "Coin coin",
      "image": "assets/1004001/images/icon_head_meliodas_0505_l__105ff21f599ab30b.png",
      "rarete": ""
    },
    {
      "id": "4004003",
      "categorie": "Head",
      "nom": "Enseignement",
      "image": "assets/1004001/images/icon_head_meliodas_0501_l__7a9e7b6846cd68b1.png",
      "rarete": ""
    },
    {
      "id": "4004008",
      "categorie": "Head",
      "nom": "Homme d'affaires",
      "image": "assets/1004001/images/icon_head_meliodas_0506_l__c6157e6ae63ef2fd.png",
      "rarete": ""
    },
    {
      "id": "4004005",
      "categorie": "Head",
      "nom": "Bandana de la rage",
      "image": "assets/1004001/images/icon_head_meliodas_0502_l__cf368a40bb71e60a.png",
      "rarete": ""
    },
    {
      "id": "4004006",
      "categorie": "Head",
      "nom": "Bandana du Chapeau du cochon",
      "image": "assets/1004001/images/icon_head_meliodas_0504_l__6ad72de85cfd161e.png",
      "rarete": ""
    },
    {
      "id": "4004013",
      "categorie": "Head",
      "nom": "Bandeau du guerrier",
      "image": "assets/1004001/images/icon_head_meliodas_0032_l__9fd641007689438a.png",
      "rarete": ""
    },
    {
      "id": "4004014",
      "categorie": "Head",
      "nom": "Chapeau vert d'acclamation",
      "image": "assets/1004001/images/icon_head_meliodas_0050_l__3a0ad68b8872085d.png",
      "rarete": ""
    },
    {
      "id": "4004015",
      "categorie": "Head",
      "nom": "Barbe blanche",
      "image": "assets/1004001/images/icon_head_meliodas_0036_l__0d6b5d5367d6cb24.png",
      "rarete": ""
    },
    {
      "id": "4004016",
      "categorie": "Head",
      "nom": "Lunettes de malice",
      "image": "assets/1004001/images/icon_head_meliodas_0051_l__a511d65cd03a7420.png",
      "rarete": ""
    },
    {
      "id": "4004004",
      "categorie": "Head",
      "nom": "Lunettes à la mode",
      "image": "assets/1004001/images/icon_head_meliodas_0503_l__6ec97715c93c3a4a.png",
      "rarete": ""
    },
    {
      "id": "4004011",
      "categorie": "Head",
      "nom": "Chapeau de gentilhomme",
      "image": "assets/1004001/images/icon_head_meliodas_0035_l__162ba00d1475c717.png",
      "rarete": ""
    },
    {
      "id": "4004017",
      "categorie": "Head",
      "nom": "Coiffure facile d'entretien",
      "image": "assets/1004001/images/icon_head_meliodas_0055_l__49279b41c18d58de.png",
      "rarete": ""
    },
    {
      "id": "4004012",
      "categorie": "Head",
      "nom": "Ailes ornementales de noble nocturne",
      "image": "assets/1004001/images/icon_head_meliodas_0038_l__cd104a9b64a59e74.png",
      "rarete": ""
    }
  ],
  "relique": null
};