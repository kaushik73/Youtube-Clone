import React, { useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { disableModal } from "../utils/store/configSlice";
import ContactMeForm from "./ContactMeForm";

const HireMeModal = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const dispatch = useDispatch();

  function afterOpenModal() {
    subtitle.style.color = "#4A5568";
  }

  function closeModal() {
    setIsOpen(false);
    dispatch(disableModal());
  }

  useEffect(() => {
    return () => {
      dispatch(disableModal());
    };
  }, []);

  return (
    <>
      {modalIsOpen && (
        <div className="flex justify-center items-center">
          <Modal
            isOpen={modalIsOpen}
            ariaHideApp={false}
            onAfterOpen={afterOpenModal}
            contentLabel="Hire Me Modal"
            className="bg-white rounded-lg p-8 shadow-lg max-w-lg mx-auto my-16 relative"
            overlayClassName="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center"
          >
            <h2
              ref={(_subtitle) => (subtitle = _subtitle)}
              className="text-2xl font-semibold text-gray-700 mb-4"
            >
              Hire Me
            </h2>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <div className="mb-4 text-gray-600">
              Hi, I am a web developer with experience in React, Tailwind CSS,
              and more. Lets Connect !
            </div>
            <ContactMeForm />
          </Modal>
        </div>
      )}
    </>
  );
};

export default HireMeModal;
