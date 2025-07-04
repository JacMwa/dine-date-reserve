
import AuthForm from "@/components/auth/AuthForm";

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-gray-50">
      <div className="w-full max-w-md">
        <AuthForm mode="register" />
      </div>
    </div>
  );
}
