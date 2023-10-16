import { React, useState } from 'react';
import './Home.css';
import axios from "axios";
import Edit from './Edit';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';
import UserData from './UserData';

const Home = () => {
  const [num, setNum] = useState(0);
  const [data, changeData] = useState([]);
  const handleData = async () => {
    await axios.get("http://127.0.0.1:8000/api/audits/").then((res) => changeData(res.data));
  }
  const postData = async () => {
    await axios.post("http://127.0.0.1:8000/api/audits/", {});
  }
  const formArray = [
    <UserData setNum={setNum} handleData={handleData} data={data} />,
    <Form setNum={setNum} />,
    <Form2 setNum={setNum} />,
    <Form3 postData={postData} setNum={setNum} />
  ];
  return (
    <div id='main_input'>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Audit Management</a>
        </div>
      </nav>

      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">History</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contact Us</a>
        </li>
      </ul>
      <hr></hr>
      <Edit />
      {formArray[num]}
    </div>
  );
}

export default Home;
