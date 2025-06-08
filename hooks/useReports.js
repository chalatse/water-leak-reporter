// hooks/useReports.js
import { useState, useEffect } from 'react';

export function useReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setReports([
        {
          id: 1,
          title: 'Street leak on Main Road',
          description: 'Large water leak near intersection',
          status: 'pending',
          severity: 'high'
        },
        {
          id: 2,
          title: 'Pipe burst in residential area',
          description: 'Water flooding the street',
          status: 'in-progress',
          severity: 'critical'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return { reports, loading };
}