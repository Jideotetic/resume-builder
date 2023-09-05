import Button from './Button';
import '../styles/Educations.css';

export default function Educations({
  edit,
  setEdit,
  value,
  setValue,
  revealEducations,
  addEducation,
  setAddEducation,
  editEducation,
  setEditEducation,
}) {
  console.log(value.educations);
  const educationList = value.educations.map((education) => {
    return (
      <div
        key={education.school}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <li>{education.school}</li>
        <Button
          name="Edit"
          editEducation={editEducation}
          setEditEducation={setEditEducation}
        />
        <Button name="Delete" />
      </div>
    );
  });
  return (
    <>
      <div>
        <ul>{educationList}</ul>
        <Button
          name="Add Education"
          edit={edit}
          setEdit={setEdit}
          revealEducations={revealEducations}
          addEducation={addEducation}
          setAddEducation={setAddEducation}
        />
      </div>
    </>
  );
}
