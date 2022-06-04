import { profileCodec } from '@/core/types/profile'
import { tagCodec } from '@/core/types/tag'
import * as t from 'io-ts'
import { slugCodec, dateCodec, positiveCodec } from '@/core/types/scalar'

export const articleCodec = t.type({
  slug: t.string,
  title: slugCodec,
  description: t.string,
  body: t.string,
  taglist: t.array(tagCodec),
  createdAt: dateCodec,
  updatedAt: dateCodec,
  favorited: t.boolean,
  favoritesCount: positiveCodec,
  author: profileCodec,
})

export type Article = t.TypeOf<typeof articleCodec>

export const articlesCodec = t.type({
  articles: t.array(articleCodec),
  articlesCount: positiveCodec,
})

export type Articles = t.TypeOf<typeof articlesCodec>
