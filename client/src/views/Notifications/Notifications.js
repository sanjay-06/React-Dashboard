import React,{ useState , useEffect  }  from "react"
import { makeStyles } from "@material-ui/core/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import Button from "../../components/CustomButtons/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "../../components/Snackbar/Snackbar";
import axios from "axios"
import Table from 'react-bootstrap/Table'
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);
const initialFormData = Object.freeze({
  emailtime:"",
  clientemail:"",
  itemdescription:"",
  model:"",
  brand:"",
  quantity:"",
  unit:"",
  month:"",
  clientrfq:""
});
export default function TableList() {
  const classes = useStyles();
  const [users, setState] = useState([])
  const [show, setShow] = useState(false);
  const [tc, setTC] = useState(false);
  const [tr, setTR] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, updateFormData] = useState(initialFormData);
  const showNotification = place => {
    switch (place) {
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function() {
            setTC(false);
          }, 6000);
        }
        break;
        case "tr":
          if (!tr) {
            setTR(true);
            setTimeout(function() {
              setTR(false);
            }, 6000);
          }
          break;
  }
 }
 const handleChange = (e) => {
  updateFormData({
    ...formData,
    [e.target.name]: e.target.value.trim()
  });
};
useEffect(() =>
{
  const apiUrl ="http://localhost:9000/admin/getitem";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>  setState(data));
},[])
const handleSubmit = (e) => {
  e.preventDefault() 
   if(!formData)
   {
     showNotification("tr");
   }
   else
   {
     showNotification("tc");
     handleClose();
     const url="http://localhost:9000/admin/additem";
     let sendData = () => {
      axios.post(url, formData)
         .then(res => {
           console.log('Data send')
          })
         .catch(err=>{
           if(err.response)
           {
            console.log("Invalid password")
           }
         })
      }
      sendData();
    }
  }
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sales Table</h4>
            <p className={classes.cardCategoryWhite}>
              sales report
            </p>
          </CardHeader>
          <CardBody>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Email Time</th>
                <th>Client Email</th>
                <th>Item</th>
                <th>Model</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Month</th>
                <th>Client</th>
              </tr>
            </thead>
          {users.map(value => (
            <tbody>
              <tr id={value._id}>
                <td id={value._id}>{value.emailtime}</td>
                <td id={value._id}>{value.clientemail}</td>
                <td id={value._id}>{value.item}</td>
                <td id={value._id}>{value.model}</td>
                <td id={value._id}>{value.quantity}</td>
                <td id={value._id}>{value.unit}</td>
                <td id={value._id}>{value.month}</td>
                <td id={value._id}>{value.client}</td>
              </tr>
            </tbody>
            ))}
             </Table>
              <center><Button color="primary" onClick={handleShow}> 
                Add Item
              </Button></center>
              <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Item from New Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form>
  <Form.Group controlId="exampleForm.ControlInput1" style={{width:"100%"}}>
    <Form.Label>Email Time</Form.Label>
    <Form.Control type="Time"  name="emailtime" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1" style={{width:"100%"}}>
    <Form.Label>Client Email ID</Form.Label>
    <Form.Control type="email"  name="clientemail" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1" style={{width:"100%"}}>
    <Form.Label>Item Description</Form.Label>
    <Form.Control type="text"  name="itemdescription" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1" style={{width:"100%"}}>
    <Form.Label>Model</Form.Label>
    <Form.Control type="text"  name="model" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1" style={{width:"100%"}}>
    <Form.Label>Brand</Form.Label>
    <Form.Control type="text"  name="brand" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1" style={{width:"100%"}}>
    <Form.Label>Quantity</Form.Label>
    <Form.Control type="text"  name="quantity" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1" style={{width:"100%"}}>
    <Form.Label>Unit</Form.Label>
    <Form.Control as="select" name="unit" onChange={handleChange}>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1" style={{width:"100%"}}>
    <Form.Label>Month:</Form.Label>
    <Form.Control type="text"  name="month" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1" style={{width:"100%"}}>
    <Form.Label>Client's RFQ No.:</Form.Label>
    <Form.Control type="text"  name="clientrfq" onChange={handleChange}/>
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button color="primary"
          onClick={handleSubmit}>Add Item</Button>
        </Modal.Footer>
      </Modal>
          </CardBody>
        </Card>
        <Snackbar
                  place="tc"
                  color="success"
                  icon={AddAlert}
                  message="Success! Details added"
                  open={tc}
                  closeNotification={() => setTC(false)}
                  close
                />
         <Snackbar
                  place="tr"
                  color="danger"
                  icon={AddAlert}
                  message="Alert! Improper details"
                  open={tr}
                  closeNotification={() => setTR(false)}
                  close
                />
      </GridItem>
    </GridContainer>
  );
}