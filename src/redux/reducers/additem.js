import { loadData, saveData } from "../../utils/localstorage"

let addItem = loadData("addItem") || []
const addItems = (state = addItem, { type, payload }) => {
  switch (type) {
    case "ADDITEM":
      addItem.push(payload)

      saveData("addItem", addItem)
      return [...state, payload]

    case "DELITEM":
      const removedItem = addItem.filter(a => {
        return a.id != payload.id
      })
      addItem = removedItem
      saveData("addItem", removedItem)
      return (state = state.filter(a => {
        return a.id != payload.id
      }))

    default:
      return state
  }
}
export default addItems
