import { cn } from '@/lib/utils'
import React from 'react'

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface Props {
	size?: TitleSize
	className?: string
	text: string
}

export const Title: React.FC<Props> = ({ size = 'sm', className, text }) => {
	const mapTagBySize = {
		xs: 'h1',
		sm: 'h2',
		md: 'h3',
		lg: 'h4',
		xl: 'h5',
		'2xl': 'h6',
	} as const

	const mapClassNameBySize = {
		xs: 'text-[16px]',
		sm: 'text-[22px]',
		md: 'text-[26px]',
		lg: 'text-[32px]',
		xl: 'text-[40px]',
		'2xl': 'text-[48px]',
	} as const

	return React.createElement(
		mapTagBySize[size],
		{ className: cn(mapClassNameBySize[size], className) },
		text
	)
}
