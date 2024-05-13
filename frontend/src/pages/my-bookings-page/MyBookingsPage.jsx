import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(UserContext);

  console.info("USER -->", user.user);
  console.info(user.user?.id);

  useEffect(() => {
    fetch(`http://localhost:3310/api/users/${user.user?.id}/bookings`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.info(error));
  }, []);

  return (
    <div className="flex justify-center items-center">
      {bookings.map(({ firstname }) => {
        return (
          <div className="border border-black p-28 my-20 rounded-lg">
            <p>{firstname}</p>
          </div>
        );
      })}
    </div>
  );
}
