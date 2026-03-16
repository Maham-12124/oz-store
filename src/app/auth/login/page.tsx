'use client';
// src/app/auth/login/page.tsx
import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

// Form logic ko alag component mein nikal diya taake Suspense sahi se kaam kare
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error('Invalid email or password');
      } else {
        toast.success('Welcome back!');
        router.push(callbackUrl);
        router.refresh();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email Address</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#F85606] transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">Password</label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full pl-10 pr-11 py-3 border border-gray-200 rounded-xl text-sm outline-none focus:border-[#F85606] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#F85606] hover:bg-orange-600 disabled:bg-gray-300 text-white py-3.5 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
          ) : (
            <>Sign In <ArrowRight size={18} /></>
          )}
        </button>
      </form>

      {/* Demo credentials */}
      <div className="mt-5 p-3 bg-orange-50 rounded-xl text-xs text-gray-600">
        <p className="font-semibold text-gray-700 mb-1">Demo Credentials:</p>
        <p>User: user@test.com / user123</p>
        <p>Admin: admin@mobileshop.com / admin123</p>
      </div>

      <p className="text-center text-sm text-gray-500 mt-5">
        Don't have an account?{' '}
        <Link href="/auth/register" className="text-[#F85606] font-semibold hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}

// Main Page component jo Suspense boundary provide karega
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="bg-[#F85606] rounded-xl w-12 h-12 flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-lg">MS</span>
            </div>
            <span className="text-2xl font-black text-gray-800">MobileShop</span>
          </Link>
          <p className="text-gray-500 mt-2 text-sm">Sign in to your account</p>
        </div>

        {/* Suspense Wrapper - Ye build error fix karega */}
        <Suspense fallback={
          <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center">
            <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#F85606]" />
          </div>
        }>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}