let mediumConfig = { display: 'none', opacity: '0', height: '0px', width: '0px' }
export function setMedium<medium>(medium: any, requestUrl: string): medium {
  Object.keys(mediumConfig).forEach((k: any) => {
    ;(medium as any).style[k] = (mediumConfig as any)[k]
  })
  medium.src = requestUrl
  return medium
}

export function createCb<T>(cb: T): string {
  return ''
}
export type medium = HTMLIFrameElement
