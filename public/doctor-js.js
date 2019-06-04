  
function check(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    axios.post('/../auth', {
    email: email ,
    password : password 
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
   }
   function newone(val){
      location.href = val ;
   }
