"use client";
import React from "react";
import { Button } from "./ui/button";
import { signInWithOAuth } from "../app/actions";

const SignInWithGoogleButton = () => {
  return (
    <Button

      type="button"
      variant="outline"
      className="w-full"
      onClick={(e) => {
        e.preventDefault();
        signInWithOAuth()
      }}
    >
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;
