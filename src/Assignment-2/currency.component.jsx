import React from "react";
import { useCurrency } from "./currency.hooks";
import "./style.css";

const Currency = () => {
  const { data, operation } = useCurrency();

  return (
    <div className="container">
      <h1 style={{ color: "white" }}>Exchange Rates Currency</h1>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>CAD</td>
            <td>{operation(data.CAD, "buy")}</td>
            <td>{data.CAD}</td>
            <td>{operation(data.CAD, "sell")}</td>
          </tr>
          <tr>
            <td>IDR</td>
            <td>{operation(data.IDR, "buy")}</td>
            <td>{data.IDR}</td>
            <td>{operation(data.IDR, "sell")}</td>
          </tr>
          <tr>
            <td>JPY</td>
            <td>{operation(data.JPY, "buy")}</td>
            <td>{data.JPY}</td>
            <td>{operation(data.JPY, "sell")}</td>
          </tr>
          <tr>
            <td>CHF</td>
            <td>{operation(data.CHF, "buy")}</td>
            <td>{data.CHF}</td>
            <td>{operation(data.CHF, "sell")}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>{operation(data.EUR, "buy")}</td>
            <td>{data.EUR}</td>
            <td>{operation(data.EUR, "sell")}</td>
          </tr>
          <tr>
            <td>GBP</td>
            <td>{operation(data.GBP, "buy")}</td>
            <td>{data.GBP}</td>
            <td>{operation(data.GBP, "sell")}</td>
          </tr>
        </tbody>
      </table>
      <p>
        Rates are based from 1 USD
        <br /> This application uses API from{" "}
        <a href="https://currencyfreaks.com"> https://currencyfreaks.com</a>
      </p>
    </div>
  );
};

export default Currency;
