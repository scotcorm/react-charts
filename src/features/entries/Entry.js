const Entry = ({ entry }) => {
  const { year, label, completed, cohort, overlaps } = entry;

  return (
    <p>
      {year}
      {label}
      {completed}
      {cohort}
      {overlaps}
    </p>
  );
};

export default Entry;
