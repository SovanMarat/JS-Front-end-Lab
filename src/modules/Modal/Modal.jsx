import ReactDOM from "react-dom";
import "./Modal.css";

function Modal(props) {
  const header = document.querySelector(".header");

  return ReactDOM.createPortal(
    <div className="wrapperModal">
      <div className="modalBox">
        <div className="modalBody">
        <form className="modalForm">
        <label className="modalHeader"> Sign In</label>
<input className="inputDataUser" type="text" name="name" placeholder="name"/>
<input className="inputDataUser" type="text" name="password" placeholder="password"/>
{/* <input type="text" name="name" ref={refName} onChange={(e)=>setNamePlayer(e.target.value)} defaultValue={namePlayer}/> */}
<div className="btnSignIn start"  onClick={()=> props.updateData(!props.isOpenModal)}>Sign In</div>

{/* <div className="btnStart" onClick={()=>startGame()}> Старт </div> */}
</form>
        </div>
      </div>
    </div>,
    header
  );
}
export default Modal;
