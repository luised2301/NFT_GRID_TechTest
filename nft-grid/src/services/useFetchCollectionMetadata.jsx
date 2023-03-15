import { useEffect, useState } from "react";
import axios from "axios";
import { Network, Alchemy } from "alchemy-sdk";

export default function useFetchCollectionMetadata(address) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_ALCHEMY_API_KEY;
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getContractMetadata?contractAddress=${address}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response !== undefined) {
          console.log(response);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [address]);

  return { data, error, loading };
}
