import React from 'react';
import course from '../../../Assets/img/course.png'
import email from '../../../Assets/img/guide.png'
import guide from '../../../Assets/img/guide.png'
import HelpDeskCard from './HelpDeskCard';

const HelpDesk = () => {
    const helpDatas = [
        {
            id: 1,
            taitle: 'Courses',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            icon: course,
        },
        {
            id: 2,
            taitle: 'Guide',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            icon: email,
        },
        {
            id: 3,
            taitle: 'Email Templates',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            icon: guide,
        }
    ]
    return (
        <div>
            <div className='py-5 bg-base-100'>
            <div className='mx-auto max-w-7xl '>
                <h1 className='text-4xl font-serif font-bold text-center p-3'>Help Desk.</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                    {
                        helpDatas.map(helpData => <HelpDeskCard
                            key={helpData.id}
                            helpData={helpData}
                        ></HelpDeskCard>)
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default HelpDesk;