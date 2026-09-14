window.fichePreparee={
  "nom": "Water Goddess Aqua",
  "designation": "[Arch Priest]",
  "titre": "Water Goddess Aqua",
  "idJeu": "1985501",
  "attribut": {
    "nom": "@attribute.4",
    "icone": "assets/commun/icon_filter_attribute_04__41a0e2f0c35046b0.png",
    "couleur": "#f1c54f",
    "detail": "Identifiant attribut DB_skin_base"
  },
  "race": {
    "nom": [
      "@race.5"
    ],
    "icone": [
      "assets/commun/icon_filter_kind_05__153a123cca908e2c.png"
    ]
  },
  "caracteristiques": [
    "@characteristic.3"
  ],
  "portrait": "assets/1985501/images/icon_hero_kzm_healer_0002_s__3e282501e0463b5c.png",
  "rareteParDefaut": "UR",
  "presentation": "[Arch Priest] Water Goddess Aqua can Freeze enemies when she has the Dice of Fate effect.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1985501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1985501/images/hero_illust_kzm_healer_1985501__98a24f5d0304efe8.png",
      "legendeImage": "kzm_healer_0001",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 540.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 370.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7000.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4695
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 1.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 200.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 1.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 280.0,
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
          "nom": "\"Water Attack\"",
          "image": "assets/1985501/images/icon_kzm_healer_ssr_type01_skill_01__0d06e5b977f8b1f9.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts [00D5FF]Clear Stream[-] damage equal to 200 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Clear Stream: [FFAE00]3x[-] Pierce Rate Increase.\\nDamage dealt [FFAE00]+100%[-] while Dice of Fate is active.\\nApplies Freeze on the target for [FFAE00]1 turn[-] when dealing damage while Dice of Fate is active.[-]",
              "idJeu": 1007001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts [00D5FF]Clear Stream[-] damage equal to 300 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Clear Stream: [FFAE00]3x[-] Pierce Rate Increase.\\nDamage dealt [FFAE00]+100%[-] while Dice of Fate is active.\\nApplies Freeze on the target for [FFAE00]1 turn[-] when dealing damage while Dice of Fate is active.[-]",
              "idJeu": 1007002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts [00D5FF]Clear Stream[-] damage equal to 500 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Clear Stream: [FFAE00]3x[-] Pierce Rate Increase.\\nDamage dealt [FFAE00]+100%[-] while Dice of Fate is active.\\nApplies Freeze on the target for [FFAE00]1 turn[-] when dealing damage while Dice of Fate is active.[-]",
              "idJeu": 1007003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Healing Zone\"",
          "image": "assets/1985501/images/icon_kzm_healer_ssr_type01_skill_02__45f6471c0d66656e.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies, heals them for 150 % of Attack, then [00D5FF]Rejuvenates[-] for 2 tour(s).\\n\\n[00D5FF]※Rejuvenate: Additional Recovery equal to 60 % of recovered HP at the beginning of the turn.[-]",
              "idJeu": 1007011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies, heals them for 200 % of Attack, then [00D5FF]Rejuvenates[-] for 2 tour(s).\\n\\n[00D5FF]※Rejuvenate: Additional Recovery equal to 60 % of recovered HP at the beginning of the turn.[-]",
              "idJeu": 1007012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies, heals them for 300 % of Attack, then [00D5FF]Rejuvenates[-] for 2 tour(s).\\n\\n[00D5FF]※Rejuvenate: Additional Recovery equal to 60 % of recovered HP at the beginning of the turn.[-]",
              "idJeu": 1007013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"God Requiem\"",
        "image": "assets/1985501/images/icon_kzm_healer_ssr_type01_special_01__ef4fd01b266bcabf.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 450.0,
            "description": "Increases all stats of allies by [FF8000]10%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 450 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 500.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]10%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 500 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 550.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]20%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 550 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 600.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]20%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 600 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 650.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]30%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 650 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 700.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]30%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 700 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Useless Goddess",
        "image": "assets/1985501/images/icon_exclusive_skill_1985501__170e063fffa76c67.png",
        "description": "For every [FFAE00]1[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and the hero's [00D5FF]damage taken[-] decreases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Goddesses, Megumin, Darkness[-][/i]\\n\\nFor [FFAE00]each[-] attribute of allies that is unique at the start of the battle, the hero's basic stats increase by [FFAE00]5%[-].\\n\\nAt the start of the battle and when an [00D5FF]Applicable Ally[-] uses a skill, they gain [00D5FF]Blessing Lake[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Blessing Lake: All stats [FFAE00]+10%[-], damage taken [FF8000]-30%[-][-][/i]\\n\\nRemoves [00D5FF]Blessing Lake[-] from self and gains [00D5FF]Dice of Fate[-] at the start of the allies' turn.\\n[i][C0C0C0]※Dice of Fate: Uses Clear Stream skill according to the number from the dice [FFAE00](1-3)[-], then the effect is removed.[-][/i]\\n\\nIf the hero [00D5FF]uses a Recovery Skill[-] to remove Debuffs from self, the hero and [00D5FF]Applicable Allies[-] with attributes different from the hero's are granted [00D5FF]Divine Purification[-] for [FFAE00]2 turns[-]. (Limit [FFAE00]once[-])\\n[i][C0C0C0]※Divine Purification: Revives with [FFAE00]50%[-] of Max HP upon dying.\\n(Effect is removed after reviving. Does not revive if dying from reflected damage)[-][/i]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "For every [FFAE00]1[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and the hero's [00D5FF]damage taken[-] decreases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Goddesses, Megumin, Darkness[-][/i]\\n\\nFor [FFAE00]each[-] attribute of allies that is unique at the start of the battle, the hero's basic stats increase by [FFAE00]5%[-].\\n\\nAt the start of the battle and when an [00D5FF]Applicable Ally[-] uses a skill, they gain [00D5FF]Blessing Lake[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Blessing Lake: All stats [FFAE00]+10%[-], damage taken [FF8000]-10%[-][-][/i]\\n\\nRemoves [00D5FF]Blessing Lake[-] from self and gains [00D5FF]Dice of Fate[-] at the start of the allies' turn.\\n[i][C0C0C0]※Dice of Fate: Uses Clear Stream skill according to the number from the dice [FFAE00](1-3)[-], then the effect is removed.[-][/i]\\n\\nIf the hero [00D5FF]uses a Recovery Skill[-] to remove Debuffs from self, the hero and [00D5FF]Applicable Allies[-] with attributes different from the hero's are granted [00D5FF]Divine Purification[-] for [FFAE00]2 turns[-]. (Limit [FFAE00]once[-])\\n[i][C0C0C0]※Divine Purification: Revives with [FFAE00]50%[-] of Max HP upon dying.\\n(Effect is removed after reviving. Does not revive if dying from reflected damage)[-][/i]"
          },
          {
            "niveau": 3,
            "description": "For every [FFAE00]1[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and the hero's [00D5FF]damage taken[-] decreases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Goddesses, Megumin, Darkness[-][/i]\\n\\nFor [FFAE00]each[-] attribute of allies that is unique at the start of the battle, the hero's basic stats increase by [FFAE00]5%[-].\\n\\nAt the start of the battle and when an [00D5FF]Applicable Ally[-] uses a skill, they gain [00D5FF]Blessing Lake[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Blessing Lake: All stats [FFAE00]+10%[-], damage taken [FF8000]-20%[-][-][/i]\\n\\nRemoves [00D5FF]Blessing Lake[-] from self and gains [00D5FF]Dice of Fate[-] at the start of the allies' turn.\\n[i][C0C0C0]※Dice of Fate: Uses Clear Stream skill according to the number from the dice [FFAE00](1-3)[-], then the effect is removed.[-][/i]\\n\\nIf the hero [00D5FF]uses a Recovery Skill[-] to remove Debuffs from self, the hero and [00D5FF]Applicable Allies[-] with attributes different from the hero's are granted [00D5FF]Divine Purification[-] for [FFAE00]2 turns[-]. (Limit [FFAE00]once[-])\\n[i][C0C0C0]※Divine Purification: Revives with [FFAE00]50%[-] of Max HP upon dying.\\n(Effect is removed after reviving. Does not revive if dying from reflected damage)[-][/i]"
          },
          {
            "niveau": 5,
            "description": "For every [FFAE00]1[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and the hero's [00D5FF]damage taken[-] decreases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Goddesses, Megumin, Darkness[-][/i]\\n\\nFor [FFAE00]each[-] attribute of allies that is unique at the start of the battle, the hero's basic stats increase by [FFAE00]5%[-].\\n\\nAt the start of the battle and when an [00D5FF]Applicable Ally[-] uses a skill, they gain [00D5FF]Blessing Lake[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Blessing Lake: All stats [FFAE00]+10%[-], damage taken [FF8000]-30%[-][-][/i]\\n\\nRemoves [00D5FF]Blessing Lake[-] from self and gains [00D5FF]Dice of Fate[-] at the start of the allies' turn.\\n[i][C0C0C0]※Dice of Fate: Uses Clear Stream skill according to the number from the dice [FFAE00](1-3)[-], then the effect is removed.[-][/i]\\n\\nIf the hero [00D5FF]uses a Recovery Skill[-] to remove Debuffs from self, the hero and [00D5FF]Applicable Allies[-] with attributes different from the hero's are granted [00D5FF]Divine Purification[-] for [FFAE00]2 turns[-]. (Limit [FFAE00]once[-])\\n[i][C0C0C0]※Divine Purification: Revives with [FFAE00]50%[-] of Max HP upon dying.\\n(Effect is removed after reviving. Does not revive if dying from reflected damage)[-][/i]"
          }
        ]
      },
      "idForme": 328001,
      "portrait": "assets/1985501/images/icon_hero_kzm_healer_0001_s__83a9a1da17a4ebe8.png",
      "portraitVertical": "assets/1985501/images/icon_skin_kzm_healer_0001_l__b6764bd8a566cc35.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1985501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1985501/images/hero_illust_kzm_healer_1985501__98a24f5d0304efe8.png",
      "legendeImage": "kzm_healer_0002",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 850.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 440.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8800.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5421
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 1.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDamage",
            "valeur": 200.0,
            "unite": "%"
          },
          {
            "nom": "@stat.resistance",
            "valeur": null,
            "unite": "%"
          },
          {
            "nom": "@stat.critResistance",
            "valeur": 1.0,
            "unite": "%"
          },
          {
            "nom": "@stat.critDefense",
            "valeur": 280.0,
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
          "nom": "\"Water Attack\"",
          "image": "assets/1985501/images/icon_kzm_healer_ssr_type01_skill_01__0d06e5b977f8b1f9.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts [00D5FF]Clear Stream[-] damage equal to 200 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Clear Stream: [FFAE00]3x[-] Pierce Rate Increase.\\nDamage dealt [FFAE00]+100%[-] while Dice of Fate is active.\\nApplies Freeze on the target for [FFAE00]1 turn[-] when dealing damage while Dice of Fate is active.[-]",
              "idJeu": 1007001,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts [00D5FF]Clear Stream[-] damage equal to 300 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Clear Stream: [FFAE00]3x[-] Pierce Rate Increase.\\nDamage dealt [FFAE00]+100%[-] while Dice of Fate is active.\\nApplies Freeze on the target for [FFAE00]1 turn[-] when dealing damage while Dice of Fate is active.[-]",
              "idJeu": 1007002,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts [00D5FF]Clear Stream[-] damage equal to 500 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Clear Stream: [FFAE00]3x[-] Pierce Rate Increase.\\nDamage dealt [FFAE00]+100%[-] while Dice of Fate is active.\\nApplies Freeze on the target for [FFAE00]1 turn[-] when dealing damage while Dice of Fate is active.[-]",
              "idJeu": 1007003,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/debuff_atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Healing Zone\"",
          "image": "assets/1985501/images/icon_kzm_healer_ssr_type01_skill_02__45f6471c0d66656e.png",
          "type": "@skill.attack",
          "cible": "@target.allAllies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 150.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies, heals them for 150 % of Attack, then [00D5FF]Rejuvenates[-] for 2 tour(s).\\n\\n[00D5FF]※Rejuvenate: Additional Recovery equal to 60 % of recovered HP at the beginning of the turn.[-]",
              "idJeu": 1007011,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 200.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies, heals them for 200 % of Attack, then [00D5FF]Rejuvenates[-] for 2 tour(s).\\n\\n[00D5FF]※Rejuvenate: Additional Recovery equal to 60 % of recovered HP at the beginning of the turn.[-]",
              "idJeu": 1007012,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 300.0,
              "description": "[00D5FF]Removes Debuffs[-] from @target.allAllies, heals them for 300 % of Attack, then [00D5FF]Rejuvenates[-] for 2 tour(s).\\n\\n[00D5FF]※Rejuvenate: Additional Recovery equal to 60 % of recovered HP at the beginning of the turn.[-]",
              "idJeu": 1007013,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/heal_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"God Requiem\"",
        "image": "assets/1985501/images/icon_kzm_healer_ssr_type01_special_01__ef4fd01b266bcabf.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 450.0,
            "description": "Increases all stats of allies by [FF8000]10%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 450 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 500.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]10%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 500 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 550.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]20%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 550 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 600.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]20%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 600 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 650.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]30%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 650 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 700.0,
            "description": "Applies [00D5FF]Divine Purification[-] on allies for [FFAE00]1 turn[-], increases all stats by [FF8000]30%[-] for [FFAE00]2 turns[-], then inflicts damage equal to 700 % of Attack on @target.allEnemies.",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Useless Goddess",
        "image": "assets/1985501/images/icon_exclusive_skill_1985501__170e063fffa76c67.png",
        "description": "For every [FFAE00]1[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and the hero's [00D5FF]damage taken[-] decreases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Goddesses, Megumin, Darkness[-][/i]\\n\\nFor [FFAE00]each[-] attribute of allies that is unique at the start of the battle, the hero's basic stats increase by [FFAE00]5%[-].\\n\\nAt the start of the battle and when an [00D5FF]Applicable Ally[-] uses a skill, they gain [00D5FF]Blessing Lake[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Blessing Lake: All stats [FFAE00]+10%[-], damage taken [FF8000]-30%[-][-][/i]\\n\\nRemoves [00D5FF]Blessing Lake[-] from self and gains [00D5FF]Dice of Fate[-] at the start of the allies' turn.\\n[i][C0C0C0]※Dice of Fate: Uses Clear Stream skill according to the number from the dice [FFAE00](1-3)[-], then the effect is removed.[-][/i]\\n\\nIf the hero [00D5FF]uses a Recovery Skill[-] to remove Debuffs from self, the hero and [00D5FF]Applicable Allies[-] with attributes different from the hero's are granted [00D5FF]Divine Purification[-] for [FFAE00]2 turns[-]. (Limit [FFAE00]once[-])\\n[i][C0C0C0]※Divine Purification: Revives with [FFAE00]50%[-] of Max HP upon dying.\\n(Effect is removed after reviving. Does not revive if dying from reflected damage)[-][/i]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "For every [FFAE00]1[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and the hero's [00D5FF]damage taken[-] decreases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Goddesses, Megumin, Darkness[-][/i]\\n\\nFor [FFAE00]each[-] attribute of allies that is unique at the start of the battle, the hero's basic stats increase by [FFAE00]5%[-].\\n\\nAt the start of the battle and when an [00D5FF]Applicable Ally[-] uses a skill, they gain [00D5FF]Blessing Lake[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Blessing Lake: All stats [FFAE00]+10%[-], damage taken [FF8000]-10%[-][-][/i]\\n\\nRemoves [00D5FF]Blessing Lake[-] from self and gains [00D5FF]Dice of Fate[-] at the start of the allies' turn.\\n[i][C0C0C0]※Dice of Fate: Uses Clear Stream skill according to the number from the dice [FFAE00](1-3)[-], then the effect is removed.[-][/i]\\n\\nIf the hero [00D5FF]uses a Recovery Skill[-] to remove Debuffs from self, the hero and [00D5FF]Applicable Allies[-] with attributes different from the hero's are granted [00D5FF]Divine Purification[-] for [FFAE00]2 turns[-]. (Limit [FFAE00]once[-])\\n[i][C0C0C0]※Divine Purification: Revives with [FFAE00]50%[-] of Max HP upon dying.\\n(Effect is removed after reviving. Does not revive if dying from reflected damage)[-][/i]"
          },
          {
            "niveau": 3,
            "description": "For every [FFAE00]1[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and the hero's [00D5FF]damage taken[-] decreases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Goddesses, Megumin, Darkness[-][/i]\\n\\nFor [FFAE00]each[-] attribute of allies that is unique at the start of the battle, the hero's basic stats increase by [FFAE00]5%[-].\\n\\nAt the start of the battle and when an [00D5FF]Applicable Ally[-] uses a skill, they gain [00D5FF]Blessing Lake[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Blessing Lake: All stats [FFAE00]+10%[-], damage taken [FF8000]-20%[-][-][/i]\\n\\nRemoves [00D5FF]Blessing Lake[-] from self and gains [00D5FF]Dice of Fate[-] at the start of the allies' turn.\\n[i][C0C0C0]※Dice of Fate: Uses Clear Stream skill according to the number from the dice [FFAE00](1-3)[-], then the effect is removed.[-][/i]\\n\\nIf the hero [00D5FF]uses a Recovery Skill[-] to remove Debuffs from self, the hero and [00D5FF]Applicable Allies[-] with attributes different from the hero's are granted [00D5FF]Divine Purification[-] for [FFAE00]2 turns[-]. (Limit [FFAE00]once[-])\\n[i][C0C0C0]※Divine Purification: Revives with [FFAE00]50%[-] of Max HP upon dying.\\n(Effect is removed after reviving. Does not revive if dying from reflected damage)[-][/i]"
          },
          {
            "niveau": 5,
            "description": "For every [FFAE00]1[-] [00D5FF]Applicable Ally[-] participating in battle, their basic stats increase by [FFAE00]5%[-] and the hero's [00D5FF]damage taken[-] decreases by [FFAE00]10%[-].\\n[i][C0C0C0]※Applicable Ally: Goddesses, Megumin, Darkness[-][/i]\\n\\nFor [FFAE00]each[-] attribute of allies that is unique at the start of the battle, the hero's basic stats increase by [FFAE00]5%[-].\\n\\nAt the start of the battle and when an [00D5FF]Applicable Ally[-] uses a skill, they gain [00D5FF]Blessing Lake[-] for [FFAE00]2 turns[-].\\n[i][C0C0C0]※Blessing Lake: All stats [FFAE00]+10%[-], damage taken [FF8000]-30%[-][-][/i]\\n\\nRemoves [00D5FF]Blessing Lake[-] from self and gains [00D5FF]Dice of Fate[-] at the start of the allies' turn.\\n[i][C0C0C0]※Dice of Fate: Uses Clear Stream skill according to the number from the dice [FFAE00](1-3)[-], then the effect is removed.[-][/i]\\n\\nIf the hero [00D5FF]uses a Recovery Skill[-] to remove Debuffs from self, the hero and [00D5FF]Applicable Allies[-] with attributes different from the hero's are granted [00D5FF]Divine Purification[-] for [FFAE00]2 turns[-]. (Limit [FFAE00]once[-])\\n[i][C0C0C0]※Divine Purification: Revives with [FFAE00]50%[-] of Max HP upon dying.\\n(Effect is removed after reviving. Does not revive if dying from reflected damage)[-][/i]"
          }
        ]
      },
      "idForme": 328002,
      "portrait": "assets/1985501/images/icon_hero_kzm_healer_0002_s__3e282501e0463b5c.png",
      "portraitVertical": "assets/1985501/images/icon_skin_kzm_healer_0002_l__2f29cefbca174e8c.png"
    }
  ],
  "costumes": [
    {
      "id": "3328001",
      "categorie": "Skin",
      "nom": "Bubbly Enthusiast",
      "image": "assets/1985501/images/icon_skin_kzm_healer_0001_l__b6764bd8a566cc35.png",
      "rarete": ""
    },
    {
      "id": "3328050",
      "categorie": "Skin",
      "nom": "Lovely Maid",
      "image": "assets/1985501/images/icon_skin_kzm_healer_0003_l__325d309eccdbc21e.png",
      "rarete": ""
    },
    {
      "id": "3328051",
      "categorie": "Skin",
      "nom": "Sacred White",
      "image": "assets/1985501/images/icon_skin_kzm_healer_0004_l__0aa07424deeca58f.png",
      "rarete": ""
    },
    {
      "id": "3328052",
      "categorie": "Skin",
      "nom": "Trick or Treat",
      "image": "assets/1985501/images/icon_skin_kzm_healer_0005_l__bdcc4a7792831d67.png",
      "rarete": ""
    },
    {
      "id": "3328002",
      "categorie": "Skin",
      "nom": "Arch Priest",
      "image": "assets/1985501/images/icon_skin_kzm_healer_0002_l__2f29cefbca174e8c.png",
      "rarete": ""
    },
    {
      "id": "880201",
      "categorie": "Weapon",
      "nom": "Aqua's Staff",
      "image": "assets/1985501/images/icon_weapon_kzm_healer_0001_l__d11d02db3c6770bf.png",
      "rarete": ""
    },
    {
      "id": "880202",
      "categorie": "Weapon",
      "nom": "Maid's Broom",
      "image": "assets/1985501/images/icon_weapon_kzm_healer_0003_l__bbe1705f96e0104a.png",
      "rarete": ""
    },
    {
      "id": "880203",
      "categorie": "Weapon",
      "nom": "Sacred Staff",
      "image": "assets/1985501/images/icon_weapon_kzm_healer_0004_l__4de7357a39fefa79.png",
      "rarete": ""
    },
    {
      "id": "880204",
      "categorie": "Weapon",
      "nom": "Jack-o'-Stick",
      "image": "assets/1985501/images/icon_weapon_kzm_healer_0005_l__b44571c905b6a312.png",
      "rarete": ""
    },
    {
      "id": "880205",
      "categorie": "Weapon",
      "nom": "Njord's Blossom Staff",
      "image": "assets/1985501/images/icon_weapon_kzm_healer_0001_l__d11d02db3c6770bf.png",
      "rarete": ""
    },
    {
      "id": "4009101",
      "categorie": "Head",
      "nom": "Water Goddess Style",
      "image": "assets/1985501/images/icon_head_kzm_healer_0001_l__99e428a9271a8ebd.png",
      "rarete": ""
    },
    {
      "id": "4009102",
      "categorie": "Head",
      "nom": "Lovely Hairband",
      "image": "assets/1985501/images/icon_head_kzm_healer_0003_l__0db55e93c921d6d6.png",
      "rarete": ""
    },
    {
      "id": "4009103",
      "categorie": "Head",
      "nom": "Veil of White",
      "image": "assets/1985501/images/icon_head_kzm_healer_0004_l__23620fcdb49d4bfe.png",
      "rarete": ""
    },
    {
      "id": "4009104",
      "categorie": "Head",
      "nom": "Halloween Witch Hat",
      "image": "assets/1985501/images/icon_head_kzm_healer_0005_l__b469ed9e537e80f5.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Njord's Blossom Staff",
    "image": "assets/1985501/images/icon_weapon_kzm_healer_0551_s__d04de343b89f1ff9.png",
    "description": "Water Goddess Aqua's Holy Relic (Weapon).\\n[DC143C]A staff adorned with a flower imbued with the power of Njord, the god of the sea. It is said that the wielder gains the ability to command the sea when the flower blooms in response to their magic.[-]",
    "passif": {
      "nom": "Njord's Blossom Staff",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "Increases the hero's [00D5FF]damage dealt[-] to [00D5FF]Demon enemies[-] by [FFAE00]200%[-] and decreases [00D5FF]damage taken[-] from them by [FFAE00]100%[-]."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 380.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 350.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 4200.0
      }
    ],
    "materiaux": [
      {
        "nom": "Gold",
        "image": "assets/commun/icon_item_money_gold__f3bf90ba36454792.png",
        "quantite": 5000000
      },
      {
        "nom": "Dimensional Source",
        "image": "assets/commun/icon_item_special_craft_material_101__b4ac18f4f09baed3.png",
        "quantite": 15
      },
      {
        "nom": "Omen of the Rift",
        "image": "assets/commun/icon_item_special_craft_material_102__70074ac688bf8add.png",
        "quantite": 30
      },
      {
        "nom": "Unstable Magic Essence",
        "image": "assets/commun/icon_item_special_craft_material_103__cd504915f5791f03.png",
        "quantite": 80
      }
    ],
    "provenance": "Antre des créatures"
  }
};
