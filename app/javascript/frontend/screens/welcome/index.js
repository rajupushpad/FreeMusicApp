import React from 'react';
import ReactDom from 'react-dom';
import HeaderBar from '../../components/header'
import FooterBar from '../../components/footer'
import { connect } from 'react-redux';
import { uploadPost,addLike,removeLike } from '../../actions/posts'

class Welcome extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		 width: 0, 
		 height: 0 ,
		 videos: [
		 	{
		 		id: '1',
		 		title:'demo titile',
		 		description: 'demo description',
		 		url: 'https://www.youtube.com/watch?v=usaoj2KUSGg',
		 		likes: '12',
		 		unlike: '12',
		 		posted_by: 'a@gmail.com'

		 	},
		 	{
		 		id: '2',
		 		title:'demo titile',
		 		description: 'demo description',
		 		url: 'https://www.youtube.com/watch?v=usaoj2KUSGg',
		 		likes: '12',
		 		unlike: '12',
		 		posted_by: 'a@gmail.com'

		 	},
		 	{
		 		id: '3',
		 		title:'demo titile',
		 		description: 'demo description',
		 		url: 'https://www.youtube.com/watch?v=usaoj2KUSGg',
		 		likes: '12',
		 		unlike: '12',
		 		posted_by: 'a@gmail.com'

		 	},
		 	{
		 		id: '4',
		 		title:'demo titile',
		 		description: 'demo description',
		 		url: 'https://www.youtube.com/watch?v=usaoj2KUSGg',
		 		likes: '12',
		 		unlike: '12',
		 		posted_by: 'a@gmail.com'

		 	}
		]
		};
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	uploadMovie(){
		this.setState({shareMovie: false})
		var data = {
			url: this.state.url,
			title: this.state.title,
			description: this.state.description,
			token: this.props.auth_response.token
		}
		this.props.uploadPost(data)
	}

	renderBodyPost(post){
		return(
			<div class='row' style={{marginTop: 15}}>
				<div class="col-6">
					<iframe width="420" height="315"
						src="https://www.youtube.com/embed/tgbNymZ7vqY">
						</iframe>
				</div>
				<div class="col-6" style={{flexDirection: 'row',    textAlign: 'left'}}>
					<h4 style={{color: 'red'}}>{post.title}</h4>
					<div style={{marginTop: 10}}>Shared By: {post.posted_by}</div>
					<div style={{marginTop: 10}} style={{flexDirection: 'row'}}>
						<div>< img src={require('../../images/like.png')}/>: {post.likes}</div>
						<div>< img src={require('../../images/unlike.png')}/>: {post.unlike}</div>
					</div>
					<div style={{marginTop: 10}} style={{flexDirection: 'row'}}>
						Description: {'\n'}
						{post.description}
					</div>
				</div>
			</div>
		)
	}

	shareMovie(){
		return(
			<div style={{marginTop: 30}}>
				<div class="row">
					<div class="col-3">YouTube Url</div>
					<div class="col-9">
						<input 
					      	type="text" 
					      	class="form-control" 
					      	id="url" 
					      	placeholder="Enter url" 
					      	name="url"
					      	onChange = {(e) => {this.setState({url: e.target.value})}}
					      	/>
					</div>
				</div>

				<div class="row" style={{marginTop: 10}}>
					<div class="col-3">Title</div>
					<div class="col-9">
						<input 
					      	type="text" 
					      	class="form-control" 
					      	id="title" 
					      	placeholder="Enter Title" 
					      	name="title"
					      	onChange = {(e) => {this.setState({title: e.target.value})}}
					      	/>
					</div>
				</div>

				<div class="row" style={{marginTop: 10}}>
					<div class="col-3">Description</div>
					<div class="col-9">
						<input 
					      	type="text" 
					      	class="form-control" 
					      	id="description" 
					      	placeholder="Enter description" 
					      	name="description"
					      	onChange = {(e) => {this.setState({description: e.target.value})}}
					      	/>
					</div>
				</div>

				<div class="row" style={{marginTop: 30}}>
					<div class="col-3"></div>
					<div class="col-9">
						<button  
							class="form-control" 
							style={{color: 'green', fontColor: 'white'}}  
							onClick={()=>{this.uploadMovie()}}
						>
						Share 
						</button>
					</div>
			</div>				
		</div>
		)
	}
	render(){
		return(
			<div>
				<HeaderBar width={this.state.width}/>
				<div class="row">
					<div class="col-2"></div>
						<div class="col-8">
						{
							this.props.auth_response.status && !this.state.shareMovie ?
							<div style={{textAlign: 'center', marginTop: 30}}>
								<button  
									class="form-control" 
									style={{color: 'green', fontColor: 'white',marginLeft: 10}}  
									onClick={()=>{this.setState({shareMovie: true})}}
								>
									Share a Movie
								</button>
							</div>
							:
							null
						}
						<div style={{textAlign: 'center'}}>
							{
								this.state.shareMovie ?
									this.shareMovie()
								:
								this.state.videos && this.state.videos.map((video)=>{
									return this.renderBodyPost(video)
								})
							}
						</div>
					</div>
					<div class="col-2"></div>
				</div>
				<div style={{marginTop: 20}}>
				<FooterBar />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return{
   auth_response: state.users.auth_response

  };
}


const WelcomeScrn = connect(mapStateToProps, { uploadPost,addLike,removeLike })(Welcome)
export default WelcomeScrn