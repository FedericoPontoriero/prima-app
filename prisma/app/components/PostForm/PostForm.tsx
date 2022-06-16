import { ComponentPropsWithoutRef } from 'react';

function PostForm({
	method = 'post',
	...props
}: ComponentPropsWithoutRef<'form'>) {
	return (
		<form method={method} {...props} className='flex flex-col gap-4'>
			<div className='flex flex-col'>
				<label htmlFor='title' className='mb-2 text-center'>
					Title
				</label>
				<input className='p-4' name='title' placeholder='Title'></input>
			</div>
			<div className='mb-4  flex flex-col'>
				<label className='mb-2 text-gray-600' htmlFor='body'>
					Body
				</label>
				<textarea
					className='p-4'
					name='body'
					placeholder='Write something for this post!'
				/>
			</div>
			<button type='submit' className='transition rounded text-blue-700'>
				Create Post
			</button>
		</form>
	);
}

export default PostForm;
