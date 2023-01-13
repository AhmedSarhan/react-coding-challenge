import React from "react";
import styled, { css } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ReactPortal } from "../layout/portal";

const backdrop = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: { opacity: 0 },
};

const modalAnim = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.4,
  },
};
interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
export const Modal: React.FC<ModalProps> = ({
  children,
  handleClose,
  isOpen,
}) => {
  const nodeRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="modal-container">
      <AnimatePresence mode="sync">
        <BackDrop
          ref={nodeRef}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdrop}
        >
          <ModalContainer
            variants={modalAnim}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children}
          </ModalContainer>
        </BackDrop>
      </AnimatePresence>
    </ReactPortal>
  );
};

const BackDrop = styled(motion["div"])`
  position: fixed;
  inset: 0;
  background-color: rgba(145, 153, 154, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
  transition: 0.5s;
  opacity: 0;
`;

const ModalContainer = styled(motion["div"])`
  width: 40%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;

  @media screen and (max-width: 760px) {
    width: 90%;
    margin: auto;
  }
`;
