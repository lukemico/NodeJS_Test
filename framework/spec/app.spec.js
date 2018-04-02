const App = require('../src/App');
const BasePage = require('../src/BasePage');

describe('App', () => {
  document.body.innerHTML = `
    <div id='nodeTest'></div>
  `;

  let endpoint1 = {};
  let endpoint2 = {};
  let routes = {};
  
  let app;

  class DummyPage extends BasePage {
    template() {
      return '<div>Some page</div>';
    }
  }

  class DummyPage2 extends BasePage {
    template() {
      return `<div>${this.props.message}</div>`;
    }
  }

});


