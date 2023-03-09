import * as React from "react";
import ItemCard from "../../Cards/ItemCard/ItemCard";
import Box from "@mui/material/Box";
import "./CardContainers.css";
export default function CardContainer({ itemsData, collectionName, collectionAddress }) {
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
                collectionAddress={collectionAddress}
              />
            );
          })}
        </Box>
      )}
    </>
  );
}
