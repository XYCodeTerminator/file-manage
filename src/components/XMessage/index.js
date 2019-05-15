import Message from './XMessage'

const XMessage = {
  install (Vue) {
    
    Vue.prototype.$XMessage = ({type, content, hasClose, duration=1500}) => {
      const MessageConstructor = Vue.extend(Message)
      let messageInstance = new MessageConstructor()
      document.body.appendChild(messageInstance.$mount().$el)
      const message = messageInstance.message
      messageInstance.message = {...message, type, content, hasClose}
      messageInstance.message.isVisible = true
      setTimeout(() => {
        messageInstance.message.isVisible = false
        document.body.removeChild(messageInstance.$el)
        messageInstance.$destroy()
      }, duration)
    }
  }
}

export default XMessage