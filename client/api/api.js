import ServerActions from './actions/ServerActions';

const API = {
  fetchLinks() {
    console.log('1. From Api');
    fetch('/api/links').then(res => {
      res.json().then(data => {
        ServerActions.receiveLinks(data);
      });
    });
  }
};

export default API;
