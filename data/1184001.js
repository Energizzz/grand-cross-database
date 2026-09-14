window.fichePreparee={
  "nom": "Jericho, Chevalière Sacrée",
  "designation": "[Nouvelle génération]",
  "titre": "Jericho, Chevalière Sacrée",
  "idJeu": "1184001",
  "attribut": {
    "nom": "Attribut Vitesse",
    "icone": "assets/commun/icon_filter_attribute_03__4980bb489ce93431.png",
    "couleur": "#50b8ea",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "Humain"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_03__22a79e39766d0c88.png"
    ]
  },
  "caracteristiques": [],
  "portrait": "assets/1184001/images/icon_hero_jericho_0013_s__1ab84e80c925d6dd.png",
  "rareteParDefaut": "UR",
  "presentation": "[Nouvelle génération] Jericho, Chevalière Sacrée possède une compétence qui augmente les chances crit. et qui est plus puissante avec des équipements affectant les coups critiques.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SR",
      "nom": "SR",
      "icone": "assets/commun/icon_filter_grade_SR__cc09bcf3e7213a06.png",
      "cadre": "assets/1184001/images/icon_frame_small_sr__c14285dca5b2bf1b.png",
      "fond": "assets/commun/icon_hero_basic_s_4__d8de890911c49b3d.png",
      "coin": "assets/commun/common_level_frame_rank_sr.png",
      "couleur": "#f3ce80",
      "image": "assets/1184001/images/hero_illust_jericho_1184001__15105273eee8ad11.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 40,
      "evolution": "Niveau maximal 40 · évolution 40",
      "changement": "Données de la table DB_skin_base",
      "statistiques": {
        "contexte": "Valeurs de base issues de DB_skin_base",
        "statut": "Extrait du jeu",
        "principales": [
          {
            "nom": "Attaque",
            "valeur": 360.0
          },
          {
            "nom": "Défense",
            "valeur": 150.0
          },
          {
            "nom": "PV",
            "valeur": 3400.0
          },
          {
            "nom": "Classe de Combat",
            "valeur": 2045
          }
        ],
        "secondaires": [
          {
            "nom": "Chance de critique",
            "valeur": 30.0,
            "unite": "%"
          },
          {
            "nom": "Dégâts critiques",
            "valeur": 170.0,
            "unite": "%"
          },
          {
            "nom": "Résistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "Résistance crit.",
            "valeur": 10.0,
            "unite": "%"
          },
          {
            "nom": "Défense crit.",
            "valeur": 30.0,
            "unite": "%"
          },
          {
            "nom": "Taux de perforation",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "Taux de régénération",
            "valeur": 0.0,
            "unite": "%"
          },
          {
            "nom": "Taux de récupération",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "Vampirisme",
            "valeur": 10.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Taillade éclair divine »",
          "image": "assets/1184001/images/icon_jericho_sword_skill_02__bfb69571e1332c0f.png",
          "type": "Attaque",
          "cible": "un ennemi",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 180 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
              "idJeu": 117011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 270 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
              "idJeu": 117012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 450 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
              "idJeu": 117013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Sort de récupération supérieur »",
          "image": "assets/1184001/images/icon_jericho_sword_skill_06__0a14a7e207f24731.png",
          "type": "Attaque",
          "cible": "tous les alliés",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 10.0,
              "description": "Soigne les PV de tous les alliés à hauteur de 10 % des PV max.",
              "idJeu": 117051,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 15.0,
              "description": "Soigne les PV de tous les alliés à hauteur de 15 % des PV max.",
              "idJeu": 117052,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 25.0,
              "description": "Soigne les PV de tous les alliés à hauteur de 25 % des PV max.",
              "idJeu": 117053,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Dix éclairs divins »",
        "image": "assets/1184001/images/icon_jericho_sword_special_01__703be5d4bbe6ef69.png",
        "cible": "un ennemi",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 455.0,
            "description": "Inflige des dégâts égaux à 455 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 501.0,
            "description": "Inflige des dégâts égaux à 501 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 546.0,
            "description": "Inflige des dégâts égaux à 546 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 592.0,
            "description": "Inflige des dégâts égaux à 592 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 637.0,
            "description": "Inflige des dégâts égaux à 637 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 683.0,
            "description": "Inflige des dégâts égaux à 683 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Épée magique",
        "image": "assets/1184001/images/icon_exclusive_skill_1184001__484673dfcab9391e.png",
        "description": "Augmente les stats offensives des héros d'attribut « Vitesse » de [FFAE00]10 %[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les stats offensives des héros d'attribut « Vitesse » de [FFAE00]10 %[-]."
          }
        ]
      },
      "idForme": 301103,
      "portrait": "assets/1184001/images/icon_hero_jericho_0004_s__928450f62a10326c.png",
      "portraitVertical": "assets/1184001/images/icon_skin_jericho_0004_l__ff4ece1e16b3b2ed.png"
    },
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1184001/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1184001/images/hero_illust_jericho_1184001__15105273eee8ad11.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 50,
      "evolution": "Niveau maximal 50 · évolution 50",
      "changement": "Données de la table DB_skin_base",
      "statistiques": {
        "contexte": "Valeurs de base issues de DB_skin_base",
        "statut": "Extrait du jeu",
        "principales": [
          {
            "nom": "Attaque",
            "valeur": 520.0
          },
          {
            "nom": "Défense",
            "valeur": 210.0
          },
          {
            "nom": "PV",
            "valeur": 5000.0
          },
          {
            "nom": "Classe de Combat",
            "valeur": 2573
          }
        ],
        "secondaires": [
          {
            "nom": "Chance de critique",
            "valeur": 30.0,
            "unite": "%"
          },
          {
            "nom": "Dégâts critiques",
            "valeur": 170.0,
            "unite": "%"
          },
          {
            "nom": "Résistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "Résistance crit.",
            "valeur": 10.0,
            "unite": "%"
          },
          {
            "nom": "Défense crit.",
            "valeur": 30.0,
            "unite": "%"
          },
          {
            "nom": "Taux de perforation",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "Taux de régénération",
            "valeur": 0.0,
            "unite": "%"
          },
          {
            "nom": "Taux de récupération",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "Vampirisme",
            "valeur": 10.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Taillade éclair divine »",
          "image": "assets/1184001/images/icon_jericho_sword_skill_02__bfb69571e1332c0f.png",
          "type": "Attaque",
          "cible": "un ennemi",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 180 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
              "idJeu": 117011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 270 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
              "idJeu": 117012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 450 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
              "idJeu": 117013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Sort de récupération supérieur »",
          "image": "assets/1184001/images/icon_jericho_sword_skill_06__0a14a7e207f24731.png",
          "type": "Attaque",
          "cible": "tous les alliés",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 10.0,
              "description": "Soigne les PV de tous les alliés à hauteur de 10 % des PV max.",
              "idJeu": 117051,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 15.0,
              "description": "Soigne les PV de tous les alliés à hauteur de 15 % des PV max.",
              "idJeu": 117052,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 25.0,
              "description": "Soigne les PV de tous les alliés à hauteur de 25 % des PV max.",
              "idJeu": 117053,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Dix éclairs divins »",
        "image": "assets/1184001/images/icon_jericho_sword_special_01__703be5d4bbe6ef69.png",
        "cible": "un ennemi",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 455.0,
            "description": "Inflige des dégâts égaux à 455 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 501.0,
            "description": "Inflige des dégâts égaux à 501 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 546.0,
            "description": "Inflige des dégâts égaux à 546 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 592.0,
            "description": "Inflige des dégâts égaux à 592 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 637.0,
            "description": "Inflige des dégâts égaux à 637 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 683.0,
            "description": "Inflige des dégâts égaux à 683 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Épée magique",
        "image": "assets/1184001/images/icon_exclusive_skill_1184001__484673dfcab9391e.png",
        "description": "Augmente les stats offensives des héros d'attribut « Vitesse » de [FFAE00]10 %[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les stats offensives des héros d'attribut « Vitesse » de [FFAE00]10 %[-]."
          }
        ]
      },
      "idForme": 301101,
      "portrait": "assets/1184001/images/icon_hero_jericho_0012_s__f5aad51a40433c06.png",
      "portraitVertical": "assets/1184001/images/icon_skin_jericho_0012_l__bd1b3a5367a5daf6.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1184001/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1184001/images/hero_illust_jericho_1184001__15105273eee8ad11.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 60,
      "evolution": "Niveau maximal 60 · évolution 60",
      "changement": "Données de la table DB_skin_base",
      "statistiques": {
        "contexte": "Valeurs de base issues de DB_skin_base",
        "statut": "Extrait du jeu",
        "principales": [
          {
            "nom": "Attaque",
            "valeur": 680.0
          },
          {
            "nom": "Défense",
            "valeur": 270.0
          },
          {
            "nom": "PV",
            "valeur": 6600.0
          },
          {
            "nom": "Classe de Combat",
            "valeur": 3101
          }
        ],
        "secondaires": [
          {
            "nom": "Chance de critique",
            "valeur": 30.0,
            "unite": "%"
          },
          {
            "nom": "Dégâts critiques",
            "valeur": 170.0,
            "unite": "%"
          },
          {
            "nom": "Résistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "Résistance crit.",
            "valeur": 10.0,
            "unite": "%"
          },
          {
            "nom": "Défense crit.",
            "valeur": 30.0,
            "unite": "%"
          },
          {
            "nom": "Taux de perforation",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "Taux de régénération",
            "valeur": 0.0,
            "unite": "%"
          },
          {
            "nom": "Taux de récupération",
            "valeur": 100.0,
            "unite": "%"
          },
          {
            "nom": "Vampirisme",
            "valeur": 10.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "« Taillade éclair divine »",
          "image": "assets/1184001/images/icon_jericho_sword_skill_02__bfb69571e1332c0f.png",
          "type": "Attaque",
          "cible": "un ennemi",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 180 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
              "idJeu": 117011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 270 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
              "idJeu": 117012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts de [00D5FF]Lésion[-] égaux à 450 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Lésion : chances crit. x3.[-]",
              "idJeu": 117013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Sort de récupération supérieur »",
          "image": "assets/1184001/images/icon_jericho_sword_skill_06__0a14a7e207f24731.png",
          "type": "Attaque",
          "cible": "tous les alliés",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 10.0,
              "description": "Soigne les PV de tous les alliés à hauteur de 10 % des PV max.",
              "idJeu": 117051,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 15.0,
              "description": "Soigne les PV de tous les alliés à hauteur de 15 % des PV max.",
              "idJeu": 117052,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 25.0,
              "description": "Soigne les PV de tous les alliés à hauteur de 25 % des PV max.",
              "idJeu": 117053,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Dix éclairs divins »",
        "image": "assets/1184001/images/icon_jericho_sword_special_01__703be5d4bbe6ef69.png",
        "cible": "un ennemi",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 455.0,
            "description": "Inflige des dégâts égaux à 455 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 501.0,
            "description": "Inflige des dégâts égaux à 501 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 546.0,
            "description": "Inflige des dégâts égaux à 546 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 592.0,
            "description": "Inflige des dégâts égaux à 592 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 637.0,
            "description": "Inflige des dégâts égaux à 637 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 683.0,
            "description": "Inflige des dégâts égaux à 683 % de l'attaque à un ennemi.\\nApplique [00D5FF]Saignement[-] pendant 2 tour(s).\\n\\n[00D5FF]※Saignement : inflige 90 % de dégâts supplémentaires à la fin de chaque tour.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Épée magique",
        "image": "assets/1184001/images/icon_exclusive_skill_1184001__484673dfcab9391e.png",
        "description": "Augmente les stats offensives des héros d'attribut « Vitesse » de [FFAE00]10 %[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les stats offensives des héros d'attribut « Vitesse » de [FFAE00]10 %[-]."
          }
        ]
      },
      "idForme": 301105,
      "portrait": "assets/1184001/images/icon_hero_jericho_0013_s__1ab84e80c925d6dd.png",
      "portraitVertical": "assets/1184001/images/icon_skin_jericho_0013_l__113643c677f09f12.png"
    }
  ],
  "costumes": [
    {
      "id": "3301103",
      "categorie": "Skin",
      "nom": "Armure d'apprentie Chevalière Sacrée",
      "image": "assets/1184001/images/icon_skin_jericho_0004_l__ff4ece1e16b3b2ed.png",
      "rarete": ""
    },
    {
      "id": "3301110",
      "categorie": "Skin",
      "nom": "Lame du cœur",
      "image": "assets/1184001/images/icon_skin_jericho_0018_l__61108f86938b3ab2.png",
      "rarete": ""
    },
    {
      "id": "3301102",
      "categorie": "Skin",
      "nom": "T-shirt chanceux sans manches",
      "image": "assets/1184001/images/icon_skin_jericho_0006_l__72a7967946a5d6f6.png",
      "rarete": ""
    },
    {
      "id": "3301150",
      "categorie": "Skin",
      "nom": "Serveuse royale",
      "image": "assets/1184001/images/icon_skin_jericho_0015_l__62cc95688d8d62bc.png",
      "rarete": ""
    },
    {
      "id": "3301114",
      "categorie": "Skin",
      "nom": "Amoureuse",
      "image": "assets/1184001/images/icon_skin_jericho_0001_l__49f5bcb0195cfe54.png",
      "rarete": ""
    },
    {
      "id": "3301152",
      "categorie": "Skin",
      "nom": "Maillot de bain (lagon bleu)",
      "image": "assets/1184001/images/icon_skin_jericho_0016_l__6640d8e247bae4d2.png",
      "rarete": ""
    },
    {
      "id": "3301154",
      "categorie": "Skin",
      "nom": "Sentiments grandissants",
      "image": "assets/1184001/images/icon_skin_jericho_0007_l__8d5a8c3b8a1ab068.png",
      "rarete": ""
    },
    {
      "id": "3301156",
      "categorie": "Skin",
      "nom": "Tenue d'infirmière",
      "image": "assets/1184001/images/icon_skin_jericho_0021_l__9ce1ff2f06d09077.png",
      "rarete": ""
    },
    {
      "id": "3301101",
      "categorie": "Skin",
      "nom": "Tenue de gardienne de prison de Baste",
      "image": "assets/1184001/images/icon_skin_jericho_0012_l__bd1b3a5367a5daf6.png",
      "rarete": ""
    },
    {
      "id": "3301104",
      "categorie": "Skin",
      "nom": "Voyageuse",
      "image": "assets/1184001/images/icon_skin_jericho_0005_l__1c80096fe8058f86.png",
      "rarete": ""
    },
    {
      "id": "3301105",
      "categorie": "Skin",
      "nom": "Chevalière Sacrée de nouvelle génération",
      "image": "assets/1184001/images/icon_skin_jericho_0013_l__113643c677f09f12.png",
      "rarete": ""
    },
    {
      "id": "3301106",
      "categorie": "Skin",
      "nom": "Aventure hivernale",
      "image": "assets/1184001/images/icon_skin_jericho_0002_l__30389ea147a81b96.png",
      "rarete": ""
    },
    {
      "id": "3301115",
      "categorie": "Skin",
      "nom": "Chevalière de la rapidité",
      "image": "assets/1184001/images/icon_skin_jericho_0008_l__babde5611bfb328d.png",
      "rarete": ""
    },
    {
      "id": "3301121",
      "categorie": "Skin",
      "nom": "Grâce du flocon bleu",
      "image": "assets/1184001/images/icon_skin_jericho_0025_l__0d9be8b1cef4eb88.png",
      "rarete": ""
    },
    {
      "id": "3301124",
      "categorie": "Skin",
      "nom": "Armure de glace azurée",
      "image": "assets/1184001/images/icon_skin_jericho_0027_l__132d1f9e95493b4d.png",
      "rarete": ""
    },
    {
      "id": "9017027",
      "categorie": "Skin",
      "nom": "Chevalière Sacrée de nouvelle génération",
      "image": "assets/1184001/images/icon_skin_jericho_0006_l__72a7967946a5d6f6.png",
      "rarete": ""
    },
    {
      "id": "851101",
      "categorie": "Weapon",
      "nom": "Épée de gardienne de prison de Baste",
      "image": "assets/1184001/images/icon_weapon_jericho_101_l__0157011c2116560d.png",
      "rarete": ""
    },
    {
      "id": "851103",
      "categorie": "Weapon",
      "nom": "Épée véloce",
      "image": "assets/1184001/images/icon_weapon_jericho_103_l__322406b7bb05df38.png",
      "rarete": ""
    },
    {
      "id": "851109",
      "categorie": "Weapon",
      "nom": "Épée de la rose",
      "image": "assets/1184001/images/icon_weapon_jericho_109_l__5611bc2f20f68627.png",
      "rarete": ""
    },
    {
      "id": "851153",
      "categorie": "Weapon",
      "nom": "Épée des ténèbres",
      "image": "assets/1184001/images/icon_weapon_jericho_503_l__3e2bc72074e836ca.png",
      "rarete": ""
    },
    {
      "id": "851106",
      "categorie": "Weapon",
      "nom": "Épée des cieux",
      "image": "assets/1184001/images/icon_weapon_jericho_106_l__47460c3433332c33.png",
      "rarete": ""
    },
    {
      "id": "851155",
      "categorie": "Weapon",
      "nom": "Marlin de la ferme",
      "image": "assets/1184001/images/icon_weapon_jericho_0016_l__b5760249f927b8b3.png",
      "rarete": ""
    },
    {
      "id": "851156",
      "categorie": "Weapon",
      "nom": "Lame violette",
      "image": "assets/1184001/images/icon_weapon_jericho_0007_l__171f64c6c3a305ec.png",
      "rarete": ""
    },
    {
      "id": "851111",
      "categorie": "Weapon",
      "nom": "Scalpel",
      "image": "assets/1184001/images/icon_weapon_jericho_0021_l__89944b5f4a32e009.png",
      "rarete": ""
    },
    {
      "id": "851102",
      "categorie": "Weapon",
      "nom": "Épée de la condamnation",
      "image": "assets/1184001/images/icon_weapon_jericho_102_l__83b81457f214c7cf.png",
      "rarete": ""
    },
    {
      "id": "851105",
      "categorie": "Weapon",
      "nom": "Épée de rubis",
      "image": "assets/1184001/images/icon_weapon_jericho_105_l__1c9b7cf614a01308.png",
      "rarete": ""
    },
    {
      "id": "851151",
      "categorie": "Weapon",
      "nom": "Épée de la rapidité",
      "image": "assets/1184001/images/icon_weapon_jericho_501_l__3c9db83db90fdd72.png",
      "rarete": ""
    },
    {
      "id": "851154",
      "categorie": "Weapon",
      "nom": "Illusion de minuit",
      "image": "assets/1184001/images/icon_weapon_jericho_111_l__4eaeec41bc538073.png",
      "rarete": ""
    },
    {
      "id": "851108",
      "categorie": "Weapon",
      "nom": "Épée obscure",
      "image": "assets/1184001/images/icon_weapon_jericho_108_l__815b49145c0ed0df.png",
      "rarete": ""
    },
    {
      "id": "851107",
      "categorie": "Weapon",
      "nom": "Épée du dieu de jade",
      "image": "assets/1184001/images/icon_weapon_jericho_107_l__0a6aa291e231cdb4.png",
      "rarete": ""
    },
    {
      "id": "851152",
      "categorie": "Weapon",
      "nom": "Épée d'amputation",
      "image": "assets/1184001/images/icon_weapon_jericho_502_l__ca262875ab95da4e.png",
      "rarete": ""
    },
    {
      "id": "851110",
      "categorie": "Weapon",
      "nom": "Batte véloce",
      "image": "assets/1184001/images/icon_weapon_jericho_110_l__5e7720dfa8f9a105.png",
      "rarete": ""
    },
    {
      "id": "851112",
      "categorie": "Weapon",
      "nom": "Énergie glaciale",
      "image": "assets/1184001/images/icon_weapon_jericho_0024_l__506c0b141bd46e93.png",
      "rarete": ""
    },
    {
      "id": "851157",
      "categorie": "Weapon",
      "nom": "Fleur de glace",
      "image": "assets/1184001/images/icon_weapon_jericho_0025_l__8635704e4e7853dc.png",
      "rarete": ""
    },
    {
      "id": "851158",
      "categorie": "Weapon",
      "nom": "Épée gelée de Thjazi",
      "image": "assets/1184001/images/icon_weapon_jericho_0007_l__171f64c6c3a305ec.png",
      "rarete": ""
    },
    {
      "id": "4184001",
      "categorie": "Head",
      "nom": "Chevalière Sacrée",
      "image": "assets/1184001/images/icon_head_jericho_0012_l__e15b69da389c1b09.png",
      "rarete": ""
    },
    {
      "id": "4184003",
      "categorie": "Head",
      "nom": "Serveuse en formation",
      "image": "assets/1184001/images/icon_head_jericho_0015_l__4ac7a6dbc0a0b336.png",
      "rarete": ""
    },
    {
      "id": "4184007",
      "categorie": "Head",
      "nom": "Fille de la ville",
      "image": "assets/1184001/images/icon_head_jericho_0504_l__6365b549bb7b2e1d.png",
      "rarete": ""
    },
    {
      "id": "4184004",
      "categorie": "Head",
      "nom": "Masque de renard",
      "image": "assets/1184001/images/icon_head_jericho_0501_l__acfdc7ff258b5411.png",
      "rarete": ""
    },
    {
      "id": "4184005",
      "categorie": "Head",
      "nom": "Kunoichi",
      "image": "assets/1184001/images/icon_head_jericho_0502_l__0fdf904da0d2246b.png",
      "rarete": ""
    },
    {
      "id": "4184008",
      "categorie": "Head",
      "nom": "Bandeau orné de fleurs",
      "image": "assets/1184001/images/icon_head_jericho_0016_l__d617c3d93446bf0a.png",
      "rarete": ""
    },
    {
      "id": "4184009",
      "categorie": "Head",
      "nom": "Sentiments tumultueux",
      "image": "assets/1184001/images/icon_head_jericho_0007_l__2eeb4852e233b1a8.png",
      "rarete": ""
    },
    {
      "id": "4184010",
      "categorie": "Head",
      "nom": "Coiffe d'infirmière",
      "image": "assets/1184001/images/icon_head_jericho_0021_l__eb18e81485b6de74.png",
      "rarete": ""
    },
    {
      "id": "4184002",
      "categorie": "Head",
      "nom": "Tout en finesse",
      "image": "assets/1184001/images/icon_head_jericho_0013_l__f9c99e74bd94c766.png",
      "rarete": ""
    },
    {
      "id": "4184006",
      "categorie": "Head",
      "nom": "Reine",
      "image": "assets/1184001/images/icon_head_jericho_0503_l__b639f86817ddd97f.png",
      "rarete": ""
    },
    {
      "id": "4184012",
      "categorie": "Head",
      "nom": "Cheveux ondulés",
      "image": "assets/1184001/images/icon_head_jericho_0027_l__8210f2a0da510140.png",
      "rarete": ""
    },
    {
      "id": "4184011",
      "categorie": "Head",
      "nom": "Cheveux avec branche enneigée",
      "image": "assets/1184001/images/icon_head_jericho_0025_l__5fc17fc7cd143909.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Épée gelée de Thjazi",
    "image": "assets/1184001/images/icon_weapon_jericho_0551_s__bcc99b75c58b59b9.png",
    "description": "Relique sacrée de Jericho, Chevalière Sacrée et Gardienne (arme).\\n[DC143C]Une épée jadis détenue par Thjazi, un Jötunn. Forgée à Jötunheim, une terre recouverte de neige et de glace, la lame de l'épée est si froide qu'elle peut même geler le feu.[-]",
    "passif": {
      "nom": "Épée gelée de Thjazi",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Augmente les [00D5FF]chances crit.[-] du héros de [FFAE00]50 %[-] pendant [FFAE00]2 tours[-] au début du combat.\\n\\nAugmente l'attaque des alliés de [FFAE00]30 %[-] pendant [FFAE00]2 tours[-] lorsque le héros [00D5FF]effectue un coup critique avec une attaque sur un ennemi[-]."
    },
    "bonus": [
      {
        "nom": "Attaque",
        "valeur": 265.0
      },
      {
        "nom": "Défense",
        "valeur": 330.0
      },
      {
        "nom": "PV",
        "valeur": 2355.0
      }
    ],
    "materiaux": [
      {
        "nom": "Or",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Source du crépuscule",
        "image": "assets/commun/icon_craft_costume_rare_material_03__633922237ffc6bf3.png",
        "quantite": 15
      },
      {
        "nom": "Honneur des Einherjar",
        "image": "assets/commun/icon_craft_costume_material_01__49ff86632bcd1bc8.png",
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
        "quantite": 70
      }
    ],
    "provenance": "Sköll et Hati"
  },
  "sources": [
    {
      "type": "jeu",
      "table": "DB_hero_base, DB_skin_base, DB_skin_skill, DB_skill_card_base, DB_skill_card_resource"
    }
  ]
};