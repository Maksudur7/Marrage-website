import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiousPublic from "../../Hooks file/useAxiousPublic";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';
import { AuthContext } from "../Firebase file/AuthProvider";

const ChackoutForm = ({ data }) => {
    const {
        _id,
        age,
        dateOfBirth,
        fathersName,
        gender,
        height,
        mothersName,
        name,
        occupation,
        patnerAge,
        patnerHeight,
        patnerWeight,
        permanentDivision,
        presentDivision,
        race,
        weight,
        image,
        phone,
        email,
        members
    } = data
    const payment = 'panding'
    const aproveData = {
        _id,
        age,
        dateOfBirth,
        fathersName,
        gender,
        height,
        mothersName,
        name,
        occupation,
        patnerAge,
        patnerHeight,
        patnerWeight,
        permanentDivision,
        presentDivision,
        race,
        weight,
        image,
        phone,
        email,
        members,
        payment
    }
    const stripe = useStripe()
    const Elements = useElements()
    const axiousPublic = useAxiousPublic()
    const totalPrice = 500
    const [clientSecret, setClientSecret] = useState("");
    const { users } = useContext(AuthContext)
    useEffect(() => {
        axiousPublic.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res)
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiousPublic])
    const handelSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !Elements) {
            return;
        }

        const card = Elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment mathod', error)
        }
        else {
            console.log('payment mathod', paymentMethod) //paymentMethod.created

        }
        console.log(clientSecret)
        const { paymentIntent, error: confurmError } = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: users?.email || 'anonimus',
                        name: users?.displayName || 'anonimus',
                    }
                }
            })


        if (confurmError) {
            console.log('confurmError')
        }
        else {
            console.log('paymentIntent', paymentIntent)
            // status
            // "succeeded"
            if (paymentIntent.status === "succeeded") {
                console.log('payment panding')
                fetch(` http://localhost:5000/profileCard/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(aproveData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                            window.location.reload();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Update Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }
        }
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="mt-2" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
        </div>
    );
};
ChackoutForm.propTypes = {
    data: PropTypes.object
}

export default ChackoutForm;