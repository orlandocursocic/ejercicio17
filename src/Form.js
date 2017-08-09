import React, { Component } from 'react';

/*
class InputText extends Component {
  render() {
    return <input type="text" className="Input" value=""/>;
  }
}
*/



class Formulario extends Component {
	constructor(props) {
		super(props);

		this.state = {contact: {}};

		this.handleNombre = this.handleNombre.bind(this);
		this.handleApellidos = this.handleApellidos.bind(this);
		this.handleEdad = this.handleEdad.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNombre(event){
	    const contact = this.state.contact;
	    contact.nombre = event.target.value;
	    this.setState({contact: contact});
	}


	handleApellidos(event){
	    const contact = this.state.contact;
	    contact.apellidos =  event.target.value;
	    this.setState({contact: contact});
	}


	handleEdad(event){
	    const contact = this.state.contact;
	    contact.edad =  event.target.value;
	    this.setState({contact: contact});
	}

/*
	handleChange(event){
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;

	    this.setState({
      		value: event.target.value
      	});
	}
*/

	handleSubmit(event){
		alert('Data submited');
		this.state = {value: ''};
	}

	render(){
		return (
		<form onSubmit={this.handleSubmit}>
        	<label>
        		Nombre: 
	          	<input name="nombre" type="text" value={this.state.contact.nombre} onChange={this.handleNombre} />
        	</label>
        	<br/>
        	<label>
	          	Apellidos:
	          	<input name="apellidos" type="text" value={this.state.contact.apellidos} onChange={this.handleApellidos} />
        	</label>
        	<br/>
        	<label>
	          	Edad:
	          	<input name="edad" type="text" value={this.state.contact.edad} onChange={this.handleEdad} />
        	</label>
        	<br/>
			<input type="submit" value="Submit" />
      </form>
	);
	}
}

export default Formulario;