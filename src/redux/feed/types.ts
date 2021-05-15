import { IArticle } from "../../shared/types/article.interface"
import { FeedActionTypes } from "./feedActionTypes"

export interface IFeedState {
  isLoading: boolean
  error: string | null
  data: IGetFeedResponse | null
}
export interface IGetFeedResponse {
  articles: IArticle[]
  articlesCount: number
}
export interface ITotalCount {
  type: FeedActionTypes.GET_FEED_SUCCESS,
  articlesCount: IGetFeedResponse
}
export interface IGetFeedAction {
  type: FeedActionTypes.GET_FEED
}
export interface IGetFeedSuccessAction {
  type: FeedActionTypes.GET_FEED_SUCCESS
  feed: IGetFeedResponse 
}
export interface IFeedFailureAction{
  type: FeedActionTypes.GET_FEED_FAILURE
}
export type Action = |
  IGetFeedSuccessAction |
  IFeedFailureAction |
  IGetFeedAction 

