import React from 'react'
import InputText from '../../layout/FromElement/InputText'
import RedioBox from '../../layout/FromElement/RedioBox'

const Policies = () => {
  return (
<>
        <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab6" id="add-property-wizard-tab6">
            <form id="addPropertyWizardForm6" noValidate="novalidate" data-wizard-form="6">
                <h3 className="mb-6">Policies</h3>
                <div className="form-check form-check-inline me-5 mb-3">
                    <input className="form-check-input" id="limitedCheckIn" type="radio" name="checkIn" />
                    <label className="form-check-label fs-8" htmlFor="limitedCheckIn">Limited Check-in</label>
                </div>
                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" id="24HrCheckIn" type="radio" name="checkIn" />
                    <label className="form-check-label fs-8" htmlFor="24HrCheckIn">24hr Check-in</label>
                </div>
                <div className="row g-3 align-items-center">
                    <div className="col-12 col-sm-6 col-md-auto flex-md-grow-1">
                        <InputText labelName={"Check-in Starts"} type={"text"} />
                    </div>
                    <div className="col-12 col-sm-6 col-md-auto flex-md-grow-1">
                        <InputText labelName={"Check-in Ends"} type={"text"} />
                    </div>
                    <div className="col-12 col-md-auto">
                        <div className="form-check mb-0">
                            <input className="form-check-input" id="lateCheckIn" type="checkbox" />
                            <label className="form-check-label fw-normal fs-8" htmlFor="lateCheckIn">Late Check-in</label>
                        </div>
                    </div>
                </div>
                <RedioBox title={"Age Restriction"} />
                <RedioBox title={"Deposit at Check-in"} />
                <RedioBox title={"Documentation at Check-in"} />
                <h4 className="mb-4 mt-6">Checkout Policy</h4>
                <RedioBox title={"Flexible Checkout"} />
                <h4 className="mb-4 mt-6">Cancellation Policy</h4>
                <div className="form-check form-check-inline me-5 mb-0">
                    <input className="form-check-input" id="nonRefundable" type="radio" name="refundPolicy" />
                    <label className="form-check-label fs-8" htmlFor="nonRefundable">Non Refundable</label>
                </div>
                <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" id="optionalRefund" type="radio" name="refundPolicy" />
                    <label className="form-check-label fs-8" htmlFor="optionalRefund">Optional Refund</label>
                </div>
                <RedioBox title={"Full Refund"} />
                <RedioBox title={"Partial Refund"} />
                <h4 className="mb-4 mt-6">Pet Policy</h4>
                <div className="form-check form-check-inline me-5 mb-0">
                    <input className="form-check-input" id="notAllowed" type="radio" name="petPolicy" />
                    <label className="form-check-label fs-8" htmlFor="notAllowed">Not allowed</label>
                </div>
                <div className="form-check form-check-inline mb-0">
                    <input className="form-check-input" id="allowed" type="radio" name="petPolicy" />
                    <label className="form-check-label fs-8" htmlFor="allowed">Allowed</label>
                </div>

                <RedioBox title={"Pet Restricted Zones"} />
                <RedioBox title={"Additional Charges"} />

                <h4 className="mb-4 mt-6">Child Policy</h4>
                <h5 className="mb-2 text-body">Age Segment 1</h5>
                <div className="row align-items-center g-3">
                    <div className="col-6 col-sm-auto">
                        <div className="form-floating age-segment-input">
                            <input className="form-control input-spin-none" type="number" name="add-property-wizard-from1" id="add-property-wizardwizard-from1" placeholder="From (Yrs)" disabled="disabled" />
                            <label htmlFor="add-property-wizardwizard-from1">From (Yrs)</label>
                        </div>
                    </div>
                    <div className="col-12 col-sm-auto flex-1 order-1 order-sm-0">
                        <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2" data-nouislider='{"range":{"min":0,"max":18},"start":[0,7],"connect":true}'></div>
                    </div>
                    <div className="col-6 col-sm-auto">
                        <div className="form-floating age-segment-input">
                            <input className="form-control input-spin-none" type="number" name="add-property-wizard-to1" id="add-property-wizardwizard-to1" placeholder="To (Yrs)" />
                            <label htmlFor="add-property-wizardwizard-to1">To (Yrs)</label>
                        </div>
                    </div>
                </div>
                <h5 className="mb-2 mt-4 text-body">Age Segment 2</h5>
                <div className="row align-items-center g-3">
                    <div className="col-6 col-sm-auto">
                        <div className="form-floating age-segment-input">
                            <input className="form-control input-spin-none" type="number" name="add-property-wizard-from2" id="add-property-wizardwizard-from2" placeholder="From (Yrs)" />
                            <label htmlFor="add-property-wizardwizard-from2">From (Yrs)</label>
                        </div>
                    </div>
                    <div className="col-auto flex-1 order-1 order-sm-0">
                        <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2" data-nouislider='{"range":{"min":0,"max":18},"start":[8,12],"connect":true}'></div>
                    </div>
                    <div className="col-6 col-sm-auto">
                        <div className="form-floating age-segment-input">
                            <input className="form-control input-spin-none" type="number" name="add-property-wizard-to2" id="add-property-wizardwizard-to2" placeholder="To (Yrs)" />
                            <label htmlFor="add-property-wizardwizard-to2">To (Yrs)</label>
                        </div>
                    </div>
                </div>
                <h5 className="mb-2 mt-4 text-body">
                    <span>Age Segment 3</span>
                    <button className="btn btn-link p-0 ms-1">Remove</button>
                </h5>
                <div className="row align-items-center g-3">
                    <div className="col-6 col-sm-auto">
                        <div className="form-floating age-segment-input">
                            <input className="form-control input-spin-none" type="number" name="add-property-wizard-from3" id="add-property-wizardwizard-from3" placeholder="From (Yrs)" />
                            <label htmlFor="add-property-wizardwizard-from3">From (Yrs)</label>
                        </div>
                    </div>
                    <div className="col-auto flex-1 order-1 order-sm-0">
                        <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2" data-nouislider='{"range":{"min":0,"max":18},"start":[13,18],"connect":true}'></div>
                    </div>
                    <div className="col-6 col-sm-auto">
                        <div className="form-floating age-segment-input">
                            <input className="form-control input-spin-none" type="number" name="add-property-wizard-to3" id="add-property-wizardwizard-to3" placeholder="To (Yrs)" disabled="disabled" />
                            <label htmlFor="add-property-wizardwizard-to3">To (Yrs)</label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-link p-0 mt-3 fs-8">
                    <span className="fa-solid fa-plus me-2"></span>Add Segment
                </button>
                <RedioBox title={"Documentation Requirement"} />
                <h4 className="mb-4 mt-6">Included Taxes in your rate</h4>
                <RedioBox title={"VAT"} />
                <RedioBox title={"GST"} />
                <RedioBox title={"Hotel tax"} />
                <RedioBox title={"City / District tax"} />
                <RedioBox title={"Tourist tax"} />


                <h4 className="mb-4 mt-6">Your Documentations</h4>
                <div className='mt-3'>
                    <InputText labelName={"Property Registration No. (OPTIONAL)"} type={"text"} />
                </div>
                <div className='mt-3'>
                    <InputText labelName={"Business Registration No."} type={"text"} />
                </div>
                <div className='mt-3'>
                    <InputText labelName={"Taxpayer Indentification No."} type={"text"} />
                </div>

            </form>
        </div>
    </>
  )
}

export default Policies
