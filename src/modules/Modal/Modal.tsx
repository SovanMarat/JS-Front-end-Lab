import ReactDOM from "react-dom";
import "./Modal.scss";

type ModalProps = {
  isOpenModal: boolean;
  changeStateModal: (isOpenModal: boolean) => void;
};

export default function Modal({ isOpenModal, changeStateModal }: ModalProps) {
  const modalBox = document.createElement("div");
  document.body.append(modalBox);
  const changeModal = () => changeStateModal(!isOpenModal);

  return ReactDOM.createPortal(
    <div className="wrapperModal">
      <div className="modalBox">
        <div className="modalBody">
          <form className="modalForm">
            <label className="modalHeader"> Sign In</label>
            <input
              className="inputDataUser"
              type="text"
              name="name"
              placeholder="name"
            />
            <input
              className="inputDataUser"
              type="text"
              name="password"
              placeholder="password"
            />
            <div className="btnSignIn start" onClick={changeModal}>
              Sign In
            </div>
          </form>
        </div>
      </div>
    </div>,
    modalBox
  );
}