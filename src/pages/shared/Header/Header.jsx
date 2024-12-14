import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center mt-9'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='mt-5'>Journalism Without Fear or Favour</p>
            <p className='text-xl mt-2 mb-6'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;