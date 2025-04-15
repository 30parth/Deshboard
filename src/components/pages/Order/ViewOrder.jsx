import {React,useEffect,useState} from 'react'

const ViewOrder = ({ ViewData }) => {
    console.log(ViewData);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (Array.isArray(ViewData)) {
            setOrders(ViewData);
        }
    }, [ViewData]);

    console.log('Is Array:', Array.isArray(ViewData));
    console.log('Length:', ViewData?.length);
    return (
        <>
            <table className="table table-bordered table-hover table-striped align-middle">
                <thead className="table-dark">
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Customer Id</th>
                        <th scope="col">Status</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                {orders.length > 0 ? (
                    orders.map((datas, index) => (
                        <tr key={index}>
                            <td>{datas.OrderId}</td>
                            <td>{datas.Customer_id}</td>
                            <td>{datas.Status}</td>
                            <td>{datas.Amount}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No orders to display</td>
                    </tr>
                )}
            </tbody>
            </table>
        </>
    )
}

export default ViewOrder
