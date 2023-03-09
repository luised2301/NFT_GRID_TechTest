import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ItemCardLoading.css";
import DetailModal from "../../DetailModal/DetailModal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Skeleton } from "@mui/material";

export default function ItemCardLoading({
  cardData,
  collectionName,
  creatorName,
  collectionAddress,
  tokenId,
  loading,
}) {
  return (
    <Card className="item-card" sx={{ maxWidth: 410, m: 2 }}>
      <Skeleton sx={{ height: 400, aspectRatio: "1/1" }} animation="wave" variant="rectangular" />

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
          {<Skeleton width={"15ch"} />}
        </Typography>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color="primary" children="likes" />
        </IconButton>
      </CardContent>
      <Divider />
      <Typography sx={{ fontWeight: "600" }}>DESCRIPTION</Typography>
      <Typography sx={{ fontSize: "14px", m: 2, textAlign: "left" }}>{<Skeleton />}</Typography>

      <Box></Box>
      <Divider />

      <Typography sx={{ fontWeight: "600" }}>DETAILS</Typography>
      <Box></Box>
      <Divider />
    </Card>
  );
}
