import { profileCodec } from '@/core/types/profile'
import { tagCodec } from '@/core/types/tag'
import { type, string, number, boolean, TypeOf, array } from 'io-ts'

export const articleCodec = type({
  slug: string,
  title: string,
  description: string,
  body: string,
  taglist: array(tagCodec),
  createdAt: string,
  updatedAt: string,
  favorited: boolean,
  favoritesCount: number,
  author: profileCodec,
})

export type Article = TypeOf<typeof articleCodec>

export const articlesCodec = type({
  articles: array(articleCodec),
  articlesCount: number,
})

export type Articles = TypeOf<typeof articlesCodec>
