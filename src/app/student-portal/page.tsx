"use client";

import LoginForm from "@/components/LoginForm";
import Header from "@/components/Header";

export default function Portal() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-5">
        Florida Music Lessons
        <br />
        Student Portal
      </h1>
      <LoginForm />
    </>
  );
}
