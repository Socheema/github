import { useGlobalContext } from "../context";
import React from "react";
const SinglePage = () => {
  const { selected } = useGlobalContext(); 
  if (!selected) {
    return <div>Loading...</div>;
  }
  const {
    id,
    owner: { avatar_url: avatar, login },
    name,
    html_url: url,
    language,
    created_at: created,
  } = selected;
const dateFormate = (timestamp)=>
{
  const createdDate = new Date(timestamp);
  return createdDate.toLocaleString();
}
  return (
    <div className="flex">
      <aside className="w-1/3">
        <img src={avatar} alt={login} className="w-16 h-16 rounded-full" />
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">{login}</p>
        <p className="text-gray-500">{language}</p>
        <p className="text-gray-500">{dateFormate(created)}</p>
        <a href={url} className="text-blue-500 hover:underline">
          View on GitHub
        </a>
      </aside>
    </div>
  );
};
export default SinglePage;
