import type { CodeBlockPluginOptions } from '..'
import type { CodeLocaleConfig } from '../../shared'

export const DEFAULT_LOCALE_OPTIONS: CodeLocaleConfig = {
  '/': {
    hideText: 'Hide',
    showText: 'Expand',
    copyText: 'Copy',
    copySuccessText: 'Copy Success',
  },
  '/zh/': {
    hideText: '隐藏',
    showText: '显示',
    copyText: '复制',
    copySuccessText: '复制成功',
  },
}

/**
 * Create options with default values
 */
export const resolveOptions = ({
  name = 'demo',
  headers = false,
  config = {},
  locales = {},
}: Partial<CodeBlockPluginOptions>): CodeBlockPluginOptions => {
  if (!locales['/']) {
    locales['/'] = {}
  }

  if (!locales['/zh/']) {
    locales['/zh/'] = {}
  }

  Object.assign(locales['/'], {
    ...DEFAULT_LOCALE_OPTIONS['/'],
    ...locales['/'],
  })

  Object.assign(locales['/zh/'], {
    ...DEFAULT_LOCALE_OPTIONS['/zh/'],
    ...locales['/zh/'],
  })

  return {
    name,
    headers,
    config,
    locales,
  }
}
