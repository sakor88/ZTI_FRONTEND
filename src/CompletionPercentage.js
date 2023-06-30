import React, { useContext } from 'react';
import { WorkoutContext } from './WorkoutContext';

const CompletionPercentage = () => {
    const { trainingSessions } = useContext(WorkoutContext);
    const totalSessions = trainingSessions.length;

    const completedSessions = trainingSessions.filter(session => session.completed).length;

    const completionPercentage = totalSessions ? (completedSessions / totalSessions) * 100 : 0;

    return (
        <div>
            <h2>Training Completion Percentage</h2>
            <p id={"completion"}>{completionPercentage.toFixed(2)}%</p>
        </div>
    );
};

export default CompletionPercentage;
