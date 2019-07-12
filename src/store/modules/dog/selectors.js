import * as R from "ramda";

export const isFetching = R.pathOr(false, ['dog', "fetching"]);
export const isError = R.pathOr(false, ['dog', "error"]);
export const getDog = R.pathOr(false, ['dog', "url"]);
