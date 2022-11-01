import React, { useEffect, useState } from 'react';


const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => { 
        const respose = await fetch('https://fakestoreapi.com/products/');
        const data=await respose.json();
        setUsers(data);
        console.log(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>Fake Shopping</h2>
            <div className='container_fluid mt-5'>
                <div className='row text-center'>

                    {
                        users.map((currElement) => {
                            return (
                                <>
                                    <div className='col-10 col-md-4 mt-5' key={currElement.id}>
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src={currElement.image}  alt='pic' className="rounded" width="120" height="150" /></div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="text"> {currElement.login} </h4>
                                                     <span className="textleft">{currElement.title}</span>  
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column"> <span className="articles">No.</span> <span className="number1">{currElement.id}</span></div>
                                                        <div className="d-flex flex-column"> <span className="followers">Price</span> <span className="number1">Rs. {currElement.price}</span></div>
                                                        <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number1">{currElement.rating.rate}</span></div>
                                                    </div>
                                                    <div>
                                                        <button>Add to cart</button>
                                                        <button>Buy now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })
                    }

                </div>
            </div>
        </>
    )
}



export default UseEffectAPI