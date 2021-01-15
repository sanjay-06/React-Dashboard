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
  handleshow ()
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
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Add Item Section</h4>
            <p className={classes.cardCategoryWhite}>
              Form section
            </p>
          </CardHeader>
          <CardBody><center>
          <Button color="info" onClick={handleShow}> 
                Check company
              </Button>&emsp;&emsp;&emsp;
          <Button color="info" onClick={handleShow}> 
                Add Item
              </Button>&emsp;&emsp;&emsp;
              <Button color="info" onClick={handleShow1}> 
                Add Other Item
              </Button>&emsp;&emsp;&emsp;
              <Button color="info" onClick={handleShow}> 
                Check last Row
              </Button>
            </center>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sales Table 1</h4>
            <p className={classes.cardCategoryWhite}>
              sales report
            </p>
          </CardHeader>
          <CardBody>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Common S.no</th>
                <th>Common Enquiry/PO Unique ID</th>
                <th>Common Total Items</th>
                <th>Common Item No</th>
                <th>Sales Select Company</th>
                <th>Sales Email Receipt Time</th>
                <th>Sales Client Email</th>
                <th>Common Item Description</th>
                
              </tr>
            </thead>
          {users.map(value => (
            <tbody>
              <tr id={value._id}>
                <td id={value._id}>{value.unit}</td>
                <td id={value._id}>{value.clientemail}</td>
                <td id={value._id}>{value.item}</td>
                <td id={value._id}>{value.model}</td>
                <td id={value._id}>{value.quantity}</td>
                <td id={value._id}>{value.emailtime}</td>
                <td id={value._id}>{value.month}</td>
                <td id={value._id}>{value.client}</td>
                
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td name="Common S.no"><Form.Control type="text"/></td>
                <td name="Common Enquiry/PO Unique ID"><Form.Control type="text"/></td>
                <td name="Common Total Items"><Form.Control type="text" /></td>
                <td name="Common Item No"><Form.Control type="text" /></td>
                <td name="Sales Select Company"><Form.Control type="text"/></td>
                <td name="Sales Email Receipt Time"><Form.Control type="time" /></td>
                <td name="Sales Client Email"><Form.Control type="text" /></td>
                <td name="Common Item Description"><Form.Control type="text"/></td>
                <td name="table1add"><Button color="success" type="submit">Add</Button></td>
              </tr>
              </tbody>
             </Table>
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
                  <option>Nos.</option>
                  <option>Pcs.</option>
                  <option>Pkts.</option>
                  <option>Mtrs.</option>
                  <option>Rolls</option>
                  <option>Kg</option>
                  <option>Set</option>
                  <option>Bottle</option>
                  <option>Box</option>
                  <option>Litres</option>
                  <option>Feet</option>
                  <option>Sheet</option>
                  <option>Bundle</option>
                  <option>Pair</option>
                  <option>Can</option>
                  <option>Pack</option>
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
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sales Table 2</h4>
            <p className={classes.cardCategoryWhite}>
              sales report
            </p>
          </CardHeader>
          <CardBody>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Common Specs/Model No</th>
                <th>Common Brand</th>
                <th>Common Qty Required</th>
                <th>sales Client RFQ no.</th>
                <th>Sales Email Status</th>
                <th>Sales Quote/Regret Date</th>
                <th>Sales Enquiry Regret</th>
                <th>Sales Status</th>
               
              </tr>
            </thead>
          {users.map(value => (
            <tbody>
              <tr id={value._id}>
                <td id={value._id}>{value.unit}</td>
                <td id={value._id}>{value.unit}</td>
                <td id={value._id}>{value.clientemail}</td>
                <td id={value._id}>{value.item}</td>
                <td id={value._id}>{value.model}</td>
                <td id={value._id}>{value.quantity}</td>
                <td id={value._id}>{value.emailtime}</td>
                <td id={value._id}>{value.month}</td>
               
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
            <tbody>
            <tr>
                <td name="Common Specs/Model No"><Form.Control type="text"/></td>
                <td name="table2data1"><Form.Control type="text"/></td>
                <td name="Common Qty Required"><Form.Control type="text"/></td>
                <td name="sales Client RFQ no."><Form.Control type="text" /></td>
                <td name="Sales Email Status"><Form.Control type="text" /></td>
                <td name="Sales Quote/Regret Date"><Form.Control type="date"/></td>
                <td name="Sales Enquiry Regret"><Form.Control type="text" /></td>
                <td name="Sales Status"><Form.Control type="text" /></td>
               
                <td name="table2add"><Button color="success" type="submit">Add</Button></td>
              </tr>
              </tbody>
             </Table>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sales Table 3</h4>
            <p className={classes.cardCategoryWhite}>
              sales report
            </p>
          </CardHeader>
          <CardBody>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>MODE of sales PO without ENQUIRY</th>
                <th>AUTHORIZED BY Sales PO without ENQUIRY</th>
                <th>STATUS FORMAL Sales PO RECIEVED</th>
                <th>Sales FORMAL PO Number</th>
                <th>Sales FORMAL PO Issue Date</th>
                <th>Sales Material Delivery Due Date on PO</th>
                <th>Sales Material Despatch/Billing Date</th>
               
                
              </tr>
            </thead>
          {users.map(value => (
            <tbody>
              <tr id={value._id}>
                <td id={value._id}>{value.client}</td>
                <td id={value._id}>{value.emailtime}</td>
                <td id={value._id}>{value.clientemail}</td>
                <td id={value._id}>{value.item}</td>
                <td id={value._id}>{value.model}</td>
                <td id={value._id}>{value.quantity}</td>
                <td id={value._id}>{value.unit}</td>
              
               
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td name="MODE of sales PO without ENQUIRY"><Form.Control type="text"/></td>
                <td name="AUTHORIZED BY Sales PO without ENQUIRY"><Form.Control type="text"/></td>
                <td name="STATUS FORMAL Sales PO RECIEVED"><Form.Control type="text"/></td>
                <td name="Sales FORMAL PO Number"><Form.Control type="text" /></td>
                <td name="Sales FORMAL PO Issue Date"><Form.Control type="date" /></td>
                <td name="Sales Material Delivery Due Date on PO"><Form.Control type="date"/></td>
                <td name="Sales Material Despatch/Billing Date"><Form.Control type="date" /></td>
             
              
                <td name="table3add"><Button color="success" type="submit">Add</Button></td>
              </tr>
              </tbody>
             </Table>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sales Table 4</h4>
            <p className={classes.cardCategoryWhite}>
              sales report
            </p>
          </CardHeader>
          <CardBody>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Quotation MANUAL Rates</th>
                <th>Quotation MANUL Purchase Type</th>
                <th>Quotation MANUAL Discount</th>
                <th>Quotation MANUAL GST</th>
                <th>Quotation MANUAL STOCK Status</th>
                <th>Sales Payment CREDIT No. of Days</th>
                <th>Purchase Rate Status OR Not Available/Regret Reason</th>
                <th>Sales Status Check</th>
              
              </tr>
            </thead>
          {users.map(value => (
            <tbody>
              <tr id={value._id}>
                <td id={value._id}>{value.client}</td>
                <td id={value._id}>{value.month}</td>
                <td id={value._id}>{value.emailtime}</td>
                <td id={value._id}>{value.clientemail}</td>
                <td id={value._id}>{value.item}</td>
                <td id={value._id}>{value.model}</td>
                <td id={value._id}>{value.quantity}</td>
                <td id={value._id}>{value.unit}</td>
              
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td name="Quotation MANUAL Rates"><Form.Control type="text"/></td>
                <td name="Quotation MANUL Purchase Type"><Form.Control type="text" /></td>
                <td name="Quotation MANUAL Discount"><Form.Control type="text"/></td>
                <td name="Quotation MANUAL GST"><Form.Control type="text"/></td>
                <td name="Quotation MANUAL STOCK Status"><Form.Control type="text" /></td>
                <td name="Sales Payment CREDIT No. of Days"><Form.Control type="text" /></td>
                <td name="Purchase Rate Status OR Not Available/Regret Reason"><Form.Control type="date"/></td>
                <td name="Sales Status Check"><Form.Control type="text" /></td>
              
                <td name="table4add"><Button color="success" type="submit">Add</Button></td>
              </tr>
              </tbody>
             </Table>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sales Table 5</h4>
            <p className={classes.cardCategoryWhite}>
              sales report
            </p>
          </CardHeader>
          <CardBody>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>MODE of Sales PO without ENQUIRY</th>
                <th>AUTHORIZED BY Sales PO without ENQUIRY</th>
                <th>STATUS FORMAL Sales PO RECIEVED</th>
                <th>Sales FORMAL PO Number</th>
                <th>Sales FORMAL PO Issue Date</th>
                <th>Sales Material Delivery Due Date on PO</th>
                <th>Sales Material Despatch/Billing Date</th>
                <th>Quotation MANUAL Purchase Type</th>
               
              </tr>
            </thead>
          {users.map(value => (
            <tbody>
              <tr id={value._id}>
                <td id={value._id}>{value.month}</td>
                <td id={value._id}>{value.client}</td>
                <td id={value._id}>{value.model}</td>
                <td id={value._id}>{value.emailtime}</td>
                <td id={value._id}>{value.clientemail}</td>
                <td id={value._id}>{value.item}</td>
                <td id={value._id}>{value.model}</td>
                <td id={value._id}>{value.quantity}</td>
              
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td name="MODE of Sales PO without ENQUIRY"><Form.Control type="text" /></td>
                <td name="AUTHORIZED BY Sales PO without ENQUIRY"><Form.Control type="text"/></td>
                <td name="STATUS FORMAL Sales PO RECIEVED"><Form.Control type="text"/></td>
                <td name="Sales FORMAL PO Number"><Form.Control type="text"/></td>
                <td name="Sales FORMAL PO Issue Date"><Form.Control type="text"/></td>
                <td name="Sales Material Delivery Due Date on PO"><Form.Control type="text" /></td>
                <td name="Sales Material Despatch/Billing Date"><Form.Control type="text" /></td>
                <td name="Quotation MANUAL Purchase Type"><Form.Control type="date"/></td>
               
                <td name="table3add"><Button color="success" type="submit">Add</Button></td>
              </tr>
              </tbody>
             </Table>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Sales Table 6</h4>
            <p className={classes.cardCategoryWhite}>
              sales report
            </p>
          </CardHeader>
          <CardBody>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Quotation MANUAL Rates</th>
                <th>Quotation MANUAL Discount</th>
                <th>Quotation MANUAL GST</th>
                <th>Quotation MANUAL stock status</th>
                <th>Sales Payment CREDIT No. of Days</th>
                <th>Purchase Rates Status OR Not Available/Regret Reason</th>
                <th>Sales FORMAL PO Status Check</th>
                <th>Sales Regret No. of items from Total items</th>
              </tr>
            </thead>
          {users.map(value => (
            <tbody>
              <tr id={value._id}>
              <td id={value._id}>{value.unit}</td>
                <td id={value._id}>{value.month}</td>
                <td id={value._id}>{value.client}</td>
                <td id={value._id}>{value.model}</td>
                <td id={value._id}>{value.emailtime}</td>
                <td id={value._id}>{value.clientemail}</td>
                <td id={value._id}>{value.item}</td>
                <td id={value._id}>{value.model}</td>
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td name="Quotation MANUAL Rates"><Form.Control type="text" /></td>
                <td name="Quotation MANUAL Discount"><Form.Control type="text" /></td>
                <td name="Quotation MANUAL GST"><Form.Control type="text"/></td>
                <td name="Quotation MANUAL stock status"><Form.Control type="text"/></td>
                <td name="Sales Payment CREDIT No. of Days"><Form.Control type="text"/></td>
                <td name="Purchase Rates Status"><Form.Control type="text"/></td>
                <td name="Sales FORMAL PO Status Check"><Form.Control type="text" /></td>
                <td name="Sales Regret No. of items from Total items"><Form.Control type="text" /></td>
                <td name="table6add"><Button color="success" type="submit">Add</Button></td>
              </tr>
              </tbody>
             </Table>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}