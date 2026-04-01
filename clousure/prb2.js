function secret() {
  let data = "hidden";

  return {
    get: () => data,
    set: (val) => (data = val),
  };
}

const s = secret();

console.log(s.get())