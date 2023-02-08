import '../styles/Testimonials.scss'
import UserCard from './UserCard';
const Testimonials = () => 
{
    return <div className="Testimonials">
        <div className="container forTesti">
            <div className="HeaderText">
                <span className='sub'>testimonials</span>
                <span className="head">
                    Happy Users
                    Make us even happier
                </span>
            </div>

            <div className="usersCards">
                <UserCard name='' role='' comment='' ava ='' />
            </div>

        </div>
    </div>
}
export default Testimonials;