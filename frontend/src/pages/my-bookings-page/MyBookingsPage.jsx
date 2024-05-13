import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function MyBookingsPage() {
  // eslint-disable-next-line no-unused-vars
  const [bookings, setBookings] = useState([]);
  const { user, token } = useContext(UserContext);

  console.info("USER -->", user.user);
  console.info(user.user?.id);
  console.info(bookings);

  useEffect(() => {
    fetch(`http://localhost:3310/api/users/${user.user?.id}/bookings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.info("data", data))
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
