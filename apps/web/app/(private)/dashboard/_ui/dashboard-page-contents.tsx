"use client";

import { createAuthClient } from "@workspace/auth/client";
import { useRouter } from "next/navigation";

type DashboardPageContentsProps = {
  user: {
    email?: string | null;
    name?: string | null;
  };
};

export default function DashboardPageContents({
  user,
}: DashboardPageContentsProps) {
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
      <button
        className="hover-text-accent-foreground inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 font-medium text-sm ring-offset-background transition-colors hover:bg-accent focus-visible::outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        onClick={handleSignOut}
        type="button"
      >
        Sign Out
      </button>
    </div>
  );
}
