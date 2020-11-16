export async function makeRequest(path, query = null ) {
  let API_URL = "https://api.themoviedb.org/3/";
  let API_KEY = "a37390fb133bab79c2baae2b65e0b256";

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
