import Container from "../shared/Container";
import TaskStatusSection from "../TaskStatusSection/TaskStatusSection";
import TicketSection from "../TicketSection/TicketSection";

const MainSection = ({
  availableTickets,
  inProgressTickets,
  resolvedTickets,
  setTickets,
}) => {
  return (
    <div className="my-10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] gap-5">
          <TicketSection
            availableTickets={availableTickets}
            setTickets={setTickets}
          ></TicketSection>
          <TaskStatusSection
            inProgressTickets={inProgressTickets}
            resolvedTickets={resolvedTickets}
            setTickets={setTickets}
          ></TaskStatusSection>
        </div>
      </Container>
    </div>
  );
};

export default MainSection;
