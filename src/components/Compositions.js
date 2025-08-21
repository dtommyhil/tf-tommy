import React, { useState, useMemo } from 'react';
import { getDifficultyColor } from '../utils/helpers';

const Compositions = ({ compositions }) => {
  const [sortBy, setSortBy] = useState('winRate');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedCompositions = useMemo(() => {
    let sorted = [...compositions];
    
    sorted.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortOrder === 'desc') {
        return bValue - aValue;
      } else {
        return aValue - bValue;
      }
    });

    return sorted;
  }, [compositions, sortBy, sortOrder]);

  return (
    <div className="space-y-4">
      {/* Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="winRate">Sort by Win Rate</option>
          <option value="playRate">Sort by Play Rate</option>
          <option value="avgPlacement">Sort by Avg Placement</option>
        </select>

        <button
          onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
        >
          {sortOrder === 'desc' ? '↓ High to Low' : '↑ Low to High'}
        </button>
      </div>

      {/* Compositions List */}
      <div className="space-y-4">
        {sortedCompositions.map((comp, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{comp.name}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {comp.traits.map((trait, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(comp.difficulty)}`}>
                {comp.difficulty}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{comp.winRate}%</div>
                <div className="text-sm text-gray-500">Win Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{comp.playRate}%</div>
                <div className="text-sm text-gray-500">Play Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{comp.avgPlacement}</div>
                <div className="text-sm text-gray-500">Avg Place</div>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-2">Key Units:</div>
              <div className="flex flex-wrap gap-2">
                {comp.keyUnits.map((unit, i) => (
                  <span key={i} className="px-3 py-2 bg-gray-100 text-gray-800 text-sm rounded-lg font-medium">
                    {unit}
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

export default Compositions;