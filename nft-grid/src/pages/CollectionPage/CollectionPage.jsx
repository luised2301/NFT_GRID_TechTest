import React from "react";
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

const CollectionPage = () => {
  const params = useParams();

  const { collectionAddress } = params;
  const { itemsData, itemsLoading, itemsError, nftList } =
    useFetchCollectionMetadata(collectionAddress);
  const { contractData, contractLoading, contractError } =
    useGetNFTContractMetadata(collectionAddress);

  // const { itemsData, itemsLoading, itemsError } = useFetchCollectionItems(collectionId);
  return (
    <div className="page-container">
      <Box
        className="page-header"
        sx={{ alignItems: "left", display: "flex", width: "auto", mx: 3 }}
      >
        <CollectionCard collectionData={contractData} />
      </Box>

      <Box
        className="browse-collection-title"
        sx={{
          pt: 3,
          pb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          mx: { xs: 1, md: 3 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography sx={{ fontSize: "30px", fontWeight: 900, fontFamily: "Inter" }}>
          Browse Collection
        </Typography>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            spacing: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchBar />
          <SecondaryButton text="Sort By" icon="SortIcon" />
          <SecondaryButton text="Filter" icon="FilterAltIcon" />
        </Box>
      </Box>
      {contractData?.name ? (
        <CardContainer
          itemsData={nftList}
          collectionName={contractData.name}
          collectionAddress={collectionAddress}
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
