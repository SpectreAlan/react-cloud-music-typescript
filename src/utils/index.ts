export function getName(list: any[], type: string = 'name'): string {
  const arr: string[] = []
  list.map(item => arr.push(item[type]))
  return arr.join(' / ')
}

export function getCount(count: number): any {
  if (count < 0) {
    return
  }
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

export const formatDuration = (t: number): string => {
  t = t / 1000
  let hours = parseInt(String(t / 3600))
  t = t % 3600
  const minutes = parseInt(String(t / 60))
  const seconds = parseInt(String(t % 60))
  const sec = hours < 10 ? '0' + hours : hours
  const minStr = minutes < 10 ? '0' + minutes : minutes
  const hourStr = seconds < 10 ? '0' + seconds : seconds
  return sec + ':' + minStr + ':' + hourStr
}

export const formatTime = (t: number): string => {
  const time = new Date(t)
  const y = time.getFullYear()
  const M = time.getMonth()
  const d = time.getDay()
  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()
  return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s
}

export const getPlayUrl = (id: number): string => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
