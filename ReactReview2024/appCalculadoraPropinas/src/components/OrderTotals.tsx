import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem, MenuItem } from "../types"

type OrderTotalsProps = {
    order:OrderItem[],

}



export const OrderTotals = ({order}:OrderTotalsProps) => {
  


  const subtotalAmount=useMemo(()=>order.reduce((total, item)=>total + (item.quantity * item.price), 0 ), [order]); 

  
    return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p className="">Subtotal a pagar:
                <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
            </p>
            <p className="">Propina:
                <span className="font-bold"> $0</span>
            </p>
            <p className="">Total a Pagar:
                <span className="font-bold"> $0</span>
            </p>
        </div>
        <button>

        </button>
    </>
  )
}
