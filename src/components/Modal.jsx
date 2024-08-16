import React from 'react'
import '../styles/Modal.css'
import { useSelector } from 'react-redux'

const Modal = ({ showModal, backToHome }) => {
    const startDate = useSelector((state)=> state.tournament.startDate)
    const startTime = useSelector((state)=> state.tournament.startTime)
  return (
    <div>
      {showModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-confirm">
            <div className="modal-content">
              <div className="modal-header">
                <div className="icon-box">
                <i className="fa-solid fa-check"></i>
                </div>
                <h4 className="modal-title w-100">You’re All Set!</h4>
              </div>
              <div className="modal-body">
                <p style={{fontSize: '18px'}} className="text-center">
                You have successfully joined the tournament. Mark your calendar—your match is scheduled for {startDate} at {startTime}. We’ll send you a reminder as the event approaches. Good luck and get ready for some exciting competition!
                </p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success btn-block" onClick={backToHome}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Modal
