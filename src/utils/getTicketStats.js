export const getTicketStats = (tickets) => {
  const available = [];
  const inProgress = [];
  const resolved = [];

  for (const ticket of tickets) {
    if (ticket.status === "in-progress") {
      inProgress.push(ticket);
      available.push(ticket);
    } 
    else if (ticket.status === "open") {
      available.push(ticket);
    } 
    else if (ticket.status === "resolved") {
      resolved.push(ticket);
    }
  }

  return {
    availableTickets: available,
    inProgressTickets: inProgress,
    resolvedTickets: resolved,
    inProgressCount: inProgress.length,
    resolvedCount: resolved.length,
  };
};