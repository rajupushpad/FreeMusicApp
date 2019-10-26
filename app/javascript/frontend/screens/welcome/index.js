import React from 'react';
import ReactDom from 'react-dom';
import HeaderBar from '../../components/header'
import FooterBar from '../../components/footer'
import { connect } from 'react-redux';
import { uploadPost,addLike,disLike,fetchAllPost } from '../../actions/posts'

class Welcome extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		 width: 0, 
		 height: 0 ,
		};
	  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.props.fetchAllPost(this.props.auth_response.token)
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
		alert(this.props.auth_response.token)
		this.props.uploadPost(data)
	}

	handleLike(post){
		post.token = this.props.auth_response.token
		this.props.auth_response.token ? this.props.addLike(post) : alert('Please login')
	}

	handleDisLike(post){
		post.token = this.props.auth_response.token
		this.props.auth_response.token ? this.props.disLike(post) : alert('Please login')
	}

	componentDidUpdate(prevProps,prevState){
		if(this.props.auth_response != prevProps.auth_response || this.props.add_post_res != prevProps.add_post_res || this.props.add_like != prevProps.add_like || this.props.dis_like_res != prevProps.dis_like_res){
			this.props.fetchAllPost(this.props.auth_response.token)
		}
	}

	renderBodyPost(post){
		return(
			<div class='row' style={{marginTop: 15}}>
				<div class="col-6">
					<iframe width="420" height="315"
						src={post.url}>
						</iframe>
				</div>
				<div class="col-6" style={{flexDirection: 'row',    textAlign: 'left'}}>
					<h4 style={{color: 'red'}}>{post.title}</h4>
					<div style={{marginTop: 10}}>Shared By: {post.post_by}</div>
					<div style={{marginTop: 10}} style={{flexDirection: 'row'}}>
						<div>
						<img
							onClick={()=>{this.handleLike(post)}}
						 src={post.post_liked_by_current_user ? require('../../images/active-like.png') : require('../../images/like.png')}/>: {post.likes}</div>
						<div>
							<img 
								onClick={()=>{this.handleDisLike(post)}}
								src={post.post_disliked_by_current_user ? require('../../images/active-unlike.png') :require('../../images/unlike.png')}/>: {post.dislikes}</div>
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
								this.props.posts && this.props.posts.map((video)=>{
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
   auth_response: state.users.auth_response,
   posts: state.posts.posts,
   add_like: state.posts.like_res,
   add_post_res: state.posts.post_add_success,
   dis_like_res: state.posts.dis_like_res
  };
}


const WelcomeScrn = connect(mapStateToProps, { uploadPost,addLike,disLike,fetchAllPost })(Welcome)
export default WelcomeScrn