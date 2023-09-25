import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
const MyCard = ({data}) => {
    const {id,img,title,tag,donate,textColor,bgColor,bgBtn} = data
  return (
    <div className="card card-side md:flex-row flex-col bg-base-100 shadow-xl overflow-hidden">
      <figure className="md:w-5/12 w-full md:rounded-s-xl md:rounded-none rounded-xl">
        <img
          src={img}
          className="h-full"
        />
      </figure>
      <div style={{background: bgColor}} className="card-body">
        <div>
        <p style={{color: textColor, background: bgBtn}} className='inline-block py-1 px-2 rounded-md text-sm'>{tag}</p>
        </div>
        <h2 className="card-title text-[#0B0B0B] text-2xl font-semibold">{title}</h2>
        <p style={{color: textColor}} className='text-white text-base font-semibold'>${donate}.00</p>
        <div className="card-actions">
          <Link to={`/donate/${id}`} style={{background: textColor}} className="btn text-white text-lg font-semibold">View Details</Link>
        </div>
      </div>
    </div>
  );
};
MyCard.propTypes = {
    data: PropTypes.object.isRequired
  }
export default MyCard;
