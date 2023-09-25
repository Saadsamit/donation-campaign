import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Donationcard = ({data}) => {
    const {id,img,title,tag,textColor,bgColor,bgBtn} = data
  return (
    <Link to={`/donate/${id}`}>
        <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={img} className='w-full'
        />
      </figure>
      <div style={{backgroundColor: bgColor}} className="card-body p-4 rounded-b-2xl">
        <div>
        <p style={{color: textColor, backgroundColor: bgBtn}} className="grow-0 inline-block py-1 px-2 rounded-md text-sm font-medium">{tag}</p>
        </div>
        <h2 style={{color: textColor}} className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
    </Link>
  );
};
Donationcard.propTypes = {
  data: PropTypes.object.isRequired
}
export default Donationcard;
