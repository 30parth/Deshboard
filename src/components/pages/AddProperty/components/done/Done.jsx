import React from 'react'

const Done = () => {
    return (
        <>
            <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab7"
                id="add-property-wizard-tab7">
                <h3 className="mb-2">We’re building your property</h3>
                <p className="mb-5 text-body-tertiary">We're working on getting your property
                    set up and ready for guests. Stay tuned for updates and start accepting
                    bookings soon!</p>
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
                                    <thead>
                                        <tr>
                                            <th style={{ width: "176px" }}></th>
                                            <th style={{ width: "32px" }}></th>
                                            <th style={{ minwidth: "300px" }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>

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
                                    </tbody>
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
                                    <thead>
                                        <tr>
                                            <th style={{ width: "176px" }}></th>
                                            <th style={{ width: "32px" }}></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

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
                                    </tbody>
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
                                    <thead>
                                        <tr>
                                            <th style={{ width: "176px" }}></th>
                                            <th style={{ width: "32px" }}></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
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
                                    </tbody>
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
                                        <thead>
                                            <tr>
                                                <th style={{ width: "176px" }}></th>
                                                <th style={{ width: "32px" }}></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                        </tbody>
                                    </table>
                                </div>
                                <h5 className="fw-bolder mb-3 mt-4">Payment from Guests (On
                                    property)</h5>
                                <div className="scrollbar">
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "176px" }}></th>
                                                <th style={{ width: "32px" }}></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                        </tbody>
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
                                        <thead>
                                            <tr>
                                                <th style={{ width: "176px" }}></th>
                                                <th style={{ width: "32px" }}></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
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
                                        </tbody>
                                    </table>
                                </div>
                                <h5 className="mb-3 fw-bolder mt-4">Checkout Policy</h5>
                                <div className="scrollbar">
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "176px" }}></th>
                                                <th style={{ width: "32px" }}></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                        </tbody>
                                    </table>
                                </div>
                                <h5 className="mb-3 fw-bolder mt-4">Cancellation Policy</h5>
                                <div className="scrollbar">
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "176px" }}></th>
                                                <th style={{ width: "32px" }}></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                        </tbody>
                                    </table>
                                </div>
                                <h5 className="mb-3 fw-bolder mt-4">Pet Policy</h5>
                                <div className="scrollbar">
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "176px" }}></th>
                                                <th style={{ width: "32px" }}></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                        </tbody>
                                    </table>
                                </div>
                                <h5 className="mb-3 fw-bolder mt-4">Child Policy</h5>
                                <div className="scrollbar">
                                    <table className="w-100">
                                        <tr>
                                            <th style={{ width: "176px" }}></th>
                                            <th style={{ width: "32px" }}></th>
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
                                        <thead>
                                            <tr>
                                                <th style={{ width: "176px" }}></th>
                                                <th style={{ width: "32px" }}></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                        </tbody>
                                    </table>
                                </div>
                                <h5 className="mb-3 fw-bolder mt-4">Your Documentations</h5>
                                <div className="scrollbar">
                                    <table className="w-100">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "176px" }}></th>
                                                <th style={{ width: "32px" }}></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6"><button className="btn btn-primary px-6 px-sm-11"
                    type="submit">Done</button></div>
            </div>
        </>
    )
}

export default Done
