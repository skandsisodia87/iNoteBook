import React,{ useState }  from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
    const [cerdential, setCerdential] = useState({email:"",password:""});
    let navigate=useNavigate();
    const handlesubmit=async (e)=>{
        e.preventDefault(); 
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:cerdential.email,password:cerdential.password})
          });
          const json= await response.json();
          console.log(json);
          if(json.success){
            // Save the auth token and redirect 
            localStorage.setItem('token',json.authtoken)
            navigate('/')
          }else{
            alert("Login with right credential")
          }
    }
    const onChange=(e)=>{
        setCerdential({...cerdential,[e.target.name]:e.target.value})
    }

  return (
    <div className='container'>
      <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" value={cerdential.email} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="password" value={cerdential.password} onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-dark">Submit</button>
</form>
    </div>
  );
}

export default Login;
