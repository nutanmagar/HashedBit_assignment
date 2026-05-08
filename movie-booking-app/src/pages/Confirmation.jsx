import { useLocation } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const location = useLocation();
  const data = location.state;

  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div className="confirmation">
      <h1>Booking Confirmed 🎉</h1>

      <p><b>Booking ID:</b> {bookingId}</p>
      <p><b>Name:</b> {data?.name}</p>
      <p><b>Email:</b> {data?.email}</p>
      <p><b>Mobile:</b> {data?.mobile}</p>
      <p><b>date:</b> {data?.date}</p>
      <p><b>time:</b> {data?.time}</p>
    </div>
  );
}

export default Confirmation;