import { TagsActionTypes } from "./tagsActionTypes";
export interface IGetTagsState {
  isLoggedIn: boolean
  data: IGetTags | null
}
export interface IGetTags {
  tags: string[]
}
export interface IGetTagsAction {
  type: TagsActionTypes.GET_TAGS
}
export interface IgetTagsSuccessAction {
  type: TagsActionTypes.GET_TAGS_SUCCESS,
  tags: IGetTags
}
export interface IgetTagsFAilureAction {
  type: TagsActionTypes.GET_TAGS_FAILURE
}

export type Action = IGetTagsAction | IgetTagsSuccessAction | IgetTagsFAilureAction


