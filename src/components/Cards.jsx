import React from 'react'
import PropTypes from 'prop-types'
import SingleCard from './SingleCard'

const Cards = props => {
    return (
        // <!-- Card Blog -->

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">            
            {/* <!-- Grid --> */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((elem) => (
                    <SingleCard />
                ))}
            </div>

            {/* <!-- End Grid --> */}

        </div>
        // <!-- End Card Blog -->
    )
}

Cards.propTypes = {}

export default Cards