import './index.css'

export default function OrderItem({ Icon, Name, Quantity, Price}) {
    return(
    <div className='flex items-center justify-between w-80'>
        <div className="flex items-center gap-5">
            <div className="text-[#344E41] text-lg">
                {Icon}
            </div>

            <div className="flex flex-col justify-center">
                <p className='font-bold'>{Name}</p>
                <p>Qty: {Quantity}</p>
            </div>
        </div>

        <div>
            <p className='font-bold'>₦{Price.toLocaleString("en-NG")}</p>
        </div>
    </div>
    )
}