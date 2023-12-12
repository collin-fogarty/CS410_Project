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

//{"userID":"imnXlkZEVqdsNXY12MvOScHrdTl2","name":"Seth Buchinger","profilePhoto":"https://lh3.googleusercontent.com/a/ACg8ocKFs9wt2xz-xxzvTV3-u1xRodDGCAGAeV6kkuM7jZqvvag=s96-c","isAuth":true}
