import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen bg-[hsl(222_47%_5%)] grid place-items-center">
      <form onSubmit={e => { e.preventDefault(); nav("/admin"); }} className="w-full max-w-md bg-[hsl(222_47%_9%)] border border-[hsl(222_47%_14%)] rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Admin</h1>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Email</label>
            <input defaultValue="admin@hardukan.com" className="w-full bg-[hsl(222_47%_6%)] border border-[hsl(222_47%_14%)] rounded-md px-3 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Password</label>
            <input type="password" defaultValue="admin123" className="w-full bg-[hsl(222_47%_6%)] border border-[hsl(222_47%_14%)] rounded-md px-3 py-2.5 text-sm outline-none focus:border-primary" />
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold">Login</button>
        </div>
      </form>
    </div>
  );
}
