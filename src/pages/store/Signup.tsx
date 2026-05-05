import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="bg-secondary min-h-[calc(100vh-200px)]">
      <div className="container-x py-12">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">Signup</h1>
          <p className="text-sm text-muted-foreground mt-1">Home . Signup</p>
        </div>
        <div className="max-w-md mx-auto bg-background rounded-xl shadow-card p-8">
          <h2 className="text-2xl font-bold text-center mb-1">Signup to HarDukan</h2>
          <p className="text-center text-sm text-muted-foreground mb-6">Already have an account? <Link to="/login" className="text-primary font-medium">Login</Link></p>
          <button className="w-full border rounded-md py-2.5 flex items-center justify-center gap-2 mb-5 hover:bg-secondary">Sign In with Google</button>
          <div className="flex items-center gap-3 text-xs text-muted-foreground my-4"><div className="flex-1 border-t" /> or Sign up with Email <div className="flex-1 border-t" /></div>
          <p className="text-center font-bold mb-2">Enter OTP</p>
          <div className="flex justify-center gap-2 mb-4">
            {[0, 1, 2, 3].map(i => <input key={i} maxLength={1} className="w-12 h-12 border rounded-md text-center text-lg" />)}
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold">Verify OTP</button>
          <p className="text-center text-sm text-muted-foreground mt-3">Resend OTP in 54s</p>
        </div>
      </div>
    </div>
  );
}
