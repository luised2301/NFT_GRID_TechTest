import React, { useEffect, useState } from "react";
import "./CollectionPage.css";
import CardContainer from "../../components/Containers/CardContainers/CardContainers";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetchCollectionMetadata from "../../services/useFetchCollectionMetadata";
import CollectionCard from "../../components/Cards/CollectionCard/CollectionCard";
import "./CollectionPage.css";
import SearchBar from "../../components/Input/SearchBar/Search";
import SecondaryButton from "../../components/Buttons/SecondaryButton/SecondaryButton";
import useGetNFTContractMetadata from "../../services/useGetNftContractMetadata";
import ItemCardLoading from "../../components/Cards/ItemCardLoading/ItemCardLoading";
import useFetchCollectionItems from "../../services/useFetchCollectionItems";

const CollectionPage = () => {
  const params = useParams();
  const { collectionAddress } = params;
  const { collectionData, collectionLoading, collectionError } =
    useFetchCollectionItems(collectionAddress);
  const { data, loading, error } = useFetchCollectionMetadata(collectionAddress);
  const [collectionToDisplay, setCollectionToDisplay] = useState(false);

  useEffect(() => {
    setCollectionToDisplay(collectionData);
  }, [collectionData]);

  return (
    <div className="page-container">
      <Box
        className="page-header"
        sx={{
          display: "flex",
          alignItems: "left",
          flexDirection: "colum",
          justifyContent: { xs: "center", md: "left" },
          width: "auto",
        }}
      >
        {collectionToDisplay ? (
          <CollectionCard
            collectionAddress={collectionData.result[0].token_address}
            collectionName={collectionData.result[0].name}
            collectionLoading={collectionLoading}
          />
        ) : (
          <CollectionCard collectionLoading={collectionLoading} />
        )}
      </Box>
      <Box
        className="browse-collection-title"
        sx={{
          pt: 3,
          pb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          px: { xs: 1, md: 3 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: 900, fontFamily: "Inter" }}>
          Browse Collection
        </Typography>
        <Box
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            display: "flex",
            spacing: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchBar />
          <div>
            <SecondaryButton text="Sort By" icon="SortIcon" />
            <SecondaryButton text="Filter" icon="FilterAltIcon" />
          </div>
        </Box>
      </Box>
      {collectionToDisplay ? (
        <CardContainer
          itemsData={collectionData.result}
          collectionAddress={collectionData.result[0].token_address}
          collectionName={collectionData.result[0].name}
        ></CardContainer>
      ) : (
        <Box
          className="card-container"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            mx: 3,
            width: "fit-content",
          }}
        >
          <ItemCardLoading />
          <ItemCardLoading />
          <ItemCardLoading />
          <ItemCardLoading />
        </Box>
      )}
    </div>
  );
};

export default CollectionPage;
