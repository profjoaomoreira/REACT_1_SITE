import React, { Component } from 'react';
import './style.css'

import Artigo from '../../components/Artigo'

export default class Home extends Component {

  
  render() {
    return (
    
    <div>

        <h1>Página Home </h1>

<Artigo titulo="noticia 1" texto="Texto 1" />
<Artigo titulo="noticia 2" texto="Texto 2" />
<Artigo titulo="noticia 3" texto="Texto 3" />
<Artigo titulo="noticia 4" texto="Texto 4" />
<Artigo titulo="noticia 5" texto="Texto 5" />


        <ul>
            <li>Home</li>
            <li>Fale conosco</li>
            <li>Sobre nós</li>
            <li>Trabalhe Conosco</li>
        </ul>

    </div>
        );
        
  }
}
