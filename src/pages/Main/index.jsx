import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

// Import react-icons
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";

// Import Styles
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";

const Main = () => {
  const [newRepository, setNewRepository] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // DidMount (get)
  useEffect(() => {
    const repoStorage = localStorage.getItem("repos");

    if (repoStorage) {
      setRepositories(JSON.parse(repoStorage));
    }
  }, []);

  // DidUpdate (put)
  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositories));
  }, [repositories]);

  // Submit
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const submit = async () => {
        setLoading(true);
        setAlert(null);

        try {
          if (newRepository === "") {
            throw new Error("Você precisa indicar um repositório!");
          }

          const response = await api.get(`repos/${newRepository}`);

          const hasRepository = repositories.find(
            (repo) => repo.name === newRepository
          );

          if (hasRepository) {
            throw new Error("Repositório Duplicado!");
          }

          const data = {
            name: response.data.full_name,
          };

          setRepositories([...repositories, data]);
          setNewRepository("");
        } catch (error) {
          setAlert(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      submit();
    },
    [newRepository, repositories]
  );

  // Input
  const handleInputChange = (e) => {
    setNewRepository(e.target.value);
    setAlert(null);
  };

  // Delete
  const handleDelete = useCallback(
    (repoName) => {
      const find = repositories.filter((repo) => repo.name !== repoName);

      setRepositories(find);
    },
    [repositories]
  );

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        GitHub Repositories
      </h1>

      <Form onSubmit={handleSubmit} error={alert}>
        <input
          type="text"
          placeholder="Add Repositories"
          value={newRepository}
          onChange={handleInputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#fff" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>

            <Link
              to={`/repository/${encodeURIComponent(repo.name)}`}
              state={{ from: `${encodeURIComponent(repo.name)}` }}
            >
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default Main;
