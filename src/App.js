import React from 'react';
// import { BrowserRouter , Route , Routes } from 'react-router-dom';

// All files
import Nav from "./home/nav";
import Header from "./home/header";
import Reports from "./home/reports";
import Section from "./home/section";
import Advanced from "./home/sec_3_advanced";
import Menu from "./home/Menu";
import Testimonials from "./home/Testimonials";
import All_Questions from "./home/all_questions"
import Fresh_food from "./home/Fresh_food"
import Offer from "./home/Offer"
import Footer from "./home/Footer"

// the img 
import img_1 from "./home/img/01.jpg";
import img_2 from "./home/img/02.jpg";
import img_3 from "./home/img/03.jpg";

// All style 
import './style/index.css';


class App extends React.Component{
  render(){
    // pro the menu
    const infromation_menu = [
      {id:"4" , img : img_1 , tittle_1 : "Rainbow Vegetable Sandwich" , tittle_2 : "Time: 15 - 20 Minutes | Serves: 1" , new_price : "$10.26"  , old_price : "$11.52" },
      {id:"5" , img : img_2 , tittle_1 : "Vegetarian Burger" , tittle_2 : "Time: 20 - 25 Minutes | Serves: 1" , new_price : "$8.87" , old_price : "$10"},
      {id:"6" , img : img_3 , tittle_1 : "RaRaspberry Stuffed French Toast" , tittle_2 : "Time: 25 - 30 Minutes | Serves: 1" , new_price : "$12.42"  , old_price : "$15.79" },
    ];
    const All_Data_menu = infromation_menu.map((mem)=>{
        return(
          <Menu
            key = {mem.id}
            img = {mem.img}
            tittle_1 = {mem.tittle_1}
            tittle_2 = {mem.tittle_2}
            old_price = {mem.old_price}
            new_price = {mem.new_price}

          />)
      })


    return (
      <div>
        {/* the navghtion menu */}
        <Nav />
        {/* the Header */}
        <Header />

        {/* 34tion- one Reports */}
        < Reports />

        {/* section- one section */}
        < Section />

        {/*section Advanced */}
        <Advanced />

        <div  className="UP_Menu">
        {/*section the menu */}
        {/* {All_Data_menu} */}
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <All_Questions />

        {/* Freesh Food */}
        <Fresh_food />

        {/* The Offer */}
        <Offer />

        {/* Footer */}
        <Footer />
      </div>
    );
}}

export default App;