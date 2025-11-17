/** ui element to show a toast upon copying data */
"use client";

import { useState } from "react";

export default function useCopyToast() {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  function showCopyToast(message: string): void {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  return { showToast, toastMessage, showCopyToast };
}
