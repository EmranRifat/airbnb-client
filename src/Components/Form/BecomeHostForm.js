import React, { useContext } from 'react';
import SmallSpinner from '../Spinner/SmallSpinner';
import PrimaryButton from '../Button/PrimaryButton';
import { AuthContext } from '../../contexts/AuthProvider';

const BecomeHostForm = ({handleSubmit}) => {
    const { loading} = useContext(AuthContext);

    return (
        <div>
             <div className='flex justify-center items-center pt-16'>
      <div className='  rounded-md w-full max-w-md  sm:p-10 bg-gray-100 text-gray-900'>
        
        <form
        onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='location' className='block mb-2 text-sm'>
             Location
             </label>
              <input
             
                type='text'
                name='location'
                id='location'
                required
                placeholder='Enter Your location  '
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-base-100 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div>
                <h2 className='text-md mb-2 font-semibold'>Upload Id Document
                </h2>
                <div>
              <label htmlFor="image" className="block mb-2 text-sm">
    
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                // required
              />
            </div>
                <input type="checkbox" name="form" id="" className='mt-2 m-2'  />
              <small className='text-gray-500'>  Agree and continue</small>

              

              </div>

             
            </div>
          </div>

          <div>
            <PrimaryButton
              type='submit'
              classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
            >
            {loading?<SmallSpinner/>:"Submit Request"}
            </PrimaryButton>
          </div>
        </form>
        
        
        
       
      </div>
    </div>
        </div>
    );
};

export default BecomeHostForm;