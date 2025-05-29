"use client";

import { projects } from '@/data'
import FadeUp from './ui/FadeUp'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
	return (
		<div className='py-20' id="projects">
			<FadeUp>
				<h1 className='heading'>
					A small selection of recent {' '}
					<span className='text-purple'>Projects</span>
				</h1>
			</FadeUp>
			<div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
				{projects.map(({
					id,
					title,
					des,
					img,
					iconLists,
					link,
				}, index) => (
					<FadeUp key={id} delay={index * 0.3} duration={0.7}>
						<div className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
							<PinContainer title={link} href={link}>
								<div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[27rem] h-[30vh] mb-10'>
									<div className='relative w-full h-full overflow-hidden rounded-3xl bg-[#13162d]'>
										<img src="/bg.png" alt="Background pattern" loading="lazy" />
									</div>
									<img
										src={img}
										alt={`Project screenshot: ${title}`}
										className="z-10 absolute bottom-0 h-full w-full rounded-3xl"
										loading="lazy"
									/>
								</div>
								<h1 className='font-bold lg:text-1xl md:text-xl text-base line-clamp-1'>
									{title}
								</h1>
								<p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
									{des}
								</p>
								<div className='flex items-center justify-between mt-7 mb-3'>
									<div className='flex items-center'>
										{iconLists.map((icon, index) => (
											<div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{
												transform: `translateX(-${5 * index * 2}px)`
											}}>
												<img src={icon} alt={`Technology icon ${index + 1}`} className='p-2' loading="lazy" />
											</div>
										))}
									</div>
									<div className='flex justify-center items-center'>
										<p className='flex lg:text-xl md:text-xs text-sm text-purple'>Open</p>
										<FaLocationArrow className='ms-3' color="#CBACF9" aria-hidden="true" />
									</div>
								</div>
							</PinContainer>
						</div>
					</FadeUp>
				))}
			</div>
		</div>
	)
}

export default RecentProjects