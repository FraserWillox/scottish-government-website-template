import type { Metadata } from "next";

import PageContainer from "@/components/layout/PageContainer";
import NextLinkAdapter from "@/components/navigation/NextLinkAdapter";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <PageContainer>
      <h1>Page not found</h1>
      <p>
        If you typed the web address, check it is correct. If you pasted
        the web address, check you copied the whole address.
      </p>
      <p>
        <NextLinkAdapter href="/">Return to the home page</NextLinkAdapter>
      </p>
    </PageContainer>
  );
}
