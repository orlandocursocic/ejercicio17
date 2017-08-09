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

		this.state = {
			contact: {},
			formErrors: {nombre: '', apellidos: '', edad: ''},
		    nombreValid: false,
		    apellidosValid: false,
		    edadValid: false,
		    formValid: false
		};

		this.handleNombre = this.handleNombre.bind(this);
		this.handleApellidos = this.handleApellidos.bind(this);
		this.handleEdad = this.handleEdad.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleNombre(event){
	    const contact = this.state.contact;
	    const value = event.target.value;
	   	contact.nombre =  value;
	    this.setState({contact: contact}, () => { this.validateField(contact.nombre, value)});;
	}


	handleApellidos(event){
	    const contact = this.state.contact;
	    const value = event.target.value;
	   	contact.apellidos =  value;
	    this.setState({contact: contact}, () => { this.validateField(contact.apellidos, value)});
	}


	handleEdad(event){
	    const contact = this.state.contact;
	    const value = event.target.value;
	   	contact.edad =  value;
	    this.setState({contact: contact}, () => { this.validateField(contact.edad, value)});
	}


	validateField(fieldName, value) {
	  let fieldValidationErrors = this.state.formErrors;
	  let nombreValid = this.state.nombreValid;
	  let apellidosValid = this.state.apellidoValid;
	  let edadValid = this.state.edadValid;

	  switch(fieldName) {
	    case 'nombre':
	      nombreValid = value.length <= 20;
	      fieldValidationErrors.nombre = nombreValid ? '' : ' is too short';
	      break;
	    case 'apellidos':
	      apellidosValid = value.length <= 20;
	      fieldValidationErrors.apellidos = apellidosValid ? '': ' is too short';
	      break;
	    case 'edad':
	      edadValid = value.match(/^\d+$/);
	      fieldValidationErrors.edad = edadValid ? '': ' is not a number';
	      break;
	    default:
	      break;
	  }
	  this.setState({formErrors: fieldValidationErrors,
	                  nombreValid: nombreValid,
	                  apellidosValid: apellidosValid,
	                  edadValid: edadValid
	                }, this.validateForm);
	}



	validateForm() {
	  this.setState({formValid: this.state.nombreValid && this.state.apellidosValid && this.state.edadValid});
	}


	handleSubmit(event){
		alert('Data submited');
		this.state = {value: ''};
	}


	render(){
		return (
		<div>
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
				<input type="submit" value="Submit" disabled={!this.state.formValid} />
	      </form>
      </div>
	);
	}
}

export default Formulario;