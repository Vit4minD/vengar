export default function Home() {
  return (
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
    
    
// </head>
<body>
    <div className = "container">
        {/* <form id = form action ="/"> */}
            <h1>Registration</h1>
            <div className = "input-control">
                <label htmlFor = "username">Username</label>
                <input id = "username" name = "username" type = "text"></input>
                <div className = "error"></div>
            </div>
            <div className = "input-control">
                <label htmlFor = "password">Password</label>
                <input id = "password" name = "password" type = "password"></input>
                <div className = "error"></div>
            </div>
            <div className = "input-control">
                <label htmlFor = "password">Confirm Password</label>
                <input id = "password2" name = "password2" type = "password"></input>
                <div className = "error"></div>
            </div>
            <button type = "submit">Sign Up</button>
        {/* </form> */}
    </div>
    <script defer src = "log.js"></script>
</body>
//</html>
  )
}