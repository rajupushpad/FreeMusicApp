import React from 'react';
import ReactDom from 'react-dom';
import './header.css'
export default class HeaderBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){
		return(
			<div>
				  {/*<nav style={this.props.backgroundColor ? {backgroundColor: this.props.backgroundColor} : null} class={this.props.width < 640 ? "navbar navbar-expand-md bg-dark navbar-dark sticky-top" : "navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"}>	 */}
				  <nav style={{backgroundColor: 'black'}} class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">	 
				  
				  <a class="navbar-brand" href="#">Free Music App</a>
				  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
				    <span class="navbar-toggler-icon"></span>
				  </button>

				 
				  <div class="collapse navbar-collapse" id="collapsibleNavbar">
				    <ul class="navbar-nav ml-auto">
				      <li class="nav-item">
				        <a style={{color: 'white'}} class="nav-link" href="/welcome" onClick={()=>{debugger}}>Home</a>
				      </li>
				      
				       <li class="nav-item">
				        <a style={{color: 'white'}} class="nav-link" href="/login" onClick={()=>{this.props.history.push('')}}>Login</a>
				      </li> 
				    </ul>
				  </div> 
				</nav>
			</div>
		)
	}
}