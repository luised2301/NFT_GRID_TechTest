import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetNFTContractMetadata(collectionAddress) {
  const [contractData, setData] = useState(null);
  const [contractError, setError] = useState(null);
  const [contractLoading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://us-central1-moralisapicall-b62d8.cloudfunctions.net/getNFTContractMetadata?address=${collectionAddress}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response !== undefined) {
          setData(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [collectionAddress]);

  return { contractData, contractError, contractLoading };
}
