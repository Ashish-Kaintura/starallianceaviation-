const Navbar = () => (
  <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full">
    {/* Top bar */}
    <div className=" text-white text-sm w-full flex justify-center py-3">
      <div className="w-full max-w-[1320px] flex justify-between p-2 px-6">
        <span>Book Online • You can request appointment 24 hours</span>
        <span>📞 Phone: +92 89595558</span>
      </div>
    </div>

    {/* Main nav */}
    <div className="bg-white w-[1290px] rounded-lg mt-6 flex justify-center shadow">
      <nav className="flex items-center justify-between w-full max-w-[1320px] p-4">
        <img
          src="http://starallianceaviation.com/wp-content/uploads/2025/07/PNG-1-e1751434504963.png"
          alt="Star Alliance Aviation"
          className="h-20"
        />
        <ul className="flex gap-6 text-sm font-medium">
          <li>About Us</li>
          <li>Pilot Training</li>
          <li>Cabin Crew Training</li>
          <li>Services & Expertise</li>
          <li>Contact Us</li>
        </ul>
        <button className="bg-indigo-900 text-white px-4 py-2 rounded">
          Make Appointment
        </button>
      </nav>
    </div>
  </div>
);

export default Navbar;
