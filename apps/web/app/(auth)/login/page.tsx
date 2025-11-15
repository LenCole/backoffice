"use client";

import { createAuthClient } from "@workspace/auth/client";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
} from "@workspace/ui/components/field";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const { signIn } = createAuthClient();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="width-full flex max-w-xl flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>Admin Login</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <Field>
                  <Button
                    onClick={() =>
                      signIn.social({
                        provider: "google",
                        callbackURL: "/dashboard",
                      })
                    }
                    type="button"
                    variant="outline"
                  >
                    <Image
                      alt="Google Logo"
                      className="block"
                      height={24}
                      priority
                      src="/img/logos/google-color.svg"
                      width={24}
                    />
                    Login with Google
                  </Button>
                </Field>
                {/* <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" required type="password" />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field> */}
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
        <FieldDescription className="px-6 text-center">
          By clicking continue, you agree to our{" "}
          <Link href="/terms-of-service">Terms of Service</Link> and{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </FieldDescription>
      </div>
    </div>
  );
}
