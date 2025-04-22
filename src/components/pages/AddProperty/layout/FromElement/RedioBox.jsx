import React from 'react'

const RedioBox = ({title}) => {
    return (
        <div>
            <div className="form-price-tier border  p-3 rounded-2 my-3" data-form-price-tier="data-form-price-tier">
                <div className="d-sm-flex align-items-center gap-3">
                    <div className="form-check form-switch mb-0">
                        <input className="form-check-input" id="wifi" type="checkbox" data-price-toggle="data-price-toggle" />
                        <label className="form-check-label fs-8 fw-bold text-body ms-2" htmlFor="wifi">{title}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RedioBox
