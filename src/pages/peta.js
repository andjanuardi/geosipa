import Loader from "@/components/loading";
import dynamic from "next/dynamic";

export default function Home() {
  const Dashboard = dynamic(() => import("@/components/dashboard"), {
    ssr: false,
    loading: () => <Loader />,
  });
  return <Dashboard />;
}
