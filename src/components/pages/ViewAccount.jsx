import React, { useEffect, useState } from "react";

const ViewAccount = ({ ViewData }) => {
    const [account, setAccount] = useState([]);
    console.log(ViewData);
    useEffect(() => {
        if (Array.isArray(ViewData)) {
            const sanitized = ViewData.map((item) => ({
                ...item,
                address: item.address || {
                    type: "",
                    address: "",
                    city: "",
                    state: "",
                    country: ""
                },
                contacts: Array.isArray(item.contacts) ? item.contacts : []
            }));
            setAccount(sanitized);
        }
    }, [ViewData]);
    console.log("Company.contacts:", account.contacts);
    return (
        <div className="container py-4">
            <h4 className="mb-3">Account Info</h4>
            <table className="table table-bordered table-hover table-striped align-middle">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contacts</th>
                    </tr>
                </thead>
                <tbody>
                    {account.map((company) => (
                        <tr key={company.id}>
                            <td>{company.id}</td>
                            <td>{company.code}</td>
                            <td>{company.name}</td>
                            <td>
                                <strong>{company.address.type}</strong>
                                <br />
                                {company.address.address}, {company.address.city}
                                <br />
                                {company.address.state}, {company.address.country}
                            </td>
                            <td>
                                {
                                    company.contacts.length > 0 ? (
                                        <ul className="list-unstyled mb-0">
                                            {company.contacts.map((contact, index) => (
                                                <li key={index}>
                                                    <strong>{contact.contactType}</strong> -{" "}
                                                    {contact.contactPerson}
                                                    <br />
                                                    <small className="text-muted">
                                                        {contact.contactDetail}
                                                    </small>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <em className="text-muted">No contacts available</em>
                                    )

                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewAccount;
