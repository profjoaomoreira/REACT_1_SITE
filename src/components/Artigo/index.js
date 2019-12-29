import React, { Component } from 'react';
import { Container } from './style';

// import { Container } from './styles';

export default class Artigo extends Component {
  render() {
    return (
 
 <Container>
<h4> {this.props.titulo}</h4>
<p> this.props.texto</p>

    </Container>
    
      );
    }
}