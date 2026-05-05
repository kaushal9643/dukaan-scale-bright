import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  return (
    <div className="bg-secondary min-h-[calc(100vh-200px)]">
      <div className="container-x py-12">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="text-sm text-muted-foreground mt-1">Home . Login</p>
        </div>
        <div className="max-w-md mx-auto bg-background rounded-xl shadow-card p-8">
          <h2 className="text-2xl font-bold text-center mb-1">Login to HarDukan</h2>
          <p className="text-center text-sm text-muted-foreground mb-6">Don't have an account? <Link to="/signup" className="text-primary font-medium">Sign up</Link></p>
          <button className="w-full border rounded-md py-2.5 flex items-center justify-center gap-2 mb-5 hover:bg-secondary">
            <img src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw" alt="" className="w-5 h-5" />
            Sign In with Google
          </button>
          <div className="flex items-center gap-3 text-xs text-muted-foreground my-4"><div className="flex-1 border-t" /> or Sign in with Email <div className="flex-1 border-t" /></div>
          <form className="space-y-4" onSubmit={e => { e.preventDefault(); nav("/"); }}>
            <div>
              <label className="text-sm font-medium block mb-1">Email</label>
              <input defaultValue="support@hardukan.com" className="w-full border rounded-md px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Password</label>
              <input type="password" placeholder="Min. 6 characters" className="w-full border rounded-md px-3 py-2 text-sm" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
              <a href="#" className="text-primary">Forgot Password?</a>
            </div>
            <button className="w-full bg-foreground text-background py-3 rounded-md font-semibold">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
