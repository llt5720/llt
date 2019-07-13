let defultCity = '北京'
try{
     if(localStorage.city){
        defultCity=localStorage.city
     }
}
catch(e){}

export default {  
    city:defultCity
  
}