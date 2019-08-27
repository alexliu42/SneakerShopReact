import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
	state = {
	}
	
	renderTags() {
		if (this.props.description.length === 0) return <p>There are no tags! </p>;
		return <ul> {this.props.description.map(tag => <li key={tag}>{tag}</li>) }</ul>
	}

	getBadgeClasses(){
		let classes = "badge m-2 badge-";
		classes += (this.props.counter.value ===0) ? "warning" : "primary";
		return classes;
	}


	formatCount() {
		const { value } = this.props.counter;
		return value <= 0 ? "Zero" : value;
	}
	
	render() {		
		return (
			<React.Fragment>
				{this.props.children}
				<img src={this.props.counter.imageLoc}/>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				
				<button 
					onClick = {() => this.props.onIncrement(this.props.counter)} 
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
				
				<button 
					onClick = {() => this.props.onDecrement(this.props.counter)} 
					className="btn btn-danger btn-sm m-2"
				>
					Decrement
				</button>

				{this.props.description.length === 0 && 'Please create a new tag!'}
				{this.renderTags()}
			</React.Fragment>
		)
	}


}


export default Counter;