import React from 'react';

const Update = () => {
    return (
        <div class="card" style={{"width": "18rem"}}>

        <div class="card-body">
        <h5 class="card-title"> Recent Activities</h5>
           {/*  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
         </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            
          
        </ul>
        <div class="card-body">
        <button id='update_btn' type="button" class="btn btn-primary">Primary</button>
        </div>
</div>
    );
}

export default Update;
