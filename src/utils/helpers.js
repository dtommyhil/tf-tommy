export const getTierColor = (tier) => {
  switch (tier) {
    case 'S': return 'text-red-500 bg-red-50 border-red-200';
    case 'A': return 'text-orange-500 bg-orange-50 border-orange-200';
    case 'B': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'C': return 'text-green-500 bg-green-50 border-green-200';
    default: return 'text-gray-500 bg-gray-50 border-gray-200';
  }
};

export const getAugmentTierColor = (tier) => {
  switch (tier) {
    case 'Prismatic': return 'text-purple-600 bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300';
    case 'Gold': return 'text-yellow-600 bg-gradient-to-r from-yellow-100 to-orange-100 border-yellow-300';
    case 'Silver': return 'text-gray-600 bg-gradient-to-r from-gray-100 to-slate-100 border-gray-300';
    default: return 'text-gray-500 bg-gray-50 border-gray-200';
  }
};

export const getCategoryColor = (category) => {
  switch (category) {
    case 'Combat': return 'text-red-600 bg-red-100';
    case 'Economy': return 'text-green-600 bg-green-100';
    case 'Utility': return 'text-blue-600 bg-blue-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

export const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy': return 'text-green-600 bg-green-100';
    case 'Medium': return 'text-yellow-600 bg-yellow-100';
    case 'Hard': return 'text-red-600 bg-red-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};