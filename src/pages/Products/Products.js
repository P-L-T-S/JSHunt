import React, { Component } from "react";
import api from "../../services/api";
import "./Product.css"

export default class Product extends Component{

    // state é uma forma de atualizar variaveis sem revarregar a pagina
    state = {
        product: {},
    };

    async componentDidMount(){
        // Recebe os parametros da requisição
        // No caso da aplicação, recebe o parametro ID
        const { id } = this.props.match.params;

        // busca os produtos na api
        const response = await api.get(`/products/${id}`);

        // adiciona o resultado da busca na variavel product
        this.setState({ product: response.data});
    }

    render(){
        const { product } = this.state;

        return (
            <div className="product-info">
                <h1> { product.title } </h1>
                <p> { product.description } </p>
                <p>
                    URL: <a href={product.url}> { product.url } </a>
                </p>
            </div>
        )
    }
}