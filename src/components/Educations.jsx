import Button from './Button';
import '../styles/Educations.css';

export default function Educations({
  education,
  editEducation,
  setEditEducation,
  showEducations,
  selectedEducationId,
  setSelectedEducationId,
  id,
  value,
  setValue,
  schoolTillDateActive,
  setSchoolTillDateActive,
}) {
  return (
    <ul className="educations-list">
      <div className="education-details">
        <li>{education.school}</li>
        <div className="button-container">
          <Button
            name="Edit"
            id={id}
            value={value}
            setValue={setValue}
            editEducation={editEducation}
            setEditEducation={setEditEducation}
            showEducations={showEducations}
            setSelectedEducationId={setSelectedEducationId}
            schoolTillDateActive={schoolTillDateActive}
            setSchoolTillDateActive={setSchoolTillDateActive}
          />
          <Button
            name="Delete"
            id={id}
            value={value}
            setValue={setValue}
            education={education}
            editEducation={editEducation}
            setEditEducation={setEditEducation}
            showEducations={showEducations}
            setSelectedEducationId={setSelectedEducationId}
            selectedEducationId={selectedEducationId}
            schoolTillDateActive={schoolTillDateActive}
            setSchoolTillDateActive={setSchoolTillDateActive}
          />
        </div>
      </div>
    </ul>
  );
}
