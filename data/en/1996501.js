window.fichePreparee={
  "nom": "Merlin & Escanor",
  "designation": "[Dusk's Oath]",
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
  "presentation": "[Dusk's Oath] Merlin & Escanor has a skill which deals additional damage proportional to final damage dealt.",
  "commandement": null,
  "talent": {
    "nom": "\"Lightning Flare\"",
    "image": "assets/1996501/images/icon_ability_1996501__52f48ff38aee01b7.png",
    "description": "[00D5FF]Removes all Buffs[-] from the battlefield, gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-] (limit [FFAE00]once[-]), applies [00D5FF]Flames of Annihilation[-] on all enemies for [FFAE00]1 turn[-], then uses the [00D5FF]Lightning Storm[-] skill.\\n[00D5FF](Ignores Skill Disable and Block)[-]\\n\\n[i][C0C0C0]※Flames of Annihilation: Damage taken [FFAE00]+30%[-], restricts Recovery-related stats.\\n※Lightning Storm: Inflicts damage equal to [FFAE00]100%[-] of Attack. Damage dealt [FFAE00]+10%[-] for [FFAE00]each[-] Buff removed.\\n(Up to [FFAE00]10 buffs[-])\\n(Cooldown: [FFAE00]3 turns[-])[/i][-]",
    "niveauxUltime": [
      {
        "niveau": 1,
        "description": "[00D5FF]Removes all Buffs[-] from the battlefield, gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-] (limit [FFAE00]once[-]), applies [00D5FF]Flames of Annihilation[-] on all enemies for [FFAE00]1 turn[-], then uses the [00D5FF]Lightning Storm[-] skill.\\n[00D5FF](Ignores Skill Disable and Block)[-]\\n\\n[i][C0C0C0]※Flames of Annihilation: Damage taken [FFAE00]+30%[-], restricts Recovery-related stats.\\n※Lightning Storm: Inflicts damage equal to [FFAE00]100%[-] of Attack. Damage dealt [FFAE00]+10%[-] for [FFAE00]each[-] Buff removed.\\n(Up to [FFAE00]10 buffs[-])\\n(Cooldown: [FFAE00]3 turns[-])[/i][-]"
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
      "legendeImage": "dual_me_0002",
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
          "nom": "\"Crystalline Javelin\"",
          "image": "assets/1996501/images/icon_dual_me_ssr_type01_skill_01__0b2dcf2754521c9f.png",
          "type": "@skill.attack",
          "cible": "@target.oneEnemy",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 200.0,
              "description": "Inflicts [00D5FF]Ice Explosion[-] damage equal to 200 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Ice Explosion: [FFAE00]5x[-] Pierce Rate Increase.\\n[FFAE00]2x[-] damage dealt against targets assuming a Stance.\\nAdditional damage equal to [FFAE00]1000%[-] of the initial Attack.\\nAdditional damage equal to [FFAE00]70%[-] of the final damage.\\n(Random damage on death)[-]",
              "idJeu": 1007601,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 2,
              "multiplicateur": 300.0,
              "description": "Inflicts [00D5FF]Ice Explosion[-] damage equal to 300 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Ice Explosion: [FFAE00]5x[-] Pierce Rate Increase.\\n[FFAE00]2x[-] damage dealt against targets assuming a Stance.\\nAdditional damage equal to [FFAE00]1000%[-] of the initial Attack.\\nAdditional damage equal to [FFAE00]70%[-] of the final damage.\\n(Random damage on death)[-]",
              "idJeu": 1007602,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk.png"
            },
            {
              "rang": 3,
              "multiplicateur": 500.0,
              "description": "Inflicts [00D5FF]Ice Explosion[-] damage equal to 500 % of Attack on @target.oneEnemy.\\n\\n[00D5FF]※Ice Explosion: [FFAE00]5x[-] Pierce Rate Increase.\\n[FFAE00]2x[-] damage dealt against targets assuming a Stance.\\nAdditional damage equal to [FFAE00]1000%[-] of the initial Attack.\\nAdditional damage equal to [FFAE00]70%[-] of the final damage.\\n(Random damage on death)[-]",
              "idJeu": 1007603,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk.png"
            }
          ]
        },
        {
          "id": "attaque-b",
          "nom": "\"Final Combustion\"",
          "image": "assets/1996501/images/icon_dual_me_ssr_type01_skill_02__4a16896276eb2738.png",
          "type": "@skill.attack",
          "cible": "@target.allEnemies",
          "rangs": [
            {
              "rang": 1,
              "multiplicateur": 180.0,
              "description": "Inflicts [00D5FF]Radiant Heat[-] damage equal to 180 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Radiant Heat: Increases damage dealt by 80 % of the hero duo's Pierce Rate.\\nAdditional damage equal to [FFAE00]25%[-] of the initial HP.[-]",
              "idJeu": 1007611,
              "cadre": "assets/skill-frames/rank-1.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 2,
              "multiplicateur": 270.0,
              "description": "Inflicts [00D5FF]Radiant Heat[-] damage equal to 270 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Radiant Heat: Increases damage dealt by 80 % of the hero duo's Pierce Rate.\\nAdditional damage equal to [FFAE00]25%[-] of the initial HP.[-]",
              "idJeu": 1007612,
              "cadre": "assets/skill-frames/rank-2.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            },
            {
              "rang": 3,
              "multiplicateur": 450.0,
              "description": "Inflicts [00D5FF]Radiant Heat[-] damage equal to 450 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Radiant Heat: Increases damage dealt by 80 % of the hero duo's Pierce Rate.\\nAdditional damage equal to [FFAE00]25%[-] of the initial HP.[-]",
              "idJeu": 1007613,
              "cadre": "assets/skill-frames/rank-3.png",
              "iconeType": "assets/skill-frames/atk_global.png"
            }
          ]
        }
      ],
      "ultime": {
        "nom": "Combined Attack \"Eternal Ember\"",
        "image": "assets/1996501/images/icon_dual_me_ssr_type01_special_01__226428d25908612c.png",
        "cible": "@target.allEnemies",
        "niveaux": [
          {
            "niveau": 1,
            "multiplicateur": 500.0,
            "description": "Applies [00D5FF]Infinite Space[-] on all allies for [FFAE00]1 turn[-], then inflicts [00D5FF]Radiant Heat[-] damage equal to 500 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Radiant Heat: Increases damage dealt by 80 % of the hero duo's Pierce Rate.\\nAdditional damage equal to [FFAE00]25%[-] of the initial HP.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-1.png"
          },
          {
            "niveau": 2,
            "multiplicateur": 550.0,
            "description": "Applies [00D5FF]Infinite Space[-] on all allies for [FFAE00]1 turn[-], gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Radiant Heat[-] damage equal to 550 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Radiant Heat: Increases damage dealt by 80 % of the hero duo's Pierce Rate.\\nAdditional damage equal to [FFAE00]25%[-] of the initial HP.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-2.png"
          },
          {
            "niveau": 3,
            "multiplicateur": 600.0,
            "description": "Applies [00D5FF]Infinite Space[-] on all allies for [FFAE00]1 turn[-], gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Radiant Heat[-] damage equal to 600 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Radiant Heat: Increases damage dealt by 80 % of the hero duo's Pierce Rate.\\nAdditional damage equal to [FFAE00]25%[-] of the initial HP.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-3.png"
          },
          {
            "niveau": 4,
            "multiplicateur": 650.0,
            "description": "Applies [00D5FF]Infinite Space[-] on all allies for [FFAE00]1 turn[-], gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Radiant Heat[-] damage equal to 650 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Radiant Heat: Increases damage dealt by 80 % of the hero duo's Pierce Rate.\\nAdditional damage equal to [FFAE00]25%[-] of the initial HP.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-4.png"
          },
          {
            "niveau": 5,
            "multiplicateur": 700.0,
            "description": "Applies [00D5FF]Infinite Space[-] on all allies for [FFAE00]1 turn[-], gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Radiant Heat[-] damage equal to 700 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Radiant Heat: Increases damage dealt by 80 % of the hero duo's Pierce Rate.\\nAdditional damage equal to [FFAE00]25%[-] of the initial HP.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-5.png"
          },
          {
            "niveau": 6,
            "multiplicateur": 750.0,
            "description": "Applies [00D5FF]Infinite Space[-] on all allies for [FFAE00]1 turn[-], gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-], then inflicts [00D5FF]Radiant Heat[-] damage equal to 750 % of Attack on @target.allEnemies.\\n\\n[00D5FF]※Radiant Heat: Increases damage dealt by 80 % of the hero duo's Pierce Rate.\\nAdditional damage equal to [FFAE00]25%[-] of the initial HP.[-]",
            "cadre": "assets/skill-frames/ultimate-normal-6.png"
          }
        ]
      },
      "passif": {
        "nom": "Undying Love",
        "image": "assets/1996501/images/icon_exclusive_skill_1996501__681d93737e771a86.png",
        "description": "Increases all stats of the hero duo by [FFAE00]5%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle. If the hero duo's HP is [FFAE00]50%[-] or higher, their [00D5FF]damage dealt[-] increases by [FF8000]80%[-] and [00D5FF]damage taken[-] decreases by [FFAE00]50%[-].\\n[i][C0C0C0]※Applicable Ally: Humans, Unknown races, [The Seven Deadly Sins][/i][-][/i][-]\\n\\nAt the start of the battle and when the hero duo uses skills [FFAE00]2 times[-] during the allies' turn (limit [FFAE00]once[-] per condition), the hero duo applies [00D5FF]Infinite Space[-] on [00D5FF][The Seven Deadly Sins] allies[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Infinite Space: Grants a barrier equal to [FF8000]40%[-] of the hero's initial HP.\\nOnly takes damage from basic stats.[/i][-][/i][-]\\n\\nIf [00D5FF]Infinite Space[-] is removed from the hero duo, they receive a [00D5FF][FFAE00]60%[-] damage suppression[-] for [FFAE00]1 turn[-].\\n\\nIf the hero duo uses a [00D5FF]single-target attack[-] to [00D5FF]defeat[-] an enemy, all enemies take damage equal to [FFAE00]50%[-] of the final damage dealt.\\n\\nWhen the hero duo [00D5FF]defeats an enemy[-] or when an [00D5FF]Applicable Ally dies[-] from a skill during the enemy's turn, the hero duo gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-]. [FF8000](Up to 4 time(s))[-]\\n[i][C0C0C0]※Flames of Obliteration: Attack-related stats [FFAE00]+50%[-], skill coefficients [FFAE00]+80%[-].\\nHP does not fall below [FFAE00]50%[-] (if applied while HP is below [FFAE00]50%[-], HP does not fall below that amount).\\nThe effect is removed when taking damage from the same enemy's skills [FFAE00]2 times[-].[/i][-][/i][-]",
        "niveauxUltime": [
          {
            "niveau": 1,
            "description": "Increases all stats of the hero duo by [FFAE00]5%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle. If the hero duo's HP is [FFAE00]50%[-] or higher, their [00D5FF]damage dealt[-] increases by [FF8000]60%[-] and [00D5FF]damage taken[-] decreases by [FFAE00]50%[-].\\n[i][C0C0C0]※Applicable Ally: Humans, Unknown races, [The Seven Deadly Sins][/i][-][/i][-]\\n\\nAt the start of the battle and when the hero duo uses skills [FFAE00]2 times[-] during the allies' turn (limit [FFAE00]once[-] per condition), the hero duo applies [00D5FF]Infinite Space[-] on [00D5FF][The Seven Deadly Sins] allies[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Infinite Space: Grants a barrier equal to [FF8000]30%[-] of the hero's initial HP.\\nOnly takes damage from basic stats.[/i][-][/i][-]\\n\\nIf [00D5FF]Infinite Space[-] is removed from the hero duo, they receive a [00D5FF][FFAE00]60%[-] damage suppression[-] for [FFAE00]1 turn[-].\\n\\nIf the hero duo uses a [00D5FF]single-target attack[-] to [00D5FF]defeat[-] an enemy, all enemies take damage equal to [FFAE00]50%[-] of the final damage dealt.\\n\\nWhen the hero duo [00D5FF]defeats an enemy[-] or when an [00D5FF]Applicable Ally dies[-] from a skill during the enemy's turn, the hero duo gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-]. [FF8000](Up to 1 time(s))[-]\\n[i][C0C0C0]※Flames of Obliteration: Attack-related stats [FFAE00]+50%[-], skill coefficients [FFAE00]+80%[-].\\nHP does not fall below [FFAE00]50%[-] (if applied while HP is below [FFAE00]50%[-], HP does not fall below that amount).\\nThe effect is removed when taking damage from the same enemy's skills [FFAE00]2 times[-].[/i][-][/i][-]"
          },
          {
            "niveau": 2,
            "description": "Increases all stats of the hero duo by [FFAE00]5%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle. If the hero duo's HP is [FFAE00]50%[-] or higher, their [00D5FF]damage dealt[-] increases by [FF8000]70%[-] and [00D5FF]damage taken[-] decreases by [FFAE00]50%[-].\\n[i][C0C0C0]※Applicable Ally: Humans, Unknown races, [The Seven Deadly Sins][/i][-][/i][-]\\n\\nAt the start of the battle and when the hero duo uses skills [FFAE00]2 times[-] during the allies' turn (limit [FFAE00]once[-] per condition), the hero duo applies [00D5FF]Infinite Space[-] on [00D5FF][The Seven Deadly Sins] allies[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Infinite Space: Grants a barrier equal to [FF8000]30%[-] of the hero's initial HP.\\nOnly takes damage from basic stats.[/i][-][/i][-]\\n\\nIf [00D5FF]Infinite Space[-] is removed from the hero duo, they receive a [00D5FF][FFAE00]60%[-] damage suppression[-] for [FFAE00]1 turn[-].\\n\\nIf the hero duo uses a [00D5FF]single-target attack[-] to [00D5FF]defeat[-] an enemy, all enemies take damage equal to [FFAE00]50%[-] of the final damage dealt.\\n\\nWhen the hero duo [00D5FF]defeats an enemy[-] or when an [00D5FF]Applicable Ally dies[-] from a skill during the enemy's turn, the hero duo gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-]. [FF8000](Up to 2 time(s))[-]\\n[i][C0C0C0]※Flames of Obliteration: Attack-related stats [FFAE00]+50%[-], skill coefficients [FFAE00]+80%[-].\\nHP does not fall below [FFAE00]50%[-] (if applied while HP is below [FFAE00]50%[-], HP does not fall below that amount).\\nThe effect is removed when taking damage from the same enemy's skills [FFAE00]2 times[-].[/i][-][/i][-]"
          },
          {
            "niveau": 3,
            "description": "Increases all stats of the hero duo by [FFAE00]5%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle. If the hero duo's HP is [FFAE00]50%[-] or higher, their [00D5FF]damage dealt[-] increases by [FF8000]70%[-] and [00D5FF]damage taken[-] decreases by [FFAE00]50%[-].\\n[i][C0C0C0]※Applicable Ally: Humans, Unknown races, [The Seven Deadly Sins][/i][-][/i][-]\\n\\nAt the start of the battle and when the hero duo uses skills [FFAE00]2 times[-] during the allies' turn (limit [FFAE00]once[-] per condition), the hero duo applies [00D5FF]Infinite Space[-] on [00D5FF][The Seven Deadly Sins] allies[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Infinite Space: Grants a barrier equal to [FF8000]40%[-] of the hero's initial HP.\\nOnly takes damage from basic stats.[/i][-][/i][-]\\n\\nIf [00D5FF]Infinite Space[-] is removed from the hero duo, they receive a [00D5FF][FFAE00]60%[-] damage suppression[-] for [FFAE00]1 turn[-].\\n\\nIf the hero duo uses a [00D5FF]single-target attack[-] to [00D5FF]defeat[-] an enemy, all enemies take damage equal to [FFAE00]50%[-] of the final damage dealt.\\n\\nWhen the hero duo [00D5FF]defeats an enemy[-] or when an [00D5FF]Applicable Ally dies[-] from a skill during the enemy's turn, the hero duo gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-]. [FF8000](Up to 2 time(s))[-]\\n[i][C0C0C0]※Flames of Obliteration: Attack-related stats [FFAE00]+50%[-], skill coefficients [FFAE00]+80%[-].\\nHP does not fall below [FFAE00]50%[-] (if applied while HP is below [FFAE00]50%[-], HP does not fall below that amount).\\nThe effect is removed when taking damage from the same enemy's skills [FFAE00]2 times[-].[/i][-][/i][-]"
          },
          {
            "niveau": 4,
            "description": "Increases all stats of the hero duo by [FFAE00]5%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle. If the hero duo's HP is [FFAE00]50%[-] or higher, their [00D5FF]damage dealt[-] increases by [FF8000]70%[-] and [00D5FF]damage taken[-] decreases by [FFAE00]50%[-].\\n[i][C0C0C0]※Applicable Ally: Humans, Unknown races, [The Seven Deadly Sins][/i][-][/i][-]\\n\\nAt the start of the battle and when the hero duo uses skills [FFAE00]2 times[-] during the allies' turn (limit [FFAE00]once[-] per condition), the hero duo applies [00D5FF]Infinite Space[-] on [00D5FF][The Seven Deadly Sins] allies[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Infinite Space: Grants a barrier equal to [FF8000]40%[-] of the hero's initial HP.\\nOnly takes damage from basic stats.[/i][-][/i][-]\\n\\nIf [00D5FF]Infinite Space[-] is removed from the hero duo, they receive a [00D5FF][FFAE00]60%[-] damage suppression[-] for [FFAE00]1 turn[-].\\n\\nIf the hero duo uses a [00D5FF]single-target attack[-] to [00D5FF]defeat[-] an enemy, all enemies take damage equal to [FFAE00]50%[-] of the final damage dealt.\\n\\nWhen the hero duo [00D5FF]defeats an enemy[-] or when an [00D5FF]Applicable Ally dies[-] from a skill during the enemy's turn, the hero duo gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-]. [FF8000](Up to 3 time(s))[-]\\n[i][C0C0C0]※Flames of Obliteration: Attack-related stats [FFAE00]+50%[-], skill coefficients [FFAE00]+80%[-].\\nHP does not fall below [FFAE00]50%[-] (if applied while HP is below [FFAE00]50%[-], HP does not fall below that amount).\\nThe effect is removed when taking damage from the same enemy's skills [FFAE00]2 times[-].[/i][-][/i][-]"
          },
          {
            "niveau": 5,
            "description": "Increases all stats of the hero duo by [FFAE00]5%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle. If the hero duo's HP is [FFAE00]50%[-] or higher, their [00D5FF]damage dealt[-] increases by [FF8000]80%[-] and [00D5FF]damage taken[-] decreases by [FFAE00]50%[-].\\n[i][C0C0C0]※Applicable Ally: Humans, Unknown races, [The Seven Deadly Sins][/i][-][/i][-]\\n\\nAt the start of the battle and when the hero duo uses skills [FFAE00]2 times[-] during the allies' turn (limit [FFAE00]once[-] per condition), the hero duo applies [00D5FF]Infinite Space[-] on [00D5FF][The Seven Deadly Sins] allies[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Infinite Space: Grants a barrier equal to [FF8000]40%[-] of the hero's initial HP.\\nOnly takes damage from basic stats.[/i][-][/i][-]\\n\\nIf [00D5FF]Infinite Space[-] is removed from the hero duo, they receive a [00D5FF][FFAE00]60%[-] damage suppression[-] for [FFAE00]1 turn[-].\\n\\nIf the hero duo uses a [00D5FF]single-target attack[-] to [00D5FF]defeat[-] an enemy, all enemies take damage equal to [FFAE00]50%[-] of the final damage dealt.\\n\\nWhen the hero duo [00D5FF]defeats an enemy[-] or when an [00D5FF]Applicable Ally dies[-] from a skill during the enemy's turn, the hero duo gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-]. [FF8000](Up to 3 time(s))[-]\\n[i][C0C0C0]※Flames of Obliteration: Attack-related stats [FFAE00]+50%[-], skill coefficients [FFAE00]+80%[-].\\nHP does not fall below [FFAE00]50%[-] (if applied while HP is below [FFAE00]50%[-], HP does not fall below that amount).\\nThe effect is removed when taking damage from the same enemy's skills [FFAE00]2 times[-].[/i][-][/i][-]"
          },
          {
            "niveau": 6,
            "description": "Increases all stats of the hero duo by [FFAE00]5%[-] for [FFAE00]each[-] [00D5FF]Applicable Ally[-] participating in battle. If the hero duo's HP is [FFAE00]50%[-] or higher, their [00D5FF]damage dealt[-] increases by [FF8000]80%[-] and [00D5FF]damage taken[-] decreases by [FFAE00]50%[-].\\n[i][C0C0C0]※Applicable Ally: Humans, Unknown races, [The Seven Deadly Sins][/i][-][/i][-]\\n\\nAt the start of the battle and when the hero duo uses skills [FFAE00]2 times[-] during the allies' turn (limit [FFAE00]once[-] per condition), the hero duo applies [00D5FF]Infinite Space[-] on [00D5FF][The Seven Deadly Sins] allies[-] for [FFAE00]1 turn[-].\\n[i][C0C0C0]※Infinite Space: Grants a barrier equal to [FF8000]40%[-] of the hero's initial HP.\\nOnly takes damage from basic stats.[/i][-][/i][-]\\n\\nIf [00D5FF]Infinite Space[-] is removed from the hero duo, they receive a [00D5FF][FFAE00]60%[-] damage suppression[-] for [FFAE00]1 turn[-].\\n\\nIf the hero duo uses a [00D5FF]single-target attack[-] to [00D5FF]defeat[-] an enemy, all enemies take damage equal to [FFAE00]50%[-] of the final damage dealt.\\n\\nWhen the hero duo [00D5FF]defeats an enemy[-] or when an [00D5FF]Applicable Ally dies[-] from a skill during the enemy's turn, the hero duo gains [00D5FF]Flames of Obliteration[-] for [FFAE00]2 turns[-]. [FF8000](Up to 4 time(s))[-]\\n[i][C0C0C0]※Flames of Obliteration: Attack-related stats [FFAE00]+50%[-], skill coefficients [FFAE00]+80%[-].\\nHP does not fall below [FFAE00]50%[-] (if applied while HP is below [FFAE00]50%[-], HP does not fall below that amount).\\nThe effect is removed when taking damage from the same enemy's skills [FFAE00]2 times[-].[/i][-][/i][-]"
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
      "nom": "Never-ending Sun",
      "image": "assets/1996501/images/icon_skin_dual_me_0002_l__a711b2dcf734ec6e.png",
      "rarete": ""
    },
    {
      "id": "3328554",
      "categorie": "Skin",
      "nom": "Server & Bartender",
      "image": "assets/1996501/images/icon_skin_dual_me_0008_l__78c95cd5ab2526b2.png",
      "rarete": ""
    },
    {
      "id": "3328550",
      "categorie": "Skin",
      "nom": "Demonic Covenant",
      "image": "assets/1996501/images/icon_skin_dual_me_0003_l__aef723025e7531b8.png",
      "rarete": ""
    },
    {
      "id": "3328551",
      "categorie": "Skin",
      "nom": "Mystical Exorcist",
      "image": "assets/1996501/images/icon_skin_dual_me_0004_l__c84bdaab5f31a17b.png",
      "rarete": ""
    },
    {
      "id": "3328552",
      "categorie": "Skin",
      "nom": "Magical Circus of the Sun",
      "image": "assets/1996501/images/icon_skin_dual_me_0005_l__5f747d55e02681b1.png",
      "rarete": ""
    },
    {
      "id": "3328553",
      "categorie": "Skin",
      "nom": "Bittersweet Fashion",
      "image": "assets/1996501/images/icon_skin_dual_me_0006_l__b4a52efe43e3b77e.png",
      "rarete": ""
    },
    {
      "id": "3328555",
      "categorie": "Skin",
      "nom": "Story of the Stars",
      "image": "assets/1996501/images/icon_skin_dual_me_0007_l__dfe3f208883a493e.png",
      "rarete": ""
    },
    {
      "id": "3328502",
      "categorie": "Skin",
      "nom": "Final Flame",
      "image": "assets/1996501/images/icon_skin_dual_me_0001_l__35b04d4573fd3ffa.png",
      "rarete": ""
    },
    {
      "id": "880701",
      "categorie": "Weapon",
      "nom": "Morning Star Aldan",
      "image": "assets/1996501/images/icon_weapon_dual_me_0001_l__9255d1f41981a5f2.png",
      "rarete": ""
    },
    {
      "id": "880702",
      "categorie": "Weapon",
      "nom": "Demonic Heart",
      "image": "assets/1996501/images/icon_weapon_dual_me_0003_l__89c0a633f2b0c407.png",
      "rarete": ""
    },
    {
      "id": "880703",
      "categorie": "Weapon",
      "nom": "Fox Bead",
      "image": "assets/1996501/images/icon_weapon_dual_me_0004_l__75ed5c83e7f80649.png",
      "rarete": ""
    },
    {
      "id": "880704",
      "categorie": "Weapon",
      "nom": "Circus Ringmaster's Hat",
      "image": "assets/1996501/images/icon_weapon_dual_me_0005_l__268337f5aea5bcfd.png",
      "rarete": ""
    },
    {
      "id": "880705",
      "categorie": "Weapon",
      "nom": "Bittersweet Heart",
      "image": "assets/1996501/images/icon_weapon_dual_me_0006_l__ee37e17c228d601b.png",
      "rarete": ""
    },
    {
      "id": "880706",
      "categorie": "Weapon",
      "nom": "Power of Aries",
      "image": "assets/1996501/images/icon_weapon_dual_me_0007_l__25858f37dd70fdca.png",
      "rarete": ""
    },
    {
      "id": "4009601",
      "categorie": "Head",
      "nom": "Final Trace",
      "image": "assets/1996501/images/icon_head_dual_me_0001_l__a145fa0bea278d32.png",
      "rarete": ""
    },
    {
      "id": "4009607",
      "categorie": "Head",
      "nom": "Best Buddies Headband",
      "image": "assets/1996501/images/icon_head_dual_me_0009_l__a919ce39f37a0298.png",
      "rarete": ""
    },
    {
      "id": "4009608",
      "categorie": "Head",
      "nom": "Emblem Halo",
      "image": "assets/1996501/images/icon_head_dual_me_0010_l__2987f65c56323f1a.png",
      "rarete": ""
    },
    {
      "id": "4009602",
      "categorie": "Head",
      "nom": "Demonic Soul",
      "image": "assets/1996501/images/icon_head_dual_me_0003_l__930d2ced43ef75d7.png",
      "rarete": ""
    },
    {
      "id": "4009603",
      "categorie": "Head",
      "nom": "Diviner and Zen Master",
      "image": "assets/1996501/images/icon_head_dual_me_0004_l__030b44a7cf51c1c0.png",
      "rarete": ""
    },
    {
      "id": "4009604",
      "categorie": "Head",
      "nom": "Beauty and the Beast",
      "image": "assets/1996501/images/icon_head_dual_me_0005_l__74fd0f6525c15897.png",
      "rarete": ""
    },
    {
      "id": "4009606",
      "categorie": "Head",
      "nom": "Bittersweet Eyes",
      "image": "assets/1996501/images/icon_head_dual_me_0006_l__2ac1891a5b202025.png",
      "rarete": ""
    },
    {
      "id": "4009609",
      "categorie": "Head",
      "nom": "Myth of Aries",
      "image": "assets/1996501/images/icon_head_dual_me_0007_l__7b3da5ab5c812ca3.png",
      "rarete": ""
    },
    {
      "id": "4009605",
      "categorie": "Head",
      "nom": "Boar and Lion",
      "image": "assets/1996501/images/icon_head_dual_me_0501_l__0f7b6424d8cbd74e.png",
      "rarete": ""
    }
  ],
  "relique": null
};
