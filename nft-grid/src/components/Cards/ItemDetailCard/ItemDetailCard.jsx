import * as React from "react";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import "./ItemDetailCard.css";
import { Avatar } from "@mui/material";

export default function ItemDetailCard({ itemMetadata, itemData }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        className="item-image"
        component="img"
        image={itemMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
        sx={{
          aspectRatio: "1/1",
          maxWidth: "400px",
          borderColor: "primary",
          borderStyle: "solid",
          borderRadius: "8px",
        }}
        alt="NFT IMAGE"
      />

      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "75%", mx: 3 }}>
        <Box>
          <Typography fontWeight={900} fontSize="70px">
            {itemMetadata.name}
          </Typography>
        </Box>
        <Box className="owner-box" sx={{ display: "flex" }}>
          <Box sx={{ width: "fit-content" }}>
            <Typography fontWeight={700} fontSize="16px" children="Owner´s address" />
            <Typography className="owner-adress-text" children={itemData.owner_of} />
          </Box>
        </Box>
        <Box className="description-box">
          <Typography fontWeight={700} fontSize="16px" paddingY="5px" children="Description" />
          <Typography
            fontWeight={400}
            fontSize="14px"
            paddingY="5px"
            children={itemMetadata.description}
          />
        </Box>
        <Box className="offer-box">
          <PrimaryButton
            icon="openSeaLogo"
            text="Buy Now"
            collectionId={itemData.token_address}
            tokenId={itemData.token_id}
          />
          <Typography
            fontWeight={400}
            fontSize="14px"
            paddingY="5px"
            children={itemData.description}
          />
        </Box>
      </Box>
    </Box>
  );
}
