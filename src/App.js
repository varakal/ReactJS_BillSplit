import React, { Component } from 'react';
import {getPratheekValue,getShreyasValue,getVinayValue,getVivekValue,addValue} from './data';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
     this.state = {
       price: '',
       pratheek: '',
       shreyas: '',
       vinay: '',
       vivek: '',
       pratdetails: 0,
       shrdetails: 0,
       vindetails: 0,
       vivdetails: 0,
       tax1: 0,
       tax2: 0,
       pracheck: false,
       shrcheck: false,
       vincheck: false,
       vivcheck: false
     };
     this.addVal=this.addVal.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.addTax = this.addTax.bind(this);
     this.handleInputChange = this.handleInputChange.bind(this);
  }

  addVal(){
  //  alert("peas");
  console.log("IN ADDVALUE");
  var pratoggle = this.state.pracheck ? 1 : 0;
  var shrtoggle = this.state.shrcheck ? 1 : 0;
  var vintoggle = this.state.vincheck ? 1 : 0;
  var vivtoggle = this.state.vivcheck ? 1 : 0;

//  addValue(this.state.price,this.state.pratheek,this.state.shreyas,this.state.vinay,this.state.vivek);

  addValue(this.state.price,pratoggle,shrtoggle,vintoggle,vivtoggle);

  const pratdetails= getPratheekValue();
  this.setState({pratdetails});
  const shrdetails= getShreyasValue();
  this.setState({shrdetails});
  const vindetails= getVinayValue();
  this.setState({vindetails});
  const vivdetails= getVivekValue();
  this.setState({vivdetails});

  this.setState({pracheck: false});
  this.setState({shrcheck: false});
  this.setState({vincheck: false});
  this.setState({vivcheck: false});

  }

  addTax(){
    if(this.state.tax1 > 0)
    {
    addValue(this.state.tax1,1,1,1,1)
  }
  if(this.state.tax2 > 0)
{
  addValue(this.state.tax2,1,1,1,1)
}
const pratdetails= getPratheekValue();
this.setState({pratdetails});
const shrdetails= getShreyasValue();
this.setState({shrdetails});
const vindetails= getVinayValue();
this.setState({vindetails});
const vivdetails= getVivekValue();
this.setState({vivdetails});
  }

  handleChange(e, name) {
    this.setState({ [name]: e.target.value });
  };

  handleInputChange(event, name) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    var x=<div>PRATHEEK = {this.state.pratdetails}<br/>SHREYAS = {this.state.shrdetails}<br/>VINAY = {this.state.vindetails}<br/>VIVEK = {this.state.vivdetails}<br/></div>
    return (
      <div className="App">
        <div>
        <p className="App-intro">
        </p>
        PRICE : <input type="text" value={this.price} onChange={ (e) => this.handleChange(e, 'price') } /><br/>


PRATHEEK : <input
            type="checkbox"
            checked={this.state.pracheck}
            onChange={ (e) => this.handleInputChange(e, 'pracheck') } />
            SHREYAS : <input
                        type="checkbox"
                        checked={this.state.shrcheck}
                        onChange={ (e) => this.handleInputChange(e, 'shrcheck') } />
                        VINAY : <input
                                    type="checkbox"
                                    checked={this.state.vincheck}
                                    onChange={ (e) => this.handleInputChange(e, 'vincheck') } />
                                    VIVEK : <input
                                                type="checkbox"
                                                checked={this.state.vivcheck}
                                                onChange={ (e) => this.handleInputChange(e, 'vivcheck') } /><br/>

                                                <button onClick={this.addVal}> ADD VALUE </button><br/><br/>


        TAX1 : <input type="text" value={this.tax1} onChange={ (e) => this.handleChange(e, 'tax1') } /><br/>
        TAX2 : <input type="text" value={this.tax2} onChange={ (e) => this.handleChange(e, 'tax2') } /><br/><br/>
        <button onClick={this.addTax}> ADD TAX </button><br/><br/>
        {x}
        </div>
      </div>
    );
  }
}

export default App;

// PRATHEEK : <input type="text" value={this.pratheek} onChange={ (e) => this.handleChange(e, 'pratheek') }/><br/>
// SHREYAS : <input type="text" value={this.shreyas} onChange={ (e) => this.handleChange(e, 'shreyas') }/><br/>
// VINAY : <input type="text" value={this.vinay} onChange={ (e) => this.handleChange(e, 'vinay') }/><br/>
// VIVEK : <input type="text" value={this.vivek} onChange={ (e) => this.handleChange(e, 'vivek') }/><br/>
