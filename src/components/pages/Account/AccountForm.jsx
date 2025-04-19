import { React, useState, useEffect } from 'react'

const AccountForm = ({ handleAdd, editData, modalRef, accountList = [] }) => {
    const [Addcontact, setAddcontact] = useState(1);

    const [idError, setIdError] = useState(false);

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
        contacts: [
            {
                contactType: "",
                contactPerson: "",
                contactDetail: "",
            }
        ],
    });

    useEffect(() => {
        if (editData) {
            setAccount(editData);
        }
    }, [editData]);

    const addNewForm = () => {
        setAccount(prevState => ({
            ...prevState,
            contacts: [
                ...prevState.contacts,
                { contactType: "", contactPerson: "", contactDetail: "" }
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
            contacts: prevState.contacts.map((contact, idx) =>
                idx === index ? { ...contact, [name]: value } : contact
            )
        }));
    };

    console.log(account);
    const handleSubmit = (e) => {
        e.preventDefault();

        // Prevent submission if ID is empty
        if (!account.id) {
            setValidated(true);
            setIdError(true);
            return;
        }

        // Only check for duplicate ID when adding (not editing)
        const isDuplicate = accountList.some(f => f.id === account.id);
        if (!editData && isDuplicate) {
            setValidated(true);
            setIdError(true);
            return;
        }

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
            contacts: [
                {
                    contactType: "",
                    contactPerson: "",
                    contactDetail: "",
                }
            ],
        });
        setValidated(false);
        setIdError(false);

        // Hide modal
        if (modalRef.current) {
            const modalInstance = bootstrap.Modal.getInstance(modalRef.current);
            if (modalInstance) {
                modalInstance.hide();
            } else {
                console.warn("Modal instance not found for ref:", modalRef.current);
            }
        } else {
            console.error("modalRef.current is null or undefined");
        }
    };


    const [validated, setValidated] = useState(false);

    const removeForm = (index) => {
        setAccount(prevState => ({
            ...prevState,
            contacts: prevState.contacts.filter((_, idx) => idx !== index)
        }));
    };

    // const [Id, setId] = useState('');
    // const [Code, setCode] = useState('');
    // const [Name, setName] = useState('');

    const onSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        }
        else {
            handleSubmit(event);
            setValidated(false)
        }
    }

    return (
        <form onSubmit={onSubmit} className={`needs-validation ${validated ? "was-validated" : ""}`} noValidate>
            <div className="modal-body">
                <div className="mb-3">
                    {/* <label htmlFor="recipient-name" className="col-form-label">Id</label> */}
                    <input
                        type="text"
                        className={`form-control ${idError ? "is-invalid" : ""}`}
                        id="product-id"
                        name="id"
                        value={account.id}
                        onChange={(e) => {
                            handleChange(e);
                            if (idError) setIdError(false);
                        }}
                        readOnly={!!editData}
                        placeholder="Account ID"
                        required
                    />
                    <div className="invalid-feedback">
                        {idError ? " Id already Exist " : "Please Enter the Product Id"}
                    </div>
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="recipient-name" className="col-form-label">Code</label> */}
                    <input type="text" className="form-control" id="code" name="code" value={account.code} onChange={handleChange} placeholder='Code' required />
                    <div className="invalid-feedback">
                        Please Enter Account Code
                    </div>
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="recipient-name" className="col-form-label">Name</label> */}
                    <input type="text" className="form-control" id="name" name="name" value={account.name} onChange={handleChange} placeholder='Name' required />
                    <div className="invalid-feedback">
                        Please Enter Account Name
                    </div>
                </div>
                <div className="row g-3 py-3">
                    <div className="col-md-4">
                        {/* <label htmlFor="inputState" className="form-label">Address Type</label> */}
                        <select id="addressType" name="address.type" className="form-select" value={account.address.type} onChange={handleChange} required>
                            <option value="ContType">Choose...</option>
                            <option value="Office">Office</option>
                            <option value="Home">Home</option>
                        </select>
                        <div className="invalid-feedback">
                            Please Select any one
                        </div>
                    </div>
                    <div className="col-8">
                        {/* <label htmlFor="inputAddress" className="form-label">Address</label> */}
                        <input type="text" className="form-control" id="Address" name="address.address" value={account.address.address} onChange={handleChange} placeholder="Address" required />
                        <div className="invalid-feedback">
                            Please Enter Address
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* <label htmlFor="inputCity" className="form-label">City</label> */}
                        <input type="text" className="form-control" id="City" name="address.city" value={account.address.city} onChange={handleChange} placeholder="City" required />
                        <div className="invalid-feedback">
                            Please Enter City Name
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* <label htmlFor="inputState" className="form-label">State</label> */}
                        <input type="text" className="form-control" id="state" name="address.state" value={account.address.state} onChange={handleChange} placeholder="State" required />
                        <div className="invalid-feedback">
                            Please Enter State Name
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* <label htmlFor="inputZip" className="form-label">Country</label> */}
                        <input type="text" className="form-control" id="country" name="address.country" value={account.address.country} onChange={handleChange} placeholder="Country" required />
                        <div className="invalid-feedback">
                            Please Enter Country Name
                        </div>
                    </div>
                </div>
                {account.contacts.map((contact, index) => (
                    <div className="row g-2 py-2" key={index}>
                        <div className="col-md-4">
                            <select
                                id="contactType"
                                className="form-select"
                                name="contactType"
                                value={contact.contactType}
                                onChange={(e) => handleArrayChange(e, index)}
                                required
                            >
                                <option value="ContType">Contact Type</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Email">Email</option>
                            </select>
                            <div className="invalid-feedback">
                                Please Select any one
                            </div>
                        </div>
                        <div className="col-md-4">
                            <input
                                type={`${contact.contactType === "Email" ? "email" : "number"}`}
                                className="form-control"
                                id="contactDetail"
                                name="contactDetail"
                                value={contact.contactDetail}
                                onChange={(e) => handleArrayChange(e, index)}
                                placeholder="Contact Detail"
                                required
                            />
                            <div className="invalid-feedback">
                                Please Enter Contect Detail
                            </div>
                        </div>
                        <div className="col-md-3">
                            <input
                                type="text"
                                className="form-control"
                                name="contactPerson"
                                value={contact.contactPerson}
                                id="contactPerson"
                                onChange={(e) => handleArrayChange(e, index)}
                                placeholder="Contact Name"
                                required
                            />
                            <div className="invalid-feedback">
                                Please Enter Contect Person Name
                            </div>
                        </div>
                        <div className="col-md-1">
                            {index === account.contacts.length - 1 ? (
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
                <button type="submit" className="btn btn-primary" >{editData ? "Edit" : "Add"}</button>
            </div>
        </form>
    )
}

export default AccountForm
