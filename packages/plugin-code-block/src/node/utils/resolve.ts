import { fs, path } from '@vuepress/utils'

const extensions = ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']

export const resolve = (...paths: string[]): string | null => {
  const filepath = path.resolve(...paths)

  if (tryResolveFile(filepath)) {
    return filepath
  }

  if (tryResolveDirectory(filepath)) {
    for (const ext of extensions) {
      const findpath = filepath + '/index' + ext
      if (tryResolveFile(findpath)) {
        return findpath
      }
    }
  } else {
    for (const ext of extensions) {
      const findpath = filepath + ext
      if (tryResolveFile(findpath)) {
        return findpath
      }
    }
  }

  return null
}

function tryResolveFile(file: string): boolean {
  try {
    const res = fs.statSync(file)
    return res.isFile()
  } catch (error) {
    return false
  }
}

function tryResolveDirectory(file: string): boolean {
  try {
    const res = fs.statSync(file)
    return res.isDirectory()
  } catch (error) {
    return false
  }
}
