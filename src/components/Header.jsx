import './Header.css'


const Header = () => {


    const exportClick = () => {
        console.log("Clicked.")
    }

    return (
        <div id="header">
           <img id="ms-logo" src="ms.svg" />
           <button className="ms-button" id="btn-export" onClick={() => exportClick()}>Continue</button>
        </div>
    )
}

export default Header