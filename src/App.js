import React, { useState } from 'react';
import { TrendingUp, Users, Sword, Shield, Zap } from 'lucide-react';
import Champions from './components/Champions';
import Compositions from './components/Compositions';
import Augments from './components/Augments';
import Items from './components/Items';
import { champions, compositions, augments, items } from './data/mockData';
import './App.css';
import './animations.css';

function App() {
  const [activeTab, setActiveTab] = useState('champions');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient animation */}
      <div className="bg-white shadow-sm border-b animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-slow">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold gradient-text">TF Tommy</h1>
            </div>
            <div className="text-sm text-gray-500 animate-fade-in-right">
              Patch 13.24 • Updated 2 hours ago
            </div>
          </div>
        </div>
      </div>

      {/* Navigation with hover effects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 animate-fade-in-left">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('champions')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 hover:scale-105 ${
                activeTab === 'champions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
                Champions
              </div>
            </button>
            <button
              onClick={() => setActiveTab('compositions')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 hover:scale-105 ${
                activeTab === 'compositions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
                Team Comps
              </div>
            </button>
            <button
              onClick={() => setActiveTab('augments')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 hover:scale-105 ${
                activeTab === 'augments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
                Augments
              </div>
            </button>
            <button
              onClick={() => setActiveTab('items')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 hover:scale-105 ${
                activeTab === 'items'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Sword className="w-4 h-4 transition-transform duration-200 hover:scale-110" />
                Items
              </div>
            </button>
          </nav>
        </div>

        {/* Content Area with tab switching animation */}
        <div className="tab-content">
          {activeTab === 'champions' && <Champions champions={champions} />}
          {activeTab === 'compositions' && <Compositions compositions={compositions} />}
          {activeTab === 'augments' && <Augments augments={augments} />}
          {activeTab === 'items' && <Items items={items} />}
        </div>
      </div>
    </div>
  );
}

export default App;