import React from 'react';
import ReactDOM from 'react-dom';
import { postNewUser,
        postNewSession,
        deleteSession } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  window.postNewUser = postNewUser;
  window.postNewSession = postNewSession;
  window.deleteSession = deleteSession;

  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
