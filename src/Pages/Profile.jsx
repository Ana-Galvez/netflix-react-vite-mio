import Nav from '../Components/Nav';
import '../styles/Profile.css';
import avatar1 from '../../public/images/Netflix-avatar.png'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import { auth } from '../features/firebase';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profile'>
      <Nav />
      <div className="profile__principal">
        <h1>Editar perfil</h1>
        <div className="profile__info">
          <img src={avatar1} alt="avatar" />
          <div className="profile__info--detalles">
            <h2>{user.email}</h2>
            <button onClick={()=>{auth.signOut()} }>Cerrar sesión</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile