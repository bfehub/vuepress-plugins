import { CodeUserConfig } from '../../shared'

export const parseNodeAttrs = (
  config: CodeUserConfig,
  attrs: Record<string, any>
) => {
  Object.keys(config).forEach((key) => {
    attrs[key] = JSON.stringify(config[key])
  })

  Object.keys(attrs).forEach((key) => {
    if (attrs[key] === 'true') {
      attrs[key] = ''
    }

    if (attrs[key] === 'false') {
      delete attrs[key]
    }
  })

  return attrs
}
