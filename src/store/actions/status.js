export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';

export const setLoading = booleanValue => dispatch => {
  dispatch({ type: SET_LOADING, payload: booleanValue });
}

export const setError = errorString => dispatch => {
  dispatch({ type: SET_ERROR, payload: errorString });
}
