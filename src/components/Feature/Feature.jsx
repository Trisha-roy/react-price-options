import PropTypes from 'prop-types';
import { ImCheckboxChecked } from "react-icons/im";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><ImCheckboxChecked className='text-green-400 mx-2'></ImCheckboxChecked>{feature}</p>
        </div>
    );
};
Feature.propTypes={
    feature:PropTypes.string
}
export default Feature;