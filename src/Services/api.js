import { API_KEY, API_URL } from "../config/api_config";

export async function makeRequest(path, query = null ) {

  if( query !== null ){
    API_URL += path+"?api_key="+API_KEY+"&query="+query;
  }else{
    API_URL += path+"?api_key="+API_KEY;
  }
  let result = {};
  let options = {
      method: "GET" ,
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      }
  } ;
  await fetch(API_URL,  options )
      .then(response => response.json())
      .then(resData => {
          result = resData
      })
      .catch(  ( error ) => function(){
          console.error('Error:', error);
          return error;
      });

  return result
}
