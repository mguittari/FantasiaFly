import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function EditPasswordPage() {
  const { token } = useContext(UserContext);

  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // const [oldPassword, setOldPassword] = useState("");
  // const [newPassword, setNewPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // if (name === "oldPassword") setOldPassword(value);
    // if (name === "newPassword") setNewPassword(value);
    // if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.newPassword !== data.confirmPassword) {
      console.error("Les nouveaux mots de passe ne correspondent pas");
      return;
    }

    fetch(`http://localhost:3310/api/users/update-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-unused-vars
      .then((responseData) => {
        console.info("Réponse du serveur:", responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="py-10 bg-cream">
      <form
        className="w-96 mx-auto flex flex-col justify-center gap-4 bg-white p-5 shadow-xl rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h1 className="font-jacques text-2xl">Je modifie mon mot de passe</h1>

        <label htmlFor="old-password">Ancien mot de passe</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="oldPassword"
          value={data.oldPassword}
          onChange={handleChange}
          placeholder="enter your oldest password"
          required
        />
        <label htmlFor="new-password">Nouveau mot de passe</label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="newPassword"
          value={data.newPassword}
          onChange={handleChange}
          placeholder="enter your new password"
          required
        />
        <label htmlFor="confirm-new-password">
          Confirmation nouveau mot de passe
        </label>
        <input
          className="border-2 pl-2 h-12"
          type="text"
          name="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
          placeholder="confirm your new password"
          required
        />
        <button
          type="submit"
          className="h-12 bg-vert text-white hover:border-2 hover:boder-slate-700 hover:bg-white hover:text-slate-700 transition-all duration-500 font-bold"
        >
          Je valide
        </button>
      </form>
      {data.newPassword !== data.confirmPassword && (
        <p className="text-red-600">
          Les nouveaux mots de passe ne correspondent pas
        </p>
      )}
    </div>
  );
}
