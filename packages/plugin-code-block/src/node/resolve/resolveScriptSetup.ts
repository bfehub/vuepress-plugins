import type { Page } from '@vuepress/core'
import type { PageCodeDep, PageCodeDepsHelper } from '../utils'

const scriptRegExp = /<script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/script>/

export const resolveScriptSetup = (page: Page, store: PageCodeDepsHelper) => {
  const deps = store.get(page.filePath!)
  if (!deps.length) return

  let i = 0
  let original = ''
  for (const tag of page.sfcBlocks) {
    if (tag.trim().startsWith('<script')) {
      original = tag.match(scriptRegExp)?.[3] ?? ''
      break
    }

    i++
  }

  page.sfcBlocks[i] = combineScriptSetup(deps, original)
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
