import React from 'react';
import PropTypes from 'prop-types';
import {Editor, EditorState, ContentState} from 'draft-js';

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createWithContent(ContentState.createFromText(this.props.post.body)),
			editMode: false
		}
		this.onChange = (editorState) => this.setState({editorState});
	    this.setEditor = (editor) => {
	      this.editor = editor;
	    };
	    this.focusEditor = () => {
	      if (this.editor) {
	        this.editor.focus();
	      }
	    };
	}
	render() {
		return(
			<div className="post-wrapper">
				<span className="post-title">
					{this.props.post.title}
				</span>
				<div className="post-body">
					{this.state.editMode ? 
						<Editor
				          ref={this.setEditor}
				          editorState={this.state.editorState}
				          onChange={this.onChange}
				        />
				        : this.props.post.body
					}
				</div>
			</div>
		)
	}
}
Post.propTypes = {
  post: PropTypes.exact({
    title: PropTypes.string,
    body: PropTypes.string
  }),   
};
export default Post;