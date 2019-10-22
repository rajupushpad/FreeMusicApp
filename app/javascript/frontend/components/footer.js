import React from 'react';
import ReactDom from 'react-dom';
export default class FooterBar extends React.Component {
	componentDidMount(){
		document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
	}
	render(){
		return(
			<div  style={{position: 'absolute', width: '100%', margin: '0 auto',backgroundColor: 'black', height: 110, color: 'white',marginTop:20, textAlign:'center'}}>
				<div style={{padding: 15}}>
			   	 © 2018-
			    <span id="copyright">
			        
			    </span>
			  	 <br/>FreeMusicApp<br/>All rights are reserved.
				</div>
			</div>
		)
	}
}
    