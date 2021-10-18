import React, {useEffect, useState} from "react";
import './Home.css';
import axios from 'axios';
import {prettyDOM} from "@testing-library/react";
import Note from "./Note";
import OptionChainTable from "./OptionChainTable";

let user = {}
const Home = ()=>{
   let [userState, setUserState] = useState({
       user : {
           index : '',
           segment : '',
           expiryDate : '',
           checkBoxValue : ''
       },
       isSubmitted : false
   })
 //Get selectBox Input Values
    let updateInput = (event) => {
        setUserState({
            user : {
                ...userState.user,
                [event.target.name] : event.target.value
            }
        });
    };

      //Get CheckBox Value
    let updateCheck = (event) => {
        setUserState({
            user : {
                ...userState.user,
                [event.target.name] : event.target.checked
            }
        });
    };

    //Submit data to server
    let submitRecord = (event)=>{
        event.preventDefault();
        let dataURL = `http://127.0.0.1:5000/api/records`;
        axios.post(dataURL,user).then( (response)=>{
            setUserState({
                ...userState,
                isSubmitted : true
            });
        }).catch( (error)=>{
            console.error(error);
        });
    };

    //updateRecord
  /*  useEffect( ()=>{
        let dataURL = `http://127.0.0.1:5000/api/reocrds/${record_Id}`;
        axios.get(dataURL).then( (response)=>{
            setUserState({
                ...userState,
                selectedRecord : response.data
            });
        }).catch((error)=>{
            console.error(error);
        });
    }, [recordId]);*/


   let  sendData = ()=>{
        return userState.user
    }
    return(
        <React.Fragment>
         <pre>{JSON.stringify(userState.user)}</pre>
        <form  onSubmit={submitRecord}>
            <section className="mt-3">

                <section id="sec-1">
                    <div className="container bg-light">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <select
                                        name="index"
                                        value={user.index}
                                        onChange={updateInput}
                                        className="form-control mt-3 selectOption">
                                        <option value="Arif" className="font-weight-bolder">Arif</option>
                                        <option value="Hussain">Hussain</option>
                                        <option value="Ansari">Ansari</option>
                                        <option value="Bobby">Bobby</option>
                                    </select>
                                    <small className="font-weight-bolder">Select index/stock</small>
                                </div>
                            </div>
                            <div className="col-md-8"></div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <small  className="cls bg-primary">Spot Price: 18338.55</small>
                                <small className="cls bg-warning">Futures Price: 18356.75</small>
                                <small  className="cls bg-success">Lot Size: 50</small>
                                <small  className="cls" className="cls bg-secondary">IV: 16.62</small>
                                <small  className="cls bg-danger">IV Percentile: 38.31</small>
                                <small  className="cls blue-grey">NIFTY IV Chart
                                </small>
                                <small id="lightRed" className="cls bg-info" >DTE: 0</small>

                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <small>Date</small>
                                    <input type="date" className="form-control myInput"/>
                                    <small className="font-weight-bolder">Select Pay-off Date</small>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                <div className="container bg-light mt-1">
                    <section id="sec-2" className="mx-2 p-3">
                        <div className="row">
                            <div className="col-md-8 d-flex">
                                <div className="col-md-4 mx-2 pt-4">
                                    <div className="form-group">
                                        <select
                                            name="segment"
                                            value={user.segment}
                                            onChange={updateInput}
                                            className="form-control" id="myBorder" >
                                            <option value="Futures">Futures</option>
                                            <option value="Options">Options</option>
                                        </select>
                                        <small className="font-weight-bolder">Select Segment</small>
                                    </div>
                                </div>
                                <div className="col-md-4 mx-2 pt-4">
                                    <div className="form-group">
                                        <select
                                            name="expiryDate"
                                            value={user.expiryDate}
                                            onChange={updateInput}
                                            className="form-control" id="myBorder">
                                            <option value="14OCT2021">14OCT2021</option>
                                            <option value="21OCT2021">21OCT2021</option>
                                            <option value="28OCT2021">28OCT2021</option>
                                            <option value="03NOV2021">03NOV2021</option>
                                            <option value="11NOV2021">11NOV2021</option>
                                            <option value="11NOV2021">11NOV2021</option>
                                        </select>
                                        <small className="font-weight-bolder">Select Expiry</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className="row mt-4 align-items-center">
                            <div className="col-md-3">
                                <input
                                    name="radio-btn"
                                    value={user.checkBoxValue}
                                    onChange={updateCheck}
                                    type="radio" name="radio-btn" id="radioBtn"/>Buy
                                <input
                                    name="radio-btn"
                                    value={user.checkBoxValue}
                                    onChange={updateCheck}
                                    type="radio" name="radio-btn" id="radioBtn"/>Sell
                            </div>
                            <div className="col-md-3">
                                <small className="font-weight-bolder mx-4">Lot Qty.</small>
                                <span id="decr" className=""> <i className="fa fa-minus"></i> </span>
                                <span id="counter" className="font-weight-bold">1</span>
                                <span id="incr" className=""><i className="fa fa-plus"></i></span>
                            </div>
                            <div className="col-md-3">
                                <span className="font-weight-bolder">Future Price : <span className="text-danger">18356.75</span></span>
                            </div>
                            <div className="col-md-3">
                                <button className=" btn btn-blue-grey" onClick={sendData}>ADD POSITION</button>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container mt-1 bg-light">
                    <section className="p-3">
                        <span className="ml-5"> Add Strategies:</span>
                        <span className="span mx-2">STRADDLE</span>
                        <span className="span"> STRANGLE</span>
                        <span className="span">SPREAD</span>
                        <span className="span">IRON FLY</span>
                        <span className="span">IRON CONDOR</span>
                        <span className="span">JADE LIZARD</span>

                    </section>
                </div>
            </section>
        </form>
            <OptionChainTable data={sendData()}/>
        </React.Fragment>
    )
}

export default Home;