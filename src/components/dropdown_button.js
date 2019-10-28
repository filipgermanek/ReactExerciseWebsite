import React from 'react';
import PropTypes from 'prop-types';

class DropdownButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: false
		}
	}
	toggleDropdown() {
		this.setState({expanded: !this.state.expanded});
	}
	handleBlur(e) {
		//only chrome supports relatedTarget. Fix later if there is time
		const newTarget = e.relatedTarget;
		if (newTarget && newTarget.className && newTarget.className==="dropdown-list-option") {
			return;
		}
		this.setState({expanded: false});
	}
	onOptionClick(selected) {
		console.log("selected option:", selected, "now closing dropdown");
		this.setState({expanded: false});
	}
	render() {
		const options=[
			{title: "First Option", callback: this.onOptionClick.bind(this, 1)},
			{title: "Second Option", callback: this.onOptionClick.bind(this, 2)},
			{title: "Third Option", callback: this.onOptionClick.bind(this, 3)}
		];
		return <div className="dropdown-button-wrapper">
			<button onBlur={this.handleBlur.bind(this)} className={`dropdown-button ${this.state.expanded ? 'expanded' : null}`} onClick={this.toggleDropdown.bind(this)}>{this.props.title}</button>
			{this.state.expanded ? <ul className="dropdown-list">
				{options.map((option, index) =>
					<li tabIndex="0" key={index} className="dropdown-list-option" onClick={option.callback}>{option.title}</li>
				)}
				</ul> : null}
		</div>
	}
}
DropdownButton.propTypes = {
	title: PropTypes.string   
};
export default DropdownButton;
