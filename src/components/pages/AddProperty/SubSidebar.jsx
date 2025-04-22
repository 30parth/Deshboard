import React from 'react'
import Steper from './layout/steper'

const SubSidebar = () => {

    const steperData = [
        {
            "title": "Info",
            "link": "#add-property-wizard-tab1",
            "img": "fa-solid fa-file nav-item-icon",
        },
        {
            "title": "Location",
            "link": "#add-property-wizard-tab2",
            "img": "fa-solid fa-location-dot nav-item-icon",
        },
        {
            "title": "Amenities",
            "link": "#add-property-wizard-tab3",
            "img": "fa-solid fa-mug-saucer nav-item-icon",
        },
        {
            "title": "Photos",
            "link": "#add-property-wizard-tab4",
            "img": "fa-solid fa-images nav-item-icon",
        },
        {
            "title": "Finance",
            "link": "#add-property-wizard-tab5",
            "img": "fa-solid fa-usd nav-item-icon",
        },
        {
            "title": "Policies",
            "link": "#add-property-wizard-tab6",
            "img": "fa-solid fa-shield-halved nav-item-icon",
        },
        {
            "title": "Done",
            "link": "#add-property-wizard-tab7",
            "img": "fas fa-check",
        }]
    return (
        <>
            <div className="col-xl-4 order-xl-1">
                <div className="scrollbar mb-4">
                    <ul className="nav justify-content-between flex-nowrap nav-wizard nav-wizard-vertical-xl"
                        data-tab-map-container="data-tab-map-container">
                            {
                                steperData.map((data,key ) => (
                                            <Steper key={key} img={data.img} title={data.title} link={data.link}/>
                                        ))
                            }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SubSidebar