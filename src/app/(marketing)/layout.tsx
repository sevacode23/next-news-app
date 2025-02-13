import "../global.scss";

interface IProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function MarketingLayout(props: IProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
