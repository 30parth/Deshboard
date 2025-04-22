import React from 'react'

const MainCom = () => {
  // const data = [
  //   {
  //     id: "1",
  //     code: "C001",
  //     name: "Alpha Corp",
  //     address: {
  //       type: "Head Office",
  //       address: "123 Market St",
  //       city: "New York",
  //       state: "NY",
  //       country: "USA",
  //     },
  //     contacts: [
  //       {
  //         contactType: "Email",
  //         contactPerson: "John Doe",
  //         contactDetail: "john@alphacorp.com",
  //       },
  //       {
  //         contactType: "Phone",
  //         contactPerson: "Jane Smith",
  //         contactDetail: "+1-555-1234",
  //       },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     code: "C002",
  //     name: "Beta Inc",
  //     address: {
  //       type: "Branch",
  //       address: "456 Sunset Blvd",
  //       city: "Los Angeles",
  //       state: "CA",
  //       country: "USA",
  //     },
  //     contacts: [
  //       {
  //         contactType: "Email",
  //         contactPerson: "Alice Brown",
  //         contactDetail: "alice@beta.com",
  //       },
  //     ],
  //   },
  // ];

  // return (
  //   <div className="container py-4">
  //     <h2 className="mb-4">Company Records</h2>
  //     <div className="table-responsive">
  //       <table className="table table-bordered table-hover table-striped align-middle">
  //         <thead className="table-dark">
  //           <tr>
  //             <th>ID</th>
  //             <th>Code</th>
  //             <th>Name</th>
  //             <th>Address</th>
  //             <th>Contacts</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {data.map((company) => (
  //             <tr key={company.id}>
  //               <td>{company.id}</td>
  //               <td>{company.code}</td>
  //               <td>{company.name}</td>
  //               <td>
  //                 <strong>{company.address.type}</strong>
  //                 <br />
  //                 {company.address.address}, {company.address.city}
  //                 <br />
  //                 {company.address.state}, {company.address.country}
  //               </td>
  //               <td>
  //                 <ul className="list-unstyled mb-0">
  //                   {company.contacts.map((contact, index) => (
  //                     <li key={index}>
  //                       <strong>{contact.contactType}</strong> - {contact.contactPerson}
  //                       <br />
  //                       <small className="text-muted">{contact.contactDetail}</small>
  //                     </li>
  //                   ))}
  //                 </ul>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );
  return (
    <>
    <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab6" id="#add-property-wizard-tab6">
      <form id="addPropertyWizardForm6" noValidate="novalidate" data-wizard-form="6">
        <h3 className="mb-6">Policies</h3>
        <div className="form-check form-check-inline me-5 mb-3"><input className="form-check-input" id="limitedCheckIn" type="radio" name="checkIn"/><label className="form-check-label fs-8"  htmlFor="limitedCheckIn">Limited Check-in</label></div>
        <div className="form-check form-check-inline mb-3"><input className="form-check-input" id="24HrCheckIn" type="radio" name="checkIn" /><label className="form-check-label fs-8"  htmlFor="24HrCheckIn">24hr Check-in</label></div>
        <div className="row g-3 align-items-center">
          <div className="col-12 col-sm-6 col-md-auto flex-md-grow-1">
            <div className="form-floating"><input className="form-control datetimepicker" id="checkInStarts" type="text" placeholder="H:i" data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}' /><label  htmlFor="checkInStarts">Check-in Starts</label></div>
          </div>
          <div className="col-12 col-sm-6 col-md-auto flex-md-grow-1">
            <div className="form-floating"><input className="form-control datetimepicker" id="checkInEnds" type="text" placeholder="H:i" data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}' /><label  htmlFor="checkInEnds">Check-in Ends</label></div>
          </div>
          <div className="col-12 col-md-auto">
            <div className="form-check mb-0"><input className="form-check-input" id="lateCheckIn" type="checkbox" /><label className="form-check-label fw-normal fs-8"  htmlFor="lateCheckIn">Late Check-in</label></div>
          </div>
        </div>
        <div className="border p-3 rounded-2 mt-3">
          <div className="form-check form-switch mb-0"><input className="form-check-input" id="ageRestriction" type="checkbox" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="ageRestriction">Age Restriction</label></div>
        </div>
        <div className="border p-3 rounded-2 my-3">
          <div className="form-check form-switch mb-0"><input className="form-check-input" id="deposit" type="checkbox" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="deposit">Deposit at Check-in</label></div>
        </div>
        <div className="border p-3 rounded-2">
          <div className="form-check form-switch mb-0"><input className="form-check-input" id="documentation" type="checkbox" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="documentation">Documentation at Check-in</label></div>
        </div>
        <h4 className="mb-4 mt-6">Checkout Policy</h4>
        <div className="form-floating mb-3"><input className="form-control datetimepicker" id="chcckOutBefore" type="text" placeholder="H:i" data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}' /><label  htmlFor="chcckOutBefore">Checkout Before</label></div>
        <div className="form-price-tier border p-3 rounded-2" data-form-price-tier="data-form-price-tier">
          <div className="d-sm-flex align-items-center gap-3">
            <div className="form-check form-switch mb-0"><input className="form-check-input" id="flexible-checkout" type="checkbox" data-price-toggle="data-price-toggle" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="flexible-checkout">Flexible Checkout</label></div>
            <div className="pricings ms-auto mt-2 mt-sm-0">
              <div className="form-check form-check-inline me-3 mb-0"><input className="form-check-input" type="radio" id="flexible-checkout-free" name="Flexible Checkout-radio"  data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="flexible-checkout-free">Free</label></div>
              <div className="form-check form-check-inline me-0 mb-0"><input className="form-check-input" type="radio" id="flexible-checkout-paid" name="Flexible Checkout-radio"  data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="flexible-checkout-paid">Paid</label></div>
            </div>
          </div>
          <div className="collapse" data-pricing-collapse="data-pricing-collapse">
            <div className="p-4 bg-primary-subtle rounded-3 mt-3">
              <div className="form-check mb-4"><input className="form-check-input" id="flexible-checkout-option1" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="flexible-checkout-option1">Option 1</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="flexible-checkout-option2" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="flexible-checkout-option2">Option 2</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="flexible-checkout-option3" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="flexible-checkout-option3">Option 3</label></div>
              <button
                className="btn btn-link p-0"><span className="fa-solid fa-plus me-2"></span>Additional Condition</button>
            </div>
          </div>
        </div>
        <h4 className="mb-4 mt-6">Cancellation Policy</h4>
        <div className="form-check form-check-inline me-5 mb-0"><input className="form-check-input" id="nonRefundable" type="radio" name="refundPolicy"  /><label className="form-check-label fs-8"  htmlFor="nonRefundable">Non Refundable</label></div>
        <div className="form-check form-check-inline mb-0"><input className="form-check-input" id="optionalRefund" type="radio" name="refundPolicy" /><label className="form-check-label fs-8"  htmlFor="optionalRefund">Optional Refund</label></div>
        <div className="border p-3 rounded-2 my-3">
          <div className="form-check form-switch mb-0"><input className="form-check-input" id="fullRefund" type="checkbox" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="fullRefund">Full Refund</label></div>
        </div>
        <div className="border p-3 rounded-2">
          <div className="form-check form-switch mb-0"><input className="form-check-input" id="partialRefund" type="checkbox" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="partialRefund">Partial Refund</label></div>
        </div>
        <h4 className="mb-4 mt-6">Pet Policy</h4>
        <div className="form-check form-check-inline me-5 mb-0"><input className="form-check-input" id="notAllowed" type="radio" name="petPolicy" /><label className="form-check-label fs-8"  htmlFor="notAllowed">Not allowed</label></div>
        <div className="form-check form-check-inline mb-0"><input className="form-check-input" id="allowed" type="radio" name="petPolicy" /><label className="form-check-label fs-8"  htmlFor="allowed">Allowed</label></div>
        <div className="border p-3 rounded-2 my-3">
          <div className="form-check form-switch mb-0"><input className="form-check-input" id="petRestrickedZone" type="checkbox" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="petRestrickedZone">Pet Restricted Zones</label></div>
        </div>
        <div className="border p-3 rounded-2">
          <div className="form-check form-switch mb-0"><input className="form-check-input" id="AdditionalCharges" type="checkbox" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="AdditionalCharges">Additional Charges</label></div>
        </div>
        <h4 className="mb-4 mt-6">Child Policy</h4>
        <h5 className="mb-2 text-body">Age Segment 1</h5>
        <div className="row align-items-center g-3">
          <div className="col-6 col-sm-auto">
            <div className="form-floating age-segment-input"><input className="form-control input-spin-none" type="number" name="add-property-wizard-from1" id="add-property-wizardwizard-from1" placeholder="From (Yrs)" disabled="disabled" /><label  htmlFor="add-property-wizardwizard-from1">From (Yrs)</label></div>
          </div>
          <div className="col-12 col-sm-auto flex-1 order-1 order-sm-0">
            <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2" data-nouislider='{"range":{"min":0,"max":18},"start":[0,7],"connect":true}'></div>
          </div>
          <div className="col-6 col-sm-auto">
            <div className="form-floating age-segment-input"><input className="form-control input-spin-none" type="number" name="add-property-wizard-to1" id="add-property-wizardwizard-to1" placeholder="To (Yrs)" /><label  htmlFor="add-property-wizardwizard-to1">To (Yrs)</label></div>
          </div>
        </div>
        <h5 className="mb-2 mt-4 text-body">Age Segment 2</h5>
        <div className="row align-items-center g-3">
          <div className="col-6 col-sm-auto">
            <div className="form-floating age-segment-input"><input className="form-control input-spin-none" type="number" name="add-property-wizard-from2" id="add-property-wizardwizard-from2" placeholder="From (Yrs)" /><label  htmlFor="add-property-wizardwizard-from2">From (Yrs)</label></div>
          </div>
          <div className="col-auto flex-1 order-1 order-sm-0">
            <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2" data-nouislider='{"range":{"min":0,"max":18},"start":[8,12],"connect":true}'></div>
          </div>
          <div className="col-6 col-sm-auto">
            <div className="form-floating age-segment-input"><input className="form-control input-spin-none" type="number" name="add-property-wizard-to2" id="add-property-wizardwizard-to2" placeholder="To (Yrs)"  /><label  htmlFor="add-property-wizardwizard-to2">To (Yrs)</label></div>
          </div>
        </div>
        <h5 className="mb-2 mt-4 text-body"> <span>Age Segment 3</span><button className="btn btn-link p-0 ms-1">Remove</button></h5>
        <div className="row align-items-center g-3">
          <div className="col-6 col-sm-auto">
            <div className="form-floating age-segment-input"><input className="form-control input-spin-none" type="number" name="add-property-wizard-from3" id="add-property-wizardwizard-from3" placeholder="From (Yrs)"  /><label  htmlFor="add-property-wizardwizard-from3">From (Yrs)</label></div>
          </div>
          <div className="col-auto flex-1 order-1 order-sm-0">
            <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2" data-nouislider='{"range":{"min":0,"max":18},"start":[13,18],"connect":true}'></div>
          </div>
          <div className="col-6 col-sm-auto">
            <div className="form-floating age-segment-input"><input className="form-control input-spin-none" type="number" name="add-property-wizard-to3" id="add-property-wizardwizard-to3" placeholder="To (Yrs)" disabled="disabled" /><label  htmlFor="add-property-wizardwizard-to3">To (Yrs)</label></div>
          </div>
        </div><button className="btn btn-link p-0 mt-3 fs-8"><span className="fa-solid fa-plus me-2"></span>Add Segment</button>
        <div className="border px-3 py-2 rounded-2 mt-4">
          <div className="form-check form-switch mb-0 py-1"><input className="form-check-input" id="documentation-requirement" type="checkbox" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="documentation-requirement">Documentation Requirement</label></div>
        </div>
        <h4 className="mb-4 mt-6">Included Taxes in your rate</h4>
        <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier="data-form-price-tier">
          <div className="d-sm-flex align-items-center gap-3">
            <div className="form-check form-switch mb-0"><input className="form-check-input" id="vat" type="checkbox" data-price-toggle="data-price-toggle" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="vat">VAT</label></div>
            <div className="pricings ms-auto mt-2 mt-sm-0">
              <div className="form-check form-check-inline me-3 mb-0"><input className="form-check-input" type="radio" id="vat-free" name="VAT-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="vat-free">Free</label></div>
              <div className="form-check form-check-inline me-0 mb-0"><input className="form-check-input" type="radio" id="vat-paid" name="VAT-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="vat-paid">Paid</label></div>
            </div>
          </div>
          <div className="collapse" data-pricing-collapse="data-pricing-collapse">
            <div className="p-4 bg-primary-subtle rounded-3 mt-3">
              <div className="form-check mb-4"><input className="form-check-input" id="vat-option1" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="vat-option1">Option 1</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="vat-option2" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="vat-option2">Option 2</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="vat-option3" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="vat-option3">Option 3</label></div><button className="btn btn-link p-0"><span className="fa-solid fa-plus me-2"></span>Additional Condition</button>
            </div>
          </div>
        </div>
        <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier="data-form-price-tier">
          <div className="d-sm-flex align-items-center gap-3">
            <div className="form-check form-switch mb-0"><input className="form-check-input" id="gst" type="checkbox" data-price-toggle="data-price-toggle" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="gst">GST</label></div>
            <div className="pricings ms-auto mt-2 mt-sm-0">
              <div className="form-check form-check-inline me-3 mb-0"><input className="form-check-input" type="radio" id="gst-free" name="GST-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="gst-free">Free</label></div>
              <div className="form-check form-check-inline me-0 mb-0"><input className="form-check-input" type="radio" id="gst-paid" name="GST-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="gst-paid">Paid</label></div>
            </div>
          </div>
          <div className="collapse" data-pricing-collapse="data-pricing-collapse">
            <div className="p-4 bg-primary-subtle rounded-3 mt-3">
              <div className="form-check mb-4"><input className="form-check-input" id="gst-option1" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="gst-option1">Option 1</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="gst-option2" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="gst-option2">Option 2</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="gst-option3" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="gst-option3">Option 3</label></div><button className="btn btn-link p-0"><span className="fa-solid fa-plus me-2"></span>Additional Condition</button>
            </div>
          </div>
        </div>
        <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier="data-form-price-tier">
          <div className="d-sm-flex align-items-center gap-3">
            <div className="form-check form-switch mb-0"><input className="form-check-input" id="holet-tax" type="checkbox" data-price-toggle="data-price-toggle" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="holet-tax">Hotel tax</label></div>
            <div className="pricings ms-auto mt-2 mt-sm-0">
              <div className="form-check form-check-inline me-3 mb-0"><input className="form-check-input" type="radio" id="holet-tax-free" name="Hotel tax-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="holet-tax-free">Free</label></div>
              <div className="form-check form-check-inline me-0 mb-0"><input className="form-check-input" type="radio" id="holet-tax-paid" name="Hotel tax-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="holet-tax-paid">Paid</label></div>
            </div>
          </div>
          <div className="collapse" data-pricing-collapse="data-pricing-collapse">
            <div className="p-4 bg-primary-subtle rounded-3 mt-3">
              <div className="form-check mb-4"><input className="form-check-input" id="holet-tax-option1" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="holet-tax-option1">Option 1</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="holet-tax-option2" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="holet-tax-option2">Option 2</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="holet-tax-option3" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="holet-tax-option3">Option 3</label></div><button className="btn btn-link p-0"><span className="fa-solid fa-plus me-2"></span>Additional Condition</button>
            </div>
          </div>
        </div>
        <div className="form-price-tier border p-3 rounded-2 mb-3" data-form-price-tier="data-form-price-tier">
          <div className="d-sm-flex align-items-center gap-3">
            <div className="form-check form-switch mb-0"><input className="form-check-input" id="city-tax" type="checkbox" data-price-toggle="data-price-toggle" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="city-tax">City / District tax</label></div>
            <div className="pricings ms-auto mt-2 mt-sm-0">
              <div className="form-check form-check-inline me-3 mb-0"><input className="form-check-input" type="radio" id="city-tax-free" name="City / District tax-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="city-tax-free">Free</label></div>
              <div className="form-check form-check-inline me-0 mb-0"><input className="form-check-input" type="radio" id="city-tax-paid" name="City / District tax-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="city-tax-paid">Paid</label></div>
            </div>
          </div>
          <div className="collapse" data-pricing-collapse="data-pricing-collapse">
            <div className="p-4 bg-primary-subtle rounded-3 mt-3">
              <div className="form-check mb-4"><input className="form-check-input" id="city-tax-option1" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="city-tax-option1">Option 1</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="city-tax-option2" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="city-tax-option2">Option 2</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="city-tax-option3" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="city-tax-option3">Option 3</label></div><button className="btn btn-link p-0"><span className="fa-solid fa-plus me-2"></span>Additional Condition</button>
            </div>
          </div>
        </div>
        <div className="form-price-tier border p-3 rounded-2" data-form-price-tier="data-form-price-tier">
          <div className="d-sm-flex align-items-center gap-3">
            <div className="form-check form-switch mb-0"><input className="form-check-input" id="tourist-tax" type="checkbox" data-price-toggle="data-price-toggle" /><label className="form-check-label fs-8 fw-bold text-body ms-2"  htmlFor="tourist-tax">Tourist tax</label></div>
            <div className="pricings ms-auto mt-2 mt-sm-0">
              <div className="form-check form-check-inline me-3 mb-0"><input className="form-check-input" type="radio" id="tourist-tax-free" name="Tourist tax-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="tourist-tax-free">Free</label></div>
              <div className="form-check form-check-inline me-0 mb-0"><input className="form-check-input" type="radio" id="tourist-tax-paid" name="Tourist tax-radio" data-pricing="data-pricing" /><label className="form-check-label"  htmlFor="tourist-tax-paid">Paid</label></div>
            </div>
          </div>
          <div className="collapse" data-pricing-collapse="data-pricing-collapse">
            <div className="p-4 bg-primary-subtle rounded-3 mt-3">
              <div className="form-check mb-4"><input className="form-check-input" id="tourist-tax-option1" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="tourist-tax-option1">Option 1</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="tourist-tax-option2" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="tourist-tax-option2">Option 2</label></div>
              <div className="form-check mb-4"><input className="form-check-input" id="tourist-tax-option3" type="checkbox" /><label className="form-check-label fw-normal fs-8 fw-semibold"  htmlFor="tourist-tax-option3">Option 3</label></div><button className="btn btn-link p-0"><span className="fa-solid fa-plus me-2"></span>Additional Condition</button>
            </div>
          </div>
        </div>
        <h4 className="mb-4 mt-6">Your Documentations</h4>
        <div className="form-floating"><input className="form-control input-spin-none" type="number" name="add-property-wizard-property-registrations" id="add-property-wizardwizard-property-registrations" placeholder="Property Registration No. (OPTIONAL)"
        /><label  htmlFor="add-property-wizardwizard-property-registrations">Property Registration No. (OPTIONAL)</label></div>
        <div className="form-floating my-3"><input className="form-control input-spin-none" type="number" name="add-property-wizard-business-registration" id="add-property-wizardwizard-business-registration" placeholder="Business Registration No." />
          <label
             htmlFor="add-property-wizardwizard-business-registration">Business Registration No.</label>
        </div>
        <div className="form-floating"><input className="form-control input-spin-none" type="number" name="add-property-wizard-taxpaper" id="add-property-wizardwizard-taxpaper" placeholder="Taxpayer Indentification No." /><label  htmlFor="add-property-wizardwizard-taxpaper">Taxpayer Indentification No.</label></div>
      </form>
    </div>
  </>
  ) 
}

export default MainCom