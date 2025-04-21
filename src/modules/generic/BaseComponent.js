class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Нельзя создать экземпляр класса BaseComponent')
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) =>{
        return target[prop]
      },
      set: (target, prop, newValue) =>{
        const oldValue = target[prop]

        target[prop] = newValue

        if (oldValue !== newValue) {
          this.updateUI()
        }
        return true
      },
    })
  }

  // перерисовка UI в ответ на изменение состояния
  updateUI() {
    throw new Error('необходимо переопределить метод updateUI()')
  }
}

export default BaseComponent
