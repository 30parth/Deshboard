import React from 'react'

const MainCom = () => {
  const data = [
    {
      id: "1",
      code: "C001",
      name: "Alpha Corp",
      address: {
        type: "Head Office",
        address: "123 Market St",
        city: "New York",
        state: "NY",
        country: "USA",
      },
      contacts: [
        {
          contactType: "Email",
          contactPerson: "John Doe",
          contactDetail: "john@alphacorp.com",
        },
        {
          contactType: "Phone",
          contactPerson: "Jane Smith",
          contactDetail: "+1-555-1234",
        },
      ],
    },
    {
      id: "2",
      code: "C002",
      name: "Beta Inc",
      address: {
        type: "Branch",
        address: "456 Sunset Blvd",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
      },
      contacts: [
        {
          contactType: "Email",
          contactPerson: "Alice Brown",
          contactDetail: "alice@beta.com",
        },
      ],
    },
  ];

  return (
    <div className="container py-4">
      <h2 className="mb-4">Company Records</h2>
      <div className="table-responsive">
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
            {data.map((company) => (
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
                  <ul className="list-unstyled mb-0">
                    {company.contacts.map((contact, index) => (
                      <li key={index}>
                        <strong>{contact.contactType}</strong> - {contact.contactPerson}
                        <br />
                        <small className="text-muted">{contact.contactDetail}</small>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainCom