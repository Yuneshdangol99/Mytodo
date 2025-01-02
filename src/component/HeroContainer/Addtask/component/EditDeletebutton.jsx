import React from "react";
import { deletebtn, edit } from "../../../../assets/image";

function EditDeletebutton({ onDelete }) {
  const img = [edit, deletebtn];
  return (
    <div>
      <ul className="flex gap-4">
        {img.map((_i, index) => (
          <li key={index}>
            <img
              src={_i}
              alt=""
              className="w-9 cursor-pointer"
              onClick={index === 1 ? onDelete : null}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EditDeletebutton;
