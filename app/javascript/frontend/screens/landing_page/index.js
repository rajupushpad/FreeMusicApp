import React from 'react';
import ReactDom from 'react-dom';
import { HashLoader } from 'react-spinners';

const center = { 
  position: "absolute",
  width: "300px",
  height: "200px",
  zIndex: 15,
  top: "50%",
  left: "50%",
  margin: "-100px 0 0 -150px",
}

export default class LandingPage extends React.Component {
	componentDidMount(){
		var _this = this
		setTimeout(
		    function() {
		        _this.props.history.push('/welcome')
		    },
		    3000
		);
	}

	render(){
		return(
			<div style={center}>
	          <HashLoader
	          	css = {{margin: '0 auto'}}
		          sizeUnit={"px"}
		          size={90}
		          color={'#123abc'}
		          loading={true}
		        />
			</div>
		)
	}
}


  
