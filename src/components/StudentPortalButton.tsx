"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StudentPortalButton() {
  return (
    <div className="text-center">
      <Link href="/student-portal">
        <Button
          className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:"
          variant="default"
        >
          Student Portal
        </Button>
      </Link>
    </div>
  );
}
