import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../shared/Container";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="bg-base-100">
      <Container>
        <div className="navbar bg-base-100 px-0">
          <div className="navbar-start w-full sm:w-1/2">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost p-0 mr-4 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Changelog</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Download</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="text-2xl font-extrabold">CS — Ticket System</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end w-fit sm:w-1/2">
            <a
              className="btn hidden sm:inline-flex text-white bg-linear-to-br from-[#632ee3] to-[#9f62f2] hover:from-[#7c3aed] hover:to-[#c084fc] transition-all duration-500"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <FontAwesomeIcon icon={faPlus} />
              New Ticket
            </a>
            <a
              className="btn text-sm sm:hidden text-white bg-linear-to-br from-[#632ee3] to-[#9f62f2]"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <FontAwesomeIcon icon={faPlus} />
              Ticket
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
