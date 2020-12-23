import React,{ useState }  from "react"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import AddAlert from "@material-ui/icons/AddAlert";
import Snackbar from "components/Snackbar/Snackbar.js";

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
  date:"",
  hours: "",
  days: "",
  reason:""
});
export default function TableList() {
  const classes = useStyles();
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
const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData.hours);
   let value1=formData.hours
   let value2=formData.days
   if(value1 == 0 && value2 == 0 )
   {
     showNotification("tr");
   }
   else if(value1 != 0 && value2 != 0 )
   {
     showNotification("tr");
   }
   else
   {
     showNotification("tc");
     handleClose();
   }
}

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Properties", "Name", "site", "Hours"]}
              tableData={[
                ["Attendance", "Niger", "Oud-Turnhout", "36"],
                ["Attendance", "Curaçao", "Sinaai-Waas", "23"],
                ["Attendance", "Netherlands", "Baileux", "56"],
                ["Attendance", "Korea, South", "Overland Park", "38"],
                ["Attendance", "Malawi", "Feldkirchen in Kärnten", "63"],
                ["Attendance", "Chile", "Gloucester", "78"]
              ]}
            /><br />
              <center><Button color="primary" onClick={handleShow}> 
                Apply Leave
              </Button></center>
              <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Request for Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Select the Date</Form.Label>
    <Form.Control type="date"  name="date" onChange={handleChange}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Number of days</Form.Label>
    <Form.Control as="select" name="days" onChange={handleChange}>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Permission Hours</Form.Label>
    <Form.Control as="select" name="hours" onChange={handleChange}>
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1" aria-required>
    <Form.Label>Reason for leave</Form.Label>
    <Form.Control as="textarea" rows={3} name="reason" onChange={handleChange}/>
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button color="primary"
          onClick={handleSubmit}>Apply</Button>
        </Modal.Footer>
      </Modal>
          </CardBody>
        </Card>
        <Snackbar
                  place="tc"
                  color="success"
                  icon={AddAlert}
                  message="Leave Applied successfully"
                  open={tc}
                  closeNotification={() => setTC(false)}
                  close
                />
         <Snackbar
                  place="tr"
                  color="danger"
                  icon={AddAlert}
                  message="Alert! Leave Not Applied"
                  open={tr}
                  closeNotification={() => setTR(false)}
                  close
                />
      </GridItem>
    </GridContainer>
  );
}
