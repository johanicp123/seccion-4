import propTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <div data-testid="test-title">{title}</div>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: propTypes.string.isRequired,
  subTitle: propTypes.string,
};

FirstApp.defaultProps = {
  name: "Alberth Campos",
  subTitle: "no hay subtitulo",
  title: "no hay titulo",
};
