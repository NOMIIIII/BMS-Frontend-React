import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from "react-router-dom";
import { getBookbyId,updateBookbyId } from '../../axios/CRUD'

function EditBooks() {
    const [updateBooklist,setUpdateBooklist] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();
    
    const getListById = async () => {
      setUpdateBooklist(await getBookbyId(id))
    }

    useEffect(()=>{
      // document.getElementsByTagName('body')[0].style.background = "none";
      getListById()
    },[])

    const onChangeHandler = (key,val) => {
      let temp = {...updateBooklist}
      temp[key] = val.target.value
      setUpdateBooklist(temp)
    }

    const onSubmitHandler = (e) => {
      e.preventDefault();
      updateBookbyId(updateBooklist,id).then((res)=> navigate("/admin/booklist"))
    }

    return (
      <div class="panel panel-default mt-3 ml-5">
          <div class="panel-heading" style={{color:"white"}}>Books Entry Form : You can add an Books detail information into this LMS Apps.</div>
          <div class="panel-body">
          <form class="form-horizontal">
          <div class="form-group">
            <label for="book_name" class="col-sm-2 control-label" style={{"color":"white"}}>Book Full Name : </label>
            <div class="col-sm-9">
              <input type="text" class="form-control w-50" name="book_name" value={updateBooklist ? updateBooklist.book_name : null} onChange={(e)=>onChangeHandler("book_name",e)}/>
            </div>
          </div>
          <div class="form-group">
            <label for="book_description" class="col-sm-2 control-label" style={{"color":"white"}}>Book Description : </label>
            <div class="col-sm-9">
              <input type="text" class="form-control w-50" name="position" value={updateBooklist ? updateBooklist.book_description : null} onChange={(e)=>onChangeHandler("book_description",e)}/>
            </div>
          </div>
          <div class="form-group">
            <label for="book_status" class="col-sm-2 control-label" style={{"color":"white"}}>Book Status : </label>
            <div class="col-sm-9">
              <input type="text" class="form-control w-50" name="book_status" value={updateBooklist ? updateBooklist.book_status : null} onChange={(e)=>onChangeHandler("book_status",e)}/>
            </div>
          </div>
        
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-8">
              <button class="btn btn-success mr-2" onClick={(e)=>onSubmitHandler(e)} >Update</button>  
            </div>
          </div>
        </form>
          </div>
        </div>
    );
  }
  
  export default EditBooks;
  