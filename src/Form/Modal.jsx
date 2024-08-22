import './Modal.css';

export default function Modal({props, errorMessage=null}){
    if(props){
        return (
            <div className="bodyModeal">
                <div className="modal">
                    {/* <h1 className='head-modal'>the form has been submitted successfully</h1> */}
                    <h1 style={{color: errorMessage? "red" : "green"}}>
                        {errorMessage!=null? errorMessage:"the form has been submitted successfully"}</h1>
                </div>
            </div>
        )
    }else{
        return (<></>)
    }
}