import React, { useEffect, useState } from 'react';
const Usersform = () => {
  const [name, setName]=useState("");
  const[nameError, setNameError]=useState(false);
  const[email, setEmail]=useState("");
  const[emailError, setEmailerror]=useState(false)
  const[phonenumber, setPhoneNumber]=useState("");
  const[phoneError, setPhoneError]=useState(false);
  const[password, setPassword]=useState("");
  const [passwordError, setPasswordError]=useState(false)
  const[showForm, SetShowForm]=useState();
  const passwordRegExp ="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"; 
  const Emailregixpattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const NamePattern=/^[A-Za-z]{2,}$/;
  
useEffect(() => {
  
  const userSingUpInfo=JSON.parse(localStorage.getItem("UserInformation"));
  console.log("Check this", userSingUpInfo);
  setName(userSingUpInfo.name);
  setEmail(userSingUpInfo.email);
  setPhoneNumber(userSingUpInfo.phonenumber)
  setPassword(userSingUpInfo.password)
}, [showForm]);
  const handleName=(e)=>{
  const name=e.target.value;
  if(NamePattern.test(name) )
  {
    setNameError(false)
  }
  else{
    setNameError(true)
  }
  setName(name);

}
const handleEmail=(e)=>{
  const email=e.target.value;
  // The match() method matches a string against a regular expression ** **
  //  If the search value is a string, it is converted to a regular expression.
  if(!email.match(Emailregixpattern)){
    setEmailerror(true);
  }
  else{
    setEmailerror(false)
  }
  setEmail(email)
}
const handlePhonenumber=(e)=>{
const phonenumber=e.target.value;
if(phonenumber.length < 3)
{
  setPhoneError(true)
}
else{
  setPhoneError(false)
}
setPhoneNumber(phonenumber)
}

const handlePassword=(e)=>{
  const passwordvalue=e.target.value;
  if(!passwordvalue.match(passwordRegExp)){
    setPasswordError(true);
  }
  else{
    setPasswordError(false);
  }
  setPassword(passwordvalue);
}

const handleSubmit = (e)=>{
  e.preventDefault();
  if(name && phonenumber && email && password){
    let UserInfo= {
      'name':`${name}`,
      'email':`${email}`,
      'phonenumber':`${phonenumber}`,
      'password':`${password}`
    };
     localStorage.setItem("UserInformation", JSON.stringify(UserInfo))
    if(localStorage.getItem("UserInformation")){
      alert("Data has been stored");
    }
    else{
      alert("Please recheck your data")
    }
    const showData=`"Name: ${UserInfo.name}, Email: ${UserInfo.email} PhoneNumber: ${UserInfo.phonenumber} Password : ${UserInfo.password}"`
    SetShowForm(showData);

  }
  else{
    alert('Please fill the required Info')

  }
}
  return (
    <div>
         <div className='container py-5 w-50'>
           <h2 className='text-center text-warning'>SignUp Form</h2>
          <form >
             <div className="">
              <label htmlFor="text">Full Name</label>
               <input
                type="text"
                className="form-control"
                placeholder="Enter Your Full Name"
                autoComplete='off'
                value={name}
                onChange={handleName}
                />
               {nameError ? <p style={{color:"red"}}>Please enter valid name</p> : "" }
            </div>
            <div className="">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your E-mail Address"
                name="email"
                autoComplete='off'
                onChange={handleEmail}
                value={email}
                />
                {emailError ? <p style={{color:"red"}}>Plese enter a valid email adress</p> : ""}
            </div>
            <div className=" ">
              <label htmlFor="phoneno">Phone Number</label>
              <input
                type="number"
                className="form-control"
                id="phoneno"
                placeholder="Enter Your Phone Number"
                name="phoneno"
                autoComplete='off'
                value={phonenumber}
                onChange={handlePhonenumber}
              />
             {phoneError ? <p style={{color:"red"}}>Invalid number</p> : "" }

            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                name="password"
                autoComplete='off'
                value={password}
                onChange={handlePassword}
              />
              {passwordError ? <p style={{color:"red"}}>Password must contain atleast 5 or more characters</p> : "" }
            </div>

            {/* <div className="form-group py-2">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="tnc" />
                <label className="form-check-label" htmlFor="tnc">
                  I agree all terms & conditions
                </label >
              </div>
            </div> */}
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>SignUp Now</button>
          </form>
          <h2 className='text-primary'>{showForm}</h2>
        </div>
    </div>
  )
}
export default Usersform