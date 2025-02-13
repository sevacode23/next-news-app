import "../global.scss";

import { MainHeader } from "@/components";

interface IProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function ContentLayout(props: IProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
