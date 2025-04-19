import axios from 'axios';
import { React, useEffect, useRef, useState } from 'react'
import ComponentHeader from '../../layout/ComponentHeader'
import ModalComp from '../../layout/ModalComp';
import ProductFormAPI from './ProductFormAPI';
import { useDispatch ,useSelector } from 'react-redux';
import { fetchData } from '../../../redux/features/fetchApi/fetchApiSlice';
const ProductAPI = () => {

    // const getData = async () => {

    //     axios.get("https://fakestoreapi.com/products")
    //         .then(res => setData(res.data))
    //         .catch(error => console.log(error))
    // }

    // useEffect(() => {
    //     getData()
    // }, [])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])
    
    const state = useSelector(state => state.fetchApi.data)
    console.log(state);
    const modalRef = useRef();
    return (
        <>
            <ComponentHeader header={"Products"} showButton={true} />
            <ModalComp
                modalRef={modalRef}
                modalTitle={"Add Products"}
                component={
                    <ProductFormAPI
                        modalRef={modalRef}
                        productList={state}
                    />
                } />
            <div className="table-responsive table-hover py-5">
                <table className="table table-striped table-sm">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Title</th>
                            <th scope="col">Product Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.length > 0 ? (
                            state.map((datas, index) => (
                                <tr key={index}>
                                    <td>{datas.id}</td>
                                    <td>{datas.title}</td>
                                    <td>{datas.price}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No products available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductAPI
