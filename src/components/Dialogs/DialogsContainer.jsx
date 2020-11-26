import Dialogs from './Dialogs';
import { addNewMessageCreater, updateNewMessageСreator } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';
import  {AuthRedirectComponent}  from '../HOC/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => { dispatch(addNewMessageCreater()); },
    updateMessage: (newMessage) => { dispatch(updateNewMessageСreator(newMessage)); }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirectComponent,
)(Dialogs);
