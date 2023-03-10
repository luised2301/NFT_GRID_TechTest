import * as React from "react";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import "./ItemDetailCard.css";
import { Avatar } from "@mui/material";

export default function ItemDetailCard({ itemMetadata, itemData, tokenId, collectionAddress }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
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
          maxHeight: { xs: "300px", md: "400px" },
          borderColor: "primary",
          borderStyle: "solid",
          borderRadius: "8px",
        }}
        alt="NFT IMAGE"
      />

      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "75%", mx: 3 }}>
        <Box>
          <Typography fontWeight={900} sx={{ fontSize: { xs: "24px", md: "70px" } }}>
            {itemMetadata.name}
          </Typography>
        </Box>
        <Box className="owner-box" sx={{ display: "flex" }}>
          <Box sx={{ width: "fit-content" }}>
            <Typography
              sx={{ pt: { xs: 1, md: 2 } }}
              fontWeight={700}
              fontSize="16px"
              children="Owner´s address"
            />
            <Typography className="owner-adress-text" children="ownerAdress" />
          </Box>
        </Box>
        <Box className="description-box">
          <Typography
            sx={{ py: { xs: 1, md: 2 } }}
            fontWeight={700}
            fontSize="16px"
            paddingY="5px"
            children="Description"
          />
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
            collectionId={collectionAddress}
            tokenId={tokenId}
          />
        </Box>
      </Box>
    </Box>
  );
}
