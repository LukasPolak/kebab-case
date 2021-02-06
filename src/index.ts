export const kebabCase = (string: string): string => {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '-')
    .replace(/[-]{2,}/, '-')
    .replace(/[-]+$/, '')
    .toLowerCase()
}
