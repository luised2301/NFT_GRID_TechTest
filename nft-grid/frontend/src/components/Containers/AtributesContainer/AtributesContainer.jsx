import * as React from "react";
import ItemCard from "../../Cards/ItemCard/ItemCard";
import useFetchCollectionItems from "../../../services/useFetchCollectionItems";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./CardContainers.css";
export default function AtributesContainer({
  itemsData,
  collectionName,
  creatorName,
  collectionAddress,
}) {
  return (
    <>
      {itemsData && (
        <Box className="card-container">
          {itemsData.map((item, index) => {
            return (
              <ItemCard
                cardData={item}
                key={item.token_id}
                tokenId={item.token_id}
                collectionName={collectionName}
                creatorName={creatorName}
                collectionAddress={collectionAddress}
              />
            );
          })}
        </Box>
      )}
    </>
  );
}
