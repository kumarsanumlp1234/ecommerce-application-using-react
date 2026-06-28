import React from "react";
function SignupForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="Full Name"
      />

      <input
        type="email"
        placeholder="Email"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <input
        type="password"
        placeholder="Confirm Password"
      />

      <button type="submit">
        Create Account
      </button>
    </form>
  );
}

export default SignupForm;