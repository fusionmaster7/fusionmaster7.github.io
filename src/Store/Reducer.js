const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE":
      return { ...state, view: payload.view };

    default:
      return { ...state };
  }
};

export default Reducer;
