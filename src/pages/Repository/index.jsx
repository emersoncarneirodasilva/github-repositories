import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// import API
import api from "../../services/api";

// Import Styles
import {
  Container,
  Owner,
  Loading,
  BackButton,
  IssuesList,
  PageActions,
  FilterList,
} from "./styles";

// Import Icons
import { FaArrowLeft } from "react-icons/fa";

const Repository = () => {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters] = useState([
    { state: "all", labal: "All", active: true },
    { state: "open", labal: "Open", active: false },
    { state: "closed", labal: "Closed", active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  const location = useLocation();
  const { from } = location.state;

  // Get Issues
  useEffect(() => {
    const load = async () => {
      const nameRepository = decodeURIComponent(from);

      const [repositoryData, issuesData] = await Promise.all([
        api.get(`repos/${nameRepository}`),
        api.get(`repos/${nameRepository}/issues`, {
          params: {
            state: filters.find((filter) => filter.active).state,
            per_page: 5,
          },
        }),
      ]);

      setRepository(repositoryData.data);
      setIssues(issuesData.data);
      setLoading(false);
    };

    load();
  }, [filters, from]);

  // Change Issues Pages
  useEffect(() => {
    const loadIssue = async () => {
      const nameRepository = decodeURIComponent(from);

      const response = await api.get(`/repos/${nameRepository}/issues`, {
        params: {
          state: filters[filterIndex].state,
          page,
          per_page: 5,
        },
      });

      setIssues(response.data);
    };

    loadIssue();
  }, [filterIndex, filters, from, page]);

  const handlePage = (action) => {
    setPage(action === "back" ? page - 1 : page + 1);
  };

  const handleFilter = (index) => {
    setFilterIndex(index);
  };

  if (loading) {
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#0d2636" size={30} />
      </BackButton>

      <Owner>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <h1>{repository.name}</h1>
        <p>{repository.description}</p>
      </Owner>

      <FilterList active={filterIndex}>
        {filters.map((filter, index) => (
          <button key={index} type="button" onClick={() => handleFilter(index)}>
            {filter.labal}
          </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url} target="_blank" rel="noreferrer">
                  {issue.title}
                </a>
                {issue.labels.map((label) => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button
          type="button"
          onClick={() => handlePage("back")}
          disabled={page === 1}
        >
          Back
        </button>
        <button type="button" onClick={() => handlePage("next")}>
          Next
        </button>
      </PageActions>
    </Container>
  );
};

export default Repository;
