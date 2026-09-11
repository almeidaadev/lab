'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fieldError, setFieldError] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);

  function validate() {
    if (!password || password.length < 8) {
      setFieldError('Password must be at least 8 characters.');
      return false;
    }
    setFieldError('');
    return true;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError('');

    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      let data: { message?: string } | null = null;
      try {
        data = await res.json();
      } catch {
        // no JSON body
      }

      if (!res.ok) {
        setFormError(data?.message ?? 'Incorrect password.');
        return;
      }

      router.push('/todos');
    } catch {
      setFormError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h1>Sign in</h1>
      <p className="sub">Enter your password to continue.</p>

      {formError && <div className="error-banner">{formError}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="input-wrap">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              placeholder="Enter your password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-pw"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {fieldError && <div className="field-error">{fieldError}</div>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      <style jsx>{`
        .card {
          width: 100%;
          max-width: 340px;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
        }
        h1 {
          font-size: 22px;
          font-weight: 600;
          margin: 0 0 6px;
          letter-spacing: -0.01em;
          color: #1b1d1f;
        }
        .sub {
          margin: 0 0 28px;
          color: #6b6862;
          font-size: 14px;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        label {
          font-size: 13px;
          font-weight: 500;
          color: #1b1d1f;
        }
        .input-wrap {
          position: relative;
        }
        input {
          width: 100%;
          padding: 11px 12px;
          font-size: 15px;
          border: 1px solid #d8d5cd;
          border-radius: 6px;
          background: #fff;
          color: #1b1d1f;
          outline: none;
          transition: border-color 0.15s ease;
          box-sizing: border-box;
        }
        input:focus {
          border-color: #2f5d50;
        }
        input:focus-visible {
          box-shadow: 0 0 0 3px rgba(47, 93, 80, 0.15);
        }
        .toggle-pw {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 12px;
          color: #6b6862;
          cursor: pointer;
          padding: 4px 6px;
        }
        .toggle-pw:hover {
          color: #1b1d1f;
        }
        button[type='submit'] {
          margin-top: 4px;
          padding: 12px;
          border: none;
          border-radius: 6px;
          background: #2f5d50;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        button[type='submit']:hover {
          background: #254a40;
        }
        button[type='submit']:disabled {
          background: #a9b8b3;
          cursor: not-allowed;
        }
        .error-banner {
          background: #fbeae6;
          border: 1px solid #f0c8bd;
          color: #a3402f;
          font-size: 13px;
          padding: 10px 12px;
          border-radius: 6px;
          margin-bottom: 16px;
        }
        .field-error {
          font-size: 12px;
          color: #a3402f;
          min-height: 14px;
        }
      `}</style>
    </div>
  );
}