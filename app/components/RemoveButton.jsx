"use client"

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveButton = ({ id }) => {
  const router = useRouter();
  const removeTopic = async() => {
    const confirmed = confirm('Are you sure? Topic will be deleted')
    if(confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      if(res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <button onClick={removeTopic} className="text-red-400">
        <HiOutlineTrash size={24} />
    </button>
  )
}

export default RemoveButton