// import React, { useState, useContext, useEffect } from "react";
// import axios from "axios";

// const AppContext = React.createContext();

// const baseURL = "https://api.github.com/users/socheema/repos";

// const AppProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [repo, setRepo] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [text, setText] = useState("");
//   const [selected, setSelected] = useState(null);

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSearchTerm(text); // Update searchTerm here, not text
//   };

//   const fetchRepos = async (url) => {
//     setLoading(true);
//     try {
//       const response = await axios.get(url);
//       const { data } = response;
//       if (data) {
//         setRepo(data);
//       } else {
//         setRepo([]);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setLoading(false);
//   };

//   const selectedRepo = (id) => {
//     let repos;
//     repos = repo.find((repository) => repository.id === id);
//     setSelected(repos);
//   };

//   useEffect(() => {
//     fetchRepos(baseURL);
//   }, []);

//   useEffect(() => {
//     if (!searchTerm) return;
//     const searchURL = `${baseURL}?q=${searchTerm}`;
//     fetchRepos(searchURL);
//   }, [searchTerm]);

//   return (
//     <AppContext.Provider
//       value={{
//         repo,
//         loading,
//         handleChange,
//         handleSubmit,
//         searchTerm,
//         text,
//         selectedRepo,
//         selected,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

export { AppContext, AppProvider };
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const baseURL = "https://api.github.com/users/socheema/repos";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);

  const handleChange = (e) => {
    const searchText = e.target.value;
    setText(searchText);
    setSearchTerm(searchText);
    fetchRepos(`${baseURL}?q=${searchText}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(text); // Update searchTerm here, not text
  };
  const fetchRepos = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const { data } = response;
      if (data) {
        // Filter repositories based on the search term
        const filteredRepos = data.filter((repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setRepo(filteredRepos);
      } else {
        setRepo([]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const selectedRepo = (id) => {
    let repos;
    repos = repo.find((repository) => repository.id === id);
    setSelected(repos);
  };

  useEffect(() => {
    fetchRepos(baseURL);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    const searchURL = `${baseURL}?q=${searchTerm}`;
    fetchRepos(searchURL);
    console.log(fetchRepos(searchURL));
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        repo,
        loading,
        handleChange,
        handleSubmit,
        searchTerm,
        text,
        selectedRepo,
        selected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

// export { AppContext, AppProvider };
