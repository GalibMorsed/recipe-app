export default function LogPage() {
  return (
    <>
      <div className="whole-screen">
        <div className="log-site">
          <div className="login-container">
            <h2>Login</h2>
            <form>
              <input
                id="email"
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button className="btn" type="button">
                Submit
              </button>
            </form>
            <p>Login using your unique Id and Password or Sign In </p>
            <div id="signInMessage"></div>
          </div>
        </div>
      </div>
    </>
  );
}
