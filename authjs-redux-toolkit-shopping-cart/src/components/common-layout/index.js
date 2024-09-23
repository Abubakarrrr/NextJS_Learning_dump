import Loading from "@/app/loading";
import { auth } from "@/auth";
import ReduxProvider from "@/provider";
import { Suspense } from "react";

async function CommonLayout({ children }) {
  const getSession = await auth();

  return (
    <ReduxProvider getSession={getSession}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ReduxProvider>
  );
}

export default CommonLayout;
