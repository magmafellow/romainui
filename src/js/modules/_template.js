import BaseComponent from '/local/templates/otvet2026/js/modules/base-component.js'

const rootSelector = '[data-js-template]'

class Template extends BaseComponent {
  selectors = {
    root: rootSelector,
  }

  initialState = {}

  constructor(rootElement) {
    super()
    this.rootElement = rootElement

    this.state = this.getProxyState({
      ...this.initialState,
    })

    this.updateUI()
    this.bindEvents()
  }

  updateUI() {}

  bindEvents() {}
}

class TemplateCollection {
  constructor() {
    document.querySelectorAll(rootSelector).forEach(elem => {
      new Template(elem)
    })
  }
}

export default TemplateCollection
