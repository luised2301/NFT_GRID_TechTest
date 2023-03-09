import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ItemCard.css";
import DetailModal from "../../DetailModal/DetailModal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function ItemCard({
  cardData,
  collectionName,
  creatorName,
  collectionAddress,
  tokenId,
}) {
  const parsedCardData = JSON.parse(cardData.metadata);

  return (
    <Card className="item-card" sx={{ maxWidth: 410, m: 2 }}>
      <CardMedia
        component="img"
        image={parsedCardData.image}
        sx={{ aspectRatio: "1/1" }}
        alt="Paella dish"
      />
      <CardContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Typography
          display="flex"
          color="text.primary"
          fontSize="16px"
          fontWeight={900}
          textAlign="left"
          fontFamily="Inter"
          alignItems="center"
        >
          {parsedCardData.name}
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="primary" children="likes" />
        </IconButton>
      </CardContent>
      <Divider />
      <Typography sx={{ fontWeight: "600" }}>DESCRIPTION</Typography>
      <Typography sx={{ fontSize: "14px", m: 2, textAlign: "left" }}>
        {parsedCardData.description}
      </Typography>

      <Box></Box>
      <Divider />

      <Typography sx={{ fontWeight: "600" }}>DETAILS</Typography>
      <Box></Box>
      <Divider />

      <DetailModal
        creator={creatorName}
        collectionName={collectionName}
        creatorName={creatorName}
        collectionAddress={collectionAddress}
        tokenId={tokenId}
      />
    </Card>
  );
}
