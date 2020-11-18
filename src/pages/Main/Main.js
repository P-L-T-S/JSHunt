import React, { Component } from "react";
import api from "..//../services/api";
import "./Main.css"

export default class Main extends Component{

    state = {
        products: [],
        productInfo: {},
        page: 1
    };

    loadProducts = async () => {
        const response = await api.get("/products");

        const { docs, ...productInfo} = response.data;

        this.setState({ products: docs, productInfo });
    };

    componentDidMount(){
        this.loadProducts();
    };

    prevPage = () => {};

    nextPage = () => {};

    render(){
        const {products} = this.state
        return (
            <div className="product-list">
                { products.map(produto => (
                <article key={ produto._id }>
                        <strong>{ produto.title }</strong>
                        <p>{ produto.description } </p>
                        <a href="">Acessar </a>
                </article> 
                ))}
                <div className="actions">
                    <button onClick={ this.prevPage }>Anterior</button>
                    <button onClick={ this.nextPage }>Próxima</button>
                </div>
            </div>
        )
    }
}