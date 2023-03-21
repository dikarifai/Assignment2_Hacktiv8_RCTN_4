import { useEffect, useState } from "react";

export const useCurrency = () => {
  const [data, setData] = useState({});

  const fetchApi = async () => {
    try {
      const resp = await fetch(
        `https://api.currencyfreaks.com/latest?apikey=53b045586ecc4508886024870bd58190`
      );
      const result = await resp.json();
      setData(result.rates);
      console.log(result);
    } catch {}
  };

  const operation = (currency, action) => {
    let result =
      action === "buy"
        ? Number(currency) + (Number(currency) * 5) / 100
        : Number(currency) - (Number(currency) * 5) / 100;
    return result.toFixed(4);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { data, setData, operation };
};
