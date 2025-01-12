import { cn } from '@/lib/utils'
import { User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui'
import Container from './container'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn('border border-b ', className)}>
			<Container className='flex item-center justify-between py-8'>
				{/* Логотип */}
				<div className='flex items-center gap-4'>
					<Image src='/logo.png' alt='Лого' width={35} height={35} />
					<div className=''>
						<h1 className='uppercase font-black	text-2xl'>Next-pizza</h1>
						<p className='text-sm text-gray-400 leading-3'>
							вкусней уже не будет
						</p>
					</div>
				</div>

				{/* Правая часть с кнопками*/}
				<div className='flex items-center gap-3'>
					<Button className='flex items-center gap-1' variant='outline'>
						<User size={16} />
						Войти
					</Button>
					<div>
						<Button className='group relative'>
							<b>520 P</b>
							<span className='h-full w-[1px] bg-white/30 mx-3' />
							<div className=''></div>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	)
}
