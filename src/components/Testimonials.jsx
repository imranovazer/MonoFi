import '../styles/Testimonials.scss'
import UserCard from './UserCard';
import data from '../data';
import images from '../images';
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
                <div className="Rocket">
                    <img src={images.Rocket} alt="" srcset="" />
                </div>
                {/* <div className="lightUsers">

                </div> */}
                {
                    data.map(data=><UserCard name={data.name} role={data.role} comment={data.comment} ava ={data.ava} />)
                }
                
            </div>

        </div>
    </div>
}
export default Testimonials;