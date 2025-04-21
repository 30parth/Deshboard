import React from 'react'

const Photos = () => {
    return (
        <>
            <div className="tab-pane" role="tabpanel" aria-labelledby="add-property-wizard-tab4"
                id="add-property-wizard-tab4">
                <form id="addPropertyWizardForm4" noValidate="novalidate"
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
                                style={{ height: "140px", width: "200px" }}><img
                                    className="w-100 h-100 object-fit-cover"
                                    src="./img/products/23.png" alt="..."
                                    data-dz-thumbnail="data-dz-thumbnail" /><button
                                        className="btn dropdown-toggle dropdown-caret-none px-3 text-body bg-body dz-remove w-auto h-auto py-0 border"
                                        type="button" data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ top: "16px", right: "16px" }}><span
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
        </>
    )
}

export default Photos
