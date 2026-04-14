import "./Sidebar.css";

export default function SidebarLayout({ open, setOpen }) {
  return (
    <div className="app-container">
      
      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <div className="profile">
          <img src="/images/gr.jpeg" alt="profile" />
          <h3>Rohit Kr</h3>
        </div>
        <ul>
          <li>Dashboard</li>
          <li>My Notes</li>
          <li>About Us</li>
          <li>Settings</li>
          <li className="last">Logout</li>
        </ul>
      </div>

      {/* Toggle Button */}
      <button className="toggle-btns" onClick={() => setOpen(!open)}>
        {open ? "☰" : "☰"}
      </button>
    </div>
  );
}