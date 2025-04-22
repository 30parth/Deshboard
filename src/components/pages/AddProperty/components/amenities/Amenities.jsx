import React from 'react'
import RedioBox from '../../layout/FromElement/RedioBox';
import InputText from '../../layout/FromElement/InputText';
import DropBox from '../../layout/DropBox';

const Amenities = () => {

  const popularAmenities = [
    {
      "name": "Wifi"
    },
    {
      "name": "Gym"
    },
    {
      "name": "Swimming pool"
    },
    {
      "name": "In-room coffee/tea"
    },
    {
      "name": "Daily housekeeping"
    },
    {
      "name": "Bar / Lounge"
    },
    {
      "name": "Laundry"
    },
    {
      "name": "Newspaper"
    },
    {
      "name": "Bicycle"
    },
    {
      "name": "Air conditioning"
    },
    {
      "name": "Games room"
    },
    {
      "name": "Beach view"
    },
  ]
  const food = [
    {
      "name": "Restaurants"
    },
    {
      "name": "Bars"
    },
    {
      "name": "In-Room Dining"
    },
    {
      "name": "Family-Friendly Dining"
    },
    {
      "name": "Breakfast Buffet"
    },
  ]
  const outdoor = [
    {
      "name": "Garden or Courtyard"
    },
    {
      "name": "Scenic Views"
    },
    {
      "name": "Sunbathing Areas"
    },
    {
      "name": "Outdoor Lounge Areas"
    },
  ]
  const Entertainment = [
    {
      "name": "Game Room"
    },
    {
      "name": "Children's Play Area"
    },
    {
      "name": "Sports Facilities"
    },
    {
      "name": "Babysitting Services"
    },
  ]
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
                <InputText labelName={"Search amenities"} type={"text"} />
              </div>
              <div className="col-sm-auto">
                <button className="btn btn-phoenix-primary w-100 h-100 fs-8">
                  <span className="fa-solid fa-plus me-2"></span>Add amenity
                </button>
              </div>
            </div>
          </div>
          <div className="accordion-button-arrow-icon accordion mt-2" id="generalAmenitiesAccordion">
            <DropBox title={"Popular amenities"} ListAmenities={popularAmenities} idName={"popular"} />
            <DropBox title={"Food & Drink"} ListAmenities={food} idName={"food"} />
            <DropBox title={"OutDoor & View"} ListAmenities={outdoor} idName={"outdoor"} />
            <DropBox title={"Entertainment & Family Services"} ListAmenities={Entertainment} idName={"entertainment"} />
          </div>
        </form>
      </div>
    </>
  )
}

export default Amenities
