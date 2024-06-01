export function getCurrentDirName(url: string) {
  return new URL(url).pathname.split('/').at(-2)
}
