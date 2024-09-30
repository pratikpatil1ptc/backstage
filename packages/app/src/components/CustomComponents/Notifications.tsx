// src/components/MyNewComponent.tsx
import React from 'react';
import JenkinsStagesTable from './JenkinsStagesTable';

const OrcheNotifications = () => {
const jobs = [
    {
      name: ' Job A',
      stages: [
        { name: 'Checkout', status: 'Success' },
        { name: 'Build', status: 'In Progress' },
        { name: 'Test', status: 'Pending' },
      ],
    },
    {
      name: ' Job B',
      stages: [
        { name: 'Checkout', status: 'Success' },
        { name: 'Deploy', status: 'Success' },
      ],
    },
    {
      name: ' Job C',
      stages: [],
    },
    // Add more jobs as needed
  ];

  
    return (
        <div>
            <h1>Notifications!</h1>
            <JenkinsStagesTable jobs={jobs} />
        </div>
    );
};

export default OrcheNotifications;
