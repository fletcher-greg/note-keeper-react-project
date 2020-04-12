export default function getData(list, id) {
  // getData -> transforms list into an object
  // we take the id and index into the apropriate object
  // overkill but fun

  let object = list.reduce((acc, curr, i) => {
    const { text, id } = curr;

    acc[id] = {
      text: text,
    };
    return acc;
  }, {});

  let data = object[id];

  let result = { text: data.text, id: id };

  return result;
}