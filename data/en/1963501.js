window.fichePreparee={
  "nom": "Milim Nava",
  "designation": "[Proven Power]",
  "titre": "Milim Nava",
  "idJeu": "1963501",
  "attribut": {
    "nom": "@attribute.1",
    "icone": "assets/commun/icon_filter_attribute_01__bfa1da106b20bf3e.png",
    "couleur": "#ef6369",
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
    "@characteristic.3"
  ],
  "portrait": "assets/1963501/images/icon_hero_sao_dragon_0002_s__e45ce78125f236aa.png",
  "rareteParDefaut": "LR",
  "presentation": "[Proven Power] Milim Nava has a skill that deals greater damage the higher her Pierce Rate and Crit Damage are.",
  "commandement": null,
  "talent": null,
  "grace": null,
  "union": null,
  "raretés": [
    {
      "id": "SSR",
      "nom": "SSR",
      "icone": "assets/commun/icon_filter_grade_SSR__ed30b11d8c06558d.png",
      "cadre": "assets/1963501/images/icon_frame_small_ssr__3b1a07b8b1c4adb5.png",
      "fond": "assets/commun/icon_hero_basic_s_5__d57710ef4255cc36.png",
      "coin": "assets/commun/common_level_frame_rank_ssr.png",
      "couleur": "#d9b569",
      "image": "assets/1963501/images/hero_illust_sao_dragon_1963501__a2b51f5f327dddd6.png",
      "legendeImage": "sao_dragon_0006",
      "niveau": 50,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 500.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 330.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 6400.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 4554
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 90.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Heavenly Demon Slash\"",
          "image": "assets/1963501/images/icon_sao_dragon_ssr_type01_skill_01__360f49153f2df985.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts [00D5FF]Obliteration[-] damage equal to 200 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Obliteration: [FFAE00]3x[-] Pierce Rate Increase and ignores enemy Defense. Upon skill use, Crit Chance [FFAE00]+50%[-] per [FFAE00]each[-] stack of Dragon Power on self. Damage dealt increases by [FFAE00]30%[-] for [FFAE00]each[-] stack of Dragon Power on self.[-]",
              "idJeu": 1004701,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts [00D5FF]Obliteration[-] damage equal to 300 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Obliteration: [FFAE00]3x[-] Pierce Rate Increase and ignores enemy Defense. Upon skill use, Crit Chance [FFAE00]+50%[-] per [FFAE00]each[-] stack of Dragon Power on self. Damage dealt increases by [FFAE00]30%[-] for [FFAE00]each[-] stack of Dragon Power on self.[-]",
              "idJeu": 1004702,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts [00D5FF]Obliteration[-] damage equal to 500 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Obliteration: [FFAE00]3x[-] Pierce Rate Increase and ignores enemy Defense. Upon skill use, Crit Chance [FFAE00]+50%[-] per [FFAE00]each[-] stack of Dragon Power on self. Damage dealt increases by [FFAE00]30%[-] for [FFAE00]each[-] stack of Dragon Power on self.[-]",
              "idJeu": 1004703,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Tyrant's Roar\"",
          "image": "assets/1963501/images/icon_sao_dragon_ssr_type01_skill_02__540f152ad2e2baa1.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 100.0,
              "description": "Inflicts [00D5FF]Raging Gale[-] damage equal to 100 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage dealt [FFAE00]+50%[-] if the Dragon Rage effect is active on self.[-]",
              "idJeu": 1004711,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 150.0,
              "description": "Inflicts [00D5FF]Raging Gale[-] damage equal to 150 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage dealt [FFAE00]+50%[-] if the Dragon Rage effect is active on self.[-]",
              "idJeu": 1004712,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 250.0,
              "description": "Inflicts [00D5FF]Raging Gale[-] damage equal to 250 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage dealt [FFAE00]+50%[-] if the Dragon Rage effect is active on self.[-]",
              "idJeu": 1004713,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Drago Nova\"",
        "image": "assets/1963501/images/icon_sao_dragon_ssr_type01_special_01__5dfb0eeed40ae3d3.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 350 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]3 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]40%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 385.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 385 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]4 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]40%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 420.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 420 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]4 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]70%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 455.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 455 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]5 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]70%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 490.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 490 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]5 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]100%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 525.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 525 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]6 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]100%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Supreme Power",
        "image": "assets/1963501/images/icon_exclusive_skill_1963501__39e1070d10765462.png",
        "description": "At the start of the battle, applies [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] on the hero, then [00D5FF]Dragon Protection[-] for [FFAE00]3 turns[-].\\nIncreases allies' Defense-related stats by [FFAE00]20%[-] for [FFAE00]each stack[-] of [00D5FF]Dragon Power[-] on self. [FFAE00]1[-] instance of [00D5FF]Dragon Power[-] is removed each time [00D5FF]an ally uses a skill[-] or [00D5FF]this hero takes damage[-] from an enemy's skill use on the enemy's turn.\\nAdditionally, all stats of the hero increase by [FFAE00]7%[-] each time a stack of [00D5FF]Dragon Power[-] is lost, up to a maximum of [FFAE00]28%[-]. Once all the instances are removed, [00D5FF]Dragon Rage[-] is applied to the hero for [FFAE00]3 turns[-]. When [00D5FF]Dragon Rage[-] expires, [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] are applied to the hero once again.\\n\\n[00D5FF]※Dragon Protection: Allies' damage taken from all-target attack skills [FFAE00]-40%[-].\\nThe hero becomes immune to stat decrease effects.\\n※Dragon Power: Applies Dragon Rage on self once all stacks are removed.\\n※Dragon Rage: Attack-related stats [FFAE00]+40%[-]. Ignores [FFAE00]100%[-] of the target's Crit Resistance. Inflicts additional damage equal to [FFAE00]40%[-] of the final damage when using all-target attack skills (except Ultimate Moves).[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "At the start of the battle, applies [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] on the hero, then [00D5FF]Dragon Protection[-] for [FFAE00]3 turns[-].\\nIncreases allies' Defense-related stats by [FFAE00]20%[-] for [FFAE00]each stack[-] of [00D5FF]Dragon Power[-] on self. [FFAE00]1[-] instance of [00D5FF]Dragon Power[-] is removed each time [00D5FF]an ally uses a skill[-] or [00D5FF]this hero takes damage[-] from an enemy's skill use on the enemy's turn.\\nAdditionally, all stats of the hero increase by [FFAE00]7%[-] each time a stack of [00D5FF]Dragon Power[-] is lost, up to a maximum of [FFAE00]28%[-]. Once all the instances are removed, [00D5FF]Dragon Rage[-] is applied to the hero for [FFAE00]3 turns[-]. When [00D5FF]Dragon Rage[-] expires, [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] are applied to the hero once again.\\n\\n[00D5FF]※Dragon Protection: Allies' damage taken from all-target attack skills [FFAE00]-40%[-].\\nThe hero becomes immune to stat decrease effects.\\n※Dragon Power: Applies Dragon Rage on self once all stacks are removed.\\n※Dragon Rage: Attack-related stats [FFAE00]+40%[-]. Ignores [FFAE00]100%[-] of the target's Crit Resistance. Inflicts additional damage equal to [FFAE00]40%[-] of the final damage when using all-target attack skills (except Ultimate Moves).[-]"
          }
        ]
      },
      "idForme": 325801,
      "portrait": "assets/1963501/images/icon_hero_sao_dragon_0006_s__ecf1a4a93fa5bdb4.png",
      "portraitVertical": "assets/1963501/images/icon_skin_sao_dragon_0006_l__9855833541e5606b.png"
    },
    {
      "id": "UR",
      "nom": "UR",
      "icone": "assets/commun/icon_filter_grade_UR__e991ffc663c6f527.png",
      "cadre": "assets/1963501/images/icon_frame_small_ur__32674fdb5a494112.png",
      "fond": "assets/commun/icon_hero_basic_s_6__9b21faac625aca80.png",
      "coin": "assets/commun/common_level_frame_rank_ur.png",
      "couleur": "#c6a5fa",
      "image": "assets/1963501/images/hero_illust_sao_dragon_1963501__a2b51f5f327dddd6.png",
      "legendeImage": "sao_dragon_0001",
      "niveau": 60,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 680.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 370.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 7600.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5006
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 90.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Heavenly Demon Slash\"",
          "image": "assets/1963501/images/icon_sao_dragon_ssr_type01_skill_01__360f49153f2df985.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts [00D5FF]Obliteration[-] damage equal to 200 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Obliteration: [FFAE00]3x[-] Pierce Rate Increase and ignores enemy Defense. Upon skill use, Crit Chance [FFAE00]+50%[-] per [FFAE00]each[-] stack of Dragon Power on self. Damage dealt increases by [FFAE00]30%[-] for [FFAE00]each[-] stack of Dragon Power on self.[-]",
              "idJeu": 1004701,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts [00D5FF]Obliteration[-] damage equal to 300 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Obliteration: [FFAE00]3x[-] Pierce Rate Increase and ignores enemy Defense. Upon skill use, Crit Chance [FFAE00]+50%[-] per [FFAE00]each[-] stack of Dragon Power on self. Damage dealt increases by [FFAE00]30%[-] for [FFAE00]each[-] stack of Dragon Power on self.[-]",
              "idJeu": 1004702,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts [00D5FF]Obliteration[-] damage equal to 500 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Obliteration: [FFAE00]3x[-] Pierce Rate Increase and ignores enemy Defense. Upon skill use, Crit Chance [FFAE00]+50%[-] per [FFAE00]each[-] stack of Dragon Power on self. Damage dealt increases by [FFAE00]30%[-] for [FFAE00]each[-] stack of Dragon Power on self.[-]",
              "idJeu": 1004703,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Tyrant's Roar\"",
          "image": "assets/1963501/images/icon_sao_dragon_ssr_type01_skill_02__540f152ad2e2baa1.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 100.0,
              "description": "Inflicts [00D5FF]Raging Gale[-] damage equal to 100 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage dealt [FFAE00]+50%[-] if the Dragon Rage effect is active on self.[-]",
              "idJeu": 1004711,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 150.0,
              "description": "Inflicts [00D5FF]Raging Gale[-] damage equal to 150 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage dealt [FFAE00]+50%[-] if the Dragon Rage effect is active on self.[-]",
              "idJeu": 1004712,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 250.0,
              "description": "Inflicts [00D5FF]Raging Gale[-] damage equal to 250 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage dealt [FFAE00]+50%[-] if the Dragon Rage effect is active on self.[-]",
              "idJeu": 1004713,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Drago Nova\"",
        "image": "assets/1963501/images/icon_sao_dragon_ssr_type01_special_01__5dfb0eeed40ae3d3.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 350 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]3 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]40%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 385.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 385 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]4 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]40%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 420.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 420 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]4 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]70%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 455.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 455 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]5 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]70%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 490.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 490 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]5 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]100%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 525.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 525 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]6 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]100%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Supreme Power",
        "image": "assets/1963501/images/icon_exclusive_skill_1963501__39e1070d10765462.png",
        "description": "At the start of the battle, applies [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] on the hero, then [00D5FF]Dragon Protection[-] for [FFAE00]3 turns[-].\\nIncreases allies' Defense-related stats by [FFAE00]20%[-] for [FFAE00]each stack[-] of [00D5FF]Dragon Power[-] on self. [FFAE00]1[-] instance of [00D5FF]Dragon Power[-] is removed each time [00D5FF]an ally uses a skill[-] or [00D5FF]this hero takes damage[-] from an enemy's skill use on the enemy's turn.\\nAdditionally, all stats of the hero increase by [FFAE00]7%[-] each time a stack of [00D5FF]Dragon Power[-] is lost, up to a maximum of [FFAE00]28%[-]. Once all the instances are removed, [00D5FF]Dragon Rage[-] is applied to the hero for [FFAE00]3 turns[-]. When [00D5FF]Dragon Rage[-] expires, [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] are applied to the hero once again.\\n\\n[00D5FF]※Dragon Protection: Allies' damage taken from all-target attack skills [FFAE00]-40%[-].\\nThe hero becomes immune to stat decrease effects.\\n※Dragon Power: Applies Dragon Rage on self once all stacks are removed.\\n※Dragon Rage: Attack-related stats [FFAE00]+40%[-]. Ignores [FFAE00]100%[-] of the target's Crit Resistance. Inflicts additional damage equal to [FFAE00]40%[-] of the final damage when using all-target attack skills (except Ultimate Moves).[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "At the start of the battle, applies [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] on the hero, then [00D5FF]Dragon Protection[-] for [FFAE00]3 turns[-].\\nIncreases allies' Defense-related stats by [FFAE00]20%[-] for [FFAE00]each stack[-] of [00D5FF]Dragon Power[-] on self. [FFAE00]1[-] instance of [00D5FF]Dragon Power[-] is removed each time [00D5FF]an ally uses a skill[-] or [00D5FF]this hero takes damage[-] from an enemy's skill use on the enemy's turn.\\nAdditionally, all stats of the hero increase by [FFAE00]7%[-] each time a stack of [00D5FF]Dragon Power[-] is lost, up to a maximum of [FFAE00]28%[-]. Once all the instances are removed, [00D5FF]Dragon Rage[-] is applied to the hero for [FFAE00]3 turns[-]. When [00D5FF]Dragon Rage[-] expires, [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] are applied to the hero once again.\\n\\n[00D5FF]※Dragon Protection: Allies' damage taken from all-target attack skills [FFAE00]-40%[-].\\nThe hero becomes immune to stat decrease effects.\\n※Dragon Power: Applies Dragon Rage on self once all stacks are removed.\\n※Dragon Rage: Attack-related stats [FFAE00]+40%[-]. Ignores [FFAE00]100%[-] of the target's Crit Resistance. Inflicts additional damage equal to [FFAE00]40%[-] of the final damage when using all-target attack skills (except Ultimate Moves).[-]"
          }
        ]
      },
      "idForme": 325802,
      "portrait": "assets/1963501/images/icon_hero_sao_dragon_0001_s__b2d440209f7cbc83.png",
      "portraitVertical": "assets/1963501/images/icon_skin_sao_dragon_0001_l__9c159d1ccb049a79.png"
    },
    {
      "id": "LR",
      "nom": "LR",
      "icone": "assets/commun/icon_filter_grade_LR__01254701e83a6f69.png",
      "cadre": "assets/commun/common_frame_rank_lr.png",
      "fond": "assets/commun/icon_hero_basic_s_7__1f68b57601e76589.png",
      "coin": "assets/commun/common_level_frame_rank_lr.png",
      "couleur": "#f3ce80",
      "image": "assets/1963501/images/hero_illust_sao_dragon_1963501__a2b51f5f327dddd6.png",
      "legendeImage": "sao_dragon_0002",
      "niveau": 100,
      "statistiques": {
        "principales": [
          {
            "nom": "@stat.attack",
            "valeur": 840.0
          },
          {
            "nom": "@stat.defense",
            "valeur": 410.0
          },
          {
            "nom": "@stat.hp",
            "valeur": 8800.0
          },
          {
            "nom": "@stat.combatClass",
            "valeur": 5438
          }
        ],
        "secondaires": [
          {
            "nom": "@stat.critChance",
            "valeur": 90.0,
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
            "valeur": 5.0,
            "unite": "%"
          }
        ]
      },
      "competences": [
        {
          "id": "attaque-a",
          "nom": "\"Heavenly Demon Slash\"",
          "image": "assets/1963501/images/icon_sao_dragon_ssr_type01_skill_01__360f49153f2df985.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts [00D5FF]Obliteration[-] damage equal to 200 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Obliteration: [FFAE00]3x[-] Pierce Rate Increase and ignores enemy Defense. Upon skill use, Crit Chance [FFAE00]+50%[-] per [FFAE00]each[-] stack of Dragon Power on self. Damage dealt increases by [FFAE00]30%[-] for [FFAE00]each[-] stack of Dragon Power on self.[-]",
              "idJeu": 1004701,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts [00D5FF]Obliteration[-] damage equal to 300 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Obliteration: [FFAE00]3x[-] Pierce Rate Increase and ignores enemy Defense. Upon skill use, Crit Chance [FFAE00]+50%[-] per [FFAE00]each[-] stack of Dragon Power on self. Damage dealt increases by [FFAE00]30%[-] for [FFAE00]each[-] stack of Dragon Power on self.[-]",
              "idJeu": 1004702,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts [00D5FF]Obliteration[-] damage equal to 500 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Obliteration: [FFAE00]3x[-] Pierce Rate Increase and ignores enemy Defense. Upon skill use, Crit Chance [FFAE00]+50%[-] per [FFAE00]each[-] stack of Dragon Power on self. Damage dealt increases by [FFAE00]30%[-] for [FFAE00]each[-] stack of Dragon Power on self.[-]",
              "idJeu": 1004703,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Tyrant's Roar\"",
          "image": "assets/1963501/images/icon_sao_dragon_ssr_type01_skill_02__540f152ad2e2baa1.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 100.0,
              "description": "Inflicts [00D5FF]Raging Gale[-] damage equal to 100 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage dealt [FFAE00]+50%[-] if the Dragon Rage effect is active on self.[-]",
              "idJeu": 1004711,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 150.0,
              "description": "Inflicts [00D5FF]Raging Gale[-] damage equal to 150 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage dealt [FFAE00]+50%[-] if the Dragon Rage effect is active on self.[-]",
              "idJeu": 1004712,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 250.0,
              "description": "Inflicts [00D5FF]Raging Gale[-] damage equal to 250 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage dealt [FFAE00]+50%[-] if the Dragon Rage effect is active on self.[-]",
              "idJeu": 1004713,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "\"Drago Nova\"",
        "image": "assets/1963501/images/icon_sao_dragon_ssr_type01_special_01__5dfb0eeed40ae3d3.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 350.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 350 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]3 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]40%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-LR-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 385.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 385 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]4 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]40%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-LR-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 420.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 420 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]4 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]70%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-LR-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 455.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 455 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]5 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]70%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-LR-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 490.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 490 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]5 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]100%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-LR-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 525.0,
            "description": "Removes all [00D5FF]Dragon Power[-] from the hero, applies [00D5FF]Dragon Rage[-] on the hero for [FFAE00]3 turns[-], then inflicts [00D5FF]Raging Gale[-] damage equal to 525 % of Attack on @target.allEnemies.\\n\\nWhile this [00D5FF]hero is in the battle[-], if an [00D5FF]ally hero dies[-] due to [00D5FF]enemy skill use[-] during the enemy's turn, or if an [00D5FF]enemy hero dies[-] due to [00D5FF]the effects of this hero's skill[-], this hero gains [FFAE00]1 stack[-] of [00D5FF]Dragon Rampage[-] for [FFAE00]each[-] fallen hero, up to a maximum of [FFAE00]6 stacks[-]. This effect lasts [FFAE00]3 turns[-].\\n\\n[00D5FF]※Raging Gale: [FFAE00]2x[-] Crit Damage Increase and ignores enemy Resistance. Skill damage [FFAE00]+50%[-] if the Dragon Rage effect is active on the hero.\\n※Dragon Rampage: [00D5FF]Single target skill damage[-] [FFAE00]+50%[-]. Additional damage equal to [FFAE00]100%[-] of the target's increased HP. (Does not stack.) Sets all incoming damage from attacks during the enemy's turn to [FFAE00]1[-]. Stack count decreases by [FFAE00]1[-] each time this [00D5FF]hero uses a skill[-] or this hero takes damage [00D5FF]from an enemy's skill use on the enemy's turn[-].",
            "cadre": "assets/skill-frames/ultimate-LR-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Supreme Power",
        "image": "assets/1963501/images/icon_exclusive_skill_1963501__39e1070d10765462.png",
        "description": "At the start of the battle, applies [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] on the hero, then [00D5FF]Dragon Protection[-] for [FFAE00]3 turns[-].\\nIncreases allies' Defense-related stats by [FFAE00]20%[-] for [FFAE00]each stack[-] of [00D5FF]Dragon Power[-] on self. [FFAE00]1[-] instance of [00D5FF]Dragon Power[-] is removed each time [00D5FF]an ally uses a skill[-] or [00D5FF]this hero takes damage[-] from an enemy's skill use on the enemy's turn.\\nAdditionally, all stats of the hero increase by [FFAE00]7%[-] each time a stack of [00D5FF]Dragon Power[-] is lost, up to a maximum of [FFAE00]28%[-]. Once all the instances are removed, [00D5FF]Dragon Rage[-] is applied to the hero for [FFAE00]3 turns[-]. When [00D5FF]Dragon Rage[-] expires, [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] are applied to the hero once again.\\n\\n[00D5FF]※Dragon Protection: Allies' damage taken from all-target attack skills [FFAE00]-40%[-].\\nThe hero becomes immune to stat decrease effects.\\n※Dragon Power: Applies Dragon Rage on self once all stacks are removed.\\n※Dragon Rage: Attack-related stats [FFAE00]+40%[-]. Ignores [FFAE00]100%[-] of the target's Crit Resistance. Inflicts additional damage equal to [FFAE00]40%[-] of the final damage when using all-target attack skills (except Ultimate Moves).[-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "At the start of the battle, applies [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] on the hero, then [00D5FF]Dragon Protection[-] for [FFAE00]3 turns[-].\\nIncreases allies' Defense-related stats by [FFAE00]20%[-] for [FFAE00]each stack[-] of [00D5FF]Dragon Power[-] on self. [FFAE00]1[-] instance of [00D5FF]Dragon Power[-] is removed each time [00D5FF]an ally uses a skill[-] or [00D5FF]this hero takes damage[-] from an enemy's skill use on the enemy's turn.\\nAdditionally, all stats of the hero increase by [FFAE00]7%[-] each time a stack of [00D5FF]Dragon Power[-] is lost, up to a maximum of [FFAE00]28%[-]. Once all the instances are removed, [00D5FF]Dragon Rage[-] is applied to the hero for [FFAE00]3 turns[-]. When [00D5FF]Dragon Rage[-] expires, [FFAE00]2 stacks[-] of [00D5FF]Dragon Power[-] are applied to the hero once again.\\n\\n[00D5FF]※Dragon Protection: Allies' damage taken from all-target attack skills [FFAE00]-40%[-].\\nThe hero becomes immune to stat decrease effects.\\n※Dragon Power: Applies Dragon Rage on self once all stacks are removed.\\n※Dragon Rage: Attack-related stats [FFAE00]+40%[-]. Ignores [FFAE00]100%[-] of the target's Crit Resistance. Inflicts additional damage equal to [FFAE00]40%[-] of the final damage when using all-target attack skills (except Ultimate Moves).[-]"
          }
        ]
      },
      "idForme": 325803,
      "portrait": "assets/1963501/images/icon_hero_sao_dragon_0002_s__e45ce78125f236aa.png",
      "portraitVertical": "assets/1963501/images/icon_skin_sao_dragon_0002_l__b759db1ceb04bfe1.png"
    }
  ],
  "costumes": [
    {
      "id": "3325801",
      "categorie": "Skin",
      "nom": "\"Whatever's Comfortable\"",
      "image": "assets/1963501/images/icon_skin_sao_dragon_0006_l__9855833541e5606b.png",
      "rarete": ""
    },
    {
      "id": "3325850",
      "categorie": "Skin",
      "nom": "Halloween Mummy",
      "image": "assets/1963501/images/icon_skin_sao_dragon_0003_l__ca4c80747babf159.png",
      "rarete": ""
    },
    {
      "id": "3325851",
      "categorie": "Skin",
      "nom": "Peerless Warrior",
      "image": "assets/1963501/images/icon_skin_sao_dragon_0004_l__bfd47726c71163b7.png",
      "rarete": ""
    },
    {
      "id": "3325852",
      "categorie": "Skin",
      "nom": "Sky Knight",
      "image": "assets/1963501/images/icon_skin_sao_dragon_0005_l__ce832bea14636801.png",
      "rarete": ""
    },
    {
      "id": "3325802",
      "categorie": "Skin",
      "nom": "Dragonian Clothing",
      "image": "assets/1963501/images/icon_skin_sao_dragon_0001_l__9c159d1ccb049a79.png",
      "rarete": ""
    },
    {
      "id": "3325803",
      "categorie": "Skin",
      "nom": "Tyrant of Destruction",
      "image": "assets/1963501/images/icon_skin_sao_dragon_0002_l__b759db1ceb04bfe1.png",
      "rarete": ""
    },
    {
      "id": "877901",
      "categorie": "Weapon",
      "nom": "Demonic Sword \"Heavenly Demon\"",
      "image": "assets/1963501/images/icon_weapon_sao_dragon_0001_l__5bb1c9cf1f1f080c.png",
      "rarete": ""
    },
    {
      "id": "877902",
      "categorie": "Weapon",
      "nom": "Sword of the Sands",
      "image": "assets/1963501/images/icon_weapon_sao_dragon_0003_l__ad7d2fe59a1d6bd3.png",
      "rarete": ""
    },
    {
      "id": "877903",
      "categorie": "Weapon",
      "nom": "Blade of Conviction",
      "image": "assets/1963501/images/icon_weapon_sao_dragon_0004_l__e92ce10d939ebc0b.png",
      "rarete": ""
    },
    {
      "id": "877904",
      "categorie": "Weapon",
      "nom": "Winged Blade",
      "image": "assets/1963501/images/icon_weapon_sao_dragon_0005_l__e0e1ebc6a0fd11f7.png",
      "rarete": ""
    },
    {
      "id": "877905",
      "categorie": "Weapon",
      "nom": "Ginnungagap's Galaxy Sword",
      "image": "assets/1963501/images/icon_weapon_sao_dragon_0001_l__5bb1c9cf1f1f080c.png",
      "rarete": ""
    },
    {
      "id": "4006801",
      "categorie": "Head",
      "nom": "\"The Usual\"",
      "image": "assets/1963501/images/icon_head_sao_dragon_0001_l__45cae2a979f1defc.png",
      "rarete": ""
    },
    {
      "id": "4006802",
      "categorie": "Head",
      "nom": "Mummy's Head Decoration",
      "image": "assets/1963501/images/icon_head_sao_dragon_0003_l__d6a6ff6179ffe3ad.png",
      "rarete": ""
    },
    {
      "id": "4006803",
      "categorie": "Head",
      "nom": "Warrior's Mindset",
      "image": "assets/1963501/images/icon_head_sao_dragon_0004_l__121f64c1e4d33ea0.png",
      "rarete": ""
    },
    {
      "id": "4006804",
      "categorie": "Head",
      "nom": "Winged Circlet",
      "image": "assets/1963501/images/icon_head_sao_dragon_0005_l__811c9fa97dfeb527.png",
      "rarete": ""
    },
    {
      "id": "4006805",
      "categorie": "Head",
      "nom": "Tyrant's Majesty",
      "image": "assets/1963501/images/icon_head_sao_dragon_0002_l__7b82080064ae92b0.png",
      "rarete": ""
    }
  ],
  "relique": {
    "nom": "Ginnungagap's Galaxy Sword",
    "image": "assets/1963501/images/icon_weapon_sao_dragon_0551_s__ee5e4c17a3cca4d3.png",
    "description": "Milim Nava's Holy Relic (Weapon).\\n[DC143C]A sword connected to Ginnungagap, the primordial void. This connection allows the user to tap into the power of the abyssal galaxy within Ginnungagap. Each swing is capable of splitting whole stars in two.[-]",
    "passif": {
      "nom": "Ginnungagap's Galaxy Sword",
      "image": "assets/commun/icon_setcostume_craft_001__d025bdbd539c2c8e.png",
      "description": "When using a skill it always deals damage as if it has an [00D5FF]attribute advantage[-], regardless of the target's attribute."
    },
    "bonus": [
      {
        "nom": "@stat.attack",
        "valeur": 450.0
      },
      {
        "nom": "@stat.defense",
        "valeur": 300.0
      },
      {
        "nom": "@stat.hp",
        "valeur": 4050.0
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
