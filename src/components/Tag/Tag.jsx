import "./Tag.scss";

const Tag = (props) => {
  return <span className={`tag`}>{props.children}</span>;
};

export default Tag;
