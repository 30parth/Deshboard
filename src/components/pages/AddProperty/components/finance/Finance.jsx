import React from 'react'
import RedioBox from '../../layout/FromElement/RedioBox'
import InputText from '../../layout/FromElement/InputText'

const Finance = () => {
  return (
    <>
      <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab5"
        id="add-property-wizard-tab5">
        <form id="addPropertyWizardForm5" noValidate="novalidate"
          data-wizard-form="5">
          <h3 className="mb-6">Finance</h3>
          <h4 className="mb-4">Payment from Phoenix Booking Management</h4>
          <div className="row g-3">
            <div className="col-md-6">
              <InputText labelName={"payment currency"} type={"text"} />
            </div>
            <div className="col-md-6">
              <InputText labelName={"Commission Percentage"} type={"text"} disabled={true} />
            </div>
          </div>
          <div className="form-floating mt-3">
            <select className="form-select form-icon-input"
              name="add-property-wizard-type"
              id="add-property-wizardEFT-type">
              <option>Electronic Funds Transfer (EFT)</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <label className="form-icon-label"
              htmlFor="add-property-wizardEFT-type">Select Payment Method</label>
          </div>
          <div className="form-check my-4">
            <input className="form-check-input"
              id="invoiceChecked" type="checkbox" />
            <label className="form-check-label fw-normal fs-8"
              htmlFor="invoiceChecked">Invoice to the name and address of
              property</label>
          </div>
          <div className="form-floating mb-4">
            <InputText labelName={"Invoice email"} type={"email"} />
            <a className="position-absolute d-flex align-items-center px-3 fw-bold fs-9 end-0 top-0 mt-3 me-2">Verify now </a>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input className="form-check-input" id="creditCard" type="radio"
              name="paymentMethod" />
            <label className="form-check-label fs-8"
              htmlFor="creditCard">Credit Card</label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input className="form-check-input" id="bankAccount" type="radio"
              name="paymentMethod" />
            <label className="form-check-label fs-8" htmlFor="bankAccount">Bank
              Account</label>
          </div>
          <div className="form-check form-check-inline mb-3">
            <input className="form-check-input" id="online" type="radio"
              name="paymentMethod" />
            <label className="form-check-label fs-8" htmlFor="online">Online</label>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <select className="form-select form-icon-input"
                  name="add-property-wizard-type"
                  id="add-property-wizardcard-type">
                  <option>Visa Debit card</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <label className="form-icon-label"
                  htmlFor="add-property-wizardcard-type">Select card</label>
              </div>
            </div>
            <div className="col-md-6">
              <InputText labelName={"Card number"} type={"number"} />
            </div>
          </div>
          <div className='mt-3'>
            <InputText labelName={"Card Holder name"} type={"text"} />
          </div>
          <h4 className="mt-6 mb-4">Payment from Guests (On property)</h4>
          <RedioBox title={"Cash Payment"} />
          <RedioBox title={"Card Payment"} />
          <RedioBox title={"Online Payment"} />
        </form>
      </div>
    </>
  )
}

export default Finance