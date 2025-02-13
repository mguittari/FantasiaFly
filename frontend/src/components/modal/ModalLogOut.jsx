import Button from "../button/button";

// eslint-disable-next-line react/prop-types
export default function ModalLogOut({ show, handleClick, handleCancel }) {
  return (
    <div
      className={` absolute z-20 ${
        show
          ? "absolute top-0 right-0 left-0 bottom-0 w-full h-[100vh] bg-black bg-opacity-50"
          : ""
      }`}
    >
      <div
        className={`${
          show
            ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-white p-12 border-2"
            : "hidden"
        }`}
      >
        <p className="pb-4 text-black">Voulez-vous vous déconnecter ?</p>
        <div className="flex justify-center space-x-4">
          <Button type="button" content="Annuler" handleClick={handleCancel} />
          <Button type="button" content="Confirmer" handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
