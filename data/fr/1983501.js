window.fichePreparee={
  "nom": "Roi des démons tyrannique",
  "designation": "[Contrôle incomplet]",
  "titre": "Roi des démons tyrannique",
  "idJeu": "1983501",
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
  "portrait": "assets/1983501/images/icon_hero_demon_king_zeldris02_0002_s__1b9eb37a898c9117.png",
  "rareteParDefaut": "UR",
  "presentation": "[Contrôle incomplet] Roi des démons tyrannique possède une compétence qui ignore la défense et la résistance de l'ennemi.",
  "commandement": null,
  "talent": {
    "nom": "« Autorité des ténèbres »",
    "image": "assets/1983501/images/icon_ability_1983501__1c87ee5dd9a2e567.png",
    "description": "Retire [FFAE00]1[-] bonus de tous les ennemis et applique [00D5FF]Malédiction du noir absolu[-] pendant [FFAE00]2 tours[-].\\n\\n[i][C0C0C0]※Malédiction du noir absolu : applique l'effet Corrosion au héros, qui inflige des dégâts égaux à [FFAE00]10 %[-] des PV restants pendant [FFAE00]2 tours[-], lorsqu'il subit des dégâts d'une compétence ennemie ou lorsque le héros utilise une compétence.\\n([FFAE00]3 fois[-] max.)\\n(Temps de rechargement : [FFAE00]3 tours[-])[/i][-]",
    "niveauxUltime": [
      {
        "niveau": 1,
        "description": "Retire [FFAE00]1[-] bonus de tous les ennemis et applique [00D5FF]Malédiction du noir absolu[-] pendant [FFAE00]2 tours[-].\\n\\n[i][C0C0C0]※Malédiction du noir absolu : applique l'effet Corrosion au héros, qui inflige des dégâts égaux à [FFAE00]10 %[-] des PV restants pendant [FFAE00]2 tours[-], lorsqu'il subit des dégâts d'une compétence ennemie ou lorsque le héros utilise une compétence.\\n([FFAE00]3 fois[-] max.)\\n(Temps de rechargement : [FFAE00]3 tours[-])[/i][-]"
      }
    ],
    "cadre": "assets/passive-frames/ability_frame_12.png",
    "idJeu": 540005
  },
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1983501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1983501/images/hero_illust_demon_king_zeldris02_1983501__6ec4bc761e05f36b.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 830.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 550.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9500.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5795
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
            "valeur": 210.0,
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
          "nom": "« Impact de tyran »",
          "image": "assets/1983501/images/icon_demon_king_zeldris02_ssr_type01_skill_01__375f5f284231c309.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts de [00D5FF]Noir absolu[-] égaux à 200 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Noir absolu : chances crit. [FFAE00]x2[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui souffrent de malus.\\nDégâts infligés [FFAE00]+[-]150 % contre les ennemis affectés par Malédiction du noir absolu.[-]",
              "idJeu": 1006601,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts de [00D5FF]Noir absolu[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Noir absolu : chances crit. [FFAE00]x2[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui souffrent de malus.\\nDégâts infligés [FFAE00]+[-]150 % contre les ennemis affectés par Malédiction du noir absolu.[-]",
              "idJeu": 1006602,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts de [00D5FF]Noir absolu[-] égaux à 500 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Noir absolu : chances crit. [FFAE00]x2[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui souffrent de malus.\\nDégâts infligés [FFAE00]+[-]150 % contre les ennemis affectés par Malédiction du noir absolu.[-]",
              "idJeu": 1006603,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Ordre d'extinction »",
          "image": "assets/1983501/images/icon_demon_king_zeldris02_ssr_type01_skill_02__bd3351d5d6dbc3c3.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "Inflige des dégâts d'[00D5FF]Érosion[-] égaux à 150 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Érosion : ignore la défense et la résistance.\\nAugmente les dégâts infligés de [FFAE00]80 %[-] du taux de perforation.[-]",
              "idJeu": 1006611,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts d'[00D5FF]Érosion[-] égaux à 200 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Érosion : ignore la défense et la résistance.\\nAugmente les dégâts infligés de [FFAE00]80 %[-] du taux de perforation.[-]",
              "idJeu": 1006612,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts d'[00D5FF]Érosion[-] égaux à 300 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Érosion : ignore la défense et la résistance.\\nAugmente les dégâts infligés de [FFAE00]80 %[-] du taux de perforation.[-]",
              "idJeu": 1006613,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Épée de réclusion »",
        "image": "assets/1983501/images/icon_demon_king_zeldris02_ssr_type01_special_01__267a751aad5610ac.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Octroie [FFAE00]2[-] effets [00D5FF]Épée du noir absolu[-] pendant [FFAE00]3 tours[-] puis inflige des dégâts de [00D5FF]Noir absolu[-] égaux à 350 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Noir absolu : chances crit. [FFAE00]x2[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui souffrent de malus.\\nDégâts infligés [FFAE00]+[-]150 % contre les ennemis affectés par Malédiction du noir absolu.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 380.0,
            "description": "Octroie [FFAE00]2[-] effets [00D5FF]Épée du noir absolu[-] pendant [FFAE00]3 tours[-] puis inflige des dégâts de [00D5FF]Noir absolu[-] égaux à 380 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Noir absolu : chances crit. [FFAE00]x2[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui souffrent de malus.\\nDégâts infligés [FFAE00]+[-]150 % contre les ennemis affectés par Malédiction du noir absolu.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 410.0,
            "description": "Octroie [FFAE00]2[-] effets [00D5FF]Épée du noir absolu[-] pendant [FFAE00]3 tours[-] puis inflige des dégâts de [00D5FF]Noir absolu[-] égaux à 410 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Noir absolu : chances crit. [FFAE00]x2[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui souffrent de malus.\\nDégâts infligés [FFAE00]+[-]150 % contre les ennemis affectés par Malédiction du noir absolu.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 440.0,
            "description": "Octroie [FFAE00]2[-] effets [00D5FF]Épée du noir absolu[-] pendant [FFAE00]3 tours[-] puis inflige des dégâts de [00D5FF]Noir absolu[-] égaux à 440 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Noir absolu : chances crit. [FFAE00]x2[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui souffrent de malus.\\nDégâts infligés [FFAE00]+[-]150 % contre les ennemis affectés par Malédiction du noir absolu.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 470.0,
            "description": "Octroie [FFAE00]2[-] effets [00D5FF]Épée du noir absolu[-] pendant [FFAE00]3 tours[-] puis inflige des dégâts de [00D5FF]Noir absolu[-] égaux à 470 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Noir absolu : chances crit. [FFAE00]x2[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui souffrent de malus.\\nDégâts infligés [FFAE00]+[-]150 % contre les ennemis affectés par Malédiction du noir absolu.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 500.0,
            "description": "Octroie [FFAE00]2[-] effets [00D5FF]Épée du noir absolu[-] pendant [FFAE00]3 tours[-] puis inflige des dégâts de [00D5FF]Noir absolu[-] égaux à 500 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Noir absolu : chances crit. [FFAE00]x2[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui souffrent de malus.\\nDégâts infligés [FFAE00]+[-]150 % contre les ennemis affectés par Malédiction du noir absolu.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Puissance du tyran",
        "image": "assets/1983501/images/icon_exclusive_skill_1983501__2a2e525a59b4b829.png",
        "description": "Augmente toutes les stats des [00D5FF]alliés du clan des démons[-] de [FFAE00]4 %[-] et réduit leur dégâts subits de [FFAE00]10 %[-] pour [FFAE00]chacun[-] d'entre eux qui est en combat.\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les alliés au début du combat si tous les alliés en combat sont des [00D5FF]démons[-].\\n[i][C0C0C0]※Bouclier du noir absolu : octroie une barrière égale à [FFAE00]700 %[-] de la défense initiale du héros cible.\\nRéduit les dégâts finaux subis avec des attaques de groupe de [FF8000]50 %[-].[/i][-]\\n\\nApplique l'effet [00D5FF]Main d'oppression[-] sur les ennemis dont la [00D5FF]défense initiale est inférieure à celle du héros[-] au début du combat. Augmente toutes les stats du héros de [FFAE00]8 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Main d'oppression[-] appliqué aux ennemis.\\n[i][C0C0C0]※Main d'oppression : toutes les stats [FFAE00]-10 %[-]\\nDégâts infligés [FFAE00]-50 %[-] lors de l'utilisation d'une compétence contre un démon[/i][-]\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-] lorsque le héros utilise la compétence [00D5FF]Érosion[-].\\n\\nSi [00D5FF]Bouclier du noir absolu[-] est retiré par une compétence pendant le tour ennemi, l'ennemi qui a utilisé la compétence subit des dégâts de [00D5FF]Renvoi[-] égaux à [FF8000]100 %[-] de la valeur initiale de la barrière de [00D5FF]Bouclier du noir absolu[-].\\n\\nSi un allié a un [00D5FF]Bouclier du noir absolu[-] au début du tour allié [00D5FF]autre que le début du combat[-], cet effet est retiré et les stats offensives de cet allié augmentent de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Pour chacun de ces effets retirés, octroie au héros l'effet [00D5FF]Épée du noir absolu[-] ([FFAE00]4[-] fois max.) pendant [FFAE00]3 tours[-].\\n[i][C0C0C0]※Épée du noir absolu : stats offensives [FFAE00]+15 %[-], dégâts crit. [FFAE00]+30 %[-][/i][-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente toutes les stats des [00D5FF]alliés du clan des démons[-] de [FFAE00]4 %[-] et réduit leur dégâts subits de [FFAE00]10 %[-] pour [FFAE00]chacun[-] d'entre eux qui est en combat.\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les alliés au début du combat si tous les alliés en combat sont des [00D5FF]démons[-].\\n[i][C0C0C0]※Bouclier du noir absolu : octroie une barrière égale à [FFAE00]700 %[-] de la défense initiale du héros cible.\\nRéduit les dégâts finaux subis avec des attaques de groupe de [FF8000]30 %[-].[/i][-]\\n\\nApplique l'effet [00D5FF]Main d'oppression[-] sur les ennemis dont la [00D5FF]défense initiale est inférieure à celle du héros[-] au début du combat. Augmente toutes les stats du héros de [FFAE00]8 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Main d'oppression[-] appliqué aux ennemis.\\n[i][C0C0C0]※Main d'oppression : toutes les stats [FFAE00]-10 %[-][/i][-]\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-] lorsque le héros utilise la compétence [00D5FF]Érosion[-].\\n\\nSi [00D5FF]Bouclier du noir absolu[-] est retiré par une compétence pendant le tour ennemi, l'ennemi qui a utilisé la compétence subit des dégâts de [00D5FF]Renvoi[-] égaux à [FF8000]50 %[-] de la valeur initiale de la barrière de [00D5FF]Bouclier du noir absolu[-].\\n\\nSi un allié a un [00D5FF]Bouclier du noir absolu[-] au début du tour allié [00D5FF]autre que le début du combat[-], cet effet est retiré et les stats offensives de cet allié augmentent de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Pour chacun de ces effets retirés, octroie au héros l'effet [00D5FF]Épée du noir absolu[-] ([FFAE00]4[-] fois max.) pendant [FFAE00]3 tours[-].\\n[i][C0C0C0]※Épée du noir absolu : stats offensives [FFAE00]+15 %[-], dégâts crit. [FFAE00]+30 %[-][/i][-]"
          },
          {
            "niveau": 2,
            "description": "Augmente toutes les stats des [00D5FF]alliés du clan des démons[-] de [FFAE00]4 %[-] et réduit leur dégâts subits de [FFAE00]10 %[-] pour [FFAE00]chacun[-] d'entre eux qui est en combat.\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les alliés au début du combat si tous les alliés en combat sont des [00D5FF]démons[-].\\n[i][C0C0C0]※Bouclier du noir absolu : octroie une barrière égale à [FFAE00]700 %[-] de la défense initiale du héros cible.\\nRéduit les dégâts finaux subis avec des attaques de groupe de [FF8000]40 %[-].[/i][-]\\n\\nApplique l'effet [00D5FF]Main d'oppression[-] sur les ennemis dont la [00D5FF]défense initiale est inférieure à celle du héros[-] au début du combat. Augmente toutes les stats du héros de [FFAE00]8 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Main d'oppression[-] appliqué aux ennemis.\\n[i][C0C0C0]※Main d'oppression : toutes les stats [FFAE00]-10 %[-]\\nDégâts infligés [FFAE00]-50 %[-] lors de l'utilisation d'une compétence contre un démon[/i][-]\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-] lorsque le héros utilise la compétence [00D5FF]Érosion[-].\\n\\nSi [00D5FF]Bouclier du noir absolu[-] est retiré par une compétence pendant le tour ennemi, l'ennemi qui a utilisé la compétence subit des dégâts de [00D5FF]Renvoi[-] égaux à [FF8000]50 %[-] de la valeur initiale de la barrière de [00D5FF]Bouclier du noir absolu[-].\\n\\nSi un allié a un [00D5FF]Bouclier du noir absolu[-] au début du tour allié [00D5FF]autre que le début du combat[-], cet effet est retiré et les stats offensives de cet allié augmentent de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Pour chacun de ces effets retirés, octroie au héros l'effet [00D5FF]Épée du noir absolu[-] ([FFAE00]4[-] fois max.) pendant [FFAE00]3 tours[-].\\n[i][C0C0C0]※Épée du noir absolu : stats offensives [FFAE00]+15 %[-], dégâts crit. [FFAE00]+30 %[-][/i][-]"
          },
          {
            "niveau": 3,
            "description": "Augmente toutes les stats des [00D5FF]alliés du clan des démons[-] de [FFAE00]4 %[-] et réduit leur dégâts subits de [FFAE00]10 %[-] pour [FFAE00]chacun[-] d'entre eux qui est en combat.\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les alliés au début du combat si tous les alliés en combat sont des [00D5FF]démons[-].\\n[i][C0C0C0]※Bouclier du noir absolu : octroie une barrière égale à [FFAE00]700 %[-] de la défense initiale du héros cible.\\nRéduit les dégâts finaux subis avec des attaques de groupe de [FF8000]40 %[-].[/i][-]\\n\\nApplique l'effet [00D5FF]Main d'oppression[-] sur les ennemis dont la [00D5FF]défense initiale est inférieure à celle du héros[-] au début du combat. Augmente toutes les stats du héros de [FFAE00]8 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Main d'oppression[-] appliqué aux ennemis.\\n[i][C0C0C0]※Main d'oppression : toutes les stats [FFAE00]-10 %[-]\\nDégâts infligés [FFAE00]-50 %[-] lors de l'utilisation d'une compétence contre un démon[/i][-]\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-] lorsque le héros utilise la compétence [00D5FF]Érosion[-].\\n\\nSi [00D5FF]Bouclier du noir absolu[-] est retiré par une compétence pendant le tour ennemi, l'ennemi qui a utilisé la compétence subit des dégâts de [00D5FF]Renvoi[-] égaux à [FF8000]75 %[-] de la valeur initiale de la barrière de [00D5FF]Bouclier du noir absolu[-].\\n\\nSi un allié a un [00D5FF]Bouclier du noir absolu[-] au début du tour allié [00D5FF]autre que le début du combat[-], cet effet est retiré et les stats offensives de cet allié augmentent de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Pour chacun de ces effets retirés, octroie au héros l'effet [00D5FF]Épée du noir absolu[-] ([FFAE00]4[-] fois max.) pendant [FFAE00]3 tours[-].\\n[i][C0C0C0]※Épée du noir absolu : stats offensives [FFAE00]+15 %[-], dégâts crit. [FFAE00]+30 %[-][/i][-]"
          },
          {
            "niveau": 4,
            "description": "Augmente toutes les stats des [00D5FF]alliés du clan des démons[-] de [FFAE00]4 %[-] et réduit leur dégâts subits de [FFAE00]10 %[-] pour [FFAE00]chacun[-] d'entre eux qui est en combat.\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les alliés au début du combat si tous les alliés en combat sont des [00D5FF]démons[-].\\n[i][C0C0C0]※Bouclier du noir absolu : octroie une barrière égale à [FFAE00]700 %[-] de la défense initiale du héros cible.\\nRéduit les dégâts finaux subis avec des attaques de groupe de [FF8000]50 %[-].[/i][-]\\n\\nApplique l'effet [00D5FF]Main d'oppression[-] sur les ennemis dont la [00D5FF]défense initiale est inférieure à celle du héros[-] au début du combat. Augmente toutes les stats du héros de [FFAE00]8 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Main d'oppression[-] appliqué aux ennemis.\\n[i][C0C0C0]※Main d'oppression : toutes les stats [FFAE00]-10 %[-]\\nDégâts infligés [FFAE00]-50 %[-] lors de l'utilisation d'une compétence contre un démon[/i][-]\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-] lorsque le héros utilise la compétence [00D5FF]Érosion[-].\\n\\nSi [00D5FF]Bouclier du noir absolu[-] est retiré par une compétence pendant le tour ennemi, l'ennemi qui a utilisé la compétence subit des dégâts de [00D5FF]Renvoi[-] égaux à [FF8000]75 %[-] de la valeur initiale de la barrière de [00D5FF]Bouclier du noir absolu[-].\\n\\nSi un allié a un [00D5FF]Bouclier du noir absolu[-] au début du tour allié [00D5FF]autre que le début du combat[-], cet effet est retiré et les stats offensives de cet allié augmentent de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Pour chacun de ces effets retirés, octroie au héros l'effet [00D5FF]Épée du noir absolu[-] ([FFAE00]4[-] fois max.) pendant [FFAE00]3 tours[-].\\n[i][C0C0C0]※Épée du noir absolu : stats offensives [FFAE00]+15 %[-], dégâts crit. [FFAE00]+30 %[-][/i][-]"
          },
          {
            "niveau": 5,
            "description": "Augmente toutes les stats des [00D5FF]alliés du clan des démons[-] de [FFAE00]4 %[-] et réduit leur dégâts subits de [FFAE00]10 %[-] pour [FFAE00]chacun[-] d'entre eux qui est en combat.\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les alliés au début du combat si tous les alliés en combat sont des [00D5FF]démons[-].\\n[i][C0C0C0]※Bouclier du noir absolu : octroie une barrière égale à [FFAE00]700 %[-] de la défense initiale du héros cible.\\nRéduit les dégâts finaux subis avec des attaques de groupe de [FF8000]50 %[-].[/i][-]\\n\\nApplique l'effet [00D5FF]Main d'oppression[-] sur les ennemis dont la [00D5FF]défense initiale est inférieure à celle du héros[-] au début du combat. Augmente toutes les stats du héros de [FFAE00]8 %[-] pour [FFAE00]chaque[-] effet [00D5FF]Main d'oppression[-] appliqué aux ennemis.\\n[i][C0C0C0]※Main d'oppression : toutes les stats [FFAE00]-10 %[-]\\nDégâts infligés [FFAE00]-50 %[-] lors de l'utilisation d'une compétence contre un démon[/i][-]\\n\\nApplique [00D5FF]Bouclier du noir absolu[-] sur les [00D5FF]alliés du clan des démons[-] pendant [FFAE00]2 tours[-] lorsque le héros utilise la compétence [00D5FF]Érosion[-].\\n\\nSi [00D5FF]Bouclier du noir absolu[-] est retiré par une compétence pendant le tour ennemi, l'ennemi qui a utilisé la compétence subit des dégâts de [00D5FF]Renvoi[-] égaux à [FF8000]100 %[-] de la valeur initiale de la barrière de [00D5FF]Bouclier du noir absolu[-].\\n\\nSi un allié a un [00D5FF]Bouclier du noir absolu[-] au début du tour allié [00D5FF]autre que le début du combat[-], cet effet est retiré et les stats offensives de cet allié augmentent de [FFAE00]20 %[-] pendant [FFAE00]2 tours[-]. Pour chacun de ces effets retirés, octroie au héros l'effet [00D5FF]Épée du noir absolu[-] ([FFAE00]4[-] fois max.) pendant [FFAE00]3 tours[-].\\n[i][C0C0C0]※Épée du noir absolu : stats offensives [FFAE00]+15 %[-], dégâts crit. [FFAE00]+30 %[-][/i][-]"
          }
        ]
      },
      "idForme": 327601,
      "portrait": "assets/1983501/images/icon_hero_demon_king_zeldris02_0002_s__1b9eb37a898c9117.png",
      "portraitVertical": "assets/1983501/images/icon_skin_demon_king_zeldris02_0002_l__f79f9ec538c3ea51.png"
    }
  ],
  "costumes": [
    {
      "id": "3327601",
      "categorie": "Skin",
      "nom": "Tyran du royaume des démons",
      "image": "assets/1983501/images/icon_skin_demon_king_zeldris02_0002_l__f79f9ec538c3ea51.png",
      "rarete": ""
    },
    {
      "id": "3327650",
      "categorie": "Skin",
      "nom": "Le seul véritable empereur",
      "image": "assets/1983501/images/icon_skin_demon_king_zeldris02_0003_l__e630c86bb87a3498.png",
      "rarete": ""
    },
    {
      "id": "3327651",
      "categorie": "Skin",
      "nom": "Souverain éternel",
      "image": "assets/1983501/images/icon_skin_demon_king_zeldris02_0004_l__aa7d3afff922cb4a.png",
      "rarete": ""
    },
    {
      "id": "3327652",
      "categorie": "Skin",
      "nom": "Maître des ténèbres",
      "image": "assets/1983501/images/icon_skin_demon_king_zeldris02_0005_l__20e93dc8b2834c82.png",
      "rarete": ""
    },
    {
      "id": "3327653",
      "categorie": "Skin",
      "nom": "Fêtard des plages",
      "image": "assets/1983501/images/icon_skin_demon_king_zeldris02_0006_l__325b55064d6fff90.png",
      "rarete": ""
    },
    {
      "id": "3327654",
      "categorie": "Skin",
      "nom": "MVP du mois",
      "image": "assets/1983501/images/icon_skin_demon_king_zeldris02_0007_l__698401a66b4f1dca.png",
      "rarete": ""
    },
    {
      "id": "3327602",
      "categorie": "Skin",
      "nom": "Armure du roi des démons",
      "image": null,
      "rarete": ""
    },
    {
      "id": "879801",
      "categorie": "Weapon",
      "nom": "Arme de base",
      "image": "assets/1983501/images/icon_weapon_demon_king_zeldris02_0001_l__70de879ef93f4e7a.png",
      "rarete": ""
    },
    {
      "id": "879802",
      "categorie": "Weapon",
      "nom": "Gants d'empereur",
      "image": "assets/1983501/images/icon_weapon_demon_king_zeldris02_0003_l__87dc81b5d59b70f8.png",
      "rarete": ""
    },
    {
      "id": "879803",
      "categorie": "Weapon",
      "nom": "Gantelets de souverain",
      "image": "assets/1983501/images/icon_weapon_demon_king_zeldris02_0004_l__748fb06ff6c1891b.png",
      "rarete": ""
    },
    {
      "id": "879804",
      "categorie": "Weapon",
      "nom": "Gantelets de seigneur",
      "image": "assets/1983501/images/icon_weapon_demon_king_zeldris02_0005_l__0b0826d29af42fab.png",
      "rarete": ""
    },
    {
      "id": "879805",
      "categorie": "Weapon",
      "nom": "Souvenir de vacances",
      "image": "assets/1983501/images/icon_weapon_demon_king_zeldris02_0006_l__49d600504d4c3f7d.png",
      "rarete": ""
    },
    {
      "id": "879806",
      "categorie": "Weapon",
      "nom": "Marque de diligence",
      "image": "assets/1983501/images/icon_weapon_demon_king_zeldris02_0007_l__6653d78744c751a8.png",
      "rarete": ""
    },
    {
      "id": "4008701",
      "categorie": "Head",
      "nom": "Coiffure simple",
      "image": "assets/1983501/images/icon_head_demon_king_zeldris02_0001_l__bffac0dea73eab0d.png",
      "rarete": ""
    },
    {
      "id": "4008702",
      "categorie": "Head",
      "nom": "Empereur ambitieux",
      "image": "assets/1983501/images/icon_head_demon_king_zeldris02_0003_l__4eb2a8d524f14e89.png",
      "rarete": ""
    },
    {
      "id": "4008703",
      "categorie": "Head",
      "nom": "Majesté cruelle",
      "image": "assets/1983501/images/icon_head_demon_king_zeldris02_0004_l__52c523c1298be4d2.png",
      "rarete": ""
    },
    {
      "id": "4008704",
      "categorie": "Head",
      "nom": "Couronne de seigneur",
      "image": "assets/1983501/images/icon_head_demon_king_zeldris02_0005_l__da3d6e235d2d7f27.png",
      "rarete": ""
    },
    {
      "id": "4008706",
      "categorie": "Head",
      "nom": "Freestyle",
      "image": "assets/1983501/images/icon_head_demon_king_zeldris02_0006_l__e5ec9d1a65f0d48e.png",
      "rarete": ""
    },
    {
      "id": "4008707",
      "categorie": "Head",
      "nom": "Casque de receveuse",
      "image": "assets/1983501/images/icon_head_demon_king_zeldris02_0007_l__d51e828a0fcc9c78.png",
      "rarete": ""
    },
    {
      "id": "4008705",
      "categorie": "Head",
      "nom": "Casque de tyran",
      "image": "assets/1983501/images/icon_head_demon_king_zeldris02_0002_l__1a015e7d00cdd178.png",
      "rarete": ""
    }
  ],
  "relique": null
};