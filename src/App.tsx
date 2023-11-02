import './styles.css'
import  {SigninPage } from './pages/SigninPage'
import { SignIn } from './components/organisms/SignIn'
import {SearchComponent}  from './components/practice/SearchFunctionality'
import { UseStateHook } from './components/practice/UseState';
import { ApiCalls } from './components/practice/ApiCalls';
import { SideBar } from './components/organisms/SIdebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { OperandSelect } from './components/practice/Calculator/Operand';
import { Box } from '@mui/material';
import { Operand } from './components/practice/Calci/Operation';
import { Converter } from './components/practice/Calci/Converter';
import { ValidInput } from './components/practice/Calci/ValidInput';
import { WeatherCOnverter } from './components/practice/Calci/Weather';
import { SearchWithMap } from './components/practice/Calci/SearchWIthMap';
import { details } from './utils/constants/constants';
import { SearchImpl } from './components/practice/SearchImpl';


const items = [
    "Apple 1",
    "Banana",
    "Cherry",
    "Grapes",
    "Lemon",
    "Orange",
    "Peach",
    // Add more items as needed
  ];
  
export const App = () => {
    return (<>
    <Box width={"200px"}>
    <Operand/>
    <Converter/>
    <SignIn/>
    </Box>
    <Box>
      <ValidInput/>
      <WeatherCOnverter/>
      <SearchWithMap items={details}/>
      <SearchImpl/>
    </Box>
      <Router>
        <Routes>
            <Route path="/" element={<SideBar/>}/>
        </Routes>
       </Router></>
    )
}