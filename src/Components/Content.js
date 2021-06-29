import React, { useState } from 'react';
import './Content.scss';
import Belgrad from "./Belgrad.js";
import avatar from './../Static/avatar.png'
import Bell from './../Static/Bell.png'

import hand from './../Static/hand.svg'
import education from './../Static/education.svg'
import person from './../Static/person.svg'
import phone from './../Static/phone.svg'
import justice from './../Static/justice.svg'
import right from './../Static/right.svg'

function Content() {
  let [modalState, setModalState] = useState(true)
  let [districtNum, setDistrictNum] = useState(0)

  const modal = (e) => {
    if(e.target.classList[0] !== 'map_model'  && e.target.parentNode.classList[0] !== 'map_model' && e.target.parentNode.parentNode.classList[0] !== 'map_model' && e.target.parentNode.parentNode.parentNode.classList[0] !== 'map_model' && e.target.parentNode.parentNode.parentNode.parentNode.classList[0] !== 'map_model'){
      if(e.target.attributes.value !== undefined){
        if(districtNum !== Number(e.target.attributes.value.nodeValue)){
          if(modalState === true){
            setModalState(modalState = !modalState)
            setDistrictNum(districtNum = Number(e.target.attributes.value.nodeValue))
          }else{
            setDistrictNum(districtNum = Number(e.target.attributes.value.nodeValue))
          }
        }else if(modalState === false){
          setDistrictNum(districtNum = 0)
          setModalState(modalState = !modalState)
        }
      }else if(modalState === false){
        setDistrictNum(districtNum = 0)
        setModalState(modalState = !modalState)
      }
    }
  }

  const mapColors = [
    {fill: '#6CE4A0', stroke: 'orange', subdivision: 'Stari Grad', city_score: '10%'},
    {fill: '#D86874', stroke: 'blue', subdivision: 'Savski Venac', city_score: '40%'},
    {fill: '#B3DF75', stroke: 'green', subdivision: 'Vračar', city_score: '100%'},
    {fill: '#F3DA50', stroke: 'orange', subdivision: 'Novi Beograd', city_score: '11%'},
    {fill: '#6CE4A0', stroke: 'red', subdivision: 'Čukarica', city_score: '73%'},
    {fill: '#EEB359', stroke: '#EEB359', subdivision: 'Rakovica', city_score: '10%'},
    {fill: '#6CE4A0', stroke: '#6CE4A0', subdivision: 'Voždovac', city_score: '99%'},
    {fill: '#6CE4A0', stroke: 'orange', subdivision: 'Zvezdara', city_score: '82%'},
    {fill: '#F3DA50', stroke: '#F3DA50', subdivision: 'Zemun', city_score: '13%'},
    {fill: '#F3DA50', stroke: '#D86874', subdivision: 'Palilula', city_score: '100%'},
    {fill: '#6CE4A0', stroke: '#EEB359', subdivision: 'Surčin', city_score: '66%'},
    {fill: '#D86874', stroke: 'orange', subdivision: 'Obrenovac', city_score: '94%'},
    {fill: '#F3DA50', stroke: '#F3DA50', subdivision: 'Barajevo', city_score: '50%'},
    {fill: '#EEB359', stroke: 'green', subdivision: 'Sopot', city_score: '11%'},
    {fill: '#F3DA50', stroke: '#6CE4A0', subdivision: 'Grocka', city_score: '30%'},
    {fill: '#EEB359', stroke: 'orange', subdivision: 'Lazarevac', city_score: '11%'},
    {fill: '#D86874', stroke: 'orange', subdivision: 'Mladenovac', city_score: '50%'}
  ] 
  const filters = [
    { value: 'This Week'},
    { value: 'This Month'},
    { value: 'This Year'},
    { value: 'Last Year'}
  ]

  const OverviewFilters = filters.map((filter, index) =>{
    return(
      <span onClick={dateFilter} key={index}>{filter.value}</span>
  )})
  
  function dateFilter(e){
    for(let x = 0; x < e.target.parentNode.children.length; x++){
      e.target.parentNode.children[x].style.backgroundColor = 'white';
      e.target.parentNode.children[x].style.color = '#A6ACBE';
    }
    e.target.style.backgroundColor = '#6F52ED';
    e.target.style.color = 'white';
  }
  
  const modal_window = [
    { value: 'Social Class', procent: '85%', icon: hand},
    { value: 'Education', procent: '85%', icon: education },
    { value: 'Social Media', procent: '85%', icon: person },
    { value: '106 Score', procent: '85%', icon: phone },
    { value: 'Balance Score', procent: '85%', icon: justice }
  ]

  const modal_window_div = modal_window.map((variable, index) =>{
    return(
      <div className="stat_elem" key={index}>
        <div>
          <img src={variable.icon} />
        </div>
        <div>
          <span>{variable.procent}</span>
          <span>{variable.value}</span>
        </div>
        <div>
          <img src={right} />
        </div>
      </div>
  )})

  const score = [
    { value: 'City Score', procent: '50%'},
    { value: 'Social Media Score', procent: '31%'},
    { value: 'Area Score', procent: '60%'}
  ]

  const score_div = score.map((variable, index) =>{
    let procAdaptive = 1.3
    let line_height_Adaptive = 66
    let line_height_Adaptive_Down = 64
    let line_top_Adaptive = 53
    if(window.innerWidth <= 1600){
      procAdaptive = 1
      line_height_Adaptive = 50
      line_top_Adaptive = 37
      line_height_Adaptive_Down = 50
    }
    let circlePlace;
    let proc = variable.procent.replace('%', ''); 
    proc = 100-proc
    let border_color = '10px solid ';
    let background_color;
    let line_top;
    let line_height;
    circlePlace = proc;
    if(proc < 20){
      border_color += 'rgba(127, 209, 153, 0.13)'
      background_color = 'rgb(138, 190, 140)'
    }else if(proc < 40){
      border_color += 'rgb(198, 224, 121, 0.23)'
      background_color = '#BDDE76'
    }else if(proc < 60){
      border_color += 'rgb(216, 218, 114, 0.33)'
      background_color = '#DCD86F'
    }else if(proc < 80){
      border_color += 'rgb(244, 188, 95, 0.37)'
      background_color = '#FAA355'
    }else{
      border_color += 'rgb(260, 106, 91, 0.20)'
      background_color = '#FB665C'
    }
    if(proc < 50){
      line_top = proc*procAdaptive - line_top_Adaptive
      line_height = line_height_Adaptive - proc*procAdaptive
    }else if(proc > 50){
      line_top = 12
      line_height = proc*procAdaptive - line_height_Adaptive_Down
    }else{
      line_height = 0
    }
    return(
      <div key={index} className="score_elem">
        <div className="city_score" >
          <div style={{top: circlePlace+'%'}} className="score_point"></div>
          <div style={{border: border_color}} className="color_point">
            <div style={{top: line_top + 'px', height: line_height+'px'}} className="line-between"/>
            <div className="outer-circle">
              <div style={{backgroundColor: background_color}} />
            </div>
            <div className="numb_score">
              <span>{variable.procent}</span>
              <span>{variable.value}</span>
            </div>
          </div>
        </div>
      </div>
  )})
  const modelScore = mapColors.map((variable, index) => {
    let procAdaptive = 1.3
    let line_height_Adaptive = 66
    let line_height_Adaptive_Down = 64
    let line_top_Adaptive = 53
    if(window.innerWidth <= 1920 && window.innerWidth >= 1600){
      procAdaptive = 1
      line_height_Adaptive = 50
      line_top_Adaptive = 37
      line_height_Adaptive_Down = 50
    }else if(window.innerWidth <= 1600){
      procAdaptive = 0.8
      line_height_Adaptive = 41
      line_top_Adaptive = 28
      line_height_Adaptive_Down = 40
    }
    let circlePlace;
    let proc = mapColors[districtNum].city_score.replace('%', ''); 
    proc = 100-proc
    let border_color = '10px solid ';
    let background_color;
    let line_top;
    let line_height;
    circlePlace = proc;
    if(proc < 20){
      border_color += 'rgba(127, 209, 153, 0.13)'
      background_color = 'rgb(138, 190, 140)'
    }else if(proc < 40){
      border_color += 'rgb(198, 224, 121, 0.23)'
      background_color = '#BDDE76'
    }else if(proc < 60){
      border_color += 'rgb(216, 218, 114, 0.33)'
      background_color = '#DCD86F'
    }else if(proc < 80){
      border_color += 'rgb(244, 188, 95, 0.37)'
      background_color = '#FAA355'
    }else{
      border_color += 'rgb(260, 106, 91, 0.20)'
      background_color = '#FB665C'
    }
    if(proc < 50){
      line_top = proc*procAdaptive - line_top_Adaptive
      line_height = line_height_Adaptive - proc*procAdaptive
    }else if(proc > 50){
      line_top = 12
      line_height = proc*procAdaptive - line_height_Adaptive_Down
    }else{
      line_height = 0
    }
    return(
      <div className="score_elem">
        <div className="city_score" >
          <div style={{top: circlePlace+'%'}} className="score_point"></div>
          <div style={{border: border_color}} className="color_point">
            <div style={{top: line_top + 'px', height: line_height+'px'}} className="line-between"/>
            <div className="outer-circle">
              <div style={{backgroundColor: background_color}} />
            </div>
            <div className="numb_score">
              <span>{mapColors[districtNum].city_score}</span>
              <span>Area Score</span>
            </div>
          </div>
        </div>
      </div>
  )})

  function ready(){
    let min = 0;
    let max = 5;
  let newText = document.querySelector('.random_words').innerHTML.replace(/\s/g, function() {
    return " ".repeat(parseInt(Math.random() * (max - min) + min))
  })
  document.querySelector('.random_words').innerHTML = newText

};
  document.addEventListener("DOMContentLoaded", ready);
  return (
    <div className="Overview">
      <header>
        <div className="filters">
          <h1>Overview</h1>
          <div>
            {OverviewFilters}
          </div>
        </div>
        <div className="user-field">
          <div className="notifications_search">
            <img src={Bell} />
          </div>
          <div>
            <h6>Jones Ferdinand</h6>
            <img src={avatar} />
          </div>
        </div>        
      </header>
      <div className="Overview-elements">
        <div className="Rankings">
          <span>Rankings</span>
          <div className="score">
            {score_div[0]}
            {score_div[1]}
          </div> 
        </div>
        <div className="Trending-Topics">
          <span className="topic">Trending Topics</span>
          <div>
          <p className="random_words"><span>Water</span> <span>Padestrians</span> <span>Bridge</span> <span>Culture</span> <span>Traffic</span> <span>Corona</span> <span>Paving</span> <span>Rent</span> <span>Train</span> <span>Election</span> <span>Light</span></p>
          </div>
        </div>
      </div>
      <div className="map" onClick={modal}>
        <div style={{visibility: (modalState ? 'hidden' : 'visible'), opacity: (modalState ? '0' : '1')}} className="map_model">
          <header>
            <span className="topic">{mapColors[districtNum].subdivision}</span>
            <div className="bar">
              <div/><div/><div/>
            </div>
          </header>
          <div className="score">
            {modelScore[0]}
          </div>
          <div className="stats">
            {modal_window_div}
          </div>
        </div>
        <div className="svg_map">
          <Belgrad mapColors={mapColors} />
        </div>
      </div>
    </div>
  );
}
  
export default Content;