class BasePage {
  constructor(props = {}) {
    this.props = props;
    this.navigate = props.navigate;
    this.nodeTest = props.nodeTest;
  }

  template() {
    throw new Error('Unimplemented template');
  }

  pageWillLoad() {
  }

  pageDidLoad() {
  }

  faceButtonEvent() {
  }
}

module.exports = BasePage;
