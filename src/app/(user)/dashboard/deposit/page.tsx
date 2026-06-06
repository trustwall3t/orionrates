import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import DepositButton from './DepositButton';
import { getSession } from '@/lib/session';
import Piechart from './Piechart';
const Deposit = async () => {
	const methods = [
		{
			id: 1,
			name: 'Bitcoin',
			image: '/dashboard/btc.svg',
			barcode: '/paymentBarcode/Btc.jpg',
			processingTime: '10 - 20 minutes',
			minDeposit: '100',
			maxDeposit: '1000000',
			network: 'BTC',
			address: 'bc1qrm9w3qgv83gx9plahp0x942tzalvgl6r8e0pcd',
			fee: '0.1%',
			description:
				'Bitcoin is a digital currency that is decentralized and allows users to send and receive payments without intermediaries.',
		},
		{
			id: 2,
			name: 'Ethereum',
			image: '/dashboard/eth.svg',
			barcode: '/paymentBarcode/ETH.jpg',
			processingTime: '10 - 20 minutes',
			minDeposit: '100',
			maxDeposit: '1000000',
			network: 'ERC20',
			address: '0x942A8d8B06C40716Bd1ab58a86a1eCC67F28100F',
			fee: '0.1%',
			description:
				'Ethereum is a blockchain-based platform that allows users to create and manage decentralized applications.',
		},
		{
			id: 3,
			name: 'USDT',
			image: '/dashboard/usdt.svg',
			barcode: '/paymentBarcode/usdterc20.jpg',
			processingTime: '10 - 20 minutes',
			minDeposit: '100',
			maxDeposit: '1000000',
			network: 'ERC20',
			address: '0x942A8d8B06C40716Bd1ab58a86a1eCC67F28100F',
			fee: '0.1%',
			description:
				'USDT is a digital currency that is decentralized and allows users to send and receive payments without intermediaries.',
		},
		{
			id: 4,
			name: 'USDT',
			image: '/dashboard/usdt.svg',
			barcode: '/paymentBarcode/usdttrc20.jpg',
			processingTime: '10 - 20 minutes',
			minDeposit: '100',
			maxDeposit: '1000000',
			network: 'TRC20',
			address: 'TER749sxjeez1aFyArw2KLV6mmPuEq33My',
			fee: '0.1%',
			description:
				'USDT is a digital currency that is decentralized and allows users to send and receive payments without intermediaries.',
		},
		{
			id: 5,
			name: 'Litecoin',
			image: '/dashboard/ltc.svg',
			barcode: '/paymentBarcode/ltc.jpg',
			processingTime: '10 - 20 minutes',
			minDeposit: '100',
			maxDeposit: '1000000',
			network: 'LTC',
			address: 'ltc1qr5lgpxam0ayw6nhmfux6w5rhv07a7sdmwzwjwm',
			fee: '0.1%',
			description:
				'Litecoin is a digital currency that is decentralized and allows users to send and receive payments without intermediaries.',
		},
		{
			id: 6,
			name: 'DogeCoin',
			image: '/dashboard/doge.svg',
			barcode: '/paymentBarcode/doge.jpg',
			processingTime: '10 - 20 minutes',
			minDeposit: '100',
			maxDeposit: '1000000',
			network: 'Doge',
			address: 'D9dpFo63RY7cCJVGF7Y3aDbzTmo33Ux3uC',
			fee: '0.1%',
			description:
				'DogeCoin is a digital currency that is decentralized and allows users to send and receive payments without intermediaries.',
		},
	];
	const session = await getSession();
	return (
		<>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
				<div className='border border-gray-300  rounded-lg max-h-[350px] bg-black'>
					<div className='h-[250px] flex items-center justify-between p-5'>
						<div className='flex flex-col gap-4'>
							<h2 className='text-lg font-semibold capitalize'>
								wallet balance
							</h2>
							<p className='text-2xl font-semibold text-white'>
								$
								{session?.user?.walletBalance
									? session?.user?.walletBalance.toFixed(2)
									: '0.00'}
							</p>
							<Link href='/dashboard/withdraw'>
								<Button
									className='bg-orange-500 border-none hover:bg-orange-600 text-white capitalize'
									variant={'outline'}
								>
									Request withdraw
								</Button>
							</Link>
						</div>
						<div>
							<Piechart
								investmentbalace={String(
									session?.user?.investmentBalance || '0'
								)}
								profit={String(
									session?.user?.profitBalance || '0'
								)}
							/>
						</div>
					</div>
					<div className='flex items-center justify-between border-t border-gray-300 p-4 h-[100px]'>
						<div>
							<h3 className=' font-semibold uppercase'>
								total deposit
							</h3>
							<p className=' text-gray-300'>
								$
								{session?.user?.investmentBalance
									? session?.user?.investmentBalance.toFixed(2)
									: '0.00'}
							</p>
						</div>
						<div>
							<h3 className='uppercase font-semibold '>
								total withdrawals
							</h3>
							<p className=' text-gray-300'>
								$
								{session?.user?.profitBalance
									? session?.user?.profitBalance.toFixed(2)
									: '0.00'}
							</p>
						</div>
					</div>
				</div>
				<div className='bg-black border border-gray-300 p-4 rounded-lg'>
					<h3 className='text-lg font-semibold capitalize'>
						choose method of payment
					</h3>
					<ul className='grid  gap-4 overflow-x-scroll mt-10'>
						{methods.map((method) => (
							<li
								key={method.id}
								className='grid grid-cols-3 items-center gap-5'
							>
								<div className='flex items-center gap-2 '>
									<Image
										src={method.image}
										alt={method.name}
										width={50}
										height={50}
									/>
									<div className='flex flex-col  gap-1 text-sm'>
										<span className='font-semibold text-lg '>
											{method.name}
										</span>
										<span>{method.network}</span>
									</div>
								</div>
								<div className=' flex justify-end'>
									<DepositButton method={method} />
								</div>

								<div className='flex flex-col items-start gap-1 text-sm min-w-[300px]'>
									<span>
										Processng Time:{method.processingTime}
									</span>
									<span>
										Min Deposit:{method.minDeposit} - Max
										Deposit:{method.maxDeposit}
									</span>
									<span>Fee:{method.fee}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Deposit;
