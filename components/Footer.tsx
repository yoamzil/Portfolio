"use client";

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaDownload } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'
import FadeUp from './ui/FadeUp'

const Footer = () => {
	return (
		<footer className='w-full pb-10 md:mb-5' id="contact">
			<div className='flex flex-col items-center'>
				<h1 className='heading lg:max-w-[45vw]'>
					Ready to take <span className='text-purple'>your</span> digital presence to the next level?
				</h1>
				<p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
				<FadeUp duration={1} delay={0.3}>
					<a href='/AmzilYouness.pdf' download>
						<MagicButton
							title="Download My Resume"
							icon={<FaDownload />}
							position='right'
						/>
					</a>
				</FadeUp>
			</div>
			<div className='flex mt-16 md:flex-row flex-col-reverse justify-between items-center gap-6'>
				<p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025</p>
				<div className='flex items-center md:gap-3 gap-6'>
					{socialMedia.map((profile) => (
						<a key={profile.id} href={profile.link} target="_blank" rel="noopener noreferrer" className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
							<Image src={profile.img} alt={profile.id.toString()} width={20} height={20} />
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer