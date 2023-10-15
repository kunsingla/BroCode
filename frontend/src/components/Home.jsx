import React from 'react';
import './Home.css';
import Edit from './Edit';

const Home = () => {
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
        </div>
    );
}

export default Home;
