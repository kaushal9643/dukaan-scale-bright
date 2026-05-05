import { useState } from "react";
import { X, CreditCard, Smartphone, Building2, Wallet, Lock, CheckCircle2 } from "lucide-react";

type Method = "card" | "upi" | "netbanking" | "wallet";

export default function DemoPaymentModal({
  open,
  amount,
  onClose,
  onSuccess,
}: {
  open: boolean;
  amount: number;
  onClose: () => void;
  onSuccess: (paymentId: string) => void;
}) {
  const [method, setMethod] = useState<Method>("card");
  const [processing, setProcessing] = useState(false);
  const [done, setDone] = useState(false);

  if (!open) return null;

  const pay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setDone(true);
      const paymentId = "pay_" + Math.random().toString(36).slice(2, 12);
      setTimeout(() => onSuccess(paymentId), 900);
    }, 1800);
  };

  const methods = [
    { id: "card" as const, label: "Card", icon: CreditCard },
    { id: "upi" as const, label: "UPI", icon: Smartphone },
    { id: "netbanking" as const, label: "Net Banking", icon: Building2 },
    { id: "wallet" as const, label: "Wallet", icon: Wallet },
  ];

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="bg-background w-full max-w-md rounded-xl shadow-elevated overflow-hidden">
        {/* Header */}
        <div className="bg-[#02042B] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-blue-500 grid place-items-center font-bold text-sm">H</div>
            <div>
              <div className="font-bold">HarDukan</div>
              <div className="text-[11px] opacity-70">Demo Payment Gateway</div>
            </div>
          </div>
          <button onClick={onClose} disabled={processing || done} className="opacity-70 hover:opacity-100 disabled:opacity-30">
            <X className="w-5 h-5" />
          </button>
        </div>

        {done ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-success/15 grid place-items-center mb-4">
              <CheckCircle2 className="w-9 h-9 text-success" />
            </div>
            <h3 className="text-xl font-bold mb-1">Payment Successful</h3>
            <p className="text-sm text-muted-foreground">Redirecting to your order...</p>
          </div>
        ) : (
          <>
            <div className="p-5 border-b">
              <div className="text-xs text-muted-foreground">Amount payable</div>
              <div className="text-3xl font-extrabold">₹{(amount * 83).toFixed(0)}</div>
              <div className="text-xs text-muted-foreground">≈ ${amount.toFixed(2)} USD</div>
            </div>

            {/* Methods */}
            <div className="p-5">
              <div className="grid grid-cols-4 gap-2 mb-5">
                {methods.map(m => (
                  <button key={m.id} onClick={() => setMethod(m.id)}
                    className={`flex flex-col items-center gap-1 p-3 rounded-lg border-2 transition ${method === m.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`}>
                    <m.icon className="w-5 h-5" />
                    <span className="text-[11px] font-medium">{m.label}</span>
                  </button>
                ))}
              </div>

              {method === "card" && (
                <div className="space-y-3">
                  <input className="w-full border rounded-md px-3 py-2.5 text-sm" placeholder="Card number" defaultValue="4111 1111 1111 1111" />
                  <div className="grid grid-cols-2 gap-3">
                    <input className="border rounded-md px-3 py-2.5 text-sm" placeholder="MM/YY" defaultValue="12/28" />
                    <input className="border rounded-md px-3 py-2.5 text-sm" placeholder="CVV" defaultValue="123" />
                  </div>
                  <input className="w-full border rounded-md px-3 py-2.5 text-sm" placeholder="Cardholder name" defaultValue="Test User" />
                </div>
              )}
              {method === "upi" && (
                <div>
                  <label className="text-xs text-muted-foreground">UPI ID</label>
                  <input className="w-full border rounded-md px-3 py-2.5 text-sm mt-1" defaultValue="testuser@okaxis" />
                </div>
              )}
              {method === "netbanking" && (
                <select className="w-full border rounded-md px-3 py-2.5 text-sm">
                  <option>HDFC Bank</option><option>ICICI Bank</option><option>SBI</option><option>Axis Bank</option>
                </select>
              )}
              {method === "wallet" && (
                <div className="grid grid-cols-3 gap-2">
                  {["Paytm", "PhonePe", "Amazon Pay"].map(w => (
                    <button key={w} className="border rounded-lg p-3 text-sm hover:border-primary">{w}</button>
                  ))}
                </div>
              )}

              <button onClick={pay} disabled={processing}
                className="w-full mt-5 bg-primary text-primary-foreground py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60">
                {processing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Pay ₹{(amount * 83).toFixed(0)}</>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 mt-4 text-[11px] text-muted-foreground">
                <Lock className="w-3 h-3" /> Secured by HarDukan Pay (Demo Mode)
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
