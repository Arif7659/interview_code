import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Note from "./Note";


let OptionChainTable= (props) => {
    let [contactState , setContactState] = useState({
        contacts : []
    });

    let [show, setShow] = useState(true);

    useEffect(() => {
        let dataURL  = 'https://gist.githubusercontent.com/thenaveensaggam/270f3990f36d1c1ad71cab4f06c8e67b/raw/77e0eb4c3d2cbafe88901006dac4e8daf2705f82/contacts.04022021.json';
        axios.get(dataURL).then((response) => {
            setContactState({
                contacts : response.data
            });
        }).catch((error) => {
            console.error(error);
        });
    }, []);


    let {contacts} = contactState;
    return (
        <React.Fragment>
           <div className="container">
                <div>
                    <div className="row justify-content-center mt-2">
                        <div className="col-md-4"></div>
                        <div className="col-md-4"><h1>Employees Table</h1></div>
                        <div className="col-md-4"
                             onClick={() =>setShow(!show)}><h2 className="btn btn-info">Show data <i className="fa fa-caret-down"></i></h2></div>
                    </div>
                </div>

               {
                   show ?  <table className="table table-hover text-center table-striped mt-3">
                       <thead className="bg-primary text-white">
                       <tr>
                           <th>SNO</th>
                           <th>NAME</th>
                           <th>AGE</th>
                           <th>Email</th>
                           <th>Phone</th>
                           <th>CITY</th>
                           <th>STATE</th>
                       </tr>
                       </thead>
                       <tbody>
                       {
                           contacts.length > 0 &&
                           contacts.map(contact => {
                               return (
                                   <tr key={contact.login.uuid}>
                                       <td>{contact.login.uuid.substr(contact.login.uuid.length - 5)}</td>
                                       <td>{contact.name.first} {contact.name.last}</td>
                                       <td>{contact.dob.age}</td>
                                       <td>{contact.email}</td>
                                       <td>{contact.phone}</td>
                                       <td>{contact.location.city}</td>
                                       <td>{contact.location.state}</td>
                                   </tr>
                               )
                           })
                       }
                       </tbody>
                   </table> : null
               }
           </div>
            <Note data={props.data}/>
        </React.Fragment>
    )
}

export default OptionChainTable;
