
import type { MenuItem as MenuType } from "../types"

type MenuItemProps = {
    item:MenuType,
    addItem: (item:MenuType) => void

}

export const MenuItem = ({item, addItem}:MenuItemProps) => {
  return (
    <button
        className="border-2 border-teal-300 w-full p-3 flex justify-between hover:bg-teal-200"
        onClick={()=>addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-black">${item.price}</p>
    </button>
  )
}
