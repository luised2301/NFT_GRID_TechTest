import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchCollectionItemsALCHEMY(address) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Contract address
    const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

    // Metadata inclusion flag
    const withMetadata = "true";

    // Alchemy API key
    const apiKey = "DqeOAmCIPiQ_PKWVWTohTg9szw_J38N5";

    // Alchemy URL
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTsForCollection`;
    const url = `${baseURL}?contractAddress=${address}&withMetadata=${withMetadata}`;

    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response !== undefined) {
          console.log("alchemy", response);

          setData(data);
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
