import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    time: ""
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Name: only letters and space
    if (name === "name") {
      if (!/^[A-Za-z\s]*$/.test(value)) return;
    }

    // Mobile: only digits
    if (name === "mobile") {
      if (!/^\d*$/.test(value)) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mobile validation (must be 10 digits)
    if (form.mobile.length !== 10) {
      setError("Mobile number must be exactly 10 digits");
      return;
    }

    // Date & time required
    if (!form.date || !form.time) {
      setError("Please select date and time");
      return;
    }

    setError("");

    navigate("/confirmation", {
      state: form
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Seat</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="mobile"
        placeholder="Mobile (10 digits)"
        maxLength="10"
        value={form.mobile}
        onChange={handleChange}
        required
      />

      {/* Date */}
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      {/* Time */}
      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
        required
      />

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;