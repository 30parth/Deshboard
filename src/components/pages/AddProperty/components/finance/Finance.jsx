import React from 'react'

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
              <div className="form-floating"><input className="form-control"
                type="text" name="add-property-wizard-currency"
                id="add-property-wizardwizard-currency"
                placeholder="payment currency"
                /><label
                  htmlFor="add-property-wizardwizard-currency">payment
                  currency</label></div>
            </div>
            <div className="col-md-6">
              <div className="form-floating"><input className="form-control"
                type="text" name="add-property-wizard-percentage"
                id="add-property-wizardwizard-percentage"
                placeholder="Commission Percentage"
                disabled="disabled" />
                <label htmlFor="add-property-wizardwizard-percentage">Commission
                  Percentage</label>
              </div>
            </div>
          </div>
          <div className="form-floating mt-3"><select
            className="form-select form-icon-input"
            name="add-property-wizard-type"
            id="add-property-wizardEFT-type">
            <option>Electronic Funds Transfer (EFT)
            </option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select><label className="form-icon-label"
            htmlFor="add-property-wizardEFT-type">Select Payment Method</label>
          </div>
          <div className="form-check my-4"><input className="form-check-input"
            id="invoiceChecked" type="checkbox" /><label
              className="form-check-label fw-normal fs-8"
              htmlFor="invoiceChecked">Invoice to the name and address of
              property</label></div>
          <div className="form-floating mb-4"><input className="form-control" type="text"
            name="add-property-wizard-invoice-email"
            id="add-property-wizardwizard-invoice-email"
            placeholder="Invoice email" /><label
              htmlFor="add-property-wizardwizard-invoice-email">Invoice
              email</label>
            <a
              className="position-absolute d-flex align-items-center px-3 fw-bold fs-9 end-0 top-0 mt-3 me-2">Verify
              now </a>
          </div>
          <div className="form-check form-check-inline mb-3"><input
            className="form-check-input" id="creditCard" type="radio"
            name="paymentMethod"/><label className="form-check-label fs-8"
              htmlFor="creditCard">Credit Card</label></div>
          <div className="form-check form-check-inline mb-3"><input
            className="form-check-input" id="bankAccount" type="radio"
            name="paymentMethod" /><label
              className="form-check-label fs-8" htmlFor="bankAccount">Bank
              Account</label></div>
          <div className="form-check form-check-inline mb-3"><input
            className="form-check-input" id="online" type="radio"
            name="paymentMethod" /><label
              className="form-check-label fs-8" htmlFor="online">Online</label></div>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating"><select
                className="form-select form-icon-input"
                name="add-property-wizard-type"
                id="add-property-wizardcard-type">
                <option>Visa Debit card</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select><label className="form-icon-label"
                htmlFor="add-property-wizardcard-type">Select card</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating"><input className="form-control"
                type="text" name="add-property-wizard-card-number"
                id="add-property-wizardwizard-card-number"
                placeholder="Card number" /><label
                  htmlFor="add-property-wizardwizard-card-number">Card
                  number</label></div>
            </div>
          </div>
          <div className="form-floating mt-3"><input className="form-control" type="text"
            name="add-property-wizard-card-holder"
            id="add-property-wizardwizard-card-holder"
            placeholder="Card Holder name" /><label
              htmlFor="add-property-wizardwizard-card-holder">Card Holder
              name</label></div>
          <h4 className="mt-6 mb-4">Payment from Guests (On property)</h4>
          <div className="border p-3 rounded-2">
            <div className="form-check form-switch mb-0"><input
              className="form-check-input" id="cashPayment"
              type="checkbox" /><label
                className="form-check-label fs-8 fw-bold text-body ms-2"
                htmlFor="cashPayment">Cash payment</label></div>
          </div>
          <div className="border p-3 rounded-2 my-3">
            <div className="form-check form-switch mb-0"><input
              className="form-check-input" id="cardPayment"
              type="checkbox" /><label
                className="form-check-label fs-8 fw-bold text-body ms-2"
                htmlFor="cardPayment">Card Payment</label></div>
          </div>
          <div className="border p-3 rounded-2">
            <div className="form-check form-switch mb-0"><input
              className="form-check-input" id="onlinePayment"
              type="checkbox" /><label
                className="form-check-label fs-8 fw-bold text-body ms-2"
                htmlFor="onlinePayment">MFS / Online Payment</label></div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Finance
