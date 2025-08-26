import { useState, useEffect } from 'react';
import { metaApi } from '../services/metaApi';
import { champions as mockChampions, augments as mockAugments, compositions, items } from '../data/mockData';

export const useMetaData = () => {
  const [champions, setChampions] = useState(mockChampions);
  const [augments, setAugments] = useState(mockAugments);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState('mock');

  const fetchMetaData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      console.log('🚀 Fetching real meta data...');

      const realChampions = await metaApi.getChampionsWithMeta();
      if (realChampions && realChampions.length > 0) {
        setChampions(realChampions);
        setDataSource('community-dragon + meta');
        console.log(`Loaded ${realChampions.length} champions with meta data`);
      }
      
      try {
        const realAugments = await metaApi.getAugmentsWithMeta();
        if (realAugments && realAugments.length > 0) {
          setAugments(realAugments);
          console.log(`Loaded ${realAugments.length} augments`);
        }
      } catch (augmentError) {
        console.log('Using mock augment data');
      }
      
    } catch (err) {
      console.error('Meta data fetch failed:', err);
      setError('Unable to fetch real-time data. Using cached data.');
      setDataSource('mock (fallback)');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetaData();
  }, []);

  return {
    champions,
    augments,
    compositions, // using mock for now
    items, // using mock for now
    loading,
    error,
    dataSource,
    refreshData: fetchMetaData,
    setError
  };
};