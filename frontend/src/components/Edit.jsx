import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


const Edit = () => {
  return (
    <div id='card-1' class="card">
      <div class="card-body">
        <h5 class="card-title">Recent Activities</h5>
      </div>
      <ol class="list-group list-group-numbered">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ol>
    </div>
  );
}

export default Edit;
