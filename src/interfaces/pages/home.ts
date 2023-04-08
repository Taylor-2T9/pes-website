import type { NextRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { DataCollections } from '../api/data'

export interface Query extends ParsedUrlQuery {
    tab?: keyof DataCollections
}
export interface Router extends NextRouter {
    query: Query
}
