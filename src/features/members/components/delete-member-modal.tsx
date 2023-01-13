import React from "react";
import styled from "styled-components";
import { Warning } from "@styled-icons/ionicons-outline/Warning";
import { ElevatedButton } from "../../../components/buttons";
import { Modal } from "../../../components/modal";

interface DeleteMemberModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleDelete: () => void;
}
export const DeleteMemberModal: React.FC<DeleteMemberModalProps> = ({
  handleClose,
  isOpen,
  handleDelete,
}) => {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <ModalContent>
        <WarningIcon size={30} />
        <div>
          <h4>Deactivate Icon</h4>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This Action can not be undone.
          </p>
        </div>
      </ModalContent>
      <ModalActions>
        <ElevatedButton text="Cancel" onClick={handleClose} />
        <ElevatedButton text="Deactivate" onClick={handleDelete} />
      </ModalActions>
    </Modal>
  );
};

const ModalContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px auto;
  div {
    width: 85%;
    margin-inline-start: 10px;

    h4 {
      color: #000;
      margin-bottom: 5px;
      font-size: 20px;
    }
    p {
      font-size: 14px;
      font-weight: 500;
      color: #908e8e;
    }
  }
`;
const WarningIcon = styled(Warning)`
  color: rgb(var(--danger-color));
  background-color: rgba(var(--danger-color), 0.5);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 5px;
`;
const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin-inline: 5px;
    border-radius: 5px;

    &:first-of-type {
      border-color: #c4c4c4;
      color: #6b7280;
    }
    &:last-of-type {
      background-color: rgb(var(--danger-color));
      color: #fff;
    }
  }
`;
