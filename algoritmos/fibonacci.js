const fibonacci = (N) =>
  Array.from({ length: N }).reduce(
    (acc, _curr, index) => acc.concat(index > 1 ? acc[index - 1] + acc[index - 2] : index),
    []
  );
