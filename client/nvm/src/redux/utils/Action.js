 import * as t from './Type'


 export const ChangeTheme = (data)=>{
     return {
         type:t.changetheme,
         payload:data
     }
 }
 export const getPrice = (data)=>{
    //  console.log('dispatch',data)
     return {
         type:t.getPrice,
         payload:data?.market_data?.current_price.usd
     }
 }