
import { FaStar, FaStarHalf } from "react-icons/fa";



function Rating({value }) {

    return (
        <div className='rating text-[#ffc107]'>
                   { value >= 1
                    ? <FaStar />
                    : value >= 0.5
                        ? <FaStarHalf />
                        :  <FaStar />
                    }

            { value >= 2
                    ? <FaStar />
                    : value >= 1.5
                        ? <FaStarHalf />
                        :  <FaStar />
                    }

            { value >= 3
                    ? <FaStar />
                    : value >= 2.5
                        ? <FaStarHalf />
                        :  <FaStar />
                    }

            { value >= 4
                    ? <FaStar />
                    : value >= 3.5
                        ? <FaStarHalf />
                        : <FaStar />
                    }

            { value >= 5
                    ? <FaStar />
                    : value >= 4.5
                        ? <FaStarHalf />
                            :  <FaStar />
                    }
        </div>
        
    )
}

export default Rating
