"use client";

import { createAuthClient } from "@workspace/auth/client";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function LoginPage() {
  const { signIn } = createAuthClient();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-blue-800">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            className="w-full"
            onClick={() =>
              signIn.social({
                provider: "google",
                callbackURL: "/dashboard",
              })
            }
            variant="outline"
          >
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
