import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { capitalize } from "../../utils/capitalize";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { priorityStyleChecker } from "../../utils/priorityStyleChecker";
import { statusStyleChecker } from "../../utils/statusStyleChecker";

const Ticket = ({ ticket, handleAddToTask }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  const priorityColor = priorityStyleChecker(priority);
  const { bg, text, icon: iconColor } = statusStyleChecker(status);

  return (
    <div
      className="flex flex-col gap-2 p-3 sm:p-4 rounded-lg shadow-lg bg-white text-[#627382]"
      onClick={status === "open" ? () => handleAddToTask(id) : undefined}
    >
      <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between sm:items-center font-medium">
        <h2 className="text-lg text-[#001931]">{capitalize(title)}</h2>
        <div
          className={`p-1 px-3 rounded-full flex items-center w-fit font-medium ${bg}`}
        >
          <FontAwesomeIcon
            className={`mr-1 ${iconColor}`}
            icon={faCircle}
          ></FontAwesomeIcon>
          <p className={text}>{capitalize(status)}</p>
        </div>
      </div>
      <p className="">{capitalize(description)}</p>
      <div className="mt-auto flex justify-between items-center text-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
          <h3 className="font-medium">#{id}</h3>
          <h3 className={`font-medium ${priorityColor}`}>
            {priority.toUpperCase()} PRIORITY
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 text-right">
          <h3>{capitalize(customer)}</h3>
          <span className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
            <h3>{createdAt}</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
