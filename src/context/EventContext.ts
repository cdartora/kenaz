import { createContext } from "react";
import type { Event } from "../components/Events/event";

type IEventContext = {
  events: Event[];
  isLoading: boolean;
};

const EventContext = createContext<IEventContext>({} as IEventContext);

export default EventContext;
