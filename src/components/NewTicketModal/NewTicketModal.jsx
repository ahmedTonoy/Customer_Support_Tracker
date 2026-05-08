import { useState } from "react";
import { toast } from "react-toastify";

const NewTicketModal = ({ setTickets }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    customer: "",
    priority: "medium",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.customer.trim()
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    setTickets((prevTickets) => {
      const maxId = Math.max(...prevTickets.map((ticket) => ticket.id));
      const newTicket = {
        id: maxId + 1,
        title: formData.title.trim(),
        description: formData.description.trim(),
        customer: formData.customer.trim(),
        priority: formData.priority,
        status: "open",
        createdAt: new Date().toISOString().split("T")[0],
        startedAt: null,
        resolvedAt: null,
      };

      return [...prevTickets, newTicket];
    });

    setFormData({
      title: "",
      description: "",
      customer: "",
      priority: "medium",
    });

    document.getElementById("my_modal_1").close();

    toast.success("New ticket created successfully!");
  };

  const handleClose = () => {
    setFormData({
      title: "",
      description: "",
      customer: "",
      priority: "medium",
    });
    document.getElementById("my_modal_1").close();
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-lg">
          <h3 className="font-bold text-lg mb-4 text-[#34485A]">
            Create New Ticket
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-[#34485A]">
                  Title *
                </span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter ticket title"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-[#34485A]">
                  Description *
                </span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the issue in detail"
                className="textarea textarea-bordered w-full h-24 resize-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-[#34485A]">
                  Customer Name *
                </span>
              </label>
              <input
                type="text"
                name="customer"
                value={formData.customer}
                onChange={handleInputChange}
                placeholder="Enter customer name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-[#34485A]">
                  Priority
                </span>
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="select select-bordered w-full"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn text-white bg-linear-to-br from-[#632ee3] to-[#9f62f2] hover:from-[#7c3aed] hover:to-[#c084fc] transition-all duration-300"
              >
                Create Ticket
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default NewTicketModal;
