import React from 'react'

function SkillPreview({ resumeInfo }) {
    return (
        <div className='my-6'>
            <h2 className='text-sm font-bold mb-2 text-center' style={{ color: resumeInfo?.themeColor }}>Skills</h2>
            <hr style={{ borderColor: resumeInfo?.themeColor }} />
            <div className='grid grid-cols-2 gap-3 my-4'>
                {resumeInfo?.skills.map((skill, index) => (
                    <div key={index} className='flex justify-between items-center'>
                    <h2 className='text-xs font-normal' style={{ color: resumeInfo?.themeColor }}>{skill?.name}</h2>
                        <div className='h-2 w-[120px] bg-gray-200'>
                            <div className='h-full' style={{ width: `${skill?.rating}%`, backgroundColor: resumeInfo?.themeColor }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillPreview