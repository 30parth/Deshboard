import {React , useState ,useEffect} from 'react'

const ViewProduct = ({ ViewData }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (Array.isArray(ViewData)) {
            setProducts(ViewData);
        }
    }, [ViewData]);

    return (
        <>
            <table className="table table-bordered table-hover table-striped align-middle">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Product Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Ordered</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((datas, index) => (
                            <tr key={index}>
                                <td>{datas.id}</td>
                                <td>{datas.name}</td>
                                <td>{datas.type}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No products available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default ViewProduct
