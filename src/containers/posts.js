import React from 'react';
import Post from '../components/post';

class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [
				{title: "Your Bad Internet Connection Just Became a Campaign Issue", body: "Broadband is a subject that usually gets passing lip service during election season, only to be completely forgotten once the ballots are counted. But somebody forgot to tell Democratic presidential candidate Elizabeth Warren that."},
				{title: "My Headphone Marketing Pet Peeve", body: "My favorite silly thing that happens in tech marketing is when the same overconfidence I see making up for inexperience in comments and forums creeps into official advertising."},
				{title: "You Can Own An Asteroid - Sort Of", body: "In 2015, an obscure law was passed in the United States Congress and was signed into law by the president. Despite the fact that it wasn’t widely reported in the news, it may be one of the most revolutionary laws in the history of our planet."}
			]
		}
	}
	render() {
		return(
		<div className="posts-container">
			{this.state.posts.map((post, index) => 
				<Post key={index} post={post} />
			)}
		</div>
	);
	}
	
}
export default Posts;