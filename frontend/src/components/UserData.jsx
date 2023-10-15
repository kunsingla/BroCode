import {React, useState} from "react";
import axios from "axios";
import DataRow from "./DataRow";
import './Data.css';

const UserData = () => {
  const [data, changeData] = useState([]);
  const handleData = async () => {
    await axios.get("http://127.0.0.1:8000/api/audits/").then((res) => changeData(res.data));
  }

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
    {!data.length && <button onClick={() => handleData()}>Show</button>}
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
    </>
  );
}

export default UserData;