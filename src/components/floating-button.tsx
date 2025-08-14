"use client";

import { Button } from "./ui/button";
import { IoIosFiling } from "react-icons/io";
import { useState } from "react";
import Modal from "react-modal";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(0, 200, 100, 0.3);
  }
  25% {
    box-shadow: 0 0 20px rgba(0, 200, 100, 0.4);
  }
  50% {
    box-shadow: 0 0 25px rgba(0, 200, 100, 0.5), 0 0 40px rgba(0, 200, 100, 0.3);
  }
  75% {
    box-shadow: 0 0 20px rgba(0, 200, 100, 0.4);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 200, 100, 0.3);
  }
`;
const GlowingButton = styled(Button)`
  animation: ${glowAnimation} 6s infinite ease-in-out;
`;

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
      <GlowingButton
        className="fixed bottom-12 right-4 h-12 w-12 rounded-full bg-gray-800 shadow-md transition-all duration-200 transform hover:scale-105 hover:bg-gray-700 focus:outline-none border border-gray-700 hidden md:flex"
        onClick={handleClick}
      >
        <div className="h-full w-full flex items-center justify-center">
          <IoIosFiling className="text-white h-6 w-6" />
        </div>
      </GlowingButton>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Resume Preview"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              zIndex: 1000
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: '#111',
              border: '1px solid #333',
              borderRadius: '4px',
              padding: '10px',
            },
          }}
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-white text-sm">Resume</h3>
            <button 
              onClick={closeModal}
              className="px-3 py-1 text-sm text-gray-300 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
            >
              Close
            </button>
          </div>
          <iframe
            src="/Resume_Julian_A.pdf"
            width="100%"
            height="95%"
            style={{ border: "none" }}
          />
        </Modal>
      )}
    </>
  );
};

export default FloatingButton;
