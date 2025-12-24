const AccountHelp = () => {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Account Help
          </h1>
  
          <ul className="space-y-4 text-sm text-gray-700">
            <li>• Forgot password? Use “Reset Password” on login</li>
            <li>• Update address from your profile</li>
            <li>• Orders & returns are linked to your account</li>
            <li>• Contact support if account access is blocked</li>
          </ul>
  
          <p className="mt-6 text-sm text-gray-600">
            For security reasons, we never ask for passwords.
          </p>
        </div>
      </div>
    );
  };
  
  export default AccountHelp;
  