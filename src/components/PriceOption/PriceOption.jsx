import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {price,name,features}=option;
    return (
        <div className='bg-blue-500 text-white font-bold rounded-md shadow-lg p-5'>
            <h2 className='text-center'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-5'>{name}</h4>
            <div className='pl-6'>
            {
                features.map((feature,index)=><Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-green-600 mt-3 w-full py-3 rounded-lg hover:bg-green-700'>Buy Now</button>
        
        </div>
    );
};

PriceOption.propTypes={
    option:PropTypes.object
}

export default PriceOption;