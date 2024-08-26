"use client";

import { Button } from "./ui/button"; 
import { IoIosFiling } from "react-icons/io";
import { useState } from "react"; // Added import for useState
import Modal from "react-modal"; // Added import for Modal

const FloatingButton = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Added state for modal

  const handleClick = () => {
    setModalOpen(true); // Open modal instead of opening link
  };

  const closeModal = () => {
    setModalOpen(false); // Function to close modal
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 h-16 w-16 rounded-lg bg-green-800 shadow-2xl transition-transform duration-300 transform hover:scale-105 focus:outline-none" // Removed white highlight on focus
        onClick={handleClick}
      >
        <div className="h-full w-full flex items-center justify-center rounded-lg">
          <IoIosFiling className="text-white h-full w-full" />
        </div>
      </Button>

      {isModalOpen && ( // Conditional rendering of modal
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal} // Updated to use closeModal function
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
            },
          }}
        >
          <button onClick={closeModal}>Close</button> // Updated close button
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