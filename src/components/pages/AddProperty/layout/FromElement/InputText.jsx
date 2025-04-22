import axios from 'axios'
import React from 'react'

const InputText = ({labelName,type, disabled}) => {
    return (
        <>
            <div className="form-floating">
                <input className="form-control " type={type} disabled={disabled} name="add-property-wizard-name" id="add-property-wizardwizard-name" placeholder={labelName} />
                <label htmlFor="add-property-wizardwizard-name">
                    {labelName}
                </label>
            </div>
        </>
    )
}

export default InputText

