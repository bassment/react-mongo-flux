import ServerActions from '../actions/ServerActions';

const API = {
  fetchLinks() {
    fetch('/api/links').then(res => {
      res.json().then(data => {
        ServerActions.receiveLinks(data);
      });
    });
  }
};

export default API;
