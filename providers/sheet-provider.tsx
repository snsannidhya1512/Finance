"use client";

import { useEffect, useState } from "react";
import { NewAccountSheet } from "../features/accounts/components/new-account-sheet";
import { useMountedState } from "react-use";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  return (
    <>
      <NewAccountSheet />
    </>
  );
};
