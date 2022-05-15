const styleArgument3={width:'150px'};
const styleArgument2={ paddingTop: '10px',
                       paddingLeft: '10px',
                       paddingRight:'10px',
                      };
const styleArgument1={ paddingTop: '10px',
                       paddingLeft: '10px',
                       paddingRight:'10px',
                       };
const Login=()=>{
  return (
          <div>
             <form>
               <label>CGU Login</label><br/>
                <label>Username</label>
                <input type="text"   style={styleArgument1} placeholder="Enter Username" required/><br/><br/>
                <label>Password</label>
                <input type="password"  style={styleArgument2} placeholder="Enter Password" required/><br/><br/>
                <button type="submit" style={styleArgument3}>Login</button>
             </form>
          </div>
        );  
}

export default Login;