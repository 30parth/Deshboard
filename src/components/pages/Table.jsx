import { React, useState } from 'react'
// import dashboradData from './data.json';

const Table = (props) => {
    console.log(props.data);
    // const [currentPage, setCurrentPage] = useState(1);
    // const rowsPerPage = 5;

    // console.log(location);
    // const totalPages = Math.ceil(products.length / rowsPerPage);

    // const currentData = dashboradData.customers.slice(
    //     (currentPage - 1) * rowsPerPage,
    //     currentPage * rowsPerPage
    // );

    // const changePage = (page) => {
    //     if (page >= 1 && page <= totalPages) {
    //         setCurrentPage(page);
    //     }
    // };
    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Ordered</th>
                            <th scope="col">Opration</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.data.length > 0 ? (
                        props.data.map((datas, index) => (
                            <tr key={index}>
                                <td>{datas.name}</td>
                                <td>{datas.id}</td>
                                <td>{datas.type}</td>
                                <td>
                                       <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No products available</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            {/* <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><button className="page-link" onClick={() => changePage(index - 1)} disabled={currentPage === 1}
                    >Previous</button></li>
                    {[...Array(totalPages)].map((_, index) => (
                        <li className="page-item"><button onClick={() => changePage(index + 1)}
                        className={currentPage === index + 1 ? 'active page-link' : 'page-link'} >{index +1}</button>
                        </li>
                    ))}
                    <li className="page-item"><button className="page-link" onClick={() => changePage(index + 1)} disabled={currentPage === totalPages}
                    >Next</button></li>
                </ul>
            </nav> */}
        </>
    )
}

export default Table
