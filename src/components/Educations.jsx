import Button from './Button';
import '../styles/Educations.css';

export default function Educations({
  education,
  editEducation,
  setEditEducation,
}) {
  return (
    <ul className="educations-list">
      <div className="education-details">
        <li>{education.school}</li>
        <div className="button-container">
          <Button
            name="Edit"
            editEducation={editEducation}
            setEditEducation={setEditEducation}
          />
          <Button name="Delete" />
        </div>
      </div>
    </ul>
  );
}
