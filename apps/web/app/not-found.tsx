import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-full items-center bg-background p-16 text-primary">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-primary">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="font-semibold text-2xl md:text-3xl">
            Sorry, we couldn&apos;t find this page.
          </p>
          <p className="mt-4 mb-8 text-primary">
            But don&apos;t worry, you can find plenty of other things on our
            homepage.
          </p>
          <Button asChild variant="default">
            <Link href="/" rel="noopener noreferrer">
              Back to homepage
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
