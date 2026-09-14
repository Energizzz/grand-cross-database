window.fichePreparee={
  "nom": "Mai Shiranui",
  "designation": "[KOF '98]",
  "titre": "Mai Shiranui",
  "idJeu": "1872501",
  "attribut": {
    "nom": "@attribute.3",
    "icone": "assets/commun/icon_filter_attribute_03__4980bb489ce93431.png",
    "couleur": "#50b8ea",
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
    "@characteristic.3"
  ],
  "portrait": "assets/1872501/images/icon_hero_kof_mai_0002_s__94e4558eec80c7b8.png",
  "rareteParDefaut": "UR",
  "presentation": "[KOF '98] Mai Shiranui utilise une compétence d'attaque avec l'effet Amplification, ce qui augmente les dégâts infligés selon le nombre de bonus dont elle bénéficie.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1872501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1872501/images/hero_illust_kof_mai_1872501__a3f9b37dd51c16ca.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 590.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 300.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6600.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3312
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
            "valeur": 150.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 50.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 10.0,
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
            "valeur": 105.0,
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
          "nom": "« Sui Chou no Mai »",
          "image": "assets/1872501/images/icon_kof_mai_ssr_type01_skill_01__0b1aca1d96bc5958.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 120.0,
              "description": "Inflige des dégâts égaux à 120 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 1 [FFAE00] orbe(s)[-].",
              "idJeu": 194001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts égaux à 300 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 1 [FFAE00] orbe(s)[-].",
              "idJeu": 194002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts égaux à 450 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 3 [FFAE00] orbe(s)[-].",
              "idJeu": 194003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Ryuuembu »",
          "image": "assets/1872501/images/icon_kof_mai_ssr_type01_skill_02__3bfac74dc45ec7ff.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 100.0,
              "description": "Inflige des dégâts d'[00D5FF]Amplification[-] égaux à 100 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Amplification : dégâts infligés +30 % par bonus actif sur soi.[-]",
              "idJeu": 194011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 150.0,
              "description": "Inflige des dégâts d'[00D5FF]Amplification[-] égaux à 150 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Amplification : dégâts infligés +30 % par bonus actif sur soi.[-]",
              "idJeu": 194012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 250.0,
              "description": "Inflige des dégâts d'[00D5FF]Amplification[-] égaux à 250 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Amplification : dégâts infligés +30 % par bonus actif sur soi.[-]",
              "idJeu": 194013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Chou Hissatsu Shinobi-bachi »",
        "image": "assets/1872501/images/icon_kof_mai_ssr_type01_special_01__f9375cd8a747b77c.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 630.0,
            "description": "Inflige des dégâts égaux à 630 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 693.0,
            "description": "Inflige des dégâts égaux à 693 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 756.0,
            "description": "Inflige des dégâts égaux à 756 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 819.0,
            "description": "Inflige des dégâts égaux à 819 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 882.0,
            "description": "Inflige des dégâts égaux à 882 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 945.0,
            "description": "Inflige des dégâts égaux à 945 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Beauté mature",
        "image": "assets/1872501/images/icon_exclusive_skill_1872501__eb3c547e7623be06.png",
        "description": "Augmente les stats de base du héros de [FFAE00]15 % %[-] pendant [FFAE00]2 tours[-] si le rang de ses compétences augmente.",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les stats de base du héros de [FFAE00]15 % %[-] pendant [FFAE00]2 tours[-] si le rang de ses compétences augmente."
          }
        ]
      },
      "idForme": 364001,
      "portrait": "assets/1872501/images/icon_hero_kof_mai_0006_s__40237c110a229ead.png",
      "portraitVertical": "assets/1872501/images/icon_skin_kof_mai_0006_l__72e54e268c0cfdee.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1872501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1872501/images/hero_illust_kof_mai_1872501__a3f9b37dd51c16ca.png",
      "legendeImage": "Illustration du personnage",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 770.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 380.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8600.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 3956
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
            "valeur": 150.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 50.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 10.0,
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
            "valeur": 105.0,
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
          "nom": "« Sui Chou no Mai »",
          "image": "assets/1872501/images/icon_kof_mai_ssr_type01_skill_01__0b1aca1d96bc5958.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 120.0,
              "description": "Inflige des dégâts égaux à 120 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 1 [FFAE00] orbe(s)[-].",
              "idJeu": 194001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflige des dégâts égaux à 300 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 1 [FFAE00] orbe(s)[-].",
              "idJeu": 194002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflige des dégâts égaux à 450 % de l'attaque à @target.oneEnemy et [00D5FF]réduit[-] la jauge de coup ultime de 3 [FFAE00] orbe(s)[-].",
              "idJeu": 194003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "« Ryuuembu »",
          "image": "assets/1872501/images/icon_kof_mai_ssr_type01_skill_02__3bfac74dc45ec7ff.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 100.0,
              "description": "Inflige des dégâts d'[00D5FF]Amplification[-] égaux à 100 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Amplification : dégâts infligés +30 % par bonus actif sur soi.[-]",
              "idJeu": 194011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 150.0,
              "description": "Inflige des dégâts d'[00D5FF]Amplification[-] égaux à 150 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Amplification : dégâts infligés +30 % par bonus actif sur soi.[-]",
              "idJeu": 194012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 250.0,
              "description": "Inflige des dégâts d'[00D5FF]Amplification[-] égaux à 250 % de l'attaque à @target.allEnemies.\\n\\n[00D5FF]※Amplification : dégâts infligés +30 % par bonus actif sur soi.[-]",
              "idJeu": 194013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "« Chou Hissatsu Shinobi-bachi »",
        "image": "assets/1872501/images/icon_kof_mai_ssr_type01_special_01__f9375cd8a747b77c.png",
        "cible": "@target.oneEnemy",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 630.0,
            "description": "Inflige des dégâts égaux à 630 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 693.0,
            "description": "Inflige des dégâts égaux à 693 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 756.0,
            "description": "Inflige des dégâts égaux à 756 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 819.0,
            "description": "Inflige des dégâts égaux à 819 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 882.0,
            "description": "Inflige des dégâts égaux à 882 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 945.0,
            "description": "Inflige des dégâts égaux à 945 % de l'attaque à @target.oneEnemy et [00D5FF]augmente les rangs de compétence[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Beauté mature",
        "image": "assets/1872501/images/icon_exclusive_skill_1872501__eb3c547e7623be06.png",
        "description": "Augmente les stats de base du héros de [FFAE00]15 % %[-] pendant [FFAE00]2 tours[-] si le rang de ses compétences augmente.",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Augmente les stats de base du héros de [FFAE00]15 % %[-] pendant [FFAE00]2 tours[-] si le rang de ses compétences augmente."
          }
        ]
      },
      "idForme": 364002,
      "portrait": "assets/1872501/images/icon_hero_kof_mai_0002_s__94e4558eec80c7b8.png",
      "portraitVertical": "assets/1872501/images/icon_skin_kof_mai_0002_l__733f1b6a6f215fad.png"
    }
  ],
  "costumes": [
    {
      "id": "3364001",
      "categorie": "Skin",
      "nom": "Joueur 2",
      "image": "assets/1872501/images/icon_skin_kof_mai_0006_l__72e54e268c0cfdee.png",
      "rarete": ""
    },
    {
      "id": "3364050",
      "categorie": "Skin",
      "nom": "Danseuse passionnée",
      "image": "assets/1872501/images/icon_skin_kof_mai_0003_l__00bd988e26551c14.png",
      "rarete": ""
    },
    {
      "id": "3364051",
      "categorie": "Skin",
      "nom": "Plage estivale",
      "image": "assets/1872501/images/icon_skin_kof_mai_0004_l__a105b8da9a45feb2.png",
      "rarete": ""
    },
    {
      "id": "3364052",
      "categorie": "Skin",
      "nom": "Nouvel An",
      "image": "assets/1872501/images/icon_skin_kof_mai_0005_l__fe6c882bbc051351.png",
      "rarete": ""
    },
    {
      "id": "3364053",
      "categorie": "Skin",
      "nom": "Renard à neuf queues séduisant",
      "image": "assets/1872501/images/icon_skin_kof_mai_0007_l__9d62fba9c2bcc0c6.png",
      "rarete": ""
    },
    {
      "id": "3364002",
      "categorie": "Skin",
      "nom": "Joueur 1",
      "image": "assets/1872501/images/icon_skin_kof_mai_0002_l__733f1b6a6f215fad.png",
      "rarete": ""
    },
    {
      "id": "868101",
      "categorie": "Weapon",
      "nom": "Éventail papillon",
      "image": "assets/1872501/images/icon_weapon_kof_mai_0006_l__7590d1f2575e6265.png",
      "rarete": ""
    },
    {
      "id": "868102",
      "categorie": "Weapon",
      "nom": "Éventail de danse",
      "image": "assets/1872501/images/icon_weapon_kof_mai_0003_l__cd3bc51fdaf49791.png",
      "rarete": ""
    },
    {
      "id": "868103",
      "categorie": "Weapon",
      "nom": "Éventail estival",
      "image": "assets/1872501/images/icon_weapon_kof_mai_0004_l__5642a422ccaf0b45.png",
      "rarete": ""
    },
    {
      "id": "868104",
      "categorie": "Weapon",
      "nom": "Éventail du Nouvel An",
      "image": "assets/1872501/images/icon_weapon_kof_mai_0005_l__35be5b27ab65a428.png",
      "rarete": ""
    },
    {
      "id": "868106",
      "categorie": "Weapon",
      "nom": "Éventail du renard à neuf queues",
      "image": "assets/1872501/images/icon_weapon_kof_mai_0007_l__f7b863fdd9e35201.png",
      "rarete": ""
    },
    {
      "id": "868105",
      "categorie": "Weapon",
      "nom": "Éventail papillon (joueur 1)",
      "image": "assets/1872501/images/icon_weapon_kof_mai_0001_l__fd35b3dec3ebe94f.png",
      "rarete": ""
    },
    {
      "id": "868107",
      "categorie": "Weapon",
      "nom": "Feuille de l'arbre-monde",
      "image": "assets/1872501/images/icon_weapon_kof_mai_0001_l__fd35b3dec3ebe94f.png",
      "rarete": ""
    },
    {
      "id": "4810501",
      "categorie": "Head",
      "nom": "Style kunoichi",
      "image": "assets/1872501/images/icon_head_kof_mai_0001_l__41c704788c91cdb3.png",
      "rarete": ""
    },
    {
      "id": "4810502",
      "categorie": "Head",
      "nom": "Queue-de-cheval ondulée",
      "image": "assets/1872501/images/icon_head_kof_mai_0003_l__ab443d44079280c8.png",
      "rarete": ""
    },
    {
      "id": "4810503",
      "categorie": "Head",
      "nom": "Plante tropicale",
      "image": "assets/1872501/images/icon_head_kof_mai_0004_l__505ffeada5755267.png",
      "rarete": ""
    },
    {
      "id": "4810504",
      "categorie": "Head",
      "nom": "Mode du Nouvel An",
      "image": "assets/1872501/images/icon_head_kof_mai_0005_l__2ef5efac2230c34d.png",
      "rarete": ""
    },
    {
      "id": "4810505",
      "categorie": "Head",
      "nom": "Symbole du renard à neuf queues",
      "image": "assets/1872501/images/icon_head_kof_mai_0007_l__1f4dccf72691d5d7.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Feuille de l'arbre-monde",
    "image": "assets/1872501/images/icon_weapon_kof_mai_0551_s__af4ab7df33698a4d.png",
    "description": "Relique sacrée de Mai Shiranui (arme).\\n[DC143C]Éventail fabriqué à partir d'une feuille d'Yggdrasil, l'arbre-monde. On peut ressentir une énergie vitale dans son aura bleue.[-]",
    "passif": {
      "nom": "Feuille de l'arbre-monde",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Augmente l'attaque de tous les alliés de [FFAE00]15 %[-] lorsque le héros bénéficie de bonus."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 280.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 250.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 2600.0
      }
    ],
    "materiaux": [
      {
        "nom": "Or",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Source dimensionnelle",
        "image": "assets/commun/icon_item_special_craft_material_101__b4ac18f4f09baed3.png",
        "quantite": 15
      },
      {
        "nom": "Présage de la faille",
        "image": "assets/commun/icon_item_special_craft_material_102__70074ac688bf8add.png",
        "quantite": 30
      },
      {
        "nom": "Essence magique instable",
        "image": "assets/commun/icon_item_special_craft_material_103__cd504915f5791f03.png",
        "quantite": 80
      }
    ],
    "provenance": "Antre des créatures"
  }
};