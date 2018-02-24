import React, { Component } from 'react';
import AuxContainer from '../../../hoc/AuxContainer';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]}
                </li>
            );
        });
        return(
            <AuxContainer>
                <h3>Your Order</h3>
                <p>A delicios burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: <strong>{this.props.totalPrice.toFixed(2)}$</strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCanselled} btnType='Danger'>CANCEL</Button>
                <Button clicked={this.props.purchaseContinued} btnType='Success'>CONTINUE</Button>
            </AuxContainer>
        )
    }
};
/*= (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {props.ingredients[igKey]}
                </li>
            );
        });
    return (
        <AuxContainer>
            <h3>Your Order</h3>
            <p>A delicios burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>{props.totalPrice.toFixed(2)}$</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCanselled} btnType='Danger'>CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType='Success'>CONTINUE</Button>
        </AuxContainer>
    )
};
*/
export default OrderSummary;