import React from "react";
import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Home = () => {
  const { repo, loading, selectedRepo } = useGlobalContext();
  if (loading) {
    return (
      <section className="section">
        <h4>Loading....</h4>
      </section>
    );
  }
  if (repo.length < 1) {
    return (
      <section className="section">
        <h4>No repository match your search term. Please try again</h4>
      </section>
    );
  }

  const formatDate = (timestamp) => {
    const createdDate = new Date(timestamp);
    return createdDate.toLocaleString();
  };

  return (
    <section className="section-center grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repo?.map((singleRepo) => {
        const {
          id,
          owner: { avatar_url: avatar, login },
          name,
          html_url: url,
          language,
          created_at: created,
        } = singleRepo;

        return (
          <article
            key={id}
            className="single-repo bg-white p-4 shadow-md rounded-md"
          >
            {avatar && (
              <img
                src={avatar}
                alt={login}
                className="w-full mb-4 cursor-pointer"
                onClick={() => selectedRepo(id)}
              />
            )}
            <div className="flex justify-between items-center">
              <Link to={`/repo/${id}`} onClick={() => selectedRepo(id)}>
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
              </Link>
              <button className="like-btn">
                <BsHandThumbsUp />
              </button>
            </div>
            <div>
              <p className="text-sm text-gray-500">Language: {language}</p>
              <p className="text-sm text-gray-500">
                Created At: {formatDate(created)}
              </p>
            </div>
            <a
              href={url}
              target="_self"
              className="text-blue-500 hover:underline"
            >
              View Repo
            </a>
          </article>
        );
      })}
    </section>
  );
};

export default Home;
