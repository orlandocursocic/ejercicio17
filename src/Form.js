import React, { Component } from 'react';

/*
class InputText extends Component {
  render() {
    return <input type="text" className="Input" value=""/>;
  }
}
*/



class Formulario extends Component {
	constructor() {
			super();

			this.state = {
				nombre: '',
				apellidos : '',
				edad: '',
		}
	}


	handleSubmit(event){
		alert('Data submited');
		this.state = {value: ''};
	}

	checkFormulario = (evt) =>{
		switch (evt.target.name) {
			case "nombre":
			var nombre = evt.target.value;
			if(nombre.length <= 20){

				this.setState({nombre:nombre,apellidos:this.state.apellidos,edad:this.state.edad});
			}				
			break;
			case "apellidos":
			var apellidos = evt.target.value;
			if(apellidos.length <= 20){

				this.setState({name:this.state.name, apellidos:apellidos, edad:this.state.edad});
			}
			case "edad":
			var edad = evt.target.value;
			if(edad>=0 && edad<=150){

				this.setState({name:this.state.name, apellidos:this.state.apellidos, edad:edad});
			}
			default:
			// code...
			break;
		}
	}



	render(){
		return (
		<form onSubmit={this.handleSubmit}>
        	<label>
        		Nombre: 
	          	<input name="nombre" type="text" value={this.state.nombre} onInput={this.checkFormulario} />
        	</label>
        	<br/>
        	<label>
	          	Apellidos:
	          	<input name="apellidos" type="text" value={this.state.apellidos} onInput={this.checkFormulario} />
        	</label>
        	<br/>
        	<label>
	          	Edad:
	          	<input name="edad" type="text" value={this.state.edad} onInput={this.checkFormulario} />
        	</label>
        	<br/>
			<input type="submit" value="Submit" />
      </form>
	);
	}
}

export default Formulario;