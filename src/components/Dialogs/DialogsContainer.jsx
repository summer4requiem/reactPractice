import Dialogs from './Dialogs';
import { addNewMessageCreater, updateNewMessageCreater } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: () => { dispatch(addNewMessageCreater()); },
    addMessage: (newMessage) => { dispatch(updateNewMessageCreater(newMessage)); }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

