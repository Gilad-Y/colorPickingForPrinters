// MainModal.tsx
import Modal from "@mui/material/Modal";
import "./mainModal.css";
import * as React from "react";
import CreateFilamentLayout from "./createFilamentLayout/createFilamentLayout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
interface MainModalProps {
  open: boolean;
  onClose: () => void;
  type: string;
  data?: any;
}

function MainModal(props: MainModalProps): JSX.Element {
  return (
    <>
      <Modal
        disableEscapeKeyDown={true}
        hideBackdrop
        open={props.open}
        onClose={() => {
          props.onClose();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {props.type == "noFilaments" && <CreateFilamentLayout />}
        </Box>
      </Modal>
    </>
  );
}
//addMIssion

export default MainModal;
