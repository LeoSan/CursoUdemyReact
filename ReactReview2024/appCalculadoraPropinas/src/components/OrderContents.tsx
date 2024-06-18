import { formatCurrency } from "../helpers"
import { OrderItem, MenuItem } from "../types"

type OrderContentsProps = {
    order:OrderItem[],
    removeItem: (id:MenuItem['id']) => void
}

export const OrderContents = ({order, removeItem}:OrderContentsProps) => {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <div className="space-y-3 mt-10">
            {order.length === 0 ? 
                <p className="text-center">La orden esta vacia </p>
            : (
               
                order.map(item =>(
                    <div className="flex justify-between item-center border-t border-gray-200 py-5 last-of-type:border-b" key={item.id}>
                        
                        <div className="">
                            <p className="text-lg">
                                {item.name} - { formatCurrency(item.price) }
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        <div className="">
                            <button 
                                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                                onClick={()=>removeItem(item.id)}
                                >
                                x
                            </button>
                        </div>

                    </div>
                ))
              )
            }

        </div>
    </div>
  )
}
