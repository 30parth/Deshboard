import React from 'react'
import "./theme.min.css"
import "./bootstrap.min.js"
import "./all.min.js"
const Tab1 = () => {
    return (
        <main >
        <div className="content">
            <div className="mb-9">
                <h1 className="mb-4 mb-xl-5">Add New Property</h1>
                <div className="theme-wizard" data-theme-wizard="data-theme-wizard"
                    data-wizard-modal-disabled="data-wizard-modal-disabled">
                    <div className="row gx-0 gx-xl-5">
                        <div className="col-xl-4 order-xl-1">
                            <div className="scrollbar mb-4">
                                <ul className="nav justify-content-between flex-nowrap nav-wizard nav-wizard-vertical-xl"
                                    data-tab-map-container="data-tab-map-container">
                                    <li className="nav-item">
                                        <a className="nav-link active py-0 py-xl-3" href="#add-property-wizard-tab1"
                                            data-bs-toggle="tab" data-wizard-step="1">
                                            <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                                                <span className="nav-item-circle-parent"><span className="nav-item-circle"><span
                                                            className="fa-solid fa-file nav-item-icon"></span><span
                                                            className="fa-solid fa-check check-icon"></span></span>
                                                </span><span className="nav-item-title fs-9 fs-xl-8">Info</span></div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-0 py-xl-3" href="#add-property-wizard-tab2"
                                            data-bs-toggle="tab" data-wizard-step="2">
                                            <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                                                <span className="nav-item-circle-parent"><span className="nav-item-circle"><span
                                                            className="fa-solid fa-location-dot nav-item-icon"></span><span
                                                            className="fa-solid fa-check check-icon"></span></span>
                                                </span><span className="nav-item-title fs-9 fs-xl-8">Location</span></div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-0 py-xl-3" href="#add-property-wizard-tab3"
                                            data-bs-toggle="tab" data-wizard-step="3">
                                            <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                                                <span className="nav-item-circle-parent"><span className="nav-item-circle"><span
                                                            className="fa-solid fa-mug-saucer nav-item-icon"></span><span
                                                            className="fa-solid fa-check check-icon"></span></span>
                                                </span><span className="nav-item-title fs-9 fs-xl-8">Amenities</span></div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-0 py-xl-3" href="#add-property-wizard-tab4"
                                            data-bs-toggle="tab" data-wizard-step="4">
                                            <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                                                <span className="nav-item-circle-parent"><span className="nav-item-circle"><span
                                                            className="fa-solid fa-images nav-item-icon"></span><span
                                                            className="fa-solid fa-check check-icon"></span></span>
                                                </span><span className="nav-item-title fs-9 fs-xl-8">Photos</span></div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-0 py-xl-3" href="#add-property-wizard-tab5"
                                            data-bs-toggle="tab" data-wizard-step="5">
                                            <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                                                <span className="nav-item-circle-parent"><span className="nav-item-circle"><span
                                                            className="fa-solid fa-usd nav-item-icon"></span><span
                                                            className="fa-solid fa-check check-icon"></span></span>
                                                </span><span className="nav-item-title fs-9 fs-xl-8">Finance</span></div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-0 py-xl-3" href="#add-property-wizard-tab6"
                                            data-bs-toggle="tab" data-wizard-step="6">
                                            <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                                                <span className="nav-item-circle-parent"><span className="nav-item-circle"><span
                                                            className="fa-solid fa-shield-halved nav-item-icon"></span><span
                                                            className="fa-solid fa-check check-icon"></span></span>
                                                </span><span className="nav-item-title fs-9 fs-xl-8">Policies</span></div>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link py-0 py-xl-3" href="#add-property-wizard-tab7"
                                            data-bs-toggle="tab" data-wizard-step="7">
                                            <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                                                <span className="nav-item-circle-parent"><span className="nav-item-circle"><span
                                                            className="fas fa-check"></span></span>
                                                </span><span className="nav-item-title fs-9 fs-xl-8">Done</span></div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8 flex-1">
                            <div className="row">
                                <div className="col-xxl-8">
                                    <div className="tab-content">
                                        <div className="tab-pane active" role="tabpanel"
                                            aria-labelledby="add-property-wizard-tab1" id="add-property-wizard-tab1">
                                            <form id="addPropertyWizardForm1" data-wizard-form="1">
                                                <h3 className="mb-4">Basic information</h3>
                                                <h4 className="mb-4">Property Information</h4>
                                                <div className="form-floating"><input className="form-control" type="text"
                                                        name="add-property-wizard-name"
                                                        id="add-property-wizardwizard-name" placeholder="Property Name"
                                                        value="With help text" /><label
                                                        htmlFor="add-property-wizardwizard-name">Property Name</label>
                                                    <h5 className="text-end text-body-quaternary fw-semibold mt-2"><span
                                                            className="text-primary">15 </span>/ 60</h5>
                                                </div>
                                                <div className="form-floating my-3"><textarea className="form-control"
                                                        placeholder="Description" name="add-property-wizard-message"
                                                        id="add-property-wizard-wizard-des"
                                                        style={{height: "162px"}}></textarea><label
                                                        htmlFor="add-property-wizard-wizard-des">DESCRIPTION</label>
                                                    <h5 className="text-end text-body-quaternary fw-semibold mt-2"><span
                                                            className="text-primary">0 </span>/ 360</h5>
                                                </div>
                                                <div className="row g-3">
                                                    <div className="col-md-8 col-lg-12 col-xl-8">
                                                        <div className="form-floating"><select className="form-select"
                                                                name="add-property-wizard-type"
                                                                id="add-property-wizardproperty-type">
                                                                <option selected="selected" value="1">Hotel</option>
                                                                <option value="1">Flight</option>
                                                                <option value="2">Trip</option>
                                                            </select><label
                                                                htmlFor="add-property-wizardproperty-type">Property
                                                                Type</label></div>
                                                    </div>
                                                    <div className="col-md-4 col-lg-12 col-xl-4">
                                                        <div className="form-icon-container">
                                                            <div className="form-floating"><select
                                                                    className="form-select form-icon-input"
                                                                    name="add-property-wizard-type"
                                                                    id="add-property-wizardrating-type">
                                                                    <option selected="selected" value="5">5 star
                                                                    </option>
                                                                    <option value="4">4 star</option>
                                                                    <option value="3">3 star</option>
                                                                    <option value="2">2 star</option>
                                                                    <option value="1">1 star</option>
                                                                </select><label
                                                                    className="text-body-tertiary form-icon-label"
                                                                    htmlFor="add-property-wizardrating-type">Rating</label>
                                                            </div><span
                                                                className="fa-solid fa-star text-warning form-icon fs-10"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="mt-6 mb-3">Contact Information</h4>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating"><input
                                                                className="form-control input-spin-none" type="email"
                                                                name="add-property-wizard-email"
                                                                id="add-property-wizardwizard-email"
                                                                placeholder="Email Address" /><label
                                                                htmlFor="add-property-wizardwizard-email">Email
                                                                Address</label></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating"><input
                                                                className="form-control input-spin-none" type="number"
                                                                name="add-property-wizard-phone"
                                                                id="add-property-wizardwizard-phone"
                                                                placeholder="Phone number" /><label
                                                                htmlFor="add-property-wizardwizard-phone">Phone
                                                                number</label></div>
                                                    </div>
                                                </div>
                                                <h4 className="mt-6 mb-3">Is it part of a hotel / property chain?</h4>
                                                <div className="row align-items-center g-3">
                                                    <div className="col-sm-auto">
                                                        <div className="form-check form-check-inline me-4 me-sm-7 mb-0">
                                                            <input className="form-check-input" id="no1" type="radio"
                                                                name="CheckIsHotelRadio" value="no"
                                                                checked="checked" /><label className="form-check-label"
                                                                htmlFor="no1">No</label></div>
                                                        <div className="form-check form-check-inline me-0 mb-0"><input
                                                                className="form-check-input" id="yes1" type="radio"
                                                                name="CheckIsHotelRadio" value="yes" /><label
                                                                className="form-check-label" htmlFor="yes1">Yes</label></div>
                                                    </div>
                                                    <div className="col-sm-auto flex-1">
                                                        <div className="form-floating"><input className="form-control"
                                                                type="text" name="add-property-wizard-company"
                                                                id="add-property-wizardwizard-company"
                                                                placeholder="Name of Company, Group or Chain"
                                                                value="With help text" disabled="disabled" /><label
                                                                htmlFor="add-property-wizardwizard-company">Name of Company,
                                                                Group or Chain</label></div>
                                                    </div>
                                                </div>
                                                <h4 className="mt-6 mb-3">Do you use a Channel Management Systems?</h4>
                                                <div className="row align-items-center g-3">
                                                    <div className="col-sm-auto">
                                                        <div className="form-check form-check-inline me-4 me-sm-7 mb-0">
                                                            <input className="form-check-input" id="no2" type="radio"
                                                                name="CheckUseRadio" value="no" /><label
                                                                className="form-check-label" htmlFor="no2">No</label></div>
                                                        <div className="form-check form-check-inline me-0 mb-0"><input
                                                                className="form-check-input" id="yes2" type="radio"
                                                                name="CheckUseRadio" value="yes"
                                                                checked="checked" /><label className="form-check-label"
                                                                htmlFor="yes2">Yes</label></div>
                                                    </div>
                                                    <div className="col-sm-auto flex-1">
                                                        <div className="form-floating"><input className="form-control"
                                                                type="text" name="add-property-wizard-cms"
                                                                id="add-property-wizardwizard-cms"
                                                                placeholder="CMS Provider name" value="" /><label
                                                                htmlFor="add-property-wizardwizard-cms">CMS Provider
                                                                name</label>
                                                            <span
                                                                className="fa-solid fa-search position-absolute text-body-quaternary fs-9 end-0 top-0 mt-3 me-3"
                                                                data-fa-transform="down-2"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab2"
                                            id="add-property-wizard-tab2">
                                            <form id="addPropertyWizardForm2" novalidate="novalidate"
                                                data-wizard-form="2">
                                                <h3 className="mb-6">Location</h3>
                                                <div className="form-icon-container">
                                                    <div className="form-floating"><input
                                                            className="form-control form-icon-input" type="text"
                                                            name="add-property-wizard-search-address"
                                                            id="add-property-wizardwizard-search-address"
                                                            placeholder="Search address..." /><label
                                                            className="text-body-tertiary form-icon-label"
                                                            htmlFor="add-property-wizardwizard-search-address">Search
                                                            address...</label></div><span
                                                        className="fa-solid fa-location-dot text-body form-icon fs-10"></span><span
                                                        className="fa-solid fa-location-crosshairs position-absolute text-primary fs-9 end-0 top-0 mt-3 me-3"
                                                        data-fa-transform="down-2"></span>
                                                </div>
                                                <div
                                                    className="mapbox-container rounded-3 border overflow-hidden mt-3 mb-6">
                                                    <div id="mapbox"
                                                        data-mapbox='{"attributionControl":false,"center":[-74.0020158,40.7228022],"zoom":14,"scrollZoom":false}'
                                                        style={{height: "250px"}}></div>
                                                </div>
                                                <div className="form-floating"><input className="form-control" type="text"
                                                        name="add-property-wizard-street"
                                                        id="add-property-wizardwizard-street"
                                                        placeholder="Apartment / Street" /><label
                                                        htmlFor="add-property-wizardwizard-street">Apartment /
                                                        Street</label></div>
                                                <div className="row gx-3 my-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating mb-3 mb-md-0"><input
                                                                className="form-control" type="text"
                                                                name="add-property-wizard-city"
                                                                id="add-property-wizardwizard-city"
                                                                placeholder="City" /><label
                                                                htmlFor="add-property-wizardwizard-city">City</label></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating"><input className="form-control"
                                                                type="text" name="add-property-wizard-state"
                                                                id="add-property-wizardwizard-state"
                                                                placeholder="State (Optional)" /><label
                                                                htmlFor="add-property-wizardwizard-state">State
                                                                (Optional)</label></div>
                                                    </div>
                                                </div>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating"><input className="form-control"
                                                                type="text" name="add-property-wizard-zip-code"
                                                                id="add-property-wizardwizard-zip-code"
                                                                placeholder="Zip Code" /><label
                                                                htmlFor="add-property-wizardwizard-zip-code">Zip
                                                                Code</label></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating"><input className="form-control"
                                                                type="text" name="add-property-wizard-country"
                                                                id="add-property-wizardwizard-country"
                                                                placeholder="Country / Region" /><label
                                                                htmlFor="add-property-wizardwizard-country">Country /
                                                                Region</label></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center gap-3 mt-6">
                                                    <h4>Show your specific location</h4>
                                                    <div className="form-check form-switch"><input className="form-check-input"
                                                            id="locationSwitchCheckChecked" type="checkbox"
                                                            checked="" /></div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab3"
                                            id="add-property-wizard-tab3">
                                            <form id="addPropertyWizardForm3" novalidate="novalidate"
                                                data-wizard-form="3">
                                                <div>
                                                    <h3 className="mb-6">General amenities</h3>
                                                    <div className="row g-3">
                                                        <div className="col-sm-auto flex-sm-fill">
                                                            <div className="form-floating"><input className="form-control"
                                                                    type="text"
                                                                    name="add-property-wizard-search-amenities"
                                                                    id="add-property-wizardwizard-search-amenities"
                                                                    placeholder="Search amenities" value="" /><label
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="wifi-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="wifi-paid" name="Wifi-radio"
                                                                                value="paid"
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
                                                                                name="Breakfast-radio" value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="breakfast-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="breakfast-paid"
                                                                                name="Breakfast-radio" value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="gym-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="gym-paid" name="Gym-radio"
                                                                                value="paid"
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
                                                                                name="Swimming pool-radio" value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="swimming-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="swimming-paid"
                                                                                name="Swimming pool-radio" value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="in-room-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="in-room-paid"
                                                                                name="In-room coffee/tea-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="daily-housekeeping-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="daily-housekeeping-paid"
                                                                                name="Daily housekeeping-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="bar-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="bar-paid" name="Bar / Lounge-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="laundry-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="laundry-paid" name="Laundry-radio"
                                                                                value="paid"
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
                                                                                name="Newspaper-radio" value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="newspaper-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="newspaper-paid"
                                                                                name="Newspaper-radio" value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="bicycle-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="bicycle-paid" name="Bicycle-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="air-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="air-paid"
                                                                                name="Air conditioning-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="games-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="games-paid" name="Games room-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="beach-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="beach-paid" name="Beach view-radio"
                                                                                value="paid"
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
                                                                                name="Restaurants-radio" value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="restaurants-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="restaurants-paid"
                                                                                name="Restaurants-radio" value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="bars-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="bars-paid" name="Bars-radio"
                                                                                value="paid"
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
                                                                                name="In-Room Dining-radio" value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="in-room-dining-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="in-room-dining-paid"
                                                                                name="In-Room Dining-radio" value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="family-friendly-dining-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="family-friendly-dining-paid"
                                                                                name="Family-Friendly Dining-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="breakfast-buffet-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="breakfast-buffet-paid"
                                                                                name="Breakfast Buffet-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="garden-or-courtyard-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="garden-or-courtyard-paid"
                                                                                name="Garden or Courtyard-radio"
                                                                                value="paid"
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
                                                                                name="Scenic Views-radio" value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="scenic-views-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="scenic-views-paid"
                                                                                name="Scenic Views-radio" value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="sunbathing-areas-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="sunbathing-areas-paid"
                                                                                name="Sunbathing Areas-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="outdoor-lounge-areas-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="outdoor-lounge-areas-paid"
                                                                                name="Outdoor Lounge Areas-radio"
                                                                                value="paid"
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
                                                                                name="Game Room-radio" value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="game-room-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="game-room-paid"
                                                                                name="Game Room-radio" value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="play-area-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="play-area-paid"
                                                                                name="Children's Play Area-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="sports-facilities-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="sports-facilities-paid"
                                                                                name="Sports Facilities-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="babysitting-services-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="babysitting-services-paid"
                                                                                name="Babysitting Services-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="high-speed-internet-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="high-speed-internet-paid"
                                                                                name="High-Speed Internet-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="business-center-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="business-center-paid"
                                                                                name="Business Center-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="video-conferencing-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="video-conferencing-paid"
                                                                                name="Video Conferencing Facilities-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="vr-free">Free</label></div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="vr-paid"
                                                                                name="Virtual Reality (VR) Experiences-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="accessible-common-areas-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="accessible-common-areas-paid"
                                                                                name="Accessible Common Areas-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="accessible-parking-spaces-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="accessible-parking-spaces-paid"
                                                                                name="Accessible Parking Spaces-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="accessible-fitness-center-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="accessible-fitness-center-paid"
                                                                                name="Accessible Fitness Center-radio"
                                                                                value="paid"
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
                                                                                value="free"
                                                                                data-pricing="data-pricing" /><label
                                                                                className="form-check-label"
                                                                                htmlFor="accessible-swimmings-pool-free">Free</label>
                                                                        </div>
                                                                        <div
                                                                            className="form-check form-check-inline me-0 mb-0">
                                                                            <input className="form-check-input" type="radio"
                                                                                id="accessible-swimmings-pool-paid"
                                                                                name="Accessible Swimming Pool-radio"
                                                                                value="paid"
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
                                        <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab4"
                                            id="add-property-wizard-tab4">
                                            <form id="addPropertyWizardForm4" novalidate="novalidate"
                                                data-wizard-form="4">
                                                <h3 className="mb-6">Add property picture</h3>
                                                <div className="dropzone dropzone-multiple p-0 mb-5"
                                                    id="my-awesome-dropzone" data-dropzone="data-dropzone">
                                                    <div className="fallback"><input name="file" type="file"
                                                            multiple="multiple" /></div>
                                                    <div className="dz-message text-body-tertiary text-opacity-85"
                                                        data-dz-message="data-dz-message">Drag your photo here<span
                                                            className="text-body-secondary px-1">or</span><button
                                                            className="btn btn-link p-0" type="button">Browse from
                                                            device</button><br /><img className="mt-3 me-2"
                                                            src="./img/icons/image-icon.png" width="40"
                                                            alt="" /></div>
                                                    <div className="dz-preview d-flex flex-wrap mt-3">
                                                        <div className="rounded-2 overflow-hidden me-2 mb-2 position-relative"
                                                            style={{height:"140px",width:"200px"}}><img
                                                                className="w-100 h-100 object-fit-cover"
                                                                src="./img/products/23.png" alt="..."
                                                                data-dz-thumbnail="data-dz-thumbnail" /><button
                                                                className="btn dropdown-toggle dropdown-caret-none px-3 text-body bg-body dz-remove w-auto h-auto py-0 border"
                                                                type="button" data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                                style={{top: "16px", right: "16px"}}><span
                                                                    className="fa-solid fa-ellipsis"></span></button>
                                                            <ul className="dropdown-menu dropdown-menu-end py-1">
                                                                <li><a className="dropdown-item" href="#!"
                                                                        data-dz-remove="data-dz-remove">Remove</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab5"
                                            id="add-property-wizard-tab5">
                                            <form id="addPropertyWizardForm5" novalidate="novalidate"
                                                data-wizard-form="5">
                                                <h3 className="mb-6">Finance</h3>
                                                <h4 className="mb-4">Payment from Phoenix Booking Management</h4>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating"><input className="form-control"
                                                                type="text" name="add-property-wizard-currency"
                                                                id="add-property-wizardwizard-currency"
                                                                placeholder="payment currency"
                                                                value="$ US Dollar" /><label
                                                                htmlFor="add-property-wizardwizard-currency">payment
                                                                currency</label></div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-floating"><input className="form-control"
                                                                type="text" name="add-property-wizard-percentage"
                                                                id="add-property-wizardwizard-percentage"
                                                                placeholder="Commission Percentage" value="Flat 10%"
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
                                                        <option selected="selected">Electronic Funds Transfer (EFT)
                                                        </option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                    </select><label className="form-icon-label"
                                                        htmlFor="add-property-wizardEFT-type">Select Payment Method</label>
                                                </div>
                                                <div className="form-check my-4"><input className="form-check-input"
                                                        id="invoiceChecked" type="checkbox" checked="checked" /><label
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
                                                        name="paymentMethod" value="creditCard"
                                                        checked="checked" /><label className="form-check-label fs-8"
                                                        htmlFor="creditCard">Credit Card</label></div>
                                                <div className="form-check form-check-inline mb-3"><input
                                                        className="form-check-input" id="bankAccount" type="radio"
                                                        name="paymentMethod" value="bankAccount" /><label
                                                        className="form-check-label fs-8" htmlFor="bankAccount">Bank
                                                        Account</label></div>
                                                <div className="form-check form-check-inline mb-3"><input
                                                        className="form-check-input" id="online" type="radio"
                                                        name="paymentMethod" value="online" /><label
                                                        className="form-check-label fs-8" htmlFor="online">Online</label></div>
                                                <div className="row g-3">
                                                    <div className="col-md-6">
                                                        <div className="form-floating"><select
                                                                className="form-select form-icon-input"
                                                                name="add-property-wizard-type"
                                                                id="add-property-wizardcard-type">
                                                                <option selected="selected">Visa Debit card</option>
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
                                        <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab6"
                                            id="add-property-wizard-tab6">
                                            <form id="addPropertyWizardForm6" novalidate="novalidate"
                                                data-wizard-form="6">
                                                <h3 className="mb-6">Policies</h3>
                                                <div className="form-check form-check-inline me-5 mb-3"><input
                                                        className="form-check-input" id="limitedCheckIn" type="radio"
                                                        name="checkIn" value="limitedCheckIn" checked="checked" /><label
                                                        className="form-check-label fs-8" htmlFor="limitedCheckIn">Limited
                                                        Check-in</label></div>
                                                <div className="form-check form-check-inline mb-3"><input
                                                        className="form-check-input" id="24HrCheckIn" type="radio"
                                                        name="checkIn" value="24HrCheckIn" /><label
                                                        className="form-check-label fs-8" htmlFor="24HrCheckIn">24hr
                                                        Check-in</label></div>
                                                <div className="row g-3 align-items-center">
                                                    <div className="col-12 col-sm-6 col-md-auto flex-md-grow-1">
                                                        <div className="form-floating"><input
                                                                className="form-control datetimepicker" id="checkInStarts"
                                                                type="text" placeholder="H:i"
                                                                data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}' /><label
                                                                htmlFor="checkInStarts">Check-in Starts</label></div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-md-auto flex-md-grow-1">
                                                        <div className="form-floating"><input
                                                                className="form-control datetimepicker" id="checkInEnds"
                                                                type="text" placeholder="H:i"
                                                                data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}' /><label
                                                                htmlFor="checkInEnds">Check-in Ends</label></div>
                                                    </div>
                                                    <div className="col-12 col-md-auto">
                                                        <div className="form-check mb-0"><input className="form-check-input"
                                                                id="lateCheckIn" type="checkbox"
                                                                checked="checked" /><label
                                                                className="form-check-label fw-normal fs-8"
                                                                htmlFor="lateCheckIn">Late Check-in</label></div>
                                                    </div>
                                                </div>
                                                <div className="border p-3 rounded-2 mt-3">
                                                    <div className="form-check form-switch mb-0"><input
                                                            className="form-check-input" id="ageRestriction"
                                                            type="checkbox" /><label
                                                            className="form-check-label fs-8 fw-bold text-body ms-2"
                                                            htmlFor="ageRestriction">Age Restriction</label></div>
                                                </div>
                                                <div className="border p-3 rounded-2 my-3">
                                                    <div className="form-check form-switch mb-0"><input
                                                            className="form-check-input" id="deposit"
                                                            type="checkbox" /><label
                                                            className="form-check-label fs-8 fw-bold text-body ms-2"
                                                            htmlFor="deposit">Deposit at Check-in</label></div>
                                                </div>
                                                <div className="border p-3 rounded-2">
                                                    <div className="form-check form-switch mb-0"><input
                                                            className="form-check-input" id="documentation"
                                                            type="checkbox" /><label
                                                            className="form-check-label fs-8 fw-bold text-body ms-2"
                                                            htmlFor="documentation">Documentation at Check-in</label></div>
                                                </div>
                                                <h4 className="mb-4 mt-6">Checkout Policy</h4>
                                                <div className="form-floating mb-3"><input
                                                        className="form-control datetimepicker" id="chcckOutBefore"
                                                        type="text" placeholder="H:i"
                                                        data-options='{"enableTime":true,"noCalendar":true,"dateFormat":"H:i","disableMobile":true}' /><label
                                                        htmlFor="chcckOutBefore">Checkout Before</label></div>
                                                <div className="form-price-tier border p-3 rounded-2"
                                                    data-form-price-tier="data-form-price-tier">
                                                    <div className="d-sm-flex align-items-center gap-3">
                                                        <div className="form-check form-switch mb-0"><input
                                                                className="form-check-input" id="flexible-checkout"
                                                                type="checkbox"
                                                                data-price-toggle="data-price-toggle" /><label
                                                                className="form-check-label fs-8 fw-bold text-body ms-2"
                                                                htmlFor="flexible-checkout">Flexible Checkout</label></div>
                                                        <div className="pricings ms-auto mt-2 mt-sm-0">
                                                            <div className="form-check form-check-inline me-3 mb-0"><input
                                                                    className="form-check-input" type="radio"
                                                                    id="flexible-checkout-free"
                                                                    name="Flexible Checkout-radio" value="free"
                                                                    data-pricing="data-pricing" /><label
                                                                    className="form-check-label"
                                                                    htmlFor="flexible-checkout-free">Free</label></div>
                                                            <div className="form-check form-check-inline me-0 mb-0"><input
                                                                    className="form-check-input" type="radio"
                                                                    id="flexible-checkout-paid"
                                                                    name="Flexible Checkout-radio" value="paid"
                                                                    data-pricing="data-pricing" /><label
                                                                    className="form-check-label"
                                                                    htmlFor="flexible-checkout-paid">Paid</label></div>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" data-pricing-collapse="data-pricing-collapse">
                                                        <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="flexible-checkout-option1"
                                                                    type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="flexible-checkout-option1">Option 1</label>
                                                            </div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="flexible-checkout-option2"
                                                                    type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="flexible-checkout-option2">Option 2</label>
                                                            </div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="flexible-checkout-option3"
                                                                    type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="flexible-checkout-option3">Option 3</label>
                                                            </div>
                                                            <button className="btn btn-link p-0"><span
                                                                    className="fa-solid fa-plus me-2"></span>Additional
                                                                Condition</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="mb-4 mt-6">Cancellation Policy</h4>
                                                <div className="form-check form-check-inline me-5 mb-0"><input
                                                        className="form-check-input" id="nonRefundable" type="radio"
                                                        name="refundPolicy" value="nonRefundable" /><label
                                                        className="form-check-label fs-8" htmlFor="nonRefundable">Non
                                                        Refundable</label></div>
                                                <div className="form-check form-check-inline mb-0"><input
                                                        className="form-check-input" id="optionalRefund" type="radio"
                                                        name="refundPolicy" value="optionalRefund"
                                                        checked="checked" /><label className="form-check-label fs-8"
                                                        htmlFor="optionalRefund">Optional Refund</label></div>
                                                <div className="border p-3 rounded-2 my-3">
                                                    <div className="form-check form-switch mb-0"><input
                                                            className="form-check-input" id="fullRefund"
                                                            type="checkbox" /><label
                                                            className="form-check-label fs-8 fw-bold text-body ms-2"
                                                            htmlFor="fullRefund">Full Refund</label></div>
                                                </div>
                                                <div className="border p-3 rounded-2">
                                                    <div className="form-check form-switch mb-0"><input
                                                            className="form-check-input" id="partialRefund"
                                                            type="checkbox" /><label
                                                            className="form-check-label fs-8 fw-bold text-body ms-2"
                                                            htmlFor="partialRefund">Partial Refund</label></div>
                                                </div>
                                                <h4 className="mb-4 mt-6">Pet Policy</h4>
                                                <div className="form-check form-check-inline me-5 mb-0"><input
                                                        className="form-check-input" id="notAllowed" type="radio"
                                                        name="petPolicy" value="notAllowed" /><label
                                                        className="form-check-label fs-8" htmlFor="notAllowed">Not
                                                        allowed</label></div>
                                                <div className="form-check form-check-inline mb-0"><input
                                                        className="form-check-input" id="allowed" type="radio"
                                                        name="petPolicy" value="allowed" checked="checked" /><label
                                                        className="form-check-label fs-8" htmlFor="allowed">Allowed</label>
                                                </div>
                                                <div className="border p-3 rounded-2 my-3">
                                                    <div className="form-check form-switch mb-0"><input
                                                            className="form-check-input" id="petRestrickedZone"
                                                            type="checkbox" /><label
                                                            className="form-check-label fs-8 fw-bold text-body ms-2"
                                                            htmlFor="petRestrickedZone">Pet Restricted Zones</label></div>
                                                </div>
                                                <div className="border p-3 rounded-2">
                                                    <div className="form-check form-switch mb-0"><input
                                                            className="form-check-input" id="AdditionalCharges"
                                                            type="checkbox" /><label
                                                            className="form-check-label fs-8 fw-bold text-body ms-2"
                                                            htmlFor="AdditionalCharges">Additional Charges</label></div>
                                                </div>
                                                <h4 className="mb-4 mt-6">Child Policy</h4>
                                                <h5 className="mb-2 text-body">Age Segment 1</h5>
                                                <div className="row align-items-center g-3">
                                                    <div className="col-6 col-sm-auto">
                                                        <div className="form-floating age-segment-input"><input
                                                                className="form-control input-spin-none" type="number"
                                                                name="add-property-wizard-from1"
                                                                id="add-property-wizardwizard-from1"
                                                                placeholder="From (Yrs)" value="0"
                                                                disabled="disabled" /><label
                                                                htmlFor="add-property-wizardwizard-from1">From (Yrs)</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-auto flex-1 order-1 order-sm-0">
                                                        <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2"
                                                            data-nouislider='{"range":{"min":0,"max":18},"start":[0,7],"connect":true}'>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-auto">
                                                        <div className="form-floating age-segment-input"><input
                                                                className="form-control input-spin-none" type="number"
                                                                name="add-property-wizard-to1"
                                                                id="add-property-wizardwizard-to1"
                                                                placeholder="To (Yrs)" value="7" /><label
                                                                htmlFor="add-property-wizardwizard-to1">To (Yrs)</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="mb-2 mt-4 text-body">Age Segment 2</h5>
                                                <div className="row align-items-center g-3">
                                                    <div className="col-6 col-sm-auto">
                                                        <div className="form-floating age-segment-input"><input
                                                                className="form-control input-spin-none" type="number"
                                                                name="add-property-wizard-from2"
                                                                id="add-property-wizardwizard-from2"
                                                                placeholder="From (Yrs)" value="8" /><label
                                                                htmlFor="add-property-wizardwizard-from2">From (Yrs)</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto flex-1 order-1 order-sm-0">
                                                        <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2"
                                                            data-nouislider='{"range":{"min":0,"max":18},"start":[8,12],"connect":true}'>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-auto">
                                                        <div className="form-floating age-segment-input"><input
                                                                className="form-control input-spin-none" type="number"
                                                                name="add-property-wizard-to2"
                                                                id="add-property-wizardwizard-to2"
                                                                placeholder="To (Yrs)" value="12" /><label
                                                                htmlFor="add-property-wizardwizard-to2">To (Yrs)</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="mb-2 mt-4 text-body"> <span>Age Segment 3</span><button
                                                        className="btn btn-link p-0 ms-1">Remove</button></h5>
                                                <div className="row align-items-center g-3">
                                                    <div className="col-6 col-sm-auto">
                                                        <div className="form-floating age-segment-input"><input
                                                                className="form-control input-spin-none" type="number"
                                                                name="add-property-wizard-from3"
                                                                id="add-property-wizardwizard-from3"
                                                                placeholder="From (Yrs)" value="13" /><label
                                                                htmlFor="add-property-wizardwizard-from3">From (Yrs)</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-auto flex-1 order-1 order-sm-0">
                                                        <div className="noUi-target-primary noUi-handle-primary noUi-slider-slim noUi-handle-circle px-2"
                                                            data-nouislider='{"range":{"min":0,"max":18},"start":[13,18],"connect":true}'>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 col-sm-auto">
                                                        <div className="form-floating age-segment-input"><input
                                                                className="form-control input-spin-none" type="number"
                                                                name="add-property-wizard-to3"
                                                                id="add-property-wizardwizard-to3"
                                                                placeholder="To (Yrs)" value="18"
                                                                disabled="disabled" /><label
                                                                htmlFor="add-property-wizardwizard-to3">To (Yrs)</label>
                                                        </div>
                                                    </div>
                                                </div><button className="btn btn-link p-0 mt-3 fs-8"><span
                                                        className="fa-solid fa-plus me-2"></span>Add Segment</button>
                                                <div className="border px-3 py-2 rounded-2 mt-4">
                                                    <div className="form-check form-switch mb-0 py-1"><input
                                                            className="form-check-input" id="documentation-requirement"
                                                            type="checkbox" /><label
                                                            className="form-check-label fs-8 fw-bold text-body ms-2"
                                                            htmlFor="documentation-requirement">Documentation
                                                            Requirement</label></div>
                                                </div>
                                                <h4 className="mb-4 mt-6">Included Taxes in your rate</h4>
                                                <div className="form-price-tier border p-3 rounded-2 mb-3"
                                                    data-form-price-tier="data-form-price-tier">
                                                    <div className="d-sm-flex align-items-center gap-3">
                                                        <div className="form-check form-switch mb-0"><input
                                                                className="form-check-input" id="vat" type="checkbox"
                                                                data-price-toggle="data-price-toggle" /><label
                                                                className="form-check-label fs-8 fw-bold text-body ms-2"
                                                                htmlFor="vat">VAT</label></div>
                                                        <div className="pricings ms-auto mt-2 mt-sm-0">
                                                            <div className="form-check form-check-inline me-3 mb-0"><input
                                                                    className="form-check-input" type="radio" id="vat-free"
                                                                    name="VAT-radio" value="free"
                                                                    data-pricing="data-pricing" /><label
                                                                    className="form-check-label" htmlFor="vat-free">Free</label>
                                                            </div>
                                                            <div className="form-check form-check-inline me-0 mb-0"><input
                                                                    className="form-check-input" type="radio" id="vat-paid"
                                                                    name="VAT-radio" value="paid"
                                                                    data-pricing="data-pricing" /><label
                                                                    className="form-check-label" htmlFor="vat-paid">Paid</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" data-pricing-collapse="data-pricing-collapse">
                                                        <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="vat-option1" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="vat-option1">Option 1</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="vat-option2" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="vat-option2">Option 2</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="vat-option3" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="vat-option3">Option 3</label></div><button
                                                                className="btn btn-link p-0"><span
                                                                    className="fa-solid fa-plus me-2"></span>Additional
                                                                Condition</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-price-tier border p-3 rounded-2 mb-3"
                                                    data-form-price-tier="data-form-price-tier">
                                                    <div className="d-sm-flex align-items-center gap-3">
                                                        <div className="form-check form-switch mb-0"><input
                                                                className="form-check-input" id="gst" type="checkbox"
                                                                data-price-toggle="data-price-toggle" /><label
                                                                className="form-check-label fs-8 fw-bold text-body ms-2"
                                                                htmlFor="gst">GST</label></div>
                                                        <div className="pricings ms-auto mt-2 mt-sm-0">
                                                            <div className="form-check form-check-inline me-3 mb-0"><input
                                                                    className="form-check-input" type="radio" id="gst-free"
                                                                    name="GST-radio" value="free"
                                                                    data-pricing="data-pricing" /><label
                                                                    className="form-check-label" htmlFor="gst-free">Free</label>
                                                            </div>
                                                            <div className="form-check form-check-inline me-0 mb-0"><input
                                                                    className="form-check-input" type="radio" id="gst-paid"
                                                                    name="GST-radio" value="paid"
                                                                    data-pricing="data-pricing" /><label
                                                                    className="form-check-label" htmlFor="gst-paid">Paid</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" data-pricing-collapse="data-pricing-collapse">
                                                        <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="gst-option1" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="gst-option1">Option 1</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="gst-option2" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="gst-option2">Option 2</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="gst-option3" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="gst-option3">Option 3</label></div><button
                                                                className="btn btn-link p-0"><span
                                                                    className="fa-solid fa-plus me-2"></span>Additional
                                                                Condition</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-price-tier border p-3 rounded-2 mb-3"
                                                    data-form-price-tier="data-form-price-tier">
                                                    <div className="d-sm-flex align-items-center gap-3">
                                                        <div className="form-check form-switch mb-0"><input
                                                                className="form-check-input" id="holet-tax" type="checkbox"
                                                                data-price-toggle="data-price-toggle" /><label
                                                                className="form-check-label fs-8 fw-bold text-body ms-2"
                                                                htmlFor="holet-tax">Hotel tax</label></div>
                                                        <div className="pricings ms-auto mt-2 mt-sm-0">
                                                            <div className="form-check form-check-inline me-3 mb-0"><input
                                                                    className="form-check-input" type="radio"
                                                                    id="holet-tax-free" name="Hotel tax-radio"
                                                                    value="free" data-pricing="data-pricing" /><label
                                                                    className="form-check-label"
                                                                    htmlFor="holet-tax-free">Free</label></div>
                                                            <div className="form-check form-check-inline me-0 mb-0"><input
                                                                    className="form-check-input" type="radio"
                                                                    id="holet-tax-paid" name="Hotel tax-radio"
                                                                    value="paid" data-pricing="data-pricing" /><label
                                                                    className="form-check-label"
                                                                    htmlFor="holet-tax-paid">Paid</label></div>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" data-pricing-collapse="data-pricing-collapse">
                                                        <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="holet-tax-option1" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="holet-tax-option1">Option 1</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="holet-tax-option2" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="holet-tax-option2">Option 2</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="holet-tax-option3" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="holet-tax-option3">Option 3</label></div>
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
                                                                className="form-check-input" id="city-tax" type="checkbox"
                                                                data-price-toggle="data-price-toggle" /><label
                                                                className="form-check-label fs-8 fw-bold text-body ms-2"
                                                                htmlFor="city-tax">City / District tax</label></div>
                                                        <div className="pricings ms-auto mt-2 mt-sm-0">
                                                            <div className="form-check form-check-inline me-3 mb-0"><input
                                                                    className="form-check-input" type="radio"
                                                                    id="city-tax-free" name="City / District tax-radio"
                                                                    value="free" data-pricing="data-pricing" /><label
                                                                    className="form-check-label"
                                                                    htmlFor="city-tax-free">Free</label></div>
                                                            <div className="form-check form-check-inline me-0 mb-0"><input
                                                                    className="form-check-input" type="radio"
                                                                    id="city-tax-paid" name="City / District tax-radio"
                                                                    value="paid" data-pricing="data-pricing" /><label
                                                                    className="form-check-label"
                                                                    htmlFor="city-tax-paid">Paid</label></div>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" data-pricing-collapse="data-pricing-collapse">
                                                        <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="city-tax-option1" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="city-tax-option1">Option 1</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="city-tax-option2" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="city-tax-option2">Option 2</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="city-tax-option3" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="city-tax-option3">Option 3</label></div><button
                                                                className="btn btn-link p-0"><span
                                                                    className="fa-solid fa-plus me-2"></span>Additional
                                                                Condition</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-price-tier border p-3 rounded-2"
                                                    data-form-price-tier="data-form-price-tier">
                                                    <div className="d-sm-flex align-items-center gap-3">
                                                        <div className="form-check form-switch mb-0"><input
                                                                className="form-check-input" id="tourist-tax"
                                                                type="checkbox"
                                                                data-price-toggle="data-price-toggle" /><label
                                                                className="form-check-label fs-8 fw-bold text-body ms-2"
                                                                htmlFor="tourist-tax">Tourist tax</label></div>
                                                        <div className="pricings ms-auto mt-2 mt-sm-0">
                                                            <div className="form-check form-check-inline me-3 mb-0"><input
                                                                    className="form-check-input" type="radio"
                                                                    id="tourist-tax-free" name="Tourist tax-radio"
                                                                    value="free" data-pricing="data-pricing" /><label
                                                                    className="form-check-label"
                                                                    htmlFor="tourist-tax-free">Free</label></div>
                                                            <div className="form-check form-check-inline me-0 mb-0"><input
                                                                    className="form-check-input" type="radio"
                                                                    id="tourist-tax-paid" name="Tourist tax-radio"
                                                                    value="paid" data-pricing="data-pricing" /><label
                                                                    className="form-check-label"
                                                                    htmlFor="tourist-tax-paid">Paid</label></div>
                                                        </div>
                                                    </div>
                                                    <div className="collapse" data-pricing-collapse="data-pricing-collapse">
                                                        <div className="p-4 bg-primary-subtle rounded-3 mt-3">
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="tourist-tax-option1" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="tourist-tax-option1">Option 1</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="tourist-tax-option2" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="tourist-tax-option2">Option 2</label></div>
                                                            <div className="form-check mb-4"><input className="form-check-input"
                                                                    id="tourist-tax-option3" type="checkbox" /><label
                                                                    className="form-check-label fw-normal fs-8 fw-semibold"
                                                                    htmlFor="tourist-tax-option3">Option 3</label></div>
                                                            <button className="btn btn-link p-0"><span
                                                                    className="fa-solid fa-plus me-2"></span>Additional
                                                                Condition</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h4 className="mb-4 mt-6">Your Documentations</h4>
                                                <div className="form-floating"><input className="form-control input-spin-none"
                                                        type="number" name="add-property-wizard-property-registrations"
                                                        id="add-property-wizardwizard-property-registrations"
                                                        placeholder="Property Registration No. (OPTIONAL)" /><label
                                                        htmlFor="add-property-wizardwizard-property-registrations">Property
                                                        Registration No. (OPTIONAL)</label></div>
                                                <div className="form-floating my-3"><input
                                                        className="form-control input-spin-none" type="number"
                                                        name="add-property-wizard-business-registration"
                                                        id="add-property-wizardwizard-business-registration"
                                                        placeholder="Business Registration No." />
                                                    <label
                                                        htmlFor="add-property-wizardwizard-business-registration">Business
                                                        Registration No.</label>
                                                </div>
                                                <div className="form-floating"><input className="form-control input-spin-none"
                                                        type="number" name="add-property-wizard-taxpaper"
                                                        id="add-property-wizardwizard-taxpaper"
                                                        placeholder="Taxpayer Indentification No." /><label
                                                        htmlFor="add-property-wizardwizard-taxpaper">Taxpayer
                                                        Indentification No.</label></div>
                                            </form>
                                        </div>
                                        <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab7"
                                            id="add-property-wizard-tab7">
                                            <h3 className="mb-2">We’re building your property</h3>
                                            <p className="mb-5 text-body-tertiary">We're working on getting your property
                                                set up and ready for guests. Stay tuned for updates and start accepting
                                                bookings soon!</p>
                                            <div className="alert alert-subtle-success alert-dismissible fade show mb-5"
                                                role="alert">
                                                <p className="mb-0 flex-1 fw-semibold fs-9 fs-sm-8">Congratulations on your
                                                    successful listing! Join a community of hospitality professionals as
                                                    a host. Your hard work will turn your home into a sought-after
                                                    destination. We anticipate hearing about your achievements.</p>
                                                <button className="btn-close" type="button" data-bs-dismiss="alert"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="accordion-button-arrow-icon accordion mt-2"
                                                id="previewAccordion">
                                                <div
                                                    className="accordion-item border rounded-3 bg-body-emphasis p-3 p-sm-4 mb-5">
                                                    <h5 className="accordion-header"><button
                                                            className="accordion-button py-0 text-body-highlight"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#basicInfo" aria-expanded="true"
                                                            aria-controls="basicInfo"><img className="me-2 d-dark-none"
                                                                src="./img/icons/info.svg"
                                                                alt="" /><img className="me-2 d-light-none"
                                                                src="./img/icons/info_dark.svg"
                                                                alt="" /><span className="fs-sm-7">Basic
                                                                Information</span></button></h5>
                                                    <div className="accordion-collapse collapse show" id="basicInfo"
                                                        data-bs-parent="#previewAccordion">
                                                        <div className="mt-4 scrollbar"><a
                                                                className="fs-9 fw-semibold mb-2 d-inline-block"
                                                                href="#!">Edit info</a>
                                                            <table className="w-100">
                                                                <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                    <th style={{minwidth: "300px"}}></th>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Property name</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Phoenix
                                                                            Oasis</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Property Information</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 ">
                                                                        <p className="mb-0 text-body-secondary">Welcome to
                                                                            Phoenix Oasis, where luxury meets
                                                                            tranquility. Our hotel offers lavish
                                                                            accommodations, exquisite dining,
                                                                            rejuvenating spa experiences, and stunning
                                                                            views. Experience opulence
                                                                            redefined in a haven of serenity.</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Property type</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Hotel</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Rating</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">5 Star</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Email address</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">
                                                                            phoenix.oasis@email.com</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Mobile number</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">(934)
                                                                            907-3716</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Property chain</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">
                                                                            Not-available</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            CMS</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            CMS provider name</h5>
                                                                    </td>
                                                                    <td className="border-top px-3 pt-3 w-max-content">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Eagle Eye
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item border rounded-3 bg-body-emphasis p-3 p-sm-4 mb-5">
                                                    <h5 className="accordion-header"><button
                                                            className="accordion-button py-0 text-body-highlight collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#location" aria-expanded="true"
                                                            aria-controls="location"><img className="me-2 d-dark-none"
                                                                src="/img/icons/location.svg"
                                                                alt="" /><img className="me-2 d-light-none"
                                                                src="./img/icons/location_dark.svg"
                                                                alt="" /><span className="fs-sm-7">Location</span></button>
                                                    </h5>
                                                    <div className="accordion-collapse collapse" id="location"
                                                        data-bs-parent="#previewAccordion">
                                                        <div className="mt-4 scrollbar"><a
                                                                className="fs-9 fw-semibold mb-2 d-inline-block"
                                                                href="#!">Edit location</a>
                                                            <table className="w-100">
                                                                <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                    <th></th>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Apartment / Street</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">123 Luxe
                                                                            Boulevard</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            State</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Suite 567
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Country / Region</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">United
                                                                            States</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            City</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Sunshine
                                                                            City</p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Zip code</h5>
                                                                    </td>
                                                                    <td className="border-top px-3 pt-3 w-max-content">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">AZ 85001</p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item border rounded-3 bg-body-emphasis p-3 p-sm-4 mb-5">
                                                    <h5 className="accordion-header"><button
                                                            className="accordion-button py-0 text-body-highlight collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#generalAmenities" aria-expanded="true"
                                                            aria-controls="generalAmenities"><img
                                                                className="me-2 d-dark-none"
                                                                src="./img/icons/bed-double.svg"
                                                                alt="" /><img className="me-2 d-light-none"
                                                                src="./img/icons/bed-double_dark.svg"
                                                                alt="" /><span className="fs-sm-7">General
                                                                Amenities</span></button></h5>
                                                    <div className="accordion-collapse collapse" id="generalAmenities"
                                                        data-bs-parent="#previewAccordion">
                                                        <div className="mt-4 scrollbar"><a
                                                                className="fs-9 fw-semibold mb-2 d-inline-block"
                                                                href="#!">Edit amenities</a>
                                                            <table className="w-100">
                                                                <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                    <th></th>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Wifi</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Hotel Bar</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Restaurant</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Common Areas</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Pool</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Tennis Courts</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            No Smoking</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Air Conditioning</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Parking</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Bathtub</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Beach View</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap  pb-3">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Flat-screen TV</h5>
                                                                    </td>
                                                                    <td
                                                                        className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  pb-3 text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="border-top pt-3 text-nowrap">
                                                                        <h5
                                                                            className="fw-semibold text-body-highlight mb-0">
                                                                            Balcony</h5>
                                                                    </td>
                                                                    <td className="border-top px-3 pt-3 w-max-content">
                                                                        <p className="mb-0 w-max-content">:</p>
                                                                    </td>
                                                                    <td className="border-top pt-3  text-nowrap">
                                                                        <p className="mb-0 text-body-secondary">Available
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item border rounded-3 bg-body-emphasis p-3 p-sm-4 mb-5">
                                                    <h5 className="accordion-header"><button
                                                            className="accordion-button py-0 text-body-highlight collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#pictures" aria-expanded="true"
                                                            aria-controls="pictures"><img className="me-2 d-dark-none"
                                                                src="./img/icons/picture.svg"
                                                                alt="" /><img className="me-2 d-light-none"
                                                                src="./img/icons/picture_dark.svg"
                                                                alt="" /><span className="fs-sm-7">Picture</span></button>
                                                    </h5>
                                                    <div className="accordion-collapse collapse" id="pictures"
                                                        data-bs-parent="#previewAccordion">
                                                        <div className="mt-4"><a
                                                                className="fs-9 fw-semibold mb-2 d-inline-block"
                                                                href="#!">Edit pictures</a>
                                                            <div className="row g-2 g-sm-3">
                                                                <div className="col-sm-4"><img
                                                                        className="rounded-2 w-100 object-fit-cover"
                                                                        src="./img/gallery/59.png"
                                                                        alt="" height="160" /></div>
                                                                <div className="col-sm-4"><img
                                                                        className="rounded-2 w-100 object-fit-cover"
                                                                        src="./img/gallery/60.png"
                                                                        alt="" height="160" /></div>
                                                                <div className="col-sm-4"><img
                                                                        className="rounded-2 w-100 object-fit-cover"
                                                                        src="./img/gallery/61.png"
                                                                        alt="" height="160" /></div>
                                                                <div className="col-sm-4"><img
                                                                        className="rounded-2 w-100 object-fit-cover"
                                                                        src="./img/gallery/62.png"
                                                                        alt="" height="160" /></div>
                                                                <div className="col-sm-4"><img
                                                                        className="rounded-2 w-100 object-fit-cover"
                                                                        src="./img/gallery/63.png"
                                                                        alt="" height="160" /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item border rounded-3 bg-body-emphasis p-3 p-sm-4 mb-5">
                                                    <h5 className="accordion-header"><button
                                                            className="accordion-button py-0 text-body-highlight collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#finance" aria-expanded="true"
                                                            aria-controls="finance"><img className="me-2 d-dark-none"
                                                                src="./img/icons/dollar-alt.svg"
                                                                alt="" /><img className="me-2 d-light-none"
                                                                src="./img/icons/dollar-alt_dark.svg"
                                                                alt="" /><span className="fs-sm-7">Finance</span></button>
                                                    </h5>
                                                    <div className="accordion-collapse collapse" id="finance"
                                                        data-bs-parent="#previewAccordion">
                                                        <div className="mt-4"><a
                                                                className="fs-9 fw-semibold mb-2 d-inline-block"
                                                                href="#!">Edit finance</a>
                                                            <h5 className="fw-bolder mb-3">Payment from PBM</h5>
                                                            <div className="scrollbar">
                                                                <table className="w-100">
                                                                    <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Payment currency</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">US
                                                                                Dollar</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Payment method</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">
                                                                                Electronic Funds Transfer (EFT)</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Received payment</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Credit
                                                                                Card</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Card type</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Visa
                                                                                Debit Card</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Card number</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">123 456
                                                                                7890</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Card holder name</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Phoenix
                                                                                Oasis </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Commission Percentage</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Flat 10%
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Invoice email</h5>
                                                                        </td>
                                                                        <td className="border-top px-3 pt-3 w-max-content">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">
                                                                                Not-Available</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <h5 className="fw-bolder mb-3 mt-4">Payment from Guests (On
                                                                property)</h5>
                                                            <div className="scrollbar">
                                                                <table className="w-100">
                                                                    <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Cash payment</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Card Payment</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                MFS / Online Payment</h5>
                                                                        </td>
                                                                        <td className="border-top px-3 pt-3 w-max-content">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="accordion-item border rounded-3 bg-body-emphasis p-3 p-sm-4 mb-5">
                                                    <h5 className="accordion-header"><button
                                                            className="accordion-button py-0 text-body-highlight collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#policy" aria-expanded="true"
                                                            aria-controls="policy"><img className="me-2 d-dark-none"
                                                                src="./img/icons/file-check-alt.svg"
                                                                alt="" /><img className="me-2 d-light-none"
                                                                src="./img/icons/file-check-alt_dark.svg"
                                                                alt="" /><span className="fs-sm-7">Policy</span></button>
                                                    </h5>
                                                    <div className="accordion-collapse collapse" id="policy"
                                                        data-bs-parent="#previewAccordion">
                                                        <div className="mt-4"><a
                                                                className="fs-9 fw-semibold mb-2 d-inline-block"
                                                                href="#!">Edit policies</a>
                                                            <h5 className="mb-3 fw-bolder">Check-in-Policy</h5>
                                                            <div className="scrollbar">
                                                                <table className="w-100">
                                                                    <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Check-in type</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Limited
                                                                                Check-in</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Check-in start</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">09:00 AM
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Age Restriction</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Deposit at Check-in</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Documentation at Check-in</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Late check-in</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Flat 10%
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Check-in end</h5>
                                                                        </td>
                                                                        <td className="border-top px-3 pt-3 w-max-content">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">12:00 PM
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <h5 className="mb-3 fw-bolder mt-4">Checkout Policy</h5>
                                                            <div className="scrollbar">
                                                                <table className="w-100">
                                                                    <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Checkout before</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">11:00 AM
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Flexible Checkout</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">
                                                                                Available</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Type</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Amount
                                                                                per night</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Amount</h5>
                                                                        </td>
                                                                        <td className="border-top px-3 pt-3 w-max-content">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">$100.00
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <h5 className="mb-3 fw-bolder mt-4">Cancellation Policy</h5>
                                                            <div className="scrollbar">
                                                                <table className="w-100">
                                                                    <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Type</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Optimal
                                                                                refund</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Full refund</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Partial refund</h5>
                                                                        </td>
                                                                        <td className="border-top px-3 pt-3 w-max-content">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <h5 className="mb-3 fw-bolder mt-4">Pet Policy</h5>
                                                            <div className="scrollbar">
                                                                <table className="w-100">
                                                                    <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Type</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Allowed
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Pet Restricted Zones</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">
                                                                                Not-Available</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Additional Charges</h5>
                                                                        </td>
                                                                        <td className="border-top px-3 pt-3 w-max-content">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <h5 className="mb-3 fw-bolder mt-4">Child Policy</h5>
                                                            <div className="scrollbar">
                                                                <table className="w-100">
                                                                    <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Age Segment 1</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">0 - 7
                                                                                Years</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Age Segment 2</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">7 -12
                                                                                Years</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Age Segment 3</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">12 -18
                                                                                Years</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Documentation Requirement</h5>
                                                                        </td>
                                                                        <td className="border-top px-3 pt-3 w-max-content">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">
                                                                                Not-Available</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <h5 className="mb-3 fw-bolder mt-4">Included Taxes in your rate
                                                            </h5>
                                                            <div className="scrollbar">
                                                                <table className="w-100">
                                                                    <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Vat</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">
                                                                                Available</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Type</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Amount
                                                                                per night</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Amount</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">$100.00
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Deposit at Check-in</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                GST</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Hotel tax</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                City / District tax</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Tourist tax</h5>
                                                                        </td>
                                                                        <td className="border-top px-3 pt-3 w-max-content">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">No</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                            <h5 className="mb-3 fw-bolder mt-4">Your Documentations</h5>
                                                            <div className="scrollbar">
                                                                <table className="w-100">
                                                                    <tr>
                                                                    <th style={{width: "176px"}}></th>
                                                                    <th style={{width: "32px"}}></th>
                                                                        <th></th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Property Registration No.</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Null</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap  pb-3">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Business Registration No.</h5>
                                                                        </td>
                                                                        <td
                                                                            className="border-top px-3 pt-3 w-max-content  pb-3">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  pb-3 text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Null</p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="border-top pt-3 text-nowrap">
                                                                            <h5
                                                                                className="fw-semibold text-body-highlight mb-0">
                                                                                Taxpayer Identification No.</h5>
                                                                        </td>
                                                                        <td className="border-top px-3 pt-3 w-max-content">
                                                                            <p className="mb-0 w-max-content">:</p>
                                                                        </td>
                                                                        <td className="border-top pt-3  text-nowrap">
                                                                            <p className="mb-0 text-body-secondary">Null</p>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6"><button className="btn btn-primary px-6 px-sm-11"
                                                    type="submit">Done</button></div>
                                        </div>
                                    </div>
                                    <div className="mt-6" data-wizard-footer="data-wizard-footer">
                                        <div className="d-none" data-wizard-prev-btn="data-wizard-prev-btn"></div><button
                                            className="btn btn-primary px-6 px-sm-11" type="submit"
                                            data-wizard-next-btn="data-wizard-next-btn">Next</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}

export default Tab1
