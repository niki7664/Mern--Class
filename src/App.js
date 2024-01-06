import { useState } from 'react';
import './App.css';
import Address from './practiceComponent/Address';
import Age from './practiceComponent/Age';
import ButtonClick from './practiceComponent/ButtonClick';
import College from './practiceComponent/College';
import Detail from './practiceComponent/Detail';
import Detail1 from './practiceComponent/Detail1';
import EffectOnDifferentData from './practiceComponent/EffectOnDifferentData';
import Images from './practiceComponent/Images';
import Info from './practiceComponent/Info';
import LearnMap1 from './practiceComponent/LearnMap1';
import LearnMap2 from './practiceComponent/LearnMap2';
import LearnTernary from './practiceComponent/LearnTernary';
import LearnCleanUpFunction from './practiceComponent/LearnUseEffectHook.jsx/LearnCleanUpFunction';
import LearnUseEffectHook from './practiceComponent/LearnUseEffectHook.jsx/LearnUseEffectHook';
import Increment from './practiceComponent/LearnUseStateHook/Increment';
import Increament from './practiceComponent/LearnUseStateHook/Increment';

import IncrementByChoice from './practiceComponent/LearnUseStateHook/IncrementByChoice';
import LearnUseState2 from './practiceComponent/LearnUseStateHook/LearnUseState2';
import LearnUseStateHook1 from './practiceComponent/LearnUseStateHook/LearnUseStateHook1';
import LearnUseStateImage from './practiceComponent/LearnUseStateHook/LearnUseStateImage';
import LearnUseStateName from './practiceComponent/LearnUseStateHook/LearnUseStateName';
import Toggle from './practiceComponent/LearnUseStateHook/Toggle';
import WhyUseState from './practiceComponent/LearnUseStateHook/WhyUseState';
import Location from './practiceComponent/Location';
import Name from './practiceComponent/Name';
import MyLinks from './practiceComponent/MyLinks';
import MyRoutes from './practiceComponent/MyRoutes';
import Form1 from './practiceComponent/Form/Form1';
import Form2 from './practiceComponent/Form/Form2';
import NestingRoute from './practiceComponent/LearnRoute/NestingRoute';
import ReactRouter from './practiceComponent/LearnRoute/ReactRouter';
import Form3 from './practiceComponent/Form/Form3';
import Learn1UseRefHook from './practiceComponent/LearnUseRefHook/Learn1UseRefHook';
import AddDataToLocalStorage from './practiceComponent/LearnLocalStorage/AddDataToLocalStorage';
import GetLocalStorage from './practiceComponent/LearnLocalStorage/GetLocalStorage';
import RemoveLocalStorageData from './practiceComponent/LearnLocalStorage/RemoveLocalStorageData';
import AddDataToSessionStorage from './practiceComponent/LearnSessionStorage/AddDataToSessionStorage';
import GetDataFRomSessionStorage from './practiceComponent/LearnSessionStorage/GetDataFRomSessionStorage';
import RemoveDataFromSessionStorage from './practiceComponent/LearnSessionStorage/RemoveDataFromSessionStorage';


function App() {
  // let a = <p>Hi I am a paragraph.</p>
  //let name="Niki";
  // let age=24;

  // console.log(name)

// let[show,setShow]=useState(true)
  return (
    <div>
      {/* <p style={{color:"white",backgroundColor:"purple"}}>This is a paragraph</p>
      <h1 style={{textTransform:"uppercase",color:"green"}}>Hi,I am a heading</h1>
      <a href="https://facebook.com" target=" ">Facebook</a>
      <img src="./timeline.png"></img>
      <div className="success">This uses an external css.</div> */}

      {/* <Name></Name>
      <Age></Age> */}
      {/* <Address></Address> */}
      {/* <Detail name="Niki" address="Bhaktapur" age={24}></Detail> */}
      {/* <Detail1 name="Oshin" address="Bhaktapur" age={16}></Detail1>
      <College name="Patan Campus" location="Patan Dhoka"></College> */}
      {/* <LearnTernary></LearnTernary> */}
      {/* <Location country="Nepal" province="Bagmati" district="Bhaktapur" exactLocation="Sirutar"></Location>
      <Info name="niki" age="24" fatherDetail ={{fname: "Prem", fage: 48}}  favFood={["mutton", "chicken", "spinach"]}></Info>
      <Images></Images> */}
    {/* <LearnMap1></LearnMap1>   */}
      {/* <LearnMap2></LearnMap2> */}
      {/* <ButtonClick></ButtonClick> */}
      {/* <LearnUseStateHook1></LearnUseStateHook1> */}
      {/* <LearnUseState2></LearnUseState2>
      <LearnUseStateImage></LearnUseStateImage> */}
      {/* <EffectOnDifferentData></EffectOnDifferentData> */}
      {/* <LearnUseStateName></LearnUseStateName>
      <IncrementByChoice></IncrementByChoice>
      <Toggle></Toggle>
      <WhyUseState></WhyUseState>
      <Increment></Increment> */}
      {/* <LearnUseEffectHook></LearnUseEffectHook> */}
      
      {/* {show ? <LearnCleanUpFunction ></LearnCleanUpFunction> : null}

      <button onClick={()=>{
        setShow(true)
      }}>Show</button>

      <button onClick={()=>{
        setShow(false)
      }}>Hide</button> */}



      {/* <ReactRouter></ReactRouter> */}
      {/* <MyRoutes></MyRoutes> */}
      {/* <Form1></Form1>
      <Form2></Form2> */}
      {/* <Form3></Form3> */}
      {/* <NestingRoute></NestingRoute> */}
      {/* <Learn1UseRefHook></Learn1UseRefHook> */}
      {/* <AddDataToLocalStorage></AddDataToLocalStorage> */}
      {/* <GetLocalStorage></GetLocalStorage> */}
      {/* <RemoveLocalStorageData></RemoveLocalStorageData> */}
      
     {/* <AddDataToSessionStorage></AddDataToSessionStorage> */}
     {/* <GetDataFRomSessionStorage></GetDataFRomSessionStorage> */}
     <RemoveDataFromSessionStorage></RemoveDataFromSessionStorage>
      
      
      
      
      


      {/* <div className="success">This is a success message.</div>  
      <div className="error">This is a error message.</div>  
      <div className="info">This is a info message.</div>  
      <div className="warning">This is a warning message.</div>   */}

    </div>
  );
}

export default App;
