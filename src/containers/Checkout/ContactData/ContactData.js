import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            country: '',
            street: '',
            zipCode: '',
            building: '',
            apartment: ''
        },
        loading: false
    }
    
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Ievgen Baranov",
                address: {
                    street: 'Lenina',
                    building: "1",
                    apartment: "1",
                    zipCode: "69000",
                    country: "Ukraine"
                },
                email: "baranoffei@gmail.com"
            },
            deliveryMethod: 'fasted'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
            
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name='name' placeholder="Your name" />
                <input className={classes.Input} type="email" name='email' placeholder="Your email" />
                <input className={classes.Input} type="text" name='country' placeholder="Your country" />
                <input className={classes.Input} type="text" name='street' placeholder="Your street" />
                <input className={classes.Input} type="text" name='zipCode' placeholder="Your zipCode" />
                <input className={classes.Input} type="text" name='building' placeholder="Your building" />
                <input className={classes.Input} type="text" name='apartment' placeholder="Your apartment" />
                <Button  btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading){
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
};

export default ContactData;