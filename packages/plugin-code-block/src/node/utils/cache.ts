const Cache = new Map<string, string>()

export const getCache = (key: string) => {
  Cache.get(key)
}

export const setCache = (key: string, content: any) => {
  Cache.set(key, content)
}

export const isCacheChange = (key: string, content: any) => {
  const oldContent = Cache.get(key)
  return content !== oldContent
}
