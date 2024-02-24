import React from "react";
import "./Tabel.css";

const Table = ({ data }) => {
  console.log("EACH ITEM", data);
  console.log("name", data.name);
  console.log("id", data.id);

  return (
    <div>
      <tr className="each-row-data">
        <td>{data.name}</td>
        <td>{data.id}</td>
        <td>
          <img src={data.image} alt={data.name} className="image" />
        </td>
        <td>{data.symbol.toUpperCase()}</td>
        <td>${data.current_price.toFixed(2)}</td>
        <td>${data.total_volume.toLocaleString()}</td>
      </tr>
    </div>
  );
};

export default Table;
