function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center">{title}</h1>
        <p className="mt-2 text-center text-slate-500">{subtitle}</p>

        <div className="mt-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;