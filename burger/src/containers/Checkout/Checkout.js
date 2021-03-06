
import React, {Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import {Route} from 'react-router-dom'

class Checkout extends Component{
    state={
        ingredients: {
            salad:1,
            meat: 1,
            cheese: 2
        }
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients=[];
        for(let param of query.entries()){
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }
    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contactInfo');

    }
    render(){
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler}
                />
                <Route path={this.props.match.url + '/contactInfo'} render={() => (<ContactData ingredients={this.props.ingredients}/>)}/>
            </div>
        )
    }
}

export default Checkout;
