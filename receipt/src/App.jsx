import './index.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaMouse, FaKeyboard } from "react-icons/fa";
import { MdOutlineUsb, MdHeadphones, MdMonitor } from "react-icons/md";
import OrderItem from './OrderItem';

export default function App() {
  const orders = [
  { 
    id: 1,
    icon: <FaKeyboard />,
    name: "Mechanical Keyboard", 
    qty: 1, 
    price: 50000 
  },
  { 
    id: 2, 
    icon: <MdHeadphones />,
    name: "Headphones", 
    qty: 1, 
    price: 30000 
  },
  { 
    id: 3, 
    icon: <MdOutlineUsb />,
    name: "USB-C hub", 
    qty: 2, 
    price: 14000 
  },
  { 
    id: 4, 
    icon: <FaMouse />,
    name: "Wireless Mouse", 
    qty: 1, 
    price: 12500 
  },
  { 
    id: 5, 
    icon: <MdMonitor />,
    name: "Flat Screen Monitor", 
    qty: 1, 
    price: 20000 
  },
  ];

  const SubTotal = orders.reduce((sum, item) => sum + item.price, 0);
  const Total = SubTotal + 1500;

  return (
    <div className="flex flex-col w-105 gap-2 border-2 border-[#344E41] items-center p-3 rounded-xl bg-[#FDFBD4]">

      <div className='p-2 flex flex-col items-center'>
        <p>Order #0014e2</p>
        <p className='font-bold text-base'>Your order</p>
      </div>


      <div className="border-3 wx-1% border-[#344E41] rounded-md"></div>


      <div className="flex flex-col gap-3 p-1">
        {
          orders.map((item, idx) => (
            <OrderItem
              key={idx}
              Icon={item.icon}
              Name={item.name}
              Quantity={item.qty}
              Price={item.price}
            />
          )) 
        }
      </div>


      <div className="border-3 wx-1% border-[#344E41] rounded-md"></div>


      <div className='p-2 flex flex-col gap-1'>
        <div className="flex justify-between w-60">
          <p>Subtotal</p>
          <p>₦{SubTotal.toLocaleString("en-NG")}
</p>
        </div>

        <div className="flex justify-between">
          <p>Delivery</p>
          <p>₦{1500..toLocaleString("en-NG")}</p>
        </div>

        <div className="border w-100% border-[#344E41]"></div>

        <div className="flex justify-between font-bold p-2">
          <p>Total</p>
          <p>₦{Total.toLocaleString("en-NG")}</p>
        </div>
      </div>

      <div className="border-3 wx-1% border-[#344E41] rounded-md"></div>

      <div className="flex items-center p-2 gap-1">
        <span className='text-base text-[#344E41]'> 
          <FaLocationDot />
        </span>

        Delivery  to

        <span className='font-bold'>
          Port Harcourt, NG
        </span>
      </div>

    </div>
  )
}
