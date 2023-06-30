import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const WorkoutContext = createContext();

export const WorkoutProvider = (props) => {
    const [exercises, setExercises] = useState([]);
    const [trainingSessions, setTrainingSessions] = useState([]);

    const fetchExercises = useCallback(async () => {
        const res = await axios.get('https://zti-backend-cl96.onrender.com/api/exercises/');
        setExercises(res.data);
    }, []);

    const fetchTrainingSessions = useCallback(async () => {
        const res = await axios.get('https://zti-backend-cl96.onrender.com/api/trainingsessions/');
        setTrainingSessions(res.data);
    }, []);

    const addExercise = async (exercise) => {
        const res = await axios.post('https://zti-backend-cl96.onrender.com/api/exercises/', exercise);
        if (res.data) {
            fetchExercises();
        }
    };

    const addTrainingSession = async (trainingSession) => {
        const res = await axios.post('https://zti-backend-cl96.onrender.com/api/trainingsessions/', trainingSession);
        if (res.data) {
            fetchTrainingSessions();
        }
    };

    useEffect(() => {
        fetchExercises();
        fetchTrainingSessions();
    }, [fetchExercises, fetchTrainingSessions]);

    return (
        <WorkoutContext.Provider value={{
            exercises,
            trainingSessions,
            fetchExercises,
            fetchTrainingSessions,
            addExercise,
            addTrainingSession
        }}>
            {props.children}
        </WorkoutContext.Provider>
    );
};
