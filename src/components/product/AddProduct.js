import React from 'react';
import { connect } from 'react-redux';

class AddProduct extends React.Component {

	constructor(props) {
		super(props);
		
			this.state = {
				id: '',
				title : '',
				price : 0
			}

			//bind
			this.inputChangeValue = this.inputChangeValue.bind(this);
			this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	inputChangeValue = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleFormSubmit(e) {
		e.preventDefault();
		this.props.dispatch({
			type : 'ADD_PRODUCT',
			products: this.state
		});

		this.props.history.push('/');
	}

	render() {
	 	return (
	 		<div>
			<h2>Add Products</h2>
				
				<form className="demoForm" onSubmit={this.handleFormSubmit}>
			       <h2>Sign up</h2>
			       <div className="form-group">
			         <input type="type" className="form-control" name="id" placeholder="Input your ID" onChange={this.inputChangeValue} value={this.state.id}/>
			       </div>
			       <div className="form-group">
			         <input type="type" className="form-control" name="title" placeholder="Input your title"  onChange={this.inputChangeValue} value={this.state.title}/>
			       </div>
			       <div className="form-group">
			         <input type="text" className="form-control" name="price" placeholder="Input price"  onChange={this.inputChangeValue} value={this.state.price}/>
			       </div>
			       <button type="submit" className="btn btn-primary">Add</button>
			     </form>
			</div>
		)
	 }	
}


export default connect() (AddProduct);	