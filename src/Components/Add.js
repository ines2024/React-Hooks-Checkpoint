import React ,{useState} from 'react' ;
import {Button,Modal,Form} from 'react-bootstrap';


export default function Add() {
    const [show, setShow] = useState(false);
  //Modal Manipulation 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //state adding new movie
    const [title,settitle]= useState("");
    const [description,setdescription]= useState("");
    const [image,setimage]= useState("");
    const [rate,setrate]= useState("");
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                   <Form>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                   <Form.Label>Movie Title</Form.Label>
                   <Form.Control type="email" placeholder="Give the title of the movie" onChange={(e)=>settitle(e.target.value)} />
                   <Form.Label>Movie Description</Form.Label>
                   <Form.Control type="email" placeholder="Give a brief description" onChange={(e)=>setdescription(e.target.value)} />
                   <Form.Label>PosterURL</Form.Label>
                   <Form.Control type="email" placeholder="Give the adress of the Poster" onChange={(e)=>setimage(e.target.value)} />
                   <Form.Label>Movie Rating</Form.Label>
                   <Form.Control type="email" placeholder="Give the rate of the movie" onChange={(e)=>setrate(e.target.value)} />
                   </Form.Group>
                   </Form>
           </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 