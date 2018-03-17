
export const changeCurrentPrice = (dispatch) => (price) => {
  dispatch({
    type: 'changeCurrentPrice',
    price
  });
};

export const addChartData = (dispatch) => (price,date) => {
  dispatch({
    type: 'addChartData',
    price,
    date
  });
};

export const changeCurrency = (dispatch) => (currency) => {
  dispatch({
    type: 'changeCurrency',
    currency,
  });
};
