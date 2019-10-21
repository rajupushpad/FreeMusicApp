import React from 'react';
import ReactDom from 'react-dom';
import HeaderBar from '../../components/header'
import FooterBar from '../../components/footer'

export default class Welcome extends React.Component {
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
						<div>Likes: {post.likes}</div>
						<div>UnLikes: {post.unlike}</div>
					</div>
					<div style={{marginTop: 10}} style={{flexDirection: 'row'}}>
						Description: {'\n'}
						{post.description}
					</div>
				</div>
			</div>
		)
	}

	render(){
		return(
			<div>
				<HeaderBar width={this.state.width}/>
				<div style={{textAlign: 'center'}}>
					{
						this.state.videos && this.state.videos.map((video)=>{
							return this.renderBodyPost(video)
						})
					}
				</div>
				<div style={{marginTop: 20}}>
				<FooterBar />
				</div>
			</div>
		)
	}
}