import React from "react";
import { deletebtn, edit } from "../../../../assets/image";
import { useDispatch } from "react-redux";
import { deleteTask, ShowOverlay } from "../../../../redux/Slice/TaskSlice";

function EditDeletebutton({ onDelete }) {
  const img = [
    {
      src: edit,
      action: () => dispatch(ShowOverlay()),
    },
    {
      src: deletebtn,
      action: () => {
        onDelete();
        dispatch(deleteTask(id));
      },
    },
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <ul className="flex gap-4">
        {img.map((_i, index) => (
          <li key={index}>
            <img
              src={_i.src}
              className="w-9 cursor-pointer"
              onClick={_i.action}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditDeletebutton;
