
import AuthForm from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-gray-50">
      <div className="w-full max-w-md">
        <AuthForm mode="login" />
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Admin access: Use email admin@restaurant.com</p>
        </div>
      </div>
    </div>
  );
}
