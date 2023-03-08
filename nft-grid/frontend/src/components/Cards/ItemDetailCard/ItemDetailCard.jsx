import * as React from "react";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import "./ItemDetailCard.css";
import { Avatar, Button } from "@mui/material";

export default function ItemDetailCard({ itemDetail, ownerData }) {
  const [expanded, setExpanded] = React.useState(false);
  console.log(ownerData.users[0].name);

  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <CardMedia
        className="item-image"
        component="img"
        image={itemDetail.imageUrl}
        sx={{
          aspectRatio: "1/1",
          maxWidth: "25%",
          borderColor: "primary",
          borderStyle: "solid",
          borderRadius: "8px",
        }}
        alt="NFT IMAGE"
      />

      <CardActions disableSpacing></CardActions>
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "75%" }}>
        <Box>
          <Typography fontWeight={900} fontSize="70px">
            {itemDetail.name}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Avatar sx={{ height: "20px", width: "20px" }} />
            <Typography fontWeight={500} fontSize="16px" paddingX="5px">
              {ownerData.users[0].name}
            </Typography>
          </Box>
        </Box>
        <Box className="owner-box" sx={{ display: "flex" }}>
          <Box sx={{ width: "30%", display: "flex", flexDirection: "column" }}>
            <Typography fontWeight={700} fontSize="16px">
              Owner
            </Typography>
            <Box sx={{ display: "flex", mt: 3, mb: 3 }}>
              <Avatar sx={{ m: "5px" }} />
              <Typography fontWeight={900} fontSize="14px" paddingX="5px">
                {ownerData.users[0].name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ width: "fit-content" }}>
            <Typography fontWeight={700} fontSize="16px" children="Owner´s address" />
            <Typography className="owner-adress-text" children={ownerData.users[0].address} />
          </Box>
        </Box>
        <Box className="description-box">
          <Typography fontWeight={700} fontSize="16px" paddingY="5px" children="Description" />
          <Typography
            fontWeight={400}
            fontSize="14px"
            paddingY="5px"
            children={itemDetail.description}
          />
        </Box>
        <Box className="offer-box">
          <PrimaryButton icon="openSeaLogo" text="Buy Now" />
          <Typography fontWeight={700} fontSize="16px" paddingY="5px" children="Description" />
          <Typography
            fontWeight={400}
            fontSize="14px"
            paddingY="5px"
            children={itemDetail.description}
          />
        </Box>
      </Box>
    </Box>
  );
}
