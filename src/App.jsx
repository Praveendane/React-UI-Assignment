import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

/* ---------- COMMON STYLES ---------- */

const outer = {
  minHeight: "100vh",
  background: "#f2f2f2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
};

const mobile = {
  width: "375px",
  height: "812px",
  background: "#ffffff",
  border: "1px solid #e2e2e2",
  position: "relative",
  overflow: "hidden",
};

const pad = {
  padding: "28px 22px",
};

const input = {
  width: "100%",
  padding: "12px",
  border: "1px solid #d9d9d9",
  borderRadius: "6px",
  marginBottom: "14px",
  outline: "none",
  boxSizing: "border-box",
};

const purpleBtn = {
  width: "100%",
  padding: "13px",
  border: "none",
  borderRadius: "6px",
  background: "#6C25FF",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

const lightBtn = {
  width: "100%",
  padding: "13px",
  border: "none",
  borderRadius: "6px",
  background: "#ceb8ff",
  color: "#111",
  fontWeight: "bold",
  cursor: "pointer",
};

function Layout({ children }) {
  return (
    <div style={outer}>
      <div style={mobile}>{children}</div>
    </div>
  );
}

/* ---------- PAGE 1 LANDING ---------- */

function Landing() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div
        style={{
          position: "absolute",
          bottom: "35px",
          left: "22px",
          right: "22px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "28px", color: "#1d1d1d" }}>
          Welcome to PopX
        </h1>

        <p
          style={{
            color: "#777",
            lineHeight: "1.5",
            marginTop: "10px",
            marginBottom: "24px",
          }}
        >
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button style={purpleBtn} onClick={() => navigate("/signup")}>
          Create Account
        </button>

        <button
          style={{ ...lightBtn, marginTop: "12px" }}
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>
      </div>
    </Layout>
  );
}

/* ---------- PAGE 2 LOGIN ---------- */

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const oldUser = JSON.parse(localStorage.getItem("user")) || {};

    localStorage.setItem(
      "user",
      JSON.stringify({
        ...oldUser,
        email,
      }),
    );

    navigate("/profile");
  };

  return (
    <Layout>
      <div style={pad}>
        <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>
          Signin to your
          <br />
          PopX account
        </h1>

        <p
          style={{
            color: "#777",
            lineHeight: "1.5",
            marginBottom: "22px",
          }}
        >
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <input
          style={input}
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={input}
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={{
            ...purpleBtn,
            background: "#cbcbcb",
            color: "#fff",
          }}
          onClick={loginUser}
        >
          Login
        </button>
      </div>
    </Layout>
  );
}

/* ---------- PAGE 3 SIGNUP ---------- */

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("Yes");

  const createAccount = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        phone,
        email,
        company,
        agency,
      }),
    );

    navigate("/profile");
  };

  return (
    <Layout>
      <div style={pad}>
        <h1 style={{ fontSize: "30px", marginBottom: "18px" }}>
          Create your
          <br />
          PopX account
        </h1>

        <input
          style={input}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={input}
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          style={input}
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          style={input}
          placeholder="Company name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <p style={{ marginBottom: "8px", fontSize: "14px" }}>
          Are you an Agency?
        </p>

        <label style={{ marginRight: "18px" }}>
          <input
            type="radio"
            checked={agency === "Yes"}
            onChange={() => setAgency("Yes")}
          />{" "}
          Yes
        </label>

        <label>
          <input
            type="radio"
            checked={agency === "No"}
            onChange={() => setAgency("No")}
          />{" "}
          No
        </label>

        <button
          style={{
            ...purpleBtn,
            position: "absolute",
            left: "22px",
            right: "22px",
            bottom: "28px",
            width: "calc(100% - 44px)",
          }}
          onClick={createAccount}
        >
          Create Account
        </button>
      </div>
    </Layout>
  );
}

/* ---------- PAGE 4 PROFILE ---------- */

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <Layout>
      <div style={{ padding: "24px" }}>
        <h2>Account Settings</h2>

        <div style={{ marginTop: "20px" }}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.company}</p>
        </div>

        <p style={{ marginTop: "20px" }}>Welcome to your profile page.</p>
      </div>
    </Layout>
  );
}

/* ---------- APP ---------- */

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
