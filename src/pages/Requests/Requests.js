import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Requests = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="songTitle">Song Title</label>
        <Field
          component="input"
          name="songTitle"
          type="text"
          required
        />
      </div>
      <div>
        <label htmlFor="composerName">Song Artist/Composer</label>
        <Field
          component="input"
          name="composerName"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="songLink">Song Link</label>
        <Field
          component="input"
          name="songLink"
          type="text"
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