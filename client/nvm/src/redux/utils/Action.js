 import * as t from './Type'


 export const ChangeTheme = (data)=>{
     return {
         type:t.changetheme,
         payload:data
     }
 }
 export const getPrice = (data)=>{
     return {
         type:t.getPrice,
         payload:data
     }
 }