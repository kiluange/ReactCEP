'use strict'

import React, { Component } from 'react';
import './App.css';
import InputMask from "react-input-mask";
import { get } from "./service/consultaCep";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      endereco:{
        bairro: '',
        cep: '',
        complemento: '',
        gia: '',
        ibge: '',
        localidade: '',
        logradouro: '',
        uf: '',
        unidade: '',
      }
    }
  }

  handleInputChange(e){
    console.log(e.target.value);
    this.setState({[e.target.name]:e.target.value},()=>{console.log(this.state)});
  }

  setStateUser(result){
    this.setState({endereco:result},console.log(this.state)); 
  }
  
  formSubmit (e){
    e.preventDefault();
    get(this.texto.value, this.setStateUser.bind(this));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit.bind(this)}>
        <InputMask mask="99999-999" ref={texto => this.texto = texto}/>
        <input type="submit" name="texto" value="Achar cep"></input>
        </form>
        <form>
          <input type="text" name="logradouro" onChange={this.handleInputChange.bind(this)} placeholder="Logradouro" value={this.state.endereco.logradouro}></input>
          <input type="text" name="complemento" onChange={this.handleInputChange.bind(this)} placeholder="Complemento" value={this.state.endereco.complemento}></input>
          <input type="text" name="bairro" onChange={this.handleInputChange.bind(this)} placeholder="Bairro" value={this.state.endereco.bairro}></input>
          <input type="text" name="localidade" onChange={this.handleInputChange.bind(this)} placeholder="Cidade" value={this.state.endereco.localidade}></input>
          <input type="text" name="uf" onChange={this.handleInputChange.bind(this)} placeholder="Estado" value={this.state.endereco.uf}></input>

        </form>
      </div>
    );
  }
}

export default App;
