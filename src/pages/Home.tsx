import BooksSection from "../components/Books/BooksSection";
import EventsSection from "../components/Events/EventsSection";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <BooksSection />
      <EventsSection />
    </div>
  );
}

export default Home;
