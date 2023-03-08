require("dotenv").config();
const functions = require("firebase-functions");
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const { MORALIS_API_KEY } = process.env;

exports.getWalletNFTCollections = functions.https.onRequest(async (req, res) => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
    // ...and any other configuration
  });

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getWalletNFTCollections({
    address,
    chain,
  });

  console.log(response.toJSON());
  res.json(response);
});

exports.getNFTsFromCollection = functions.https.onRequest(async (req, res) => {
  await Moralis.start({
    apiKey: MORALIS_API_KEY,
    // ...and any other configuration
  });

  const { query } = req;
  const chain = EvmChain.ETHEREUM;

  let response;
  if (query.cursor) {
    response = await Moralis.EvmApi.nft.getContractNFTs({
      address: query.address,
      chain,
      cursor: query.cursor,
      limit: query.limit,
    });
  } else {
    response = await Moralis.EvmApi.nft.getContractNFTs({
      address: query.address,
      chain,
      limit: query.limit,
    });
  }

  console.log(response.toJSON());
  res.json(response);
});
