import { useState } from "react";


// function LoginForm(){
  
//   const[email,setEmail]=React.useState("");
//   const[password,setPassword]=React.useState("");
//   const[allEntry,setAllEntry]=React.useState([]);

//   const submitForm=(e)=>{
//     e.preventDefault();
//     const newEntry={ email:email,
//      password:password,
//     id:new Date().getTime().toString()}
//     setAllEntry([...allEntry,newEntry]);
//     console.log(allEntry);
//     setEmail("");
//     setPassword("");
//   }

//   return (
    
//     <div className="container d-flex justify-content-center align-items-center m-5">
//       <fieldset className="p-4 border border-black rounded border-success p-2 mb-2 border-opacity-25">
//    <form onSubmit={submitForm}>
//   {/* <div className=" mb-3">
//     <label htmlfor="exampleInputName1" className="form-label">Name</label>
//     <input type="name" className="form-control" id="exampleInputName" value={email} aria-describedby="nameHelp" />
//   </div> */}
//   <div className=" mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" value={email} id="exampleInputEmail1"
//      aria-describedby="emailHelp"
//      onChange={(e)=>setEmail(e.target.value)} />
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Create Password</label>
//     <input type="password" className="form-control" value={password} id="exampleInputPassword1"
//     onChange={(e)=>setPassword(e.target.value)} />
//   </div>
//   {/* <div className="mb-3">
//     <label htmlfor="exampleInputPassword2" className="form-label">Re-enter Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword2" />
//   </div> */}
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </fieldset>
//     </div>
//   );
// };

export default function LoginForm() {
  const [Data, setData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const [ name, value ] = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(Data));
  };
  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-8 rounded shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={Data.name}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3 "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={Data.email}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3 "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={Data.password}
            onChange={handleInputChange}
            className="border rounded w-full py-2 px-3 "
          />
        </div>

        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
          >
            Jama Kro
          </button>
        </div>
      </form>
    </div>
  );
}






