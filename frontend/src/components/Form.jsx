import React from 'react';

const Form = ({ setNum }) => {

    return (
        <div id='input' class="card" >
            <p style={{ textAlign: "center", height: "0em", fontSize: "2em", padding: ".5em", paddingBottom: "0.8em", fontWeight: "600" }} id="heading">Basic Information</p>
            <div class="card-body">
                <div class="mb-3">

                    <div className="name_input">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                        <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="Last Name" />
                    </div>

                    <div className="date_input">
                        <input type="text" class="form-control" id="exampleFormControlInput3" placeholder="Gender" />
                        <input type="date" name="date" id="input_date" />
                    </div>

                    <div className="age_input">
                        <input type="number" name="age" id="age_input" placeholder='Age' />
                        <input type="text" name="" id="blood_group" placeholder='Blood Group' />
                    </div>

                    <button id='next_btn' type="button" class="btn btn-primary" onClick={() => {setNum(2)}}>Next</button>

                </div>
            </div>
        </div>
    );
}

export default Form;
