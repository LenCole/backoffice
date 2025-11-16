"use client";

import type { Session } from "@workspace/auth";
import { createAuthClient } from "@workspace/auth/client";
import { Button } from "@workspace/ui/components/button";
import { useRouter } from "next/navigation";

export default function DashboardPageContents({
  user,
}: {
  user: Session["user"];
}) {
  const authClient = createAuthClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div>
      <p>Dashboard</p>
      <p>Welcome, {user.name || user.email}</p>
      <Button
        className="hover-text-accent-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent focus-visible::outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        onClick={handleSignOut}
        type="button"
        variant="default"
      >
        Sign Out
      </Button>
    </div>
  );
}
