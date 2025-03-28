import { React, useState } from 'react'

const AccountForm = ({ handleAdd }) => {
    const [AddContect, setAddContect] = useState(1);

    const [account, setAccount] = useState({
        id: "",
        code: "",
        name: "",
        address: {
            type: "",
            address: "",
            city: "",
            state: "",
            country: "",
        },
        contects: [
            {
                contectType: "",
                contectPerson: "",
                contectDetail: "",
            }
        ],
    });
    const addNewForm = () => {
        setAccount(prevState => ({
            ...prevState,
            contects: [
                ...prevState.contects,
                { contectType: "", contectPerson: "", contectDetail: "" }
            ]
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Handle nested fields like address and contacts
        const keys = name.split('.');
        if (keys.length > 1) {
            setAccount(prevState => ({
                ...prevState,
                [keys[0]]: {
                    ...prevState[keys[0]],
                    [keys[1]]: value
                }
            }));
        } else {
            setAccount(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    const handleArrayChange = (e, index) => {
        const { name, value } = e.target;
        setAccount(prevState => ({
            ...prevState,
            contects: prevState.contects.map((contact, idx) =>
                idx === index ? { ...contact, [name]: value } : contact
            )
        }));
    };

    console.log(account);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Submit ")
        handleAdd(account);
        setAccount({
            id: "",
            code: "",
            name: "",
            address: {
                type: "",
                address: "",
                city: "",
                state: "",
                country: "",
            },
            contects: [
                {
                    contectType: "",
                    contectPerson: "",
                    contectDetail: "",
                }
            ],
        });
    }


    const removeForm = (index) => {
        setAccount(prevState => ({
            ...prevState,
            contects: prevState.contects.filter((_, idx) => idx !== index)
        }));
    };

    // const [Id, setId] = useState('');
    // const [Code, setCode] = useState('');
    // const [Name, setName] = useState('');

    return (
        <form onSubmit={handleSubmit} >
            <div className="modal-body">
                <div className="mb-3">
                    {/* <label htmlFor="recipient-name" className="col-form-label">Id</label> */}
                    <input type="text" className="form-control" id="id" name="id" value={account.id} onChange={handleChange} placeholder='Id' />
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="recipient-name" className="col-form-label">Code</label> */}
                    <input type="text" className="form-control" id="code" name="code" value={account.code} onChange={handleChange} placeholder='Code' />
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="recipient-name" className="col-form-label">Name</label> */}
                    <input type="text" className="form-control" id="name" name="name" value={account.name} onChange={handleChange} placeholder='Name' />
                </div>
                <div className="row g-3 py-3">
                    <div className="col-md-4">
                        {/* <label htmlFor="inputState" className="form-label">Address Type</label> */}
                        <select id="addressType" name="address.type" className="form-select" value={account.address.type} onChange={handleChange}>
                            <option value="ContType">Choose...</option>
                            <option value="Office">Office</option>
                            <option value="Home">Home</option>
                        </select>
                    </div>
                    <div className="col-8">
                        {/* <label htmlFor="inputAddress" className="form-label">Address</label> */}
                        <input type="text" className="form-control" id="Address" name="address.address" value={account.address.address} onChange={handleChange} placeholder="Address" />
                    </div>
                    <div className="col-md-4">
                        {/* <label htmlFor="inputCity" className="form-label">City</label> */}
                        <input type="text" className="form-control" id="City" name="address.city" value={account.address.city} onChange={handleChange} placeholder="City" />
                    </div>
                    <div className="col-md-4">
                        {/* <label htmlFor="inputState" className="form-label">State</label> */}
                        <input type="text" className="form-control" id="state" name="address.state" value={account.address.state} onChange={handleChange} placeholder="State" />
                    </div>
                    <div className="col-md-4">
                        {/* <label htmlFor="inputZip" className="form-label">Country</label> */}
                        <input type="text" className="form-control" id="country" name="address.country" value={account.address.country} onChange={handleChange} placeholder="Country" />
                    </div>
                </div>
                {account.contects.map((contact, index) => (
                    <div className="row g-2 py-2" key={index}>
                        <div className="col-md-4">
                            <select
                                id="contectType"
                                className="form-select"
                                name="contectType"
                                value={contact.contectType}
                                onChange={(e) => handleArrayChange(e, index)}
                            >
                                <option value="ContType">Contact Type</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Email">Email</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                className="form-control"
                                id="contectDetail"
                                name="contectDetail"
                                value={contact.contectDetail}
                                onChange={(e) => handleArrayChange(e, index)}
                                placeholder="Contact Detail"
                            />
                        </div>
                        <div className="col-md-3">
                            <input
                                type="text"
                                className="form-control"
                                name="contectPerson"
                                value={contact.contectPerson}
                                id="contectPerson"
                                onChange={(e) => handleArrayChange(e, index)}
                                placeholder="Contact Name"
                            />
                        </div>
                        <div className="col-md-1">
                            {index === account.contects.length - 1 ? (
                                <button type="button" className="btn btn-light" onClick={addNewForm}>
                                    +
                                </button>
                            ) : (
                                <button type="button" className="btn btn-danger" onClick={() => removeForm(index)}>
                                    -
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Add</button>
            </div>
        </form>
    )
}

export default AccountForm
