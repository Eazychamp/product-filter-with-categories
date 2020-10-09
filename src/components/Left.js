import React, { Component } from 'react';
import axios from 'axios';
import Right from './Right';


const categoryUrl = 'https://scalenut.com/categories'
export default class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories : [],
            categoryId : ''
        }
    }

    componentDidMount() {
        this.getCategories()
    }

    getCategories = () => {
        axios.get(categoryUrl)
        .then( (response) => {
            console.log(response)
                this.setState({
                    categories : response.data
                })
              })
    }

    handleCategoryClick = (id) => {
        this.setState({
            categoryId : id
        })
    }

    render() {

        const {categories} = this.state
        let categoriesList = '';
        if (categories) {
            categoriesList = categories.results.map((category, index) => {
                return (
                    <ul>
                    <li key={index} onClick={() =>this.handleCategoryClick(categoryId)}>{CategoryName}</li>
                    </ul>
                )
            } )
        }
        else {
            categoriesList = <div className="col-12 alert alert-info mt-2">No records found</div>
          }

        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Select Category of your choice</h2>
                        {categoriesList}
                    </div>
                    <div className="col-md-8">
                        <Right categoryId={this.state.categoryId} />
                    </div>
                </div>
            </React.Fragment>
        )
    }

}