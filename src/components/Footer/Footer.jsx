import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../shared/Container";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
        <footer className="footer sm:footer-horizontal justify-between p-10 font-inter bg-black text-[#A1A1AA] sm:px-0 border-b border-b-[#2e2e2f]">
          <aside>
            <p className="font-bold text-2xl text-white mb-2">
              CS — Ticket System
            </p>
            <p className="sm:max-w-75">
              We streamline customer support by organizing issues, tracking
              ticket progress, and improving team collaboration.Designed for
              efficiency and reliability, it helps businesses deliver faster
              responses, maintain accountability, and enhance customer
              satisfaction.
            </p>
          </aside>
          <nav>
            <h6 className="font-medium text-xl text-white mb-2">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Sales</a>
          </nav>
          <nav>
            <h6 className="font-medium text-xl text-white mb-2">Services</h6>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav>
            <h6 className="font-medium text-xl text-white mb-2">Information</h6>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Terms & Conditions</a>
            <a className="link link-hover">Join Us</a>
          </nav>
          <nav>
            <h6 className="font-medium text-xl text-white mb-2">
              Social Links
            </h6>
            <a className="link link-hover">
              <span className="p-0.5 rounded-full bg-white mr-1">
                <FontAwesomeIcon
                  className="text-black"
                  icon={faXTwitter}
                ></FontAwesomeIcon>
              </span>
              @CS — Ticket System
            </a>
            <a className="link link-hover">
              <span className="p-0.5 rounded-full bg-white mr-1">
                <FontAwesomeIcon
                  className="text-black"
                  icon={faLinkedinIn}
                ></FontAwesomeIcon>
              </span>
              @CS — Ticket System
            </a>
            <a className="link link-hover">
              <span className="p-0.5 rounded-full bg-white mr-1">
                <FontAwesomeIcon
                  className="text-black"
                  icon={faFacebookF}
                ></FontAwesomeIcon>
              </span>
              @CS — Ticket System
            </a>
            <a className="link link-hover">
              <span className="p-0.5 rounded-full bg-white mr-1">
                <FontAwesomeIcon
                  className="text-black"
                  icon={faEnvelope}
                ></FontAwesomeIcon>
              </span>
              support@cst.com
            </a>
          </nav>
        </footer>
        <footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
          <aside>
            <p>
              © {new Date().getFullYear()} CS — Ticket System. All rights
              reserved.
            </p>
          </aside>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
