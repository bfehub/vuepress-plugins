import type { Page } from '@vuepress/core'
import type { PageCodeDep, PageCodeDepsHelper } from '../utils/index.js'

const scriptRegExp = /<script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/script>/

export const resolveScriptSetup = (page: Page, store: PageCodeDepsHelper) => {
  const deps = store.get(page.filePath!)
  if (!deps.length) return

  page.sfcBlocks.scriptSetup ??= {} as any

  let original = page.sfcBlocks.scriptSetup.content || ''
  if (original.trim().startsWith('<script')) {
    original = original.match(scriptRegExp)?.[3] ?? ''
  }

  page.sfcBlocks.scriptSetup.content = combineScriptSetup(deps, original)
}

export const combineScriptSetup = (deps: PageCodeDep[], original: string) => {
  return `\n
<script lang="ts" setup>
  ${deps
    .map(({ compName, compPath }) => `import ${compName} from '${compPath}'`)
    .join('\n')}

  ${original}\n
</script>\n`
}
