interface IProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function NewsLayout(props: IProps) {
  const { children, modal } = props;

  return (
    <>
      {modal}
      {children}
    </>
  );
}
