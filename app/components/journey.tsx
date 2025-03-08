import { journeyTitles } from '@/constants/journey';
import React from 'react'

export default function Journey() {
    return (
        <div style={{
            backgroundColor: 'var(--card-bg)',
            color: 'var(--card-text)',
            borderColor: 'var(--border)'
        }} className="w-full p-5 shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Professional Journey</h2>
            <div className="space-y-6">
                {journeyTitles.map((job, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <p className=" text-sm">{job.date}</p>
                        <p className="font-medium">{job.company}</p>
                        <p className="text-gray-500 dark:text-[#b6afaf] text-sm mb-2">{job.address}</p>
                        {/* <ul className="list-disc pl-5 space-y-1">
                            {job.details.map((detail, idx) => (
                                <li key={idx} className="text-gray-700">{detail}</li>
                            ))}
                        </ul> */}
                    </div>
                ))}
            </div>
        </div>
    );
}