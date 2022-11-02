import React from 'react'
import './Buynowbar.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
const Buynowbar = () => {
  return (
    <div className='buynowbaritem'>
        <div className='baritem'>
            <ShoppingCartOutlinedIcon/>
            <div className='processtitle'>1.My Cart</div>
        </div>
        <div className='baritem'>
            <DeliveryDiningOutlinedIcon/>
            <div className='processtitle'>2.Delivery Info</div>
        </div>
        <div className='baritem'>
            <PaymentOutlinedIcon/>
            <div className='processtitle'>3.Payment</div>
        </div>
        <div className='baritem'>
            <CheckCircleOutlineRoundedIcon/>
            <div className='processtitle'>4.Confirmation</div>
        </div>

    </div>
  )
}

export default Buynowbar