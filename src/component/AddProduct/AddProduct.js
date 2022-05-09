import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Sidebar from '../Sidebar/Sidebar';
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { CircularProgress } from '@mui/material';


const AddProduct = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // if (imageUrl) {
    //     document.querySelector('.ap-spinner').style.display = "none";
    // }
    // else {
    //     document.querySelector('.add-product').style.display = "none";
    // }
    const onSubmit = data => {
        const productData = {
            name: data.productName,
            price: `$` + data.price,
            weight: data.weight,
            imageUrl: imageUrl
        }
        const url = `http://localhost:5000/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                console.log('serverside response', res);
            })
        document.getElementById("addProductForm").reset();
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files);
        const imageData = new FormData();
        console.log(imageData);
        imageData.set('key', 'f321cb06a839a342f8eae4db21644e8d');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url);
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        
    }
    return (
        <div>
            <div className='add-product'>
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className='ap-wrapper'>
                    <div className='ap-title'>
                        <h3>Add Product</h3>
                    </div>
                    <div className="ap-form">
                        <form id='addProductForm' onSubmit={handleSubmit(onSubmit)}>
                            <div className='ap-input'>
                                <div className='ap-first'>
                                    <div>
                                        <label>Product Name</label>
                                        <input className='ap-f-input'  {...register("productName")} type='text' placeholder='Enter Product Name' />
                                    </div>
                                    <div>
                                        <label>Price</label>
                                        <input  {...register("price")} type='text' placeholder='Enter Product Price' />
                                    </div>
                                </div>
                                <div className='ap-second'>
                                    <div>
                                        <label>Weight</label>
                                        <input className='ap-f-input'  {...register("weight")} type='text' placeholder='Enter Product Weight' />
                                    </div>
                                    <div>
                                        <label >Add Photo</label>
                                        <label className='ap-upload' htmlFor="up"><CloudUploadIcon></CloudUploadIcon><span>Upload Photo</span></label>
                                        <input onChange={handleImageUpload} type="file" id='up' />
                                    </div>
                                </div>
                            </div>
                            <input className='ap-save' type="submit" value='Save' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;