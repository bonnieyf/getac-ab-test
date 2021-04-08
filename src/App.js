import "./App.css";
import { Experiment, Variant } from "react-optimize";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>A/B Testing</h1>
        <br />
        <Experiment id="u-RwEPVyRICxiIWaJ60WFw">
          <Variant id="0">
            <div className="container" id="container">
              <div className="form-container sign-up-container">
                <form>
                  <h1>Sign Up</h1>
                  <div className="social-container">
                    <a href="#" className="social">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social">
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </div>
                  <span>or use your email for registration</span>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button onclick="return false;">Sign Up</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form>
                  <h1>Sign In</h1>
                  <span>or use your account</span>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <a href="#">Forgot your password?</a>
                  <button onclick="return false;">Sign In</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>Please login with your personal info</p>
                    <button className="ghost" id="signIn">
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>
                      Enter your personal details and start your journey with us
                    </p>
                    <button className="ghost" id="signUp">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Variant>
          <Variant id="1">
            <div className="container" id="container">
              <div className="form-container sign-up-container">
                <form>
                  <h1>Sign Up</h1>
                  <div className="social-container">
                    <a href="#" className="social">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social">
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </div>
                  <span>or use your email for registration</span>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <button onclick="return false;">Sign Up</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form>
                  <h1>Sign In</h1>
                  <span>or use your account</span>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <a href="#">Forgot your password?</a>
                  <button className="red" onclick="return false;">
                    Sign In
                  </button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay red">
                  <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>Please login with your personal info</p>
                    <button className="ghost" id="signIn">
                      Sign In
                    </button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Hello, Getac!</h1>
                    <p>Welcome to visit our website!</p>
                    <button className="ghost" id="signUp">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Variant>
        </Experiment>
      </header>
    </div>
  );
}

export default App;
