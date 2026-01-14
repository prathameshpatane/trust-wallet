import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      if (userCredential && userCredential.user) {
        await updateProfile(userCredential.user, { displayName: fullName })

        const now = new Date().toISOString()
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          uid: userCredential.user.uid,
          fullName,
          email,
          role: 'user',
          accountStatus: 'active',
          emailVerified: false,
          createdAt: now,
          lastLogin: now,
          wallet: {}
        })

        // Save to localStorage for admin panel
        const newUser = {
          uid: userCredential.user.uid,
          fullName,
          email,
          role: 'user',
          accountStatus: 'active',
          emailVerified: false,
          createdAt: now,
          lastLogin: now,
          wallet: {}
        }
        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]')
        existingUsers.push(newUser)
        localStorage.setItem('registeredUsers', JSON.stringify(existingUsers))
        console.log('User saved to localStorage:', newUser)
      }

      navigate("/login")
    } catch (err: any) {
      setError(err.message)
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
