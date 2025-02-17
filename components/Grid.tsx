"use client";

import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import FadeUp from './ui/FadeUp'

const Grid = () => {
	return (
		<section id='about'>
			<FadeUp duration={1} delay={1}>
				<BentoGrid>
					{gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
						<BentoGridItem
							id={id}
							key={id}
							title={title}
							description={description}
							className={className}
							img={img}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							spareImg={spareImg}
						/>
					))}
				</BentoGrid>
			</FadeUp>
		</section>
	)
}

export default Grid