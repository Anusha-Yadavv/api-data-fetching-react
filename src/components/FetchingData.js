import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";
import "./Tabel.css";

const FetchingData = () => {
  const [coinsData, setCoinsData] = useState([]);
  const BASE_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const responseData = await response.data;
        setCoinsData(responseData);
      } catch (error) {
        alert("Not able to fetch data :( Please try again", error);
      }
    };
    fetchingData();
  }, []);

  return (
    <div>
      {console.log("DATA", coinsData)}
      <table className="data-table">
        <thead className="heading-row">
          <tr className="main-row">
            <th>Name</th>
            <th>Id</th>
            <th>Image</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {coinsData.map((eachItem, index) => (
            <Table key={index} data={eachItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchingData;
