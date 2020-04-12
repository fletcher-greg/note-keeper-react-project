import { types } from "./types";
export function reducer(state, event) {
  const {
    open,
    back,
    update,
    add_note,
    remove,
    fetch_data,
    fetch_init,
    changed_note,
  } = types;
  const { type } = event;

  switch (type) {
    case open:
      return { ...state, view: "detail", status: "editing", id: event.id };

    case back:
      return { ...state, view: "list" };
    case update:
      const { newText } = event;

      const { id, input } = newText;
      const { listData } = state;
      let newList = listData.map((note, i) => {
        if (i === id) {
          return { text: input, id: i };
        }
        return note;
      });

      return { ...state, listData: newList, status: "updating", view: "list" };
    case add_note:
      return {
        ...state,
        listData: [
          ...state.listData,
          { text: "placeholder", id: state.listData.length },
        ],
        status: "updating",
      };

    case remove: {
      let deleted = false;
      const { id } = event;
      // TODO
      // fix logic for this hack
      // hack -> check for id. Find and add undefined. then all subsequent todos have id updated
      // if(deleted) return {...note, id: i -1}
      // then filter out all undefined values
      // ugh
      return {
        ...state,
        listData: state.listData
          .map((note, i) => {
            if (id === i) {
              deleted = true;
              return;
            }
            if (deleted) {
              return { ...note, text: note.text, id: i - 1 };
            }

            if (!deleted) return note;
          })
          .filter(Boolean),
        view: "list",
        status: "updating",
      };
    }
    case fetch_data:
      return { ...state, listData: event.data.listData, status: "idle" };
    case fetch_init:
      return { ...state, status: "pending" };
    case changed_note:
      console.log("changinginadfasjdlk");
      return { ...state, state: "idle" };
    default:
      return state;
  }
}
