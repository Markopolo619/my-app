"use client";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { LiHTMLAttributes } from "react";

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  todoId: number;
  title: string;
  removeItem: (id: number) => void;
}

export default function ListItem({ todoId, title, removeItem, ...rest }: Props) {
  return (
    <li
      className="card w-96 bg-base-100 shadow-xl"
      {...rest}
    >
      <div className="card-body h-36 grid grid-cols-3 gap-4 content-evenly">
        <p>{title}</p>
        <p></p>
        <button className="deleteButton" onClick={() => removeItem(todoId)}><DeleteForeverIcon sx={{color:"red", fontSize:"2em"}}/></button>
        
      </div>
    </li>
  );
}
