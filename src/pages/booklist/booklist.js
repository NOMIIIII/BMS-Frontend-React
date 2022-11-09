import React, { useEffect, useState } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { getBooks, deleteBookbyId } from '../../axios/CRUD'


function ListBooks() {

    const navigate = useNavigate();
    const [booklist,setBooklist] = useState(null)

    const getList = async () => {
      setBooklist(await getBooks())
    }

    useEffect(()=>{
      getList()
    },[])

    const onDeleteHandler = (id) => {
      deleteBookbyId(id).then(res => {getList();})
    }

    return (
        <div>
          {console.log("BOOK LIST",booklist)}
        <table class="table table-bordered">
        <thead>
        <tr>
          <th>TITLE</th>
          <th>AUTHOR</th>
          <th>STATUS</th>
          <th width="275" align="center">ACTION</th>
        </tr>
        </thead>
        <tbody>
          {booklist ? 
            booklist.length > 0 ? 
            booklist.map((val) => 
            <tr  >
              <td>{val.book_name}</td>
              <td>{val.book_author}</td>
              <td>{val.book_status}</td> 
              <td width="275"> 
                <Link class="btn btn-success mr-2" to={"edit/"+val._id}>Edit</Link>
                <Link class="btn btn-danger" onClick={()=>onDeleteHandler(val._id)}>Delete</Link>
              </td>
            </tr>
            )
            :null
            :null

          }
        </tbody>
      </table>
    </div>
    );
  }
  
  export default ListBooks;
  