import React from "react";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1em"
  },
  name: {
    fontSize: "2em"
  },
  description: {
    fontSize: "0.8em"
  }
};

const ListBody = ({ name, description }) => (
  <div style={styles.wrapper}>
    <span style={styles.name}>{name}</span>
    <span style={styles.description}>{description}</span>
  </div>
);

export default ListBody;
