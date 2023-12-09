 const Navbar = ({setCategory,setcountry}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" ><span className="logo">NEWS</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Country
          </a>
          <ul className="dropdown-menu">
            <li><div className="dropdown-item"onClick={()=>setcountry("ae")}>United Arab Emirates</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ar")}>Argentina</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("at")}>Austria</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("au")}>Australia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("be")}>Belgium</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("bg")}>Bulgaria</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("br")}>Brazil</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ca")}>Canada</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ch")}>Switzerland</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("cn")}>China</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("co")}>Colombia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("cu")}>Cuba</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("cz")}>Czech Republic</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("de")}>Germany</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("eg")}>Egypt</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("fr")}>France</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("gb")}>United Kingdom</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("gr")}>Greece</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("hk")}>Hong Kong</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("hu")}>Hungary</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("id")}>Indonesia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ie")}>Ireland</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("il")}>Israel</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("in")}>India</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("it")}>Italy</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("jp")}>Japan</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("kr")}>South Korea</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("lt")}>Lithuania</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("lv")}>Latvia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ma")}>Morocco</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("mx")}>Mexico</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("my")}>Malaysia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ng")}>Nigeria</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("nl")}>Netherlands</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("no")}>Norway</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("nz")}>New Zealand</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ph")}>Philippines</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("pl")}>Poland</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("pt")}>Portugal</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ro")}>Romania</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("rs")}>Serbia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ru")}>Russia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("sa")}>Saudi Arabia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("se")}>Sweden</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("sg")}>Singapore</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("si")}>Slovenia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("sk")}>Slovakia</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("th")}>Thailand</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("tr")}>Turkey</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("tw")}>Taiwan</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ua")}>Ukraine</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("us")}>United States</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("ve")}>Venezuela</div></li>
            <li><div className="dropdown-item"onClick={()=>setcountry("za")}>South Africa</div></li>
          </ul>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("general")}>General</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar