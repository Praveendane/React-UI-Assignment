import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const appStyle = {
  minHeight: "100vh",
  background: "#f5f5f5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
};

const mobileFrame = {
  width: "375px",
  height: "812px",
  background: "#ffffff",
  borderRadius: "0px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  position: "relative",
};

const pagePadding = {
  padding: "40px 24px",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "14px",
  border: "1px solid #d9d9d9",
  borderRadius: "8px",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};

const primaryBtn = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "8px",
  background: "#6C25FF",
  color: "#fff",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
};

const secondaryBtn = {
  width: "100%",
  padding: "14px",
  border: "none",
  borderRadius: "8px",
  background: "#ceb8ff",
  color: "#111",
  fontWeight: "bold",
  fontSize: "14px",
  cursor: "pointer",
  marginTop: "12px",
};

function Wrapper({ children }) {
  return (
    <div style={appStyle}>
      <div style={mobileFrame}>{children}</div>
    </div>
  );
}

function Landing() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div
        style={{
          ...pagePadding,
          position: "absolute",
          bottom: "30px",
          left: 0,
          right: 0,
        }}
      >
        <h1
          style={{ fontSize: "28px", marginBottom: "10px", color: "#1d1d1d" }}
        >
          Welcome to PopX
        </h1>

        <p style={{ color: "#777", lineHeight: "1.5", marginBottom: "24px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button style={primaryBtn} onClick={() => navigate("/signup")}>
          Create Account
        </button>

        <button style={secondaryBtn} onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </Wrapper>
  );
}

function Login() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div style={pagePadding}>
        <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Signin to your PopX account
        </h1>

        <p style={{ color: "#777", marginBottom: "24px", lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <input
          type="email"
          placeholder="Enter email address"
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Enter password"
          style={inputStyle}
        />

        <button
          style={{ ...primaryBtn, background: "#c7c7c7", color: "#fff" }}
          onClick={() => navigate("/profile")}
        >
          Login
        </button>
      </div>
    </Wrapper>
  );
}

function Signup() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div style={pagePadding}>
        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Create your PopX account
        </h1>

        <input type="text" placeholder="Full Name" style={inputStyle} />
        <input type="text" placeholder="Phone number" style={inputStyle} />
        <input type="email" placeholder="Email address" style={inputStyle} />
        <input type="password" placeholder="Password" style={inputStyle} />
        <input type="text" placeholder="Company name" style={inputStyle} />

        <div
          style={{ marginTop: "10px", marginBottom: "30px", fontSize: "14px" }}
        >
          <p style={{ marginBottom: "10px" }}>Are you an Agency?</p>

          <label style={{ marginRight: "20px" }}>
            <input type="radio" name="agency" defaultChecked /> Yes
          </label>

          <label>
            <input type="radio" name="agency" /> No
          </label>
        </div>

        <button
          style={{
            ...primaryBtn,
            position: "absolute",
            bottom: "30px",
            left: "24px",
            width: "calc(100% - 48px)",
          }}
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>
      </div>
    </Wrapper>
  );
}

function Profile() {
  return (
    <Wrapper>
      <div style={{ background: "#f6f6f6", height: "100%" }}>
        <div
          style={{
            background: "#fff",
            padding: "18px 24px",
            fontWeight: "bold",
            borderBottom: "1px solid #eee",
          }}
        >
          Account Settings
        </div>

        <div style={{ padding: "24px" }}>
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "#ccc",
              }}
            ></div>

            <div>
              <div style={{ fontWeight: "bold", marginBottom: "6px" }}>
                Marry Doe
              </div>
              <div style={{ fontSize: "14px", color: "#555" }}>
                Marry@example.com
              </div>
            </div>
          </div>

          <p style={{ marginTop: "20px", color: "#444", lineHeight: "1.6" }}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
