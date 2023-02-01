import React,{useState} from 'react'

export default function ListArticle() {
    const [article,setArticle] = useState({})
    const [articlesInfo,setInfo] = useState([
        {id:0,description:"AK-47",prix:20000},
        {id:1,description:"AR-50",prix:40000},
    ]);
    
    const handleChange = (e)=>
        setArticle(prev=>(
            {...prev,[e.target.name]:e.target.value})
            );
    const handleSubmit = (e)=>{
        e.preventDefault();
        setInfo(prev => [...prev,article]);
        setArticle({})
    }
        
  return (
    <div className='container'>
        <form  onSubmit={handleSubmit}>
            <label>id</label>
            <input type="text" id="id"  name="id" 
            value={article.id}
             onChange={handleChange}/><br/>

            <label >description</label>
            <input type="text"   name="description" 
            value={article.description}
            onChange={handleChange}/><br/>

            <label >prix</label>
            <input type="text"   name="prix" 
            value={article.prix}
            onChange={handleChange}/><br/>
            <input type="submit" value={"add"}/>
        </form>
        <br/>

        <ul> <b>Articles List</b> 
        {articlesInfo.map((item,index)=>
        <li key={index}>
            {item.id} |
            {item.name} |
            {item.description} |
            {item.prix}
        </li>)}
        </ul>
    </div>
  )
  
};