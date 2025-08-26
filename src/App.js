import React, { useState } from 'react';
import { TrendingUp, Users, Sword, Shield, Zap, RefreshCw, AlertCircle } from 'lucide-react';
import Champions from './components/Champions';
import Compositions from './components/Compositions';
import Augments from './components/Augments';
import Items from './components/Items';
import { compositions, items } from './data/mockData';
import { useMetaData } from './hooks/useMetaData';
import './App.css';
import './animations.css';

function App() {
  const [activeTab, setActiveTab] = useState('champions');
  const { 
    champions, 
    augments, 
    loading, 
    error, 
    dataSource, 
    refreshData, 
    setError 
  } = useMetaData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-pulse-slow">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold gradient-text">TF Tommy</h1>
              {loading && (
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Loading real data...
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={refreshData}
                disabled={loading}
                className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 hover:text-blue-800 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh Data
              </button>
              <div className="text-sm text-gray-500 animate-fade-in-right">
                {dataSource} • Real TFT Data
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 animate-fade-in-down">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-yellow-400 mr-3" />
              <p className="text-yellow-700">{error}</p>
              <button
                onClick={() => setError(null)}
                className="ml-auto text-yellow-700 hover:text-yellow-900"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
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

        {/* Content Area */}
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