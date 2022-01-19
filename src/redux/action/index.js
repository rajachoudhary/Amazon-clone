export const addItem = prod => {
    return {
      type: "ADDITEM",
      payload: prod,
    }
  }
  export const delItem = prod => {
    return {
      type: "DELITEM",
      payload: prod,
    }
  }