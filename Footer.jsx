import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Address */}
        <div className="footer-section">
          <h3>Student Hub</h3>
          <p>
            <strong>Head Office:</strong><br />
            A-101, Knowledge Tower,<br />
            Noida, UP (201301)
          </p>

          <p>
            <strong>Registered Address:</strong><br />
            B-22, Laxmi Nagar,<br />
            Delhi (110092)
          </p>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Explore */}
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li>Notes</li>
            <li>Practice</li>
            <li>Blogs</li>
            <li>Community</li>
            <li>Resources</li>
          </ul>
        </div>


        {/* Courses */}
        <div className="footer-section">
          <h4>Courses</h4>
          <ul>
            <li>BCA</li>
            <li>BBA</li>
            <li>MBA</li>
            <li>MCA</li>
          </ul>
        </div>

        {/* Preparation */}
        <div className="footer-section">
          <h4>  PYQ's paper</h4>
          <ul>
            <li>Semester i</li>
            <li>Semester ii</li>
            <li>Semester ii</li>
            <li>Semester iv</li>
            <li>Semester v</li>
            <li>Semester vi</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 Student Hub. All rights reserved. <br />
        <span>Learn • Practice • Grow 🚀</span>
      </div>
    </footer>
  );
}