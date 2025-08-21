import React, { useState, useMemo } from 'react';
import { Search, Star } from 'lucide-react';
import { getTierColor } from '../utils/helpers';

const Champions = ({ champions }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState('all');

  // Filter champions based on search and tier selection
  const filteredChampions = useMemo(() => {
    return champions.filter(champion => {
      const matchesSearch = champion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          champion.traits.some(trait => trait.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTier = selectedTier === 'all' || champion.tier === selectedTier;
      return matchesSearch && matchesTier;
    });
  }, [champions, searchQuery, selectedTier]);

  return (
    <div className="space-y-4">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search champions or traits..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          value={selectedTier}
          onChange={(e) => setSelectedTier(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Tiers</option>
          <option value="S">S Tier</option>
          <option value="A">A Tier</option>
          <option value="B">B Tier</option>
          <option value="C">C Tier</option>
        </select>
      </div>

      {/* Champions List */}
      <div className="grid gap-4">
        {filteredChampions.map((champion, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {champion.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{champion.name}</h3>
                    <div className="flex">
                      {[...Array(champion.cost)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {champion.traits.map((trait, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getTierColor(champion.tier)}`}>
                {champion.tier} Tier
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{champion.winRate}%</div>
                <div className="text-sm text-gray-500">Win Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{champion.playRate}%</div>
                <div className="text-sm text-gray-500">Play Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{champion.avgPlacement}</div>
                <div className="text-sm text-gray-500">Avg Place</div>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-2">Recommended Items:</div>
              <div className="flex flex-wrap gap-2">
                {champion.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Champions;