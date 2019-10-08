/**
 * @file Defining Redux actions.
 */

/**
 * The possible action types.
 * @member SET_EXAMPLE
 */

export const ActionTypes = {
  SET_EXAMPLE: "SET_EXAMPLE"
};

/**
 * An example action.
 * @param example the example value.
 * @return the action containing the example value.
 */
export const setExample = example => ({
  type: ActionTypes.SET_EXAMPLE,
  value: example
});
