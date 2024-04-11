import Button from "../button/button";

// eslint-disable-next-line react/prop-types
export default function ModalLogOut({ show, handleClick }) {
  return (
    <div
      className={` ${
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
        <Button type="button" content="confirmer" handleClick={handleClick} />
      </div>
    </div>
  );
}
