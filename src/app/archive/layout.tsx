interface IProps {
  archive: React.ReactNode;
  latest: React.ReactNode;
}

export default function ArchiveLayout(props: IProps) {
  const { archive, latest } = props;

  return (
    <div>
      <h1>News Archive</h1>

      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
