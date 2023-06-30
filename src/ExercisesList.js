import React, { useEffect, useContext } from 'react';
import { WorkoutContext } from './WorkoutContext';


const ExercisesList = () => {
  const { exercises, fetchExercises } = useContext(WorkoutContext);

  useEffect(() => {
    fetchExercises();
  }, [fetchExercises]);

  return (
      <div>
        <h2>Exercises</h2>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Sets</th>
            <th>Rep Range</th>
          </tr>
          </thead>
          <tbody>
          {exercises.map((exercise) => (
              <tr key={exercise.exercise_id}>
                <td>{exercise.name}</td>
                <td>{exercise.sets}</td>
                <td>{exercise.rep_range}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default ExercisesList;
