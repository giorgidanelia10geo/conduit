import { IAuthState } from "../../redux/auth/types"
import { IFeedState } from "../../redux/feed/types"
import { IGetTagsState } from "../../redux/tags/types"

export interface IRootState {
  user: IAuthState
  feed: IFeedState
  tags: IGetTagsState
}