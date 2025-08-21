export const champions = [
  {
    name: "Jinx",
    cost: 4,
    traits: ["Rebel", "Blaster"],
    winRate: 67.5,
    playRate: 23.4,
    avgPlacement: 3.2,
    items: ["Giant Slayer", "Last Whisper", "Runaan's Hurricane"],
    tier: "S"
  },
  {
    name: "Kayle",
    cost: 5,
    traits: ["Divine", "Legionnaire"],
    winRate: 71.2,
    playRate: 18.7,
    avgPlacement: 2.8,
    items: ["Guinsoo's Rageblade", "Hextech Gunblade", "Guardian Angel"],
    tier: "S"
  },
  {
    name: "Aphelios",
    cost: 4,
    traits: ["Nightbringer", "Ranger"],
    winRate: 64.8,
    playRate: 19.2,
    avgPlacement: 3.4,
    items: ["Infinity Edge", "Last Whisper", "Bloodthirster"],
    tier: "A"
  },
  {
    name: "Vel'Koz",
    cost: 4,
    traits: ["Forgotten", "Invoker"],
    winRate: 62.1,
    playRate: 15.6,
    avgPlacement: 3.6,
    items: ["Jeweled Gauntlet", "Spear of Shojin", "Archangel's Staff"],
    tier: "A"
  },
  {
    name: "Garen",
    cost: 5,
    traits: ["Draconic", "Knight"],
    winRate: 59.3,
    playRate: 12.8,
    avgPlacement: 3.8,
    items: ["Warmog's Armor", "Dragon's Claw", "Bramble Vest"],
    tier: "B"
  },
  {
    name: "Yasuo",
    cost: 5,
    traits: ["Nightbringer", "Legionnaire"],
    winRate: 58.7,
    playRate: 11.4,
    avgPlacement: 4.1,
    items: ["Infinity Edge", "Quicksilver", "Bloodthirster"],
    tier: "B"
  }
];

export const compositions = [
  {
    name: "6 Forgotten",
    traits: ["6 Forgotten", "2 Ranger", "2 Invoker"],
    winRate: 69.4,
    playRate: 8.7,
    avgPlacement: 3.1,
    difficulty: "Medium",
    keyUnits: ["Vel'Koz", "Hecarim", "Thresh", "Viego"]
  },
  {
    name: "4 Divine",
    traits: ["4 Divine", "2 Legionnaire", "2 Invoker"],
    winRate: 71.8,
    playRate: 12.3,
    avgPlacement: 2.9,
    difficulty: "Hard",
    keyUnits: ["Kayle", "Volibear", "Jax", "Soraka"]
  },
  {
    name: "4 Nightbringer",
    traits: ["4 Nightbringer", "2 Ranger", "2 Legionnaire"],
    winRate: 65.2,
    playRate: 15.1,
    avgPlacement: 3.3,
    difficulty: "Easy",
    keyUnits: ["Aphelios", "Yasuo", "Lee Sin", "Sejuani"]
  },
  {
    name: "6 Draconic",
    traits: ["6 Draconic", "3 Knight"],
    winRate: 58.9,
    playRate: 6.4,
    avgPlacement: 3.9,
    difficulty: "Hard",
    keyUnits: ["Heimerdinger", "Garen", "Sett", "Udyr"]
  }
];

export const augments = [
  {
    name: "Cybernetic Uplink",
    tier: "Gold",
    description: "Your champions holding an item gain 50 Health and 5% Attack Speed.",
    winRate: 74.2,
    playRate: 12.8,
    avgPlacement: 3.1,
    stage: "2-1",
    category: "Combat"
  },
  {
    name: "Component Grab Bag",
    tier: "Silver",
    description: "Gain 2 random components.",
    winRate: 68.9,
    playRate: 28.4,
    avgPlacement: 3.4,
    stage: "1-4",
    category: "Economy"
  },
  {
    name: "Thrill of the Hunt",
    tier: "Gold",
    description: "Your team gains 15% Attack Speed. Takedowns grant an additional 2% Attack Speed.",
    winRate: 72.6,
    playRate: 9.7,
    avgPlacement: 3.0,
    stage: "3-2",
    category: "Combat"
  },
  {
    name: "Rich Get Richer",
    tier: "Silver",
    description: "Gain 1 gold. Your max interest is increased to 7.",
    winRate: 65.3,
    playRate: 18.6,
    avgPlacement: 3.6,
    stage: "2-1",
    category: "Economy"
  },
  {
    name: "Hyper Roll",
    tier: "Prismatic",
    description: "Reduce the cost of rolling by 1 gold. Gain 3 free refreshes now.",
    winRate: 76.4,
    playRate: 4.1,
    avgPlacement: 2.8,
    stage: "4-2",
    category: "Economy"
  },
  {
    name: "Triforce",
    tier: "Prismatic",
    description: "Your 3-star champions gain 77 Attack Damage, 77 Ability Power, and 777 Health.",
    winRate: 78.9,
    playRate: 3.2,
    avgPlacement: 2.5,
    stage: "4-2",
    category: "Combat"
  }
];

export const items = [
  {
    name: "Infinity Edge",
    components: ["B.F. Sword", "Glove"],
    winRate: 68.3,
    playRate: 32.1,
    bestCarriers: ["Jinx", "Aphelios", "Yasuo"]
  },
  {
    name: "Guinsoo's Rageblade",
    components: ["Recurve Bow", "Needlessly Large Rod"],
    winRate: 72.1,
    playRate: 28.7,
    bestCarriers: ["Kayle", "Varus", "Ashe"]
  },
  {
    name: "Jeweled Gauntlet",
    components: ["Needlessly Large Rod", "Glove"],
    winRate: 65.4,
    playRate: 24.3,
    bestCarriers: ["Vel'Koz", "Brand", "Karma"]
  },
  {
    name: "Guardian Angel",
    components: ["B.F. Sword", "Chain Vest"],
    winRate: 63.8,
    playRate: 41.2,
    bestCarriers: ["Kayle", "Jinx", "Garen"]
  }
];