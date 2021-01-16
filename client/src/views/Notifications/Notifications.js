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
import Cookies from 'js-cookie'
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
const initialFormData = Object.freeze({
  emailtime:"",
  clientemail:"",
  itemdescription:"",
  model:"",
  brand:"",
  quantity:"",
  unit:"",
  month:"",
  clientrfq:"",
  commonsno:"",
  commonenquirypouniqueid:"",
  commontotalitems:"",
  commonitemno:"",
  salesselectcompany:"",
  salesemailreceipttime:"",
  salesclientemail:"",
  commonitemdescription:"",
  commonspecsmodelno:"",
  commonbrand:"",
  commonqtyrequired:"",
  salesclientrfqno:"",
  salesemailstatus:"",
  salesquoteregretdate:"",
  salesenquiryregret:"",
  salesstatus:"",
  modeofsalespowithoutenqnquiry:"",
  authorizedbysalespowithoutenquiry:"",
  statusformalsalesporecieved:"",
  salesformalponumber:"",
  salesformalpoissuedate:"",
  salesmaterialdeliveryduedateonpo:"",
  salesmaterialdespatchBillingdate:"",
  quotationmanualrates:"",
  quotationmanualpurchasetype:"",
  quotationmanualdiscount:"",
  quotationmanualgst:"",
  quotationmanualstockstatus:"",
  salespaymentcreditnoofdays:"",
  purchaseratestatusornotavailableregretreason:"",
  salesstatuscheck:"",
  modeofsalespowithoutenquiry:"",
  authorizedbysalespowithoutenquiry:"",
  statusformalsalesporecieved:"",
  salesformalponumber:"",
  salesformalpoissuedate:"",
  salesmaterialdeliveryduedateonpo:"",
  salesmaterialdespatchbillingdate:"",
  quotationmanualpurchasetype:"",
  quotationmanualrates:"",
  quotationmanualdiscount:"",
  quotationmanualgst:"",
  quotationmanualstockstatus:"",
  salespaymentcreditnoofdays:"",
  purchaseratesstatus:"",
  salesformalpostatuscheck:"",
  salesregretnoofitemsfromtotalitems:""
});
const useStyles = makeStyles(styles);
export default function TableList() {
  const classes = useStyles();
  const [users, setState] = useState([])
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [tc, setTC] = useState(false);
  const [tr, setTR] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
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
  Cookies.set("emailtime",formData.emailtime)
  Cookies.set("clientemail",formData.clientemail)
  Cookies.set("clientrfq",formData.clientrfq)
  console.log(formData.month)
  Cookies.set("month",formData.month)
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
                <td id={value._id}>{value.commonsno}</td>
                <td id={value._id}>{value.commonenquirypouniqueid}</td>
                <td id={value._id}>{value.commontotalitems}</td>
                <td id={value._id}>{value.commonitemno}</td>
                <td id={value._id}>{value.salesselectcompany}</td>
                <td id={value._id}>{value.salesemailreceipttime}</td>
                <td id={value._id}>{value.salesclientemail}</td>
                <td id={value._id}>{value.commonitemdescription}</td>
                
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td><Form.Control name="commonsno" type="text" onChange={handleChange}/></td>
                <td><Form.Control name="commonenquirypouniqueid" type="text" onChange={handleChange}/></td>
                <td><Form.Control name="commontotalitems" type="text" onChange={handleChange}/></td>
                <td><Form.Control name="commonitemno" type="text" onChange={handleChange}/></td>
                <td><Form.Control name="salesselectcompany" type="text" onChange={handleChange}/></td>
                <td><Form.Control name="salesemailreceipttime" type="time" defaultValue={formData.emailtime} onChange={handleChange}/></td>
                <td><Form.Control name="salesclientemail" defaultValue={Cookies.get('clientemail')} type="text" onChange={handleChange}/></td>
                <td><Form.Control name="commonitemdescription" defaultValue={formData.itemdescription} type="text" onChange={handleChange}/></td>
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
              <Form.Group controlId="exampleForm.ControlInput2" style={{width:"100%"}}>
                <Form.Label>Client Email ID</Form.Label>
                <Form.Control type="email"  name="clientemail" onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput3" style={{width:"100%"}}>
                <Form.Label>Item Description</Form.Label>
                <Form.Control type="text"  name="itemdescription" onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4" style={{width:"100%"}}>
                <Form.Label>Model</Form.Label>
                <Form.Control type="text"  name="model" onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput5" style={{width:"100%"}}>
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text"  name="brand" onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput6" style={{width:"100%"}}>
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
              <Form.Group controlId="exampleForm.ControlInput7" style={{width:"100%"}}>
                <Form.Label>Month:</Form.Label>
                <Form.Control type="text"  name="month" onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput8" style={{width:"100%"}}>
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
          onClick={handleClose}>Add Item</Button>
        </Modal.Footer>
      </Modal>  
      <Modal
        show={show1}
        onHide={handleClose1}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Item from old Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput10" style={{width:"100%"}}>
                <Form.Label>Email Client email</Form.Label>
                <Form.Control plaintext readOnly defaultValue={Cookies.get('clientemail')}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput11" style={{width:"100%"}}>
                <Form.Label>Client rfq No.</Form.Label>
                <Form.Control plaintext readOnly defaultValue={Cookies.get('clientrfq')}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput12" style={{width:"100%"}}>
                <Form.Label>Month</Form.Label>
                <Form.Control plaintext readOnly defaultValue={Cookies.get("month")}/>
              </Form.Group>
              <h4>Enter Details Below:</h4>
              <Form.Group controlId="exampleForm.ControlInput13" style={{width:"100%"}}>
                <Form.Label>Item Description</Form.Label>
                <Form.Control type="text"  name="itemdescription" onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput14" style={{width:"100%"}}>
                <Form.Label>Model</Form.Label>
                <Form.Control type="text"  name="model" onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput15" style={{width:"100%"}}>
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text"  name="brand" onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput16" style={{width:"100%"}}>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="text"  name="quantity" onChange={handleChange}/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect2" style={{width:"100%"}}>
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
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button color="primary"
          onClick={handleClose1}>Add Item from old email</Button>
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
                <td id={value._id}>{value.commonspecsmodelno}</td>
                <td id={value._id}>{value.commonbrand}</td>
                <td id={value._id}>{value.commonqtyrequired}</td>
                <td id={value._id}>{value.salesclientrfqno}</td>
                <td id={value._id}>{value.salesemailstatus}</td>
                <td id={value._id}>{value.salesquoteregretdate}</td>
                <td id={value._id}>{value.salesenquiryregret}</td>
                <td id={value._id}>{value.salesstatus}</td>
               
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
            <tbody>
            <tr>
                <td><Form.Control type="text"  name="commonspecsmodelno" defaultValue={formData.model}  onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="commonbrand" defaultValue={formData.brand}  onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="commonqtyrequired" defaultValue={formData.quantity}  onChange={handleChange}/></td>
                <td><Form.Control type="text" name="salesclientrfqno" defaultValue={formData.clientrfq}  onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="salesemailstatus"  onChange={handleChange}/></td>
                <td><Form.Control type="date"  name="salesquoteregretdate"  onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="salesenquiryregret"  onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="salesstatus"  onChange={handleChange}/></td>
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
                <td id={value._id}>{value.modeofsalespowithoutenqnquiry}</td>
                <td id={value._id}>{value.authorizedbysalespowithoutenquiry}</td>
                <td id={value._id}>{value.statusformalsalesporecieved}</td>
                <td id={value._id}>{value.salesformalponumber}</td>
                <td id={value._id}>{value.salesformalpoissuedate}</td>
                <td id={value._id}>{value.salesmaterialdeliveryduedateonpo}</td>
                <td id={value._id}>{value.salesmaterialdespatchBillingdate}</td>
              
               
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td><Form.Control name="modeofsalespowithoutenqnquiry" type="text"  onChange={handleChange}/></td>
                <td><Form.Control name="authorizedbysalespowithoutenquiry" type="text"  onChange={handleChange}/></td>
                <td><Form.Control name="statusformalsalesporecieved" type="text"  onChange={handleChange}/></td>
                <td><Form.Control  name="salesformalponumber" type="text"  onChange={handleChange}/></td>
                <td><Form.Control name="salesformalpoissuedate" type="date"  onChange={handleChange}/></td>
                <td><Form.Control name="salesmaterialdeliveryduedateonpo" type="date" onChange={handleChange}/></td>
                <td><Form.Control name="salesmaterialdespatchBillingdate" type="date"  onChange={handleChange}/></td>
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
                <td id={value._id}>{value.quotationmanualrates}</td>
                <td id={value._id}>{value.quotationmanualpurchasetype}</td>
                <td id={value._id}>{value.quotationmanualdiscount}</td>
                <td id={value._id}>{value.quotationmanualgst}</td>
                <td id={value._id}>{value.quotationmanualstockstatus}</td>
                <td id={value._id}>{value.salespaymentcreditnoofdays}</td>
                <td id={value._id}>{value.purchaseratestatusornotavailableregretreason}</td>
                <td id={value._id}>{value.salesstatuscheck}</td>
              
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td><Form.Control name="quotationmanualrates" type="text"  onChange={handleChange}/></td>
                <td><Form.Control name="quotationmanualpurchasetype" type="text"  onChange={handleChange}/></td>
                <td><Form.Control name="quotationmanualdiscount" type="text"  onChange={handleChange}/></td>
                <td><Form.Control name="quotationmanualgst" type="text"  onChange={handleChange}/></td>
                <td><Form.Control name="quotationmanualstockstatus" type="text"  onChange={handleChange}/></td>
                <td><Form.Control name="salespaymentcreditnoofdays" type="text"  onChange={handleChange}/></td>
                <td><Form.Control name="purchaseratestatusornotavailableregretreason" type="date"  onChange={handleChange}/></td>
                <td><Form.Control name="salesstatuscheck" type="text"  onChange={handleChange}/></td>
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
                <td id={value._id}>{value.modeofsalespowithoutenquiry}</td>
                <td id={value._id}>{value.authorizedbysalespowithoutenquiry}</td>
                <td id={value._id}>{value.statusformalsalesporecieved}</td>
                <td id={value._id}>{value.salesformalponumber}</td>
                <td id={value._id}>{value.salesformalpoissuedate}</td>
                <td id={value._id}>{value.salesmaterialdeliveryduedateonpo}</td>
                <td id={value._id}>{value.salesmaterialdespatchbillingdate}</td>
                <td id={value._id}>{value.quotationmanualpurchasetype}</td>
              
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td><Form.Control type="text" name="modeofsalespowithoutenquiry"  onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="authorizedbysalespowithoutenquiry" onChange={handleChange}/></td>
                <td><Form.Control type="text" name="statusformalsalesporecieved"  onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="salesformalponumber" onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="salesformalpoissuedate" onChange={handleChange}/></td>
                <td><Form.Control type="date"  name="salesmaterialdeliveryduedateonpo" onChange={handleChange}/></td>
                <td><Form.Control type="date"  name="salesmaterialdespatchbillingdate" onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="quotationmanualpurchasetype" onChange={handleChange}/></td>
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
              <td id={value._id}>{value.quotationmanualrates}</td>
                <td id={value._id}>{value.quotationmanualdiscount}</td>
                <td id={value._id}>{value.quotationmanualgst}</td>
                <td id={value._id}>{value.quotationmanualstockstatus}</td>
                <td id={value._id}>{value.salespaymentcreditnoofdays}</td>
                <td id={value._id}>{value.purchaseratesstatus}</td>
                <td id={value._id}>{value.salesformalpostatuscheck}</td>
                <td id={value._id}>{value.salesregretnoofitemsfromtotalitems}</td>
                <td id={value._id}><Button color="danger">Remove</Button></td>
              </tr>
            </tbody>
            ))}
             <tbody>
            <tr>
                <td><Form.Control type="text"  name="quotationmanualrates" onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="quotationmanualdiscount" onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="quotationmanualgst" onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="quotationmanualstockstatus" onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="salespaymentcreditnoofdays" onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="purchaseratesstatus" onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="salesformalpostatuscheck" onChange={handleChange}/></td>
                <td><Form.Control type="text"  name="salesregretnoofitemsfromtotalitems" onChange={handleChange}/></td>
              </tr>
              </tbody>
             </Table>
          </CardBody>
        </Card>
        <Card>
        <Button color="success" onClick={handleSubmit}>Update</Button>
        </Card>
      </GridItem>
    </GridContainer>
  );
}