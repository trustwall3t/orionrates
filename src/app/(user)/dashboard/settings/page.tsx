import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import UpdateProfile from '../_components/forms/updateProfile';
import Security from '../_components/forms/Security';
import WithdrawalInformationForm from '../_components/forms/WithdrawalInformationForm';


const Settings =  () => {
	
	return (
		<div>
			<Tabs
				className='w-full'
				defaultValue='personal'
			>
				<div className='w-full overflow-x-auto no-scrollbar'>
					<TabsList className='flex justify-end gap-2 flex-wrap rounded-none items-end w-full h-12 mb-5 min-w-[450px]'>
						<TabsTrigger
							value='personal'
							className='rounded-none'
						>
							Personal Information
						</TabsTrigger>
						<TabsTrigger
							value='security'
							className='rounded-none'
						>
							Security
						</TabsTrigger>
						{/* <TabsTrigger
						value='notification'
						className='rounded-none'
					>
						Notification
					</TabsTrigger> */}
						<TabsTrigger
							value='withdrawal'
							className='rounded-none'
						>
							Update Wallet ID
						</TabsTrigger>
					</TabsList>
				</div>
				<TabsContent value='personal'>
					<UpdateProfile />
				</TabsContent>
				<TabsContent value='security'>
					<Security />
				</TabsContent>
				<TabsContent value='notification'>
					<div>
						<h1>Notification</h1>
					</div>
				</TabsContent>
				<TabsContent value='withdrawal'>
					<WithdrawalInformationForm />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Settings;
