import { useEffect, useState } from "react";

function useApi(endpoint, defaultData = {}) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setLoading] = useState(false);
  const [loadError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(endpoint)
      .then((resp) => resp.json())
      .then((result) => {
        setLoading(false);
        setData(result);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [endpoint]);

  return { data, isLoading, loadError };
}

export default useApi;
