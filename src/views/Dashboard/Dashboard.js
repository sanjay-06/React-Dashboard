import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Accessibility from "@material-ui/icons/Accessibility";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon"
import CardFooter from "../../components/Card/CardFooter";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {ButtonGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from '../../variables/charts'
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>event</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Pending Leave</p>
              <h3 className={classes.cardTitle}>
                   8 <small>Days</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
             
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
              <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Site Staff Active</p>
              <h3 className={classes.cardTitle}>
                   17 <small>Staffs</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
            
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>schedule</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Today 's Clock On</p>
              <h3 className={classes.cardTitle}>11</h3>
            </CardHeader>
            <CardFooter stats>
           
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>alarm</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total Time Worked</p>
              <h3 className={classes.cardTitle}>18263</h3>
            </CardHeader>
            <CardFooter stats>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} >
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>construction</Icon>    
              </CardIcon>
              <p className={classes.cardCategory}>Please select the Name of the site you search</p>
              <div><br />
    <DropdownButton
      as={ButtonGroup}
      menuAlign={{ lg: 'right' }}
      title=" Construction site name "
      id="dropdown-menu-align-responsive-1"
    >
      <Dropdown.Item eventKey="1">60 Martin Place</Dropdown.Item>
      <Dropdown.Item eventKey="2">61 Martin Place</Dropdown.Item>
    </DropdownButton>
  </div>
            </CardHeader>
            <CardFooter stats>
            
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridItem xs={12}>
          <Card>
          <CardHeader color="primary">
          <CardIcon color="success">
                <Icon>hourglass_top</Icon>
          </CardIcon>
        <h4 className={classes.cardTitleWhite}>Total Number of Working Hours</h4>
      </CardHeader>
      <br />
            <Chart className=".d-none .d-sm-block"/>
            <CardFooter stats>
           
            </CardFooter>
          </Card>
        </GridItem>
  </div>
  );
}
