import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

let Requests = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="songTitle">Song Title:&nbsp;</label>
        <Field
          component={TextField}
          name="songTitle"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="gameTitle">Game Title&nbsp;</label>
        <Field
          component={TextField}
          name="gameTitle"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="composerName">Artist/Composer:&nbsp;</label>
        <Field
          component={TextField}
          name="composerName"
          type="text"
          placeholder="Optional"
        />
      </div>
      <div>
        <label htmlFor="linkToOriginal">Link To Original:&nbsp;</label>
        <Field
          component={TextField}
          name="linkToOriginal"
          type="text"
          placeholder="Optional"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Requests = reduxForm({
  // a unique name for the form
  form: 'Requests'
})(Requests)