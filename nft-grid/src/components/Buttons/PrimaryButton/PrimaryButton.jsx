import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function PrimaryButton({ text, icon }) {
  return (
    <>
      {icon == "KeyboardArrowRightIcon" ? (
        <Button className="primary-button" variant="contained" endIcon={<KeyboardArrowRightIcon />}>
          {text}
        </Button>
      ) : (
        <></>
      )}
    </>
  );
}
