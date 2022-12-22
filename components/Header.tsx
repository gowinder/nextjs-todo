import React, { useState } from "react";
import Modal from "./Modal";

export default function Header() {
    const [openModal, setOpenModal] = useState(false);
    
  return (
    <>
    {openModal && <Modal setOpenModal={setOpenModal} />}
    <div className="sticky top-0 w-full left-0 bg-green-sea flex item-center justify-between p-4 border-b border-solid border-black">
      <h1 className="text-3xl sm:text-6xl select-none">TODO LIST</h1>
      <i onClick={() => setOpenModal(true)} className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"></i>
    </div>
    </>
  );
}