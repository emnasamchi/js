function addProperty(object, key) {
  object[key] = true;
}

var obj = { test: true };

// addProperty(obj,"qattouss")

// console.log(obj, "before execution");

function deleteProperty(object, key) {
  delete object[key];
}
// deleteProperty(obj, "test");

var obj1 = { name: "emna" };
var key = "hobbies";
var obj2 = {
  1: "musica",
  2: "driving",
};

function addObjectProperty(object1, key, object2) {
  object1[key] = object2;
}

// console.log(obj1, "before");

// addObjectProperty(obj1, key, obj2);

// console.log(obj1, "after");

var o = {
  firstName: "emna",
  lastName: "samchi",
};

console.log(o, "before");

function addFullNameProperty(object) {
  if (object.firstName && object.lastName) {
    object.FullName = object.firstName + " " + object.lastName;
  }
}


addFullNameProperty(o)


console.log(o, "after");
