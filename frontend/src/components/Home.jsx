import {React, useState} from 'react';
import './Home.css';
import Edit from './Edit';
import Form from './Form';
import Form2 from './Form2';
import Form3 from './Form3';

const Home = () => {
    const [num, setNum] = useState(0);
    const formArray = [<Form setNum={setNum} />, <Form2 setNum={setNum}/>, <Form3 />];
    return (
        <div>
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
<Edit/>
{formArray[num]}
        </div>
    );
}

export default Home;
