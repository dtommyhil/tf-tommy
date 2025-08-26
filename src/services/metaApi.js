// src/services/metaApi.js
import axios from 'axios';

// Community Dragon for static data (always works)
const COMMUNITY_DRAGON_BASE = 'https://raw.communitydragon.org/latest/cdragon/tft';

export const metaApi = {
  // Get current set champions with real meta data
  async getChampionsWithMeta() {
    try {
      // Step 1: Get static champion data (always reliable)
      console.log('Fetching champion static data...');
      const staticData = await this.getStaticChampionData();
      
      // Step 2: Try to get meta stats from available sources
      console.log('Fetching meta statistics...');
      const metaStats = await this.getMetaStatistics();
      
      // Step 3: Combine static + meta data
      return this.combineChampionData(staticData, metaStats);
      
    } catch (error) {
      console.error('Error fetching champion meta data:', error);
      throw error;
    }
  },

  async getStaticChampionData() {
    try {
      const response = await axios.get(`${COMMUNITY_DRAGON_BASE}/en_us.json`);
      const setData = response.data;
      
      // Get the current set (latest)
      const currentSetId = Math.max(...Object.keys(setData.sets).map(Number));
      const currentSet = setData.sets[currentSetId];
      
      if (!currentSet?.champions) {
        throw new Error('No champion data found');
      }

      return Object.values(currentSet.champions).map(champion => ({
        id: champion.apiName || champion.name.toLowerCase().replace(/\s+/g, ''),
        name: champion.name,
        cost: champion.cost,
        traits: champion.traits || [],
        icon: champion.squareIcon || '',
        // We'll fill in stats from meta sources
        winRate: null,
        playRate: null,
        avgPlacement: null,
        tier: null
      }));
      
    } catch (error) {
      console.error('Failed to fetch static champion data:', error);
      throw error;
    }
  },

  async getMetaStatistics() {
    // For now, return null to use realistic mock data
    console.log('Using realistic mock statistics');
    return null;
  },

  combineChampionData(staticChampions, metaStats) {
    return staticChampions.map(champion => {
      // Since metaStats is null, use realistic mock data
      return {
        ...champion,
        winRate: this.generateRealisticWinRate(champion.cost),
        playRate: this.generateRealisticPlayRate(champion.cost),
        avgPlacement: this.generateRealisticPlacement(champion.cost),
        tier: this.calculateTierFromCost(champion.cost),
        items: this.getRecommendedItems(champion)
      };
    });
  },

  // Realistic data generation
  generateRealisticWinRate(cost) {
    const baselines = { 1: 45, 2: 50, 3: 55, 4: 62, 5: 68 };
    const base = baselines[cost] || 50;
    return +(base + (Math.random() * 8 - 4)).toFixed(1); // ±4% variance
  },

  generateRealisticPlayRate(cost) {
    const baselines = { 1: 35, 2: 28, 3: 22, 4: 18, 5: 12 };
    const base = baselines[cost] || 20;
    return +(base + (Math.random() * 10 - 5)).toFixed(1);
  },

  generateRealisticPlacement(cost) {
    const baselines = { 1: 4.2, 2: 3.9, 3: 3.6, 4: 3.3, 5: 3.0 };
    const base = baselines[cost] || 4.0;
    return +(base + (Math.random() * 0.6 - 0.3)).toFixed(1);
  },

  calculateTierFromCost(cost) {
    if (cost >= 5) return 'S';
    if (cost >= 4) return 'A';
    if (cost >= 3) return 'B';
    return 'C';
  },

  getRecommendedItems(champion) {
    // Basic item recommendations based on traits/cost
    const items = [];
    
    if (champion.traits.includes('Marksman') || champion.traits.includes('Gunner')) {
      items.push('Infinity Edge', 'Last Whisper', 'Giant Slayer');
    } else if (champion.traits.includes('Mage') || champion.traits.includes('Sorcerer')) {
      items.push('Jeweled Gauntlet', 'Archangel\'s Staff', 'Morellonomicon');
    } else if (champion.cost >= 4) {
      items.push('Guardian Angel', 'Hextech Gunblade', 'Guinsoo\'s Rageblade');
    } else {
      items.push('Chain Vest', 'Magic Resist', 'Warmog\'s Armor');
    }
    
    return items.slice(0, 3);
  },

  // Simple augment mock for now
  async getAugmentsWithMeta() {
    return [
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
        name: "Hyper Roll",
        tier: "Prismatic",
        description: "Reduce the cost of rolling by 1 gold. Gain 3 free refreshes now.",
        winRate: 76.4,
        playRate: 4.1,
        avgPlacement: 2.8,
        stage: "4-2",
        category: "Economy"
      }
    ];
  }
};