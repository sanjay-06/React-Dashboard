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

export default function TableList() {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [tc, setTC] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
    <Form.Control type="date" placeholder="Date" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Number of days</Form.Label>
    <Form.Control as="select">
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
    <Form.Control as="select">
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Reason for leave</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
          color="primary"
          onClick={() => {
            handleClose()
            showNotification("tc")
          }}>Apply</Button>
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
      </GridItem>
    </GridContainer>
  );
}
