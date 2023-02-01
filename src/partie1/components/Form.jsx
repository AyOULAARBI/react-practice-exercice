import React,{useState} from 'react'

function Form() {
    const [userInfo,setUserInfo] = useState({});
    
    const handleChange = (e)=>setUserInfo(previous => ({...previous,[e.target.name]:e.target.value}));
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`salut Nom: ${userInfo.nom}, Prenom: ${userInfo.prenom}`)
    }
  return (
    <div className='container'>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="nom">nom</label>
            <input type="text" id="nom"  name="nom"  onChange={handleChange}/><br/>
            <label htmlFor="prenom">prenom</label>
            <input type="text" id="prenom"  name="prenom" onChange={handleChange}/><br/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form