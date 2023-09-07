import Loader from "@/components/loading";
import dynamic from "next/dynamic";

function Dashboard() {
  const Peta = dynamic(() => import("@/components/peta"), {
    ssr: false,
    loading: () => <Loader />,
  });

  return <Peta />;
}

export default Dashboard;
