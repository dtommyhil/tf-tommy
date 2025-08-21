import React, { useState, useMemo } from 'react';
import { Search, Zap } from 'lucide-react';
import { getAugmentTierColor, getCategoryColor } from '../utils/helpers';

const Augments = ({ augments }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAugmentTier, setSelectedAugmentTier] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredAugments = useMemo(() => {
    return augments.filter(augment => {
      const matchesSearch = augment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          augment.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTier = selectedAugmentTier === 'all' || augment.tier === selectedAugmentTier;
      const matchesCategory = selectedCategory === 'all' || augment.category === selectedCategory;
      return matchesSearch && matchesTier && matchesCategory;
    });
  }, [augments, searchQuery, selectedAugmentTier, selectedCategory]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search augments..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          value={selectedAugmentTier}
          onChange={(e) => setSelectedAugmentTier(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Tiers</option>
          <option value="Prismatic">Prismatic</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
        </select>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Categories</option>
          <option value="Combat">Combat</option>
          <option value="Economy">Economy</option>
          <option value="Utility">Utility</option>
        </select>
      </div>

      <div className="grid gap-4">
        {filteredAugments.map((augment, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{augment.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(augment.category)}`}>
                      {augment.category}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">{augment.description}</p>
                  <div className="text-sm text-gray-500">
                    Usually offered at stage {augment.stage}
                  </div>
                </div>
              </div>
              <div className={`px-4 py-2 rounded-lg border text-sm font-bold ${getAugmentTierColor(augment.tier)}`}>
                {augment.tier}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{augment.winRate}%</div>
                <div className="text-sm text-gray-500">Win Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{augment.playRate}%</div>
                <div className="text-sm text-gray-500">Pick Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{augment.avgPlacement}</div>
                <div className="text-sm text-gray-500">Avg Place</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Augments;