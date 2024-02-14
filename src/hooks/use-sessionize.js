import { useEffect, useState, useCallback } from 'react';

import endpoints from 'constants/sessionize';

export default function useSessionize(
  getSessions = false,
  getSpeakers = false,
  getAcceptedSpeakers = false
) {
  const [sessions, setSessions] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [topSpeakers, setTopSpeakers] = useState([]);
  const [acceptedSpeakers, setAcceptedSpeakers] = useState([]);
  const [error, setError] = useState(null);

  const fetchSessions = useCallback(async () => {
    try {
      const response = await fetch(endpoints.sessions);

      if (response.ok) {
        const data = await response.json();

        if (data.length) {
          setSessions(data[0].sessions);
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
    if (getSessions) {
      fetchSessions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSessions]);

  useEffect(() => {
    if (getSpeakers) {
      fetchSpeakers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSpeakers]);

  useEffect(() => {
    if (getAcceptedSpeakers && sessions.length && speakers.length) {
      const filteredSessions = sessions
        .filter(({ status }) => status === 'Accepted')
        .map(({ id }) => id);
      setAcceptedSpeakers(
        speakers.filter((speaker) =>
          speaker.sessions.some((session) => filteredSessions.includes(String(session.id)))
        )
      );
    }
  }, [getAcceptedSpeakers, sessions, speakers]);

  return { sessions, speakers, topSpeakers, acceptedSpeakers, error };
}
