import { CodeUserConfig } from '../../shared/index.js'

export const parseNodeAttrs = (
  config: CodeUserConfig,
  attrs: Record<string, any>
) => {
  Object.keys(config).forEach((key) => {
    if (typeof config[key] === 'string') {
      attrs[key] = config[key]
    } else {
      attrs[key] = JSON.stringify(config[key])
    }
  })

  Object.keys(attrs).forEach((key) => {
    if (key.startsWith('demoUrl')) {
      if (!attrs[key].startsWith('http') && config.baseDemoUrl) {
        attrs[key] = config.baseDemoUrl + attrs[key]
      }
    }

    if (attrs[key] === 'true') {
      attrs[key] = ''
    }

    if (attrs[key] === 'false') {
      delete attrs[key]
    }
  })

  return attrs
}
