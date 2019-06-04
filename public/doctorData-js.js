function addDoc(){
    const name = document.getElementById("name") ;
    const city = document.getElementById("city") ;
    const college = document.getElementById("college") ;
    const age = document.getElementById("age") ;
    const gender = document.getElementById("gender") ;
    const degree = document.getElementById("degree") ;
    const experience = document.getElementById("experience") ;
    const speciality = document.getElementById("speciality") ;
    const clinic = document.getElementById("clinic") ;
    const licenceno = document.getElementById("licenceno") ;
    const description = document.getElementById("description") ;
    const contact = document.getElementById("contact") ;
    const email = document.getElementById("email") ;
    const password = document.getElementById("password") ;
    axios.post('http://localhost:3000/doctors', {
          name : name ,
          city : city ,
          college : college ,
          age : age ,
          gender : gender ,
          degree : degree ,
          experience : experience ,
          speciality : speciality ,
          clinic : clinic ,
          licenceno : licenceno ,
          description : description ,
          contact : contact ,
          email : email ,
          password : password 
      })
      .then(function (response) {
        console.log(response) ;
      })
      .catch(function (error) {
        console.log(error);
      });
}