import Dialogs from './Dialogs';
import { addMessage } from '../../Redux/dialogs-reducer';
import { connect } from 'react-redux';
import { AuthRedirectComponent } from '../HOC/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose(
  connect(mapStateToProps, { addMessage }),
  AuthRedirectComponent,
)(Dialogs);
