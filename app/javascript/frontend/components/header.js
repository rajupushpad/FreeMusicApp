import React from 'react';
import ReactDom from 'react-dom';
import './header.css'
import {userAuth, logout} from '../actions/users'
import { connect } from 'react-redux';
class HeaderBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}

	handleUserAuth(){
		var data = {
			email: this.state.email,
			password: this.state.password
		}
		this.props.userAuth(data)
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
				        <a style={{color: 'white'}} class="nav-link" href="/" onClick={()=>{debugger}}>Home</a>
				      </li>
					{
						this.props.auth_response.status ?
						null
						:
					      <li class="nav-item">
					        <input 
						      	type="email" 
						      	class="form-control" 
						      	id="email" 
						      	placeholder="Enter email" 
						      	name="email"
						      	onChange = {(e) => {this.setState({email: e.target.value})}}
						      	/>
					      </li>
					}

					{
						this.props.auth_response.status ?
						null
						:
				      <li class="nav-item" style={{marginLeft: 20}}>
				        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" onChange={(e)=>{this.setState({password: e.target.value})}}/>
				      </li>
				  	}

				  	{
						this.props.auth_response.status ?
						<li class="nav-item" style={{marginLeft: 20, marginTop: 7}}>
							<span style={{color: 'white', marginTop: 5}}>Hello {this.props.auth_response.user_email}</span>
						</li>
						:
						null
					}
				       <li class="nav-item">
				       {
						this.props.auth_response.status ?
						<button  class="form-control" style={{color: 'green', fontColor: 'white',marginLeft: 10}}  onClick={()=>{this.props.logout()}}>Logout</button>
						:
						<button  class="form-control" style={{color: 'green', fontColor: 'white',marginLeft: 10}}  onClick={()=>{this.handleUserAuth()}}>Login/Register</button>
						}
				        
				      </li> 
				    </ul>
				  </div> 
				</nav>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return{
   auth_response: state.users.auth_response

  };
}


const HeaderBarScrn = connect(mapStateToProps, {userAuth,logout})(HeaderBar)
export default HeaderBarScrn