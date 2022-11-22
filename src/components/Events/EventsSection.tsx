import { useContext } from "react";
import EventContext from "../../context/EventContext";

function EventsSection() {
  const { events } = useContext(EventContext);

  return <div>Events</div>;
}

export default EventsSection;
