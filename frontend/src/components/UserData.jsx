import React from "react";
import DataRow from "./DataRow";
import './Data.css';

const UserData = ( { setNum, data, handleData } ) => {

  const dataMap = data.map((val, index) => {
    return (
      <DataRow value={val} key={index} />
    );
  });

  const dataTitle = [];
  for (let d in data[0]) {
    dataTitle.push(<th>{d}</th>);
  }

  return (
    <>
    {!data.length && <button id='show' onClick={() => handleData()}>Show</button>}
    <div id="user_data">
      <table className="table table-striped">
      <thead>
        <tr>
          {dataTitle}
        </tr>
      </thead>
      <tbody>
        {dataMap}
      </tbody>
      </table>
    </div>
    {data.length && <button id="create" onClick={() => setNum(1)}>Create</button>}
    </>
  );
}

export default UserData;