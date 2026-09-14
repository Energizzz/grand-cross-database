window.fichePreparee={
  "nom": "Gardienne Jericho",
  "designation": "[Chevalière du givre]",
  "titre": "Gardienne Jericho",
  "idJeu": "1185003",
  "attribut": {
    "nom": "Attribut Puissance",
    "icone": "assets/commun/icon_filter_attribute_01__bfa1da106b20bf3e.png",
    "couleur": "#ef6369",
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
  "portrait": "assets/1185003/images/icon_hero_jericho_0027_s__308e88e837209062.png",
  "rareteParDefaut": "UR",
  "presentation": "[Chevalière du givre] Gardienne Jericho utilise un nouveau type de compétence de gel qui inflige des dégâts se basant sur les PV restants de la cible au moment où l'effet se dissipe.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1185003/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1185003/images/hero_illust_jericho_1185003__05542f18d918d984.png",
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
            "valeur": 550.0
          },
          {
            "nom": "Défense",
            "valeur": 240.0
          },
          {
            "nom": "PV",
            "valeur": 5300.0
          },
          {
            "nom": "Classe de Combat",
            "valeur": 3167
          }
        ],
        "secondaires": [
          {
            "nom": "Chance de critique",
            "valeur": 40.0,
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
            "valeur": 20.0,
            "unite": "%"
          },
          {
            "nom": "Défense crit.",
            "valeur": 50.0,
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
            "valeur": 120.0,
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
          "nom": "« Lame de givre »",
          "image": "assets/1185003/images/icon_jericho_ssr_type01_skill_11__ecc76f847a2b366d.png",
          "type": "Attaque",
          "cible": "un ennemi",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 220.0,
              "description": "Inflige des dégâts égaux à 220 % de l'attaque à un ennemi.",
              "idJeu": 117091,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 220.0,
              "description": "Inflige des dégâts égaux à 220 % de l'attaque à un ennemi et applique [00D5FF]Gel[-] pendant 1 tour(s). Inflige des dégâts égaux à 20 % des [00D5FF]PV restants[-] lorsque l'effet est retiré avec une compétence, une compétence unique, un Commandement ou la fin des tours.\\n\\n[00D5FF]※Gel : immobilise un ennemi. L'effet est retiré lorsqu'une attaque est subie.[-]",
              "idJeu": 117092,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 360.0,
              "description": "Inflige des dégâts égaux à 360 % de l'attaque à un ennemi et applique [00D5FF]Gel[-] pendant 2 tour(s). Inflige des dégâts égaux à 40 % des [00D5FF]PV restants[-] lorsque l'effet est retiré avec une compétence, une compétence unique, un Commandement ou la fin des tours.\\n\\n[00D5FF]※Gel : immobilise un ennemi. L'effet est retiré lorsqu'une attaque est subie.[-]",
              "idJeu": 117093,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Vague de froid »",
          "image": "assets/1185003/images/icon_jericho_ssr_type01_skill_12__2abcec098e763d95.png",
          "type": "Attaque",
          "cible": "un ennemi",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 160.0,
              "description": "Inflige des dégâts de [00D5FF]Fulmination[-] égaux à 160 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Fulmination : 20 % de dégâts supplémentaires [FFAE00]pour chaque orbe[-] dans la jauge de coup ultime de un ennemi.[-]",
              "idJeu": 117101,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 240.0,
              "description": "Inflige des dégâts de [00D5FF]Fulmination[-] égaux à 240 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Fulmination : 20 % de dégâts supplémentaires [FFAE00]pour chaque orbe[-] dans la jauge de coup ultime de un ennemi.[-]",
              "idJeu": 117102,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "Inflige des dégâts de [00D5FF]Fulmination[-] égaux à 400 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Fulmination : 20 % de dégâts supplémentaires [FFAE00]pour chaque orbe[-] dans la jauge de coup ultime de un ennemi.[-]",
              "idJeu": 117103,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Taillade silencieuse »",
        "image": "assets/1185003/images/icon_jericho_ssr_type01_special_01__bfb01e4ee6db5695.png",
        "cible": "un ennemi",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 560 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 616 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 672 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 728 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 784 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 840 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Volonté inébranlable",
        "image": "assets/1185003/images/icon_exclusive_skill_1185003__1415b6d80a40e4b4.png",
        "description": "Lorsque le héros effectue un coup critique sur un ennemi, applique un effet sur l'ennemi blessé qui réduit ses stats défensives de [FFAE00]40 %[-] pendant [FFAE00]2 tours[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Lorsque le héros effectue un coup critique sur un ennemi, applique un effet sur l'ennemi blessé qui réduit ses stats défensives de [FFAE00]40 %[-] pendant [FFAE00]2 tours[-]."
          }
        ]
      },
      "idForme": 301122,
      "portrait": "assets/1185003/images/icon_hero_jericho_0026_s__aee46f3fc0b4dab6.png",
      "portraitVertical": "assets/1185003/images/icon_skin_jericho_0026_l__55a22f83fac705b8.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1185003/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1185003/images/hero_illust_jericho_1185003__05542f18d918d984.png",
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
            "valeur": 730.0
          },
          {
            "nom": "Défense",
            "valeur": 320.0
          },
          {
            "nom": "PV",
            "valeur": 7400.0
          },
          {
            "nom": "Classe de Combat",
            "valeur": 3831
          }
        ],
        "secondaires": [
          {
            "nom": "Chance de critique",
            "valeur": 40.0,
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
            "valeur": 20.0,
            "unite": "%"
          },
          {
            "nom": "Défense crit.",
            "valeur": 50.0,
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
            "valeur": 120.0,
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
          "nom": "« Lame de givre »",
          "image": "assets/1185003/images/icon_jericho_ssr_type01_skill_11__ecc76f847a2b366d.png",
          "type": "Attaque",
          "cible": "un ennemi",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 220.0,
              "description": "Inflige des dégâts égaux à 220 % de l'attaque à un ennemi.",
              "idJeu": 117091,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 220.0,
              "description": "Inflige des dégâts égaux à 220 % de l'attaque à un ennemi et applique [00D5FF]Gel[-] pendant 1 tour(s). Inflige des dégâts égaux à 20 % des [00D5FF]PV restants[-] lorsque l'effet est retiré avec une compétence, une compétence unique, un Commandement ou la fin des tours.\\n\\n[00D5FF]※Gel : immobilise un ennemi. L'effet est retiré lorsqu'une attaque est subie.[-]",
              "idJeu": 117092,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 360.0,
              "description": "Inflige des dégâts égaux à 360 % de l'attaque à un ennemi et applique [00D5FF]Gel[-] pendant 2 tour(s). Inflige des dégâts égaux à 40 % des [00D5FF]PV restants[-] lorsque l'effet est retiré avec une compétence, une compétence unique, un Commandement ou la fin des tours.\\n\\n[00D5FF]※Gel : immobilise un ennemi. L'effet est retiré lorsqu'une attaque est subie.[-]",
              "idJeu": 117093,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Vague de froid »",
          "image": "assets/1185003/images/icon_jericho_ssr_type01_skill_12__2abcec098e763d95.png",
          "type": "Attaque",
          "cible": "un ennemi",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 160.0,
              "description": "Inflige des dégâts de [00D5FF]Fulmination[-] égaux à 160 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Fulmination : 20 % de dégâts supplémentaires [FFAE00]pour chaque orbe[-] dans la jauge de coup ultime de un ennemi.[-]",
              "idJeu": 117101,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 240.0,
              "description": "Inflige des dégâts de [00D5FF]Fulmination[-] égaux à 240 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Fulmination : 20 % de dégâts supplémentaires [FFAE00]pour chaque orbe[-] dans la jauge de coup ultime de un ennemi.[-]",
              "idJeu": 117102,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 400.0,
              "description": "Inflige des dégâts de [00D5FF]Fulmination[-] égaux à 400 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Fulmination : 20 % de dégâts supplémentaires [FFAE00]pour chaque orbe[-] dans la jauge de coup ultime de un ennemi.[-]",
              "idJeu": 117103,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Taillade silencieuse »",
        "image": "assets/1185003/images/icon_jericho_ssr_type01_special_01__bfb01e4ee6db5695.png",
        "cible": "un ennemi",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 560.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 560 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 616.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 616 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 672.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 672 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 728.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 728 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 784.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 784 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 840.0,
            "description": "Inflige des dégâts de [00D5FF]Pointe[-] égaux à 840 % de l'attaque à un ennemi.\\n\\n[00D5FF]※Pointe : dégâts crit. x2.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Volonté inébranlable",
        "image": "assets/1185003/images/icon_exclusive_skill_1185003__1415b6d80a40e4b4.png",
        "description": "Lorsque le héros effectue un coup critique sur un ennemi, applique un effet sur l'ennemi blessé qui réduit ses stats défensives de [FFAE00]40 %[-] pendant [FFAE00]2 tours[-].",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Lorsque le héros effectue un coup critique sur un ennemi, applique un effet sur l'ennemi blessé qui réduit ses stats défensives de [FFAE00]40 %[-] pendant [FFAE00]2 tours[-]."
          }
        ]
      },
      "idForme": 301123,
      "portrait": "assets/1185003/images/icon_hero_jericho_0027_s__308e88e837209062.png",
      "portraitVertical": "assets/1185003/images/icon_skin_jericho_0027_l__132d1f9e95493b4d.png"
    }
  ],
  "costumes": [
    {
      "id": "3301111",
      "categorie": "Skin",
      "nom": "Veste avec ruban (rose)",
      "image": "assets/1185003/images/icon_skin_jericho_0019_l__8b5c91a0d8c6fdbd.png",
      "rarete": ""
    },
    {
      "id": "3301119",
      "categorie": "Skin",
      "nom": "Habits chauds d'hiver",
      "image": "assets/1185003/images/icon_skin_jericho_0024_l__41ac07c84a97b959.png",
      "rarete": ""
    },
    {
      "id": "3301122",
      "categorie": "Skin",
      "nom": "Succession de pouvoir",
      "image": "assets/1185003/images/icon_skin_jericho_0026_l__55a22f83fac705b8.png",
      "rarete": ""
    },
    {
      "id": "3301116",
      "categorie": "Skin",
      "nom": "T-shirt chanceux sans manches",
      "image": "assets/1185003/images/icon_skin_jericho_0006_l__72a7967946a5d6f6.png",
      "rarete": ""
    },
    {
      "id": "3301151",
      "categorie": "Skin",
      "nom": "Serveuse royale",
      "image": "assets/1185003/images/icon_skin_jericho_0015_l__62cc95688d8d62bc.png",
      "rarete": ""
    },
    {
      "id": "3301107",
      "categorie": "Skin",
      "nom": "Amoureuse",
      "image": "assets/1185003/images/icon_skin_jericho_0001_l__49f5bcb0195cfe54.png",
      "rarete": ""
    },
    {
      "id": "3301153",
      "categorie": "Skin",
      "nom": "Maillot de bain (lagon bleu)",
      "image": "assets/1185003/images/icon_skin_jericho_0016_l__6640d8e247bae4d2.png",
      "rarete": ""
    },
    {
      "id": "3301155",
      "categorie": "Skin",
      "nom": "Sentiments grandissants",
      "image": "assets/1185003/images/icon_skin_jericho_0007_l__8d5a8c3b8a1ab068.png",
      "rarete": ""
    },
    {
      "id": "3301157",
      "categorie": "Skin",
      "nom": "Tenue d'infirmière",
      "image": "assets/1185003/images/icon_skin_jericho_0021_l__9ce1ff2f06d09077.png",
      "rarete": ""
    },
    {
      "id": "3301117",
      "categorie": "Skin",
      "nom": "Tenue de gardienne de prison de Baste",
      "image": "assets/1185003/images/icon_skin_jericho_0012_l__bd1b3a5367a5daf6.png",
      "rarete": ""
    },
    {
      "id": "3301118",
      "categorie": "Skin",
      "nom": "Voyageuse",
      "image": "assets/1185003/images/icon_skin_jericho_0005_l__1c80096fe8058f86.png",
      "rarete": ""
    },
    {
      "id": "3301112",
      "categorie": "Skin",
      "nom": "Chevalière de la rapidité",
      "image": "assets/1185003/images/icon_skin_jericho_0013_l__113643c677f09f12.png",
      "rarete": ""
    },
    {
      "id": "3301113",
      "categorie": "Skin",
      "nom": "Aventure hivernale",
      "image": "assets/1185003/images/icon_skin_jericho_0002_l__30389ea147a81b96.png",
      "rarete": ""
    },
    {
      "id": "3301109",
      "categorie": "Skin",
      "nom": "Chevalière de la rapidité",
      "image": "assets/1185003/images/icon_skin_jericho_0008_l__babde5611bfb328d.png",
      "rarete": ""
    },
    {
      "id": "3301120",
      "categorie": "Skin",
      "nom": "Grâce du flocon bleu",
      "image": "assets/1185003/images/icon_skin_jericho_0025_l__0d9be8b1cef4eb88.png",
      "rarete": ""
    },
    {
      "id": "3301123",
      "categorie": "Skin",
      "nom": "Armure de glace azurée",
      "image": "assets/1185003/images/icon_skin_jericho_0027_l__132d1f9e95493b4d.png",
      "rarete": ""
    },
    {
      "id": "851104",
      "categorie": "Weapon",
      "nom": "Épée d'aventurier",
      "image": "assets/1185003/images/icon_weapon_jericho_104_l__175e2c30fee95a07.png",
      "rarete": ""
    },
    {
      "id": "951103",
      "categorie": "Weapon",
      "nom": "Épée véloce",
      "image": "assets/1185003/images/icon_weapon_jericho_103_l__322406b7bb05df38.png",
      "rarete": ""
    },
    {
      "id": "951109",
      "categorie": "Weapon",
      "nom": "Épée de la rose",
      "image": "assets/1185003/images/icon_weapon_jericho_109_l__5611bc2f20f68627.png",
      "rarete": ""
    },
    {
      "id": "951153",
      "categorie": "Weapon",
      "nom": "Épée des ténèbres",
      "image": "assets/1185003/images/icon_weapon_jericho_503_l__3e2bc72074e836ca.png",
      "rarete": ""
    },
    {
      "id": "951106",
      "categorie": "Weapon",
      "nom": "Épée des cieux",
      "image": "assets/1185003/images/icon_weapon_jericho_106_l__47460c3433332c33.png",
      "rarete": ""
    },
    {
      "id": "951155",
      "categorie": "Weapon",
      "nom": "Marlin de la ferme",
      "image": "assets/1185003/images/icon_weapon_jericho_0016_l__b5760249f927b8b3.png",
      "rarete": ""
    },
    {
      "id": "951156",
      "categorie": "Weapon",
      "nom": "Lame violette",
      "image": "assets/1185003/images/icon_weapon_jericho_0007_l__171f64c6c3a305ec.png",
      "rarete": ""
    },
    {
      "id": "951111",
      "categorie": "Weapon",
      "nom": "Scalpel",
      "image": "assets/1185003/images/icon_weapon_jericho_0021_l__89944b5f4a32e009.png",
      "rarete": ""
    },
    {
      "id": "951102",
      "categorie": "Weapon",
      "nom": "Épée de la condamnation",
      "image": "assets/1185003/images/icon_weapon_jericho_102_l__83b81457f214c7cf.png",
      "rarete": ""
    },
    {
      "id": "951105",
      "categorie": "Weapon",
      "nom": "Épée de rubis",
      "image": "assets/1185003/images/icon_weapon_jericho_105_l__1c9b7cf614a01308.png",
      "rarete": ""
    },
    {
      "id": "951151",
      "categorie": "Weapon",
      "nom": "Épée de la rapidité",
      "image": "assets/1185003/images/icon_weapon_jericho_501_l__3c9db83db90fdd72.png",
      "rarete": ""
    },
    {
      "id": "951154",
      "categorie": "Weapon",
      "nom": "Illusion de minuit",
      "image": "assets/1185003/images/icon_weapon_jericho_111_l__4eaeec41bc538073.png",
      "rarete": ""
    },
    {
      "id": "951108",
      "categorie": "Weapon",
      "nom": "Épée obscure",
      "image": "assets/1185003/images/icon_weapon_jericho_108_l__815b49145c0ed0df.png",
      "rarete": ""
    },
    {
      "id": "951107",
      "categorie": "Weapon",
      "nom": "Épée du dieu de jade",
      "image": "assets/1185003/images/icon_weapon_jericho_107_l__0a6aa291e231cdb4.png",
      "rarete": ""
    },
    {
      "id": "951152",
      "categorie": "Weapon",
      "nom": "Épée d'amputation",
      "image": "assets/1185003/images/icon_weapon_jericho_502_l__ca262875ab95da4e.png",
      "rarete": ""
    },
    {
      "id": "951110",
      "categorie": "Weapon",
      "nom": "Batte véloce",
      "image": "assets/1185003/images/icon_weapon_jericho_110_l__5e7720dfa8f9a105.png",
      "rarete": ""
    },
    {
      "id": "951112",
      "categorie": "Weapon",
      "nom": "Énergie glaciale",
      "image": "assets/1185003/images/icon_weapon_jericho_0024_l__506c0b141bd46e93.png",
      "rarete": ""
    },
    {
      "id": "951157",
      "categorie": "Weapon",
      "nom": "Fleur de glace",
      "image": "assets/1185003/images/icon_weapon_jericho_0025_l__8635704e4e7853dc.png",
      "rarete": ""
    },
    {
      "id": "951158",
      "categorie": "Weapon",
      "nom": "Épée gelée de Thjazi",
      "image": "assets/1185003/images/icon_weapon_jericho_0007_l__171f64c6c3a305ec.png",
      "rarete": ""
    },
    {
      "id": "4185001",
      "categorie": "Head",
      "nom": "Gardien",
      "image": "assets/1185003/images/icon_head_jericho_0001_l__181e574b627257c1.png",
      "rarete": ""
    },
    {
      "id": "4185003",
      "categorie": "Head",
      "nom": "Serveuse en formation",
      "image": "assets/1185003/images/icon_head_jericho_0015_l__4ac7a6dbc0a0b336.png",
      "rarete": ""
    },
    {
      "id": "4185007",
      "categorie": "Head",
      "nom": "Fille de la ville",
      "image": "assets/1185003/images/icon_head_jericho_0504_l__6365b549bb7b2e1d.png",
      "rarete": ""
    },
    {
      "id": "4185004",
      "categorie": "Head",
      "nom": "Masque de renard",
      "image": "assets/1185003/images/icon_head_jericho_0501_l__acfdc7ff258b5411.png",
      "rarete": ""
    },
    {
      "id": "4185005",
      "categorie": "Head",
      "nom": "Kunoichi",
      "image": "assets/1185003/images/icon_head_jericho_0502_l__0fdf904da0d2246b.png",
      "rarete": ""
    },
    {
      "id": "4185008",
      "categorie": "Head",
      "nom": "Bandeau orné de fleurs",
      "image": "assets/1185003/images/icon_head_jericho_0016_l__d617c3d93446bf0a.png",
      "rarete": ""
    },
    {
      "id": "4185009",
      "categorie": "Head",
      "nom": "Sentiments tumultueux",
      "image": "assets/1185003/images/icon_head_jericho_0007_l__2eeb4852e233b1a8.png",
      "rarete": ""
    },
    {
      "id": "4185010",
      "categorie": "Head",
      "nom": "Coiffe d'infirmière",
      "image": "assets/1185003/images/icon_head_jericho_0021_l__eb18e81485b6de74.png",
      "rarete": ""
    },
    {
      "id": "4185002",
      "categorie": "Head",
      "nom": "Tout en finesse",
      "image": "assets/1185003/images/icon_head_jericho_0013_l__f9c99e74bd94c766.png",
      "rarete": ""
    },
    {
      "id": "4185006",
      "categorie": "Head",
      "nom": "Reine",
      "image": "assets/1185003/images/icon_head_jericho_0503_l__b639f86817ddd97f.png",
      "rarete": ""
    },
    {
      "id": "4185012",
      "categorie": "Head",
      "nom": "Cheveux ondulés",
      "image": "assets/1185003/images/icon_head_jericho_0027_l__8210f2a0da510140.png",
      "rarete": ""
    },
    {
      "id": "4185011",
      "categorie": "Head",
      "nom": "Cheveux avec branche enneigée",
      "image": "assets/1185003/images/icon_head_jericho_0025_l__5fc17fc7cd143909.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Épée gelée de Thjazi",
    "image": "assets/1185003/images/icon_weapon_jericho_0551_s__bcc99b75c58b59b9.png",
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