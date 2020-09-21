import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";


const mapStateToProps = (state)=>{
    return {
        dialogs: state.sidebarPage.dialogs,
    }
}

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;