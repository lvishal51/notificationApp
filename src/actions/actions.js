const getStocks = (stocks) => ({
    type: "GET_STOCKS",
    payload: stocks
});

/* export const updateTestScore = (newData) => ({
    type: "UPDATE_TEST_SCORE",
    payload: newData
});
 */

 export default getStocks;