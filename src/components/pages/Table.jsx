import React from 'react'
import dashboradData from './data.json';

const Table = (props) => {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer Id</th>
                            <th scope="col">Customer Ordered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dashboradData.customers.map((customers, index) => (
                            <tr key={index} >
                                <td>{customers.customer_name}</td>
                                <td>{customers.customer_id}</td>
                                <td>{customers.customer_ordered}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table
