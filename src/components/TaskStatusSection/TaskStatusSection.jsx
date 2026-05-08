import { toast } from "react-toastify";
import ResolvedTaskCard from "../ResolvedTaskCard/ResolvedTaskCard";
import TaskCard from "../TaskCard/TaskCard";

const TaskStatusSection = ({
  inProgressTickets,
  resolvedTickets,
  setTickets,
}) => {
  const handleResolvedTask = (id) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id && ticket.status === "in-progress"
          ? { ...ticket, status: "resolved", resolvedAt: Date.now() }
          : ticket,
      ),
    );
    toast.success(`Ticket [#${id}] successfully resolved`, { autoClose: 2000 });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#34485A] mb-4">
        Task Status
      </h1>
      <div className="flex flex-col gap-3">
        {inProgressTickets.length === 0 ? (
          <p>Select a ticket to add to Task Status</p>
        ) : (
          inProgressTickets.map((ticket) => (
            <TaskCard
              key={ticket.id}
              ticket={ticket}
              handleResolvedTask={handleResolvedTask}
            ></TaskCard>
          ))
        )}
      </div>
      <h1 className="text-2xl font-semibold text-[#34485A] mt-8 mb-4">
        Resolved Task
      </h1>
      <div className="flex flex-col gap-4">
        {resolvedTickets.length === 0 ? (
          <p>No resolved task yet</p>
        ) : (
          resolvedTickets.map((ticket) => (
            <ResolvedTaskCard
              key={ticket.id}
              title={ticket.title}
            ></ResolvedTaskCard>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskStatusSection;
