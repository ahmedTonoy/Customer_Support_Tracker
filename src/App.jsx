import { lazy, Suspense, use, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import { getTicketStats } from "./utils/getTicketStats";

const fetchTickets = async () => {
  const res = await fetch("./ticket.json");
  return res.json();
};

const ticketsPromise = fetchTickets();

const MainSection = lazy(() => import("./components/MainSection/MainSection"));

function App() {
  const allTickets = use(ticketsPromise);
  const [tickets, setTickets] = useState(allTickets);

  const {
    availableTickets,
    inProgressTickets,
    resolvedTickets,
    inProgressCount,
    resolvedCount,
  } = getTicketStats(tickets);

  return (
    <>
      <Navbar></Navbar>
      <Banner
        inProgressCount={inProgressCount}
        resolvedCount={resolvedCount}
      ></Banner>
      <Suspense
        fallback={
          <div className="mx-auto w-5">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <MainSection
          availableTickets={availableTickets}
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
          setTickets={setTickets}
        ></MainSection>
      </Suspense>
    </>
  );
}

export default App;
