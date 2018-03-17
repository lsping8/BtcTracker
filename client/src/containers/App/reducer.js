
const initialState = {
  currentPrice: 0,
  chartData: [],
  chartLabel:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'changeCurrentPrice':
      return {
        ...state,
        currentPrice: action.price
      };
    case 'addChartData':
      state.chartData.push(action.price)
      state.chartLabel.push(action.date)
      return {...state};
    default:
      return state;
  }
};
