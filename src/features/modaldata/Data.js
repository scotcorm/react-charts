const Data = ({ data }) => {
  const { year, label, completed, cohort, overlaps } = data;

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

export default Data;
