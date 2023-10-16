import React from 'react';

const Form3 = ({ setNum, postData }) => {
    return (
        <div id='input_3' className="card">
            <p style={{ textAlign: "center", height: "0em", fontSize: "2em", padding: ".5em", paddingBottom: "0.8em", fontWeight: "600" }} id="heading">Contact Details</p>
            <div class="card-body">
                <div class="mb-3">

                    <div className="name">
                        <input class="form-control" id="father_name_input" type="text" name="" placeholder="Father's Name" />
                        <input class="form-control" id="mother_name_input" type="text" name="" placeholder="Mother's Name" />
                    </div>

                    <div className="email">
                        <input type="email" class="form-control" id='email_input' placeholder='Email' />
                        <input type="number" class="form-control" name="" id="phone_number_input" placeholder='Phone Number' />
                    </div>

                    <textarea name="" placeholder='Address' class="form-control" id="address_input" cols="30" rows="5"></textarea>
                    <button id='submit_btn' type="button" class="btn btn-primary" onClick={() => {
                        postData();
                        setNum(0);
                    }}>Submit</button>
                </div>
            </div>
        </div>



    );
}

export default Form3;
