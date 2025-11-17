"use client";

import { Button } from "@workspace/ui/components/button";
import { ButtonGroup } from "@workspace/ui/components/button-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import useCopyToast from "@workspace/ui/custom/use-copy-toast";
import { Bitcoin, CreditCard, Landmark } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import { company_data } from "@/data/company-data";
import { copyBTC, copyEmail, copyETH } from "@/lib/copy-helpers";

export default function PaymentsPage() {
  const { showCopyToast, showToast, toastMessage } = useCopyToast();

  function handleCopyEmail() {
    copyEmail();
    showCopyToast("Payment email copied");
  }
  function handleCopyBTC() {
    copyBTC();
    showCopyToast("BTC address copied");
  }
  function handleCopyETH() {
    copyETH();
    showCopyToast("ETH address copied");
  }
  // todo: add map to location
  // todo: add other payment methods
  return (
    <div className="mx-auto w-full max-w-[95%] bg-background px-5 pt-10 backdrop-blur md:max-w-5xl">
      <h1 className="mb-1 text-center font-extrabold text-3xl text-primary leading-tight md:text-left">
        Payments
      </h1>
      <p className="mb-6 text-center text-lg text-primary md:text-left">
        The ways to make payment for our services to{" "}
        {company_data.map((company) => company.dba).join(", ")}
      </p>
      <div className="flex flex-wrap gap-5 text-primary">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>E-Transfers </CardTitle>
            <CardDescription className="text-destructive text-sm">
              (Preferred Method)
            </CardDescription>
            <CardAction>
              <Landmark className="size-11" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h2>Transfers direct from your bank account</h2>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button className="w-full" onClick={handleCopyEmail} type="button">
              Copy E-Transfer Email
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Interac&reg;</CardTitle>
            <CardAction>
              <Image
                alt="Interac Logo"
                className=""
                height={50}
                priority
                src="/img/logos/interac.svg"
                width={50}
              />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h2>Pay with your debit card at our office</h2>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button className="w-full" type="button">
              Map to our location
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Credit Card</CardTitle>
            <CardAction>
              <CreditCard className="size-11" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h2>Pay with Visa or Mastercard</h2>
            <p>At our office or with the invoice sent through Xero</p>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button className="w-full" type="button">
              Map to our location
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Pay with Cryptocurrency</CardTitle>
            <CardAction>
              <Bitcoin className="size-11" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h2>Payment with Bitcoin or Ethereum</h2>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <ButtonGroup>
              <Button className="w-1/2" onClick={handleCopyBTC} type="button">
                Copy Bitcoin address
              </Button>
              <Button className="w-1/2" onClick={handleCopyETH} type="button">
                Copy Ethereum address
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
      {showToast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="rounded bg-destructive px-6 py-3 font-bold text-white shadow-lg">
            {toastMessage}
          </div>
        </div>
      )}
    </div>
  );
}
