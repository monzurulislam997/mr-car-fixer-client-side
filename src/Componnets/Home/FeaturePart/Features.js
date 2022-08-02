import React from 'react'
import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'
import FeaturesData from './FeaturesData'
export default function Features() {
    const features = [
        {
            _id: 1,
            name: 'Max Speed',
            img: image1,
            feature1: "400/km",
            feature2: "Hydrolic Breck"
        },
        {
            _id: 2,
            name: 'Clean WorkShop',
            img: image2,
            feature1: "Wash delivery within 3 hours!!",
            feature2: "Low budget"
        },
        {
            _id: 3,
            name: 'Better Quality',
            img: image3,
            feature1: "Premium quality",
            feature2: "Graunteed work"
        }
    ]
    return (
        <>
            <h1 className="text-center text-teal-700 font-bold text-3xl mb-10 md:-mt-32">Speacial Features</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                {
                    features.map(feature => <FeaturesData key={feature._id} feature={feature} />)

                }
            </div>
        </>
    )
}
