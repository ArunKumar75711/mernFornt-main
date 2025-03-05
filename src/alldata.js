import {useState,useEffect} from "react";
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'


export default function Alldata(){
  
  const [data,setData]=useState([])
 

  useEffect(()=>{
    const fetchdata=async()=>{
       await axios.get('https://mernback-main-1.onrender.com/data').then((item)=>{setData(item.data)})
    };fetchdata()
 },[]);
   
  function handleDelete(index){
    let DeleteArray=[...data];
    axios.delete(`https://mernback-main-1.onrender.com/delete/${DeleteArray[index]._id}`);
    alert(`Account ${DeleteArray[index].id} Delete from Database `)
    DeleteArray.splice(index,1);
    setData(DeleteArray);
    
    
  }

  

  // function handleEdit(item) {
  //   setEditId(item._id);
  //   setFormData({userid : item.userid, name: item.name, email: item.email, password: item.password, amount: item.amount });
  // }

  // async function handleUpdate() {
  //   try {
  //     await axios.put(`https://mernback-main-1.onrender.com/update/${editId}`, formData);
  //     setData(data.map((item) => (item._id === editId ? { ...item, ...formData } : item)));
  //     setEditId(null);
  //     alert("Updated successfully!");
  //   } catch (error) {
  //     console.error("Error updating:", error);
  //   }
  // }

  return(
    <>
    <img id="" src="alldata.png"></img>
      <h2>Bank Users Database</h2>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>AccountNo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Balance</th>
          <th>Delete-Option</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item,index)=>  
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.amount}</td>
          <td>
                   // <Button variant="success" onClick={() => handleEdit(item)}>Edit</Button>
              <Button onClick={()=>handleDelete(index)}>Delete</Button></td>
        </tr>)
        }
      
        </tbody>
        </Table>

          
      // {editId && (
      //   <div>
      //     <h2>Edit Data</h2>
      //     <input  type="text"  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      //     <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      //     <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      //     <input type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
      //     <button onClick={handleUpdate}>Update</button>
      //   </div>
      // )}
    
    </>
  )
}
