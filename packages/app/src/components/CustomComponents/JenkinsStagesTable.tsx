// src/components/JenkinsJobsTable.tsx
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Collapse,
  IconButton,
  Paper,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

interface Stage {
  name: string;
  status: string;
}

interface Job {
  name: string;
  stages: Stage[];
}

interface JenkinsJobsTableProps {
  jobs: Job[];
}

const JenkinsJobsTable: React.FC<JenkinsJobsTableProps> = ({ jobs }) => {
  const [open, setOpen] = useState<number | null>(null);

  const handleRowClick = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Job Name</TableCell>
            <TableCell>Current Stage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job, index) => (
            <React.Fragment key={job.name}>
              <TableRow hover onClick={() => handleRowClick(index)}>
                <TableCell>
                  <IconButton aria-label="expand row" size="small">
                    {open === index ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                  </IconButton>
                </TableCell>
                <TableCell>{job.name}</TableCell>
                <TableCell>{job.stages[job.stages.length - 1]?.name || 'No stages'}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                  <Collapse in={open === index} timeout="auto" unmountOnExit>
                    <div style={{ padding: '16px' }}>
                      <h4>Stages:</h4>
                      {job.stages.length > 0 ? (
                        job.stages.map((stage) => (
                          <div key={stage.name}>
                            <strong>{stage.name}</strong>: {stage.status}
                          </div>
                        ))
                      ) : (
                        <p>No stages available.</p>
                      )}
                    </div>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JenkinsJobsTable;
