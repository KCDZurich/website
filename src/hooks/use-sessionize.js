import { useEffect, useState, useCallback } from 'react';

import endpoints from 'constants/sessionize';

export default function useSessionize({
  getGrid = false,
  getSessions = false,
  getTopSpeakers = false,
  getAcceptedSpeakers = false,
}) {
  const [grid, setGrid] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [topSpeakers, setTopSpeakers] = useState([]);
  const [acceptedSpeakers, setAcceptedSpeakers] = useState([]);
  const [error, setError] = useState(null);

  const fetchGrid = useCallback(async () => {
    try {
      const response = await fetch(endpoints.grid);

      if (response.ok) {
        const data = await response.json();

        if (data.length) {
          setGrid(data[0].rooms);
        }
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSessions = useCallback(async () => {
    try {
      const response = await fetch(endpoints.sessions);

      if (response.ok) {
        const data = await response.json();

        if (data.length) {
          setSessions(data[0].sessions.filter(({ status }) => status === 'Accepted'));
        }
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSpeakers = useCallback(async () => {
    try {
      const response = await fetch(endpoints.speakers);

      if (response.ok) {
        const data = await response.json();
        setSpeakers(data);
        setTopSpeakers(data.filter(({ isTopSpeaker }) => isTopSpeaker).slice(0, 8));
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      setError(error.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (getGrid) {
      fetchGrid();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchGrid]);

  useEffect(() => {
    if (getSessions || getAcceptedSpeakers) {
      fetchSessions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSessions]);

  useEffect(() => {
    if (getTopSpeakers || getAcceptedSpeakers) {
      fetchSpeakers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSpeakers]);

  useEffect(() => {
    if (getAcceptedSpeakers && sessions.length && speakers.length) {
      const filteredSessions = sessions.map(({ id }) => id);
      setAcceptedSpeakers(
        speakers.filter((speaker) =>
          speaker.sessions.some((session) => filteredSessions.includes(String(session.id)))
        )
      );
    }
  }, [getAcceptedSpeakers, sessions, speakers]);

  return { grid, sessions, topSpeakers, acceptedSpeakers, error };
}
