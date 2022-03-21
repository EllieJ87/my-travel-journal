import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    return (
        <nav className="fixed-top nav">
            <FontAwesomeIcon icon={faGlobeEurope} className="faGlobeEurope" />
            <span>My Travel Journal</span>
        </nav>
    )
} 