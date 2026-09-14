window.fichePreparee={
  "nom": "Merlin & Escanor",
  "designation": "[Serment du crépuscule]",
  "titre": "Merlin & Escanor",
  "idJeu": "1996501",
  "attribut": {
    "nom": "@attribute.2",
    "icone": "assets/commun/icon_filter_attribute_02__ea1406c9830f7566.png",
    "couleur": "#67c778",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.6",
      "@race.3"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_06__96c3bf184ce60ee4.png",
      "assets/commun/icon_filter_kind_03__22a79e39766d0c88.png"
    ]
  },
  "caracteristiques": [
    "@characteristic.6"
  ],
  "portrait": "assets/1996501/images/icon_hero_dual_me_0002_s__edc2dca7b3bf6394.png",
  "rareteParDefaut": "UR",
  "presentation": "[Serment du crépuscule] Merlin et Escanor possède une compétence qui inflige des dégâts supplémentaires proportionnels aux dégâts finaux infligés.",
  "commandement": null,
  "talent": {
    "nom": "« Embrasement fulgurant »",
    "image": "assets/1996501/images/icon_ability_1996501__52f48ff38aee01b7.png",
    "description": "[00D5FF]Retire tous les bonus[-] présents en combat, octroie [00D5FF]Flammes de l'oblitération[-] pendant [FFAE00]2 tours[-] ([FFAE00]une fois[-] max.), applique [00D5FF]Flammes de l'annihilation[-] sur tous les ennemis pendant [FFAE00]1 tour[-], puis utilise la compétence [00D5FF]Tempête foudroyante[-].\\n[00D5FF](Ignore les effets Neutralisation de compétence et Blocage.)[-]\\n\\n[i][C0C0C0]※Flammes de l'annihilation : dégâts subis [FFAE00]+30 %[-]. Réduit l'efficacité des soins.\\n※Tempête foudroyante : inflige des dégâts égaux à [FFAE00]100 %[-] de l'attaque. Dégâts infligés [FFAE00]+10 %[-] pour [FFAE00]chaque[-] bonus retiré.\\n([FFAE00]10 bonus[-] max.)\\n(Temps de rechargement : [FFAE00]3 tours[-])[/i][-]",
    "niveauxUltime": [
      {
        "niveau": 1,
        "description": "[00D5FF]Retire tous les bonus[-] présents en combat, octroie [00D5FF]Flammes de l'oblitération[-] pendant [FFAE00]2 tours[-] ([FFAE00]une fois[-] max.), applique [00D5FF]Flammes de l'annihilation[-] sur tous les ennemis pendant [FFAE00]1 tour[-], puis utilise la compétence [00D5FF]Tempête foudroyante[-].\\n[00D5FF](Ignore les effets Neutralisation de compétence et Blocage.)[-]\\n\\n[i][C0C0C0]※Flammes de l'annihilation : dégâts subis [FFAE00]+30 %[-]. Réduit l'efficacité des soins.\\n※Tempête foudroyante : inflige des dégâts égaux à [FFAE00]100 %[-] de l'attaque. Dégâts infligés [FFAE00]+10 %[-] pour [FFAE00]chaque[-] bonus retiré.\\n([FFAE00]10 bonus[-] max.)\\n(Temps de rechargement : [FFAE00]3 tours[-])[/i][-]"
      }
    ],
    "cadre": "assets/passive-frames/ability_frame_14.png",
    "idJeu": 540007
  },
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1996501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1996501/images/hero_illust_dual_me_1996501__a9e545323858c1c7.png",
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
            "valeur": 550.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 9500.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5925
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
            "valeur": 90.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 95.0,
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
          "nom": "« Javelot cristallin »",
          "image": "assets/1996501/images/icon_dual_me_ssr_type01_skill_01__0b2dcf2754521c9f.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflige des dégâts d'[00D5FF]Explosion de glace[-] égaux à 200 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Explosion de glace : taux de perforation [FFAE00]x5[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui adoptent une posture.\\nDégâts supplémentaires égaux à [FFAE00]1 000 %[-] de l'attaque initiale.\\nDégâts supplémentaires égaux à [FFAE00]70 %[-] des dégâts finaux.\\n(Dégâts aléatoires à la mort)[-]",
              "idJeu": 1007601,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts d'[00D5FF]Explosion de glace[-] égaux à 300 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Explosion de glace : taux de perforation [FFAE00]x5[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui adoptent une posture.\\nDégâts supplémentaires égaux à [FFAE00]1 000 %[-] de l'attaque initiale.\\nDégâts supplémentaires égaux à [FFAE00]70 %[-] des dégâts finaux.\\n(Dégâts aléatoires à la mort)[-]",
              "idJeu": 1007602,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflige des dégâts d'[00D5FF]Explosion de glace[-] égaux à 500 % de l'attaque à @target.oneEnemy.\\n\\n[00D5FF]※Explosion de glace : taux de perforation [FFAE00]x5[-].\\nDégâts [FFAE00]x2[-] aux ennemis qui adoptent une posture.\\nDégâts supplémentaires égaux à [FFAE00]1 000 %[-] de l'attaque initiale.\\nDégâts supplémentaires égaux à [FFAE00]70 %[-] des dégâts finaux.\\n(Dégâts aléatoires à la mort)[-]",
              "idJeu": 1007603,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Combustion finale »",
          "image": "assets/1996501/images/icon_dual_me_ssr_type01_skill_02__4a16896276eb2738.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflige des dégâts de [00D5FF]Chaleur rayonnante[-] égaux à 180 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Chaleur rayonnante : augmente les dégâts infligés à hauteur de 80 % du taux de perforation du duo de héros.\\nDégâts supplémentaires égaux à [FFAE00]25 %[-] des PV initiaux.[-]",
              "idJeu": 1007611,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflige des dégâts de [00D5FF]Chaleur rayonnante[-] égaux à 270 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Chaleur rayonnante : augmente les dégâts infligés à hauteur de 80 % du taux de perforation du duo de héros.\\nDégâts supplémentaires égaux à [FFAE00]25 %[-] des PV initiaux.[-]",
              "idJeu": 1007612,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts de [00D5FF]Chaleur rayonnante[-] égaux à 450 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Chaleur rayonnante : augmente les dégâts infligés à hauteur de 80 % du taux de perforation du duo de héros.\\nDégâts supplémentaires égaux à [FFAE00]25 %[-] des PV initiaux.[-]",
              "idJeu": 1007613,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "Attaque combinée « Braise éternelle »",
        "image": "assets/1996501/images/icon_dual_me_ssr_type01_special_01__226428d25908612c.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 500.0,
            "description": "Octroie [00D5FF]Espace infini[-] à tous les alliés pendant [FFAE00]1 tour[-], puis inflige des dégâts de [00D5FF]Chaleur rayonnante[-] égaux à 500 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Chaleur rayonnante : augmente les dégâts infligés à hauteur de 80 % du taux de perforation du duo de héros.\\nDégâts supplémentaires égaux à [FFAE00]25 %[-] des PV initiaux.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 550.0,
            "description": "Octroie [00D5FF]Espace infini[-] à tous les alliés pendant [FFAE00]1 tour[-], octroie [00D5FF]Flammes de l'oblitération[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Chaleur rayonnante[-] égaux à 550 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Chaleur rayonnante : augmente les dégâts infligés à hauteur de 80 % du taux de perforation du duo de héros.\\nDégâts supplémentaires égaux à [FFAE00]25 %[-] des PV initiaux.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 600.0,
            "description": "Octroie [00D5FF]Espace infini[-] à tous les alliés pendant [FFAE00]1 tour[-], octroie [00D5FF]Flammes de l'oblitération[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Chaleur rayonnante[-] égaux à 600 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Chaleur rayonnante : augmente les dégâts infligés à hauteur de 80 % du taux de perforation du duo de héros.\\nDégâts supplémentaires égaux à [FFAE00]25 %[-] des PV initiaux.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 650.0,
            "description": "Octroie [00D5FF]Espace infini[-] à tous les alliés pendant [FFAE00]1 tour[-], octroie [00D5FF]Flammes de l'oblitération[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Chaleur rayonnante[-] égaux à 650 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Chaleur rayonnante : augmente les dégâts infligés à hauteur de 80 % du taux de perforation du duo de héros.\\nDégâts supplémentaires égaux à [FFAE00]25 %[-] des PV initiaux.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 700.0,
            "description": "Octroie [00D5FF]Espace infini[-] à tous les alliés pendant [FFAE00]1 tour[-], octroie [00D5FF]Flammes de l'oblitération[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Chaleur rayonnante[-] égaux à 700 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Chaleur rayonnante : augmente les dégâts infligés à hauteur de 80 % du taux de perforation du duo de héros.\\nDégâts supplémentaires égaux à [FFAE00]25 %[-] des PV initiaux.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 750.0,
            "description": "Octroie [00D5FF]Espace infini[-] à tous les alliés pendant [FFAE00]1 tour[-], octroie [00D5FF]Flammes de l'oblitération[-] pendant [FFAE00]2 tours[-], puis inflige des dégâts de [00D5FF]Chaleur rayonnante[-] égaux à 750 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Chaleur rayonnante : augmente les dégâts infligés à hauteur de 80 % du taux de perforation du duo de héros.\\nDégâts supplémentaires égaux à [FFAE00]25 %[-] des PV initiaux.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Amour immortel",
        "image": "assets/1996501/images/icon_exclusive_skill_1996501__681d93737e771a86.png",
        "description": "Augmente toutes les stats du duo de héros de [FFAE00]5 %[-] pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat. Lorsque les PV du duo de héros sont supérieurs ou égaux à [FFAE00]50 %[-], augmente ses [00D5FF]dégâts infligés[-] de [FF8000]80 %[-] et réduit ses [00D5FF]dégâts subis[-] de [FFAE00]50 %[-].\\n[i][C0C0C0]※Alliés concernés : humains, race inconnue, Les [Seven Deadly Sins][/i][-][/i][-]\\n\\nAu début du combat, et lorsque le duo de héros utilise des compétences [FFAE00]2 fois[-] pendant le tour allié, octroie [00D5FF]Espace infini[-] aux [00D5FF]alliés Les [Seven Deadly Sins][-] pendant [FFAE00]1 tour[-]. ([FFAE00]Une fois[-] par condition)\\n[i][C0C0C0]※Espace infini : octroie une barrière à hauteur de [FF8000]40 %[-] des PV initiaux du héros.\\nLe héros n'encaisse que les dégâts des stats de base.[/i][-][/i][-]\\n\\nLorsque l'effet [00D5FF]Espace infini[-] est retiré du duo de héros, lui [00D5FF]octroie [FFAE00]60 %[-] de suppression des dégâts[-] pendant [FFAE00]1 tour[-].\\n\\nLorsque le duo de héros utilise une [00D5FF]attaque à cible unique[-] pour [00D5FF]vaincre[-] un ennemi, inflige [FFAE00]50 %[-] des dégâts finaux infligés à tous les ennemis.\\n\\nLorsque le duo de héros [00D5FF]élimine un ennemi[-] ou lorsqu'un [00D5FF]allié concerné meurt[-] d'une compétence pendant le tour ennemi, octroie [00D5FF]Flammes de l'oblitération[-] au duo de héros pendant [FFAE00]2 tours[-].[FF8000](4 fois max.)[-]\\n[i][C0C0C0]※Flammes de l'oblitération : stats offensives [FFAE00]+50 %[-], coefficients des compétences [FFAE00]+80 %[-].\\nLes PV ne peuvent pas descendre en dessous de [FFAE00]50 %[-] (lorsque l'effet est octroyé alors que les PV sont inférieurs à [FFAE00]50 %[-], les PV ne peuvent pas descendre en dessous de cette valeur).\\nL'effet est retiré après avoir subi [FFAE00]2 fois[-] des dégâts avec les compétences d'un même ennemi.[/i][-][/i][-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente toutes les stats du duo de héros de [FFAE00]5 %[-] pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat. Lorsque les PV du duo de héros sont supérieurs ou égaux à [FFAE00]50 %[-], augmente ses [00D5FF]dégâts infligés[-] de [FF8000]60 %[-] et réduit ses [00D5FF]dégâts subis[-] de [FFAE00]50 %[-].\\n[i][C0C0C0]※Alliés concernés : humains, race inconnue, Les [Seven Deadly Sins][/i][-][/i][-]\\n\\nAu début du combat, et lorsque le duo de héros utilise des compétences [FFAE00]2 fois[-] pendant le tour allié, octroie [00D5FF]Espace infini[-] aux [00D5FF]alliés Les [Seven Deadly Sins][-] pendant [FFAE00]1 tour[-]. ([FFAE00]Une fois[-] par condition)\\n[i][C0C0C0]※Espace infini : octroie une barrière à hauteur de [FF8000]30 %[-] des PV initiaux du héros.\\nLe héros n'encaisse que les dégâts des stats de base.[/i][-][/i][-]\\n\\nLorsque l'effet [00D5FF]Espace infini[-] est retiré du duo de héros, lui [00D5FF]octroie [FFAE00]60 %[-] de suppression des dégâts[-] pendant [FFAE00]1 tour[-].\\n\\nLorsque le duo de héros utilise une [00D5FF]attaque à cible unique[-] pour [00D5FF]vaincre[-] un ennemi, inflige [FFAE00]50 %[-] des dégâts finaux infligés à tous les ennemis.\\n\\nLorsque le duo de héros [00D5FF]élimine un ennemi[-] ou lorsqu'un [00D5FF]allié concerné meurt[-] d'une compétence pendant le tour ennemi, octroie [00D5FF]Flammes de l'oblitération[-] au duo de héros pendant [FFAE00]2 tours[-].[FF8000](1 fois max.)[-]\\n[i][C0C0C0]※Flammes de l'oblitération : stats offensives [FFAE00]+50 %[-], coefficients des compétences [FFAE00]+80 %[-].\\nLes PV ne peuvent pas descendre en dessous de [FFAE00]50 %[-] (lorsque l'effet est octroyé alors que les PV sont inférieurs à [FFAE00]50 %[-], les PV ne peuvent pas descendre en dessous de cette valeur).\\nL'effet est retiré après avoir subi [FFAE00]2 fois[-] des dégâts avec les compétences d'un même ennemi.[/i][-][/i][-]"
          },
          {
            "niveau": 2,
            "description": "Augmente toutes les stats du duo de héros de [FFAE00]5 %[-] pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat. Lorsque les PV du duo de héros sont supérieurs ou égaux à [FFAE00]50 %[-], augmente ses [00D5FF]dégâts infligés[-] de [FF8000]70 %[-] et réduit ses [00D5FF]dégâts subis[-] de [FFAE00]50 %[-].\\n[i][C0C0C0]※Alliés concernés : humains, race inconnue, Les [Seven Deadly Sins][/i][-][/i][-]\\n\\nAu début du combat, et lorsque le duo de héros utilise des compétences [FFAE00]2 fois[-] pendant le tour allié, octroie [00D5FF]Espace infini[-] aux [00D5FF]alliés Les [Seven Deadly Sins][-] pendant [FFAE00]1 tour[-]. ([FFAE00]Une fois[-] par condition)\\n[i][C0C0C0]※Espace infini : octroie une barrière à hauteur de [FF8000]30 %[-] des PV initiaux du héros.\\nLe héros n'encaisse que les dégâts des stats de base.[/i][-][/i][-]\\n\\nLorsque l'effet [00D5FF]Espace infini[-] est retiré du duo de héros, lui [00D5FF]octroie [FFAE00]60 %[-] de suppression des dégâts[-] pendant [FFAE00]1 tour[-].\\n\\nLorsque le duo de héros utilise une [00D5FF]attaque à cible unique[-] pour [00D5FF]vaincre[-] un ennemi, inflige [FFAE00]50 %[-] des dégâts finaux infligés à tous les ennemis.\\n\\nLorsque le duo de héros [00D5FF]élimine un ennemi[-] ou lorsqu'un [00D5FF]allié concerné meurt[-] d'une compétence pendant le tour ennemi, octroie [00D5FF]Flammes de l'oblitération[-] au duo de héros pendant [FFAE00]2 tours[-].[FF8000](2 fois max.)[-]\\n[i][C0C0C0]※Flammes de l'oblitération : stats offensives [FFAE00]+50 %[-], coefficients des compétences [FFAE00]+80 %[-].\\nLes PV ne peuvent pas descendre en dessous de [FFAE00]50 %[-] (lorsque l'effet est octroyé alors que les PV sont inférieurs à [FFAE00]50 %[-], les PV ne peuvent pas descendre en dessous de cette valeur).\\nL'effet est retiré après avoir subi [FFAE00]2 fois[-] des dégâts avec les compétences d'un même ennemi.[/i][-][/i][-]"
          },
          {
            "niveau": 3,
            "description": "Augmente toutes les stats du duo de héros de [FFAE00]5 %[-] pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat. Lorsque les PV du duo de héros sont supérieurs ou égaux à [FFAE00]50 %[-], augmente ses [00D5FF]dégâts infligés[-] de [FF8000]70 %[-] et réduit ses [00D5FF]dégâts subis[-] de [FFAE00]50 %[-].\\n[i][C0C0C0]※Alliés concernés : humains, race inconnue, Les [Seven Deadly Sins][/i][-][/i][-]\\n\\nAu début du combat, et lorsque le duo de héros utilise des compétences [FFAE00]2 fois[-] pendant le tour allié, octroie [00D5FF]Espace infini[-] aux [00D5FF]alliés Les [Seven Deadly Sins][-] pendant [FFAE00]1 tour[-]. ([FFAE00]Une fois[-] par condition)\\n[i][C0C0C0]※Espace infini : octroie une barrière à hauteur de [FF8000]40 %[-] des PV initiaux du héros.\\nLe héros n'encaisse que les dégâts des stats de base.[/i][-][/i][-]\\n\\nLorsque l'effet [00D5FF]Espace infini[-] est retiré du duo de héros, lui [00D5FF]octroie [FFAE00]60 %[-] de suppression des dégâts[-] pendant [FFAE00]1 tour[-].\\n\\nLorsque le duo de héros utilise une [00D5FF]attaque à cible unique[-] pour [00D5FF]vaincre[-] un ennemi, inflige [FFAE00]50 %[-] des dégâts finaux infligés à tous les ennemis.\\n\\nLorsque le duo de héros [00D5FF]élimine un ennemi[-] ou lorsqu'un [00D5FF]allié concerné meurt[-] d'une compétence pendant le tour ennemi, octroie [00D5FF]Flammes de l'oblitération[-] au duo de héros pendant [FFAE00]2 tours[-].[FF8000](2 fois max.)[-]\\n[i][C0C0C0]※Flammes de l'oblitération : stats offensives [FFAE00]+50 %[-], coefficients des compétences [FFAE00]+80 %[-].\\nLes PV ne peuvent pas descendre en dessous de [FFAE00]50 %[-] (lorsque l'effet est octroyé alors que les PV sont inférieurs à [FFAE00]50 %[-], les PV ne peuvent pas descendre en dessous de cette valeur).\\nL'effet est retiré après avoir subi [FFAE00]2 fois[-] des dégâts avec les compétences d'un même ennemi.[/i][-][/i][-]"
          },
          {
            "niveau": 4,
            "description": "Augmente toutes les stats du duo de héros de [FFAE00]5 %[-] pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat. Lorsque les PV du duo de héros sont supérieurs ou égaux à [FFAE00]50 %[-], augmente ses [00D5FF]dégâts infligés[-] de [FF8000]70 %[-] et réduit ses [00D5FF]dégâts subis[-] de [FFAE00]50 %[-].\\n[i][C0C0C0]※Alliés concernés : humains, race inconnue, Les [Seven Deadly Sins][/i][-][/i][-]\\n\\nAu début du combat, et lorsque le duo de héros utilise des compétences [FFAE00]2 fois[-] pendant le tour allié, octroie [00D5FF]Espace infini[-] aux [00D5FF]alliés Les [Seven Deadly Sins][-] pendant [FFAE00]1 tour[-]. ([FFAE00]Une fois[-] par condition)\\n[i][C0C0C0]※Espace infini : octroie une barrière à hauteur de [FF8000]40 %[-] des PV initiaux du héros.\\nLe héros n'encaisse que les dégâts des stats de base.[/i][-][/i][-]\\n\\nLorsque l'effet [00D5FF]Espace infini[-] est retiré du duo de héros, lui [00D5FF]octroie [FFAE00]60 %[-] de suppression des dégâts[-] pendant [FFAE00]1 tour[-].\\n\\nLorsque le duo de héros utilise une [00D5FF]attaque à cible unique[-] pour [00D5FF]vaincre[-] un ennemi, inflige [FFAE00]50 %[-] des dégâts finaux infligés à tous les ennemis.\\n\\nLorsque le duo de héros [00D5FF]élimine un ennemi[-] ou lorsqu'un [00D5FF]allié concerné meurt[-] d'une compétence pendant le tour ennemi, octroie [00D5FF]Flammes de l'oblitération[-] au duo de héros pendant [FFAE00]2 tours[-].[FF8000](3 fois max.)[-]\\n[i][C0C0C0]※Flammes de l'oblitération : stats offensives [FFAE00]+50 %[-], coefficients des compétences [FFAE00]+80 %[-].\\nLes PV ne peuvent pas descendre en dessous de [FFAE00]50 %[-] (lorsque l'effet est octroyé alors que les PV sont inférieurs à [FFAE00]50 %[-], les PV ne peuvent pas descendre en dessous de cette valeur).\\nL'effet est retiré après avoir subi [FFAE00]2 fois[-] des dégâts avec les compétences d'un même ennemi.[/i][-][/i][-]"
          },
          {
            "niveau": 5,
            "description": "Augmente toutes les stats du duo de héros de [FFAE00]5 %[-] pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat. Lorsque les PV du duo de héros sont supérieurs ou égaux à [FFAE00]50 %[-], augmente ses [00D5FF]dégâts infligés[-] de [FF8000]80 %[-] et réduit ses [00D5FF]dégâts subis[-] de [FFAE00]50 %[-].\\n[i][C0C0C0]※Alliés concernés : humains, race inconnue, Les [Seven Deadly Sins][/i][-][/i][-]\\n\\nAu début du combat, et lorsque le duo de héros utilise des compétences [FFAE00]2 fois[-] pendant le tour allié, octroie [00D5FF]Espace infini[-] aux [00D5FF]alliés Les [Seven Deadly Sins][-] pendant [FFAE00]1 tour[-]. ([FFAE00]Une fois[-] par condition)\\n[i][C0C0C0]※Espace infini : octroie une barrière à hauteur de [FF8000]40 %[-] des PV initiaux du héros.\\nLe héros n'encaisse que les dégâts des stats de base.[/i][-][/i][-]\\n\\nLorsque l'effet [00D5FF]Espace infini[-] est retiré du duo de héros, lui [00D5FF]octroie [FFAE00]60 %[-] de suppression des dégâts[-] pendant [FFAE00]1 tour[-].\\n\\nLorsque le duo de héros utilise une [00D5FF]attaque à cible unique[-] pour [00D5FF]vaincre[-] un ennemi, inflige [FFAE00]50 %[-] des dégâts finaux infligés à tous les ennemis.\\n\\nLorsque le duo de héros [00D5FF]élimine un ennemi[-] ou lorsqu'un [00D5FF]allié concerné meurt[-] d'une compétence pendant le tour ennemi, octroie [00D5FF]Flammes de l'oblitération[-] au duo de héros pendant [FFAE00]2 tours[-].[FF8000](3 fois max.)[-]\\n[i][C0C0C0]※Flammes de l'oblitération : stats offensives [FFAE00]+50 %[-], coefficients des compétences [FFAE00]+80 %[-].\\nLes PV ne peuvent pas descendre en dessous de [FFAE00]50 %[-] (lorsque l'effet est octroyé alors que les PV sont inférieurs à [FFAE00]50 %[-], les PV ne peuvent pas descendre en dessous de cette valeur).\\nL'effet est retiré après avoir subi [FFAE00]2 fois[-] des dégâts avec les compétences d'un même ennemi.[/i][-][/i][-]"
          },
          {
            "niveau": 6,
            "description": "Augmente toutes les stats du duo de héros de [FFAE00]5 %[-] pour [FFAE00]chaque[-] [00D5FF]allié concerné[-] en combat. Lorsque les PV du duo de héros sont supérieurs ou égaux à [FFAE00]50 %[-], augmente ses [00D5FF]dégâts infligés[-] de [FF8000]80 %[-] et réduit ses [00D5FF]dégâts subis[-] de [FFAE00]50 %[-].\\n[i][C0C0C0]※Alliés concernés : humains, race inconnue, Les [Seven Deadly Sins][/i][-][/i][-]\\n\\nAu début du combat, et lorsque le duo de héros utilise des compétences [FFAE00]2 fois[-] pendant le tour allié, octroie [00D5FF]Espace infini[-] aux [00D5FF]alliés Les [Seven Deadly Sins][-] pendant [FFAE00]1 tour[-]. ([FFAE00]Une fois[-] par condition)\\n[i][C0C0C0]※Espace infini : octroie une barrière à hauteur de [FF8000]40 %[-] des PV initiaux du héros.\\nLe héros n'encaisse que les dégâts des stats de base.[/i][-][/i][-]\\n\\nLorsque l'effet [00D5FF]Espace infini[-] est retiré du duo de héros, lui [00D5FF]octroie [FFAE00]60 %[-] de suppression des dégâts[-] pendant [FFAE00]1 tour[-].\\n\\nLorsque le duo de héros utilise une [00D5FF]attaque à cible unique[-] pour [00D5FF]vaincre[-] un ennemi, inflige [FFAE00]50 %[-] des dégâts finaux infligés à tous les ennemis.\\n\\nLorsque le duo de héros [00D5FF]élimine un ennemi[-] ou lorsqu'un [00D5FF]allié concerné meurt[-] d'une compétence pendant le tour ennemi, octroie [00D5FF]Flammes de l'oblitération[-] au duo de héros pendant [FFAE00]2 tours[-].[FF8000](4 fois max.)[-]\\n[i][C0C0C0]※Flammes de l'oblitération : stats offensives [FFAE00]+50 %[-], coefficients des compétences [FFAE00]+80 %[-].\\nLes PV ne peuvent pas descendre en dessous de [FFAE00]50 %[-] (lorsque l'effet est octroyé alors que les PV sont inférieurs à [FFAE00]50 %[-], les PV ne peuvent pas descendre en dessous de cette valeur).\\nL'effet est retiré après avoir subi [FFAE00]2 fois[-] des dégâts avec les compétences d'un même ennemi.[/i][-][/i][-]"
          }
        ]
      },
      "idForme": 328501,
      "portrait": "assets/1996501/images/icon_hero_dual_me_0002_s__edc2dca7b3bf6394.png",
      "portraitVertical": "assets/1996501/images/icon_skin_dual_me_0002_l__a711b2dcf734ec6e.png"
    }
  ],
  "costumes": [
    {
      "id": "3328501",
      "categorie": "Skin",
      "nom": "Soleil infini",
      "image": "assets/1996501/images/icon_skin_dual_me_0002_l__a711b2dcf734ec6e.png",
      "rarete": ""
    },
    {
      "id": "3328554",
      "categorie": "Skin",
      "nom": "Serveuse et barman",
      "image": "assets/1996501/images/icon_skin_dual_me_0008_l__78c95cd5ab2526b2.png",
      "rarete": ""
    },
    {
      "id": "3328550",
      "categorie": "Skin",
      "nom": "Pacte démoniaque",
      "image": "assets/1996501/images/icon_skin_dual_me_0003_l__aef723025e7531b8.png",
      "rarete": ""
    },
    {
      "id": "3328551",
      "categorie": "Skin",
      "nom": "Exorciste mystique",
      "image": "assets/1996501/images/icon_skin_dual_me_0004_l__c84bdaab5f31a17b.png",
      "rarete": ""
    },
    {
      "id": "3328552",
      "categorie": "Skin",
      "nom": "Cirque magique du soleil",
      "image": "assets/1996501/images/icon_skin_dual_me_0005_l__5f747d55e02681b1.png",
      "rarete": ""
    },
    {
      "id": "3328553",
      "categorie": "Skin",
      "nom": "Mode douce-amère",
      "image": "assets/1996501/images/icon_skin_dual_me_0006_l__b4a52efe43e3b77e.png",
      "rarete": ""
    },
    {
      "id": "3328555",
      "categorie": "Skin",
      "nom": "Histoire des étoiles",
      "image": "assets/1996501/images/icon_skin_dual_me_0007_l__dfe3f208883a493e.png",
      "rarete": ""
    },
    {
      "id": "3328502",
      "categorie": "Skin",
      "nom": "Flamme ultime",
      "image": "assets/1996501/images/icon_skin_dual_me_0001_l__35b04d4573fd3ffa.png",
      "rarete": ""
    },
    {
      "id": "880701",
      "categorie": "Weapon",
      "nom": "L'Étoile du Matin Aldan",
      "image": "assets/1996501/images/icon_weapon_dual_me_0001_l__9255d1f41981a5f2.png",
      "rarete": ""
    },
    {
      "id": "880702",
      "categorie": "Weapon",
      "nom": "Cœur démoniaque",
      "image": "assets/1996501/images/icon_weapon_dual_me_0003_l__89c0a633f2b0c407.png",
      "rarete": ""
    },
    {
      "id": "880703",
      "categorie": "Weapon",
      "nom": "Perle de renard",
      "image": "assets/1996501/images/icon_weapon_dual_me_0004_l__75ed5c83e7f80649.png",
      "rarete": ""
    },
    {
      "id": "880704",
      "categorie": "Weapon",
      "nom": "Chapeau de maître de piste",
      "image": "assets/1996501/images/icon_weapon_dual_me_0005_l__268337f5aea5bcfd.png",
      "rarete": ""
    },
    {
      "id": "880705",
      "categorie": "Weapon",
      "nom": "Cœur doux-amer",
      "image": "assets/1996501/images/icon_weapon_dual_me_0006_l__ee37e17c228d601b.png",
      "rarete": ""
    },
    {
      "id": "880706",
      "categorie": "Weapon",
      "nom": "Pouvoir du Bélier",
      "image": "assets/1996501/images/icon_weapon_dual_me_0007_l__25858f37dd70fdca.png",
      "rarete": ""
    },
    {
      "id": "4009601",
      "categorie": "Head",
      "nom": "Dernière trace",
      "image": "assets/1996501/images/icon_head_dual_me_0001_l__a145fa0bea278d32.png",
      "rarete": ""
    },
    {
      "id": "4009607",
      "categorie": "Head",
      "nom": "Bandeau des meilleurs amis",
      "image": "assets/1996501/images/icon_head_dual_me_0009_l__a919ce39f37a0298.png",
      "rarete": ""
    },
    {
      "id": "4009608",
      "categorie": "Head",
      "nom": "Halo d'emblème",
      "image": "assets/1996501/images/icon_head_dual_me_0010_l__2987f65c56323f1a.png",
      "rarete": ""
    },
    {
      "id": "4009602",
      "categorie": "Head",
      "nom": "Âme démoniaque",
      "image": "assets/1996501/images/icon_head_dual_me_0003_l__930d2ced43ef75d7.png",
      "rarete": ""
    },
    {
      "id": "4009603",
      "categorie": "Head",
      "nom": "Devineresse et maître zen",
      "image": "assets/1996501/images/icon_head_dual_me_0004_l__030b44a7cf51c1c0.png",
      "rarete": ""
    },
    {
      "id": "4009604",
      "categorie": "Head",
      "nom": "La belle et la bête",
      "image": "assets/1996501/images/icon_head_dual_me_0005_l__74fd0f6525c15897.png",
      "rarete": ""
    },
    {
      "id": "4009606",
      "categorie": "Head",
      "nom": "Regard doux-amer",
      "image": "assets/1996501/images/icon_head_dual_me_0006_l__2ac1891a5b202025.png",
      "rarete": ""
    },
    {
      "id": "4009609",
      "categorie": "Head",
      "nom": "Mythe du Bélier",
      "image": "assets/1996501/images/icon_head_dual_me_0007_l__7b3da5ab5c812ca3.png",
      "rarete": ""
    },
    {
      "id": "4009605",
      "categorie": "Head",
      "nom": "Sanglier et Lion",
      "image": "assets/1996501/images/icon_head_dual_me_0501_l__0f7b6424d8cbd74e.png",
      "rarete": ""
    }
  ],
  "relique": null
};