"use client";
import React, { useState } from "react";
import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';
//import { useClerk } from '@clerk/nextjs'; // for accessing Clerk context hooks (optional for extra control)

export const ClerkHeader = () => {
  return (
    <header>
      <SignedOut>
        {/* SignIn and SignUp buttons for users not logged in */}
        <SignInButton className="button primary mr-2" />
        <SignUpButton className="button primary" />
      </SignedOut>

      <SignedIn>
        {/* User button for logged in users */}
        <UserButton />
      </SignedIn>
    </header>
  );
};


export default ClerkHeader;
