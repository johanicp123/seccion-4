import propTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
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
