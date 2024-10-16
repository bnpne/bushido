import {useMemo} from 'react'
import {useClient} from 'sanity'

export function useSanityClient() {
  const client = useClient({apiVersion: '2022-05-04'})
  return useMemo(() => client.withConfig({apiVersion: '2022-05-04'}), [client])
}

export const slugify = (input) => {
  return input
    .toString()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[\s+\+]/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .slice(0, 200)
}

export const validateSlug = (Rule) =>
  Rule.custom((slug) => {
    if (!slug) {
      return 'A slug is required. Click “Generate” to generate a valid slug'
    }
    const rule = new RegExp('^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$')
    return rule.test(slug.current)
      ? true
      : 'A slug should only contain lowercase letters and “-”. Click “Generate” to generate a valid slug.'
  })

export const getDurationString = (duration) => {
  const minutes = duration
    ? Math.floor(duration / 60)
        .toString()
        .padStart(2, '0')
    : '00'
  const seconds = duration
    ? Math.floor(duration % 60)
        .toString()
        .padStart(2, '0')
    : '00'
  return duration ? `${minutes}:${seconds}` : ''
}
