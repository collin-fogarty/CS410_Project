export const useGetUserInfo = () => {
      //const {name, profilePhoto, userID, isAuth} = JSON.parse(localStorage.getItem("auth"));
 //   return {name, profilePhoto, userID, isAuth};
//};

try {
    let parsedData = JSON.parse(localStorage.getItem("auth"));
    console.log(parsedData);
    if (parsedData === null){
        console.log('Parsed JSON is null.');
        return { isAuth:false}
      
    }else {
        const {name, profilePhoto, userID, isAuth} = parsedData;
       
        return {name, profilePhoto, userID, isAuth}
    }

} catch (error){
    console.error('Error parsing JSON:', error.message)
}
};