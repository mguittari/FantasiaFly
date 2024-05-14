import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function MyBookingsPage() {
  // eslint-disable-next-line no-unused-vars
  const [bookings, setBookings] = useState([]);
  const { user, token } = useContext(UserContext);

  console.info("USER -->", user);
  console.info("id de user ?", user?.user?.id);
  console.info("bookings", bookings[0]);

  useEffect(() => {
    fetch(`http://localhost:3310/api/users/${user?.user?.id}/bookings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.info("data", data);
        setBookings(data);
      })
      .catch((error) => console.info(error));
  }, []);

  return (
    <div className="flex justify-center items-center">
      {bookings[0].bookings.map((data) => console.info(data))}
    </div>
  );
}

// {
//   bookings[0]?.bookings?.map(
//     ({ data }) => console.info("A", data[0].firstname) || <p>TEST paragraphe</p>
//   );
// }
