import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import {useTheme} from '@mui/material';



const LastCommit = ({ owner, repo }) => {
  const theme = useTheme();
  const [commitDate, setCommitDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCommit = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const lastCommit = data[0];
        const commitDate = lastCommit.commit.author.date;
        setCommitDate(commitDate);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCommit();
  }, [owner, repo]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Typography
        variant="subtitle2"
        align="center"
        fontFamily={'Raleway, sans-serif'}
        sx={{paddingTop: '10px', fontSize: 12}}
        color={theme.palette.background.on}
    >
        Last Update: {new Date(commitDate).toLocaleString()}
    </Typography>

  );
};

export default LastCommit;