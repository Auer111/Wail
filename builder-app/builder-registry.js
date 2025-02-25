"use client";
import { builder, Builder } from "@builder.io/react";
import { ClerkHeader } from "./components/Clerk/Header";
import Counter from "./components/Counter/Counter";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(Counter, {
  name: "Counter",
});

Builder.registerComponent(ClerkHeader, {
  name: "ClerkHeader",
});
