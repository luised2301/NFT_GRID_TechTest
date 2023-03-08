import { useEffect, useState } from "react";
import axios from "axios";
import { Moralis } from "Moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
export default function useFetchMoralis() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { MORALIS_API_KEY } = process.env;

  useEffect(() => {
    const runApp = async () => {
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
    };

    runApp();
  }, []);

  return { data, error, loading };
}
