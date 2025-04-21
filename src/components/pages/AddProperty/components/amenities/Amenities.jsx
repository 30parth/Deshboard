import React from 'react'

const Amenities = () => {
  return (
    <>
    <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab3"
      id="add-property-wizard-tab3">
      <form id="addPropertyWizardForm3" noValidate="novalidate"
        data-wizard-form="3">
        <div>
          <h3 className="mb-6">General amenities</h3>
          <div className="row g-3">
            <div className="col-sm-auto flex-sm-fill">
              <div className="form-floating"><input className="form-control"
                type="text"
                name="add-property-wizard-search-amenities"
                id="add-property-wizardwizard-search-amenities"
                placeholder="Search amenities" /><label
                  htmlFor="add-property-wizardwizard-search-amenities">Search
                  amenities</label>
                <span
                  className="fa-solid fa-search position-absolute text-body-quaternary fs-9 end-0 top-0 mt-3 me-3"
                  data-fa-transform="down-2"></span>
              </div>
            </div>
            <div className="col-sm-auto"><button
              className="btn btn-phoenix-primary w-100 h-100 fs-8"><span
                className="fa-solid fa-plus me-2"></span>Add
              amenity</button></div>
          </div>
        </div>
        <div className="accordion-button-arrow-icon accordion mt-2"
          id="generalAmenitiesAccordion">
          <div className="accordion-item px-0 py-3">
            <h5 className="accordion-header"><button
              className="accordion-button py-0 text-body-highlight"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#popularAmenities" aria-expanded="true"
              aria-controls="popularAmenities"><span
                className="circle-icon-item border border-primary text-primary me-3"><span
                  className="fa-solid fa-fire"></span></span><span
                    className="flex-1">Popular amenities</span></button>
            </h5>
            <div className="accordion-collapse collapse ms-md-9 show"
              id="popularAmenities"
              data-bs-parent="#generalAmenitiesAccordion">
              <div className="form-price-tier border p-3 rounded-2 my-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="wifi"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="wifi">Wifi</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="wifi-free" name="Wifi-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="wifi-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="wifi-paid" name="Wifi-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="wifi-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="wifi-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="wifi-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="wifi-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="wifi-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="wifi-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="wifi-option3">Option 3</label>
                    </div><button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="breakfast"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="breakfast">Breakfast</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="breakfast-free"
                        name="Breakfast-radio" 
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="breakfast-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="breakfast-paid"
                        name="Breakfast-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="breakfast-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="breakfast-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="breakfast-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="breakfast-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="breakfast-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="breakfast-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="breakfast-option3">Option 3</label>
                    </div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="gym"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="gym">Gym</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="gym-free" name="Gym-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="gym-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="gym-paid" name="Gym-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="gym-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="gym-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="gym-option1">Option 1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="gym-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="gym-option2">Option 2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="gym-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="gym-option3">Option 3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="swimming"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="swimming">Swimming pool</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="swimming-free"
                        name="Swimming pool-radio" 
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="swimming-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="swimming-paid"
                        name="Swimming pool-radio" 
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="swimming-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="swimming-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="swimming-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="swimming-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="swimming-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="swimming-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="swimming-option3">Option 3</label>
                    </div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="in-room"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="in-room">In-room coffee/tea</label>
                  </div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="in-room-free"
                        name="In-room coffee/tea-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="in-room-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="in-room-paid"
                        name="In-room coffee/tea-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="in-room-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="in-room-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="in-room-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="in-room-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="in-room-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="in-room-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="in-room-option3">Option 3</label>
                    </div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="daily-housekeeping" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="daily-housekeeping">Daily
                      housekeeping</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="daily-housekeeping-free"
                        name="Daily housekeeping-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="daily-housekeeping-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="daily-housekeeping-paid"
                        name="Daily housekeeping-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="daily-housekeeping-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="daily-housekeeping-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="daily-housekeeping-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="daily-housekeeping-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="daily-housekeeping-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="daily-housekeeping-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="daily-housekeeping-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="bar"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="bar">Bar / Lounge</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="bar-free" name="Bar / Lounge-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="bar-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="bar-paid" name="Bar / Lounge-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="bar-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="bar-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="bar-option1">Option 1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="bar-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="bar-option2">Option 2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="bar-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="bar-option3">Option 3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="laundry"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="laundry">Laundry</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="laundry-free" name="Laundry-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="laundry-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="laundry-paid" name="Laundry-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="laundry-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="laundry-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="laundry-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="laundry-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="laundry-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="laundry-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="laundry-option3">Option 3</label>
                    </div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="newspaper"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="newspaper">Newspaper</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="newspaper-free"
                        name="Newspaper-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="newspaper-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="newspaper-paid"
                        name="Newspaper-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="newspaper-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="newspaper-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="newspaper-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="newspaper-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="newspaper-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="newspaper-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="newspaper-option3">Option 3</label>
                    </div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="bicycle"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="bicycle">Bicycle</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="bicycle-free" name="Bicycle-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="bicycle-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="bicycle-paid" name="Bicycle-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="bicycle-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="bicycle-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="bicycle-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="bicycle-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="bicycle-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="bicycle-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="bicycle-option3">Option 3</label>
                    </div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="air"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="air">Air conditioning</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="air-free"
                        name="Air conditioning-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="air-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="air-paid"
                        name="Air conditioning-radio"
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="air-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="air-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="air-option1">Option 1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="air-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="air-option2">Option 2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="air-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="air-option3">Option 3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="games"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="games">Games room</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="games-free" name="Games room-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="games-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="games-paid" name="Games room-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="games-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="games-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="games-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="games-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="games-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="games-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="games-option3">Option 3</label>
                    </div><button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="beach"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="beach">Beach view</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="beach-free" name="Beach view-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="beach-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="beach-paid" name="Beach view-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="beach-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="beach-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="beach-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="beach-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="beach-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="beach-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="beach-option3">Option 3</label>
                    </div><button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item px-0 py-3">
            <h5 className="accordion-header"><button
              className="accordion-button py-0 text-body-highlight collapsed"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#foodAndDrink" aria-expanded="false"
              aria-controls="foodAndDrink"><span
                className="circle-icon-item border border-primary text-primary me-3"><span
                  className="fa-solid fa-utensils"></span></span><span
                    className="flex-1 me-2">Food & Drink</span></button>
            </h5>
            <div className="accordion-collapse collapse ms-md-9"
              id="foodAndDrink"
              data-bs-parent="#generalAmenitiesAccordion">
              <div className="form-price-tier border p-3 rounded-2 my-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="restaurants"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="restaurants">Restaurants</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="restaurants-free"
                        name="Restaurants-radio"  
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="restaurants-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="restaurants-paid"
                        name="Restaurants-radio"  
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="restaurants-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="restaurants-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="restaurants-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="restaurants-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="restaurants-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="restaurants-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="restaurants-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="bars"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="bars">Bars</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="bars-free" name="Bars-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="bars-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="bars-paid" name="Bars-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="bars-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="bars-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="bars-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="bars-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="bars-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="bars-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="bars-option3">Option 3</label>
                    </div><button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="in-room-dining"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="in-room-dining">In-Room Dining</label>
                  </div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="in-room-dining-free"
                        name="In-Room Dining-radio"  
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="in-room-dining-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="in-room-dining-paid"
                        name="In-Room Dining-radio"  
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="in-room-dining-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="in-room-dining-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="in-room-dining-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="in-room-dining-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="in-room-dining-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="in-room-dining-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="in-room-dining-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="family-friendly-dining" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="family-friendly-dining">Family-Friendly
                      Dining</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="family-friendly-dining-free"
                        name="Family-Friendly Dining-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="family-friendly-dining-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="family-friendly-dining-paid"
                        name="Family-Friendly Dining-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="family-friendly-dining-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="family-friendly-dining-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="family-friendly-dining-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="family-friendly-dining-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="family-friendly-dining-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="family-friendly-dining-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="family-friendly-dining-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="breakfast-buffet" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="breakfast-buffet">Breakfast
                      Buffet</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="breakfast-buffet-free"
                        name="Breakfast Buffet-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="breakfast-buffet-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="breakfast-buffet-paid"
                        name="Breakfast Buffet-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="breakfast-buffet-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="breakfast-buffet-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="breakfast-buffet-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="breakfast-buffet-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="breakfast-buffet-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="breakfast-buffet-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="breakfast-buffet-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item px-0 py-3">
            <h5 className="accordion-header"><button
              className="accordion-button py-0 text-body-highlight collapsed"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#outdoorAndView" aria-expanded="false"
              aria-controls="outdoorAndView"><span
                className="circle-icon-item border border-primary text-primary me-3"><span
                  className="fa-solid fa-umbrella-beach"></span></span><span
                    className="flex-1 me-2">Outdoor & View</span></button>
            </h5>
            <div className="accordion-collapse collapse ms-md-9"
              id="outdoorAndView"
              data-bs-parent="#generalAmenitiesAccordion">
              <div className="form-price-tier border p-3 rounded-2 my-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="garden-or-courtyard" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="garden-or-courtyard">Garden or
                      Courtyard</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="garden-or-courtyard-free"
                        name="Garden or Courtyard-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="garden-or-courtyard-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="garden-or-courtyard-paid"
                        name="Garden or Courtyard-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="garden-or-courtyard-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="garden-or-courtyard-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="garden-or-courtyard-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="garden-or-courtyard-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="garden-or-courtyard-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="garden-or-courtyard-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="garden-or-courtyard-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="scenic-views"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="scenic-views">Scenic Views</label>
                  </div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="scenic-views-free"
                        name="Scenic Views-radio"  
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="scenic-views-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="scenic-views-paid"
                        name="Scenic Views-radio"  
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="scenic-views-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="scenic-views-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="scenic-views-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="scenic-views-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="scenic-views-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="scenic-views-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="scenic-views-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="sunbathing-areas" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="sunbathing-areas">Sunbathing
                      Areas</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="sunbathing-areas-free"
                        name="Sunbathing Areas-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="sunbathing-areas-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="sunbathing-areas-paid"
                        name="Sunbathing Areas-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="sunbathing-areas-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="sunbathing-areas-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="sunbathing-areas-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="sunbathing-areas-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="sunbathing-areas-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="sunbathing-areas-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="sunbathing-areas-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="outdoor-lounge-areas" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="outdoor-lounge-areas">Outdoor Lounge
                      Areas</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="outdoor-lounge-areas-free"
                        name="Outdoor Lounge Areas-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="outdoor-lounge-areas-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="outdoor-lounge-areas-paid"
                        name="Outdoor Lounge Areas-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="outdoor-lounge-areas-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="outdoor-lounge-areas-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="outdoor-lounge-areas-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="outdoor-lounge-areas-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="outdoor-lounge-areas-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="outdoor-lounge-areas-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="outdoor-lounge-areas-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item px-0 py-3">
            <h5 className="accordion-header"><button
              className="accordion-button py-0 text-body-highlight collapsed"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#intertainment" aria-expanded="false"
              aria-controls="intertainment"><span
                className="circle-icon-item border border-primary text-primary me-3"><span
                  className="fa-solid fa-cart-shopping"></span></span><span
                    className="flex-1 me-2">Entertainment & Family
                Services</span></button></h5>
            <div className="accordion-collapse collapse ms-md-9"
              id="intertainment"
              data-bs-parent="#generalAmenitiesAccordion">
              <div className="form-price-tier border p-3 rounded-2 my-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="game-room"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="game-room">Game Room</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="game-room-free"
                        name="Game Room-radio"  
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="game-room-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="game-room-paid"
                        name="Game Room-radio"  
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="game-room-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="game-room-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="game-room-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="game-room-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="game-room-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="game-room-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="game-room-option3">Option 3</label>
                    </div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="play-area"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="play-area">Children's Play Area</label>
                  </div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="play-area-free"
                        name="Children's Play Area-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="play-area-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="play-area-paid"
                        name="Children's Play Area-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="play-area-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="play-area-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="play-area-option1">Option 1</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="play-area-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="play-area-option2">Option 2</label>
                    </div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="play-area-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="play-area-option3">Option 3</label>
                    </div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="sports-facilities" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="sports-facilities">Sports
                      Facilities</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="sports-facilities-free"
                        name="Sports Facilities-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="sports-facilities-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="sports-facilities-paid"
                        name="Sports Facilities-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="sports-facilities-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="sports-facilities-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="sports-facilities-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="sports-facilities-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="sports-facilities-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="sports-facilities-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="sports-facilities-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="babysitting-services" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="babysitting-services">Babysitting
                      Services</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="babysitting-services-free"
                        name="Babysitting Services-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="babysitting-services-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="babysitting-services-paid"
                        name="Babysitting Services-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="babysitting-services-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="babysitting-services-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="babysitting-services-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="babysitting-services-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="babysitting-services-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="babysitting-services-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="babysitting-services-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item px-0 py-3">
            <h5 className="accordion-header"><button
              className="accordion-button py-0 text-body-highlight collapsed"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#mediaAndTechnology"
              aria-expanded="false"
              aria-controls="mediaAndTechnology"><span
                className="circle-icon-item border border-primary text-primary me-3"><span
                  className="fa-solid fa-video"></span></span><span
                    className="flex-1 me-2">Media &
                Technology</span></button></h5>
            <div className="accordion-collapse collapse ms-md-9"
              id="mediaAndTechnology"
              data-bs-parent="#generalAmenitiesAccordion">
              <div className="form-price-tier border p-3 rounded-2 my-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="high-speed-internet" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="high-speed-internet">High-Speed
                      Internet</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="high-speed-internet-free"
                        name="High-Speed Internet-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="high-speed-internet-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="high-speed-internet-paid"
                        name="High-Speed Internet-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="high-speed-internet-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="high-speed-internet-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="high-speed-internet-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="high-speed-internet-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="high-speed-internet-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="high-speed-internet-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="high-speed-internet-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="business-center" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="business-center">Business
                      Center</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="business-center-free"
                        name="Business Center-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="business-center-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="business-center-paid"
                        name="Business Center-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="business-center-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="business-center-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="business-center-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="business-center-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="business-center-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="business-center-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="business-center-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="video-conferencing" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="video-conferencing">Video Conferencing
                      Facilities</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="video-conferencing-free"
                        name="Video Conferencing Facilities-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="video-conferencing-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="video-conferencing-paid"
                        name="Video Conferencing Facilities-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="video-conferencing-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="video-conferencing-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="video-conferencing-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="video-conferencing-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="video-conferencing-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="video-conferencing-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="video-conferencing-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input" id="vr"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="vr">Virtual Reality (VR)
                      Experiences</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="vr-free"
                        name="Virtual Reality (VR) Experiences-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="vr-free">Free</label></div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="vr-paid"
                        name="Virtual Reality (VR) Experiences-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="vr-paid">Paid</label></div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input" id="vr-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="vr-option1">Option 1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input" id="vr-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="vr-option2">Option 2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input" id="vr-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="vr-option3">Option 3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item px-0 py-3">
            <h5 className="accordion-header"><button
              className="accordion-button py-0 text-body-highlight collapsed"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#accessibility" aria-expanded="false"
              aria-controls="accessibility"><span
                className="circle-icon-item border border-primary text-primary me-3"><span
                  className="fa-solid fa-universal-access"></span></span><span
                    className="flex-1 me-2">Accessibility</span></button>
            </h5>
            <div className="accordion-collapse collapse ms-md-9"
              id="accessibility"
              data-bs-parent="#generalAmenitiesAccordion">
              <div className="form-price-tier border p-3 rounded-2 my-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="accessible-common-areas" type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="accessible-common-areas">Accessible
                      Common Areas</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="accessible-common-areas-free"
                        name="Accessible Common Areas-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="accessible-common-areas-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="accessible-common-areas-paid"
                        name="Accessible Common Areas-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="accessible-common-areas-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-common-areas-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-common-areas-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-common-areas-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-common-areas-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-common-areas-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-common-areas-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="accessible-parking-spaces"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="accessible-parking-spaces">Accessible
                      Parking Spaces</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="accessible-parking-spaces-free"
                        name="Accessible Parking Spaces-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="accessible-parking-spaces-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="accessible-parking-spaces-paid"
                        name="Accessible Parking Spaces-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="accessible-parking-spaces-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-parking-spaces-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-parking-spaces-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-parking-spaces-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-parking-spaces-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-parking-spaces-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-parking-spaces-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2 mb-3"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="accessible-fitness-center"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="accessible-fitness-center">Accessible
                      Fitness Center</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="accessible-fitness-center-free"
                        name="Accessible Fitness Center-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="accessible-fitness-center-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="accessible-fitness-center-paid"
                        name="Accessible Fitness Center-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="accessible-fitness-center-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-fitness-center-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-fitness-center-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-fitness-center-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-fitness-center-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-fitness-center-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-fitness-center-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
              <div className="form-price-tier border p-3 rounded-2"
                data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                  <div className="form-check form-switch mb-0"><input
                    className="form-check-input"
                    id="accessible-swimmings-pool"
                    type="checkbox"
                    data-price-toggle="data-price-toggle" /><label
                      className="form-check-label fs-8 fw-bold text-body ms-2"
                      htmlFor="accessible-swimmings-pool">Accessible
                      Swimming Pool</label></div>
                  <div className="pricings ms-auto mt-2 mt-sm-0">
                    <div
                      className="form-check form-check-inline me-3 mb-0">
                      <input className="form-check-input" type="radio"
                        id="accessible-swimmings-pool-free"
                        name="Accessible Swimming Pool-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="accessible-swimmings-pool-free">Free</label>
                    </div>
                    <div
                      className="form-check form-check-inline me-0 mb-0">
                      <input className="form-check-input" type="radio"
                        id="accessible-swimmings-pool-paid"
                        name="Accessible Swimming Pool-radio"
                         
                        data-pricing="data-pricing" /><label
                          className="form-check-label"
                          htmlFor="accessible-swimmings-pool-paid">Paid</label>
                    </div>
                  </div>
                </div>
                <div className="collapse"
                  data-pricing-collapse="data-pricing-collapse">
                  <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-swimmings-pool-option1"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-swimmings-pool-option1">Option
                        1</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-swimmings-pool-option2"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-swimmings-pool-option2">Option
                        2</label></div>
                    <div className="form-check mb-4"><input
                      className="form-check-input"
                      id="accessible-swimmings-pool-option3"
                      type="checkbox" /><label
                        className="form-check-label fw-normal fs-8 fw-semibold"
                        htmlFor="accessible-swimmings-pool-option3">Option
                        3</label></div>
                    <button className="btn btn-link p-0"><span
                      className="fa-solid fa-plus me-2"></span>Additional
                      Condition</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}

export default Amenities
