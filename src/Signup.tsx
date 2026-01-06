import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase.ts"; // adjust path if needed

function Signup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Set display name
      await updateProfile(userCredential.user, {
        displayName: fullName,
      });

      navigate("/"); // redirect after signup
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>

        {error && <p className="error-text">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="btn primary full-width">
            Sign Up
          </button>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
