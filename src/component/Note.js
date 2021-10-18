import React, {useState} from "react";
import data from "bootstrap/js/src/dom/data";

const Note = (props) =>{
    let [recState , setRecState] = useState(props.data);
    let result = recState;
    return(
      <React.Fragment>

          <section className="mt-2">
              <div className="container">
                  <button className="btn btn-success">NOTE</button>
                  <div className="row mt-2 bg-light ">
                     <div className="col-md-6 p-3 d-flex justify-content-md-between  bg-light">
                         <span className="">Strategy Positions</span>
                         <span>{console.log(result)}npm </span>
                         <span><i className="fa fa-trash btn btn-danger" aria-hidden="true"></i>
                          </span>
                         <span className=" btn-outline-black p-2">RESET</span>
                     </div>
                      <div className="col-md-6 bg-white">

                      </div>
                  </div>
              </div>
          </section>
      </React.Fragment>
  )
}

export default Note;