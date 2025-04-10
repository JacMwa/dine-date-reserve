
import AuthForm from "@/components/auth/AuthForm";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-gray-50">
      <div className="w-full max-w-md">
        <AuthForm mode="login" />
        
        <Card className="mt-6 border-l-4 border-l-restaurant-burgundy">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <InfoIcon className="h-5 w-5 text-restaurant-burgundy mr-2 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">
                  <strong>Regular customers:</strong> Any email and password combination will work for demo purposes.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Admin access:</strong> Use email admin@restaurant.com with any password to access the admin dashboard.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
