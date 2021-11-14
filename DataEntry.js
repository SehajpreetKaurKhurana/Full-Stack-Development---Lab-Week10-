import React,{ useState } from "react";
import './DataEntry.css';


function DataEntry() {
  const [name, setName] = useState("");
  const[email,setEmail]=useState("");
  const[address,setAddress]=useState("")
  const[address2,setAddress2]=useState("")
  const[city,setCity]=useState("")
  const[province,setProvince]=useState("")
  const[postal,setPostal]=useState("")
  const [submitting, setSubmitting] = useState(false);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
  }
  
  return (
   <div> 
       
    <form onSubmit={handleSubmit}>
        <div className="tableDiv"> 
        <h1> Data Entry Form </h1>
      <table className="entryTable">
          <tr><td colSpan="3">Email</td> <td colSpan="3">Name</td></tr>
          <tr>
          <td colSpan="3">
                    <input type="email"  placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </td>
              <td colSpan="3">
                    <input type="text"  placeholder="Full name"  value={name} onChange={(e) => setName(e.target.value)} />
            </td>
        </tr>
        <tr> <td colSpan="6">Address</td></tr>
        <tr>
          <td colSpan="6">
                    <input type="text"  placeholder="Street Number and Name" value={address} onChange={(e) => setAddress(e.target.value)} />
            </td>
             

        </tr>
        <tr> <td colSpan="6">Address 2</td></tr>
        <tr>
          <td colSpan="6">
                    <input type="text"  placeholder="Apartment,studio or floor" value={address2} onChange={(e) => setAddress2(e.target.value)} />
            </td>
             

        </tr>
        <tr> <td >City</td> <td colSpan="2">Province</td><td colSpan="2">Postal Code</td></tr>
           
        <tr>
          <td >
                    <input type="text"  value={city} onChange={(e) => setCity(e.target.value)} />
            </td>
            <td colSpan="2">
            <select value={province} onChange={(e) => setProvince(e.target.value)}>
                <option value="">Choose....</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Price Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
             </select>
            </td>
            <td colSpan="2">
                    <input type="text"  value={postal} onChange={(e) => setPostal(e.target.value)} />
            </td>
             

        </tr>
        <tr></tr>
        <tr>
    <td colSpan="6"> <input type="checkbox" value=""/>Agree Terms and Conditions? </td>
        </tr>
        <tr >
            <td colSpan="5"><input  className="submit" type="submit" /></td>
        </tr>
           
           </table>
      
      
        </div>
    </form>

    {submitting &&
       <div className="tableDiv">
          <h1>Details</h1>
       <table className="entryTable">
        <tr>
        <th>Email: </th>    
        <td>{email} </td> 
        </tr> 
        <tr>
        <th>Full Name</th>    
        <td>{name} </td> 
        </tr> 
        <tr>
        <th>Address: </th>    
        <td>{address},{address2}</td> 
        </tr> 
        <tr>
        <th>City: </th>    
        <td>{city} </td> 
        </tr> 
        <tr>
        <th>Province: </th>    
        <td>{province} </td> 
        </tr> 
        <tr>
        <th>Postal Code: </th>    
        <td>{postal} </td> 
        </tr> 
       </table>
     </div>
     }

    </div>
  )
}
export default DataEntry