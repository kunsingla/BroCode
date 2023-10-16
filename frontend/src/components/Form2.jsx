import React from 'react';

const Form2 = ({ setNum }) => {
    return (
        <div id='input_2' class="card" >
            <p style={{ textAlign: "center", height: "0em", fontSize: "2em", padding: ".5em", paddingBottom: "0.8em", fontWeight: "600" }} id="heading">School Information</p>

            <div class="card-body">
                <div class="mb-3">

                    <div className="class_input">
                        <input class="form-control" type="number" name="class" id="class_input" placeholder='Class' />
                        <input class="form-control" type="text" name="section" id="section_input" placeholder='Section' />
                    </div>

                    <div className="rollno_input">
                        <input id='date_input_2' type='date' placeholder='Date Of Admission' />
                        <input type="text" class='form-control' id='school_house_input' placeholder='School House' />
                    </div>

                    <button id='next_btn_2' type="button" class="btn btn-primary" onClick={() => {setNum(3)}}>Next</button>

                </div>
            </div>
        </div>
    );
}

export default Form2;
