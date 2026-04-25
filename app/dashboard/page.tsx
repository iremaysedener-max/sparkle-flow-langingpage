import { Suspense } from "react";
import DashboardApp from "@/components/dashboard/SparkleFlow";

export default function DashboardPage() {
  return (
    <Suspense fallback={null}>
      <DashboardApp />
    </Suspense>
  );
}
