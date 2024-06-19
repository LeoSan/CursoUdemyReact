import { useMemo } from "react"
import { formatCurrency } from "../helpers"
import { OrderItem, MenuItem } from "../types"

type OrderTotalsProps = {
    order:OrderItem[],
    tip:MenuItem['id'],
    placeOrder:() => void
}

export const OrderTotals = ({order, tip, placeOrder}:OrderTotalsProps) => {
  

  const subtotalAmount = useMemo(()=>order.reduce((total, item)=>total + (item.quantity * item.price), 0 ), [order]); 
  const tipAmount      = useMemo(()=>subtotalAmount * tip, [tip, order]);
  const totalAmount    = useMemo(()=>subtotalAmount + tipAmount, [tip, order]);
  
    return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propina:</h2>
            <p className="">Subtotal a pagar:
                <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
            </p>
            <p className="">Propina:
                <span className="font-bold"> {formatCurrency(tipAmount)}</span>
            </p>
            <p className="">Total a Pagar:
                <span className="font-bold"> {formatCurrency(totalAmount)}</span>
            </p>
        </div>
        <button className="w-full bg-black p-3 uppercase text-white mt-10 disabled:opacity-10"
            disabled={totalAmount === 0}
            onClick={placeOrder}
        >
            Guardar Orden
        </button>
    </>
  )
}
