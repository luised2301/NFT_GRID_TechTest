import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CancelIcon from "@mui/icons-material/Cancel";
import { IconButton } from "@mui/material";
import ItemDetailCard from "../Cards/ItemDetailCard/ItemDetailCard";
import useFetchItemDetail from "../../services/useFetchItemDetail";

const Fade = React.forwardRef(function Fade(props, ref) {
  const { children, in: open, onClick, onEnter, onExited, ownerState, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "space-evenly",
  flexDirection: "column",

  minWidth: { md: "90%", lg: "70%" },
  maxWidth: { md: "90%", lg: "70%" },
  width: { xs: "80%", sm: "auto" },
};

export default function DetailModal({ collectionName, detailData, tokenId, collectionAddress }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  if (detailData) {
    return (
      <div>
        <Button
          className="secondary-button"
          variant="contained"
          color="secondary"
          onClick={handleOpen}
          endIcon={<ArrowForwardIcon />}
        >
          More
        </Button>

        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              TransitionComponent: Fade,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    display: "flex",
                    fontSize: "14px",
                    fontWeight: 400,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {`| ${collectionName} | ${detailData.name}`}
                </Typography>
                <IconButton aria-label="close" size="large" onClick={handleClose}>
                  <CancelIcon color="primary" fontSize="16px" />
                </IconButton>
              </Box>
              <ItemDetailCard
                itemData={detailData}
                itemMetadata={detailData}
                tokenId={tokenId}
                collectionAddress={collectionAddress}
                ownerData="owner"
              />
            </Box>
          </Fade>
        </Modal>
      </div>
    );
  } else {
    return <></>;
  }
}
