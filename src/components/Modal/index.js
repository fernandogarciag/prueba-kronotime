const Modal = () => (
  <div
    className="modal fade"
    id="modalStart"
    tabIndex="-1"
    aria-labelledby="modalStartLabel"
    aria-modal="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-dark text-white">
          <i className="fa fa-exclamation-circle fa-lg text-warning me-2"></i>
          <h5 className="modal-title " id="modalStartLabel">
            ¡Importante!
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body p-4">
          Debido a la situación de orden público del país, nuestras entregas
          están presentando retrasos. <br />
          <br />
          <span className="fw-bold">¡Gracias por su comprensión!</span>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
