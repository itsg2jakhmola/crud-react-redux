import React from 'react';
import { connect } from 'react-redux';

class Product extends React.Component {

	delete(e) {		
		e.preventDefault();
		var id = e.target.getAttribute('data-key');
		this.props.dispatch({
			type: 'DELETE_PRODUCT',
			id: id
		});
		this.props.history.push('/');
	}

	edit(e) {
		e.preventDefault();
		var id = e.target.getAttribute('data-key');
		this.props.dispatch({
			type: 'EDIT_PRODUCT',
			id: id	
		});

		this.props.history.push('/edit/' + id);
	}

	render() {
	 	return (
	 	 <div>
			<h2>List Products</h2>
			<table border="2"> 
				<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Price</th>
					<th>Action</th>
				</tr>
				</thead>
				<tbody>
					{this.props.products.map(function(product, index) {
						return <tr key={product.id}>
							<td>{product.id}</td>
							<td>{product.title}</td>
							<td>{product.price}</td>
							<td>
								<input type="button" 
									value="Edit" 
									onClick={this.edit.bind(this)}
									data-key={product.id} />
							   | 
								<input type="button"
								 value="Delete"	
								 onClick={this.delete.bind(this)}
								 data-key={product.id}
								  />
								 </td>
						</tr>	
					}, this)}
				</tbody>
			</table>
		 </div>
		)
	 }	
}

function mapStateToProps(state) {

	return {
		products: state.products
	}
}	

export default connect(mapStateToProps) (Product);