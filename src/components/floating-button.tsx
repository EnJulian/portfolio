"use client";

import { Button } from "./ui/button"; 
import { IoIosFiling } from "react-icons/io";
import { useState } from "react";
import Modal from "react-modal";
const FloatingButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button
        className="fixed bottom-12 right-4 h-16 w-16 rounded-lg bg-green-800 shadow-2xl transition-transform duration-300 transform hover:scale-105 focus:outline-none" // Adjusted bottom position
        onClick={handleClick}
      >
        <div className="h-full w-full flex items-center justify-center rounded-lg">
          <IoIosFiling className="text-white h-full w-full" />
        </div>
      </Button>

      {isModalOpen && ( 
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Document Preview"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              backgroundColor: '#333',
              color: '#fff', 
            },
          }}
        >
          <button onClick={closeModal}>Close</button>
          <iframe
            src="/Julian-Ayinbire-Amoah-Resume.pdf"
            width="100%"
            height="100%"
          />
        </Modal>
      )}
    </>
  );
};

export default FloatingButton;