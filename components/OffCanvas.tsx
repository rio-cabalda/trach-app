'use client';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Open OffCanvas
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="right-offcanvas-modal"
        contentClassName="right-offcanvas-content"
      >
        <Modal.Header closeButton>
          <Modal.Title>Offcanvas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Content for the offcanvas goes here. You can place just about any Bootstrap component
            or custom elements here.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OffCanvas;
