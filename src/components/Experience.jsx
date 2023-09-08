import Button from './Button';
import '../styles/Experiences.css';

export default function Experience({
  id,
  experience,
  selectedExperienceId,
  setSelectedExperienceId,
  editExperience,
  setEditExperience,
  showExperience,
  value,
  setValue,
}) {
  return (
    <ul className="experience-list">
      <div className="experience-details">
        <li>{experience.company}</li>
        <div className="button-container">
          <Button
            name="Edit"
            id={id}
            value={value}
            setValue={setValue}
            editExperience={editExperience}
            setEditExperience={setEditExperience}
            showExperience={showExperience}
            setSelectedExperienceId={setSelectedExperienceId}
            selectedExperienceId={selectedExperienceId}
          />
          <Button
            name="Delete"
            id={id}
            value={value}
            setValue={setValue}
            experience={experience}
            editExperience={editExperience}
            setEditExperience={setEditExperience}
            showExperience={showExperience}
            setSelectedExperienceId={setSelectedExperienceId}
            selectedExperienceId={selectedExperienceId}
          />
        </div>
      </div>
    </ul>
  );
}
