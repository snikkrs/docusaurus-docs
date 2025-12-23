import React from "react";
import OriginalEditThisPage from "@theme-original/EditThisPage";
import { useActiveDocContext } from "@docusaurus/plugin-content-docs/client";

export default function EditThisPage(props) {
  const docContext = useActiveDocContext();

  // Safety check
  if (!docContext) {
    return <OriginalEditThisPage {...props} />;
  }

  const { activeVersion } = docContext;

  // Only show edit link for "current" (Unreleased)
  if (activeVersion?.name !== "current") {
    return null;
  }

  return <OriginalEditThisPage {...props} />;
}
