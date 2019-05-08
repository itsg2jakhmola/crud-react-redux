import React from 'react';
import { connect } from 'react-redux';

class EditProduct extends React.Component {

	constructor(props){
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(e) {
		e.preventDefault();
		this.props.dispatch({
			type : 'UPDATE_PRODUCT',
			product: {
				id: e.target.id.value,
				title: e.target.title.value,
				price: e.target.price.value,
			}
		});

		this.props.history.push('/');
	}

	 render() {
	 	return (
	 	 
	 	 <div>
			<h2>Edit Products</h2>
			<form className="demoForm" onSubmit={this.handleFormSubmit}>
			       <h2>Sign up</h2>
			       <div className="form-group">
			         <input type="type"
			         className="form-control" 
			         name="id" 
			         placeholder="Input your ID" 
			         defaultValue={this.props.product.id}
			         />
			       </div>
			       
			       <div className="form-group">
			         <input type="type" 
			         	className="form-control"
			         	name="title"
			         	placeholder="Input your title"  
			         	defaultValue={this.props.product.title}
			         	/>
			       </div>
			       
			       <div className="form-group">
			         <input type="text"
			          className="form-control"
			          name="price"
			          placeholder="Input price"
			          defaultValue={this.props.product.price}
			          />
			       </div>

			       <button type="submit" className="btn btn-primary">Update</button>
			     </form>
			     </div>
		)
	 }	
}


function mapStateToProps(state) {

	return {
		product: state.products[0]
	}
}	
export default connect(mapStateToProps) (EditProduct);