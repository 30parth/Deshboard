import React from 'react'

const Steper = ({img,title,link}) => {
    return (
        <a className="nav-link  py-0 py-xl-3" href={link} data-bs-toggle="tab" data-wizard-step="">                                        
            <div className="text-center d-inline-block d-xl-flex align-items-center gap-3">
                <span className="nav-item-circle-parent">
                    <span className="nav-item-circle">
                        <span className="fa-solid fa-check check-icon"></span>
                        <span className={img}>
                        </span>
                    </span>
                </span>
                <span className="nav-item-title fs-9 fs-xl-8">{title}</span>
            </div>
        </a>
    )
}
export default Steper
