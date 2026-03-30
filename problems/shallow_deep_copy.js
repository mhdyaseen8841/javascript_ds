const original = {
  name: "Yaseen",
  address: {
    city: "Kochi"
  }
};

const copy = { ...original };

copy.name = "Delhi";

console.log(original.name);



// ✅ Definition

// A shallow copy copies only the first level of an object.

// 👉 If the object has nested objects, they are still shared (same reference).

// direct 

// ✅ Definition

// A deep copy creates a completely independent clone, including all nested objects.


// deep copy
// const copy = JSON.parse(JSON.stringify(original));
// const copy = structuredClone(original);