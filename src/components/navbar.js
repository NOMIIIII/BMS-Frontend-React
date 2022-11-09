

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
        <a class="navbar-brand"  href="/">Books Management Systems</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10"
          aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="btn btn-outline-warning text-dark mr-2" href="/">Home</a>
            </li>

            <li  class="nav-item">
              <a class="btn btn-outline-warning text-dark mr-2" href="/admin/addbooking">Add Book</a>
            </li>
            <li  class="nav-item">
              <a class="btn btn-outline-warning text-dark mr-2" href='/admin/booklist'>Book List</a>
            </li>
          
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
