"use client";

import { IErrorPageProps } from "@/types";

export default function FilterError(props: IErrorPageProps) {
  const { error } = props;

  return (
    <div>
      <h2>An error occurred.</h2>
      <p>{error.message}</p>
    </div>
  );
}
