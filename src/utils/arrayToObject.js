export default function getData(list, id) {
  // getData -> transforms list into an object
  // we take the id and index into the apropriate object
  // overkill but fun
  console.log("lllllllllllloist");

  let object = list.reduce((acc, curr, i) => {
    const { text, id, mainText } = curr;

    acc[id] = {
      text: text,
      mainText: mainText,
    };
    return acc;
  }, {});

  let data = object[id];

  let result = { text: data.text, id: id, mainText: data.mainText };

  return result;
}
