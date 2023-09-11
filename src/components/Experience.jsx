import Button from './Button';
import '../styles/Experience.css';

export default function Experience({
  id,
  experience,
  editExperience,
  setEditExperience,
  showExperience,
  value,
  setValue,
  companyTillDateActive,
  setCompanyTillDateActive,
  setSelectedExperienceId,
  selectedExperienceId,
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
            companyTillDateActive={companyTillDateActive}
            setCompanyTillDateActive={setCompanyTillDateActive}
            setSelectedExperienceId={setSelectedExperienceId}
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
            companyTillDateActive={companyTillDateActive}
            setCompanyTillDateActive={setCompanyTillDateActive}
            setSelectedExperienceId={setSelectedExperienceId}
            selectedExperienceId={selectedExperienceId}
          />
        </div>
      </div>
    </ul>
  );
}
