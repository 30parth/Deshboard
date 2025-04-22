import React from 'react'
import RedioBox from './FromElement/RedioBox'
const DropBox = ({title,ListAmenities,idName}) => {
  return (
    <>
        <div className="accordion-item py-3">
            <h5 className="accordion-header">
              <button className="accordion-button py-0 " type="button" data-bs-toggle="collapse" data-bs-target={`#${idName}`} aria-expanded="true" aria-controls="popularAmenities">
                <span className="circle-icon-item border border-primary text-primary me-3">
                  <span className="fa-solid fa-fire"></span>
                </span>
                <span className="flex-1">{title}</span>
              </button>
            </h5>
            <div className="accordion-collapse collapse ms-md-9 show" id={idName} data-bs-parent="#generalAmenitiesAccordion">
                {ListAmenities.map((data ,key ) => (
                    <RedioBox title={data.name} key={key}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default DropBox