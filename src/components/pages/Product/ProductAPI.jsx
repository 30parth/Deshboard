import axios from 'axios';
import { React, useEffect, useState } from 'react'

const ProductAPI = () => {

    const [data ,setData] = useState([]);

    const getData = async () => {

        axios.get("https://fakestoreapi.com/products")
        .then(res => setData(res.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {

        getData()

    }, [])

    console.log("This is data",data)
    return (
        <div className="table-responsive py-5">
            <table className="table table-striped table-sm">
                <thead>
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
                            <td colSpan="5">No products available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ProductAPI
