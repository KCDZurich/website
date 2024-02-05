import { useEffect, useState, useCallback } from 'react';

import endpoints from 'constants/sessionize';

export default function useSpeakers(topSpeakers = false) {
  const [speakers, setSpeakers] = useState([]);
  const [error, setError] = useState(null);

  const fetchSpeakers = useCallback(async () => {
    try {
      const response = await fetch(endpoints.speakers);

      if (response.ok) {
        const data = await response.json();
        setSpeakers(topSpeakers ? data.filter(({ isTopSpeaker }) => isTopSpeaker) : data);
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchSpeakers();
  }, [fetchSpeakers]);

  return { speakers, error };
}
