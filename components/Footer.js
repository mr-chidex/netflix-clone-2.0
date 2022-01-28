import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <h4>Questions? Contact Us.</h4>
      <ul className="link-items">
        <li className="link-item">
          <Link href="/">
            <a>FAQ</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Investor Relations</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Privacy</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Speed Test</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Help Center</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Jobs</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Cookie Preferences</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Legal Notices</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Account</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Ways to Watch</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Corporate Information</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Netflix Originals</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Terms of Use</a>
          </Link>
        </li>
        <li className="link-item">
          <Link href="/">
            <a>Contact Us</a>
          </Link>
        </li>
      </ul>

      <small className="designer">
        @designed by{" "}
        <a
          href="http://github.com/mr-chidex"
          target="_blank"
          rel="noopener noreferrer"
        >
          mr-chidex
        </a>
      </small>
    </footer>
  );
};

export default Footer;
