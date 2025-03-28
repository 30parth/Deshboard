import { React, useState } from 'react'
import ComponentHeader from '../layout/ComponentHeader'
import ModalComp from '../layout/ModalComp'
import AccountForm from './AccountForm'

const Account = () => {

    const [Accounts, setAccounts] = useState([]);


    const handleAddAccount = (account) => {
        setAccounts([...Accounts, account]);
        console.log("Account added:", account);
    };

    const handleDelete = (id) => {
        const isConFirm = window.confirm('Are you sure you want to delete this');
        if (isConFirm) {  
          const updatedaccounts = Accounts.filter((Accounts) => Accounts.id !== id);
          setAccounts(updatedaccounts);
          console.log("account deleted:", id);
        }
      };    
    
    
    return (
        <>
            <div>
                <>
                    <ComponentHeader header={"Accounts"} showButton={true} />
                    <ModalComp modalTitle={"Add Account"} component={<AccountForm handleAdd={handleAddAccount} />} />
                </>
            </div>
            
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">code</th>
                            <th scope="col">name</th>
                            <th scope="col">Opration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Accounts.length > 0 ? (
                            Accounts.map((datas, index) => (
                                <tr key={index}>
                                    <td>{datas.id}</td>
                                    <td>{datas.code}</td>
                                    <td>{datas.name}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-sm" onClick={() => handleEdit(datas)} >Edit</button>
                                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(datas.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No Orders available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default Account
