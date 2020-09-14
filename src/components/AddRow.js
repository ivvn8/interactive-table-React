import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'


const AddRow = ({ addRow }) => {

    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState()
    const [userFirstName, setUserFirstName] = useState()
    const [userLastName, setUserLastName] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userPhone, setUserPhone] = useState()
    const [newRow, setNewRow] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formSubmit = (event) => {
        event.preventDefault()
        setNewRow({
            id: userId,
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            phone: userPhone
        })
        addRow(newRow)
        handleClose()
    }

    return (
        <React.Fragment>
            <button className="btn btn-info" onClick={handleShow}>Добавить пользователя</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавление нового пользователя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formSubmit}>
                        <div className="form-group">
                            <label>Id</label>
                            <input type="number" className="form-control" required onChange={event => setUserId(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" required onChange={event => setUserFirstName(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" required onChange={event => setUserLastName(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" required onChange={event => setUserEmail(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="number" className="form-control" required onChange={event => setUserPhone(event.target.value)} />
                        </div>
                        <div className="form-group d-flex justify-content-between">
                            <button type="submit"
                                className="btn btn-info"
                                disabled={
                                    !userId || !userFirstName || !userLastName || !userEmail || !userPhone
                                }>Добавить в таблицу</button>
                            <button className="btn btn-secondary" onClick={handleClose}>Закрыть</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default AddRow