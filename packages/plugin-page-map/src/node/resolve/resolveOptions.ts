import type { PageMapPluginOptions } from '..'

/**
 * Create options with default values
 */
export const resolveOptions = (
  config: Partial<PageMapPluginOptions>
): PageMapPluginOptions => {
  return Object.assign(
    {
      patterns: [
        '../src/**/*.md',
        '../packages/**/*.md',
        '!../src/**/node_modules',
        '!../packages/**/node_modules',
      ],

      pathMapRule(path: string) {
        const paths = path.split('/')
        const len = paths.length

        // /User/project/path/npm-badge/index.md
        // -> components/npm-badge/index.md

        // /User/project/path/npm-badge/index.zh-CN.md
        // -> components/npm-badge/index.zh-CN.md

        // /User/project/path/npm-badge/docs/index.md
        // -> components/npm-badge/index.md

        // /User/project/path/npm-badge/docs/index.zh-CN.md
        // -> components/npm-badge/index.zh-CN.md

        return `components/${
          paths[len - 2] === 'docs' ? paths[len - 3] : paths[len - 2]
        }/${paths[len - 1]}`
      },
    },
    config
  )
}
