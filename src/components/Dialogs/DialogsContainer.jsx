import Dialogs from './Dialogs';
import { addNewMessageCreater, updateNewMessageСreator } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => { dispatch(addNewMessageCreater()); },
    updateMessage: (newMessage) => { dispatch(updateNewMessageСreator(newMessage)); }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

