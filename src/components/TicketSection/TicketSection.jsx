import Ticket from "../Ticket/Ticket";

const TicketSection = ({ availableTickets, setTickets }) => {
  const handleAddToTask = (id) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id && ticket.status === "open"
          ? { ...ticket, status: "in-progress" }
          : ticket,
      ),
    );
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#34485A] mb-4">
        Customer Tickets
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {availableTickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            handleAddToTask={handleAddToTask}
          ></Ticket>
        ))}
      </div>
    </div>
  );
};

export default TicketSection;
