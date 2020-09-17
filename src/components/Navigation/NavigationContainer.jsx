import React from "react";
import Navigation from "../Navigation/Navigation";

const NavigationContainer = (props) => {
    let store = props.store.getState();
    return (
        <Navigation  store = {store.sidebarPage} />
    )
}

export default NavigationContainer;