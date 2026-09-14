window.fichePreparee={
  "nom": "Gawain, chevalière du soleil",
  "designation": "[Magie solaire]",
  "titre": "Gawain, chevalière du soleil",
  "idJeu": "2015501",
  "attribut": {
    "nom": "@attribute.4",
    "icone": "assets/commun/icon_filter_attribute_04__41a0e2f0c35046b0.png",
    "couleur": "#f1c54f",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.6"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_06__96c3bf184ce60ee4.png"
    ]
  },
  "caracteristiques": [
    "@characteristic.8"
  ],
  "portrait": "assets/2015501/images/icon_hero_4koa_gawain_0002_s__d295ac377fc12087.png",
  "rareteParDefaut": "UR",
  "presentation": "[Magie solaire] Gawain, chevalière du soleil possède une compétence de Brillance qui annule les postures de la cible et l'étourdit quand elle bénéficie de l'effet Brillance.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/2015501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/2015501/images/hero_illust_4koa_gawain_2015501__eadfb7c8ac642b72.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 850.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 500.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5875
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
          "nom": "« Violence sanguinaire »",
          "image": "assets/2015501/images/icon_4koa_gawain_ssr_type01_skill_01__d7f77fe6da832653.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts de [00D5FF]Feu solaire[-] égaux à 200 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Feu solaire : taux de perforation [FFAE00]x5[-] et dégâts crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis affectés par Fulminement.[-]",
              "idJeu": 1010301,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts de [00D5FF]Feu solaire[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Feu solaire : taux de perforation [FFAE00]x5[-] et dégâts crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis affectés par Fulminement.[-]",
              "idJeu": 1010302,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts de [00D5FF]Feu solaire[-] égaux à 500 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Feu solaire : taux de perforation [FFAE00]x5[-] et dégâts crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis affectés par Fulminement.[-]",
              "idJeu": 1010303,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Cataclysme doré »",
          "image": "assets/2015501/images/icon_4koa_gawain_ssr_type01_skill_02__bf7e53659012ff3a.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Brillance[-] égaux à 180 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Brillance : chances crit. [FFAE00]x3[-] et dégâts crit. [FFAE00]x3[-].\\nLorsque le héros bénéficie de l'effet [00D5FF]Brillance[-], [00D5FF]annule les postures de l'ennemi[-] et lui applique [00D5FF]Étourdissement[-] pendant [FFAE00]1 tour(s)[-].[-]",
              "idJeu": 1010311,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflige des dégâts de [00D5FF]Brillance[-] égaux à 270 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Brillance : chances crit. [FFAE00]x3[-] et dégâts crit. [FFAE00]x3[-].\\nLorsque le héros bénéficie de l'effet [00D5FF]Brillance[-], [00D5FF]annule les postures de l'ennemi[-] et lui applique [00D5FF]Étourdissement[-] pendant [FFAE00]1 tour(s)[-].[-]",
              "idJeu": 1010312,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts de [00D5FF]Brillance[-] égaux à 450 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Brillance : chances crit. [FFAE00]x3[-] et dégâts crit. [FFAE00]x3[-].\\nLorsque le héros bénéficie de l'effet [00D5FF]Brillance[-], [00D5FF]annule les postures de l'ennemi[-] et lui applique [00D5FF]Étourdissement[-] pendant [FFAE00]1 tour(s)[-].[-]",
              "idJeu": 1010313,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Explosion solaire »",
        "image": "assets/2015501/images/icon_4koa_gawain_ssr_type01_special_01__cc7b64e6fb4f3284.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 450.0,
            "description": "Inflige des dégâts de [00D5FF]Feu solaire[-] égaux à 450 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Feu solaire : taux de perforation [FFAE00]x5[-] et dégâts crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis affectés par Fulminement.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 480.0,
            "description": "Octroie [00D5FF]Lumière du jugement[-] pendant [FFAE00]1 tour(s)[-], puis inflige des dégâts de [00D5FF]Feu solaire[-] égaux à 480 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Feu solaire : taux de perforation [FFAE00]x5[-] et dégâts crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis affectés par Fulminement.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 510.0,
            "description": "Octroie [00D5FF]Lumière du jugement[-] pendant [FFAE00]1 tour(s)[-], puis inflige des dégâts de [00D5FF]Feu solaire[-] égaux à 510 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Feu solaire : taux de perforation [FFAE00]x5[-] et dégâts crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis affectés par Fulminement.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 540.0,
            "description": "Octroie [00D5FF]Lumière du jugement[-] pendant [FFAE00]1 tour(s)[-], puis inflige des dégâts de [00D5FF]Feu solaire[-] égaux à 540 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Feu solaire : taux de perforation [FFAE00]x5[-] et dégâts crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis affectés par Fulminement.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 570.0,
            "description": "Octroie [00D5FF]Lumière du jugement[-] pendant [FFAE00]1 tour(s)[-], puis inflige des dégâts de [00D5FF]Feu solaire[-] égaux à 570 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Feu solaire : taux de perforation [FFAE00]x5[-] et dégâts crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis affectés par Fulminement.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 600.0,
            "description": "Octroie [00D5FF]Lumière du jugement[-] pendant [FFAE00]1 tour(s)[-], puis inflige des dégâts de [00D5FF]Feu solaire[-] égaux à 600 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Feu solaire : taux de perforation [FFAE00]x5[-] et dégâts crit. [FFAE00]x2[-].\\nDégâts infligés [FFAE00]+[-]100 % contre les ennemis affectés par Fulminement.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Guerrière solaire",
        "image": "assets/2015501/images/icon_exclusive_skill_2015501__99a560ba90f02a43.png",
        "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente toutes leurs stats de [FFAE00]4 %[-] et leurs PV max. de [FFAE00]10 %[-].\\n[i][C0C0C0]※Alliés concernés : race inconnue, [Four Knights of the Apocalypse][-][/i]\\n\\nOctroie [00D5FF]Bénédiction du soleil[-] au héros au début du combat.\\n[i][C0C0C0]※Bénédiction du soleil : les alliés concernés accumulent les dégâts infligés ou subis jusqu'à un maximum de [FFAE00]300 000[-], et le héros inflige des dégâts supplémentaires égaux à [FF8000]80 %[-] des dégâts accumulés lorsqu'il utilise une compétence.\\nQuand l'accumulation atteint son maximum, octroie Lumière du jugement au héros pendant [FFAE00]2 tour(s)[-].\\n[FFAE00]40 %[-] de suppression des dégâts subis face aux attaques à cible unique (y compris les contres).[-][/i]\\n\\nImmunise les [00D5FF]alliés concernés[-] aux [00D5FF]effets de réduction de stat[-], et réduit leurs dégâts finaux subis face aux ennemis de [FF8000]50 %[-].\\n\\nLe héros [00D5FF]fulmine[-] une quantité des PV max. des ennemis égale aux dégâts infligés par le héros via l'effet [00D5FF]Brillance[-].\\n[i][C0C0C0]※Fulminement : fulmine jusqu'à [FFAE00]50 %[-] des PV max. au début du combat.\\nQuand l'effet est accumulé au maximum, réduit le taux de récupération de la cible de [FFAE00]70 %[-].\\n(Valeur max : [FFAE00]300 000[-] ; effet prioritaire par rapport à Incinération)[-][/i]\\n\\nLorsqu'un [00D5FF]allié [Four Knights of the Apocalypse][-] survit avec [FFAE00]50 %[-] de PV ou moins, octroie [00D5FF]Lumière du jugement[-] à ce héros pendant [FFAE00]2 tour(s)[-]. [FFAE00](Une fois)[-]\\n[i][C0C0C0]※Lumière du jugement : toutes les stats [FFAE00]+20 %[-], dégâts infligés [FFAE00]+80 %[-].\\nLes PV ne peuvent descendre en dessous de [FFAE00]50 %[-] (ou en dessous de leur valeur au moment de l'application de l'effet, si les PV étaient déjà inférieurs à [FFAE00]50 %[-]).[-][/i]\\n\\nLorsque l'effet [00D5FF]Lumière du jugement[-] est retiré du héros, ou lorsqu'un [00D5FF]allié concerné[-] [00D5FF]utilise un talent[-], octroie [00D5FF]Brillance[-] au héros pendant [FFAE00]3 tour(s)[-], et lorsqu'un ennemi est éliminé, octroie [00D5FF]Lumière du jugement[-] au héros pendant [FFAE00]1 tour(s)[-]. ([FFAE00]1 fois[-] max.)\\n[i][C0C0C0]※Brillance : stats offensives [FFAE00]+50 %[-], chances crit. [FFAE00]+100 %[-].[-][/i]\\n\\nPour [FFAE00]chaque[-] bonus présent en combat, augmente les stats de base des [00D5FF]alliés concernés[-] de [FFAE00]10 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FF8000]4 %[-]. [FFAE00](5 fois max.)[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente toutes leurs stats de [FFAE00]4 %[-] et leurs PV max. de [FFAE00]10 %[-].\\n[i][C0C0C0]※Alliés concernés : race inconnue, [Four Knights of the Apocalypse][-][/i]\\n\\nOctroie [00D5FF]Bénédiction du soleil[-] au héros au début du combat.\\n[i][C0C0C0]※Bénédiction du soleil : les alliés concernés accumulent les dégâts infligés ou subis jusqu'à un maximum de [FFAE00]300 000[-], et le héros inflige des dégâts supplémentaires égaux à [FF8000]80 %[-] des dégâts accumulés lorsqu'il utilise une compétence.\\nQuand l'accumulation atteint son maximum, octroie Lumière du jugement au héros pendant [FFAE00]2 tour(s)[-].\\n[FFAE00]40 %[-] de suppression des dégâts subis face aux attaques à cible unique (y compris les contres).[-][/i]\\n\\nImmunise les [00D5FF]alliés concernés[-] aux [00D5FF]effets de réduction de stat[-], et réduit leurs dégâts finaux subis face aux ennemis de [FF8000]50 %[-].\\n\\nLe héros [00D5FF]fulmine[-] une quantité des PV max. des ennemis égale aux dégâts infligés par le héros via l'effet [00D5FF]Brillance[-].\\n[i][C0C0C0]※Fulminement : fulmine jusqu'à [FFAE00]50 %[-] des PV max. au début du combat.\\nQuand l'effet est accumulé au maximum, réduit le taux de récupération de la cible de [FFAE00]70 %[-].\\n(Valeur max : [FFAE00]300 000[-] ; effet prioritaire par rapport à Incinération)[-][/i]\\n\\nLorsqu'un [00D5FF]allié [Four Knights of the Apocalypse][-] survit avec [FFAE00]50 %[-] de PV ou moins, octroie [00D5FF]Lumière du jugement[-] à ce héros pendant [FFAE00]2 tour(s)[-]. [FFAE00](Une fois)[-]\\n[i][C0C0C0]※Lumière du jugement : toutes les stats [FFAE00]+20 %[-], dégâts infligés [FFAE00]+80 %[-].\\nLes PV ne peuvent descendre en dessous de [FFAE00]50 %[-] (ou en dessous de leur valeur au moment de l'application de l'effet, si les PV étaient déjà inférieurs à [FFAE00]50 %[-]).[-][/i]\\n\\nLorsque l'effet [00D5FF]Lumière du jugement[-] est retiré du héros, ou lorsqu'un [00D5FF]allié concerné[-] [00D5FF]utilise un talent[-], octroie [00D5FF]Brillance[-] au héros pendant [FFAE00]3 tour(s)[-], et lorsqu'un ennemi est éliminé, octroie [00D5FF]Lumière du jugement[-] au héros pendant [FFAE00]1 tour(s)[-]. ([FFAE00]1 fois[-] max.)\\n[i][C0C0C0]※Brillance : stats offensives [FFAE00]+50 %[-], chances crit. [FFAE00]+100 %[-].[-][/i]\\n\\nPour [FFAE00]chaque[-] bonus présent en combat, augmente les stats de base des [00D5FF]alliés concernés[-] de [FFAE00]5 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FF8000]4 %[-]. [FFAE00](5 fois max.)[-]"
          },
          {
            "niveau": 2,
            "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente toutes leurs stats de [FFAE00]4 %[-] et leurs PV max. de [FFAE00]10 %[-].\\n[i][C0C0C0]※Alliés concernés : race inconnue, [Four Knights of the Apocalypse][-][/i]\\n\\nOctroie [00D5FF]Bénédiction du soleil[-] au héros au début du combat.\\n[i][C0C0C0]※Bénédiction du soleil : les alliés concernés accumulent les dégâts infligés ou subis jusqu'à un maximum de [FFAE00]300 000[-], et le héros inflige des dégâts supplémentaires égaux à [FF8000]80 %[-] des dégâts accumulés lorsqu'il utilise une compétence.\\nQuand l'accumulation atteint son maximum, octroie Lumière du jugement au héros pendant [FFAE00]2 tour(s)[-].\\n[FFAE00]40 %[-] de suppression des dégâts subis face aux attaques à cible unique (y compris les contres).[-][/i]\\n\\nImmunise les [00D5FF]alliés concernés[-] aux [00D5FF]effets de réduction de stat[-], et réduit leurs dégâts finaux subis face aux ennemis de [FF8000]50 %[-].\\n\\nLe héros [00D5FF]fulmine[-] une quantité des PV max. des ennemis égale aux dégâts infligés par le héros via l'effet [00D5FF]Brillance[-].\\n[i][C0C0C0]※Fulminement : fulmine jusqu'à [FFAE00]50 %[-] des PV max. au début du combat.\\nQuand l'effet est accumulé au maximum, réduit le taux de récupération de la cible de [FFAE00]70 %[-].\\n(Valeur max : [FFAE00]300 000[-] ; effet prioritaire par rapport à Incinération)[-][/i]\\n\\nLorsqu'un [00D5FF]allié [Four Knights of the Apocalypse][-] survit avec [FFAE00]50 %[-] de PV ou moins, octroie [00D5FF]Lumière du jugement[-] à ce héros pendant [FFAE00]2 tour(s)[-]. [FFAE00](Une fois)[-]\\n[i][C0C0C0]※Lumière du jugement : toutes les stats [FFAE00]+20 %[-], dégâts infligés [FFAE00]+80 %[-].\\nLes PV ne peuvent descendre en dessous de [FFAE00]50 %[-] (ou en dessous de leur valeur au moment de l'application de l'effet, si les PV étaient déjà inférieurs à [FFAE00]50 %[-]).[-][/i]\\n\\nLorsque l'effet [00D5FF]Lumière du jugement[-] est retiré du héros, ou lorsqu'un [00D5FF]allié concerné[-] [00D5FF]utilise un talent[-], octroie [00D5FF]Brillance[-] au héros pendant [FFAE00]3 tour(s)[-], et lorsqu'un ennemi est éliminé, octroie [00D5FF]Lumière du jugement[-] au héros pendant [FFAE00]1 tour(s)[-]. ([FFAE00]1 fois[-] max.)\\n[i][C0C0C0]※Brillance : stats offensives [FFAE00]+50 %[-], chances crit. [FFAE00]+100 %[-].[-][/i]\\n\\nPour [FFAE00]chaque[-] bonus présent en combat, augmente les stats de base des [00D5FF]alliés concernés[-] de [FFAE00]7 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FF8000]4 %[-]. [FFAE00](5 fois max.)[-]"
          },
          {
            "niveau": 3,
            "description": "Pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat, augmente toutes leurs stats de [FFAE00]4 %[-] et leurs PV max. de [FFAE00]10 %[-].\\n[i][C0C0C0]※Alliés concernés : race inconnue, [Four Knights of the Apocalypse][-][/i]\\n\\nOctroie [00D5FF]Bénédiction du soleil[-] au héros au début du combat.\\n[i][C0C0C0]※Bénédiction du soleil : les alliés concernés accumulent les dégâts infligés ou subis jusqu'à un maximum de [FFAE00]300 000[-], et le héros inflige des dégâts supplémentaires égaux à [FF8000]80 %[-] des dégâts accumulés lorsqu'il utilise une compétence.\\nQuand l'accumulation atteint son maximum, octroie Lumière du jugement au héros pendant [FFAE00]2 tour(s)[-].\\n[FFAE00]40 %[-] de suppression des dégâts subis face aux attaques à cible unique (y compris les contres).[-][/i]\\n\\nImmunise les [00D5FF]alliés concernés[-] aux [00D5FF]effets de réduction de stat[-], et réduit leurs dégâts finaux subis face aux ennemis de [FF8000]50 %[-].\\n\\nLe héros [00D5FF]fulmine[-] une quantité des PV max. des ennemis égale aux dégâts infligés par le héros via l'effet [00D5FF]Brillance[-].\\n[i][C0C0C0]※Fulminement : fulmine jusqu'à [FFAE00]50 %[-] des PV max. au début du combat.\\nQuand l'effet est accumulé au maximum, réduit le taux de récupération de la cible de [FFAE00]70 %[-].\\n(Valeur max : [FFAE00]300 000[-] ; effet prioritaire par rapport à Incinération)[-][/i]\\n\\nLorsqu'un [00D5FF]allié [Four Knights of the Apocalypse][-] survit avec [FFAE00]50 %[-] de PV ou moins, octroie [00D5FF]Lumière du jugement[-] à ce héros pendant [FFAE00]2 tour(s)[-]. [FFAE00](Une fois)[-]\\n[i][C0C0C0]※Lumière du jugement : toutes les stats [FFAE00]+20 %[-], dégâts infligés [FFAE00]+80 %[-].\\nLes PV ne peuvent descendre en dessous de [FFAE00]50 %[-] (ou en dessous de leur valeur au moment de l'application de l'effet, si les PV étaient déjà inférieurs à [FFAE00]50 %[-]).[-][/i]\\n\\nLorsque l'effet [00D5FF]Lumière du jugement[-] est retiré du héros, ou lorsqu'un [00D5FF]allié concerné[-] [00D5FF]utilise un talent[-], octroie [00D5FF]Brillance[-] au héros pendant [FFAE00]3 tour(s)[-], et lorsqu'un ennemi est éliminé, octroie [00D5FF]Lumière du jugement[-] au héros pendant [FFAE00]1 tour(s)[-]. ([FFAE00]1 fois[-] max.)\\n[i][C0C0C0]※Brillance : stats offensives [FFAE00]+50 %[-], chances crit. [FFAE00]+100 %[-].[-][/i]\\n\\nPour [FFAE00]chaque[-] bonus présent en combat, augmente les stats de base des [00D5FF]alliés concernés[-] de [FFAE00]10 %[-] et augmente les [00D5FF]dégâts infligés[-] de [FF8000]4 %[-]. [FFAE00](5 fois max.)[-]"
          }
        ]
      },
      "idForme": 330301,
      "portrait": "assets/2015501/images/icon_hero_4koa_gawain_0002_s__d295ac377fc12087.png",
      "portraitVertical": "assets/2015501/images/icon_skin_4koa_gawain_0002_l__0b043823eea1f663.png"
    }
  ],
  "costumes": [
    {
      "id": "3330301",
      "categorie": "Skin",
      "nom": "Maîtresse du soleil",
      "image": "assets/2015501/images/icon_skin_4koa_gawain_0002_l__0b043823eea1f663.png",
      "rarete": ""
    },
    {
      "id": "3330350",
      "categorie": "Skin",
      "nom": "Conquérante des rues",
      "image": "assets/2015501/images/icon_skin_4koa_gawain_0003_l__47440d1289c70ad3.png",
      "rarete": ""
    },
    {
      "id": "3330351",
      "categorie": "Skin",
      "nom": "Avatar du soleil",
      "image": "assets/2015501/images/icon_skin_4koa_gawain_0004_l__b1dcaf571aad611f.png",
      "rarete": ""
    },
    {
      "id": "3330352",
      "categorie": "Skin",
      "nom": "Capitaine outremer",
      "image": "assets/2015501/images/icon_skin_4koa_gawain_0005_l__31552ef0786993eb.png",
      "rarete": ""
    },
    {
      "id": "3330302",
      "categorie": "Skin",
      "nom": "La fille à la magie dorée",
      "image": "assets/2015501/images/icon_skin_4koa_gawain_0001_l__be05adb2750a001e.png",
      "rarete": ""
    },
    {
      "id": "3330353",
      "categorie": "Skin",
      "nom": "Armure de chevalière en argent",
      "image": "assets/2015501/images/icon_skin_4koa_gawain_0501_l__fe614b168d7a6df7.png",
      "rarete": ""
    },
    {
      "id": "882501",
      "categorie": "Weapon",
      "nom": "Épée sacrée Rhitta",
      "image": "assets/2015501/images/icon_weapon_4koa_gawain_0001_l__c37d1db385d870fc.png",
      "rarete": ""
    },
    {
      "id": "882502",
      "categorie": "Weapon",
      "nom": "Lame de conquérante",
      "image": "assets/2015501/images/icon_weapon_4koa_gawain_0003_l__1ffe62f35744e40f.png",
      "rarete": ""
    },
    {
      "id": "882503",
      "categorie": "Weapon",
      "nom": "Volonté de l'avatar",
      "image": "assets/2015501/images/icon_weapon_4koa_gawain_0004_l__7f74db270246692a.png",
      "rarete": ""
    },
    {
      "id": "882504",
      "categorie": "Weapon",
      "nom": "Poing de fer de capitaine",
      "image": "assets/2015501/images/icon_weapon_4koa_gawain_0005_l__e9b4fb3c3939f5b3.png",
      "rarete": ""
    },
    {
      "id": "4011401",
      "categorie": "Head",
      "nom": "Coupe au carré bleu foncé",
      "image": "assets/2015501/images/icon_head_4koa_gawain_0001_l__438573eebb6e3993.png",
      "rarete": ""
    },
    {
      "id": "4011402",
      "categorie": "Head",
      "nom": "Combattante douée",
      "image": "assets/2015501/images/icon_head_4koa_gawain_0003_l__d5c36424cd9d43f0.png",
      "rarete": ""
    },
    {
      "id": "4011403",
      "categorie": "Head",
      "nom": "Couronne de l'avatar",
      "image": "assets/2015501/images/icon_head_4koa_gawain_0004_l__83c6333ea6389386.png",
      "rarete": ""
    },
    {
      "id": "4011404",
      "categorie": "Head",
      "nom": "Confiance du capitaine",
      "image": "assets/2015501/images/icon_head_4koa_gawain_0005_l__c2f071db6dab1281.png",
      "rarete": ""
    }
  ],
  "relique": null
};