
const initialState = {
  currentPrice: 0,
  chartData: [],
  chartLabel:[],
  currency: 'USD'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'changeCurrentPrice':
      return {
        ...state,
        currentPrice: action.price
      };
    case 'addChartData':
      return {
        ...state,
        chartData: action.price,
        chartLabel: action.date,
      };
    case 'changeCurrency':
      return {
        ...state,
        currency: action.currency
      };
    default:
      return state;
  }
};
