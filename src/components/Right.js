import React, { Component } from 'react';
import axios;

const productUrl = 'https://scalenut.com/categories/';
class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : [],
        }
    }

    componentDidMount () {
        this.getProducts()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.categoryId !== this.props.categoryId) {
            this.getProducts()
        }
     }

    getProducts = () =>{
        axios.get(`${productUrl}${this.props.categoryId}`)
        .then( (response) => {
            console.log(response)
                this.setState({
                    products : response.data
                })
              })
    }

    render() {

        const {products} = this.state
        let productList = '';
        if (products) {
            productList = products.results.map((product, index) => {
                return (
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                            <div class="card">
                                <img class="card-img" src={product.img_url} alt="image" />
                                <div class="card-img-overlay d-flex justify-content-end">
                                <a href="#" class="card-link text-danger like">
                                    <i class="fas fa-heart"></i>
                                </a>
                                </div>
                                <div class="card-body">
                                <h4 class="card-title">{product.ProductName}</h4>
                                <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
                                <p class="card-text">
                                    {product.description}                                
                                    </p>
                                <div class="buy d-flex justify-content-between align-items-center">
                                    <div class="price text-success"><h5 class="mt-4">Rs.{product.Price}</h5></div>
                                    <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                )
            } )
        }
        else {
            productList = <div className="col-12 alert alert-info mt-2">No records found</div>
          }

        return (
            <div className="row">
                <div className="col-md-12 col-sm-6">
                    {productList}
                </div>
            </div>
        );
    }
}

export default Right;