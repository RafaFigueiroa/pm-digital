import { useState } from "react";
import rightarrow from "../../assets/rightarrow.svg";
import RegistrarBO from "../modals/RegistrarBO";
import Modal from "./Modal";
export default function FooterMike() {
  const [show, setShow] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleShow() {
    setShow(!show)
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2 p-8 items-center justify-center rounded-t-2xl relative">
        <div className="pb-2">{show &&<button className="text-center bg-bluemike text-xl text-[#FFFFFF] p-2 rounded-xl h-14 w-72">
            Dados da Ocorrência
          </button>}
          
        </div>
        <div>{show &&<button onClick={openModal} className="bg-cinzamike text-xl text-black p-2 rounded-xl h-14 w-72">
            Finalizar Ocorrência
            <img className="pl-4 inline-block" src={rightarrow} alt="" />
          </button>}
          
        </div>
        <div>
          <h1 className="text-center text-xl text-black mt-2" onClick={handleShow}>
            Sobre o Mike
          </h1>
        </div>
      </div>
    </>
  );
}
