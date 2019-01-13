import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {

    state = {
        orderForm: {
        name: {
         elemenType: 'input',
         elementConfig: {
             type:'text',
             placeholder:'Your Name'
         },
         value: '',
         validation: {
             required: true
         },
         valid:false
        },
        street: {
            elemenType: 'input',
            elementConfig: {
                type:'text',
                placeholder:'Street'
            },
            value: ''   ,
            validation: {
                required: true
            }  ,
            valid:false 
           },
        zipCode: {
            elemenType: 'input',
            elementConfig: {
                type:'text',
                placeholder:'Zip Code'
            },
            value: '' ,
            validation: {
                required: true
            }  ,
            valid:false   
           },
        country: {
            elemenType: 'input',
            elementConfig: {
                type:'text',
                placeholder:'Country'
            },
            value: ''   ,
            validation: {
                required: true
            } ,
            valid:false  
           },
        email: {
            elemenType: 'input',
            elementConfig: {
                type:'email',
                placeholder:'Your Email'
            },
            value: ''   ,
            validation: {
                required: true
            } ,
            valid:false  
           },
        deliveryMethod:{
            elemenType: 'select',
            elementConfig: {
              options: [{value: 'fastest',displayValue:'Fastest'},
              {value: 'cheapest',displayValue:'Cheapest'}
            ]
            },
            value: ''   
           } 
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
          this.setState({ loading: true });
          const formData = {};
          for(let formElementIdentifier in this.state.orderForm){
              formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;

          }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData:  formData
        }
        axios.post('/orders.json', order)
            .then(response => {
              
                this.setState({ loading: false});
                this.props.history.push('/');
                
            })
            .catch(error => {
                console.log(error)
                this.setState({ loading: false })
            });
    }


    checkValidity(value,rules){
        let isValid = false;
            if(rules.required){
                    
            }
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm:updatedOrderForm});
    }

    render(){

        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement => (
                        <Input 

                            key={formElement.id}
                            elementType={formElement.config.elemenType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={ (event) => this.inputChangedHandler(event,formElement.id)}
                            />
                    ))}
                    <Button btnType="Success" >ORDER</Button>
                </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return (
         
            <div className={classes.ContactData}>
                <h4>Enter your Data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;