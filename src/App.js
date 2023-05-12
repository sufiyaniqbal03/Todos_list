import logo from "./logo.svg";
import "./App.css";
// import { Button, Stack,Navbar,Container,Nav,NavDropdown } from "react-bootstrap";
import Header from "./MyComponents/Main_heading";
import Todos from "./MyComponents/Todos";
import Footer from './MyComponents/Footer';
import MyHeader from "./MyComponents/Main_heading";
import Second_heading from "./MyComponents/second_heading";
import Display_todos from "./MyComponents/display_todos";

function App() {
 
  return (
    <>       
    <MyHeader title1 = 'MyTodosList'  dropdown={false}/>
    < Second_heading />
         </>
  );
}

Header.defaultProps = { //if we donot pass anny title 1 and title  then by default the below tiitles will be passed
  title1: 'Your title here',
  
} 

export default App;
