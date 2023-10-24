import logo from './logo.png'
import background from './background.jpg'

const Casa = () =>{
    return(
        <html>
            <head>
                <title>Vengar</title>
                <link rel = "stylesheet" href = "style.css"></link>
            </head>
            <body>
                <div className="banner">
                    <div className="navbar">
                        <img src = {logo.src} className = "logo"></img>
                        <ul>
                            <li><a href="auth">Sign In</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </div>
            </body>
        </html>
    )
}
export default Casa