const TaskCard = ({ ticket, handleResolvedTask }) => {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="font-medium text-lg mb-2">{ticket.title}</h1>
        <button
          className="btn bg-[#02A53B] text-white font-bold w-full text-center"
          onClick={() => handleResolvedTask(ticket.id)}
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
