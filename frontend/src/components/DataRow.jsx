import React from "react";
import './Data.css';

function DataRow( { value } ) {
  const dataArray = [];
  for (let d in value) {
    dataArray.push(<td>{value[d]}</td>);
  }

  return (
    <tr>
      {dataArray}
    </tr>
  );
}

export default DataRow;