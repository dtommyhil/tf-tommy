import React from 'react';
import { Sword } from 'lucide-react';

const Items = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Sword className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
              <div className="text-sm text-gray-600 mt-1">
                {item.components.join(' + ')}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{item.winRate}%</div>
              <div className="text-sm text-gray-500">Win Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{item.playRate}%</div>
              <div className="text-sm text-gray-500">Play Rate</div>
            </div>
          </div>
          
          <div>
            <div className="text-sm text-gray-600 mb-2">Best Carriers:</div>
            <div className="flex flex-wrap gap-2">
              {item.bestCarriers.map((carrier, i) => (
                <span key={i} className="px-3 py-2 bg-gray-100 text-gray-800 text-sm rounded-lg font-medium">
                  {carrier}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;