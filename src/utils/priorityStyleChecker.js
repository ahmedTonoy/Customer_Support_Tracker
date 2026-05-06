export const priorityStyleChecker = (priority) => {
  return priority.toUpperCase() === "HIGH"
      ? "text-[#F83044]"
      : priority.toUpperCase() === "MEDIUM"
        ? "text-[#FEBB0C]"
        : "text-[#02A53B]";
};