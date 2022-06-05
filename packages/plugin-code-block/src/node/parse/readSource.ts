import { fs, path, warn } from '@vuepress/utils'
import { highlight, scanImports, resolve } from '../utils'
import type { CodeSource } from '../../shared'

export const readSource = (
  filePath: string,
  scanImport?: boolean,
  noLineNumbers?: boolean
): CodeSource[] => {
  const sources: CodeSource[] = []

  const source = readFileSource(filePath, noLineNumbers)
  sources.push(source)

  if (scanImport) {
    parseImports(source.rawCode, path.dirname(filePath), sources, noLineNumbers)
  }

  return sources
}

export const parseImports = (
  rawCode: string,
  dirPath: string,
  sources: CodeSource[],
  noLineNumbers: boolean
) => {
  const imports = scanImports(rawCode)

  for (const mod of imports) {
    if (mod.startsWith('.')) {
      const filePath = resolve(dirPath, mod)
      if (filePath) {
        sources.push(readFileSource(filePath, noLineNumbers))
      }
    }
  }
}

export const readFileSource = (
  filePath: string,
  noLineNumbers: boolean
): CodeSource => {
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
    highlightCode: highlight(code, path.extname(name).slice(1), noLineNumbers),
  }
}
