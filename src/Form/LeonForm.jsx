import './LeonForm.css';
import Modal from './Modal';
import { useState } from 'react';

export default function LeonForm(){
    const [info, setInfo] = useState({
        name: '',
        phone: '',
        age: '',  
        employee: false,
        salary: ''  
    })
    const [showModal, setShowModal] = useState(false);
    const [errorMessage,setErrorMessage] = useState(null);

    function submitForm(event){
        event.preventDefault();
        setErrorMessage(null);
        if(info.age < 18 || info.age > 100){
            setErrorMessage("Your Age is not allowed!");
        }else if((info.phone).length < 11 || (info.phone).length > 14){
            setErrorMessage("Your Phone Number is not valid!");
        }else if(info.name === ""){
            setErrorMessage("Name is required!");
        }else if(info.salary === ""){
            setErrorMessage("Salary is required!");
        }
        setShowModal(true);
    }

    function closeModal(){
        if(showModal){
            setShowModal(false);
        }
    }

    // const btnDisabled = info.name === "" || info.phone === "" || info.age === "";
    function btnDisabled(){
        if(info.name === "" || info.phone === "" || info.age === ""){
            return true;
        }else{
            return false;
        }
    }

    // let bgBtnDisabledClass = "";
    //     if(btnDisabled()){
    //         bgBtnDisabledClass = "bgBtnDisabled";
    //     }else{
    //         bgBtnDisabledClass = "";
    //     }

    return(
        <div className="leon-form" onClick={closeModal}>
            <form>
                <h1 className='head-form'>Requesting a Leon</h1>

                <label>Name: </label>
                <input type="text" value={(info.name).trimStart()} 
                onChange={(event) => {
                    setInfo({...info, name: (event.target.value).trimStart()});
                }} />

                <label>Phone Number: </label>
                <input type="number" value={info.phone} 
                onChange={(event) => {
                    setInfo({...info, phone: event.target.value});
                }}/>

                <label>Age: </label>
                <input type="number" value={info.age} 
                onChange={(event) => {
                    setInfo({...info, age: event.target.value});
                }}/>

                <label className='ch-box'>Are you an Empolyee</label>
                <input type="checkbox" checked={info.employee}
                onChange={(event) => {
                    setInfo({...info, employee: event.target.checked});
                }} />

                <label>Salary: </label>
                <select name="salary" value={info.salary} 
                onChange={(event) => {
                    setInfo({...info, salary: event.target.value});
                }}>
                    <option name="salary-0"></option>
                    <option name="salary-1">less than $500</option>
                    <option name="salary-2">between $1000 to $3000</option>
                    <option name="salary-3">between $3000 to $6000</option>
                    <option name="salary-4">between $6000 to $10,000</option>
                    <option name="salary-5">Above $10,000</option>
                </select>

                <button
                    id="submit" 
                    className={btnDisabled()? "bgBtnDisabled":""} 
                    disabled={btnDisabled()}
                    onClick={submitForm}>
                        Submit
                </button>
            </form>
            <Modal props={showModal} errorMessage={errorMessage}/>
        </div>
    );

}