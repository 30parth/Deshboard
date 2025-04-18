import { React, useState, useRef } from 'react'
import ComponentHeader from '../../layout/ComponentHeader'
import ModalComp from '../../layout/ModalComp'
import AccountForm from './AccountForm'
import ModalView from '../../layout/ModalView'
import ViewAccount from './ViewAccount'
import jsPDF from 'jspdf';
import "jspdf-autotable";
import html2canvas from 'html2canvas';
import exportFromJSON from 'export-from-json'
import { useSelector } from 'react-redux'

const Account = () => {


    const [Accounts, setAccounts] = useState([]);
    const [ViewAcc, setViewAcc] = useState([]);

    const [editData, setEditData] = useState(null);
    const input = useSelector(state => state.input.value);

    const modalRef = useRef()

    const handleAddAccount = (account) => {
        if (editData) {
            const updatedAccounts = Accounts.map((item) =>
                item.id === account.id ? account : item
            );
            setAccounts(updatedAccounts);
            setEditData(null); // Clear edit state after updating
            console.log("Account updated:", account);
        } else {
            const idExists = Accounts.some(item => item.id === account.id);
            if (idExists) {
                alert("ID already exists. Please use a unique ID.");
                return;
            }
            setAccounts([...Accounts, account]);
            console.log("Account added:", account);
        }
    };
    const handleEdit = (account) => {
        setEditData(account); 
        const modal = document.getElementById('exampleModal');
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    };  
    
    const handleDelete = (id) => {
        const isConFirm = window.confirm('Are you sure you want to delete this');
        if (isConFirm) {
            const updatedaccounts = Accounts.filter((Accounts) => Accounts.id !== id);
            setAccounts(updatedaccounts);
            console.log("account deleted:", id);
        }
    };

    const handleView = (account) => {
        setViewAcc([account]);
        const modal = document.getElementById('ViewModel');
        const modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    };

    const filteredData = Accounts.filter((account) =>
        Object.values(account).some((val) =>
            val.toLowerCase().includes(input.toLowerCase())
        )
    );

    const handleExportCsv = () => {
        if(Accounts.length!==0) {
            const fileName = "Account";
            const exportType = exportFromJSON.types.csv;
            exportFromJSON({ data: Accounts, fileName, exportType })
        } else {
          alert("Insert some data First")
        }
    }

    const handleExportJson = () => {
        if (Accounts.length !== 0) {
            console.log("this is data export")
            const fileData = JSON.stringify(Accounts); // nicely formatted
            const blob = new Blob([fileData], { type: "application/json" });
            console.log(blob)
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "account.json";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);    
        }
        else {
            alert("Insert first");
        }
    };

    const printData = useRef(null);


    const handleExportPdf = async () => {

        if(Accounts.length!==0) {
            const element = printData.current;
            const canvas = await html2canvas(element, { scale: 2, });
            const data = canvas.toDataURL('image/png');


            const doc = new jsPDF({
                format: "a4",
            });
            const imgPro = doc.getImageProperties(data);
            const width = doc.internal.pageSize.getHeight();
            const hight = (imgPro.height * width) / imgPro.width;
            doc.addImage(data, 'PNG', 0, 0, width, hight);
            doc.save("account.pdf");
        } else {
          alert("Insert some data First")
        }
    }


    return (
        <>
            <div>
                <>
                    <ComponentHeader header={"Accounts"} showButton={true} handleExportJson={handleExportJson} handleExportPdf={handleExportPdf} handleExportCsv={handleExportCsv} />
                    <ModalComp modalRef={modalRef} modalTitle={editData ? "Edit Account" : "Add Account"} component={<AccountForm handleAdd={handleAddAccount} accoutnList={Accounts} editData={editData} modalRef={modalRef}/>} />
                    <ModalView modalTitle={"View The Account"} ViewTable={<ViewAccount ViewData={ViewAcc} />} />
                </>
            </div>

            <div className="table-responsive">
                <table ref={printData} className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">code</th>
                            <th scope="col">name</th>
                            <th scope="col">Opration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((datas, index) => (
                                <tr key={index}>
                                    <td>{datas.id}</td>
                                    <td>{datas.code}</td>
                                    <td>{datas.name}</td>
                                    <td>
                                        <button type="button" className="btn btn-warning btn-sm mx-1" onClick={() => handleEdit(datas)} >Edit</button>
                                        <button type="button" className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(datas.id)}>Delete</button>
                                        <button type="button" className="btn btn-info btn-sm mx-1" onClick={() => handleView(datas)} >View</button>

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
