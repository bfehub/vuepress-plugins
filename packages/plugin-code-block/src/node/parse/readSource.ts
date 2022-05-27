import { fs, path, warn } from '@vuepress/utils'
import { highlight, scanImports, resolve } from '../utils'
import type { CodeSource } from '../../shared'

export const readSource = (
  filePath: string,
  scanImport = false
): CodeSource[] => {
  const sources: CodeSource[] = []

  const source = readFileSource(filePath)
  sources.push(source)

  if (scanImport) {
    parseImports(source.rawCode, path.dirname(filePath), sources)
  }

  return sources
}

export const parseImports = (
  rawCode: string,
  dirPath: string,
  sources: CodeSource[]
) => {
  const imports = scanImports(rawCode)

  for (const mod of imports) {
    if (mod.startsWith('.')) {
      const filePath = resolve(dirPath, mod)
      if (filePath) {
        sources.push(readFileSource(filePath))
      }
    }
  }
}

export const readFileSource = (filePath: string): CodeSource => {
  let code = ''
  const name = path.basename(filePath)

  if (fs.existsSync(filePath)) {
    code = fs.readFileSync(filePath, 'utf-8')
  } else {
    warn('not exists path:' + path)
  }

  return {
    name,
    rawCode: code,
    highlightCode: highlight(code, path.extname(name).slice(1)),
  }
}
