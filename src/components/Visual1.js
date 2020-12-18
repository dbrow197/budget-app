import React, {Component } from 'react';
import Iframe from 'react-iframe';


class Visual1 extends Component {
  render(){
  return (
    <main className="container-center page-area col-sm-3 ">
      <section className="page-area">
     <h1 style={{'textAlign': 'center'}}>Budget</h1>
     <script src="https://unpkg.com/@mongodb-js/charts-embed-dom@beta"></script>
    <div id="chart" container-center></div>
    <Iframe 
    classname=""
    style="
    position: center;
    background: #FFFFFF;
    border: none;
    border-radius: 2px;
    box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
     width="640" 
     height="480" 
     theme="dark"
     src="https://charts.mongodb.com/charts-personal_budget_final-pwjjt/embed/charts?id=4601659c-4428-4a77-a1a1-8dd2500dc53d&theme=light">
       </Iframe> 
    </section>
   </main>
   
  );
  }
}

export default Visual1;
