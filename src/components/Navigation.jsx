const Navigation = ()=>{
    return(
        <nav className="container">
        <div className="logo">
            <img src="public\images\download.png" alt="logo" height={72}/>

        </div>
        <div>
            <ul>
                <li href="#">menu</li>
                <li href="#">location</li>
                <li href="#">about</li>
                <li href="#">contact</li>
            </ul>
        </div>
        <div>
            <button>login</button>
        </div>

    </nav>
    )

}
export default  Navigation