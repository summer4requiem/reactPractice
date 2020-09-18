import React from "react";
import Navigation from "../Navigation/Navigation";
import StoreContext from '../../StoreContext';

const NavigationContainer = (props) => {
    // let store = props.store.getState();
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState();
                return <Navigation dialogs={state.sidebarPage.dialogs} />
            }}
            </StoreContext.Consumer>
    )
}

export default NavigationContainer;