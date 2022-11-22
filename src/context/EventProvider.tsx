import { PropsWithChildren, useEffect, useState } from "react";
import { requestEvents } from "../services/requests";
import EventContext from "./EventContext";

function EventProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const data = await requestEvents();
    console.log("--------------------events--------------------", data);
    setEvents(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { events, isLoading };

  return (
    <EventContext.Provider value={value}>{children}</EventContext.Provider>
  );
}

export default EventProvider;
