import React from 'react';
import ReactDom from 'react-dom';
import HeaderBar from '../../components/header'
import FooterBar from '../../components/footer'
import { connect } from 'react-redux';
import {signInUser} from '../../actions/users'
class Login extends React.Component {
	
	handleLogin = () =>{
		debugger
	}

	render(){
		return(
			<div>
				<HeaderBar backgroundColor = {'black'}/>
				<div style={{marginTop: 70}}>
					<div class="container" style={{color: 'black'}}>
					    <div class="row">
					        <div class="col-sm-1"></div>
					        <div class="col-sm-10">
					            <div style={{marginTop: 120}}>
					            </div>
					            <div class="row">
							        <div class="col-sm-3"></div>
							        <div class="col-sm-6">
							           
							    <h4 style={{textAlign: 'center'}}>Login form</h4>
							    <div class="form-group">
							      <label htmlFor="email">Email:</label>
							      <input 
							      	type="email" 
							      	class="form-control" 
							      	id="email" 
							      	placeholder="Enter email" 
							      	name="email"
							      	onChange = {(e) => {debugger}}
							      	/>
							    </div>
							    <div class="form-group">
							      <label htmlFor="pwd">Password:</label>
							      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
							    </div>
							      <div style={{textAlign: 'center'}}>
							          <button onClick={()=>{this.handleLogin()}}  class="btn btn-primary">LogIn</button></div>
							  </div>
							  <div class="col-sm-3"></div>
							    </div>
					     	</div>       
						</div>
				</div>
				</div>
				<div style={{marginTop: 140}}>
					<FooterBar />
				</div>
			</div>
		)
		
	}
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps, {signInUser})(Login);
