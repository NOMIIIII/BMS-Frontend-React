import React, { useEffect, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { addBook } from '../../axios/CRUD'



function AddBooks() {

  const navigate = useNavigate();
  const [booklist,setBooklist] = useState({})

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addBook({
      book_name:booklist.book_name,
      book_description:booklist.book_description,
      book_status:booklist.book_status
    }).then((res)=>{navigate("/admin/booklist")})
  }

  useEffect(()=>{
    // document.getElementsByTagName('body')[0].style.background = "none";
  },[])

  const onChangeHandler = (key,val) => {
    let temp = {...booklist}
    temp[key] = val.target.value
    setBooklist(temp)
  }

    return (
        <div class="panel panel-default mt-3 ml-5">
        <div class="panel-body">
        <form class="form-horizontal" >
        <div class="form-group">
          <label class="col-sm-2 control-label" style={{"color":"white"}}>Book Title : </label>
          <div class="col-sm-9">
            <input type="text" class="form-control w-50" onChange={(e)=>onChangeHandler("book_name",e)}/>
          </div>
        </div>
        <div class="form-group">
          <label for="book_description" class="col-sm-2 control-label" style={{"color":"white"}}>Book Description : </label>
          <div class="col-sm-9">
            <input type="text" class="form-control w-50" name="position" onChange={(e)=>onChangeHandler("book_description",e)}/>
          </div>
        </div>
        <div class="form-group">
          <label for="book_status" class="col-sm-2 control-label" style={{"color":"white"}}>Book Status : </label>
          <div class="col-sm-9">
            <input type="text" class="form-control w-50" name="book_status" onChange={(e)=>onChangeHandler("book_status",e)}/>
          </div>
        </div>
      
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-8">
            <button type="submit" class="btn btn-success mr-2" onClick={onSubmitHandler}>Save</button>  
             <a class="btn btn-info" onClick={()=>navigate("/admin/booklist")} >Cancel</a>
          </div>
         
        </div>
      </form>
         
        </div>
      </div>
    );
  }
  
  export default AddBooks;
  