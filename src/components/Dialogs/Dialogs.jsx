import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem'
import MessageItem from './MessageItem'
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLength100 } from '../../utils/validation/utils';
import { Textarea } from '../FormsControls/formsControls';

const DialogForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field validate={[requiredField, maxLength100]} className={s.dialogsSendTextarea} name="message" component={Textarea} placeholder={'Enter your message'} />
      <button className={s.dialogsSendBtn}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -22 512 511"><path d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" /></svg></button>
    </form>
  )
}

const DialogReduxForm = reduxForm({ form: `dialog` })(DialogForm);

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  let messageElements = props.dialogsPage.messages.map(m => <MessageItem key={m.id} message={m.message} />);

  let addNewMessage = (values) => {
    props.addMessage(values.message);
  }
  return (
    <section className={s.dialogs}>
      <div className={s.dialogsNames}>
        <ul className={s.dialogsList}>
          {dialogsElements}
        </ul>
      </div>
      <div className={s.dialogsMessages}>
        <ul className={s.messagesList}>
          {messageElements}
        </ul>
        <div className={s.dialogsSend}>
          <DialogReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </section>
  )
};

export default Dialogs;