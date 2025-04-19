import axios from 'axios';
import { React, useEffect, useRef, useState } from 'react'
import ComponentHeader from '../../layout/ComponentHeader'
import ModalComp from '../../layout/ModalComp';
import ProductFormAPI from './ProductFormAPI';
const ProductAPI = () => {

    const [data, setData] = useState([]);

    const getData = async () => {

        axios.get("https://fakestoreapi.com/products")
            .then(res => setData(res.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [])
    const modalRef = useRef();
    console.log("This is data", data)
    return (
        <>
            <ComponentHeader header={"Products"} showButton={true} />
            <ModalComp
                modalRef={modalRef}
                modalTitle={"Add Products"}
                component={
                    <ProductFormAPI
                        modalRef={modalRef}
                        productList={data}
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
                        {data.length > 0 ? (
                            data.map((datas, index) => (
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
