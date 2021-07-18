 import * as t from './Type'


 export const ChangeTheme = (data)=>{
     return {
         type:t.changetheme,
         payload:data
     }
 }