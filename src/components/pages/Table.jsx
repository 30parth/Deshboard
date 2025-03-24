import {React,useState} from 'react'
import dashboradData from './data.json';


const Table = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const totalPages = Math.ceil(dashboradData.customers.length / rowsPerPage);

    const currentData = dashboradData.customers.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
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
                        {currentData.map((customers, index) => (
                            <tr key={index} >
                                <td>{customers.customer_name}</td>
                                <td>{customers.customer_id}</td>
                                <td>{customers.customer_ordered}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <nav aria-label="Page navigation example">
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
            </nav>
        </>
    )
}

export default Table
