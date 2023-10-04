
import Proptypes from 'prop-types'
import { BsBookmark,BsFillShareFill} from 'react-icons/bs';
import {AiOutlineStar,AiFillStar,AiFillEye} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Rating from'react-rating'
const NewsDetails = ({news}) => {
    console.log(news)
    const {author,title,thumbnail_url: image_url,details,total_view,rating,_id}=news
    const {img,name,published_date}=author;
    const {number}=rating

    return (
        <div>
              <div className='flex justify-between px-5 bg-[#F3F3F3]'>
                   <div className='flex gap-3 '> 
                        <img className='rounded-full w-10' src={img} alt="" />
                        <div>
                            <h2>{name}</h2>
                            <h2>{published_date}</h2>
                        </div>
                   </div>
                   <div className='flex gap-3 mt-3'>
                    <BsBookmark></BsBookmark>
                    <BsFillShareFill></BsFillShareFill>
                   </div>  
              </div>
              <h1 className='pl-5 pt-5 font-bold text-xl' >{title}</h1>
              <img className='w-[518px] h-[262px] mx-auto' src={image_url} alt="" />
              {
                details.length>200?<div><p  className='text-sm text-[gray] p-5'>{details.slice(0,200)}</p> <Link to={`/news/${_id}`} className='text-red-700 p-5 text-sm'>Read more</Link></div>:
                <p className='text-sm text-[gray] p-5'>{details}</p>
              }
             

    <div className='p-5 flex justify-between'>
        
            <div className='flex items-center justify-center gap-2'>
            <Rating
                emptySymbol={<AiOutlineStar></AiOutlineStar>}
                fullSymbol={<AiFillStar></AiFillStar>}
                initialRating={number}
                readonly
                />
                <p>{number}</p>
            </div>
                        
                 <div className='flex items-center gap-2'>
                 <AiFillEye></AiFillEye>
                  <p>{total_view}</p>
                </div>

    </div>

        </div>
    );
};
NewsDetails.propTypes={
    news:Proptypes.object.isRequired
}
export default NewsDetails;