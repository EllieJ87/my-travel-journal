import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default function Section(props) {
    return (
        <section className="main-section">
            <div className="row">
                <div className="col-lg-4 col-md-6 location-img">
                    <img src={`./Travel-Journal-images/${props.imageUrl}`} alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-8 col-md-6">
                    <div className="placement-location">
                        <FontAwesomeIcon icon={faLocationDot} className="location-dot" />
                        <p className="loaction-name">{props.location}</p>
                        <a href={props.googleMapsUrl} target='_blank ' className="location-google">View on Google Maps</a>
                    </div>
                    <div className="placement-info">
                        <h3 className="placement-name">{props.place}</h3>
                        <p className="placement-dates">{props.dates.startDate} - {props.dates.endDate}</p>
                        <p className="placement-description">{props.desciption}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}