import { useParams } from 'react-router-dom';
function Profile() {
  const { nickname } = useParams();

  return <h1> {nickname} Profile Page</h1>;
}

export default Profile;
